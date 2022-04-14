function openNav() {
    if (document.getElementById("mySidenav").style.width == "250px") {
        closeNav();
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("page").style.marginLeft = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("page").style.marginLeft = "0";
}