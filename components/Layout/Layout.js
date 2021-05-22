
import LayoutStyle from './Layout.style'
import Header from './Header'
import Footer from './Footer'
import langContext from 'context/langContext';
import { useState, useEffect, } from 'react'

const useStyles = LayoutStyle

const Layout = ({ body }) => {
    const classes = useStyles();
    const [lang, setLang] = useState("en");


    return (
        <div className={classes.root}>
            <Header setLang={(lang) => setLang(lang)} />
            <langContext.Provider value={lang}>
                {body}
            </langContext.Provider>
            <Footer />
        </div>
    );
}

export default Layout;