// import React, { useState } from "react";
import StudentsRoaster from "src/modules/studentRoaster/studentRoaster";
import TeacherRoaster from "src/modules/teacherRoaster/teacherRoaster";
import styles from "./todayRoaster.module.css";

function TodayRoaster() {
  return (
    <div className={styles.wrapper}>
      <TeacherRoaster></TeacherRoaster>
      <StudentsRoaster></StudentsRoaster>
    </div>
  );
}

export default TodayRoaster;
