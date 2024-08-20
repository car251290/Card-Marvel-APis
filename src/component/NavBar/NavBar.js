import React,{useState,useContext}from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import marvelLogo from './../img/marvelLogo.png';

 const NavBar =({onSearch,setActiveTab}) => {
    const [query,setQuery] = useState(" ");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.
        breakpoints.down('md'));

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };
    const handleSearchClick =() => {
        onSearch(query);
    };

    return (
      <AppBar position="static" sx={{background:'red',color:'yellow'}} >
        <Toolbar>
            {/* Logo */}
            <Box sx={{flexGrow:1, display:'flex',alignItems:'center'}}>
            <img src={marvelLogo} alt='Marvel logo' width='150' />
          
            </Box>
            {/** Navigation Buttons */}
            <Box sx={{display: isMobile ? 'none' : 'flex'}}>
            <Button color="inherit" onClick={()=> setActiveTab('Home')}>
                Home
            </Button>
            <Button color="inherit" onClick={()=> setActiveTab('characters')}>
                Characters
            </Button>
           
            <Button color="inherit" onClick={() => setActiveTab('stories')}>
                        Comics
            </Button>
            <Button color="inherit" onClick={() => setActiveTab('events')}>
                        Events
            </Button>
            <Button color="inherit" onClick={() => setActiveTab('series')}>
                        Series
            </Button>
            </Box>
            {/** Search Bar */}
            <Box sx={{display:'flex',alignItems:'center'}}>
                <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={query}
                onChange={handleSearchChange}
                sx={{background:'white',borderRadius:'1',marginRight:1}}
                />
            <IconButton onClick={handleSearchClick}>
            <SearchIcon/>
            </IconButton>
            </Box>
        </Toolbar>
        </AppBar>
    );

};

export default NavBar;

