import React, { useEffect } from "react";
import ProgSkills from "./ProgSkills";


export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     
      <ProgSkills />
    </>
  );
}
