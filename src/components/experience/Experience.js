import React from "react";
import { info } from "../../info/Info";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import colors from '../../variables.modules.scss';

export default function Experience() {
  const experiences = info.experience;

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
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date={experience.duration}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  // icon={<WorkIcon />}
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
                  <p>{experience.role}</p>
                  {experience.achievement && (
                    <p>
                      {experience.achievement}
                    </p>
                  )}
                </VerticalTimelineElement>
              );

            default:
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date={experience.duration}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
                  {experience.achievement && (
                    <p>
                      {experience.achievement}
                    </p>
                  )}
                </VerticalTimelineElement>
              );
          }
        })}
      </>
    );
  }

  return <VerticalTimeline>{experienceTimeline()}</VerticalTimeline>;
}
