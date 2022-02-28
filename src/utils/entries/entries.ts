import { Entries } from './entries.types';

export function entries<TEntries>(obj: TEntries): Entries<TEntries> {
  return Object.entries(obj) as Entries<TEntries>;
}
