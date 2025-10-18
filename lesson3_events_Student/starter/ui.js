// Lesson 3 - Events Starter
import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';
let quotes = []

// Select DOM elements
const quoteList = document.getElementById('quote-list')
const form = document.getElementById('quoteForm')
const contentInput = document.getElementById('content')
const authorInput = document.getElementById('author')
const idInput = document.getElementById('quoteId')
const randomBtn = document.getElementById('randomBtn')
const randomDisplay = document.getElementById('randomQuoteDisplay')

function createQuoteElement(quote) {
    const pele = document.createElement('div')
    pele.setAttribute('id', `${idInput}`)
    const pe1 = document.createElement('p')
    pe1.textContent = `${contentInput}`
    const pe2 = document.createElement('p')
    pe2.textContent = `${authorInput}`
    pele.appendChild(pe1)
    pele.appendChild(pe2)
    
    const editButt = document.createElement('button')
    editButt.textContent = "edit"
    editButt.setAttribute("id", "editbutt")

    const deleteButt = document.createElement('button')
    editButt.textContent = "edit"
    deleteButt.setAttribute("id", "deletebutt")
    
    pele.appendChild(editButt)
    pele.appendChild(deleteButt)
    quoteList.appendChild(pele)
    
    const delbut = document.getElementById('deletebutt')
    delbut.addEventListener("click", () => {
        deleteQuote(id)
    })
    




  // a quote element example
  //<section id="quote-list">
  //  <div data-id="1">
  //    <p>Confidence comes from discipline and training</p>
  //    <p>Robert</p>
  //    <button class="edit-btn" data-id="1">
  //      Edit
  //    </button>
  //    <button class="delete-btn" data-id="1">
  //      Delete
  //    </button>
  //  </div>
  // </section>
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
   const qlist = document.getElementById('quote-list')
   let cquote = createQuoteElement(quote)
   qlist.appendChild(cquote)
}
function updateQuoteInDOM(quote) {
  const parent = document.getElementById(div > `${data-id}`)

}
function deleteQuoteFromDOM(id) {
  const delq = quoteList.querySelector(`[data-id="${id}"]`)
  delq.remove()
}
function renderQuotes() {
  quoteList.innerHTML = ''
  const allq = getAllQuotes()
  allq.forEach(addQuoteToDOM)
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value;

  if (content && author) {
    if (id) {
      
      const updatedQuote = updateQuote(id, content, author);
      if (updatedQuote) {
        updateQuoteInDOM(updatedQuote);
      }
    } else {
      
      const newQuote = addQuote(content, author);
      addQuoteToDOM(newQuote);
    }

    
    form.reset();
    idInput.value = ''; 

   
    showRandomQuote();
  } else {
    alert('Please fill in both content and author.');
  }
});

function showRandomQuote() {
  const q = getRandomQuote();

  if (q) {
    randomDisplay.textContent = `${quote.content}, ${quote.author}`;
  } else {
    randomDisplay.textContent = 'No quotes to show';
  }
}
// Event listeners for form submission, edit, and delete clicks
