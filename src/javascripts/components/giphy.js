import moment from 'moment';
import random from './addMessage';
import datas from '../helpers/data/messageData';
import display from './displayMessages';
import selectUser from './selectUser';
import emoji from './emojis';

const APIKEY = 'bIDzmVyydApjmjrw62c1gG8rufmN1yMA';
const fetch = require('node-fetch');

const giphyButton = () => {
  $('#addGif').on('click', () => {
    let url = `https:api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    const str = $('#giphy').val().trim();
    url = url.concat(str);
    fetch(url)
      .then((data) => data.json())
      .then((content) => {
        const fig = document.createElement('div');
        const img = document.createElement('img');
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fig.appendChild(img);
        const newId = random.randomId();
        const newMessage = {
          id: newId,
          user: selectUser.selectUser(),
          time: moment().format('MMMM Do YYYY, h:mm a'),
          text: emoji.emojis(),
          gif: img.src,
        };
        datas.getMessages().push(newMessage);
        $('#messageDisplay').html('');
        display.displayMessages();
        $('#giphy').val('');
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export default { giphyButton };
