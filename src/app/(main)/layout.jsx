import Header from "@/Components/Shared/Header";
import NavBar from "@/Components/Shared/NavBar";


const MainLayout = ({ children }) => {
    return (
        <>
        <Header/>

        <NavBar/>

        {children}

        </>
    );
};

export default MainLayout;