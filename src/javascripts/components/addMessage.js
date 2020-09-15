import moment from 'moment';
import data from '../helpers/data/messageData';
import display from './displayMessages';
import emoji from './emojis';
import selectUser from './selectUser';
import chatbots from './chatbots';
import reset from './clearMessage';

const emptyInput = () => {
  $('#newMessage').val('');
};

const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13) {
      const newId = data.randomId();
      const message = $('#newMessage').val();
      const emojitext = emoji.emojis(message);
      const newMessage = {
        id: newId,
        user: selectUser.selectUser(),
        time: moment().format('MMMM Do YYYY, h:mm a'),
        text: emojitext,
      };
      data.getMessages().push(newMessage);
      $('#messageDisplay').html('');
      display.displayMessages();
      emptyInput();
      chatbots.runChatbots(message);
      reset.resetAttr();
    }
  });
};

export default { addMessage, emptyInput };
