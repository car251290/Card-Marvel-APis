import react, { useContext, useEffect } from "react";
import { MarvelContext } from "../../context/CharacterProvider";

import "./App.css";
const Comics = () => {
const {comics, loading} = useContext(MarvelContext);
if(loading) {
    return <div>Loading...</div>
} 
return (
    <div className="comics-list">
      {comics.map((comic) => (
        <div key={comic.id} className="comic-card">
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <h2>{comic.title}</h2>
        </div>
      ))}
    </div>
  );
};

    
export default Comics;