import BreakingNews from "@/Components/Shared/BreakingNews";
import Header from "@/Components/Shared/Header";
import NavBar from "@/Components/Shared/NavBar";


const MainLayout = ({ children }) => {
    return (
        <>
        <Header/>
         
         <BreakingNews/>
        <NavBar/>

        {children}

        </>
    );
};

export default MainLayout;