import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import  Typography  from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function QualityCard({ isQualityLow, setIsQualityLow}) {
  
  

  return(
    <Card sx={{maxWidth: 275}}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Sound Quality
        </Typography>
        <Typography variant='body2'>
        Maunally control the music quality in event of poor connection
        </Typography>
        
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Quality
        </InputLabel>
        <NativeSelect
          defaultValue={2}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </NativeSelect>
      </FormControl>
      </CardContent>
    </Card>
  )
}