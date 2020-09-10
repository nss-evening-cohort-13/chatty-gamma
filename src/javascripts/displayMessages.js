import data from './helpers/data/messageData';

const displayMessages = () => {
  const messages = data.getMessages();

  messages.forEach((message) => {
    $('#messageDisplay').append(`
    <div class="message">
      <p class="message-text">${message.text}</p>
      <div class="message-info-div">
        <div class="user-img-container leslie"></div>
        <p class="message-info">${message.user} ${message.time}</p>
        <img src="src/images/trashcan.png" class="delete-msg" alt="trashcan graphic">
      </div>
    </div>`);
  });
};

export default { displayMessages };
