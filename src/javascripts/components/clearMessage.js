import data from '../helpers/data/messageData';

const clearMessage = () => {
  $('#clearAllMessages').on('click', () => {
    $('#messageDisplay').empty();
    data.getMessages().length = 0;
  });
};

export default { clearMessage };
