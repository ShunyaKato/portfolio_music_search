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
  let songTitle = [];
  let songLink = [];
  const createSongDataArray = () => {
    for (let i = 0; i < songsLength; i++) {
      coverImage.push(res.songs[i].song_art_image_url);
      songTitle.push(res.songs[i].title);
      songLink.push(res.songs[i].url);
    }
    console.log("songLink");
    console.log(songLink);
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
      $(`#image${i} h2`).text(`${songTitle[randomNumber]}`);
      $(`#image${i} a`).attr('href', songLink[randomNumber]);
      console.log('songLink[randomNumber]');
      console.log(songLink[randomNumber]);

      coverImage[randomNumber] = coverImage[songsLength - 1];
      songTitle[randomNumber] = songTitle[songsLength - 1];
      songLink[randomNumber] = songLink[songsLength - 1];
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
    songTitle = [];
    songLink = [];
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
