const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((el) => {
  console.log(`Category: ${el.children[0].innerHTML}`);

  console.log(`Elements: ${el.children[1].children.length}`);
});
