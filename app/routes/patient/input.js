import Route from '@ember/routing/route';

export default Route.extend({
	/*
		type 1: boolean
		2: scale
		3: text
	*/
	model() {
		let temp = [];
		
		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'pain',
			type: 1
		}));
		
		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Dizziness',
			type: 2
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Nausea',
			type: 2
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Vomiting',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Loss of Appetite',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Hours of Sleep',
			type: 3
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Muscle Cramps',
			type: 1 //Florencio wanted something like a sliding scale after wards but
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Swollen Feet or Ankles',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Persisting Itching',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Chest Pain',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Shortness of Breath',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Temperature',
			type: 3
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Pain over Insion region',
			type: 1
		}));

		temp.addObject(this.get('store').createRecord('symptom', {
			name: 'Blood Pressure',
			type: 3
		}));
		
		return temp;
	},
	
	setupController: function(controller, model) {
		this._super(...arguments);
		
		controller.set('symptomOptions', model);
	}
	
});
