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

  const form = document.querySelector('form')
  function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "smtp@gmail.com",
      Password : "6E482E045B272FABF47EDEA85FB023E32F018BB01AC3071DAF17C5475D9D4047ECDF13ECED5680F9F07DDA63595B9FCA",
      To : 'uwingajoselyne@gmail.com',
      From : "smtp@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
  }

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendEmail();
  })