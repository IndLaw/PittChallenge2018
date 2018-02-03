import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('patient', function() {
    this.route('input');
    this.route('backlog');
  });
  this.route('data');
});

export default Router;
