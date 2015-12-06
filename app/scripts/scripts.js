var app = document.querySelector('#app');

app.user = {
	firstName: 'Kyra',
	lastName:'Bhandari',
	pic: 'images/avatar.jpg',
	email: 'kbhand007@school.org',
	id:0,
	firstRun:true
}

var firstRun = true;

(function(document) {
  'use strict';

	$(window).resize(function() {
    	document.querySelector('paper-scroll-header-panel').condense(true);
    });

})(document);