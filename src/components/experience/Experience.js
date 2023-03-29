import React from "react";
import { info } from "../../info/Info";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box } from "@mui/material";
import { useGlobalVariablesContext } from "../GlobalVariablesContextProvider";
export default function Experience() {
  const experiences = info.experience;
  const globalVars = useGlobalVariablesContext();

  function experienceTimeline() {
    return (
      <>
        {experiences.map((experience, index) => {
          switch (experience.isWork) {
            case true:
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: globalVars.darkModeGlobal ? "#27242f" : "#fff" ,
                    color: globalVars.darkModeGlobal ? "#fff" : "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(39,36,47)",
                  }}
                  date={experience.duration}
                  iconStyle={{ background: "rgb(39,36,47)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    {experience.company}{" "}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {experience.designation}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {experience.location}
                  </h4>
                  <br />
                  {experience.responsibilities && <ul>
                    {experience.responsibilities.map(responsibility =>
                      <li>
                        {'\u2022'} {responsibility}
                      </li>
                    )}
                  </ul>}
                  {experience.achievement && <p>{experience.achievement}</p>}
                </VerticalTimelineElement>
              );

            default:
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#27242f",
                    color: globalVars.darkModeGlobal ? "#fff" : "#000",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(39,36,47)",
                  }}
                  date={experience.duration}
                  iconStyle={{ background: "rgb(39,36,47)", color: "#fff" }}
                // icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {experience.degree}{" "}
                  </h3>
                  <h3 className="vertical-timeline-element-title">
                    {experience.college}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {experience.university}
                  </h4>
                  <p>{experience.role}</p>
                  {experience.achievement && <p>{experience.achievement}</p>}
                </VerticalTimelineElement>
              );
          }
        })}
      </>
    );
  }

  return (
    <Box mt={"3rem"}>
      <VerticalTimeline lineColor={ globalVars.darkModeGlobal ? "#fff" : "#000" }>{experienceTimeline()}</VerticalTimeline>
    </Box>
  );
}
