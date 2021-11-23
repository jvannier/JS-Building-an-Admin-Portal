    //Code from 1.Review the Starter Code and 2.Review the API Documentation
// async function main() {
//     let response = await fetch ('http://localhost:3000/api-docs.html#operation/listBooks', {
//         method:'GET',
// });

// let books = await response.json();
// console.log(books);


//     let response = await fetch ('http://localhost:3000/api-docs.html#operation/updateBook', {
//         method:'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//                 },
//         body: JSON.stringify ({
//        "id":3,
//       "title": "Legends of Arathrae"
//               }),

//          });
// let updatedBook = await response.json();
// console.log(updatedBook);

async function update(){

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(upgradeBook)

function upgradeBook(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let Inputquantity = document.createElement('input')
   Inputquantity.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', function() {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: Inputquantity.value
            })
        })
    })

    li.append(Inputquantity, saveButton)

    root.append(li)
}

}

update();