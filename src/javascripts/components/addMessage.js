import data from '../helpers/data/messageData';
import display from './displayMessages';

const emptyInput = () => {
  $('#newMessage').val('');
};

const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13) {
      const newId = data.idGenerator();
      const newMessage = {
        id: newId,
        user: 'Ron Swanson',
        time: 'Jan 1, 2020 1:32pm',
        text: $('#newMessage').val(),
      };
      data.getMessages().push(newMessage);
      $('#messageDisplay').html('');
      display.displayMessages(data.getMessages());
      emptyInput();
    }
  });
};

export default { addMessage };
