var Contact = require('./../js/contact.js').Contact;

$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputFirstName, inputLastName);

    $("ul#contacts").append("<li><span class='contact'>") + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});

exports.Contact = Contact;
