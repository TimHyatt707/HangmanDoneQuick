import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#28AFB0' },
    secondary: { main: '#19647E' }
  },
  status: {
    danger: 'orange'
  }
});

export default theme;
