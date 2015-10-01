import Ember from 'ember';

export default Ember.Component.extend({
  newUser: false,
  actions: {
    showForm() {
      this.set('newUser', true);
    },
    signUp() {
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password')
      };

      this.sendAction('signUp', params);
      this.set('newUser', false);
    }
  }
});
