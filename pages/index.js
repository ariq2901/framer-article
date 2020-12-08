import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import styles from '../styles/main.module.css';


export default function App() {
  const [selected, setSelected] = useState(weapons[0]);


  return (
    <AnimateSharedLayout>
      <ul className={styles.wrapper}>
        {weapons.map((weapon) => (
          <Item
            key={weapon.color}
            color={weapon.color}
            image={weapon.image}
            isSelected={selected === weapon.color}
            onClick={() => setSelected(weapon.color)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  );
}


function Item({ color, isSelected, image, onClick }) {
  return (
    <motion.li
      className={styles.item}
      whileTap={{
        borderRadius: "20%",
        transition: { delay: 0.05, duration: 0.3 }
      }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <img src={image} alt={color} />
      {isSelected && (
        <motion.div
          layoutId={styles.outline}
          className={styles.outline}
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </motion.li>
  );
}


const weapons= [
  {
    image: "https://i.ibb.co/L0hKRZq/red-weapon.png",
    color: "#ff0055"
  },
  {
    image: "https://i.ibb.co/KwMkhWg/green-weapon.png",
    color: "#22cc88"
  },
  {
    image: "https://i.ibb.co/WnNYmrG/blue-weapon.png",
    color: "#0099ff"
  },
  {
    image: "https://i.ibb.co/HB9B3FJ/yellow-weapon.png",
    color: "#ffaa00"
  }
];


const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30

};