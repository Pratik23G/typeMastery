const slugify = (title: string): string => {
  let cleanedTitle: string = title.trim().toLowerCase().replace(/\s+/g, "-");
  return cleanedTitle;
};

/* let testLine: string = " Hello World My-First Post ";

console.log(slugify(testLine)); */

const input = document.getElementById("title-input") as HTMLInputElement;

const button = document.getElementById("clean-btn");

const result = document.getElementById("result");

button?.addEventListener("click", () => {
  if (!input || !result) return;
  let inpuValue = input.value;
  const slugValue = slugify(inpuValue);
  result.textContent = slugValue;
});
