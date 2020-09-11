import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Description = ({ active }) => {
  const subMenus = useMemo(() => {
    return {
      about_us: {
        list: [
          "ncit",
          "pokhara university",
          "executive director's message",
          "Principal's Message",
          "Infrastucture and Campus",
          "Teaching Faculty",
          "Staff",
        ],
        description:
          "One of the world’s great intellectual destinations, the University of Chicago empowers scholars and students to ask tough questions, cross disciplinary boundaries, and challenge conventional thinking to enrich human life around the globe.",
        image: "",
      },
      academics: {
        list: [
          "ME Computer Engineering",
          "Master of Computer System (MCIS)",
          "Msc Computer Science",
          "BE Civil",
          "BE IT",
          "BE Electronic and Communication",
          "BE Software",
          "Bachelor of bussiness adminsitraiton",
          "Bachelor of computer application",
        ],
        description:
          "Join a community of the world’s brightest minds and prepare to tackle its greatest problems. Here, your ideas will be heard, supported, questioned, tested, and honed as you form a network of lifelong friends, colleagues, and collaborators.",
        image: "",
      },
      facilities: {
        list: [
          "Labs",
          "NaSCoIT",
          "Journals",
          "Cutting Edge Facility",
          "Games & Sport",
          "Master Thesis",
        ],
        description: "okay okat okatksfk lklfkal kf;",
        image: "",
      },
      admission: {
        list: ["Scholorship", "Admission Process"],
        description: "kdas;l lklfks; kf",
        image: "dklskf;l ",
      },
      gallery: {
        list: ["Image Gallery", "Video Gallery"],
        description: "okay i am sandip satyal okay?",
        image: "sandip",
      },
      departments: {
        list: [
          "computer engineering",
          "IT engineering",
          "software engineering",
          "electronics and communication Engineering",
          "civil engineering",
          "management studies",
          "graduates studies",
          "bachelors of computer application (BCA)",
        ],
        description: "i am iam",
        image: "s",
      },
    };
  }, []);

  const renderList = subMenus[active || "academics"].list.map((item) => (
    <li key={item}>
      <Link to="#">{item}</Link>
    </li>
  ));

  const renderDescription = subMenus["academics"].description;

  return (
    <div className="row p-5">
      <div className="col-lg-4 d-flex justify-content-center">
        <ul>{renderList}</ul>
      </div>
      <div className="col-lg-4 d-flex justify-content-center">
        {renderDescription}
      </div>
      <div className="col-lg-4 d-flex justify-content-center">
        image shall be here
      </div>
    </div>
  );
};

export default Description;
