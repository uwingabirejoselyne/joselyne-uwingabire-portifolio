var typed = new Typed(".typing",{
    strings:['web Designer','Graphic designer','Web Developer',],
    typedSpeed:100,
    BackSpeed:60,
    loop:true
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
    Email.send({
        Host: "smtp.gmail.com",
        Username: "uwingajoselyne@gmail.com",
        Password: "ygen uovh awtd kjal",  
        To: 'uwingajoselyne@gmail.com',
        From: document.getElementById('email').value,
        Subject: document.getElementById('subject').value,
        Body: `Name: ${document.getElementById('name').value} <br> 
               Email: ${document.getElementById('email').value} <br> 
               Subject: ${document.getElementById('subject').value} <br> 
               Message: ${document.getElementById('message').value}`
    }).then(
        message => alert(message)
    );
}