(function () {

    const cw1Button = document.getElementById("showCw1ResultButton");
    const cw1Input = document.getElementById("capitalName");
    pola = misia.cos;

    cw1Button.addEventListener("click", function (){
      fetch(`https://restcountries.com/v3.1/capital/${cw1Input.value}`)
        .then(response => response.json())
        .then(array => {
          console.log(array)
          const name = array[0]["name"]["common"];
          const capital = array[0]["capital"][0];
          const population = array[0]["population"];
          const region = array[0]["region"];
          const subregion = array[0]["subregion"];
          answer.innerHTML = `
          <table>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Region</th>
              <th>Subregion</th>
            </tr>
            <tr>
              <td>${name}</td>
              <td>${capital}</td>
              <td>${population}</td>
              <td>${region}</td>
              <td>${subregion}</td>
            </tr>
          </table>`;
            //answer.innerHTML = JSON.stringify(array);
        })
    });
})();