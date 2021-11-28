import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import  Typography  from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function QualityCard({ isQualityLow, setIsQualityLow}) {
  
  const handleChange = (event) => {
    event.preventDefault()
    setIsQualityLow(event.target.value);
  };
  

  return(
    <Card sx={{maxWidth: 275}}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Sound Quality
        </Typography>
        <Typography variant='body2'>
        Maunally control the music quality in event of poor connection
        </Typography>
        </CardContent>
        
        <CardActions className="soundQualityCardActions" >
        <FormControl  className="soundQualityFormControl" variant="standard" sx={{ m: 1, minWidth: 120 }}>
            { <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>}
            <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={isQualityLow}
            onChange={handleChange}
            label="quality"
            >
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"normal"}>Normal</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
            </Select>
        </FormControl>
            
      </CardActions>
     
    </Card>
  )
}