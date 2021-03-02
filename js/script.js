(function () {
  let searchForm = document.querySelector('.search-form'),
      searchFormShowButton = document.querySelector('.booking__content-button');

  if(!searchFormShowButton || !searchForm) return;

  searchFormShowButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form--hidden");
  });
})();
