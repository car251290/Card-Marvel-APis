
import md5 from 'md5';
// get the fetch of the characters and the comics from the Marvel api
const ts = new Date().getTime();
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const hash = md5(ts + privateKey + publicKey);
   //console.log('Public Key:', process.env.REACT_APP_MARVEL_PUBLIC_KEY);
   //console.log('Private Key:', process.env.REACT_APP_MARVEL_PRIVATE_KEY);
export const fetchMarvelData= async(endpoint,limit=10)=> {
    const url = `https://gateway.marvel.com:443/v1/public/${endpoint}?apikey=${publicKey}&ts=${ts}&hash=${hash}&limit=${limit}`;
    console.log('Fetching data from:', url);  // Log the URL
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error Https error status! ${response.status}`);

        }
        const data = await response.json();
        return data.data.results;

    } catch(error){
        console.error('Error fetching data:', error);
        return [];
    }

}
export const fetchMarvelCharacters = async(limit=10) => {
   return fetchMarvelData('characters',limit);
};

export const fetchMarvelStories = async(limit=10) => {
   return fetchMarvelData('stories',limit);
    
}

// get the fetch of the events
export const fetchMarvelEvents = async(limit=10) => {
    return fetchMarvelData('events',limit);
};
// Series fetctData, from the MarveL api
export const fetchMarvelSeries = async(limit=10) => {
    return fetchMarvelData('series',limit);

};

export const fetchMarvelComics = async(limit=10)=> {
    return fetchMarvelData('comics',limit);
}


