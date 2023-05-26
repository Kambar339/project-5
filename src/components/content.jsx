import "./index.css";
import data from "./index.json";
import to_do_image from "../images/todolist.png";
import my_img from "../images/myphoto.jpeg";
import { SiLinkedin, SiTelegram, SiGithub } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

export default function Main({author}) {  
  return (
    <div>
      <div id="top" className="welcoming">
        <div className="sectionTexts">
          <p className="sectionHeaders">Hi, I’m {author}, <br/> I build things for the web.</p>
          <p className="small_txt">I’m software developer and this is my portfolio.</p>
        </div>
        <button onClick={() => window.open("https://drive.google.com/file/d/1z8yiAiH8k4JBDE_ffqmDZyXHalS2Qd-A/view?usp=share_link", "_blank")}>
          Check out my CV
        </button>
      </div>
      <div className="divider"></div>

      <div id="about" className="sectionAbout">
        <div className="about">
          <p className="sectionHeaders">About me</p>
        </div>

        <div className="first_about">
          <div className="sub_about">
            <p className="small_txt">
            I’m software developer and this is my portfolio.   
              <br/> I’m software developer and this is my portfolio. I’m software developer   
              <br/> and this is my portfolio. I’m software developer and this is my portfolio.
            </p>
            <p className="small_txt">Skills, Stacks & Tools :</p>
            <div className="aboutSkills">
              <ul className="skills">
                <li className="small_txt">Java</li>
                <li className="small_txt">HTML, CSS, Javascript</li>
                <li className="small_txt">React JS</li>
              </ul>
            </div>
          </div>
          
          <div className="image">
            <img src={my_img} alt="img" style={{ width: 280, height: 360 }}/>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div id="experience" className="sectionExperience">
        <p className="sectionHeaders">Experience</p>
        {data.experience.map((item, index) => (
          <div className="experiences" key={index}>
            <p className="experienceDates">{item.date}</p>
            <div className="allAboutExperiences">
              <p className="position">{item.position}</p>
              <p className="company">{item.company}</p>
              <p className="location">{item.location}</p>
              <p className="description">
                {item.description.map((item, index) => (
                  <span key={index}> &nbsp; · &nbsp; {item} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="divider"></div>

      <div id="project" className="sectionProject">
        <p className="sectionHeaders">Project I've Worked On</p>
        <div className="project">
          <div className="image">
            <img src={ to_do_image} alt="img" style={{ width: " 100%", height: 400 }}/>
          </div>
          <div className="aboutProject">
            <p className="projectName">Simple To Do List</p>
            <p className="small_txt" style={{marginBottom: "-10px"}}>Developed simple todo web application in Nfactorial courses.</p>
            <p className="small_txt">React JS, HTML, CSS</p>
            <div className="contactButtons">
            <button  onClick={() => window.open("https://github.com/Kambar339/Project-4", "_blank")}>
              <SiGithub size={100}/>
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div id="contact" className="sectionContacts">
        <div className="sectionTexts">
          <p className="sectionHeaders">Say Hello!</p>
          <p className="small_txt">I’m software developer and this is my portfolio.</p>
          <p className="small_txt" style={{marginBottom: "50px", marginTop: "50px"}}>Get in touch via:</p>
        </div>
        <div className="contactButtons">
          <button style={{backgroundColor: "transparent"}} onClick={() => window.open("mailto:nursultankambar339@gmail.com", "_blank")}>
            <IoMdMail size={100}/>
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};