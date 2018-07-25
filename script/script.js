$(function() {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  var slides = $("section");
  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i]
    })
      .setPin(slides[i])
      .addTo(controller);
  }

  var dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
      reverse: true
    })
      .setClassToggle(dots[i], "selected")
      .addTo(controller);
  }

  var animate = document.querySelectorAll("section");

  for (var i = 0; i < animate.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: animate[i]
    })
      .setClassToggle(animate[i], "animate")
      .addTo(controller);
  }
  $(".offer-box").slideUp(slow);
});
