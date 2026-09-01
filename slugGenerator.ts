const slugify = (title: string): string => {
  let cleanedTitle: string = title.trim().toLowerCase().replace(/ /g, "-");
  return cleanedTitle;
};

let testLine: string = " Hello World My-First Post ";

console.log(slugify(testLine));
