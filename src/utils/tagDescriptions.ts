const TAG_DESCRIPTIONS: Record<string, string> = {
  transmissions:
    "Original arguments, built from the ground up. Observations on human nature, incentives, and the systems people quietly run their lives on.",
  deconstructions:
    "Teardowns of systems I didn't build. Books, historical decisions, and financial mechanisms taken apart to find out what's actually load-bearing.",
};

export function getTagDescription(tag: string, tagName?: string): string {
  return (
    TAG_DESCRIPTIONS[tag.toLowerCase()] ??
    `All the articles with the tag "${tagName ?? tag}".`
  );
}

export default TAG_DESCRIPTIONS;