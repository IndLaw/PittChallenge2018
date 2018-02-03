import Route from '@ember/routing/route';

export default Route.extend({
	
	model() {
		return ['Pain', 'Naseua', 'Fatigue'];
	},
	
	setupController: function(controller, model) {
		this._super(...arguments);
		
		controller.set('symptomOptions', model);
	}
	
});
