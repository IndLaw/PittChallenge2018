import Route from '@ember/routing/route';

export default Route.extend({
	
	model() {
		return this.get('store').peekAll('log');
	},
	
	actions: {
		viewDetails(log) {
			let expanded = !log.get('expanded');
			log.set('expanded', expanded);
		}
	}
});
