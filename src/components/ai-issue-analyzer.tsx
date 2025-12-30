'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Lightbulb, LoaderCircle, Sparkles, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAIDiagnosis } from '@/app/actions';
import type { Diagnosis } from '@/ai/flows/schemas';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Separator } from './ui/separator';

const FormSchema = z.object({
  issue: z.string().min(10, {
    message: 'Please describe your issue in at least 10 characters.',
  }).max(500, {
    message: 'Please keep your description under 500 characters.'
  }),
});

export function AIssueAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<Diagnosis | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      issue: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setDiagnosis(null);
    const result = await getAIDiagnosis(data.issue);
    setIsLoading(false);

    if (result.success) {
      setDiagnosis(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: result.error,
      });
    }
  }

  return (
    <div className="mx-auto mt-8 max-w-3xl">
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="issue"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'My kitchen sink is draining very slowly and there's a gurgling sound.'"
                        className="min-h-[100px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analyze My Issue
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
         <Card className="mt-6 animate-pulse">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <LoaderCircle className="h-5 w-5 animate-spin text-primary"/>
                    <span>Pipey is thinking...</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="h-4 w-1/3 rounded bg-muted"></div>
                <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-muted"></div>
                    <div className="h-3 w-5/6 rounded bg-muted"></div>
                </div>
                 <div className="h-4 w-1/4 rounded bg-muted"></div>
                 <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-muted"></div>
                    <div className="h-3 w-full rounded bg-muted"></div>
                    <div className="h-3 w-3/4 rounded bg-muted"></div>
                </div>
            </CardContent>
         </Card>
      )}

      {diagnosis && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Pipey's Diagnosis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-base">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-lg">
                <Sparkles className="h-5 w-5 text-primary" />
                Preliminary Diagnosis
              </h3>
              <p className="mt-2 text-muted-foreground">{diagnosis.preliminaryDiagnosis}</p>
            </div>
            
            <Separator />

            <div>
              <h3 className="flex items-center gap-2 font-semibold text-lg">
                <Lightbulb className="h-5 w-5 text-accent" />
                Recommended Action
              </h3>
              <p className="mt-2 text-muted-foreground whitespace-pre-wrap">{diagnosis.recommendedAction}</p>
            </div>

            <Alert variant="destructive" className="bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800">
                <TriangleAlert className="h-4 w-4 !text-orange-500" />
                <AlertTitle className="text-orange-800 dark:text-orange-300">Important Disclaimer</AlertTitle>
                <AlertDescription className="text-orange-700 dark:text-orange-400">
                    {diagnosis.disclaimer}
                </AlertDescription>
            </Alert>

          </CardContent>
        </Card>
      )}
    </div>
  );
}
