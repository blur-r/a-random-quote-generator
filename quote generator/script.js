document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#new-quote");
  const quote = document.querySelector("#text");
  const cite = document.querySelector("#author-name");

  async function updateQuote() {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "Z8TnB695T0x10OXbU9mPoQ==RzRRpUAZtCIM5F4V" }
    });
    const data = await response.json();
    if (response.ok) {
      
      quote.textContent = data[0].quote;
      cite.textContent = data[0].author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

button.addEventListener("click", updateQuote);

  updateQuote();
});




// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.querySelector("#new-quote");
//   const quote = document.querySelector("#text");
//   const cite = document.querySelector("#author-name");

//   async function updateQuote() {
//     const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
//       headers: { "X-Api-Key": "Z8TnB695T0x10OXbU9mPoQ==RzRRpUAZtCIM5F4V" }
//     });
//     const data = await response.json();
//     if (response.ok) {
//       quote.textContent = data[0].quote;   // Fix: Access the first item
//       cite.textContent = data[0].author;   // Fix: Access the first item
//     } else {
//       quote.textContent = "An error occurred";
//       console.log(data);
//     }
//   }

//   button.addEventListener("click", updateQuote);
//   updateQuote(); // Initial call
// });