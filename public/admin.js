
// Your Code Here

const base_api_url = ""
async function updateBook(bookId) {
    let updateRequestBody = { 
        "id": 1, 
        "title": "Jonathon AI", 
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166", 
        "year": 2014, 
        "quantity": "10", 
        "imageURL": "/assets/shinobi-initiative.jpeg" }
    let response = await fetch(`${base_api_url}/updateBook`, {
        method: "PATCH",
        body: JSON.stringify(
            updateRequestBody
        )
    })
    console.log(await response.json())
}