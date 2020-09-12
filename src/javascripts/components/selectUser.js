import users from '../helpers/data/userData';

const selectUser = () => {
  users.getUsers().forEach((item) => {
    const userSelection = $('input[name="character"]:checked').val();
    if (userSelection === item.id) {
      return userSelection;
    }
  });
};

const userSelectionClick = () => {
  $('#select-user').on('click', selectUser);
};

export default { userSelectionClick };
