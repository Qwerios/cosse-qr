import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'
import Typography from '@mui/material/Typography';
import MainTabs from './components/main-tabs';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cosseTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#60a72e',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#007635',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
  },
});
// Jotai needs no provider: atoms resolve against a module-level default
// store, which is why the former <RecoilRoot> wrapper is gone.
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={cosseTheme}>
        <AppBar position="static" sx={{color: '#ffffff'}}>    
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>     
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Cosse Camper Adventure QR</Typography>                     
          </Toolbar>
        </AppBar>
        <MainTabs />
      </ThemeProvider>      
    </div>
  )
}

export default App
