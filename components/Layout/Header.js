
import LayoutStyle from './Layout.style'
import CircleIcon from 'components/Icons/CircleIcon'
import colors from 'constants/colors';
import Text from 'components/Text/Index'

const useStyles = LayoutStyle

const Header = ({ setLang }) => {
    const classes = useStyles();
    const littleIcons = [colors.primaryLight, colors.tertiary, colors.success]
    const iconAnimation = [classes.redButton, classes.yellowButton, classes.greenButton]

    return (
        <div className={classes.header}>
            <div className={classes.iconContainer}>
                <CircleIcon size={30} borderColor={colors.white} color={colors.secondary} type={"circle"} className={classes.blueButton} />
                {littleIcons.map((c, i) =>
                    <CircleIcon key={i} size={10} color={c} type={"circle"} className={iconAnimation[i]} />
                )}
            </div>
            <div className={classes.langContainer}>
                <Text color={colors.lightest} onClick={() => setLang("en")} type="paragraph" style={{ marginLeft: '10px' }} className={classes.langText}>
                    {"Eng"}
                </Text>
                <Text color={colors.lightest} onClick={() => setLang("es")} type="paragraph" style={{ marginLeft: '10px' }} className={classes.langText}>
                    {"Esp"}
                </Text>
            </div>

        </div>
    );
}

export default Header;