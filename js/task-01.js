// const totalLi=[]=>
// console.log(document);
// const ulCatRef = document.querySelector('#categories');
// console.log(ulCatRef)
// const lastItemCatLength = ulCatRef.children.length;
// console.log(lastItemCatLength)
const listLengthCategories = document.querySelectorAll('.item').length
console.log(`Number of categories: ${listLengthCategories}`)

const listOfCategories = document.querySelector('#categories')
const items = listOfCategories.querySelectorAll('.item')

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsLength = item.querySelectorAll('li').length;

console.log(`
Category: ${title}
Elements: ${elementsLength}`
    );
});

