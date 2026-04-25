import { Span } from "next/dist/trace";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
return (
<div className="w-full max-w-7xl mx-auto flex items-center gap-2 md:gap-4 p-2 md:p-4 bg-[#F3F3F3] rounded">
  
  {/* shrink-0 ensures the button never gets squeezed on mobile */}
  <button className="btn btn-sm md:btn-md bg-[#D72050] text-white border-none shrink-0 rounded-sm">
    Latest News
  </button>


  <div className="flex-1 overflow-hidden">
    <Marquee pauseOnHover={true} style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
      {news.map((n) => (
        <span 
          key={n._id} 
          className="mr-6 md:mr-8 flex items-center gap-6 md:gap-8 text-xs md:text-sm text-gray-800"
        >
          {n.title}
          
          <span className="text-[#D82658] text-base md:text-lg leading-none mb-0.5 md:mb-1">
            •
          </span> 
        </span>
      ))}
    </Marquee>
  </div>

</div>
    );
};

export default BreakingNews;