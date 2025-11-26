import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MenuCard({ menu }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: { type: "spring", stiffness: 250, damping: 15 },
      }}
      className="
        bg-white rounded-xl shadow-md overflow-hidden 
        hover:shadow-2xl transition-all duration-300
        border border-gray-200
      "
    >
      {/* Image + anim */}
      <motion.div
        className="relative overflow-hidden"
        whileHover={{ scale: 1.02 }}>
        <motion.img
          src={`/images/${menu.image}.jpg`}
          alt={menu.nom}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}/>

        {/* hover */}
        <motion.div
          className="
            absolute inset-0 bg-black/20 
            opacity-0 hover:opacity-100 
            transition duration-300"
        ></motion.div>
      </motion.div>

      {/* Contenu */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {menu.nom}
        </h3>

        <p className="text-gray-500 text-sm">{menu.pieces} pièces</p>

        <p className="text-lg font-semibold text-red-600">{menu.prix} €</p>

        {/* Boutton */}
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            to={`/menu/${menu.id}`}
            className="
              inline-block mt-3 w-full py-2 text-center 
              bg-red-500 hover:bg-red-600 
              text-white font-medium rounded-lg 
              transition shadow-md hover:shadow-lg">
            Voir détails
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}