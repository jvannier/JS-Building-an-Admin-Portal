// Your Code Here

async function main() {
  let response = await fetch("http://localhost:3001/listBooks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let bookListObj = await response.json();
  bookListObj.forEach(renderBook);
}

function renderBook(book) {
  let bookContainer = document.querySelector("#root");
  bookContainer.innerHTML += `
        <div class="col-sm-3">
                <div class="card-body">
                    <h3 class="card-title">${book.title}</h3>
                    <h4 class="quantity">Available: ${book.quantity}</h4>
                </div>
            
        </div>
    `;
  let bookQuantity = book.quantity;
  let myBtn = document.createElement("btn");
  
}

main();
