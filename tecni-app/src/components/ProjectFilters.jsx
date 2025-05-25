import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: "todos", label: "Todos los proyectos" },
    { id: "refrigeracion", label: "Refrigeración Industrial" },
    { id: "aires", label: "Aires acondicionados" },
    { id: "paneles-solares", label: "Sistema Eléctrico" },
    { id: "electrodomesticos", label: "Electrodomésticos" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 my-8">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === filter.id
              ? "bg-[#203363] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-all duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  );
};

ProjectFilters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired
};

export default ProjectFilters;
