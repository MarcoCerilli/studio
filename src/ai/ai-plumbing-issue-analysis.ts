// This is an AI plumbing issue analyzer flow.

'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing plumbing issues described by users.
 *
 * The flow takes a text description of a plumbing issue as input and returns a preliminary diagnosis and suggested solutions.
 *
 * @exports analyzePlumbingIssue - The main function to analyze plumbing issues.
 * @exports PlumbingIssueInput - The input type for the analyzePlumbingIssue function.
 * @exports PlumbingIssueOutput - The output type for the analyzePlumbingIssue function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the plumbing issue analysis flow.
const PlumbingIssueInputSchema = z.object({
  issueDescription: z
    .string()n    .describe(
      'A detailed description of the plumbing issue, including any relevant symptoms, observations, and history.'
    ),
});
export type PlumbingIssueInput = z.infer<typeof PlumbingIssueInputSchema>;

// Define the output schema for the plumbing issue analysis flow.
const PlumbingIssueOutputSchema = z.object({
  diagnosis: z.string().describe('A preliminary diagnosis of the plumbing issue.'),
  suggestions: z
    .string()
    .describe(
      'Suggested solutions or necessary steps to address the plumbing issue, based on the diagnosis.'
    ),
});
export type PlumbingIssueOutput = z.infer<typeof PlumbingIssueOutputSchema>;

// Define the main function to analyze plumbing issues.
export async function analyzePlumbingIssue(
  input: PlumbingIssueInput
): Promise<PlumbingIssueOutput> {
  return analyzePlumbingIssueFlow(input);
}

// Define the prompt for the plumbing issue analysis.
const plumbingIssuePrompt = ai.definePrompt({
  name: 'plumbingIssuePrompt',
  input: {schema: PlumbingIssueInputSchema},
  output: {schema: PlumbingIssueOutputSchema},
  prompt: `You are an AI assistant for providing preliminary plumbing diagnoses.

  Based on the user's description of their plumbing issue, provide a diagnosis and suggest possible solutions or necessary steps.

  Issue Description: {{{issueDescription}}}
  `,
});

// Define the Genkit flow for analyzing plumbing issues.
const analyzePlumbingIssueFlow = ai.defineFlow(
  {
    name: 'analyzePlumbingIssueFlow',
    inputSchema: PlumbingIssueInputSchema,
    outputSchema: PlumbingIssueOutputSchema,
  },
  async input => {
    const {output} = await plumbingIssuePrompt(input);
    return output!;
  }
);
