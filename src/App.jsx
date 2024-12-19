// VISIONNER EN IPHONE 12 PRO POUR FORMAT MOBILE

import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Accueil } from "./components/Accueil"; // Import du nouvel écran
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";
export default function App() {
  const [participants, setParticipants] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("welcome");

  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const distributeGifts = () => {
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    setAssignments(newAssignments);
    setCurrentScreen("assignments");
  };

  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div
      style={{ fontFamily: "'Orelega One', sans-serif" }}
      className="overflow-hidden flex items-center justify-center min-h-screen bg-gray-50"
    >

      <div className="w-full max-w-md relative">


        {/* ECRAN INTRO ------------------------------------------- */}
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("accueil")} />
        )}

        {/* ECRAN ACCUEIL ----------------------------------------- */}
        {currentScreen === "accueil" && (
          <Accueil onNext={() => setCurrentScreen("input")} />
        )}





        {/* ECRAN INSERER LES PARTICIPANTS ------------------------ */}
        {currentScreen === "input" && (
          <>
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />

            {/* BTN SUIVANT */}
            <div className="mt-6">
              <button
                className="button w-full absolute -bottom-25 left-45 lg:left-32"
                onClick={distributeGifts}
              >
                <img src="./assets/btn_suivant.png" alt="Suivant" />
              </button>
            </div>
          </>
        )}



        {/* ECRAN DISTRIBUTIONS DES CADEAUX -----------------------*/}
        {currentScreen === "assignments" && (
          <>
            <div className="lg:transform lg:-translate-y-50">

              <h2 className="relative text-4xl mb-6 mt-4 text-center">
                Résultats
              </h2>
              <AssignmentDisplay assignments={assignments} />
              <div className="mt-6">
                <button className="button w-full" onClick={resetApp}>
                  <img
                    src="./assets/btn_recommencer.png"
                    className="absolute scale-80 -bottom-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
                    alt="Recommencer"
                  />
                </button>
              </div>



              {/* IMG SAPIN */}
              <img
                src="./assets/sapin.png"
                className="absolute -bottom-115 -right-30 scale-80 lg:scale-130 lg:-right-180 lg:-bottom-120"
                alt="Sapin"
              />

              {/* IMG CADEAUX */}
              <img
                src="./assets/gift_pile.png"
                className="absolute -bottom-80 lg:-bottom-140 lg:-left-185"
                alt="Cadeaux"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
