// JavaScript to change the background color of the capsule container
function changeColor() {
  document.getElementById("capsule-container").style.backgroundColor =
    "rgb(238, 165, 31)";
}

function restoreColor() {
  document.getElementById("capsule-container").style.backgroundColor = "white";
}
// Add a click event listener to the button
document
  .getElementById("favoriteButton")
  .addEventListener("click", function () {
    // Toggle the 'active' class to activate/deactivate the animation
    this.classList.toggle("active");

    // Toggle the text between "Add to Favorites" and "Added"
    if (this.classList.contains("active")) {
      this.innerHTML = '<span class="heart"></span> Added';
    } else {
      this.innerHTML = '<span class="heart"></span> Add to Favorites';
    }
  });
function redirectToSignUpPage() {
  window.location.href = "SignUp.html";
}
function validateLogin() {
  var valid = true;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var snmcheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;
  var snmcheck2 = /^[a-zA-Z0-9]+[0-9]{3,}$/;
  if (snmcheck.test(username) || snmcheck2.test(username)) {
    document.getElementById("errlgn").innerHTML = "";
  } else {
    document.getElementById("errlgn").innerHTML = "Enter a valid username";
    valid = false;
  }
  if (password == "") {
    document.getElementById("errpwd").innerHTML = "Enter the Password";
    valid = false;
  } else {
    document.getElementById("errpwd").innerHTML = "";
  }
  if(valid){
    window.location.href ="Home.html";
  }
}

function validatesgnup() {
  var valid = true;
  var fn = document.getElementById("firstName").value;
  var ln = document.getElementById("lastName").value;
  var eml = document.getElementById("email").value;
  var erreml = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/;
  var errfn = /^[a-zA-Z]+$/;
  if (errfn.test(fn) && errfn.test(ln)) {
    document.getElementById("fnm").innerHTML = "";
    document.getElementById("lnm").innerHTML = "";
  } else {
    if (!errfn.test(fn) && !errfn.test(ln)) {
      document.getElementById("fnm").innerHTML = "Enter Valid Name";
      document.getElementById("lnm").innerHTML = "Enter Valid Surname";
    } else if (!errfn.test(fn)) {
      document.getElementById("fnm").innerHTML = "Enter Valid Name";
    } else {
      document.getElementById("lnm").innerHTML = "Enter Valid Surname";
    }
    valid = false;
  }
  if (!erreml.test(eml)) {
    document.getElementById("eml").innerHTML = "Enter a valid Email";
    valid = false;
  } else {
    document.getElementById("eml").innerHTML = "";
  }
  var pwd = document.getElementById("password").value;
  var ptxtcheck = /^[a-zA-Z0-9.@#$^]{6,}$/;
  if (ptxtcheck.test(pwd)) {
    document.getElementById("pswd").innerHTML = "";
  } else {
    document.getElementById("pswd").innerHTML =
      "Password must be at least 6 characters";
    valid = false;
  }
  var db = document.getElementById("dob").value;
  if (db == "") {
    document.getElementById("dobb").innerHTML = "<br>Enter DOB";
    valid = false;
  } else {
    document.getElementById("dobb").innerHTML = "";
  }
  var male = document.getElementById("maleRadio").checked;
  var female = document.getElementById("femaleRadio").checked;
  if (!male && !female) {
    document.getElementById("gndrrr").innerHTML = "Select a gender";
    valid = false;
  } else {
    document.getElementById("gndrrr").innerHTML = "";
  }
  var toi = document.getElementById("chkbxagre").checked;
  if (!toi) {
    document.getElementById("erchkbx").innerHTML =
      "Please Agree to Terms Of Use";
    valid = false;
  } else {
    document.getElementById("erchkbx").innerHTML = "";
  }
  if(valid){
    window.location.href ="Home.html";
  }
}

function clearButton() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("maleRadio").checked = false;
  document.getElementById("femaleRadio").checked = false;
  document.getElementById("chkbxagre").checked = false;
}

function validatecu() {
  var valid = true;
  var chkename = document.getElementById("ename").value;
  var chkeemail = document.getElementById("eemail").value;
  var chkephno = document.getElementById("ephno").value;
  var chkesubject = document.getElementById("esubject").value;
  var chkedescription = document.getElementById("edescription").value;
  var chkmail = document.getElementById("eeMail").checked;
  var chkcall = document.getElementById("eCall").checked;
  var chkwhtsp = document.getElementById("eWhatsapp").checked;

  var nchkename = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  if (nchkename.test(chkename)) {
    document.getElementById("errename").innerHTML = "";
  } else {
    document.getElementById("errename").innerHTML = "Enter Valid Full Name";
    valid = false;
  }

  var nchkeemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$/;
  if (nchkeemail.test(chkeemail)) {
    document.getElementById("erreemail").innerHTML = "";
  } else {
    document.getElementById("erreemail").innerHTML = "Enter a valid Email ID";
    valid = false;
  }

  var nephno = /^[0-9]{10}$/;
  if (nephno.test(chkephno)) {
    document.getElementById("errephno").innerHTML = "";
  } else {
    document.getElementById("errephno").innerHTML = "Enter Valid Phone No.";
    valid = false;
  }

  var nchkesubject = /^[a-zA-Z0-9\s]{5,30}$/;
  if (nchkesubject.test(chkesubject)) {
    document.getElementById("erresubject").innerHTML = "";
  } else {
    document.getElementById("erresubject").innerHTML =
      "Enter Valid Subject under 30 words";
    valid = false;
  }
  if (chkedescription == "") {
    document.getElementById("erredescription").innerHTML =
      "Enter the Description";
    valid = false;
  } else {
    document.getElementById("erredescription").innerHTML = "";
  }
  if (!chkmail && !chkcall && !chkwhtsp) {
    document.getElementById("errpwtcu").innerHTML = "Select a Prefered way";
    valid = false;
  } else {
    document.getElementById("errpwtcu").innerHTML = "";
  }
  var chktoi = document.getElementById("ucchkbx").checked;
  if (!chktoi) {
    document.getElementById("errucchkbx").innerHTML =
      "Please Agree to Terms Of Use";
    valid = false;
  } else {
    document.getElementById("errucchkbx").innerHTML = "";
  }
  if(valid){
    alert("Your Response Has Been Recorded.");
  }
}

function clrcu() {
  var chkename = (document.getElementById("ename").value = "");
  var chkeemail = (document.getElementById("eemail").value = "");
  var chkephno = (document.getElementById("ephno").value = "");
  var chkesubject = (document.getElementById("esubject").value = "");
  var chkedescription = (document.getElementById("edescription").value = "");
  var chkmail = (document.getElementById("eeMail").checked = false);
  var chkcall = (document.getElementById("eCall").checked = false);
  var chkwhtsp = (document.getElementById("eWhatsapp").checked = false);
  var chktoi = (document.getElementById("ucchkbx").checked = false);
}

function setupStarRating(index) {
  const stars = document.querySelectorAll(".fa-star");

  resetStars(stars);
  highlightStars(stars, index);
}

function resetStars(starsArray) {
  starsArray.forEach((s) => {
    s.classList.remove("chkstrr");
  });
}

function highlightStars(starsArray, endIndex) {
  for (let i = 0; i <= endIndex; i++) {
    starsArray[i].classList.add("chkstrr");
  }
}

function ffvalidate() {
  var valid = true;
  var nffname = document.getElementById("ffname").value;
  var nffemail = document.getElementById("ffemail").value;
  var nffdescription = document.getElementById("ffdescription").value;
  var nffsubject = document.getElementById("ffsubject").value;
  var chkce = document.getElementById("Competitive Exams").checked;
  var chklr = document.getElementById("Logical Reasoning").checked;
  var chkft = document.getElementById("Fiction").checked;
  var chkmyth = document.getElementById("Mythology").checked;
  var chkhis = document.getElementById("Historical").checked;

  var nchkename = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  if (nchkename.test(nffname)) {
    document.getElementById("errffname").innerHTML = "";
  } else {
    document.getElementById("errffname").innerHTML = "Enter Valid Full Name";
    valid = false;
  }

  var nchkeemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$/;
  if (nchkeemail.test(nffemail)) {
    document.getElementById("errffemail").innerHTML = "";
  } else {
    document.getElementById("errffemail").innerHTML = "Enter a valid Email ID";
    valid = false;
  }
  if (!chkce && !chklr && !chkft && !chkmyth && !chkhis) {
    document.getElementById("errctgry").innerHTML = "Select a Category";
    valid = false;
  } else {
    document.getElementById("errctgry").innerHTML = "";
  }
  var nchkesubject = /^[a-zA-Z0-9\s]{5,30}$/;
  if (nchkesubject.test(nffsubject)) {
    document.getElementById("errffsubject").innerHTML = "";
  } else {
    document.getElementById("errffsubject").innerHTML =
      "Enter Valid Subject under 30 words";
    valid = false;
  }
  if (nffdescription == "") {
    document.getElementById("errffdescription").innerHTML =
      "Enter the Feedback";
    valid = false;
  } else {
    document.getElementById("errffdescription").innerHTML = "";
  }
  if(valid){
    alert("Your Response Has Been Recorded.");
  }
}
function ffclr() {
  var nffname = (document.getElementById("ffname").value = "");
  var nffemail = (document.getElementById("ffemail").value = "");
  var nffdescription = (document.getElementById("ffdescription").value = "");
  var nffsubject = (document.getElementById("ffsubject").value = "");
  var chkce = (document.getElementById("Competitive Exams").checked = false);
  var chklr = (document.getElementById("Logical Reasoning").checked = false);
  var chkft = (document.getElementById("Fiction").checked = false);
  var chkmyth = (document.getElementById("Mythology").checked = false);
  var chkhis = (document.getElementById("Historical").checked = false);
  const stars = document.querySelectorAll(".fa-star");
  resetStars(stars);
}

function openintcal() {
  window.location.href =
    "https://www.mediafire.com/file/u7lttjx2al3t17r/Integral_Calculus.pdf/file";
}
function openadclp() {
  window.location.href =
    "https://www.mediafire.com/file/0hi5agzzvps7dtv/nelkonparker-advancedlevelphysics.pdf/file";
}
function openoprtsc() {
  window.location.href =
    "https://www.mediafire.com/file/rx8bmy8udqhrhot/Abraham_Silberschatz-Operating_System_Concepts_%25289th%252C2012_12%2529.pdf/file";
}
function openprestcon() {
  window.location.href =
    "https://www.mediafire.com/file/ppz5ljb5ecb4iwe/Nawy-2009-Prestressed-Concrete.pdf/file";
}
function openqntmapti() {
  window.location.href =
    "https://www.mediafire.com/file/yal3eqqpn7v6ooh/Quantum_CAT.pdf/file";
}
function openblagtgt() {
  window.location.href =
    "https://www.mediafire.com/file/c065jn1nxdvl2db/being_logical_-_Inerny.pdf/file";
}
function openweyz() {
  window.location.href =
    "https://www.mediafire.com/file/meuo66c4dw44f1p/1.+We+Author+Yevgeny+Zamyatin.pdf/file";
}
function openthehddte() {
  window.location.href =
    "https://www.mediafire.com/file/b5w8c5te4piwfyp/HandmaidsTale.pdf/file";
}
function openthecllotw() {
  window.location.href =
    "https://www.mediafire.com/file/ecxk7kx5n9i2mxm/4._The_Call_of_the_Wild_Author_Jack_London.pdf/file";
}
function openthedisoi() {
  window.location.href =
    "https://www.mediafire.com/file/w9gvbwvkurthxub/The-Discovery-Of-India-Jawaharlal-Nehru.pdf/file";
}
function openthenightgle() {
  window.location.href =
    "https://www.mediafire.com/file/8p2dfmgxm5t3p7r/The_Nightingale.pdf/file";
}
function opentgptmoiap() {
  window.location.href =
    "https://www.mediafire.com/file/n1evpacvdlu59px/The_Great_Partition__The_Making_of_India_and_Pakistan.pdf/file";
}
