function setLanguage(lang) {
  document.querySelectorAll('.lang-section').forEach(section => {
    section.classList.remove('active');
  });
  const section = document.getElementById(lang);
  if (section) {
    section.classList.add('active');
  }
}
