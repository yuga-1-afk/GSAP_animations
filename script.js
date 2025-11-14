gsap.from(".logo_img", {
    x: "-200px",
    rotate: "-360",
    duration: 1.5,
    ease: "bounce",
});

gsap.from(".navbar", {
    width: 0,
    opacity: 0,
    ease: "ease-in",
    duration: 2,
});

gsap.from(".links", { opacity: 0, duration: 1, delay: 1, stagger: 0.4 });

gsap.from(".hero_banner", {
    opacity: 0,
    y: "100%",
    duration: 1,
    ease: "ease-out",
});

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".product_info_img",
        start: "20% 80%",
        end: "60% 60%",
        scrub: false,
        markers: true,
    },
});

timeline
    .from(".product_info_img", {
        x: 500,
        duration: 1,
    })
    .from(".about_products_sub", {
        scale: 0,
        ease: "bounce",
        duration: 0.5,
        stagger: 0.5,
    })
    .from(".product_card", {
        right: "400px",
        opacity: 0,
    })
    .from(".product_card2", {
        left: "400px",
        opacity: 0,
    })
    .from(".icons_of_icons_with_text", {
        rotate: "-360",
        opacity: 0,
        stagger: 0.5,
        duration: 0.5,
    });
