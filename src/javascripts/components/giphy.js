import moment from 'moment';
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
        const gifLink = content.data[0].images.downsized.url;
        const newId = datas.randomId();
        const newMessage = {
          id: newId,
          user: selectUser.selectUser(),
          time: moment().format('MMMM Do YYYY, h:mm a'),
          text: emoji.emojis(),
          gif: gifLink
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
