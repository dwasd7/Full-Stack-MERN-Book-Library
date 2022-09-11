import React , {useState} from 'react'
import {AppBar, Typography,Toolbar,Tabs,Tab} from '@mui/material';
import logo from './logo.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from "framer-motion";
import {NavLink} from "react-router-dom";


const Header = () => {
    const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor:'#c2185b'}} className="header" position='sticky'>
            <Toolbar>
                <Typography><motion.img  whileHover={{scale: 1.2}} src={logo} /></Typography>
                    
                <Tabs sx={{ml:'auto'}} textColor= "inherit" TabIndicatorProps={{style: {background:'white'}}} value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/books"  label='My Books'/>
                    <Tab LinkComponent={NavLink} to="/add"  label='Add Book'/>                   
                    <Tab label={<FavoriteIcon/> }/>
                </Tabs>
            </Toolbar>
        </AppBar>
        
    </div>
  )
}


export default Header