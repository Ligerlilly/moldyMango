import DS from 'ember-data';

export default DS.Model.extend({
  // OMDB API
  Actors: DS.attr(),
  Awards: DS.attr(),
  Country: DS.attr(),
  Director: DS.attr(),
  Genre: DS.attr(),
  Language: DS.attr(),
  Metascore: DS.attr(),
  Plot: DS.attr(),
  Poster: DS.attr(),
  Rated: DS.attr(),
  Released: DS.attr(),
  Response: DS.attr(),
  Runtime: DS.attr(),
  Title: DS.attr(),
  Type: DS.attr(),
  Writer: DS.attr(),
  Year: DS.attr(),
  imdbID: DS.attr(),
  imdbRating: DS.attr(),
  imdbVotes: DS.attr()
});
