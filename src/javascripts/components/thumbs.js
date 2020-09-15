const thumbsUp = (message) => {
  const newMessage = message;
  $(`#${message.thumbsUp}`).on('click', () => {
    newMessage.thumbsUp += 1;
    $('#up').html(newMessage.thumbsUp);
  });
};

const thumbsDown = (message) => {
  const newMessage = message;
  $(`#${message.thumbsDown}`).on('click', () => {
    newMessage.thumbsDown += 1;
    $('#down').html(newMessage.thumbsDown);
  });
};

export default { thumbsUp, thumbsDown };
