const darkMode = () => {
  $('#darkModeTarget').on('click', () => {
    if ($('#darkModeTarget').is(':checked')) {
      $('body').toggleClass('dark');
      $('.smallCheckbox').toggleClass('dark');
      $('nav').removeClass('navbar-light');
      $('nav').removeClass('bg-light');
      $('nav').toggleClass('dark');
    }
    if ($('#darkModeTarget').is(':not(:checked)')) {
      $('body').toggleClass('dark');
      $('.smallCheckbox').toggleClass('dark');
      $('nav').addClass('navbar-light');
      $('nav').addClass('bg-light');
      $('nav').toggleClass('dark');
    }
  });
};

export default { darkMode };
