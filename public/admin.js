async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    const listOfBooks = document.createElement('ul')


    books.forEach((book) => {
        listOfBooks.append(renderBook(book))
    })

    document.getElementById("root").append(listOfBooks)
}

const onSubmit = (event) => {
    event.preventDefault();

    let form = event.target;

    // from stackoverflow - how to turn form elements to object
    let formData = Object.fromEntries([...form.elements]
        .map((element) => {
            return [element.name, parseInt(element.value)]
        })
        .filter(([id]) => id));
    // END from stackoverflow - how to turn form elements to object

    fetch('http://localhost:3001/updateBook', {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    }).then(console.log)
}

function renderBook(book) {
    let li = document.createElement('li')

    let form = document.createElement('form')
    form.onsubmit = onSubmit

    let label = document.createElement('label')
    label.innerHTML = book.title

    let input = document.createElement('input')
    input.value = book.quantity
    input.name = "quantity"

    let button = document.createElement('input')
    button.type = 'submit'
    button.value = 'save'


    let id = document.createElement('input')
    id.type = 'hidden'
    id.name = 'id'
    id.value = book.id

    form.append(id)
    form.append(label)
    form.append(input)
    form.append(button)
    li.append(form)

    return li
}

main()