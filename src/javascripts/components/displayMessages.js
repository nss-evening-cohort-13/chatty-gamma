import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';
import deleteMessage from './deleteMessage';

const displayMessages = () => {
  const messages = messageData.getMessages();
  const users = userData.getUsers();

  messages.forEach((message) => {
    let profilePic = '';

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].name === message.user) {
        profilePic = users[i].img;
      }
    }

    $('#messageDisplay').append(`
    <div class="message" id="message-${message.id}">
      <p class="message-text">${message.text}</p>
      <div class="message-info-div">
        <img src=${profilePic} class="profile-pic" alt="user's profile pic">
        <p class="message-info">${message.user} ${message.time}</p>
        <a class="trash" id="delete-${message.id}">
        <i class="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>`);
    deleteMessage.deleteMessage(message);
  });
};
export default { displayMessages };
