import data from '../helpers/data/messageData';
import display from './displayMessages';
import emoji from './emojis';
import selectUser from './selectUser';

const emptyInput = () => {
  $('#newMessage').val('');
};

const randomId = () => {
  const random = [Math.floor(Math.random() * 1000)];
  return random;
};

const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13) {
      const newId = randomId();
      const message = $('#newMessage').val();
      const emojitext = emoji.emojis(message);
      const newMessage = {
        id: newId,
        user: selectUser.selectUser(),
        time: 'Jan 1, 2020 1:32pm',
        text: emojitext,
      };
      data.getMessages().push(newMessage);
      $('#messageDisplay').html('');
      display.displayMessages();
      emptyInput();
    }
  });
};

export default { addMessage };
