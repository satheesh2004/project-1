function showSportsSection() {
    var sportsSection = document.getElementById("sports-section");
    var personalSection = document.getElementById("personal-section");
  
    if (sportsSection.style.display === "none" || sportsSection.style.display === "") {
      sportsSection.style.display = "block";
      personalSection.style.display = "none";
    } else {
      sportsSection.style.display = "none";
    }
  }
  
  function showPersonalSection() {
    var sportsSection = document.getElementById("sports-section");
    var personalSection = document.getElementById("personal-section");
  
    if (personalSection.style.display === "none" || personalSection.style.display === "") {
      personalSection.style .display = "block";
      sportsSection.style.display = "none";
    } else {
      personalSection.style.display = "none";
    }
  }
  