import Route from '@ember/routing/route';

export default Route.extend({
	
	model() {
		let logs = this.get('store').peekAll('log');
		
		return logs;
	},
	
	actions: {
		viewDetails(log) {
			let expanded = !log.get('expanded');
			log.set('expanded', expanded);
		}
	}
});
