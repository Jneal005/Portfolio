'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBlueprintAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Wand2, LoaderCircle } from 'lucide-react';

const formSchema = z.object({
  description: z.string().min(10, {
    message: 'Please describe your website in at least 10 characters.',
  }),
});

type BlueprintFormProps = {
  setGeneratedHtml: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
};

export function BlueprintForm({ setGeneratedHtml, setIsLoading, isLoading }: BlueprintFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedHtml('');
    try {
      const html = await generateBlueprintAction(values.description);
      setGeneratedHtml(html);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      toast({
        variant: 'destructive',
        title: 'Error Generating Blueprint',
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g., A modern portfolio for a photographer, with a gallery and contact page."
                  rows={5}
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
          {isLoading ? (
            <>
              <LoaderCircle className="animate-spin" />
              Weaving...
            </>
          ) : (
            <>
              <Wand2 />
              Generate Blueprint
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
