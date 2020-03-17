import fetch from 'node-fetch';

fetch('	https://api.spotify.com/v1/search')
  .then(response => {
    return response.json();
  }).then(res => {
    console.log(res);
  }).catch(function (error) {
    console.log(error);
  });