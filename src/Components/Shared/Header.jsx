import headerLogo from '@/assets/logo.png'
import Image from 'next/image';
import { format,  } from "date-fns";

// const today = format(new Date(), "EEEE, MMMM d, yyyy");
// const formattedTime = format(time, "hh:mm:ss a");


const now = new Date();
const formatted = format(now, "EEEE, MMMM d, yyyy | hh:mm a");
const Header = () => {

    return (
<div className="text-center py-6 px-4 ">
  <Image
    src={headerLogo}
    alt="Header Logo"
    className="mx-auto w-55 sm:w-65 md:w-[320px]"
    priority
  />

  <p className="text-gray-500 text-xs sm:text-sm mt-2">
    Journalism Without Fear or Favour
  </p>

  <p className="text-gray-400 text-xs sm:text-[20px] mt-1">
    {formatted} 
  </p>
</div>
    );
};

export default Header;