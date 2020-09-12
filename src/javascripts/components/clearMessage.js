import data from '../helpers/data/messageData';
import storage from '../helpers/data/localStorage';

const clearMessage = () => {
  $('#clearAllMessages').on('click', () => {
    $('#messageDisplay').empty();
    data.getMessages().length = 0;
    storage.clearItems();
  });
};

export default { clearMessage };
