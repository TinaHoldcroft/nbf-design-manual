import Nav from './nav'
//import Footer from './footer'
import Theme from './Theme'

const Layout = ({ children }) => {

    return (
        <>
            <Nav />
            <main>
                {children}
                <Theme />
            </main>
            {/*<Footer />*/}
        </>
    );
}
export default Layout;