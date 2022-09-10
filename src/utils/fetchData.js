export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'd501da5d11msh898f64aad4acdc2p1ad34djsn8fb382759087'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd501da5d11msh898f64aad4acdc2p1ad34djsn8fb382759087',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };



export const fetchData=async(url,options)=> {
    const response=await fetch(url,options);
    const data=await response.json();
    
    return data;
}