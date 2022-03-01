import { Entries } from './getObjectEntries.types';

export function getObjectEntries<TEntries>(obj: TEntries): Entries<TEntries> {
  return Object.entries(obj) as Entries<TEntries>;
}
