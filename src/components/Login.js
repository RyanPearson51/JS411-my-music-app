import React from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login({ handleClick }) {
    
    return(
        <Stack spacing={2} direction='row'>
            <TextField id='standard-basic' label='Username *' size='small' variant='standard' />
            <TextField id='standard-basic' label='Password *' size='small' variant='standard' />
            <Button onClick={handleClick} variant='contained'>Login</Button>
        </Stack>
    )
}