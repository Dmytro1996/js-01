alert('Hello,JavaScript!');

let userName=prompt('Enter your name');
let age=prompt('How old are you');
let olderAge=add(parseInt(age), 1);
alert(olderAge);
let greetings='Hello, ';
alert(greetings+userName);
if (parseInt(age)>=18) {
    alert('You are adult')
} else {
   alert('You are not adult')
}
function add(a, b) {
    let result=a+b;
    return result;
}