import data from '../helpers/data/messageData';
import display from './displayMessages';
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
      const newMessage = {
        id: newId,
        user: selectUser.selectUser(),
        time: 'Jan 1, 2020 1:32pm',
        text: $('#newMessage').val(),
      };
      data.getMessages().push(newMessage);
      $('#messageDisplay').html('');
      display.displayMessages();
      emptyInput();
    }
  });
};

export default { addMessage };
