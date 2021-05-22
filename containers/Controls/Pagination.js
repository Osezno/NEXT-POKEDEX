import ControlsStyle from './Controls.style'
import { useState, useEffect } from 'react'
import PaginationButton from 'components/Buttons/PaginationButton';

const useStyles = ControlsStyle

const Pagination = props => {
    const classes = useStyles();
    const { currentPage, handleSelectPage, } = props
    const [buttons, setButtons] = useState(false);
    const [currentButtons, setCurrentButtons] = useState(false);

    const createButtons = () => {
        let totalButtons = []
        let totalIndex = Math.round(964 / 20)
        for (let i = 1; i < totalIndex; i++) {
            totalButtons.push(i)
        }
        setButtons(totalButtons)
    }

    const createCurrrentButtons = () => {
        let totalButtons = []
        let current = (currentPage < 1) ? 1 : currentPage
       

        for (let i = current; (i <= (current + 9)) && (i < buttons.length); i++) {
            totalButtons.push(i)
        }
        setCurrentButtons(totalButtons)
    }

    

    const renderButtons = () => {
        return (
            currentButtons.map((i) => 
                 <div className={classes.buttonWrapper}  key={i} onClick={()=> handleSelectPage(i)}>
                    <PaginationButton index={i}  />
                 </div>
            )
        )
    }

    useEffect(() => {
        createButtons()
    }, [])

    useEffect(() => {
        if (buttons && buttons.length) createCurrrentButtons()
    }, [buttons, currentPage])



    return (
        <div className={classes.paginationGrid}>
            {currentButtons.length ? renderButtons() : null}
        </div>
    );
}

export default Pagination;