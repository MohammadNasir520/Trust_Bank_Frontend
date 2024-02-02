import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";



export default function PageLayout({ children }: { children: React.ReactElement[] | React.ReactElement }) {


    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
