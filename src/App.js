import React, { useState} from "react";
import  CharacterProvider  from "./context/CharacterProvider";
import CharactersList from "./component/CharacterCard/CharactersList";
import NavBar from "./component/NavBar/NavBar"
import SeriesDescription from "./component/comics/SeriesDescription";
import SeriesList from "./component/Series/SeriesList";
import SearchResultsPage from "./component/NavBar/SearchResultsPage";
import EventList from "./component/Events/EventList";
import Comics from "./component/comics/Comics";
import "./App.css";


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('characters');

const handleSearch = (query) => {
  setSearchQuery(query);
  setActiveTab('search');
};
console.log('setActionTab', setActiveTab);

  return (
   
    <CharacterProvider>
      <div className="App">
         <NavBar onSearch={handleSearch} setActiveTab={setActiveTab}></NavBar>
        <div className="content">
          {activeTab ==="characters" && <CharactersList searchQuery={searchQuery} />}
          {activeTab ==="comics" && <Comics/>}
          {activeTab ==="stories" && <SeriesDescription/>}
          {activeTab ==="events" && < EventList/>}
          {activeTab ==="Series" && <SeriesList/>}
          {activeTab ==="search" && <SearchResultsPage searchQuery={searchQuery} />}
        </div>
      </div>
  <SeriesDescription/>
    {/* Display Series */}
    <SeriesList/>
   {/* Display Events */}
  <EventList/>
 
  </CharacterProvider>
  );
};

export default App;