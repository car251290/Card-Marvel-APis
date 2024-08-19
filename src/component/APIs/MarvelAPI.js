
import md5 from 'md5';
const ts = new Date().getTime();
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const hash = md5(ts + privateKey + publicKey);
   //console.log('Public Key:', process.env.REACT_APP_MARVEL_PUBLIC_KEY);
   //console.log('Private Key:', process.env.REACT_APP_MARVEL_PRIVATE_KEY);

export const fetchMarvelCharacters = async(limit=10) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
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
};

export const fetchMarvelStories = async(limit=10) => {
    const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
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
    };
    
}

// get the fetch of the events
export const fetchMarvelEvents = async(limit=10) => {
    const url = `https://gateway.marvel.com:443/v1/public/events?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
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
    };
};
// Series fetctData, from the MarveL api
export const fetchMarvelSeries = async(limit=10) => {
    const url = `https://gateway.marvel.com:443/v1/public/series?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
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
    };

}