import $ from 'jquery';
import { fetchApi } from './fetch'

$('document').ready(async function () {
  const data = await fetchApi();
  const res = data.response;
  console.log('---res---');
  console.log(res);
  console.log('--titile--');
  console.log(res.hits[0].result.title);
  console.log('--imagePath--');
  console.log(res.hits[0].result.song_art_image_url);
  console.log(res.hits.length);
  let coverImage = [];
  for (let i = 0; i < res.hits.length; i++) {
    coverImage.push(res.hits[i].result.song_art_image_url);
  }
  console.log('--imagePath array--')
  console.log(coverImage);

  for (let i = 1; i < 5; i++) {
    $(`#image${i} img`).attr('src', coverImage[i - 1]);
  }
})
