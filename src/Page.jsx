import { useContext } from 'react';
import Content from './Content';
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext } from './contexts';

export default function Page() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <>
            <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )
}