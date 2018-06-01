$(function () { 
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
          triggerHook: 'onLeave'
			}
		});

    var slides = $("section");
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addTo(controller);
		}
	});
