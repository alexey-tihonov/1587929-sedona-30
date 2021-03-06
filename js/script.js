(function () {
  let searchForm = document.querySelector('.search-form'),
      searchFormShowButton = document.querySelector('.booking__content-button'),
      arrival = searchForm.querySelector("#arrival-field"),
      departure = searchForm.querySelector("#departure-field"),
      adults = searchForm.querySelector("#adults-field"),
      childs = searchForm.querySelector("#childs-field"),
      fields = searchForm.querySelectorAll('.search-form__input-text');

  if(!searchFormShowButton || !searchForm) return;

  searchForm.classList.add("search-form--closed");

  searchFormShowButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form--closed");
    searchForm.classList.toggle("search-form--opened");
  });

  searchForm.addEventListener("submit", function (evt) {
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        evt.preventDefault();
        fields[i].focus();
        searchForm.classList.remove("search-form--error");
        searchForm.offsetWidth = searchForm.offsetWidth;
        searchForm.classList.add("search-form--error");
        break;
      }
    }
  });
})();
