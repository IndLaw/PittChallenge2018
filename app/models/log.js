import DS from 'ember-data';

export default DS.Model.extend({
	time: DS.attr('date'),
	symptoms: DS.attr(),
	notes: DS.attr('string'),
	type: DS.attr('number'),

	isSlider: Ember.computed('type', function() {
		return this.get('type') === 2;
	}),
	
	isText: Ember.computed('type', function() {
		return this.get('type') === 3;
	})
});
