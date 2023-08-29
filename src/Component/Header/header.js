import React from "react";
import "../index.css"
import {useNavigate,Outlet,useParams,useLocation } from "react-router-dom";
import Footer from "../Footer/footer";
import {motion} from "framer-motion";
import MenuIcon from "../../Icons/menu_FILL0_wght400_GRAD0_opsz24.svg";
import {ListItemText,ListItemIcon,ListItemButton,ListItem,Divider,List,Button,Drawer,Box} from '@mui/material';
import mAvatar from "../../Icons/m_avatar.jpg";
import fAvatar from "../../Icons/f_avatar.jpg";
const Header = () =>{
  const location= useLocation ();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

const navbar = [{label:'Home', pathName:'/'},{label:'Contact', pathName:'/contact'},{label:'About', pathName:'/aboutUs'}]
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top',backgroundColor:'#2c2b2d', color:'white', }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navbar.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{backgroundColor:location.pathname === text.pathName ? '#ddd':null,color:location.pathname === text.pathName? 'black':null  }}>
              <ListItemText primary={text.label} onClick={()=>navigate(text.pathName)}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return( <><header className="header">
    <div  className="logo" onClick={()=>navigate('/')}>Text cover</div>
    <div className='drawer'>
      <Button className='drawer-button' onClick={toggleDrawer('top', true)}> <img src={MenuIcon} alt="Icon"/></Button>
      <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', false)}
      >
        {list('top')}
      </Drawer>
    </div>
    <div className="header-right">
      <a style={{backgroundColor:location.pathname === '/'? '#ddd':null,color:location.pathname === '/'? 'black':null  }} onClick={()=>navigate('/')}>Home</a>
      <a style={{backgroundColor:location.pathname === '/contact'? '#ddd':null,color:location.pathname === '/contact'? 'black':null }} onClick={()=>navigate('/contact')}>Contact</a>
      <a style={{backgroundColor:location.pathname === '/aboutUs'? '#ddd' :null,color:location.pathname === '/aboutUs'? 'black':null }} onClick={()=>navigate('/aboutUs')}>About</a>
    </div>
  </header><div style={{marginBottom:'120px'}} className='content-render'/><Outlet/><Footer/></>)
}
export default Header;