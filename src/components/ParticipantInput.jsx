import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {

    if (currentName !== "") {
      
      onAddParticipant(currentName);
      setCurrentName("");
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center transform -translate-y-30 ">

      {/* IMAGE FOND */}
      <img
        src="./assets/fond.png"
        className="absolute z-0 -bottom-40 w-screen h-screen lg:w-500 lg:scale-500 scale-135 object-cover"
        alt="background"
      />

      <div className="w-50 flex justify-center align-middle items-center">
      <h2 className="relative text-4xl mb-6 mt-4 text-center lg:text-middle text-white">
        Ajoutez les <br></br>participants
      </h2>

      </div>


      <div className="p-5">
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
      </div>

      <div className="">
        <ul className="relative space-y-2 z-12 px-14 h-85 overflow-hidden">
          {participants.map((name, index) => (
            <li key={index} className="flex justify-between items-center py-0 border-b gap-30">
              {/* PARTICIPANT */}
              <span className="h-10 flex items-center">{name}</span>

              {/* SUPPRIMER LE PARTICIPANT */}
              <button
                className="w-10"
                onClick={() => onRemoveParticipant(index)}
              >
                <img src="./assets/btn_moins.png" className="w-10" alt="Minus Button" />
              </button>
            </li>
          ))}
        </ul>

        <div className=" absolute z-0 bg-white top-110 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-130 rounded-b-lg"></div>
      </div>

      {/* IMAGE LUTIN */}
      <img src="./assets/lutin_neutre.png" className="absolute scale-70 -bottom-110 -left-25 lg:scale-200 lg:-bottom-80 lg:-left-100"></img>
    </div>
  );
}
