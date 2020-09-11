import array from '../helpers/data/messageData';

const deleteMessage = (message) => {
  $(`#delete-${message.id}`).on('click', () => {
    $(`#message-${message.id}`).remove();
    array.getMessages().splice(`#message-${message.id}`, 1);
  });
};

export default { deleteMessage };
