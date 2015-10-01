import Ember from 'ember';

export default Ember.Component.extend({
  signInUser: false,
  actions: {
    showForm() {
      this.set('signInUser', true);
    },
    signIn() {
      var params = {
        email: this.get('email'),
        password: this.get('password')
      }

      this.sendAction('signIn', 'password', params);
      this.set('signInUser', false);
    }
  }
});
