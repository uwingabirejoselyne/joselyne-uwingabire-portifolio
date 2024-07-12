import { Mailgun } from 'mailgun';

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

  var mg = new Mailgun('2536ce22a998fc4065f0b5b547ec38c2-8a084751-c5a69077');
  mg.sendText('uwingajoselyne@gmail.com', [document.getElementById('email').value],
    'This is the subject',
    'This is the text',
    function (err) {
      if (err) console.log('Oh noes: ' + err);
      else console.log('Success');
    });
  // Email.send({
  //   Host: "smtp.mailgun.org",
  //   Username: "uwingajoselyne@gmail.com",
  //   Password: "joselyne11",
  //   To: document.getElementById('email').value,
  //   From: "uwingajoselyne@gmail.com",
  //   Subject: document.getElementById('subject').value,
  //   Body: `Name: ${document.getElementById('name').value}
  //              Email: ${document.getElementById('email').value}
  //              Subject: ${document.getElementById('subject').value}
  //              Message: ${document.getElementById('message').value}`
  // }).then(
  //   message => alert(message)
  // );
}