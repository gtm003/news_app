import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import styles from "../styles/Select.module.scss";
import { Card, Box } from "@mui/material";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleSelect = () => {
    setIsOpen(!isOpen);
    console.log("click");
  };
  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={onToggleSelect}>
        <Image src="/Flag-RUS.svg" alt="Flag-RUS" width={24} height={24} />
        <span>Рус</span>
        <Image src="/down.svg" alt="arrow down" width={12} height={12} />
      </div>
      <Card
        className={classNames({
          [styles.list]: true,
          [styles.isOpen]: isOpen,
        })}
      >
        <Box className={styles.option}>
          <Image src="/Flag-ENG.svg" alt="Flag-ENG" width={24} height={24} />
          <span>Eng</span>
        </Box>
        <Box className={styles.option}>
          <Image src="/Flag-RUS.svg" alt="Flag-RUS" width={24} height={24} />
          <span>Rus</span>
        </Box>
      </Card>
    </div>
  );
};
export default Select;
