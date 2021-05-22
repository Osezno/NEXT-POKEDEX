import LayoutStyle from './Layout.style'

import colors from '../../constants/colors';
import Text from '../Text/Index'

const useStyles = LayoutStyle

const Footer = () => {
    const classes = useStyles();
    const littleIcons = [colors.primaryLight, colors.tertiary, colors.success]



    return (
        <div className={classes.footer}>
            <Text color={colors.lightest} type="title" style={{marginLeft: '10px'}}>
                Pokedext
            </Text>
        </div>
    );
}

export default Footer;