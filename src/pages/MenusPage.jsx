import { useState } from "react";
import { menus } from "../data/menus";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";

export default function MenusPage() {
  const [search, setSearch] = useState("");

  const results = menus.filter(menu =>
    menu.nom.toLowerCase().includes(search.toLowerCase()));

  return (
    <motion.div
      className="animate-fade-in"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}>

      {/* Partie supérieure */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}>
          Découvrez nos Menus
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}>
          Les meilleurs assortiments japonais, faits avec amour.
        </motion.p>
      </div>

      {/* Bar de recherche */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="
          relative w-full mb-8">

        {/* Icon recherche */}
        <motion.div
          className="absolute inset-y-0 right-4 flex items-center pointer-events-none"
          initial={{ opacity: 0.3, x: 5 }}
          animate={{ opacity: 0.8, x: 0 }}>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.1-5.4a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
          </svg>
        </motion.div>

        {/* Animations */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          type="text"
          placeholder="Rechercher un menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 pr-12 rounded-xl shadow-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-gray-700 placeholder:text-gray-400 bg-white"/>
      </motion.div>

      {/* Resultat de la recherche */}
      {results.length === 0 ? (
        <motion.p
          className="text-center text-red-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          Aucun menu ne correspond à votre recherche ❌ 
        </motion.p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}>
          {results.map(menu => (
            <motion.div
              key={menu.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}>
              <MenuCard menu={menu} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
