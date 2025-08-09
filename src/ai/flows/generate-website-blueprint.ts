// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Generates a basic website layout from a user's description.
 *
 * - generateWebsiteBlueprint - A function that generates a website blueprint.
 * - GenerateWebsiteBlueprintInput - The input type for the generateWebsiteBlueprint function.
 * - GenerateWebsiteBlueprintOutput - The return type for the generateWebsiteBlueprint function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteBlueprintInputSchema = z.object({
  description: z
    .string()
    .describe('The description of the desired website layout.'),
});
export type GenerateWebsiteBlueprintInput = z.infer<
  typeof GenerateWebsiteBlueprintInputSchema
>;

const GenerateWebsiteBlueprintOutputSchema = z.object({
  layout: z
    .string()
    .describe('The generated basic website layout in HTML format.'),
});
export type GenerateWebsiteBlueprintOutput = z.infer<
  typeof GenerateWebsiteBlueprintOutputSchema
>;

export async function generateWebsiteBlueprint(
  input: GenerateWebsiteBlueprintInput
): Promise<GenerateWebsiteBlueprintOutput> {
  return generateWebsiteBlueprintFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWebsiteBlueprintPrompt',
  input: {schema: GenerateWebsiteBlueprintInputSchema},
  output: {schema: GenerateWebsiteBlueprintOutputSchema},
  prompt: `You are an expert web designer.

You will generate a basic website layout in HTML format based on the user's description.

Description: {{{description}}}

Layout:
`,
});

const generateWebsiteBlueprintFlow = ai.defineFlow(
  {
    name: 'generateWebsiteBlueprintFlow',
    inputSchema: GenerateWebsiteBlueprintInputSchema,
    outputSchema: GenerateWebsiteBlueprintOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
