export const slugify = (text: string) =>
  text
    .split("")
    .map((char) =>
      char === char.toLowerCase() ? char : `-${char.toLowerCase()}`
    )
    .join("");
