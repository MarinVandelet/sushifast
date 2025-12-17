import { useParams, useNavigate } from "react-router-dom";
import { menus } from "../data/menus";
import { motion } from "framer-motion";

export default function MenuDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const menu = menus.find((m) => m.id === Number(id));

  if (!menu) {
    return (
      <motion.p
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}> Menu introuvable.
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-6">
      
      {/* Bouton retour */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-900 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800 transition inline-block">← Retour
      </motion.button>

      {/* Titre */}
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>{menu.nom}
      </motion.h2>

      {/* Image */}
      <motion.img
        src={`/images/${menu.image}.jpg`}
        alt={menu.nom}
        className="w-full max-w-xl rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}/>

      {/* Infos */}
      <motion.div
        className="text-lg space-y-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}>
        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <strong>Pièces :</strong> {menu.pieces}
        </motion.p>

        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <strong>Prix :</strong> {menu.prix} €
        </motion.p>
      </motion.div>

      {/* Aliments */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}>
        <h3 className="text-2xl font-semibold mb-3">Aliments</h3>

        <motion.ul
          className="space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.07 },
            },
          }}>
          {menu.aliments.map((a, idx) => (
            <motion.li
              key={idx}
              className="bg-gray-100 p-3 rounded"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}>
              {a.nom} — {a.quantite}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Saveurs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}>
        <h3 className="text-2xl font-semibold mb-3">Saveurs</h3>

        <div className="flex gap-2 flex-wrap">
          {menu.saveurs.map((s, idx) => (
            <motion.span
              key={idx}
              className="bg-red-500 text-white py-1 px-3 rounded-full text-sm shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>{s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
