const buttonsArray = document.querySelectorAll('.button');
const operatorsArray = document.querySelectorAll('.operator');

const input = document.getElementById('input');
const submit = document.getElementById('submit');

const allClear = document.getElementById('AC')
const deleteNumber = document.getElementById('DE')

let numbersArray = []

buttonsArray.forEach(n => {
    n.addEventListener('click', () => {
        numbersArray.push(n.textContent)
        input.textContent = numbersArray.join('')
    })
})

operatorsArray.forEach(n => {
    n.addEventListener('click', () => {
        numbersArray.push(n.textContent)
        input.textContent = numbersArray.join('')
    })
})


deleteNumber.addEventListener('click', () => {
    numbersArray.pop()
    input.textContent = numbersArray.join('')
})

allClear.addEventListener('click', () => {
    numbersArray = ['']
    input.textContent = ''
    output.textContent = ''
})


submit.addEventListener('click', () => {
    output.textContent = eval(input.textContent)
    input.textContent = output.textContent;
    numbersArray = [output.textContent]
})


