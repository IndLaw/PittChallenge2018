import Controller from '@ember/controller';

export default Controller.extend({
	
	symptomOptions: [],
	selectedSymptoms: [],
	additionalNotes: '',
	
	reset() {
		this.set('selectedSymptoms', []);
		this.set('additionalNotes', '');
	},
	
	actions: {
		
		saveLog() {
			let that = this;
			
			let temp = that.get('selectedSymptoms').objectAt(0);
			let tttt = temp.get('value');
			
			this.get('store').createRecord('log', {
				time: new Date(),
				symptoms: that.get('selectedSymptoms'),
				notes: that.get('additionalNotes')
			});
			
			this.transitionToRoute('patient.backlog');
		},
		
		resetLog() {
			this.reset();
		}
	}
	
});
