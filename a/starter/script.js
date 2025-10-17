const quotes = []
let nextId = 1
function addQuote(content, author) {
   const newq = {nextId,content, author}
   quotes.push(newq)
   nextId++
   return newq
}

function deleteQuote(id) {
    
}

function updateQuote(id, content, author) {
  quotes[id].content = content
  quotes[id].author = author
  return quotes
}

function getAllQuotes() {
  let newallq = [...quotes]
  return newallq
}





console.log(addQuote('Stay hungry, stay foolish.', 'Steve Jobs'))
console.log(addQuote('Do or do not. There is no try.', 'Yoda'))
console.log(
  addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
)


console.log(getAllQuotes())



// Test your functions below
// TODO: Add 3 quotes using addQuote()
// TODO: Delete 1 quote using deleteQuote()
// TODO: Update 1 quote using updateQuote()
// TODO: Print all quotes using getAllQuotes()
