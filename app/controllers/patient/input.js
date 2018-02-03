import Controller from '@ember/controller';

export default Controller.extend({
	
	symptomOptions: [],
	selectedSymptoms: [],
	additionalNotes: '',
	
	actions: {
		
		saveLog() {
			
		},
		
		resetLog() {
			this.set('selectedSymptoms', []);
			this.set('additionalNotes', '');
		}
	}
	
});
