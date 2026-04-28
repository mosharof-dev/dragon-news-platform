"use client"
import Image from 'next/image';
import userlogo from '@/assets/user.png'
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { RotateLoader } from 'react-spinners';

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, "Session");

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
      { isPending ? <RotateLoader /> :
        user ? (
          <div className="flex items-center justify-end gap-3 ">
        <h2>{user.name}</h2>
        <Image 
          src={user.image || userlogo} 
          alt="User Profile" 
          width={60} 
          height={60} 
          className="rounded-full cursor-pointer"
        />
        <Link href="/login" className="bg-[#333333] text-white px-8 py-2 font-semibold hover:bg-black transition-colors">
          Logout
        </Link>
      </div>
        ) :(
          <Link href="/login" className="bg-[#333333] text-white px-8 py-2 font-semibold hover:bg-black transition-colors">
          Login
        </Link>
        )
      }
      
    </nav>
    );
};

export default NavBar;