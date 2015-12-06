var app = document.querySelector('#app');

app.user = {
	firstName: 'Kyra',
	lastName:'Bhandari',
	pic: 'images/avatar.jpg',
	email: 'kbhand007@school.org',
	id:0,
	firstRun:true
}

var scroll;

var firstRun = true;

(function(document) {
  'use strict';

	$(window).resize(function() {
    	document.querySelector('paper-scroll-header-panel').condense(true);
    });

    var width = $('body').width();
    if(width > 600){
    	scroll = 128;
    }
    else{
    	scroll = 113;
    }

	// Close drawer after menu item is selected if drawerPanel is narrow
	app.onMenuSelect = function() {

		page.redirect('/' + app.route);

		var drawerPanel = document.querySelector('#paperDrawerPanel');
		if (drawerPanel.narrow) {
		  drawerPanel.closeDrawer();
		}
	};

})(document);