import $ from 'jquery';
import { fetchApi } from './fetch'

$(document).ready(async () => {
  let data = await fetchApi("488");
  let res = data.response;
  let songsLength = res.songs.length
  console.log('---res---');
  console.log(res);
  // console.log('--titile--');
  // console.log(res.hits[0].result.title);
  // console.log('--imagePath--');
  // console.log(res.hits[0].result.song_art_image_url);
  // console.log(res.hits.length);
  let coverImage = [];
  let coverTitle = []
  const createSongDataArray = () => {
    for (let i = 0; i < songsLength; i++) {
      coverImage.push(res.songs[i].song_art_image_url);
      coverTitle.push(res.songs[i].title);
    }
  };
  createSongDataArray();
  // console.log('--imagePath array--')
  // console.log(coverImage);

  const pickRandomSong = () => {
    for (let i = 1; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * songsLength)
      // console.log('randomNumber')
      // console.log(randomNumber);
      // console.log('songsLength')
      // console.log(songsLength)
      $(`#image${i} img`).attr('src', coverImage[randomNumber]);
      $(`#image${i} h2`).text(`${coverTitle[randomNumber]}`);
      coverImage[randomNumber] = coverImage[songsLength - 1];
      coverTitle[randomNumber] = coverTitle[songsLength - 1];
      songsLength = songsLength - 1;
    }
  };
  pickRandomSong();

  let showImageChange = () => {
    res = data.response;
    songsLength = res.songs.length
    // console.log('---res---');
    // console.log(res);
    coverImage = [];
    coverTitle = [];
    createSongDataArray();
    pickRandomSong();
  }

  $('.js-showImage').on('click', async function () {
    // console.log($(this));
    // console.log($(this).attr('data-artist'));
    data = await fetchApi($(this).attr('artist-id'));
    showImageChange();
  })


})
