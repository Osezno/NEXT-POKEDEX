

import ContentStyle from './Content.style'
import Text from 'components/Text/Index'
import colors from 'constants/colors';
import CircleIcon from 'components/Icons/CircleIcon'
import { useState, useEffect, useContext } from 'react'
import PokemonCards from 'components/Cards/pokemonCards';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import texts from 'constants/texts';
import langContext from 'context/langContext';

const useStyles = ContentStyle

const Profile = props => {
    const { pokemon } = props
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [currentAttack, setCurrentAttack] = useState(false);
    const { moves, types, species, abilities } = pokemon
    const lang = useContext(langContext)
    let powers = ["power", "priority", "pp", "accuracy"]
    const pokemonName = {
        textTransform: 'capitalize',
        marginTop: '10px',
    }



    const getInfo = async () => {
        let tempAbilities = []
        let tempSpecies = []
        let tempTypes = []
        Promise.all(
            types.map(async pokeQuery => {
                const res = await fetch(pokeQuery.type.url)
                const type = await res.json()
                tempTypes.push(type)
            })
        ).then(() => {
            console.log(tempTypes)
        })

    }

    const openAttakModal = async (attak) => {
        const res = await fetch(attak.url)
        const cAttack = await res.json()

        setCurrentAttack(cAttack)
        setOpen(true);
    }

    const renderPokemon = () => {

        return (
            <div className={classes.blackScreen} >
                <PokemonCards pokemon={pokemon} selected />
            </div >
        )
    }

    const renderModalContent = () => {
        return (<div className={classes.paper}>
            <Text style={pokemonName} color={colors.darkest} type="subtitle" >
                {currentAttack.name}
            </Text>
            <div>{powers.map(key =>
                <Text style={pokemonName} color={colors.darkest} type="paragraph" >
                    {texts[key][lang]}  : {currentAttack[key]}
                </Text>)}
            </div>
            <Text style={pokemonName} color={colors.darkest} type="paragraph" >
                {texts.type[lang]} :  {currentAttack.type.name}
            </Text>
        </div>)
    }


    const renderInfo = () => {
        return (<>
            <Text style={pokemonName} color={colors.lightest} type="subtitle" >
                {pokemon.name}
            </Text>
            <Text style={pokemonName} color={colors.contrastDarker} type="paragraph" >
                {texts.moves[lang]}
            </Text>
            <div className={classes.moveGrid}>
                {moves.map((m, i) => <div className={classes.active} key={i} onClick={() => openAttakModal(m.move)}><Text style={pokemonName} color={colors.lightest} type="small" >
                    {m.move.name}
                </Text></div>)}
            </div>
        </>
        )
    }

    const blackScreen = () => {
        return (
            <div className={classes.blackScreen} />
        )
    }

    useEffect(() => {
        if (pokemon) {
            getInfo()
            renderPokemon()
        }
    }, [pokemon])

    return (

        <div className={classes.profileContainer}>
            <Text color={colors.light} type="paragraph">
                {texts.profile[lang]}
            </Text>
            <div className={classes.ScreenContainer} >
                <div className={classes.buttonsWrapper} >
                    <CircleIcon size={7} color={colors.primary} type={"circle"} />
                    <CircleIcon size={7} color={colors.primary} type={"circle"} />
                </div>
                {!pokemon ? blackScreen() : renderPokemon()}
                <div className={classes.bigButton} >
                    <CircleIcon size={20} color={colors.primary} type={"circle"} />
                </div>
            </div>
            {pokemon ? renderInfo() : null}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {currentAttack ? renderModalContent() : null}
                </Fade>
            </Modal>
        </div >

    );
}

export default Profile;