  var button = document.querySelector(".button-form");

  var feedback = document.querySelector(".feedback-form");
  var close = document.querySelector(".modal-close");

  var overlay = document.querySelector(".overlay");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("feedback-form-active");
    overlay.classList.add("overlay-active");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("feedback-form-active");
    overlay.classList.remove("overlay-active");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("feedback-form-active")) {
        feedback.classList.remove("feedback-form-active");
        overlay.classList.remove("overlay-active");
      }
    }
  });

