import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});
export default theme;
