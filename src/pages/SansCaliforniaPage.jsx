import { menus } from "../data/menus";
import MenuCard from "../components/MenuCard";

export default function SansCaliforniaPage() {
  const filtres = menus.filter(
    (menu) =>
      !menu.aliments.some((a) => a.nom === "California Saumon Avocat")
  );

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Menus sans "California Saumon Avocat"
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtres.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </>
  );
}
