import React from "react";
import JobProfle from "./JobProfle";
import scoot from "../logos/scoot.svg";
import blogr from "../logos/blogr.svg";
import vector from "../logos/vector.svg";
import officelite from "../logos/officelite.svg";
import pod from "../logos/pod.svg";
import creative from "../logos/creative.svg";
import pomodoro from "../logos/pomodoro.svg";
import maker from "../logos/maker.svg";
import coffeeroasters from "../logos/coffeeroasters.svg";
import mastercraft from "../logos/mastercraft.svg";
import crowdfund from "../logos/crowdfund.svg";
import typemaster from "../logos/typemaster.svg";
import styles from "../my.style.module.css";
const List = () => {
  const jobs = [
    {
      id: 0,
      src: scoot,
      timeposted: "5hr ago",
      employment: "Full Time",
      title: "Senior Software Engineer",
      companyname: "Scoot",
      location: "United Kingdom",
    },
    {
      id: 1,
      src: blogr,
      timeposted: "20hr ago",
      employment: "Part Time",
      title: "Haskell and PureScript Dev",
      companyname: "Blogr",
      location: "United States",
    },
    {
      id: 2,
      src: vector,
      timeposted: "1d ago",
      employment: "Part Time",
      title: "Midlevel Back End Engineer",
      companyname: "Vector",
      location: "Russia",
    },
    {
      id: 3,
      src: officelite,
      timeposted: "2d ago",
      employment: "Full Time",
      title: "Senior Application Engineer",
      companyname: "Office Lite",
      location: "Japan",
    },
    {
      id: 4,
      src: pod,
      timeposted: "2d ago",
      employment: "Part Time",
      title: "Remote Devops Engineer",
      companyname: "Pod",
      location: "Thailand",
    },
    {
      id: 5,
      src: creative,
      timeposted: "4d ago",
      employment: "Part Time",
      title: "Desktop Support Manager",
      companyname: "Creative",
      location: "Germany",
    },
    {
      id: 6,
      src: pomodoro,
      timeposted: "1w ago",
      employment: "Full Time",
      title: "iOS Engineer",
      companyname: "Pomodoro",
      location: "United States",
    },
    {
      id: 7,
      src: maker,
      timeposted: "1w ago",
      employment: "Full Time",
      title: "Senior EJB Developer",
      companyname: "Maker",
      location: "United Kingdom",
    },
    {
      id: 8,
      src: coffeeroasters,
      timeposted: "1w ago",
      employment: "Part Time",
      title: "Senior Frontend Developer",
      companyname: "Coffeeroasters",
      location: "Singapore",
    },
    {
      id: 9,
      src: mastercraft,
      timeposted: "2w ago",
      employment: "Freelance",
      title: "App & Website Engineer",
      companyname: "Mastercraft",
      location: "United States",
    },
    {
      id: 10,
      src: crowdfund,
      timeposted: "1mo ago",
      employment: "Part Time",
      title: "Fullstack Developer",
      companyname: "Crowdfund",
      location: "NewZealand",
    },
    {
      id: 11,
      src: typemaster,
      timeposted: "4d ago",
      employment: "Part Time",
      title: "Technical Lead Engineer",
      companyname: "Typemaster",
      location: "United Kingdom",
    },
  ];
  return (
    <>
      <div className={styles.body}>
        <div className={styles.tb}>
          {jobs.map((job) => (
            <JobProfle
              image={job.src}
              companyname={job.companyname}
              employment={job.employment}
              timeposted={job.timeposted}
              title={job.title}
              location={job.location}
            />
          ))}
        </div>
        <button className={styles.but}>Load More</button>
      </div>
    </>
  );
};

export default List;
