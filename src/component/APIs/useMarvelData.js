import {useState,useEffect,useCallback} from 'react';

import { fetchMarvelCharacters,fetchMarvelEvents,fetchMarvelStories,fetchMarvelSeries, fetchMarvelComics} from './MarvelAPI';
export const useMarvelData = () => {
    const [data,setData] = useState({characters:[],stories:[],events:[],series:[],comics:[]});
    const [loading,setLoading] = useState(true);

    const fetchData = useCallback(async() => {
        setLoading(true);
        const [characters,stories,events,series,comics] = await Promise.all([
            fetchMarvelCharacters(10),
           fetchMarvelComics(10),
            fetchMarvelStories(10),
            fetchMarvelEvents(10),
            fetchMarvelSeries(10)
        ]);
        setData({characters,stories,events,series,comics});
        setLoading(false);


    },[]);
    useEffect(() => {
        fetchData();
    },[fetchData]);

    
    return {data,loading};


}