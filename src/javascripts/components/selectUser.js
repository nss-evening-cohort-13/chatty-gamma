import users from '../helpers/data/userData';

const selectUser = () => {
  $("input[type='radio']").click(() => {
    users.getUsers().forEach((item) => {
      const userSelection = $(`input[name='${item.name}']:checked`).val();
      if (userSelection) {
        console.warn(userSelection);
        //     item.checked = true;
        //   } else {
        //     item.checked = false;
        //   }
        // return userSelection
      }
    });
  });
};

export default { selectUser };
