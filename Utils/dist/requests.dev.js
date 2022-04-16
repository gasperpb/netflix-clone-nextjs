"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_KEY = process.env.API_KEY;
var _default = {
  fetchTrending: {
    title: 'Trending',
    url: "/trending/all/week?api_key=".concat(API_KEY, "&language=en-US")
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-US")
  },
  fetchActionMovies: {
    title: 'Action Movies',
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28")
  },
  fetchComedyMovies: {
    title: 'Comedy Movies',
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35")
  },
  fetchHorrorMovies: {
    title: 'Horror Movies',
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27")
  },
  fetchRomanceMovies: {
    title: 'Romance Movies',
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749")
  },
  fetchDocumentaries: {
    title: 'Documentaries',
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=99")
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=878")
  }
};
exports["default"] = _default;