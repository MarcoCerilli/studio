'use server';

import {
  diagnoseIssue
} from '@/ai/flows/diagnoseIssue';
import type { Diagnosis } from '@/ai/flows/schemas';

export async function getAIDiagnosis(
  issueDescription: string
): Promise<{ success: true; data: Diagnosis } | { success: false; error: string }> {
  if (!issueDescription.trim()) {
    return { success: false, error: 'Please describe your plumbing issue.' };
  }

  try {
    const result = await diagnoseIssue(issueDescription);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI diagnosis failed:', error);
    return {
      success: false,
      error: 'Failed to get an AI diagnosis. The service may be temporarily unavailable. Please try again later.',
    };
  }
}
