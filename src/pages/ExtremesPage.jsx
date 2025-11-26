import { menus } from "../data/menus";

export default function ExtremesPage() {
  const min = menus.reduce((a, b) => (b.prix < a.prix ? b : a));
  const max = menus.reduce((a, b) => (b.prix > a.prix ? b : a));

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Menus extrêmes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Moins cher :</h3>
          <p>{min.nom}</p>
          <p>{min.pieces} pièces</p>
          <p className="font-bold text-red-600">{min.prix} €</p>
        </div>

        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold mb-2">Plus cher :</h3>
          <p>{max.nom}</p>
          <p>{max.pieces} pièces</p>
          <p className="font-bold text-red-600">{max.prix} €</p>
        </div>

      </div>
    </>
  );
}
