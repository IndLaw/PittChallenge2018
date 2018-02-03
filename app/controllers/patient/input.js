import Controller from '@ember/controller';

export default Controller.extend({
	
	symptomOptions: [],
	selectedSymptoms: [],
	
	actions: {
		chooseSymptom(symptom) {
			this.get('selectedSymptoms').addObject(symptom);
		}
	}
	
});
