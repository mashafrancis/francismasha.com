const removeDuplicate = <T, _>(arr: T[]): T[] =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const fancyId = (): string => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2, 9);
  return `_${head}${tail}`;
};

export { removeDuplicate, slugify, fancyId };
