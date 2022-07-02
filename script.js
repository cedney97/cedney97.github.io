const sideNav = document.getElementById("mySidenav");


// Home animation

function addArrow() {
    const arrow = document.querySelector('.arrow');
    arrow.innerHTML += "<div></div>";
}


var textWrapper = document.querySelector('.text-ani .letters');
var homeHTML = textWrapper.innerHTML;

function homeAnim() {
    document.querySelector('.text-ani').style.opacity = 1;
    var homeText = textWrapper.textContent;
    textWrapper.innerHTML = "";

    for (let i = 0; i < 12; ++i) {
        textWrapper.innerHTML += "<span class='letter astro-white'>" + homeText[i] + "</span>";  
    }

    let j = 12;

    if (window.innerWidth <= 815) {
        textWrapper.innerHTML += "<br>";
        j = 13;
    }

    for (let i = j; i < 16; ++i) {
        textWrapper.innerHTML += "<span class='letter astro-white'>" + homeText[i] + "</span>";  
    }

    for (let i = 16; i < 27; ++i) {
        textWrapper.innerHTML += "<span class='letter astro-red'>" + homeText[i] + "</span>";
    }
    
    doHomeAnimation();
}

function doHomeAnimation() {
    anime.timeline()
    .add({
        targets: '.text-ani .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    })
    // .add({
    //     targets: '.text-ani',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000,
    //     complete: function(anim) {
    //         $(".letters").html(homeHTML);
    //         homeAnim();
    //     }
    // })
}

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

        // setTimeout(addArrow, 2000);
        homeAnim();
        addArrow();
    }
    else if (curSectionsName == "about") {
        // console.log("about");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and about-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("about-nav");

        // Get rid of arrow
        const arrow = document.querySelector(".arrow");
        arrow.innerHTML = "";
    }
    else if (curSectionsName == "projects") {
        // console.log("projects");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and proj-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("proj-nav");

        // Get rid of arrow
        const arrow = document.querySelector(".arrow");
        arrow.innerHTML = "";
    }
    else if (curSectionsName == "contact") {
        // console.log("contact");

        // Remove all classes
        sideNav.setAttribute("class", "");

        // Add sidenav and cont-nav
        sideNav.classList.add("sidenav");
        sideNav.classList.add("cont-nav");

        // Get rid of arrow
        const arrow = document.querySelector(".arrow");
        arrow.innerHTML = "";
    }
}

function changeAbtText(word) {
    var el = document.getElementById("changer");
    el.classList.add("hide");
    setTimeout(function() {
        if (word == "student") {
            el.innerHTML = "I'm a student at Washington University in St. Louis, studying with the ambitions of majoring in Computer Science and a minor in Music.";
            el.classList.remove("hide");
            console.log(el.classList);
        }
        if (word == "coder") {
            el.innerHTML = "I have experience in Java, C++, HTML, CSS, Javascript, and Arduino C. See my sample projects on the next page for more details!";
            el.classList.remove("hide");
            console.log(el.classList);
        }
        if (word == "musician") {
            el.innerHTML = "I am the Music Director of the Washington Unviersity in St. Louis Aristocats, the school's premiere Disney A Cappella group, and I also have passion for playing piano, guitar, and the drums.";
            el.classList.remove("hide");
            console.log(el.classList);
        }
        if (word == "default") {
            el.innerHTML = "Hover over the pulsing words for more info!";
            el.classList.remove("hide");
            console.log(el.classList);
        }
    }, 500);   
}

$(".option").click(function() {
    $(".option").removeClass("active");
    $(this).addClass("active");
});