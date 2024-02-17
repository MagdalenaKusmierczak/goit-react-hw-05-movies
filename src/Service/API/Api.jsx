import axios from 'axios';
API_KEY = '3747076c06d2013e08cb76571efc36db';

//trending list https://api.themoviedb.org/3/trending/all/{time_window}
// search list https://api.themoviedb.org/3/search/movie

//Trending
export const optionTrending = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzQ3MDc2YzA2ZDIwMTNlMDhjYjc2NTcxZWZjMzZkYiIsInN1YiI6IjY1Y2YzZjVmODczZjAwMDEzNDBjZTU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5sW1A4zO7D8hUDQe314GGKoo3_co5UmBe94krOn7AE',
  },
};

//Search
export const optionSearch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    query: '',
    include_adult: 'false',
    language: 'en-US',
    page: '1',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzQ3MDc2YzA2ZDIwMTNlMDhjYjc2NTcxZWZjMzZkYiIsInN1YiI6IjY1Y2YzZjVmODczZjAwMDEzNDBjZTU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5sW1A4zO7D8hUDQe314GGKoo3_co5UmBe94krOn7AE',
  },
};

// Get movie details
export const optionDetails = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzQ3MDc2YzA2ZDIwMTNlMDhjYjc2NTcxZWZjMzZkYiIsInN1YiI6IjY1Y2YzZjVmODczZjAwMDEzNDBjZTU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5sW1A4zO7D8hUDQe314GGKoo3_co5UmBe94krOn7AE',
  },
};

//Get movie credits
export const optionCredits = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/credits',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzQ3MDc2YzA2ZDIwMTNlMDhjYjc2NTcxZWZjMzZkYiIsInN1YiI6IjY1Y2YzZjVmODczZjAwMDEzNDBjZTU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5sW1A4zO7D8hUDQe314GGKoo3_co5UmBe94krOn7AE',
  },
};

//Reviews
export const optionReviews = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/reviews',
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzQ3MDc2YzA2ZDIwMTNlMDhjYjc2NTcxZWZjMzZkYiIsInN1YiI6IjY1Y2YzZjVmODczZjAwMDEzNDBjZTU0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5sW1A4zO7D8hUDQe314GGKoo3_co5UmBe94krOn7AE',
  },
};

export const getData = (option) => {
  axios
    .request(option)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
