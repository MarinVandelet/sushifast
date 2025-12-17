import { menus } from "../data/menus";
import MenuCard from "../components/MenuCard";

export default function AvocatCoriandrePage() {
  const filtres = menus.filter(menu =>
    menu.saveurs.includes("avocat") || menu.saveurs.includes("coriandre"));

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Menus avec avocat ou coriandre
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtres.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </>
  );
}
