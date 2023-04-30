import axios from 'axios'
export const getMovies = async () =>
{
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'XXX',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  const movies = await axios.request(options)
  return movies.data
}