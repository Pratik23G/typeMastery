const slugify = (title) => {
    let cleanedTitle = title.trim().toLowerCase().replace(/ /g, "-");
    return cleanedTitle;
};
let testLine = " Hello World My-First Post ";
console.log(slugify(testLine));
