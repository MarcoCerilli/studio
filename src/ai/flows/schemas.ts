import { z } from 'zod';

export const DiagnosisOutputSchema = z.object({
  preliminaryDiagnosis: z
    .string()
    .describe(
      'A short, clear explanation of the likely issue(s), written in simple language.'
    ),
  recommendedAction: z
    .string()
    .describe(
      'Suggested next steps. Provide simple, safe DIY instructions for minor issues, or strongly recommend calling a professional for complex/dangerous ones.'
    ),
  disclaimer: z
    .string()
    .describe(
      'A standard disclaimer that this is an AI diagnosis and not a substitute for a professional inspection.'
    ),
});

export type Diagnosis = z.infer<typeof DiagnosisOutputSchema>;
