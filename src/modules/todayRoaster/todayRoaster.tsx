// import React, { useState } from "react";
import StudentsRoaster from "src/modules/studentRoaster/studentRoaster";
import TeacherRoaster from "src/modules/teacherRoaster/teacherRoaster";
import styles from "./todayRoaster.module.css";

export function TodayRoaster() {
  return (
    <>
      <div>
        <h1>Hogwarts University</h1>
      </div>
      <div className={styles.wrapper}>
        <TeacherRoaster></TeacherRoaster>
        <StudentsRoaster></StudentsRoaster>
      </div>
    </>
  );
}
