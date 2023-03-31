let valueElement=document.querySelector('#value')
let value=0
const decrementButton=document.querySelector('button[data-action="decrement"]')
const incrementButton=document.querySelector('button[data-action="increment"]')


decrementButton.addEventListener('click', () => {
  value -= 1;
valueElement.textContent = value
});
incrementButton.addEventListener('click', () => {
  value += 1;
  valueElement.textContent = value
});
