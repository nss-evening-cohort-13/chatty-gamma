const darkMode = () => {
  $('#darkModeTarget').on('click', () => {
    if ($('#darkModeTarget').is(':checked')) {
      $('body').toggleClass('dark');
    }
    if ($('#darkModeTarget').is(':not(:checked)')) {
      $('body').toggleClass('dark');
    }
  });
};

export default { darkMode };
