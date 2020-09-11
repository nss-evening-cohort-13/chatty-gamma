import data from '../helpers/data/messageData';
import deleteMessage from './deleteMessage';

const displayMessages = () => {
  const messages = data.getMessages();

  messages.forEach((message) => {
    $('#messageDisplay').append(`
    <div class="message" id="message-${message.id}">
      <p class="message-text">${message.text}</p>
      <div class="message-info-div">
        <div class="user-img-container leslie"></div>
        <p class="message-info">${message.user} ${message.time}</p>
        <a id="delete-${message.id}">
        <img src="src/images/trashcan.png" class="delete-msg"  alt="trashcan graphic">
        </a>
      </div>
    </div>`);
    deleteMessage.deleteMessage(message);
  });
};
export default { displayMessages };
