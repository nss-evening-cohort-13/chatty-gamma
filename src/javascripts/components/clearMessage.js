import data from '../helpers/data/messageData';
import storage from '../helpers/data/localStorage';

const onClear = () => {
  $('#messageDisplay').html(`
    <div class="clear-message-display"><img src="images/jean-ralphio.png">The Messages Have Cleared Baby!</div>
  `);
};

const clearMessage = () => {
  $('#clearAllMessages').on('click', () => {
    $('#messageDisplay').empty();
    data.getMessages().length = 0;
    storage.clearItems();
    onClear();
  });
};

export default { clearMessage };
