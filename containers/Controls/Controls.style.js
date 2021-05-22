import { makeStyles } from '@material-ui/styles';




const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const LayoutStyle = makeStyles(theme => ({

    paginationGrid:{
        ...theme.grids.pentaGrid,
        height: '42px',
    },
    buttonWrapper:{
        width:'100%',
    }
   
}))

export default LayoutStyle