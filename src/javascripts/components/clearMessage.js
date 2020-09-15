import data from '../helpers/data/messageData';
import storage from '../helpers/data/localStorage';

const onClear = () => {
  $('#messageDisplay').html(`
    <div class="clear-message-display">
      <img src="images/jean-ralphio.png">
      <h3>"They All Gone Baby!"</h3>
    </div>
  `);
};

const clearMessage = () => {
  $('#clearAllMessages').on('click', () => {
    $('#messageDisplay').empty();
    data.getMessages().length = 0;
    storage.clearItems();
    onClear();
    $('#clearAllMessages').attr('disabled', true);
  });
};

export default { clearMessage };
