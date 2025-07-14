/**
 * 
 * @param name - The name of the person to greet
 * @example
 * greet("World") // returns "Hello, World!"
 * @returns A greeting message for the specified name
 */
export const greet = (name: string): string => {
  return `Greetings, ${name}!`;
}