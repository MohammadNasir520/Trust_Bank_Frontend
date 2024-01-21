import Navbar from "../Shared/Navbar";
import Footer from "../pages/home_page/Footer";

export default function PageLayout({ children }: { children: React.ReactElement | React.ReactNode }) {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
