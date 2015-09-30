import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('movie', params.movie_id);
  },

  actions: {
    addReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      params.movie.save();
      this.transitionTo('movie', params.movie);
    }
  }
});
