import array from '../helpers/data/messageData';

const deleteMessage = (message, index) => {
  $(`#delete-${message.id}`).on('click', () => {
    // const indexVar = array.getMessages().indexOf(`#message-${message.id}`);
    $(`#message-${message.id}`).remove();
    array.getMessages().splice(index, 1);
    console.log('message ID', index);
    console.log('delete', `#delete-${message.id}`);
  });
};

export default { deleteMessage };
