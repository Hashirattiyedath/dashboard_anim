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


//===============> DISBLE COPY BTN  <==============//
const editBtnEl = document.querySelector('.edit_btn');
const inputEl = document.querySelector('.copy_text_area input');

inputEl.setAttribute('setDesabled', true);
editBtnEl.addEventListener('click', () => {

  if (inputEl.hasAttribute('setDesabled')) {
    inputEl.removeAttribute('setDesabled');
  }
  else {
    inputEl.setAttribute('setDesabled', true)
  }
})


//===============> COPY TEXT POPUP  <==============//
const copy_success = document.querySelector('.copy_success');
function copText() {
  inputEl.select();
  document.execCommand("copy");

  copy_success.classList.add('copied');

  setTimeout(() => {
    copy_success.classList.remove('copied');
  }, 1500)
}

//===============> COPY TEXT POPUP  <==============//
const mobilTOggleEl = document.querySelector('.mobile_toggle_menu');
const rightSidebar = document.querySelector('.dashboard_right_wrapper');

mobilTOggleEl.addEventListener('click', function () {
  rightSidebar.classList.toggle('active');
  this.classList.toggle('active');
})

//===============> AOS initializtion <==============//
AOS.init();


//===============> ENABLE ANIMATION <==============//




var loadingVar;
let preloader__wrapper = document.querySelector('.preloader__wrapper');
let preloader__img = document.querySelector('.preloader__img');

window.addEventListener('load', () => {
  loadingVar = setTimeout(showPage, 850)
})

const showPage = () => {
  preloader__wrapper.classList.add("bg_done");
  preloader__img.classList.add("loader_done");

  setTimeout(() => {
    //====> enable WOW
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
  }, 200)

}


