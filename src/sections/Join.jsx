import { 
  FaAnchor, 
  FaWater, 
  FaShip, 
  FaMapMarkedAlt, 
  FaRegLifeRing 
} from 'react-icons/fa';
import { 
  IoDocumentTextOutline, 
  IoPersonAddOutline, 
  IoBusinessOutline 
} from 'react-icons/io5';

const JoinUsCard = () => {
  return (
    <section id="joinus" className="px-4 pt-20 py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
      <div className="w-full max-w-5xl mx-auto h-fit rounded-3xl border-2 border-blue-200/[0.3] backdrop-blur-md shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <FaShip className="text-blue-300 w-3/4 h-3/4" />
        </div>

        <div className="absolute top-0 left-0 right-0 opacity-10">
          <FaWater className="text-blue-400 w-full h-20" />
        </div>

        <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-10 sm:gap-0 relative z-10">
          <div className="text-center sm:text-left flex flex-col justify-between gap-8 sm:h-52 sm:w-3/5">
            <p className="sm:text-lg md:text-xl tracking-wider font-medium text-gray-800">
              Reach hundreds of students and potential customers by sponsoring{" "}
              <span className="text-lg sm:text-2xl text-blue-600 font-bold"> 
                K!&nbsp;Hacks 
              </span>
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-gray-900 flex items-center gap-4">
              <FaAnchor className="text-blue-500" />
              Want&nbsp;to Join&nbsp;Us?
            </h2>
          </div>

          <div className="flex flex-col justify-end sm:items-end gap-6 flex-grow-0">
            {/* Brochure link */}
            <a 
              href="https://drive.google.com/file/d/1jBFf7GT0Cc3xnbY67yD-ZGkbBB86440Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 min-w-[18rem] rounded-full bg-teal-50 border-teal-300/[0.4] border-2 flex justify-center gap-4 items-center tracking-wider hover:font-semibold hover:gap-5 hover:border-opacity-70 hover:bg-opacity-20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <IoDocumentTextOutline size={20} className="text-teal-600 group-hover:text-teal-800" />
              <p className="text-teal-800 group-hover:text-teal-900 text-md">Brochure</p>
              <FaMapMarkedAlt size={18} className="text-gray-500 group-hover:text-gray-700 ml-auto" />
            </a>

            {/* Call for Mentors link */}
            <a 
              href="/call-mentors"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 min-w-[18rem] rounded-full bg-blue-50 border-blue-300/[0.4] border-2 flex justify-center gap-4 items-center tracking-wider hover:font-semibold hover:gap-5 hover:border-opacity-70 hover:bg-opacity-20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <IoPersonAddOutline size={20} className="text-blue-600 group-hover:text-blue-800" />
              <p className="text-blue-800 group-hover:text-blue-900 text-md">Call for Mentors</p>
              <FaMapMarkedAlt size={18} className="text-gray-500 group-hover:text-gray-700 ml-auto" />
            </a>

            {/* Call for Sponsors link */}
            <a 
              href="/call-sponsors"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-3 min-w-[18rem] rounded-full bg-indigo-50 border-indigo-300/[0.4] border-2 flex justify-center gap-4 items-center tracking-wider hover:font-semibold hover:gap-5 hover:border-opacity-70 hover:bg-opacity-20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <IoBusinessOutline size={20} className="text-indigo-600 group-hover:text-indigo-800" />
              <p className="text-indigo-800 group-hover:text-indigo-900 text-md">Call for Sponsors</p>
              <FaMapMarkedAlt size={18} className="text-gray-500 group-hover:text-gray-700 ml-auto" />
            </a>
          </div>

          <div className="absolute bottom-4 right-4 opacity-20">
            <FaRegLifeRing className="text-blue-400 w-16 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsCard;
