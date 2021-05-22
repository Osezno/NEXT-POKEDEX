import { makeStyles } from '@material-ui/styles';

import animations from 'constants/animations';





const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const LayoutStyle = makeStyles(theme => ({
    ...animations,
    root: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
        background: '#000',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 15,
        background: theme.color.primary,
        height: '100%',
        [theme.breakpoints.largeTablet]: {
            overflowX: 'auto',
        }
    },
    header: {
        width: '100%',
        color: theme.color.white,
        ...theme.grids.twoColumnGrid,
        [theme.breakpoints.largeTablet]: {
            gridTemplateColumns: '1fr  1fr',
        },
        alignItems: 'center',
        padding: 0,
        height: '50px',
        borderBottom: `${theme.color.contrastDark} solid`,


    },
    footer: {
        ...theme.grids.octaGrid,
        backgroundColor: theme.color.contrastDark,
        color: theme.color.contrastLight,
        position: 'absolute',
        bottom: '0',
        height: '80px',
        [theme.breakpoints.largeTablet]: {
            position: 'fixed',
        }
    },
    blueButton:{
        animation: `$glow infinite  1s `

    },
    redButton:{
        animation: `$fadeDown ease-in  1s `,
        marginLeft: "20px !important"
    },
    yellowButton:{
        animation: `$fadeDown ease-in  2s `
    },
    greenButton:{
        animation: `$fadeDown ease-in  3s `
    },
    container: {
        ...theme.grids.twoColumnGrid,
   
    },
    searchContent: {
        ...theme.grids.thirdsGrid,
    },
    pokemonQuery: {
        height: '50%',
        overflowX: 'auto',
        borderBottom: "#fff solid",
    },
    pokemonGrid: {
        ...theme.grids.fourColumnGrid
    },
    iconContainer: {
        display: 'flex',
        marginLeft: theme.spacing(3),
    },
    langContainer: {
        display: 'flex',
        float: "rigth",
        justifyContent: "flex-end",
        marginRight: "40px",
        cursor: "pointer",
       
    },
    langText:{
        '&:hover': animations.hovers.grow,
    },
    blackScreen: {
        width: '75%',
        height: '75%',
        margin: '0  auto',
        borderRadius: theme.borders.softSquare,
        backgroundColor: theme.color.contrastDark,
        ...centeredBox,
    },
    ScreenContainer: {
        width: '230px',
        height: '200px',
        margin: '0  auto',
        marginTop: theme.spacing(1),
        margin: '0  auto',
        ...centeredBox,
        boxShadow: theme.shadows.leftShadow,
        borderRadius: theme.borders.polygon,
        backgroundColor: theme.color.light,
    }
}))

export default LayoutStyle