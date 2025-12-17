  import { menus } from "../data/menus";
  import { motion } from "framer-motion";

  export default function SaveursPage() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8">

        {/* Partie supérieure */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            Saveurs par menu
          </h2>
          <p className="text-gray-600">
            Découvrez les saveurs présentes dans chaque menu
          </p>
        </div>

        {/* Liste des menus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menus.map((menu, index) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className=" bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {menu.nom}
              </h3>

              <div className="flex flex-wrap gap-2">
                {menu.saveurs.map((saveur, idx) => (
                  <span key={idx} className=" px-3 py-1 text-sm rounded-full bg-red-100 text-red-600 font-medium">
                    {saveur}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }
