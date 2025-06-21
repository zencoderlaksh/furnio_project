import React from "react";
import { motion } from "framer-motion";

function CategorySection() {
  const boxVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren", // Animate parent before children
        staggerChildren: 0.2  // Stagger children animations
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="categorysection-wrapper relative w-full min-h-[450px] h-auto py-12 md:h-[600px] md:py-0 overflow-hidden"> {/* Added overflow-hidden */}
      <div className="background-image-wrapper w-full h-full">
        <motion.img
          className="w-full h-full object-cover"
          src="/Furnio---The-Furniture-Expert/assets/scandinavian-interior-mockup.png"
          alt="Interior"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="box-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] p-6 sm:w-[70%] sm:p-8 md:w-[50%] md:left-[55%] lg:left-[60%] lg:w-[40%] xl:w-[35%] lg:p-10 lg:-translate-x-0 bg-[#FFF3E3] rounded-md shadow-md"
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="top-heading mb-2" variants={itemVariants}>
          <h6 className="text-sm tracking-widest font-semibold text-[#B88E2F]">
            New Arrival
          </h6>
        </motion.div>

        <motion.div className="headline mb-4" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B88E2F] leading-tight">
            Discover Our <br /> New Collection
          </h2>
        </motion.div>

        <motion.div className="p-tag mb-6" variants={itemVariants}>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </motion.div>

        <motion.button
          className="bg-[#B88E2F] text-white px-6 py-3 font-semibold hover:bg-[#a5761f] transition"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buy Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default CategorySection;
