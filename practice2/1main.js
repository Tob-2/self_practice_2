const a = document.getElementById('appetizer')

const c = document.getElementById('vegan')
const b = document.createElement('li')
b.className = 'meat'
b.textContent = 'cow'
a.appendChild(b)

console.log(a)