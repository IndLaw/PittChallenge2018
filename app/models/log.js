import DS from 'ember-data';

export default DS.Model.extend({
	time: DS.attr('date'),
	symptoms: DS.attr(),
	notes: DS.attr('string')
});
