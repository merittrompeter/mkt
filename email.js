function reverseStr(string){
    return string.split('').reverse().join('');
}

var user = 'retepmortkm';
var domain = 'gmail.com';

var finalString = reverseStr(user) + '@' + domain
var emailString = '<a href="mailto:' + finalString +'"><h2><i class="fa fa-envelope-square"></i></h2></a>'

console.log('first',emailString)

$(document).ready(function() {
    $('#contact').append(emailString)
})

