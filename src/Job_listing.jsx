import React, { useState, useEffect } from "react";
import JobData from "./data.json";
import "./App.css";

const JobListing = () => {
  const [active, setActive] = useState(false);
  const [selectedRole, setSelectedRole] = useState([]);
  useEffect(() => {
    console.log("Selected Roles:", selectedRole);
  }, [selectedRole]);
  const handleClick = (role) => {
    setActive(true);
    setSelectedRole((prevRole) => [...prevRole, role]);
    console.log(role, active);
  };
  const removeClick = (roleToRemove) => {
    setSelectedRole((prevRole) =>
      prevRole.filter((role) => role !== roleToRemove)
    );
  };
  return (
    <div>
      <header>
        <div className={`input  `}>
          <div className="input1">
            {selectedRole.map((role, index) => (
              <p
                key={index}
                onClick={() => {
                  removeClick(role);
                }}
              >
                {role}
              </p>
            ))}
          </div>
        </div>
      </header>
      <div className="main">
        {JobData.map((job, index) => (
          <div
            className={`${job.featured ? "high container" : "container"} ${
              selectedRole.length > 0 &&
              selectedRole.every((role) => job.role.includes(role))
                ? "remove1"
                : ""
            }`}
            key={index}
          >
            <div className="image">
              <div className="img">
                <img src={job.logo}></img>
              </div>
              <div className="text">
                <div className="text-head">
                  <p className="title">{job.company}</p>
                  {job.new && (
                    <p className={`${job.new ? "title1" : ""}`}>NEW!</p>
                  )}
                  {job.featured && (
                    <p
                      className={`${job.featured ? "title2" : ""}`}
                      key={index}
                    >
                      FEATURED
                    </p>
                  )}
                </div>
                <p className="text-middle">{job.position}</p>
                <div className="text-last">
                  <p>{job.postedAt}</p>
                  <p>.</p>
                  <p>{job.contract}</p>
                  <p>.</p>
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <div className="content">
              <p className="hint" onClick={() => handleClick(job.role)}>
                {job.role}
              </p>
              <p className="hint" onClick={() => handleClick(job.level)}>
                {job.level}
              </p>
              <div className="content-hint">
                {job.languages.map((ln) => (
                  <p onClick={() => handleClick(ln)}>{ln}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
