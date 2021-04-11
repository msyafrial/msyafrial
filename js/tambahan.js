const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close-modal');

// Events

if(modalBtn){
  modalBtn.addEventListener('click', openModal);
}
if(window){
  window.addEventListener('click', outsideClick);
}
if(closeBtn){
  closeBtn.addEventListener('click', closeModal);
}

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
//  var input_subject = document.getElementsByName("subject")[0].value
//  var input_message = document.getElementsByName("message")[0].value
var input_name = document.getElementById("name");
var input_email = document.getElementById("email");
 var input_subject = document.getElementById("subject");
 var input_message = document.getElementById("message");
// var template =

function sendemail(){
  var result = ("Nama    : " + input_name.value+ "<br/> "+
                "Email   : " + input_email.value+ "<br/>"+
                "Subject : " + input_subject.value+ "<br/>"+
                "Massage : " + input_message.value);
  var subject = ("Web Profile : "+ input_subject.value);
  Email.send({
    Host : "smtp.gmail.com",
    port :"587",
    // UseDefaultCredentials = "true",
    Username : "webprofileshafuriaru@gmail.com",
    Password : "Jakarta@22",
    To : 'syafrial.iot@gmail.com',
    From : "webprofileshafuriaru@gmail.com",
    Subject : subject,
    Body :  result
}).then(
      message => alert(message),
      message =>  document.location.reload()
);

console.log(result);  
// console.log(input_email.value);
// console.log(input_subject.value);
// console.log(input_message.value);
}