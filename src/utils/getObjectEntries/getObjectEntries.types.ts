export type Entries<TEntries> = {
  [KEntries in keyof TEntries]: [KEntries, TEntries[KEntries]];
}[keyof TEntries][];
