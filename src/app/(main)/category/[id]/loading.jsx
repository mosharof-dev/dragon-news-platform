import { FadeLoader, PropagateLoader, PulseLoader } from "react-spinners";



const loading = () => {
    return (
       <div className='min-h-[70vh] flex justify-center items-center'>
        <PulseLoader  color='#244D3F' />
       </div>
    );
};

export default loading;