const funnyButton = document.getElementById("funnyJoke");
const lameButton = document.getElementById("lameJoke");
const jokeContainer = document.getElementById("joke");

funnyButton.addEventListener("click", async function () {
    const response = await fetch("http://localhost:3000/jokebook/joke/funnyJoke", {
        method: 'GET'
      });
      
    const data = await response.json();
    jokeContainer.innerHTML = `
    <p>${data.joke}</p>
    <p>${data.response}</p>
    `
});

lameButton.addEventListener("click", async function () {
    const response = await fetch("http://localhost:3000/jokebook/joke/lameJoke", {
        method: 'GET'
      });
      
    const data = await response.json();
    jokeContainer.innerHTML = `
    <p>${data.joke}</p>
    <p>${data.response}</p>
    `
});