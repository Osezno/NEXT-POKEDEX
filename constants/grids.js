
import breakpoints from './breakpoints';

const space = 8
const basicGrid = {
    display: 'grid',
    padding:space * 2,
    gridGap: '16px',
    justifyContent: 'center',
    width: '100%',
} 
const grids = {
    octaGrid: {
        ...basicGrid,
        justifyItems: 'center',
        gridColumnGap: space * 2 ,
        gridTemplateColumns: '1fr  1fr 1fr 1fr 1fr 1fr 1fr',
        [breakpoints.largeTablet]: {
            gridColumnGap: space * 4 ,
            gridTemplateColumns: '1fr  1fr 1fr 1fr',
        }
    },
    pentaGrid: {
        ...basicGrid,
        justifyItems: 'center',
        gridColumnGap: 1 ,
        gridGap: '0px',
        gridTemplateColumns: '1fr  1fr 1fr 1fr 1fr ',
        [breakpoints.tablet]: {
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridColumnGap: 1 
        },
        [breakpoints.largeTablet]: {
            gridTemplateColumns: '1fr 1fr 1fr 1fr ',
            gridColumnGap: 1
        },
        [breakpoints.largePhone]: {
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: 1 
        }
       
    },
    twoColumnGrid:{
        ...basicGrid,
        gridTemplateColumns: '5fr  5fr',
        [breakpoints.largeTablet]: {
            gridTemplateColumns: '1fr',
            gridColumnGap: space * 4
        }
       
    },
    fourColumnGrid:{
         ...basicGrid,
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '8px',
        [breakpoints.tablet]: {
            gridTemplateColumns: '1fr 1fr 1fr',
            gridColumnGap: space * 3
        },
        [breakpoints.largeTablet]: {
            gridTemplateColumns: '1fr 1fr 1fr',
            gridColumnGap: space * 4
        },
        [breakpoints.largePhone]: {
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: space * 4
        }
    },
    fiveColumnGrid:{
        ...basicGrid,
       gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
       gridGap: '8px',
       [breakpoints.tablet]: {
           gridTemplateColumns: '1fr 1fr 1fr',
           gridColumnGap: space * 3
       },
       [breakpoints.largeTablet]: {
           gridTemplateColumns: '1fr 1fr 1fr',
           gridColumnGap: space * 4
       },
       [breakpoints.largePhone]: {
           gridTemplateColumns: '1fr 1fr',
           gridColumnGap: space * 4
       }
   },
    thirdsGrid:{
        ...basicGrid,
        gridTemplateColumns: '1fr 10fr 1fr',
    },
    sixColumnGrid:{
        ...basicGrid,
       gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      
       [breakpoints.largeTablet]: {
           gridTemplateColumns: '1fr 1fr 1fr 1fr',
           gridColumnGap: space * 4
       },
       [breakpoints.largePhone]: {
           gridTemplateColumns: '1fr 1fr 1fr',
           gridColumnGap: space * 4
       }
   }     
}

export default grids;
