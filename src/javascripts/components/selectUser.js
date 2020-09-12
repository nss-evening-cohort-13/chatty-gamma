const selectUser = () => {
  const user = $('input[name="character"]:checked').val()
    ? $('input[name="character"]:checked').val()
    : $('input[id="user6"]'.val());
  return user;
};

const userSelectionClick = () => {
  $('#select-user').on('change', selectUser);
};

export default { userSelectionClick, selectUser };
