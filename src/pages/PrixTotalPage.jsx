import { menus } from "../data/menus";
import { motion } from "framer-motion";

export default function PrixTotalPage() {
  const filtres = menus.filter((m) => m.pieces < 13);
  const total = filtres.reduce((s, m) => s + m.prix, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8">
      
      {/* Titre */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          Prix total des menus
        </h2>
        <p className="text-gray-600">
          Menus contenant moins de 13 pièces
        </p>
      </div>

      {/* Liste des menus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtres.map((m, index) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex justify-between items-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <span className="font-medium text-gray-800">
              {m.nom}
            </span>
            <span className="font-semibold text-red-500">
              {m.prix} €
            </span>
          </motion.div>
        ))}
      </div>

      {/* Total */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
        <p className="text-gray-700 text-lg mb-1"> Total à payer </p>
        <p className="text-4xl font-bold text-red-600"> {total.toFixed(2)} €</p>
      </motion.div>
    </motion.div>
  );
}
