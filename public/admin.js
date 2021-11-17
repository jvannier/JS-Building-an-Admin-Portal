
async function main() {
    let response = await fetch ('http://localhost:3000/api-docs.html#operation/listBooks', {
        method:'GET',
});

let books = await response.json();
console.log(books);
}
    let response = await fetch ('http://localhost:3000/api-docs.html#operation/updateBook', {
        method:'PATCH',
        headers {
            'Content-Type': 'application/json'
},

body:   

})

}

