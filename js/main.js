
/********** JQUERY ************** */


$(document).ready(function () {
  let innerWidth = window.innerWidth;
  let section2Active = false;

  function allExpendControll() {
    $(".expend-btn1").click(function () {
      $(".expend-body1").toggle(400);
      $(".expend-body2").hide(100);
      $(".expend-body3").hide(100);
      $(".expend-body4").hide(100);
      $(".expend1").toggleClass("active-expend");
      $(".expend2").removeClass("active-expend");
      $(".expend3").removeClass("active-expend");
      $(".expend4").removeClass("active-expend");
      checkOpendExpend();
    });

    $(".expend-btn2").click(function () {
      $(".expend-body2").toggle(400);
      $(".expend-body1").hide(100);
      $(".expend-body3").hide(100);
      $(".expend-body4").hide(100);
      $(".expend2").toggleClass("active-expend");
      $(".expend1").removeClass("active-expend");
      $(".expend3").removeClass("active-expend");
      $(".expend4").removeClass("active-expend");
      checkOpendExpend();
    });

    $(".expend-btn3").click(function () {
      $(".expend-body3").toggle(400);
      $(".expend-body1").hide(100);
      $(".expend-body2").hide(100);
      $(".expend-body4").hide(100);
      $(".expend3").toggleClass("active-expend");
      $(".expend1").removeClass("active-expend");
      $(".expend2").removeClass("active-expend");
      $(".expend4").removeClass("active-expend");
      checkOpendExpend();
    });

    $(".expend-btn4").click(function () {
      $(".expend-body4").toggle(400);
      $(".expend-body1").hide(100);
      $(".expend-body2").hide(100);
      $(".expend-body3").hide(100);
      $(".expend4").toggleClass("active-expend");
      $(".expend1").removeClass("active-expend");
      $(".expend2").removeClass("active-expend");
      $(".expend3").removeClass("active-expend");
      checkOpendExpend();
    });
  }

  function checkOpendExpend() {
    let expends = document.querySelectorAll(".expend");
    if (
      expends[0].classList.contains("active-expend") === true ||
      expends[1].classList.contains("active-expend") === true ||
      expends[2].classList.contains("active-expend") === true ||
      expends[3].classList.contains("active-expend") === true
    ) {
      $("#footer").fadeOut();
      $(".section1").addClass("active-section");
      $("#header").fadeOut();
    } else {
      $("#footer").fadeIn();
      $(".section1").removeClass("active-section");
      $("#header").fadeIn();
    }
  }

  allExpendControll(); //END EXPEND FUNCTIONALITY

  /**
   * CAMPUS FUNCTIONALITY
   **/
  $("#arrow1").click(function () {
    $(this).css({ display: "none" });
    $("#arrow2").css({ display: "block" });
    $(".section1").addClass("translateY");
    $(".section2").addClass("active");
    section2Active = true;
    if (section2Active === true && innerWidth <= 890) {
      $("#header").removeClass("transparent");
      $("#header .header-main img").attr(
        "src",
        "./assets/images/brand/logo/logo.svg"
      );
      $("#footer").removeClass("transparent");
    } else {
      $("#header").addClass("transparent");
      $("#header .header-main img").attr(
        "src",
        "./assets/images/brand/logo/logo-white.svg"
      );
      $("#footer").addClass("transparent");
    }
  });

  $("#arrow2").click(function () {
    $(this).css({ display: "none" });
    $("#arrow1").css({ display: "block" });
    $(".section1").removeClass("translateY");
    $(".section2").removeClass("active");
    $("#header").removeClass("transparent");
    $("#header .header-main img").attr(
      "src",
      "./assets/images/brand/logo/logo.svg"
    );
    $("#footer").removeClass("transparent");
    section2Active = false;
    if (section2Active === true && innerWidth <= 890) {
      $("#header").addClass("transparent");
      $("#header .header-main img").attr(
        "src",
        "./assets/images/brand/logo/logo-white.svg"
      );
      $("#footer").addClass("transparent");
    } else {
      $("#header").removeClass("transparent");
      $("#header .header-main img").attr(
        "src",
        "./assets/images/brand/logo/logo.svg"
      );
      $("#footer").removeClass("transparent");
    }
  });

  $("#grandFloor").click(function () {
    console.log("OnClick");
    $("#roomTableTopRight").toggleClass("open");
    $("#grandFloor").toggleClass("bgColor");
  });


  /**
   * ELEMENT CONTROLL WITH RESIZE WINDOW
   **/
  window.onresize = () => {
    innerWidth = window.innerWidth;
    if (section2Active && window.innerWidth <= 890) {
      $("#header").removeClass("transparent");
      $("#header .header-main img").attr(
        "src",
        "./assets/images/brand/logo/logo.svg"
      );
      $("#footer").removeClass("transparent");
    } else {
      if (section2Active && window.innerWidth > 890) {
        $("#header").addClass("transparent");
        $("#header .header-main img").attr(
          "src",
          "./assets/images/brand/logo/logo-white.svg"
        );
        $("#footer").addClass("transparent");
      }
    }
  };
});


/********** VANILLA JS ************** */

/***
 * ANIMATION HANDLE AREA
 * expendAnimationOnLoad()
 * campusResponsivilityAnimationStart()
 * campusResponsivilityAnimationEnd()
 */

function expendAnimationOnLoad() {
  const expends = document.querySelectorAll(".expend");
  const expendsImg = document.querySelectorAll(".expend-box-img");
  expends.forEach((el) => {
    el.classList.add("expend-animation-active");
  });
  expendsImg.forEach((el) => {
    el.classList.add("expend-animation-active");
  });
}

window.onload = () => {
  expendAnimationOnLoad();
};//END EXPEND ANIMATION

let responsivilityNavigators = document.querySelectorAll('.responsivility-navigator');
let responsivilityCrossNavigators = document.querySelector('#responsivility-cross-mavigators');
const responsivilityEl = document.querySelector('#responsivility');
const main = document.querySelector('#main');



function campusResponsivilityAnimationStart() {
  responsivilityEl.classList.add('active-res-area');
  main.classList.add('mainHide-Left');

}

function campusResponsivilityAnimationEnd() {
  responsivilityEl.classList.remove('active-res-area');
  main.classList.remove('mainHide-Left');
}

responsivilityNavigators.forEach((el) => {
  el.addEventListener('click', campusResponsivilityAnimationStart)
})
responsivilityCrossNavigators.addEventListener('click', campusResponsivilityAnimationEnd)//END CAMPUS RESPONSIVILITY ANIMATION

/* ------ Campus Navigate Functionality ----- */

let campusNavigators = document.querySelectorAll('.campus-navigator');
let campusCrossNavigators = document.querySelector('#campus-cross-mavigators');
const campusNavigateMainEl = document.querySelector('#campus-navigate-main');

function campusNavigateAnimationStart() {
  campusNavigateMainEl.classList.add('open');
  main.classList.add('mainHide-Left');

}

function campusNavigateAnimationEnd() {
  campusNavigateMainEl.classList.remove('open');
  main.classList.remove('mainHide-Left');
}

campusNavigators.forEach((el) => {
  el.addEventListener('click', campusNavigateAnimationStart)
})
campusCrossNavigators.addEventListener('click', campusNavigateAnimationEnd)//END CAMPUS RESPONSIVILITY ANIMATION






/**
 * LOGIN FUNCTIONALITY
 * studentLogin()
 * facultyLogin()
 */
function studentLogin() {

  /**
   * HANDLE STUDENT LOGIN
   */
  // this.document.location.href = 'https://auth.www.bracu.ac.bd';
  // this.router.navigate(['/','home']);
}

function facultyLogin() {
  /**
   * HANDLE FACULTY LOGIN
   */
  // this.document.location.href = 'https://auth.www.bracu.ac.bd';
  // this.router.navigate(['/','home']);

}