import $ from 'jquery';
import { fetchApi } from './fetch'

$('document').ready(async function () {
  let data = await fetchApi("John Mayer");
  let res = data.response;
  console.log('---res---');
  console.log(res);
  console.log('--titile--');
  console.log(res.hits[0].result.title);
  console.log('--imagePath--');
  console.log(res.hits[0].result.song_art_image_url);
  console.log(res.hits.length);
  let coverImage = [];
  let coverTitle = []
  for (let i = 0; i < res.hits.length; i++) {
    coverImage.push(res.hits[i].result.song_art_image_url);
    coverTitle.push(res.hits[i].result.title);
  }
  console.log('--imagePath array--')
  console.log(coverImage);

  for (let i = 1; i < 5; i++) {
    $(`#image${i} img`).attr('src', coverImage[i - 1]);
    $(`#image${i} h2`).text(`${coverTitle[i - 1]}`);
  }

  let showImageChange = () => {
    res = data.response;
    console.log('---res---');
    console.log(res);
    coverImage = [];
    coverTitle = [];
    for (let i = 0; i < res.hits.length; i++) {
      coverImage.push(res.hits[i].result.song_art_image_url);
      coverTitle.push(res.hits[i].result.title);
    }
    for (let i = 1; i < 5; i++) {
      $(`#image${i} img`).attr('src', coverImage[i - 1]);
      $(`#image${i} h2`).text(`${coverTitle[i - 1]}`);
    }
  }

  $('#artist1').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist2').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist3').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist4').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist5').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist6').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist7').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist8').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist9').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist10').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });

  $('#artist11').on('click', async function (event) {
    console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('data-artist'));
    showImageChange();
  });


})
