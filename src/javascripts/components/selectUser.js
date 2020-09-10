import users from '../helpers/data/userData';

const userButtonClick = () => {
    $('#select-user').on("click", selectUser);
};

const selectUser = (e) => {
  users.getUsers().forEach((item) => {
    const selectedUser = e.target.
  });
};
