import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    return this.store.findRecord('movie', params.movie_id);
    //  var movie =
    //.then(function(movie) {
    //   var moldy = movie.get('Metascore') < 50 ? 'true' : 'false';
    //   movie.set('moldy', moldy)
    //
    // });
    // debugger;
    // return movie;
  },
  // moldy(model) {
  //   model.get('Metascore') < 50 ? true : false
  // }
});
