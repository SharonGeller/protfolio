import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const divVariants = {
  hidden: {
    height: 450,
    width: 50,
    y: 1300,
  },
  visible: {
    height: 250,
    width: 250,
    y: -280,
    transition: {
      repeat: Infinity,
      y: {
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
      },
      default: {
        delay: 0.25,
        type: "spring",
        repeatDelay: 1.3,
        bounce: 1,
        stiffness: 700,
        ease: "easeIn",
      },
    },
  },
};

const Bubble = () => {
  return (
    <RoundDiv
      onAnimationComplete={(definition) => console.log(definition)}
      variants={divVariants}
      initial={"hidden"}
      animate={"visible"}
    />
  );
};

const RoundDiv = styled(motion.div)`
  height: 250px;
  width: 250px;
  background-color: #05386b;
  border-radius: 50%;
`;

export default Bubble;
