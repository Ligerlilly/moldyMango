import Ember from 'ember';
function mangos(rating) {
  var mangos=[]
  for(var i=0; i < (rating); i++) {
    mangos.push(i);
  }
  return mangos

}
export default Ember.Component.extend({
  newReview: false,
  actions: {
    showReview() {
      this.set('newReview', true);
    },
    hideReview() {
      this.set('newReview', false);
    },
    addReview() {
      var params = {
        title: this.get('title'),
        author: this.get('session.currentUser.email'),
        content: this.get('content'),
        createdAt: new Date(),
        movie: this.get('movie'),
        rating: mangos(this.get('rating'))

      }
      debugger;
      this.sendAction("addReview", params);
      this.set('newReview', false);
      window.location.reload();
    }
  }
});
