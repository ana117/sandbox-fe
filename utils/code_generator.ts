export function generateCodeSnippet(path: string): string {
  return Deno.readTextFileSync(path);
}
