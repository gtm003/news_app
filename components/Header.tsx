import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/material";
import Image from "next/image";
import Select from "./Select";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Box className={styles.container}>
        <Image src="/ITMO.svg" alt="ITMO Logo" width={162} height={16} />
        <Select />
      </Box>
    </AppBar>
  );
};
export default Header;
