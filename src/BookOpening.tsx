import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const BookOpening = () => {
  const [showPages, setShowPages] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [slideAway, setSlideAway] = useState(false);
  const [coverTextVisible, setCoverTextVisible] = useState(true); // New state to control text visibility
  const pages = 5;

  useEffect(() => {
    const flipStartDelay = 500;
    const lastPageFlipEnd = 0.6 + (pages - 1) * 0.4 + 1.0; // when last page lands
    const slideStartDelay = lastPageFlipEnd + 0.5;
    const totalDuration = slideStartDelay + 1.0; // slide + buffer

    const startTimer = setTimeout(() => setIsFlipping(true), flipStartDelay);
    const revertCoverTimer = setTimeout(() => {
      setIsFlipping(false);
      setCoverTextVisible(false); // Hide text when the cover flips back
    }, lastPageFlipEnd * 1000);
    const slideTimer = setTimeout(() => setSlideAway(true), slideStartDelay * 1000);
    const closeTimer = setTimeout(() => setShowPages(false), totalDuration * 1000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(revertCoverTimer);
      clearTimeout(slideTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const coverBg = isFlipping ? "bg-white border-yellow-400" : "bg-yellow-400 border-white";
  const coverTextColor = isFlipping ? "text-yellow-500" : "text-white";

  return (
    <AnimatePresence>
      {showPages && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            className="relative w-80 h-[420px] perspective-[1200px]"
            animate={slideAway ? { x: "-150vw", opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Cover page */}
            <motion.div
              className={`absolute w-full h-full ${coverBg} border-4 rounded-lg shadow-xl ${coverTextColor} text-2xl font-bold flex items-center justify-center origin-left z-50`}
              initial={{ rotateY: 0 }}
              animate={{
                rotateY: -180,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {!isFlipping && !slideAway && coverTextVisible && ( // Hide text if the cover is flipping or already yellow
                <div className="text-center px-4">
                  <p>Quincy</p>
                  <p className="mt-2">Tobenna</p>
                  <p className="mt-1">Alagbu</p>
                </div>
              )}
            </motion.div>

            {/* Flipping pages */}
            {[...Array(pages)].map((_, i) => {
              const isLast = i === pages - 1;
              const pageBg = isLast
                ? "bg-yellow-400 text-white border-white"
                : "bg-white text-yellow-700 border-yellow-300";

              return (
                <motion.div
                  key={i}
                  className={`absolute w-full h-full ${pageBg} border rounded-lg shadow-md flex items-center justify-center text-lg font-medium origin-left`}
                  style={{
                    zIndex: pages - i,
                    transformStyle: "preserve-3d",
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.6 + i * 0.4,
                  }}
                >
                  Page {i + 1}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookOpening;
