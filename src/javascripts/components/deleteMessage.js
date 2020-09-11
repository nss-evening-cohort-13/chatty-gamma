const deleteMessage = (message) => {
  $(`#delete-${message.id}`).on('click', () => {
    $(`#message-${message.id}`).remove();
  });
};

export default { deleteMessage };
