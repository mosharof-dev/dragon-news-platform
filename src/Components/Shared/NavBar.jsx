import Image from 'next/image';
import userlogo from '@/assets/user.png'
import NavLink from './NavLink';

const NavBar = () => {
return (
    <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 gap-4 md:gap-0">
      
      {/* 1. Left side (Empty space to balance the right side and keep NavLinks centered) */}
      <div className="hidden md:block "></div>

      {/* 2. Center: Navigation NavLinks */}
      <ul className="flex items-center gap-6 text-gray-600 font-medium text-lg">
        <li>
          <NavLink href="/" className="hover:text-black transition-colors">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about" className="hover:text-black transition-colors">About</NavLink>
        </li>
        <li>
          <NavLink href="/career" className="hover:text-black transition-colors">Career</NavLink>
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