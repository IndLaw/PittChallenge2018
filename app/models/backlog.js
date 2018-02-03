import DS from 'ember-data';

export default DS.Model.extend({
    nausea: DS.attr('string'),
    vomiting: DS.attr('boolean', { defaultValue: false}),
    lossOfAppetite: DS.attr('boolean', { defaultValue: false}),
    fatigue: DS.attr('boolean', { defaultValue: false}),
    hrOfSleep:  DS.attr('string'),
    muscleCramps: DS.attr('boolean', { defaultValue: false}),
    muscleCrampsNotes:  DS.attr('string'),
    swollenFeetAnkles: DS.attr('boolean', { defaultValue: false}),
    persistingItching: DS.attr('boolean', { defaultValue: false}),
    chestPain: DS.attr('boolean', { defaultValue: false}),
    chestPainScale: DS.attr('number', { defaultValue: 1}),
    chestPainDescription:  DS.attr('string'),
    shortnessOfBreath: DS.attr('boolean', { defaultValue: false}),
    shortnessOfBreathNotes: DS.attr('string'),
    temperature: DS.attr('string'),
    incisionPain: DS.attr('boolean', { defaultValue: false}),
    incisionPainScale: DS.attr('string'),
    bloodPressure: DS.attr('string')
});
