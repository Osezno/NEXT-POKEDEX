import { createMuiTheme } from '@material-ui/core/styles';

import colors from 'constants/colors';
import breakpoints from 'constants/breakpoints';
import grids from 'constants/grids';
import typography from 'constants/typography';
import shadows from 'constants/shadows';
import animations from 'constants/animations';
import borders from 'constants/borders';
// Create a theme instance.
const theme = createMuiTheme({
  grids: { ...grids },
  color: { ...colors },
  borders: { ...borders },
  breakpoints: { ...breakpoints },
  typography: { ...typography },
  shadow: { ...shadows },
  animations: { ...animations },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary:{
      main:colors.secondary
    },
    
    
  },
});

export default theme;