//  const meatElement = document.querySelectorAll(".meat")
// // meatElement.forEach((ele) => console.log(ele))
// const a = Array.from(meatElement).filter(ele => ele.textContent.toLowerCase().includes("soup"))
// console.log(a)

const nnode = document.getElementById("soup")
const b = nnode.firstElementChild
b.nextElementSibling
console.log(b.nextElementSibling)
