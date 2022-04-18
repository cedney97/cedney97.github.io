const sideNav = document.getElementById("mySidenav");

function openNav() {
    if (sideNav.style.width == "250px") {
        closeNav();
    } else {
        sideNav.style.width = "250px";
        document.getElementById("page").style.marginLeft = "250px";
    }
}

function closeNav() {
    sideNav.style.width = "0";
    document.getElementById("page").style.marginLeft = "0";
}


const sections = document.querySelectorAll("section");
const options = {
    root: null,
    threshold: 0.3
};
const sectionObservor = new IntersectionObserver(callback, options);

sections.forEach(section => {
    sectionObservor.observe(section);
});

function callback(entries, observer) {
    const [entry] = entries;
    
    // Checks to see if the entry is actually intersecting
    if (!entry.isIntersecting)  {
        return;
    }

    // Get class name of target
    const curSectionsName = entry.target.getAttribute("class");
    
    // Add class to sidenav based on the current section
    if (curSectionsName == "home") {
        // console.log("home");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and home-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("home-nav");
    }
    else if (curSectionsName == "about") {
        // console.log("about");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and about-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("about-nav");
    }
    else if (curSectionsName == "projects") {
        // console.log("projects");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and proj-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("proj-nav");
    }
    else if (curSectionsName == "contact") {
        // console.log("contact");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and cont-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("cont-nav");
    }
}