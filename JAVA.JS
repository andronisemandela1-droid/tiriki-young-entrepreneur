/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.getElementById("navigation");


mobileMenu.addEventListener("click", function () {

    navigation.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

document
    .querySelectorAll(".navigation a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("show");

        });

    });


/* =====================================================
   DROPDOWN ON MOBILE
===================================================== */

const dropdown =
    document.querySelector(".dropdown");

const dropButton =
    document.querySelector(".drop-button");


dropButton.addEventListener("click", function () {

    if (window.innerWidth <= 800) {

        dropdown.classList.toggle("open");

    }

});


/* =====================================================
   BUSINESS DIRECTORY SEARCH
===================================================== */

const searchInput =
    document.getElementById("businessSearch");

const categorySelect =
    document.getElementById("businessCategory");

const businessCards =
    document.querySelectorAll(".directory-card");

const noResults =
    document.getElementById("noResults");


function filterBusinesses() {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();

    const category =
        categorySelect.value;

    let visibleBusinesses = 0;


    businessCards.forEach(function (card) {

        const name =
            card.dataset.name.toLowerCase();

        const cardCategory =
            card.dataset.category;


        const matchesSearch =
            name.includes(search);

        const matchesCategory =
            category === "all" ||
            cardCategory === category;


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "flex";

            visibleBusinesses++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleBusinesses === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


searchInput.addEventListener(
    "input",
    filterBusinesses
);


categorySelect.addEventListener(
    "change",
    filterBusinesses
);


/* =====================================================
   REGISTRATION FORM
===================================================== */

const registrationForm =
    document.getElementById(
        "registrationForm"
    );

const registrationMessage =
    document.getElementById(
        "registrationMessage"
    );


registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const fullName =
            document.getElementById(
                "fullName"
            ).value;

        const businessName =
            document.getElementById(
                "businessName"
            ).value;


        registrationMessage.textContent =
            "Thank you " +
            fullName +
            ". Your registration for " +
            businessName +
            " has been received.";


        registrationMessage.style.color =
            "#087449";


        registrationForm.reset();

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const contactStatus =
    document.getElementById(
        "contactMessageStatus"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "contactName"
            ).value;


        contactStatus.textContent =
            "Thank you " +
            name +
            ". Your message has been received.";


        contactStatus.style.color =
            "#087449";


        contactForm.reset();

    }
);


/* =====================================================
   ANIMATED STATISTICS
===================================================== */

const statistics =
    document.querySelectorAll(
        ".stat strong"
    );


let statisticsStarted = false;


function animateStatistics() {

    if (statisticsStarted) {
        return;
    }


    const statisticsSection =
        document.querySelector(
            ".statistics"
        );


    const sectionPosition =
        statisticsSection.getBoundingClientRect();


    if (
        sectionPosition.top <
        window.innerHeight &&
        sectionPosition.bottom > 0
    ) {

        statisticsStarted = true;


        statistics.forEach(function (counter) {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 60));


            const timer =
                setInterval(function () {

                    current += increment;


                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }


                    counter.textContent =
                        current + "+";

                }, 25);

        });

    }

}


window.addEventListener(
    "scroll",
    animateStatistics
);

animateStatistics();


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".navigation > a"
    );


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(function (item) {

                item.classList.remove(
                    "active"
                );

            });


            this.classList.add("active");

        }
    );

});