

export function Accueil({ onNext }) {
  return (
    <div className="relative w-full h-screen flex flex-col py-20 ">

      <img src="./assets/sapin.png" className="absolute bottom-5 -right-51 scale-190 z-0"></img>
      <img src="./assets/pile_gift_out.png" className="absolute -bottom-5 scale-120"></img>

      <div className="px-10">
        <h1 className="text-5xl font-bold mb-6 relative font-orelega">Coucou!</h1>
        <p className=" mb-2 relative text-xl">Bienvenue dans l'application <span className=" text-red-400">Secret Santa</span> ! </p>
        <p className="text-xl mb-10 relative">
          Organisez facilement votre échange de cadeaux entre <br></br>
          amis ou collègues.</p>
        <button
          onClick={onNext}
        >
          <img src="./assets/btn_organise.png" className="absolute scale-60 -left-15 top-75"></img>
        </button>
      </div>

    </div>

  );
}
