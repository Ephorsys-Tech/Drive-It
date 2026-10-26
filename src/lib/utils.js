/**
 * Combines multiple class names or conditional class expressions
 */
export function cn(...inputs) {
  return inputs
    .flat(Infinity)
    .filter(Boolean)
    .join(' ');
}
