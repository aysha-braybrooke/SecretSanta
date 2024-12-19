// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="space-y-4 p-5 ">

      <img src="./assets/fond.png" className="absolute top-0 z-0 scale-150 w-full h-full " alt="background" />


      <h2 className="relative text-4xl mb-6 mt-4 text-center text-white">
        Ajoutez les <br></br>participants
      </h2>

      <div className=" relative flex align-middle items-center space-x-2 border-2 rounded-full bg-white h-14 m-0 z-11">
        <input
          type="text"
          className="input flex-grow ml-5"
          placeholder="    Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button" onClick={addParticipant}>
          <img src="./assets/btn_plus.png" className="relative scale-70 z-10"></img>
        </button>
      </div>

      <div className="">
      <ul className="relative space-y-2 z-12 px-14">
        {participants.map((name, index) => (
          <li key={index} className="list-item ">
            {name}
            <div className="space-x-2 border-b-2">
              <button
                className="text-red-500 hover:text-red-700 "
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className=" absolute z-0 bg-white top-110 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-130 rounded-b-lg"></div>

      </div>

      <img src="./assets/lutin_neutre.png" className="absolute scale-70 -bottom-40 -left-25"></img>
    </div>
  );
}
