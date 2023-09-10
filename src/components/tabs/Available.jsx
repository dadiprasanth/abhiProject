import Project from "./Project"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
export default function Available(props){
  return(
    <Grid container spacing={2}>
    {props.data.map(x=>{
      return <Project data={x}/>
    })}
    </Grid>)
  

  
}