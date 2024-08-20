import React, {createContext,useState,useEffect} from 'react';
import { fetchMarvelCharacters,fetchMarvelEvents,fetchMarvelSeries,fetchMarvelStories } from '../component/APIs/MarvelAPI';
export const MarvelContext = createContext();



const CharacterProvider = ({children}) => {
    const [characters,setCharacters] = useState([]); 
   // const [comics,setComics] = useState([]);
    const [stories, setStories] = useState([]);
    const [loading,setLoading] = useState(true);
    const [filteredCharacters,setFilteredCharacters] = useState([]);
    const [events,setEvent] = useState([]);
    const [series,setSeries] = useState([]);


    useEffect(()=> {
    
      const fetchData = async () => {
        setLoading(true);
        try {
            const [characters,stories,eventsData] = await Promise.all([
                fetchMarvelCharacters(),
                fetchMarvelStories(),
                fetchMarvelEvents (),
                fetchMarvelSeries(),
                console.log('fetching data',fetchMarvelSeries())
            ]);
            setCharacters(characters);
            setFilteredCharacters(characters);
            // This is where we will set the comics
            setStories(stories);
            // set the events
            setEvent(eventsData);
            // set the Series
            setSeries(series);
            // false to to stop loading
            setLoading(false);

        } catch (error) {
            console.log(error);
            // handle errors by restting states
            setCharacters([]);
            setFilteredCharacters([]);
            setStories([]);
            setLoading(false);
            //setComics([]);
            setEvent([]);
            setSeries([]); // handle error by resetting series
            setSeries([]);
        } finally {
            setLoading(false);  
        }
      };
      fetchData();
    },[]);
    
        const handleSearch =(query) => {
            if(query) {
                setFilteredCharacters(
                    characters.filter((characters)=> {
                        return characters.name.toLowerCase().includes(query.toLowerCase());
                    })
                );
            } else{
                setFilteredCharacters(characters);
            }
        }
    return(
        <MarvelContext.Provider value=
        {{characters:filteredCharacters,
        loading,
        onSearch:handleSearch,
        //comics, 
        stories, 
        events,
        series // provide the series data to the context
        }}>
        {children}
        </MarvelContext.Provider>
    )

}

export default CharacterProvider;