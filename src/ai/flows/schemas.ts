import { z } from 'zod';

export const DiagnosisOutputSchema = z.object({
  preliminaryDiagnosis: z
    .string()
    .describe(
      'Una spiegazione breve e chiara del/i probabile/i problema/i, scritta in un linguaggio semplice.'
    ),
  recommendedAction: z
    .string()
    .describe(
      'Passaggi successivi suggeriti. Fornire istruzioni fai-da-te semplici e sicure per problemi minori, o raccomandare vivamente di chiamare un professionista per quelli complessi/pericolosi.'
    ),
  disclaimer: z
    .string()
    .describe(
      'Un disclaimer standard che indica che si tratta di una diagnosi AI e non sostituisce un\'ispezione professionale.'
    ),
});

export type Diagnosis = z.infer<typeof DiagnosisOutputSchema>;
