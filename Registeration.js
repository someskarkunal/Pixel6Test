var val;
var count=0;

document.getElementById("verification").style.display = "none";
//Button Submit
function myTest() {
  var fname = document.getElementById('fname').value;
  var len = fname.split(" ");
  if (len[0].length < 4 || len[1].length < 4) {
    document.getElementById("fnamemsg").innerHTML = "Invalid input, please input 'FirstName(4chars>)(space)LastName(4chars>)'.";
  }
  else {
    var pno = document.getElementById("pno").value;
    document.getElementById("valmsg").innerHTML = "Dear "+ len[0] +",Thank you for your enquiry. A 4 digit verification number has been sent to your phone number: " + pno + ", please enter in the following box and submit for confirmation:";
    document.getElementById("valmsg2").innerHTML = "Kindly refer to the console to get the OTP.";
    document.getElementById("initform").style.display = "none";
    document.getElementById("verification").style.display = "block";
    val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
  }
}
//Button Validate
function validation(){
  
  var inp = document.getElementById("otp").value;
  if(val!=+inp)
  {
    document.getElementById("testotp").innerHTML="Incorrect OTP, Kindly re-enter.";
    val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    count++;
    if(count==3)
    {
      window.location.href = "http://pixel6.co/test";
    }
  }
  else{
    document.getElementById("testotp").innerHTML="Validation Successful!";
    window.location.href = "http://pixel6.co/";
  }
}
//Replace function for formatting phone number
function replaceAll(src, search, replace) {
  return src.split(search).join(replace);
}
//formatting phone number and displaying its provider name and location
function formatPhoneText(value) {
  value = this.replaceAll(value.trim(), "-", "");
  value = this.replaceAll(value.trim(), "(", "");
  value = this.replaceAll(value.trim(), ")", "");
  var initvalue = value.slice(0, 3);
  if (value.length > 3 && value.length <= 6)
    value = initvalue + "-" + value.slice(3);
  else if (value.length > 6)
    value = initvalue + "-" + value.slice(3, 6) + "-" + value.slice(6);
  var res = "(" + value.slice(0, 3) + ")" + "-" + value.slice(4, 12);

  if (value.slice(0, 3) == '')
    return '';
  else
    if (value.slice(0, 3) >= 621 && value.slice(0, 3) <= 799)
      document.getElementById("providermsg").innerHTML = "Reliance Jio";
      //State codes given from 101-136
  if (value.slice(4, 7) == 101)
    document.getElementById("statemsg").innerHTML = ", Andhra Pradesh";
  else if (value.slice(4, 7) == 102)
    document.getElementById("statemsg").innerHTML = ", Arunachal Pradesh";
  else if (value.slice(4, 7) == 103)
    document.getElementById("statemsg").innerHTML = ", Assam";
  else if (value.slice(4, 7) == 104)
    document.getElementById("statemsg").innerHTML = ", Bihar";
  else if (value.slice(4, 7) == 105)
    document.getElementById("statemsg").innerHTML = ", Chhattisgarh";
  else if (value.slice(4, 7) == 106)
    document.getElementById("statemsg").innerHTML = ", Goa";
  else if (value.slice(4, 7) == 107)
    document.getElementById("statemsg").innerHTML = ", Gujarat";
  else if (value.slice(4, 7) == 108)
    document.getElementById("statemsg").innerHTML = ", Haryana";
  else if (value.slice(4, 7) == 109)
    document.getElementById("statemsg").innerHTML = ", Himachal Pradesh";
  else if (value.slice(4, 7) == 110)
    document.getElementById("statemsg").innerHTML = ", Jharkhand";
  else if (value.slice(4, 7) == 111)
    document.getElementById("statemsg").innerHTML = ", Karnataka";
  else if (value.slice(4, 7) == 112)
    document.getElementById("statemsg").innerHTML = ", Kerala";
  else if (value.slice(4, 7) == 113)
    document.getElementById("statemsg").innerHTML = ", Madhya Pradesh";
  else if (value.slice(4, 7) == 114)
    document.getElementById("statemsg").innerHTML = ", Maharashtra";
  else if (value.slice(4, 7) == 115)
    document.getElementById("statemsg").innerHTML = ", Manipur";
  else if (value.slice(4, 7) == 116)
    document.getElementById("statemsg").innerHTML = ", Meghalaya";
  else if (value.slice(4, 7) == 117)
    document.getElementById("statemsg").innerHTML = ", Mizoram";
  else if (value.slice(4, 7) == 118)
    document.getElementById("statemsg").innerHTML = ", Nagaland";
  else if (value.slice(4, 7) == 119)
    document.getElementById("statemsg").innerHTML = ", Odisha";
  else if (value.slice(4, 7) == 120)
    document.getElementById("statemsg").innerHTML = ", Punjab";
  else if (value.slice(4, 7) == 121)
    document.getElementById("statemsg").innerHTML = ", Rajasthan";
  else if (value.slice(4, 7) == 122)
    document.getElementById("statemsg").innerHTML = ", Sikkim";
  else if (value.slice(4, 7) == 123)
    document.getElementById("statemsg").innerHTML = ", Tamil Nadu";
  else if (value.slice(4, 7) == 124)
    document.getElementById("statemsg").innerHTML = ", Telangana";
  else if (value.slice(4, 7) == 125)
    document.getElementById("statemsg").innerHTML = ", Tripura";
  else if (value.slice(4, 7) == 126)
    document.getElementById("statemsg").innerHTML = ", Uttar Pradesh";
  else if (value.slice(4, 7) == 127)
    document.getElementById("statemsg").innerHTML = ", Uttarakhand";
  else if (value.slice(4, 7) == 128)
    document.getElementById("statemsg").innerHTML = ", West Bengal";
  else if (value.slice(4, 7) == 129)
    document.getElementById("statemsg").innerHTML = ", Andaman and Nicobar";
  else if (value.slice(4, 7) == 130)
    document.getElementById("statemsg").innerHTML = ", Chandigarh";
  else if (value.slice(4, 7) == 131)
    document.getElementById("statemsg").innerHTML = ", Dadra Nagar Haveli";
  else if (value.slice(4, 7) == 132)
    document.getElementById("statemsg").innerHTML = ", Daman and Diu";
  else if (value.slice(4, 7) == 133)
    document.getElementById("statemsg").innerHTML = ", Delhi";
  else if (value.slice(4, 7) == 134)
    document.getElementById("statemsg").innerHTML = ", Jammu and Kashmir";
  else if (value.slice(4, 7) == 135)
    document.getElementById("statemsg").innerHTML = ", Lakshadweep";
  else if (value.slice(4, 7) == 136)
    document.getElementById("statemsg").innerHTML = ", Ladakh";
  else if (value.slice(0, 3) >= 801 && value.slice(0, 3) <= 920)
    document.getElementById("providermsg").innerHTML = "Idea";
  else if (value.slice(0, 3) >= 921 && value.slice(0, 3) <= 999)
    document.getElementById("providermsg").innerHTML = "Vodafone";
  else
    document.getElementById("providermsg").innerHTML = "";
  return res;
}
function validatePhone(p) {
  var phoneRe = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}
function onKeyUp(e) {
  var input = e.target;
  var formatted = formatPhoneText(input.value);
  var isError = (validatePhone(formatted) || formatted.length == 0);
  var color = (isError) ? "gray" : "red";
  var borderWidth = (isError) ? "1px" : "3px";
  input.style.borderColor = color;
  input.style.borderWidth = borderWidth;
  input.value = formatted;
}
function setupPhoneFields(className) {
  var lstPhoneFields = document.getElementsByClassName(className);

  for (var i = 0; i < lstPhoneFields.length; i++) {
    var input = lstPhoneFields[i];
    if (input.type.toLowerCase() == "text") {
      input.addEventListener("keyup", onKeyUp);
    }
  }
}
setupPhoneFields("phoneNumber");