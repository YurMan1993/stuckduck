
		
var items = [ "&lt; Are you missing a semi-colon? /&gt;",
			  "&lt; Have You tried turning it on and off again? /&gt;",
		      "&lt; Talk to the duck!!! /&gt;" ];

var printOut = function() {

	var item = items[Math.floor(Math.random() * items.length)];

	document.getElementById("printOutHtml").innerHTML = item;
}
		
