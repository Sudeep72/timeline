import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { motion, useInView } from "framer-motion";
import { 
  FaWater, 
  FaShip, 
  FaCompass, 
  FaAnchor, 
  FaMapMarkerAlt, 
  FaSun 
} from "react-icons/fa";
import { IoMdBoat } from "react-icons/io";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Timeline } from "../components/ui/timeline";

const ProfessionalAnimatedText = ({ 
  children, 
  delay = 0, 
  variant = "default" 
}) => {
  const variants = {
    default: "from-blue-400 via-teal-500 to-cyan-600",
    highlight: "from-blue-600 via-indigo-700 to-purple-800"
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 20, 
        scale: 0.95 
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1 
      }}
      transition={{ 
        duration: 0.6, 
        delay, 
        type: "spring", 
        stiffness: 100 
      }}
      className={`
        inline-block 
        text-transparent 
        bg-clip-text 
        bg-gradient-to-r 
        ${variants[variant]}
        transition-all 
        duration-300 
        ease-in-out
      `}
    >
      {children}
    </motion.div>
  );
};

ProfessionalAnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'highlight'])
};

ProfessionalAnimatedText.defaultProps = {
  delay: 0,
  variant: 'default'
};

ProfessionalAnimatedText.displayName = 'ProfessionalAnimatedText';

const ProfessionalOceanTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const data = React.useMemo(() => [
    {
      title: "1 January",
      icon: <FaWater className="text-blue-500" />,
      content: (
        <div className="space-y-2 mb-9">
          <ProfessionalAnimatedText>
            <h3 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
              <FaAnchor className="inline mr-2" /> Project Initialization
            </h3>
          </ProfessionalAnimatedText>
          <ProfessionalAnimatedText delay={0.1}>
            <p className="text-base text-slate-700 tracking-wide text-justify">
              Launching our strategic roadmap with comprehensive initial research 
              and stakeholder alignment.
            </p>
          </ProfessionalAnimatedText>
        </div>
      ),
      fullDescription: "A comprehensive project kickoff involving detailed market research, stakeholder interviews, and strategic planning. We establish clear objectives, identify potential challenges, and create a robust framework for success.",
      fullIcon: <FaAnchor className="w-12 h-12 text-blue-600" />
    },
    {
      title: "15 January",
      icon: <IoMdBoat className="text-teal-500" />,
      content: (
        <div className="space-y-2 mb-9">
          <ProfessionalAnimatedText variant="highlight">
            <h3 className="text-xl font-semibold text-teal-600 flex items-center gap-2">
              <FaCompass className="inline mr-2" /> Strategic Assessment
            </h3>
          </ProfessionalAnimatedText>
          <ProfessionalAnimatedText delay={0.1}>
            <p className="text-base text-slate-700 tracking-wide text-justify">
              Conducting in-depth analysis and developing preliminary strategic recommendations.
            </p>
          </ProfessionalAnimatedText>
        </div>
      ),
      fullDescription: "An intensive strategic assessment phase where we analyze market trends, competitive landscapes, and internal capabilities to refine our approach and identify key opportunities for innovation and growth.",
      fullIcon: <FaCompass className="w-12 h-12 text-teal-600" />
    },
    {
      title: "1 February",
      icon: <FaMapMarkerAlt className="text-cyan-500" />,
      content: (
        <div className="space-y-2 mb-9">
          <ProfessionalAnimatedText>
            <h3 className="text-xl font-semibold text-cyan-600 flex items-center gap-2">
              <FaShip className="inline mr-2" /> Milestone Planning
            </h3>
          </ProfessionalAnimatedText>
          <ProfessionalAnimatedText delay={0.1}>
            <p className="text-base text-slate-700 tracking-wide text-justify">
              Developing a comprehensive roadmap with precise milestone tracking and performance indicators.
            </p>
          </ProfessionalAnimatedText>
        </div>
      ),
      fullDescription: "Detailed milestone planning with advanced performance metrics, risk assessment matrices, and agile implementation strategies. We establish clear KPIs and create a dynamic, adaptive project framework.",
      fullIcon: <FaShip className="w-12 h-12 text-cyan-600" />
    },
    {
      title: "15 February",
      icon: <FaSun className="text-blue-400" />,
      content: (
        <div className="space-y-2 mb-9">
          <ProfessionalAnimatedText variant="highlight">
            <h3 className="text-xl font-semibold text-blue-500 flex items-center gap-2">
              <FaSun className="inline mr-2" /> Implementation Phase
            </h3>
          </ProfessionalAnimatedText>
          <ProfessionalAnimatedText delay={0.1}>
            <p className="text-base text-slate-700 tracking-wide text-justify">
              Initiating core implementation strategies with precision and strategic execution.
            </p>
          </ProfessionalAnimatedText>
        </div>
      ),
      fullDescription: "Launching the core implementation phase with meticulously planned strategies, advanced technological integrations, and continuous performance monitoring. We focus on seamless execution and real-time adaptability.",
      fullIcon: <FaSun className="w-12 h-12 text-blue-500" />
    }
  ], []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
      }}
      className="bg-white/90 backdrop-blur-sm"
    >
      <div className="w-full max-w-5xl mx-auto p-8 rounded-3xl shadow-sm border border-blue-100/50 my-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-center font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-teal-600 to-cyan-700 mb-12 tracking-tight flex items-center justify-center gap-4"
        >
          <FaWater className="text-blue-500" />
          Strategic Ocean Timeline
          <FaShip className="text-teal-500" />
        </motion.h2>

        <Timeline 
          data={data.map((item) => ({
            ...item,
            content: (
              <div 
                className="cursor-pointer hover:bg-blue-50/50 p-2 rounded-lg transition-all"
                onClick={() => setSelectedEvent(item)}
              >
                {item.content}
              </div>
            )
          }))} 
        />

        {selectedEvent && (
          <Dialog open={Boolean(selectedEvent)} onOpenChange={() => setSelectedEvent(null)}>
            <DialogContent 
              className="sm:max-w-[425px] transition-all duration-500 ease-out"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.3, 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              <DialogHeader>
                <div className="flex items-center space-x-4 mb-6">
                  {selectedEvent.fullIcon}
                  <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-600">
                    {selectedEvent.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <DialogDescription 
                className="text-slate-700 text-base leading-relaxed overflow-y-auto max-h-[75vh] text-justify"
                onClick={() => setSelectedEvent(null)}
              >
                {selectedEvent.fullDescription}
              </DialogDescription>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </motion.div>
  );
};

ProfessionalOceanTimeline.displayName = 'ProfessionalOceanTimeline';

export default ProfessionalOceanTimeline;