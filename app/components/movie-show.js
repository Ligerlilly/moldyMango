import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addReview(params) {
      this.sendAction('addReview', params);
    }
  }
});
