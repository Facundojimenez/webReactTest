import { createTheme } from '@material-ui/core';
import {indigo} from '@material-ui/core/colors';

const Tema = createTheme({ //createTheme recibe un objeto como argumeto
    palette: { ///a su vez, pallete tambien recibe un objeto como valor
        primary: indigo
    }
})

export default Tema;