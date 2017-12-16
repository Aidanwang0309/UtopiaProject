$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();


    var movingleftHand = new TimelineMax()
        .fromTo(".right-hand", 1, {x: "200%", y:"-10%"}, {x: "100%", y:"20%", ease: Linear.easeNone})

    new ScrollMagic.Scene({
        triggerElement:"#hands-trigger",
        offset:350,
        duration:450

    })
        .setPin("#hands-trigger")
        .setTween(movingleftHand)
        .addTo(controller);



    var movingleftHand = new TimelineMax()
        .fromTo(".left-hand", 1, {x: "-100%", y:"-50%"}, {x: "20%", y:"0%", ease: Linear.easeNone})

    new ScrollMagic.Scene({
        triggerElement:"#hands-trigger",
        offset:350,
        duration:500

    })
        .setPin("#hands-trigger")
        .setTween(movingleftHand)
        .addTo(controller);

    //


    new ScrollMagic.Scene({
        triggerElement:"#hands-trigger",
        offset:1000,
    })
        .setPin("#hands-trigger")
        .setTween(".grey", 5, {filter: "grayscale(0%)"})
        .addTo(controller);


    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.white", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        // .fromTo(".left-head",1,{y: "0%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo(".right-head",1,{y: "-50%"}, {y: "0%", ease: Linear.easeNone});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        offset:-60,
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
    })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addTo(controller);

});
