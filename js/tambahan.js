const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close-modal');
const closeSuksesBtn = document.querySelector('.close-suksesmodal');
var form = document.getElementById("my-form");
const suksesmodal = document.querySelector('#sukses-modal');
const loader = document.getElementById('loader');
const submit = document.getElementById("submit");

// Events

if (modalBtn) {
  modalBtn.addEventListener('click', openModal);
}
if (window) {
  window.addEventListener('click', outsideClick);
}
if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);;
}
if (closeSuksesBtn) {
  closeSuksesBtn.addEventListener('click', closeSuksesModal);;
}

// Open
function openModal() {
  modal.style.display = 'block';
  suksesmodal.style.display = 'none';
}

function openSuksesModal() {
  suksesmodal.style.display = 'block';
  modal.style.display = 'none';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  suksesmodal.style.display = 'none';

}

function closeSuksesModal() {
  suksesmodal.style.display = 'none';

}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
  if (e.target == suksesmodal) {
    suksesmodal.style.display = 'none';
  }
}


async function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  var status = document.getElementById("status");
  status.style.display = 'none';
  submit.style.display = 'none';
  loader.style.display = 'block';

  if (name.value == "" ||name.value == null) {
    status.style.display = 'block';
    loader.style.display = 'none';
    submit.style.display = 'block';

  } else if (email.value == ""||email.value == null) {
    status.style.display = 'block';
    loader.style.display = 'none';
    submit.style.display = 'block';

  } else if (subject.value == ""||subject.value == null) {
    status.style.display = 'block';
    loader.style.display = 'none';
    submit.style.display = 'block';

  } else if (message.value == ""||message.value == null) {
    status.style.display = 'block';
    loader.style.display = 'none';
    submit.style.display = 'block';

  } else {
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      console.log(response.status)
      if (response.status == 400) {
        submit.style.display = 'block';
        loader.style.display = 'none';
        status.style.display = 'block';
        form.reset();
      }
      if (response.status == 200) {
        openSuksesModal();
        submit.style.display = 'block';
        loader.style.display = 'none';
        form.reset();
      }



    }).catch(error => {
      closeSuksesModal()
      // status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
}
form.addEventListener("submit", handleSubmit)
//  var input_subject = document.getElementsByName("subject")[0].value
//  var input_message = document.getElementsByName("message")[0].value
// var input_name = document.getElementById("name");
// var input_email = document.getElementById("email");
//  var input_subject = document.getElementById("subject");
//  var input_message = document.getElementById("message");
// var template =

// function sendemail(){
//   var result = ("Nama    : " + input_name.value+ "<br/> "+
//                 "Email   : " + input_email.value+ "<br/>"+
//                 "Subject : " + input_subject.value+ "<br/>"+
//                 "Massage : " + input_message.value);
//   var subject = ("Web Profile : "+ input_subject.value);
//   Email.send({
//     Host : "smtp.gmail.com",
//     port :"587",
//     // UseDefaultCredentials = "true",
//     Username : "webprofileshafuriaru@gmail.com",
//     Password : "Jakarta@22",
//     To : 'syafrial.iot@gmail.com',
//     From : "webprofileshafuriaru@gmail.com",
//     Subject : subject,
//     Body :  result
// }).then(
//       message => alert(message),
//       message =>  document.location.reload()
// );

// console.log(result);  
// console.log(input_email.value);
// console.log(input_subject.value);
// console.log(input_message.value);
// }