import display from './displayMessages';
import data from '../helpers/data/messageData';

const clearMessage = () => {
  $('#clearAllMessages').on('click', () => {
    $('.message').remove();
    display.displayMessages(data.getMessages());
  });
};

export default { clearMessage };
