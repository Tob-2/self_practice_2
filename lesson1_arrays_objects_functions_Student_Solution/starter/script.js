const quotes = []
let nextId = 1
function addQuote(content, author) {
    const add = document.createElement('p')
    add.setAttribute("content", "author")
}

function deleteQuote(id) {
    let del = document.removeChild("id")
}

function updateQuote(id, content, author) {
     const parentElement = document.getElementById('html');
    const oldChild = document.getElementById('id');
    const newChild = document.createElement('p');
    newChild.textContent = 'content';
    parentElement.replaceChild(newChild, oldChild);
}

function getAllQuotes() {
    let gett = document.querySelectorAll("quote-list")
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()
// TODO: Delete 1 quote using deleteQuote()
// TODO: Update 1 quote using updateQuote()
// TODO: Print all quotes using getAllQuotes()
