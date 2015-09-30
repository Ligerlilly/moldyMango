import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Ember.RSVP.hash({
    //   movies: this.store.findAll('movie')
    // });
    return this.store.findAll('movie')
  }
});
