import data from './helpers/data/messageData';
import userData from './helpers/data/userData';

const displayMessages = () => {
  const messages = data.getMessages();
  const users = userData.getUsers();

  messages.forEach((message) => {
    let profilePic = '';

    for (let i = 0; users.length; i + 1) {
      if (users[i].name === message.user) {
        profilePic = users[i].img;
      }
    }

    $('#messageDisplay').append(`
    <div class="message">
      <p class="message-text">${message.text}</p>
      <div class="message-info-div">
        <div class="user-img-container">
          <img src="${profilePic}"
        </div>
        <p class="message-info">${message.user} ${message.time}</p>
        <img src="images/trashcan.png" class="delete-msg" alt="trashcan graphic">
      </div>
    </div>`);
  });
};

export default { displayMessages };
