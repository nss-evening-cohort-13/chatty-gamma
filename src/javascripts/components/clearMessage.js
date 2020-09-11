import display from './displayMessages';
import data from '../helpers/data/messageData';

const clearMessage = () => {
  $('#clearAllMessages').click(() => {
    $('#messageDisplay').remove();
  });
  $('#messageDisplay').html('');
  display.displayMessages(data.getMessages());
};

export default { clearMessage };
