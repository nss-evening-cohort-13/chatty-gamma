import array from '../helpers/data/messageData';
import storage from '../helpers/data/localStorage';

const deleteMessage = (message, index) => {
  $(`#delete-${message.id}`).on('click', () => {
    $(`#message-${message.id}`).remove();
    array.getMessages().splice(index, 1);
    storage.setItem('storage', array.getMessages());
  });
};

export default { deleteMessage };
