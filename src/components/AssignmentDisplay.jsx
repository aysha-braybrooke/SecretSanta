// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <div className="px-10">
    <ul className="space-y-2 flex flex-col justify-center align-middle items-center border-4 border-red-400 rounded-3xl p-5">
      {assignments.map((assignment, index) => (
        <li key={index}>
          <span>{assignment.giver}</span> offre un beau cadeau à{" "}
          <span>{assignment.receiver}</span>
        </li>
      ))}
    </ul>

    </div>
  );
}
