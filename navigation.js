document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("link-btn");
  const navbar = document.getElementById("floating-navbar");

  function isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
  }

  function updateNavbarState() {
    if (isLandscape()) {
      navbar.classList.add("nav-collapsed");
      btn.style.display = "flex";
    } else {
      navbar.classList.remove("nav-collapsed");
      btn.style.display = "none";
    }
  }

  btn.addEventListener("click", function() {
    if (isLandscape()) {
      navbar.classList.toggle("nav-collapsed");
    }
  });

  window.addEventListener("resize", updateNavbarState);
  window.addEventListener("orientationchange", updateNavbarState);

  updateNavbarState();
});

function showLinks(){
    console.log("Wooh!");
    navigation.style.display ="block";
    navigation.style.backgroundColor = "transparent";
}
function hideLinks(){
    console.log("Yay!");
    list.style.display = "none";
    navigation.style.backgroundColor = "red";
}

