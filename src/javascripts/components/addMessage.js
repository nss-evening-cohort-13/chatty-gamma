import data from '../helpers/data/messageData';
import display from './displayMessages';

const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13) {
      const newMessage = {
        id: data.idGenerator(),
        user: 'Ron Swanson',
        time: 'Jan 1, 2020 1:32pm',
        text: $('#newMessage').val(),
      };
      data.getMessages().push(newMessage);
      display.displayMessages(display.getMessages());
    }
  });
};

export default { addMessage };
