import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movie', { path: '/movies/:movie_id'});
  this.route('theaters');
});

export default Router;
