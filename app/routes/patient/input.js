import Route from '@ember/routing/route';

export default Route.extend({
	
	model() {
		let temp = [];
		
		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'pain',
			type: 1
		}));
		
		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Dizziness',
			type: 1
		}));
		
		return temp;
	},
	
	setupController: function(controller, model) {
		this._super(...arguments);
		
		controller.set('symptomOptions', model);
	}
	
});
