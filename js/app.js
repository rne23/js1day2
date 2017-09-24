firstName = prompt('Please enter your first name:');
lastName = prompt('Please enter your last name:');

console.log(firstName);
alert('Your last name is ' + lastName + '.');

var birthDay = new Date('8/18/1992');
confirmation = confirm('Is your birthday ' + birthDay + '?');
if (confirmation === true){
  alert('You have confirmed that your birthday is ' + birthDay + '.')
} else {
  alert('Your birthday is not ' + birthDay + '!')
}
