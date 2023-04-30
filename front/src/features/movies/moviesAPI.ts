import axios from 'axios'
export const getMovies = async () =>
{
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'ef99f67d50msh89634ae5564d717p1b7d53jsn9b6100f22148',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  const movies = await axios.request(options)
  return movies.data
}