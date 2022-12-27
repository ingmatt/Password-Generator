const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

function password() {
  let passwordEl = document.getElementById("password-el")
  let password = ""
  for (let i = 0; i < 15; i++) {
    let passwordGenerator = Math.floor(Math.random() * characters.length)
    password += characters[passwordGenerator]
  }
  passwordEl.textContent = password + " "
}


function password1() {
  let passwordEl1 = document.getElementById("password-el1")
  let password1 = ""
  for (let i = 0; i < 15; i++) {
    let passwordGenerator = Math.floor(Math.random() * characters.length)
    password1 += characters[passwordGenerator]
  }
  passwordEl1.textContent = password1 + " "
}

// (A) COPY TEXT TO CLIPBOARD
function jscopy () {
  // (A1) GET TEXT FROM TEXT FIELD
  let txt = document.getElementById("password-el").innerText;

  // (A2) PUT TEXT INTO CLIPBOARD
  navigator.clipboard.writeText(txt)

  // (A3) OPTIONAL - DO THIS AFTER COPY
  .then(() => { alert("Copied"); });
}

// (A) COPY TEXT TO CLIPBOARD
function jscopy1 () {
  // (A1) GET TEXT FROM TEXT FIELD
  let txt = document.getElementById("password-el1").innerText;

  // (A2) PUT TEXT INTO CLIPBOARD
  navigator.clipboard.writeText(txt)

  // (A3) OPTIONAL - DO THIS AFTER COPY
  .then(() => { alert("Copied"); });
}
