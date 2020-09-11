import users from '../helpers/data/userData';

const selectUser = () => {
  $("input[type='radio']").click(() => {
    users.getUsers().forEach((item) => {
      const userSelection = $(`input[name='${item.name}']:checked`).val();
      if (userSelection === item.name) {
        console.warn(userSelection);
      } else {
          
      }
      // return userSelection
    });
  });
};

export default { selectUser };
