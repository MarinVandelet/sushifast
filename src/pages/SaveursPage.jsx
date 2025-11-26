import { menus } from "../data/menus";

export default function SaveursPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Saveurs par menu</h2>

      <ul className="space-y-3">
        {menus.map((menu) => (
          <li key={menu.id} className="p-4 bg-gray-100 rounded">
            <strong>{menu.nom}</strong> : {menu.saveurs.join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}
