$(document).ready(function () {
  const optionButtons = $("button");
  optionButtons.on("click", function (e) {
    const collapses = Array.from($(".collapse"));
    const optionButtonsArray = Array.from(optionButtons);

    for (let button of optionButtonsArray) {
      button.classList.add("border-bottom-0");
    }

    this.classList.toggle("border-bottom-0");

    for (let collapse of collapses) {
      collapse.classList.remove("show");
    }
  });
});
