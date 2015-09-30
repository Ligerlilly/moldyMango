import Ember from 'ember';

export function isMoldy(params) {
  var movie = params[0];
  return movie.get('Metascore') < 50 ? true : false;
}

export default Ember.Helper.helper(isMoldy);
