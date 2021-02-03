import "./styles/main.scss";

window.myFunction = function () {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

window.toggleFunction = function () {
  var hamburger = "h_menu"; //THIS IS THE NAME OF YOUR HAMBURGER BUTTON
  var closeB = "c_menu";

  var slideNavName = "slideDown"; //THIS IS THE NAME OF YOUR HIDING NAVIGATION

  if ($("#" + slideNavName).attr("class") == "hidden") {
    //CHECKS TO SEE IF YOUR MENU IS CURRENTLY CLOSED
    //CHANGE ICON TO AN 'X'
    $("#" + hamburger).hide();
    $("#" + closeB).show();

    //REVEAL YOUR NAVIGATION
    $("#" + slideNavName).toggleClass("hidden revealed");
  } else if ($("#" + slideNavName).attr("class") == "revealed") {
    //CHECKS TO SEE IF YOUR MENU IS CURRENTLY OPEN
    //CHANGE ICON BACK INTO A HAMBURGER
    $("#" + hamburger).show();
    $("#" + closeB).hide();

    //HIDE YOUR NAVIGATION
    $("#" + slideNavName).toggleClass("revealed hidden");
  }
};
