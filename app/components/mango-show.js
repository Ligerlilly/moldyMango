import Ember from 'ember';

export default Ember.Component.extend({
  mangoNum: function(rating) {
    var mangos=[]
    for(var i=0; i < (rating+1); i++) {
      mangos.push(i);
    }
    return mangos
  }
});
