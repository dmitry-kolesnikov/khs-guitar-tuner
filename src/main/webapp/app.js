define(['backbone', 'router/workspaceRouter'], function(Backbone, WorkspaceRouter) {
	// Using ECMAScript 5 strict mode during development. By default r.js will ignore that.
	"use strict";

	 $(function(){
		window.tunnings = {
			routers : {
				workspaceRouter : WorkspaceRouter
			},
			views : {},
			models : {},
			ticker: null
		};
		
		// clear local storage
		localStorage.clear();
		var started = Backbone.history.start({pushState:false, root:'/HTML5BackboneJQMRequireJS/'});
		window.tunnings.routers.workspaceRouter.navigate("#index", {trigger:true});
	});
});
