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
  // Get form values
  var name = document.getElementById('names').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Save form data to Firebase Firestore
  db.collection('contacts').add({
    name: name,
    email: email,
    subject: subject,
    message: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function() {
    alert('Message sent successfully');
    document.getElementById('contactForm').reset();
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
    alert('Error sending message');
  });
}