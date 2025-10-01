const linkButton = document.getElementById("link-btn");
const navigation = document.getElementById("floating-navbar");
const list = document.getElementById("links-list");
let toggle = true;

if (window.matchMedia("(orientation: portrait)").matches) {
    linkButton.style.display = "none";
    console.log("portrait");
}
if (window.matchMedia("(orientation: landscape)").matches) {
   console.log("landscape")

    linkButton.addEventListener("click", () => {

    toggle = !toggle;
    if (toggle){
        linkButton.textContent = "hide links";
        console.log("hello, i am working");
                navigation.style.width = "300px";
        showLinks();

    }
    else{
        linkButton.textContent = "show links";
        console.log("hello, the button has been pressed");
        navigation.style.width = "100px";
        hideLinks();
    }
});
}

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

