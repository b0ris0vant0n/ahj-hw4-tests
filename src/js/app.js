import typeOfCard from './cards.js'
import validate from './validating.js'

const input = document.querySelector('input')

input.addEventListener('input', () => {
  const type = typeOfCard(input.value)
  if (type) {
    document.querySelector(type).classList.remove('cdisabled')
  } else {
    document.querySelector('.card').classList.add('cdisabled')
  }
});

const submit = document.getElementById('submitform')

submit.addEventListener('click', () => {
    console.log('click')
    const result = document.getElementById('result')
    result.textContent = ''
    validate(input.value) ? result.textContent = 'Valid' : result.textContent = 'Not valid'
});