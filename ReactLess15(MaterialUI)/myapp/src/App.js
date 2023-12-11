import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu, ArrowBack } from '@mui/icons-material'

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton aria-label='menu'>
            <Menu/>
          </IconButton>
          <Typography sx={{flexGrow: 1}}>Header</Typography>
          <Box sx={{display: 'flex', gap: '5px'}}>
            <Button variant='contained' color='success'>Auth</Button>
            <Button variant='contained' color='secondary' startIcon={<ArrowBack/>}>Registr</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
