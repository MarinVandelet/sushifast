import { menus } from "../data/menus";

export default function PrixTotalPage() {
  const filtres = menus.filter((m) => m.pieces < 13);
  const total = filtres.reduce((s, m) => s + m.prix, 0);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Prix total des menus (moins de 13 pièces)
      </h2>

      <ul className="space-y-2 mb-4">
        {filtres.map((m) => (
          <li key={m.id} className="p-3 bg-gray-100 rounded">
            {m.nom} — {m.prix} €
          </li>
        ))}
      </ul>

      <p className="text-2xl font-bold text-red-600">
        Total : {total.toFixed(2)} €
      </p>
    </>
  );
}
