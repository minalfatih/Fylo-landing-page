document.forms[0].onsubmit = function (e) {
  check(
    ".landing form input[type='text']",
    ".landing .error-mesg",
    ".landing form input[type='text']"
  );

  e.preventDefault();
};

document.forms[1].onsubmit = function (e) {
  check(
    ".access-section form input[type='text']",
    ".access-section form .error-mesg ",
    ".access-section form input[type='submit']"
  );

  e.preventDefault();
};

function check(input, mesg, input2) {
  let regex = /\w+@[a-z]{2,}\.[a-z]{2,}/gi;

  if (regex.test(document.querySelector(input).value)) {
    document.querySelector(mesg).classList.remove("active");
    document.querySelector(input2).classList.remove("active");
  } else {
    document.querySelector(mesg).classList.add("active");
    document.querySelector(input2).classList.add("active");
  }
}
