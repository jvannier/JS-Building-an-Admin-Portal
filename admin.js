
async function main() {
    let response = await fetch ('http://localhost:3000/api-docs.html#operation/listBooks', {
        method:'GET',
});

// let listBooks = await response.json();
// console.log('books');

//     let response = await fetch ('http://localhost:3000/api-docs.html#operation/updateBook', {
//         method:'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
// },

// // body: JSON.stringify ({
// //     "id":3,
// //     "title": "Legends of Arathrae"
// // }),


// // let updateBook = await response.json();
// // console.log('updateBook');

// }


function displayBook(book) {
    let root = document.querySelectorAll('#root')
   
    let li = document.createElement('li')
    li.textContent= book.title

    let inputQuantity = document.createElement('input')
    inputQuantity.value = book.inputQuantity

    let saveSubmit = document.createElement('submit')
    saveSubmit.textContent = "Save"

    saveButton.addEventListener('click', () => {
        fetch ('http://localhost:3000/api-docs.html#operation/updateBook', {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
    },

    body: JSON.stringify ({
        id:"book.id",
        quantity:"inputQuantity.value"
    })
})

})

li.append(inputQuantity, saveButton)

root.append(li)
}

    }

main();

