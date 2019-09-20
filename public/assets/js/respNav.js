function hamburger() {
    var navigation = document.getElementById("responsiveNav");
    if (navigation.className === "navbar") {
      navigation.className += " responsive";
    } else {
      navigation.className = "navbar";
    }
  }