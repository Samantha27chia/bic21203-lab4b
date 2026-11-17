// This file runs after the deferred jQuery library has loaded.
$(function () {
  // (a) Equivalent of setting textContent.
  $("#myElement").text("Modified Text");

  // (b) Equivalent of classList.add().
  $("#myDIV").addClass("myStyle");

  // (c) Equivalent of addEventListener("click", ...).
  $("#myButton").on("click", function () {
    alert("Button clicked!");
  });
});
