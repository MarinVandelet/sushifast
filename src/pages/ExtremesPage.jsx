import { menus } from "../data/menus";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExtremesPage() {
  const min = menus.reduce((a, b) => (b.prix < a.prix ? b : a));
  const max = menus.reduce((a, b) => (b.prix > a.prix ? b : a));

  const Card = ({ title, subtitle, menu, accent }) => (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 180, damping: 14 }}
      className="
        bg-white rounded-2xl overflow-hidden shadow-md
        hover:shadow-xl transition
        border border-gray-200">

      <div className={`h-1 ${accent}`} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">{subtitle}</p>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
            {menu.pieces} pièces
          </span>
        </div>

        <div className="mt-4 rounded-xl overflow-hidden">
          <img
            src={`/images/${menu.image}.jpg`}
            alt={menu.nom}
            className="w-full h-44 object-cover"/>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900">{menu.nom}</p>
          <p className="text-3xl font-extrabold text-red-600 mt-1">{menu.prix} €</p>
        </div>

        <Link
          to={`/menu/${menu.id}`}
          className="
            mt-5 inline-block w-full text-center
            py-2.5 rounded-xl font-medium
            bg-gray-900 text-white hover:bg-gray-800
            transition">
          Voir le menu
        </Link>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8">

      {/* Titre */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Menus extrêmes</h2>
        <p className="text-gray-600"> Le menu le moins cher et le plus cher de la sélection</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Moins cher"
          subtitle="Option économique"
          menu={min}
          accent="bg-red-600"/>

        <Card
          title="Plus cher"
          subtitle="Option premium"
          menu={max}
          accent="bg-green-500"/>
      </div>
    </motion.div>
  );
}
