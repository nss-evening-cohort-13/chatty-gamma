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

const resetAttr = () => {
  $('#clearAllMessages').removeAttr('disabled');
};

const clearMessage = () => {
  $('#clearAllMessages').on('click', () => {
    if (data.getMessages().length === 0) {
      $('#clearAllMessages').attr('disabled', true);
    } else if (data.getMessages().length > 0) {
      $('#messageDisplay').empty();
      data.getMessages().length = 0;
      storage.clearItems();
      onClear();
    }
  });
};

// const clearMessage = () => {
//   if (data.getMessages().length === 0) {
//     $('#clearAllMessages').attr('disabled', true);
//   } else {
//     $('#clearAllMessages').on('click', () => {
//       $('#clearAllMessages').removeAttr('disabled');
//       $('#messageDisplay').empty();
//       data.getMessages().length = 0;
//       storage.clearItems();
//       onClear();
//     });
//   }
// };

export default { clearMessage, resetAttr };
