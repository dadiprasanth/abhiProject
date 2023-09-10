import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CustomizedDialogs from './Dialouge';
import img from "./Screenshot 2023-09-10 143044.png"

export default function Project(props) {
  const[open,setOpen]=React.useState(false)
  //console.log(props)
  return (
    <Grid item xs={12} md={4}>
    
    <Card sx={{ maxWidth: 300,height:300 }}>
      
      <CardMedia
        component="img"
       //alt="green iguana"
        height="140"
        src={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.data.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
            if (navigator.share) {
              const shareData = {
                title: 'Share this page',
                text: 'Check out this awesome page: https://www.example.com/page-to-share',
                url: 'https://www.google.com/page-to-share',
              };
          
              navigator.share(shareData)
                .then(() => console.log('Share successful'))
                .catch((error) => console.error('Share failed', error));
            } else {
              // Fallback for browsers that don't support navigator.share
              alert('Sharing is not supported in your browser.');
            }
        }}>Share</Button>
        <Button size="small" onClick={()=>setOpen(!open)}>Learn More</Button>
      </CardActions>
      
    </Card>
    {open&&<CustomizedDialogs data={props.data} open={open} setOpen={setOpen}/>}
    
  </Grid>
  );
}
