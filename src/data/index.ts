import { teramo } from "./universities/teramo";
import { palermo } from "./universities/palermo";
import { cassino } from "./universities/cassino";
import { univpm } from "./universities/univpm";
import { unibo } from "./universities/unibo";
import type { University } from "./schema";

export const universities: University[] = [teramo, palermo, cassino, univpm, unibo];

export function getUniversityById(id: string): University | undefined {
  return universities.find(u => u.id === id);
}
