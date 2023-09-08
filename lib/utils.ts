import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// useful for dynamic css classes (based on states)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
