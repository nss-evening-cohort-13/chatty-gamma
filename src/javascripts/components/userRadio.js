import users from '../helpers/data/userData';

const buildUserRadio = () => {
  users.getUsers().forEach((item) => {
    $('#select-user').append(`
    <div class="d-flex">
        <label>
            <input type="radio" id="${item.id}-button" name="character" value="${item.name}">
            <img src="${item.img}"/><br>
            ${item.name}
        </label>
    </div>`);
  });
};

export default { buildUserRadio };
