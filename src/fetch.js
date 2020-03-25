import fetch from 'node-fetch';

console.log(fetch);

export const fetchApi = async (artistName) => {
  let data;

  await fetch(`https://genius.p.rapidapi.com/search?q=${artistName}`, {
    headers: {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "fb9b03ccd3msh08a2d37de980038p147519jsn839de88844ae"
    },
  })
    .then(response => {
      data = response.json();
    }).then(res => {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    });
  return data;
}


