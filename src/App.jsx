

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
    <div style={{ fontFamily: "'Orelega One', sans-serif" }}>
      {/* Écran d'accueil */}
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={() => setCurrentScreen("accueil")} />
      )}

      {/* Nouvel écran intermédiaire */}
      {currentScreen === "accueil" && (
        <Accueil onNext={() => setCurrentScreen("input")} />
      )}

      {/* Écran d'ajout des participants */}
      {currentScreen === "input" && (
        <>
          
          <ParticipantInput
            onAddParticipant={addParticipant}
            participants={participants}
            onRemoveParticipant={removeParticipant}
          />

          {/* SUIVANT ---------------------------- */}
          <div className="mt-6">
            <button className="button w-full absolute bottom-10 left-45" onClick={distributeGifts}>
              <img src="./assets/btn_suivant.png"></img>
            </button>
          </div>
        </>
      )}

      {/* Écran d'affichage des attributions */}
      {currentScreen === "assignments" && (
        <>
          <h2 className="relative text-4xl mb-6 mt-4 text-center ">
            Résultats
          </h2>
          <AssignmentDisplay assignments={assignments} />
          <div className="mt-6">
            <button className="button w-full" onClick={resetApp}>
            <img src="./assets/btn_recommencer.png" className="absolute scale-80 bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"></img>
            </button>
          </div>

          <img src="./assets/sapin.png" className="absolute -bottom-30  -right-30 scale-80"></img>
          <img src="./assets/gift_pile.png" className="absolute bottom-0" ></img>
        </>
      )}
    </div>
  ); 
}
