function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

exports.Contact = Contact;
