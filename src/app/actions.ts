'use server';

import { generateWebsiteBlueprint } from '@/ai/flows/generate-website-blueprint';

export async function generateBlueprintAction(description: string): Promise<string> {
  if (!description || description.length < 10) {
    throw new Error("Please provide a more detailed description (at least 10 characters).");
  }

  try {
    const result = await generateWebsiteBlueprint({ description });
    if (result.layout) {
      return result.layout;
    }
    throw new Error("Failed to generate blueprint from AI. The response was empty.");
  } catch (error) {
    console.error("Error generating blueprint:", error);
    // Re-throwing a more generic error to the client
    throw new Error("An unexpected error occurred while generating the website blueprint. Please try again later.");
  }
}
