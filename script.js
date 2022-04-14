function openNav() {
    if (document.getElementById("mySidenav").style.width == "250px") {
        closeNav();
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementsByClassName("page-container").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("page-container").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}