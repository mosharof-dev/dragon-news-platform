import NavBar from '@/Components/Shared/NavBar';


const AuthLayout = ({children}) => {
    return (
        <>
        <NavBar/>
        {children}
        
        
        </>
    );
};

export default AuthLayout;