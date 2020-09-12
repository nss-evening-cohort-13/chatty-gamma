import data from '../helpers/data/messageData';
import display from './displayMessages';

const emptyInput = () => {
  $('#newMessage').val('');
};

const randomId = () => {
  const random = [Math.floor(Math.random() * 1000)];
  return random;
};

const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13 && $('#newMessage').val() !== '') {
      const newId = randomId();
      const newMessage = {
        id: newId,
        user: 'Ron Swanson',
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
