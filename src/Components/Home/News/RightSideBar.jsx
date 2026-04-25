
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; 
import logo from '@/assets/swimming.png'
import logoA from '@/assets/class.png'
import logoB from '@/assets/playground.png'
import bg from '@/assets/bg.png'

const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-8">
      
      {/* --- 1. Login With Section --- */}
      <div>
        <h2 className="font-bold text-lg mb-4 text-gray-800">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 w-full border border-blue-400 rounded-md py-2 text-blue-500 hover:bg-blue-50 transition-colors">
            <FaGoogle />
            Login with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-gray-800 rounded-md py-2 text-gray-800 hover:bg-gray-100 transition-colors">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      {/* --- 2. Find Us On Section --- */}
      <div>
        <h2 className="font-bold text-lg mb-4 text-gray-800">Find Us On</h2>
        {/* Parent e ekta border diyechi, ar bhetorer gulo te shudhu border-bottom */}
        <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden">
          <a href="#" className="flex items-center gap-3 p-4 border-b border-gray-300 hover:bg-gray-200 transition-colors">
            <div className="bg-gray-100 p-2 rounded-full text-blue-600">
              <FaFacebook />
            </div>
            <span className="text-gray-600 font-medium">Facebook</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-4 border-b border-gray-300 hover:bg-gray-200 transition-colors">
            <div className="bg-gray-100 p-2 rounded-full text-blue-400">
              <FaTwitter />
            </div>
            <span className="text-gray-600 font-medium">Twitter</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-200 transition-colors text-pink-600">
            <div className="bg-gray-100 p-2 rounded-full">
              <FaInstagram />
            </div>
            <span className="text-gray-600 font-medium">Instagram</span>
          </a>
        </div>
      </div>

     {/* --- 3. Q-Zone Section --- */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="font-bold text-lg mb-4 text-gray-800">Q-Zone</h2>
        
        
        <div className="flex flex-col items-center gap-4">
          
          
          <div className="bg-white p-2 rounded-md border border-gray-200"> 
            <Image src={logo} alt="Swimming" className="rounded-sm" /> 
            
          </div>
          
          <div className="bg-white p-2 rounded-md border border-gray-200">
            <Image src={logoA} alt="Class" className="rounded-sm" /> 
          </div>
          
          <div className="bg-white p-2 rounded-md border border-gray-200">
            <Image src={logoB} alt="Playground" className="rounded-sm" /> 
          </div>
          
        </div>
      </div>

      {/* --- 4. Ad Banner Section --- */}
   
      <div className="rounded-md overflow-hidden flex items-center justify-center">
         
         <Image src={bg} alt='Advertisement' className='w-full h-auto object-cover' />
      </div>
    </div>
  );
};

export default RightSideBar;