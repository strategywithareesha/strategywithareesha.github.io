/* =========================================================
   FAQ
========================================================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", () => {

        const currentlyOpen =
            item.classList.contains("active");


        faqItems.forEach(other => {

            other.classList.remove("active");

        });


        if (!currentlyOpen) {
            item.classList.add("active");
        }

        faqItems.forEach(other => {
            const btn = other.querySelector(".faq-question");
            btn.setAttribute(
                "aria-expanded",
                String(other.classList.contains("active"))
            );
        });

    });

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
        const open = mobileMenu.classList.toggle("open");

        navToggle.setAttribute("aria-expanded", String(open));
        navToggle.setAttribute(
            "aria-label",
            open ? "Close navigation" : "Open navigation"
        );
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}
