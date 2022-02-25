//===============> BOOKING TAB  <==============//

function openBookingTab(evt, openBookingTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  booking_btns = document.getElementsByClassName("booking_btn");
  for (i = 0; i < booking_btns.length; i++) {
    booking_btns[i].className = booking_btns[i].className.replace(" active", "");
  }
  document.getElementById(openBookingTab).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();