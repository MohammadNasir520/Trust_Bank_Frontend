import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
