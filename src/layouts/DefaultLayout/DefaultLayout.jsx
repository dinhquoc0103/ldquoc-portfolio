import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ScrollToTop from "../../components/ScrollToTop"


function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default DefaultLayout