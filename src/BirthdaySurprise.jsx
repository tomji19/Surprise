import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const BirthdaySurprise = () => {
  const [showButton, setShowButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update window size for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Show button after 9 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  // Reveal choices after message animation completes
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowChoices(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleOpenMessage = () => {
    setShowMessage(true);
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {accepted && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
        />
      )}

      <AnimatePresence>
        {!showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative"
          >
            <motion.h1
              className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-mint-100 to-mint-400"
              style={{
                textShadow: `
                  3px 3px 0 #10b981,
                  6px 6px 0 #059669,
                  9px 9px 0 #047857,
                  12px 12px 0 #065f46,
                  15px 15px 15px rgba(0, 0, 0, 0.5)
                `,
              }}
            >
              Mayar
            </motion.h1>

            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-16 flex justify-center"
              >
                <button
                  onClick={handleOpenMessage}
                  className="bg-mint-300 hover:bg-mint-400 text-mint-900 font-bold text-xl py-4 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                >
                  Efta7y el Resala ya Lolo
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-mint-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border-4 border-mint-300"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="text-mint-100 text-lg leading-relaxed mb-8">
                7abebty, mn awel youm e7na et2abelna we ana bgd kont dayman 7asses enna 7ankoon orayebeen awy awy awy, Dayman kont mestany eshara mn rabena enek bgd enty el bent
                ely kont mestaneha we en kol el fatra ely fatet ely kont mra3y rabena we makontesh bartebet en rabena 7ay3awadny b 7ad fe3lan yestahar eny a3afer 3ashano, Enty bgd A7LA 7AGA
                FY 7YATY KOLAHA, Testahly eny fe3lan abzel maghood 3ashanek, Enty 3omrek ma konty t2ela aw ay 7aga we 3omry ma fakrt enty leeh bete3mely ay action 8er enek fe3lan bet7ebeny, Bgd
                nefy a5tobek 3ashan agy odam ahlek 3ady we a5dek mn el bet we nenzel we mantkonesh 5ayfa mn ahlek wenty nazla wla te7tagy tekzeby aw ay 7aga mn el kalam dah abdan, Asef law kont
                fy mrat keda kont 8areeb bas ana fe3lan metla8bat we bardo bakoon 5ayef eny a5sarek we keda, bas 3aiz a2olek 7aga we 3aref enna fy ramadan we mayenfa3sh a2olha bas ana 7a2olha we
                batmana mn rabena eno ye8ferly bas ana bgd B7bek we 3aiz dah ykoon a7san 3eed milad yadety beeh, 7aga a5era bas ana nefsy yegma3na beet fel nehaya we el journey ma benna tkoon worth it
                we e7na nkoon 3arfeen en el mawdoo3 sa3b bas malnash 8er b3d, a5er 7aga bas rody 3al so2al ely t7t we ana 3aref en mayenfa3sh ya3ny ykoon actual date awy 3ashan e7na fy ramadan bas
                ya3ny kadr el emkan nkoon 3arfeen eno youm 3ady bas we in Sha2allah el denia temshy kwais awy awy el youm dah
              </p>

              <p className="text-mint-200 text-2xl font-bold text-center mb-8">
                te2baly tenzely ma3aia date youm 23 May ya 7omosany?
              </p>

              {showChoices && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center gap-6"
                >
                  <button
                    onClick={handleAccept}
                    className="bg-mint-300 hover:bg-mint-200 text-mint-900 font-bold py-3 px-6 rounded-full transform transition duration-300 hover:scale-110"
                  >
                    AKEED YES
                  </button>

                  <button
                    onClick={handleAccept}
                    className="bg-mint-400 hover:bg-mint-300 text-mint-900 font-bold py-3 px-6 rounded-full transform transition duration-300 hover:scale-110"
                  >
                    YES BARDO MAFESH NO
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {accepted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-mint-700 p-8 rounded-2xl border-4 border-mint-300 shadow-2xl max-w-md">
            <h2 className="text-mint-100 text-3xl font-bold text-center mb-4">
              Shukran ya Ro7 Alby ❤️
            </h2>
            <p className="text-mint-200 text-lg text-center">
              7afdal mestany el youm dah yegy b fare8 el sabr walahi
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BirthdaySurprise;
