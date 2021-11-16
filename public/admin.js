
// RETRIEVE LIST OF BOOKS FROM THE SERVER 
async function main(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(renderBook)}

// ^ This was already in the index.js so that was cool ctrl c + ctrl v xd, a little bit underneath as well just to get started

function renderBook(book){
    let root=document.querySelector('#root')
// THIS IS TO DISPLAY TITLE
    let li=document.createElement('li')
    li.textContent = book.title
// QUANTITY OF BOOKS RIGHT HERE
    let quantityInput=document.createElement('input')
    quantityInput.value=book.quantity
// BUTTON THAT SAVES THE WHOLE OPERATION
    let saveButton=document.createElement('button')
    saveButton.textContent='save'

// EVENT LISTENER SO THAT THE BROWSER REACTS WHEN YOU CLICK 
saveButton.addEventListener('click', () => 
    { 
    fetch ('http://localhost:3001/updateBook', 
    {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify ({ 
        id:book.id,
        quantity: quantityInput.value
                })
            }
            )
        }
        )
    li.append(quantityInput, saveButton)
    root.append(li)       
}
main();
