// import React, { useState } from "react";
import StudentsRoaster from "src/components/studentRoaster/studentRoaster";
import TeacherRoaster from "src/components/teacherRoaster/teacherRoaster";
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
