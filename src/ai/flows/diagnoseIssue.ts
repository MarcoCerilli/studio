'use server';

import { ai } from '../genkit';
import { DiagnosisOutputSchema, type Diagnosis } from './schemas';

const diagnoseIssueFlow = ai.defineFlow(
  {
    name: 'diagnoseIssue',
    inputSchema: z.string().describe('A user-submitted description of a plumbing issue.'),
    outputSchema: DiagnosisOutputSchema,
  },
  async (issueDescription) => {
    const prompt = `You are a helpful and friendly AI assistant for PlumbQuick, a professional plumbing service. Your name is 'Pipey'.
    Your task is to analyze the user's description of a plumbing problem and provide a preliminary diagnosis and advice.

    User's issue: "${issueDescription}"

    Please provide your response in a structured JSON format with the following three keys: "preliminaryDiagnosis", "recommendedAction", and "disclaimer".

    - preliminaryDiagnosis: Based on the user's description, what are the most likely causes of the problem? Explain it in simple, easy-to-understand terms.
    - recommendedAction: What should the user do next? If it's a simple fix they can safely attempt (e.g., using a plunger for a minor clog), provide clear, step-by-step instructions. For any issue that is complex, involves electricity, gas, or could cause significant water damage if done incorrectly, you MUST strongly recommend calling a professional from PlumbQuick. Do not suggest actions that require specialized tools.
    - disclaimer: ALWAYS include the following disclaimer: "Please remember, this is an AI-generated preliminary diagnosis. For your safety and to ensure the problem is resolved correctly, we strongly recommend scheduling a professional inspection with PlumbQuick. We're here to help!"

    Do not output any text outside of the structured JSON object.
    `;

    const llmResponse = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.5-flash',
      output: {
        format: 'json',
        schema: DiagnosisOutputSchema,
      },
    });

    const output = llmResponse.output;
    if (!output) {
      throw new Error('Failed to get a response from the AI model.');
    }
    return output;
  }
);

export async function diagnoseIssue(issueDescription: string): Promise<Diagnosis> {
  return diagnoseIssueFlow(issueDescription);
}
