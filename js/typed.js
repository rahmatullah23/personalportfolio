$(function(){
	$(".typed").typed({
		strings: ["Full-Stack Developer.", "Freelancer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 80,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 2,
		// time before backspacing
		backDelay: 1700,
		// loop
		loop: true,
		// loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});