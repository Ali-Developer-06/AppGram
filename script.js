//*  <!-- ====== Navbar script ====== -->

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//*  <!-- ====== Success script ====== -->

function runCarouselAnimation() {
    gsap.to(".successCarousel", {
        transform: "translateX(-52.5%)",
        duration: 4,
        yoyo: true,
        scrollTrigger: {
            trigger: ".successCarousel",
            scroller: "body",
            start: "top 0%",
            end: "top -50%",
            scrub: 2,
            pin: true,
        },
    });
}
function stopCarouselAnimation() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf(".successCarousel");
}
function checkScreenSize() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        stopCarouselAnimation();
    } else {
        runCarouselAnimation();
    }
}
checkScreenSize();
window.addEventListener("resize", checkScreenSize);

//*  <!-- ====== GSAP Animation ====== -->

const mm = gsap.matchMedia();

// Define the animations for screens larger than 768px
mm.add("(min-width: 769px)", () => {
    gsap.from(".bannerSection", {
        y: 200,
        delay: 1,
        duration: 1,
        opacity: 0
    });

    gsap.from(".about h1", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".about h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".aboutBoxes", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".aboutBoxes",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".collaborateContent .collaborateContent1", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".collaborateContent .collaborateContent1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".collaborateBox", {
        y: 50,
        opacity: 0,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".collaborateBox",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".collaborateContent .collaborateContent2", {
        y: 50,
        opacity: 0,
        delay: 1,
        scrollTrigger: {
            trigger: ".collaborateContent .collaborateContent2",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".servicesContent h1", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".servicesContent h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".servicesContent p", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".servicesContent p",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".servicesCards", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".servicesCards",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".chooseUs h1", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chooseUs h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".chooseUsCards", {
        y: 100,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".chooseUsCards",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".process h1", {
        y: 150,
        opacity: 0,
        scrollTrigger: {
            trigger: ".process h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".processBoxes", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".processBoxes",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".technologiesHeadings h3", {
        y: 150,
        opacity: 0,
        scrollTrigger: {
            trigger: ".technologiesHeadings h3",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".technologiesHeadings h2", {
        y: 150,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".technologiesHeadings h2",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".technologiesImages1", {
        y: 100,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".technologiesImages1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".technologiesImages2", {
        y: 100,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".technologiesImages2",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".bgCostCalculator h1", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".bgCostCalculator h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".bgCostCalculator .bgCostCalculatorPera1", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".bgCostCalculator .bgCostCalculatorPera1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".bgCostCalculator .bgIconPlusContent", {
        y: 100,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".bgCostCalculator .bgIconPlusContent",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".bgCostCalculator .bgIconPlusContentPera2", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".bgCostCalculator .bgIconPlusContentPera2",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".bgCostCalculator a", {
        y: 100,
        delay: 0.2,
        opacity: 0,
        scrollTrigger: {
            trigger: ".bgCostCalculator a",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".successContent h1", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".successContent h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".successContent p", {
        y: 100,
        delay: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: ".successContent p",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".form h1", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".form h1",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".form p", {
        y: 100,
        delay: 0.4,
        opacity: 0,
        scrollTrigger: {
            trigger: ".form p",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });

    gsap.from(".AppGramForm", {
        y: 100,
        delay: 0.6,
        opacity: 0,
        scrollTrigger: {
            trigger: ".AppGramForm",
            start: "top 100%",
            toggleActions: "play reverse play reverse",
        },
    });
});