var typed = new Typed(".typing", {
  strings: ['web Designer', 'Graphic designer', 'Web Developer',],
  typedSpeed: 100,
  BackSpeed: 60,
  loop: true
})

// change theme mode
$(".dark-toggle").click(function () {
  $("body").toggleClass("dark-mode");
  $("body").toggleClass("dark");

  if ($("body").hasClass("dark-mode")) {
    $(".dark-toggle i").attr("class", "fa fa-sun");
    localStorage.setItem("theme-md", true);
  } else {
    $(".dark-toggle i").attr("class", "fa fa-moon");
    localStorage.setItem("theme-md", null);
  }
});

//sending an email

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  sendEmail();
});

function sendEmail() {
  const names = document.getElementById('names').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

document.querySelectorAll("form span").forEach((el)=>{
  el.style.display ="none"
})
}