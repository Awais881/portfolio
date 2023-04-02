import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        { id: "Bootstrap_skill", content: "BootStrap", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
       
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "MaterialUi_skill",
          content: "Material Ui",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "expressJs_skill",
          content: "Express Js",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Firebase_skill",
          content: "Firebase",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "As a MERN stack developer, I am passionate about building dynamic and responsive web applications. I have a solid understanding of the core technologies that make up the MERN stack - MongoDB, Express.js, React, and Node.js. My expertise also extends to HTML, CSS, and JavaScript, allowing me to build elegant and intuitive user interfaces. I am constantly exploring new frameworks and technologies to stay current with industry trends and to expand my skill set. With experience in both front-end and back-end development, I am able to bring a holistic approach to any project I work on. My goal is to create robust and scalable applications that meet the needs of both clients and end-users."
        },
        {
          id: "second-p-about",
          content:
            "Overall, my experience building projects using the MERN stack has given me a deep understanding of each technology in the stack and how they can be effectively integrated to create scalable and efficient web applications."
        },
      
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
