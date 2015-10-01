import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var email = this.get('session.currentUser.email')
    debugger;
    return Ember.RSVP.hash({
      movie: this.store.findRecord('movie', params.movie_id),
      user: this.store.findAll('user').forEach(function(user) {
          debugger;
          if (user.get('email') === email) {

            return user;
          }
        })
      });
      // .then(function(users) {
      //   var regex = new RegExp(email);
      //
      //   return users.filter(function(user) {
      //     return regex.test(user.get('email'));
      //   });
      // })

    // return this.store.findRecord('movie', params.movie_id);
  },

  actions: {
    addReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      params.movie.save();
      // var id = this.get('session.id')
      // var user = this.store.findRecord('user', id);
      debugger;
      params.user.save();
      this.transitionTo('movie', params.movie);
    }
  }
});
