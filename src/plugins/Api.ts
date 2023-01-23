import axios from 'axios';

export function getAnime() {
    const options = {
        method: 'GET',
        url: 'https://myanimelist.p.rapidapi.com/anime/51105',
        headers: {
          'X-RapidAPI-Key': 'c77dd41e30msh87770a0a716b6c0p1720ecjsnfd665de77755',
          'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
}