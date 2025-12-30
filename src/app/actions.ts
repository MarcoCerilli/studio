'use server';

import {
  diagnoseIssue
} from '@/ai/flows/diagnoseIssue';
import type { Diagnosis } from '@/ai/flows/schemas';

export async function getAIDiagnosis(
  issueDescription: string
): Promise<{ success: true; data: Diagnosis } | { success: false; error: string }> {
  if (!issueDescription.trim()) {
    return { success: false, error: 'Per favore, descrivi il tuo problema idraulico.' };
  }

  try {
    const result = await diagnoseIssue(issueDescription);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI diagnosis failed:', error);
    return {
      success: false,
      error: 'Impossibile ottenere una diagnosi AI. Il servizio potrebbe essere temporaneamente non disponibile. Riprova più tardi.',
    };
  }
}
