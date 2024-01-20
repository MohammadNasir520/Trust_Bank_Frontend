import Navbar from "../Shared/Navbar";

export default function PageLayout({ children }: { children: React.ReactElement | React.ReactElement }) {

    return (
        <>
            <Navbar />
            {children}

        </>
    )
}
