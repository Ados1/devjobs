import React from "react";
import styles from "../my.style.module.css";

const JobProfle = (props) => {
  return (
    <div className={styles.jb}>
      <div>
        <img
          src={props.image}
          className={styles.img}
          alt="icon"
          width="30px"
          height="30px"
        />
      </div>
      <p className={styles.text}>
        {props.timeposted} . {props.employment}
      </p>
      <h3>{props.title}</h3>
      <p className={styles.text}>{props.companyname}</p>
      <p className={styles.loc}>{props.location}</p>
    </div>
  );
};

export default JobProfle;
