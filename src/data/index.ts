import { teramo } from "./universities/teramo";
import { palermo } from "./universities/palermo";
import { placeholders } from "./universities/placeholders";
import type { University } from "./schema";

export const universities: University[] = [teramo, palermo, ...placeholders];

export function getUniversityById(id: string): University | undefined {
  return universities.find(u => u.id === id);
}
