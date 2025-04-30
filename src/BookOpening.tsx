import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const BookOpening = () => {
  const [showPages, setShowPages] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [slideAway, setSlideAway] = useState(false);
  const [coverTextVisible, setCoverTextVisible] = useState(true);
  const pages = 5;

  useEffect(() => {
    const flipStartDelay = 200;
    const pageDuration = 0.3;
    const delayBetweenPages = 0.1;
    const lastPageFlipEnd = pageDuration + (pages - 1) * delayBetweenPages + 0.3;
    const slideStartDelay = lastPageFlipEnd + 0.2;
    const totalDuration = slideStartDelay + 0.5;

    const startTimer = setTimeout(() => setIsFlipping(true), flipStartDelay);
    const revertCoverTimer = setTimeout(() => {
      setIsFlipping(false);
      setCoverTextVisible(false);
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
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="relative w-[90vw] max-w-[300px] aspect-[3/4] perspective-[1000px]"
            animate={slideAway ? { x: "-150vw", opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Cover */}
            <motion.div
              className={`absolute lg:w-full lg:h-full w-[55%] h-[55%] md:w-[65%] md:h-[65%] sm:w-[60%] sm:h-[60%]  ${coverBg} border-4 rounded-lg shadow-xl ${coverTextColor} text-base sm:text-lg font-bold flex items-center justify-center origin-left z-50 ml-36 lg:ml-0 lg:mt-0 mt-[100px]`}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {!isFlipping && !slideAway && coverTextVisible && (
                <div className="text-center px-2 lg:block hidden">
                  <p>Quincy</p>
                  <p className="mt-1">Tobenna</p>
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
                  className={`absolute lg:w-full lg:h-full w-[55%] h-[55%] md:w-[65%] md:h-[65%] sm:w-[60%] sm:h-[60%] ${pageBg} border rounded-lg shadow-md flex items-center justify-center text-xs sm:text-sm font-medium origin-left ml-36 lg:ml-0 lg:mt-0 mt-[100px]`}
                  style={{
                    zIndex: pages - i,
                    transformStyle: "preserve-3d",
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 + i * 0.1,
                  }}
                />
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookOpening;
