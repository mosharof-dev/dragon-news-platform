"use client"

import Image from 'next/image';
import userlogo from '@/assets/user.png' 
import NavLink from './NavLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';


const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Logout function
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload(); 
  };

  return (
    <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 gap-4 md:gap-0">
      
      {/* 1. Left side (Empty block to balance flex-between) */}
      <div className="hidden md:block w-24"></div>

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

      {/* 3. Right: User Info & Auth */}
      
      <div className="flex items-center justify-end min-w-62.5">
        
        {isPending ? (
          //  SKELETON LOADING
          <div className="flex items-center gap-4 animate-pulse">
            <div className="h-5 w-24 bg-gray-200 rounded"></div> {/* Name skeleton */}
            <div className="h-12 w-12 bg-gray-200 rounded-full"></div> {/* Image skeleton */}
            <div className="h-10 w-24 bg-gray-200 rounded-sm"></div> {/* Button skeleton */}
          </div>
        ) : user ? (
          // LOGGED IN STATE
          <div className="flex items-center gap-4">
            <h2 className="text-gray-800 font-semibold text-[17px] tracking-wide">
              {user.name}
            </h2>
            <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
              <Image 
                src={user.image || userlogo} 
                alt="User Profile" 
                fill 
                sizes="48px"
                className="object-cover"
              />
            </div>
            <button 
              onClick={handleLogout} 
              className="bg-[#2b2b2b] text-white px-7 py-2.5 rounded-sm font-semibold hover:bg-black transition-all shadow-md active:scale-95"
            >
              Logout
            </button>
          </div>
        ) : (
          //  LOGGED OUT STATE
          <Link 
            href="/login" 
            className="bg-[#2b2b2b] text-white px-8 py-2.5 rounded-sm font-semibold hover:bg-black transition-all shadow-md active:scale-95"
          >
            Login
          </Link>
        )}
        
      </div>
      
    </nav>
  );
};

export default NavBar;