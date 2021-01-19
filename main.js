
const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 5);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if(this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 100;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 100;
  }

  setTimeout(() => this.type(), typeSpeed);
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const txtElement2 = document.querySelector('.txt-type1');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
  new TypeWriter(txtElement2, words, wait);
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
});

// Local storage 
const Title = document.getElementById('inputTitle')  ;
const Descr = document.getElementById('inputDes')  ; 
const img = document.getElementById('photo') ; 
const categ = document.getElementById('inputState') ; 
const state = document.getElementById('inputCity')  ;
const mail = document.getElementById('inputEmail4')  ;
const phone = document.getElementById('phone')  ;
const btn = document.getElementById('bttn');
const posts = document.getElementById('cat1');


btn.onclick = function (){
  const Title1 =Title.value ; 
const Descr1 = Descr.value;
const img1 = img.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
const categ1 = categ.value;
const state1 =  state.value; 
const mail1 = mail.value;
const phone1 = phone.value; 
    if(Title1,Descr1,img1,categ1,state1, mail1, phone1){
      const obj={
        "title" : Title1 ,
        "description" : Descr1 , 
        "image": img1, 
        "category": categ1, 
        "state": state1, 
        "mail": mail1, 
        "phone": phone1,
      }
      localStorage.setItem("Post",JSON.stringify(obj));
      location.reload();
    }
}; 


