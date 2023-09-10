// components/Footer.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <BottomNavigation style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <FacebookIcon/>
      <TwitterIcon/>
      <InstagramIcon/>
      
    </BottomNavigation>
  );
};

export default Footer;
