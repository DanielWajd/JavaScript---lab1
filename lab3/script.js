(function () {

  const cw1Button = document.getElementById("showCw1ResultButton");
  const cw1Input = document.getElementById("capitalName");
  const cw2Button = document.getElementById("cw2Button");
  const cw3Button = document.getElementById("cw3Button");
  const cw4Button = document.getElementById("cw4Button");
  const cw5Button = document.getElementById("cw5Button");

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

const apiToken = "QOrmLMwxmKuZaJJAPyvVswDtcTsvGRVp";

cw2Button.addEventListener("click", async function () {
  answer.innerHTML = "Loading...";
  const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
    method: 'GET',
    headers: {
      'token': apiToken
    }
  });


  const data = await response.json();
  const stations = data.results;
  console.log(stations);


  answerString = `
    <table>
          <tr>
            <th>Station ID</th>
            <th>Name</th>
            <th>State</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
  `;
  stations.forEach(station => {
    let id = station["id"];
    let name = station["name"].split(",")[0];
    let state = station["name"].split(",")[1];
    let lat = station["latitude"];
    let long = station["longitude"];

    answerString +=
    `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${state}</td>
      <td>${lat}</td>
      <td>${long}</td>
    </tr>
    `
  });
  

  answerString += `</table>`;
  answer.innerHTML = answerString;
});


cw3Button.addEventListener("click", async function () {
  answer.innerHTML = "Loading...";
  const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/locations", {
    method: 'GET',
    headers: {
      'token': apiToken
    }
  });

  const data = await response.json();
  const locations = data.results;

  answerString = `
    <table>
          <tr>
            <th>Location ID</th>
            <th>Name</th>
            <th>Country</th>
          </tr>
  `;
  
  locations.forEach(location => {
    let id = location["id"];
    let name = location["name"].split(",")[0];
    let country = location["name"].split(",")[1];
    answerString +=
    `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${country}</td>
    </tr>
    `
  });

  answerString += "</table>";
  answer.innerHTML = answerString;
});

cw4Button.addEventListener("click", async function () {
  answer.innerHTML = "Loading...";
  const response = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GSOM&stationid=GHCND:USC00010008&units=standard&startdate=2010-05-01&enddate=2010-05-31", {
    method: 'GET',
    headers: {
      'token': apiToken
    }
  });

  const data = await response.json();
  const dataArray = data.results;

  answerString = `
    <table>
          <tr>
            <th>Data type</th>
            <th>Station</th>
          </tr>
  `;

  dataArray.forEach(set => {
    const datatype = set["datatype"];
    const station = set["station"];

    answerString +=
    `
    <tr>
      <td>${datatype}</td>
      <td>${station}</td>
    </tr>
    `
  });
  
  answerString += "</table>";
  answer.innerHTML = answerString;
});
cw5Button.addEventListener("click", async function () {
  answer.innerHTML = "Loading...";
  const response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=L6fYMrcNKiq2r5C8tWmYCgW72uNQYuck&tag=&rating=g", {
    method: 'GET'
  });

  const data = await response.json();

  const gifUrl = data.data.images.original.url;

  answer.innerHTML = "";
  const img = document.createElement("img");
  img.src = gifUrl;
  img.alt = "Random Giphy Image";
  img.style.maxWidth = "100%"; 

  answer.appendChild(img);

  
  
});


})();