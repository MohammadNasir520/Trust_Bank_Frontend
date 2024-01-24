import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/pages/home_page/Footer";



export default function PageLayout({ children }: { children: React.ReactElement[] | React.ReactElement}) {


    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
