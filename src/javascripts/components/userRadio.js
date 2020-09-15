import users from '../helpers/data/userData';

const buildUserRadio = () => {
  users.getUsers().forEach((item) => {
    $('#select-user').append(`
    <div class="users">
        <label class="imageWrap">
            <input class="radio" type="radio" id="${item.id}-button" name="character" value="${item.name}">
            <img class="userImage"src="${item.img}"/><br>
            ${item.name}
        </label>
    </div>`);
  });
};

export default { buildUserRadio };
