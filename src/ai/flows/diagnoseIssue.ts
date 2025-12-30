'use server';

import { ai } from '../genkit';
import { z } from 'zod';
import { DiagnosisOutputSchema, type Diagnosis } from './schemas';

const diagnoseIssueFlow = ai.defineFlow(
  {
    name: 'diagnoseIssue',
    inputSchema: z.string().describe('Una descrizione del problema idraulico inviata dall\'utente.'),
    outputSchema: DiagnosisOutputSchema,
  },
  async (issueDescription) => {
    const prompt = `Sei un assistente AI cordiale e disponibile per PlumbQuick, un servizio idraulico professionale. Il tuo nome è 'Pipey'.
    Il tuo compito è analizzare la descrizione di un problema idraulico fornita dall'utente e fornire una diagnosi preliminare e dei consigli.

    Problema dell'utente: "${issueDescription}"

    Fornisci la tua risposta in un formato JSON strutturato con le seguenti tre chiavi: "preliminaryDiagnosis", "recommendedAction" e "disclaimer".

    - preliminaryDiagnosis: Basandoti sulla descrizione dell'utente, quali sono le cause più probabili del problema? Spiegalo in termini semplici e di facile comprensione.
    - recommendedAction: Cosa dovrebbe fare l'utente adesso? Se si tratta di una soluzione semplice che può tentare in sicurezza (es. usare uno sturalavandini per un piccolo ingorgo), fornisci istruzioni chiare e passo dopo passo. Per qualsiasi problema complesso, che coinvolga elettricità, gas o che potrebbe causare danni idrici significativi se eseguito in modo errato, DEVI raccomandare vivamente di chiamare un professionista di PlumbQuick. Non suggerire azioni che richiedono attrezzi specializzati.
    - disclaimer: Includi SEMPRE il seguente disclaimer: "Ricorda, questa è una diagnosi preliminare generata dall'AI. Per la tua sicurezza e per garantire che il problema venga risolto correttamente, consigliamo vivamente di programmare un'ispezione professionale con PlumbQuick. Siamo qui per aiutarti!"

    Non restituire alcun testo al di fuori dell'oggetto JSON strutturato.
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
      throw new Error('Impossibile ottenere una risposta dal modello AI.');
    }
    return output;
  }
);

export async function diagnoseIssue(issueDescription: string): Promise<Diagnosis> {
  return diagnoseIssueFlow(issueDescription);
}
