import Navbar from "../Shared/Navbar";
import Footer from "../pages/Footer";

export default function PageLayout({ children }: { children: any }) {

    return (
        <>
            <Navbar />
            {children}
           <Footer/>
        </>
    )
}
