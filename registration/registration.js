function next1(e) {
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-100%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}

function next2(e) {
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-200%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}

function next2Back(e) {
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(0%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}
function next3Back(e) {
  e.preventDefault();
  document.getElementsByClassName("secondary")[0].style.transform =
    "translateX(-100%)";
  //   document.getElementById("btn1").addEventListener("click", (e) => {});
}
function close_error() {
  document.querySelector(".error_div").style.display = "none";
}
function close_success() {
  document.querySelector(".success_div").style.display = "none";
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

document.querySelector("#submitBtn").addEventListener("click", async (e) => {
  e.preventDefault();

  let formdata = new FormData(document.getElementById("form"));
  let requesturl = "https://hungry-pink-octopus.cyclic.app/api/form";
  // let requesturl="http://localhost:8000/api/form";
  response = await fetch(requesturl, {
    body: formdata,
    // headers: {
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //     "Content-Type": "multipart/form-data",
    // },
    method: "post",
  });
  if (response.status == 400) {
    response.text().then(function (text) {
      document.getElementById("error_msg").innerHTML = text;
      document.querySelector(".error_div").style.display = "block";
    });
  }
  if (response.status == 200) {
    response.text().then(function (text) {
      document.querySelector(".success_div").style.display = "block";
    });
  }
});

async function submit() {
  document.querySelectorAll(".width")[1].classList.add("is_active");
  document.querySelectorAll(".width")[1].style.pointerEvents = "none";
  let formdata = new FormData(document.getElementById("form"));
  let requesturl = "https://hungry-pink-octopus.cyclic.app/api/form/submit";
  // let requesturl="http://localhost:8000/api/form/submit";
  response = await fetch(requesturl, {
    body: formdata,
    // headers: {
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //     "Content-Type": "multipart/form-data",
    // },
    method: "post",
  });
  if (response.status == 400) {
    response.text().then(function (text) {
      document.getElementById("error_msg").innerHTML = text;
      document.querySelector(".error_div").style.display = "block";
    });
  }
  if (response.status == 200) {
    window.location.href = "/";
  }
}
