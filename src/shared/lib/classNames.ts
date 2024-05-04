type Mods = Record<string, Boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([cls]) => cls),
  ].join(" ");
}
