import DS from 'ember-data';

export default DS.Model.extend({
  movie: DS.belongsTo('movie', {async: true}),
  user: DS.belongsTo('user', {async: true}),
  content: DS.attr(),
  title: DS.attr(),
  rating: DS.attr(),
  createdAt: DS.attr('date')
});
