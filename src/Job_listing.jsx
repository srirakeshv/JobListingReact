import React from "react";
import JobData from "./data.json";
import "./App.css";

const JobListing = () => {
  return (
    <div>
      <header></header>
      <div className="main">
        {JobData.map((job, index) => (
          <div
            className={`${job.featured ? "high container" : "container"}`}
            key={index}
          >
            <div className="image">
              <div className="img">
                <img src={job.logo}></img>
              </div>
              <div class="text">
                <div className="text-head">
                  <p className="title">{job.company}</p>
                  {job.new && (
                    <p className={`${job.new ? "title1" : ""}`}>NEW!</p>
                  )}
                  {job.featured && (
                    <p className={`${job.featured ? "title2" : ""}`}>
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
              <p className="hint">{job.role}</p>
              <p className="hint">{job.level}</p>
              <div className="content-hint">
                {job.languages.map((ln) => (
                  <p>{ln}</p>
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
