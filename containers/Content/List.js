import ContentStyle from './Content.style'
import { useState, useEffect, useContext } from 'react'
import fetch from 'cross-fetch';
import Text from 'components/Text/Index'
import colors from 'constants/colors';
import PokemonCards from 'components/Cards/pokemonCards';
import texts from 'constants/texts';
import langContext from 'context/langContext';
const useStyles = ContentStyle

const List = props => {
    const classes = useStyles();
    const { urls, handleSelectPokemon} = props
    const lang = useContext(langContext)
    const [pokemons, setPokemons] = useState([]);



    const getPokemons = async () => {

        let tempPokemons = []
        Promise.all(
            urls.results.map(async pokeQuery => {
                const res = await fetch(pokeQuery.url)
                const pokemon = await res.json()
                tempPokemons.push(pokemon)
            })
        ).then(() => {

            setPokemons(tempPokemons)
        })

    }

    const renderPokemons = () => {
        return (
            pokemons.map((p, i) => 
                <PokemonCards key={i} pokemon={p} handleSelectPokemon={handleSelectPokemon} />
            )
        )
    }



    useEffect(() => {
        if (urls && urls.results.length) getPokemons()
    }, [urls])

    return (

        <div className={classes.pokemonQuery}>
            <Text color={colors.light} type="paragraph">
               {texts.available[lang]}
            </Text>
            <div className={classes.pokemonGrid}>
                {(pokemons.length) ? renderPokemons() : null}
            </div>
        </div>

    );
}

export default List;