import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';
import deleteMessage from './deleteMessage';

const displayMessages = () => {
  const messages = messageData.getMessages();
  const users = userData.getUsers();

  messages.forEach((message, index) => {
    let profilePic = '';

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].name === message.user) {
        profilePic = users[i].img;
      } else if (message.user.toLowerCase().includes('bot')) {
        profilePic = '../../../images/chatbot.png';
      }
    }

    $('#messageDisplay').append(`
    <div class="message" id="message-${message.id}">
    <div class="message-text">
    <img class="gif message-text" onerror="this.style.display='none'" src=${message.gif !== undefined ? message.gif : ''}' alt='${message.id}'>
      <p class="message-text">${message.text}</p>
      </div>
      <div class="message-info-div">
        <img src=${profilePic} class="profile-pic" alt="user's profile pic">
        <p class="message-info">${message.user} ${message.time}</p>
        <a class="trash" id="delete-${message.id}">
        <i class="fas fa-trash-alt"></i>
        </a>
        <button id="${message.thumbsUp}">
          <i class="fas fa-thumbs-up"></i>
          <p>${message.thumbsUp}</p>
        </button>
        <button id="${message.thumbsDown}">
          <i class="fas fa-thumbs-down"></i>
          <p>${message.thumbsDown}</p>
        </button>
      </div>
    </div>`);
    deleteMessage.deleteMessage(message, index);
  });
};
export default { displayMessages };
