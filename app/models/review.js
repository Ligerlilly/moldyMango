import DS from 'ember-data';

export default DS.Model.extend({
  movie: DS.belongsTo('movie', {async: true}),
  author: DS.attr(),
  content: DS.attr(),
  title: DS.attr(),
  rating: DS.attr(),
  createdAt: DS.attr('date')
});
