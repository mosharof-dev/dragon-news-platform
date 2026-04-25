import Image from 'next/image';
import Link from 'next/link';

import userlogo from '@/assets/user.png'

const NavBar = () => {
return (
    <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 gap-4 md:gap-0">
      
      {/* 1. Left side (Empty space to balance the right side and keep links centered) */}
      <div className="hidden md:block "></div>

      {/* 2. Center: Navigation Links */}
      <ul className="flex items-center gap-6 text-gray-600 font-medium text-lg">
        <li>
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
        </li>
        <li>
          <Link href="/career" className="hover:text-black transition-colors">Career</Link>
        </li>
      </ul>

      {/* 3. Right: User Icon & Login Button */}
      <div className="flex items-center justify-end gap-3 ">
        {/* Next.js Image component e width ar height mandatory for optimization */}
        <Image 
          src={userlogo} 
          alt="User Profile" 
          width={40} 
          height={40} 
          className="rounded-full cursor-pointer"
        />
        <button className="bg-[#333333] text-white px-8 py-2 font-semibold hover:bg-black transition-colors">
          Login
        </button>
      </div>
      
    </nav>
    );
};

export default NavBar;