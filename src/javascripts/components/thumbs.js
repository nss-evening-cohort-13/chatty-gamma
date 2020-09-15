const thumbsUp = (message) => {
  const newMessage = message;
  $(`#up-${message.id}`).on('click', () => {
    newMessage.thumbsUp += 1;
    $(`#thumbsUp-${message.id}`).html(newMessage.thumbsUp);
  });
};

const thumbsDown = (message) => {
  const newMessage = message;
  $(`#down-${message.id}`).on('click', () => {
    newMessage.thumbsDown += 1;
    $(`#thumbsDown-${message.id}`).html(newMessage.thumbsDown);
  });
};

export default { thumbsUp, thumbsDown };
