import { makeStyles } from '@material-ui/styles';


import animations from '../../constants/animations';


const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const ContentStyle = makeStyles(theme => ({
    container: {
        ...theme.grids.twoColumnGrid,
        height: "100vh"
    },
    searchContent: {
        ...theme.grids.thirdsGrid,
    },
    searchDisplay: {
        height: '100%',
    },
    profileContainer:{
        borderRight: "solid 1px #463f3f",
        [theme.breakpoints.largeTablet]: {
            borderRight:"none"
        }
    },
    pokemonQuery: {
        height: '50%',
        overflowX: 'auto',
        borderBottom: "#fff solid",
        '&::-webkit-scrollbar': {
            width: '0 !important'
        },
    },
    pokemonGrid: {
        ...theme.grids.fiveColumnGrid,

    },
    iconContainer: {
        display: 'flex',
        marginLeft: theme.spacing(3),
    },
    blackScreen: {
        width: '75%',
        height: '75%',
        margin: '0  auto',
        borderRadius:  theme.borders.softSquare,
        backgroundColor: theme.color.contrastDark,
        ...centeredBox,
    },
    ScreenContainer: {
        width: '280px',
        height: '200px',
        margin: '0  auto',
        marginTop: theme.spacing(1),
        margin: '0  auto',
        display: 'block',
        boxShadow: theme.shadows.leftShadow,
        borderRadius: theme.borders.polygon,
        backgroundColor: theme.color.light,
    },
    buttonsWrapper: {
        width: '100%',
        ...centeredBox,
    },
    bigButton: {
        float: 'right',
        margin: '5px',
        '&:hover': animations.hovers.grow,
        cursor:'pointer'
    },
    moveGrid: {
        ...theme.grids.pentaGrid,
        height: '90px',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            width: '0 !important'
        },
        padding: '0px',

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.color.primaryLight,
        color: theme.color.contrastDarker,
        border: `2px solid ${theme.color.contrastDarker}`,
        padding: theme.spacing(2, 4, 3),
    },
    active: {
        cursor: 'pointer',
        '&:hover': animations.hovers.grow,
    }
}))

export default ContentStyle