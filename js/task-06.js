const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.dataset.length);
input.addEventListener("blur", () => {
    input.classList.remove('valid','invalid')
    input.value.length===dataLength?input.classList.add('valid'):input.classList.add('invalid');
});
