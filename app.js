// Assignment 21-25:
// Question 01:
// var  firstName = prompt("Enter your first name:");
// var  lastName = prompt("Enter your last name:");
// var  fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");

// Question 02:
// var   mobileModel = prompt("Enter your favorite mobile phone model:");
// alert("Length of your favorite mobile phone model is: " + mobileModel.length);

// // Question 03:
// var  word = "Pakistani";
// var  index = word.indexOf("n");
// alert("Index of 'n' in 'Pakistani' is: " + index);

// Question 04:
// var   word = "Hello World";
// var  lastIndex = word.lastIndexOf("l");
// alert("Last index of 'l' in 'Hello World' is: " + lastIndex);

// //  Question 05:
// var  word = "Pakistani";
// var  char = word.charAt(3);
// alert("Character at index 3 in 'Pakistani' is: " + char);


// Question 06:
// var   firstName = prompt("Enter your first name:");
// var   lastName = prompt("Enter your last name:");
// var   fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");

// Question 07:
// var   city = "Hyderabad";
// var   newCity = city.replace("Hyder", "Islam");
// alert("City name after replacement is: " + newCity);

// Question 08:
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
// var  message = "Ali and Sami are best friends. They play cricket and football together.";
// var  newMessage = message.replace(/and/g, "&");
// alert("Message after replacement is: " + newMessage);

//  Question 09:
// var  num = "472";
// var  num = parseInt(num);
// alert("Value: " + num + "\nType: " + typeof num);

// Question 10:
// var  input = prompt("Enter your name:");
// var  upperCase = input.toUpperCase();
// alert("Uppercase name is: " + upperCase);

//  Question 11:
// var   input = prompt("Enter your name:");
// var   titleCase = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// alert("Title case name is: " + titleCase);

//  Question 12:
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var  num = 35.36 ;
// var  num = num.toString();

// var  num = num.replace(".", "");
// alert("Number after conversion is: " + num);


// Question 13:
// var  username = prompt("Enter your username:");
// var  specialChars = "!@,. ";
// var  i;
// for (i = 0; i < specialChars.length; i++) {
//     if (username.indexOf(specialChars[i]) != -1) {
//         alert("Invalid username. Please enter a valid username.");
//         break;
//     }
// }
// if (i == specialChars.length) {
//     alert("Username is valid");
// }
// Question 14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var  searchItem = prompt("Enter the item to search:");
// var  i;
// for (i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() == searchItem.toLowerCase()) {
//        alert("Item found in the list");
//         break;
//     }
// }
// if (i == A.length) {

//     alert("Item not found in the list");
// }


// Question 15:
// var  password = prompt("Enter your password:");
// var  i;
// var  j;
// var  flag = true;
// for (i = 0; i < password.length; i++) {
//     if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
//         break;
// }
// if (password.length < 6) {
//     flag = false;    
// }
// for (j = i; j < password.length; j++) {
//     if (password.charCodeAt(j) >= 48 && password.charCodeAt(j) <= 57)
//         flag = false;
//     else if (password.charCodeAt(j) >= 65 && password.charCodeAt(j) <= 90
//         || password.charCodeAt(j) >= 97 && password.charCodeAt(j) <= 122)
//         flag = true;
// }
// if (flag == false) {
//     alert("Invalid password");
// }

// else {
//     alert("Valid password");
// }
// Question 16:
// var university = "University of Karachi";
// var arr = university.split(" ");

// document.write(arr[0] + "<br>");
// document.write(arr[1] + "<br>");
// document.write(arr[2] + "<br>");
// document.write(arr[3] + "<br>");
// document.write(arr[4] + "<br>");
// document.write(arr[5] + "<br>");


// Question 17:
// var user_input = prompt("Enter your name:");
// var last_char = user_input.charAt(user_input.length - 1);
// document.write(last_char);

// // Question 18:
// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var word = "the";
// var index = str.indexOf(word);
// while (index != -1) {
//     count++;
//     index = str.indexOf(word, index + 1);
// }
// document.write(count);



























