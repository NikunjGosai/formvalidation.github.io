var email = document.getElementById("email");
var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var address = document.getElementById("address");
var country = document.getElementById("country");
var state = document.getElementById("state");
var zipCode = document.getElementById("zipcode");
var mobileNumber = document.getElementById("mobile-number");
var phoneNumber = document.getElementById("phone-number");

window.addEventListener('DOMContentLoaded', (event) => {
var retrivedObject = localStorage.getItem('obj');
var parseObj = JSON.parse(retrivedObject);

if (localStorage.getItem("obj") === null) {
    return null;
} else {
    email.value = parseObj.emailId;
    firstName.value = parseObj.firstname;
    lastName.value = parseObj.lastname;
    address.value = parseObj.address;
    country.value = parseObj.country;
    state.value = parseObj.state;
    zipCode.value = parseObj.zipCode;
    mobileNumber.value = parseObj.mobileNumber;
    phoneNumber.value = parseObj.phoneNumber;
}
});

document.getElementById("input-btn").addEventListener("click", function (event) {
event.preventDefault();

var obj = {
    "emailId": email.value.trim(),
    "firstname": firstName.value.trim(),
    "lastname": lastName.value.trim(),
    "address": address.value.trim(),
    "country": country.value.trim(),
    "state": state.value.trim(),
    "zipCode": zipCode.value.trim(),
    "mobileNumber": mobileNumber.value.trim(),
    "phoneNumber": phoneNumber.value.trim()
}
console.log(obj);

if (email.value == "" || firstName.value == "" || lastName.value == "" || address.value == "" || country.value == "" || state.value == "" || mobileNumber.value == "" || phoneNumber.value == "" ) {
    saveData(email, firstName, lastName, address, country, state, zipCode, mobileNumber, phoneNumber);
} else {

    localStorage.setItem('obj', JSON.stringify(obj));

    email.value = "";
    firstName.value = "";
    lastName.value = "";
    address.value = "";
    country.value = "";
    state.value = "";
    zipCode.value = "";
    mobileNumber.value = "";
    phoneNumber.value = "";

    document.getElementById("message-box").style.display = "block";
    document.getElementById("cancel-x").style.display = "block";
}
});

function saveData(email, firstName, lastName, address, country, state, zipCode, mobileNumber, phoneNumber) {
var reg_email = /^([a-zA-Z0-9]([a-zA-Z0-9_\.]+)?[a-zA-Z0-9])@([a-zA-Z0-9]([a-zA-Z0-9\-]+)?[a-zA-Z0-9])\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
var email_Val = email.value.trim();

if (email_Val == "") {
    alert("Email cannot be blank");
} else if (!reg_email.test(email_Val)) {
    alert("Please enter valid email");
} 

var reg_firstname=/^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;
var firstName_Val = firstName.value.trim();

if (firstName_Val == "") {
    alert("Please Enter your firstname");
} else if (!reg_firstname.test(firstName_Val)) {
    alert("Please Enter valid name");
}

var reg_lastname=/^[a-zA-Z]([a-zA-Z ]+)?[a-zA-Z]$/;
var lastName_Val = lastName.value.trim();

if (lastName_Val == "") {
    alert("Please Enter your lastname");
} else if (!reg_lastname.test(lastName_Val)) {
    alert("Please Enter valid name");
}

var address_Val = address.value.trim();

if (address_Val == "") {
    alert("Please Enter your address");
} 

var country_Val = country.value.trim();

if (country_Val == "") {
    alert("Enter your Country Name");
} 

var state_Val = state.value.trim();

if (state_Val == "") {
    alert("Enter Your State");
} 

var reg_zipcode = /^[0-9]{6}$/;
zipcode_Val = zipCode.value.trim();

if (zipcode_Val == "") {
    alert("Please Enter your zipcode");
} else if (!reg_zipcode.test(zipcode_Val)) {
    alert("Please Enter valid code");
} 

var reg_mobilenumber = /^[7-9][0-9]{9}$/;
mobilenumber_Val = mobileNumber.value.trim();

if (mobilenumber_Val == "") {
    alert("Enter your Mobile Number");
} else if (!reg_mobilenumber.test(mobilenumber_Val)) {
    alert("Please Enter valid Mobile number");
} 

var reg_phonenumber = /^[7-9][0-9]{9}$/;
phonenumber_Val = phoneNumber.value.trim();

if (phonenumber_Val == "") {
    alert("Enter your Phone Number");
} else if (!reg_phonenumber.test(phonenumber_Val)) {
    alert("Please Enter valid Phone Number");
} 
}

document.getElementById('cancel-x').addEventListener('click', function () {
    document.getElementById("message-box").style.display = "none";
    document.getElementById("cancel-x").style.display = "none";
});





