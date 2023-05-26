import "./index.css";

export default function Header({author}) {
  return (
    <header>
      <div className="header">
        <div className="author">
          <button className="name" onClick={() => window.location.replace("/#top")}>{author}</button>
        </div>
        <div className="headerMenu">
          <button className="headerButtons" onClick={() => window.location.replace("/#about")}>About</button>
          <button className="headerButtons" onClick={() => window.location.replace("/#experience")}>Experience</button>
          <button className="headerButtons" onClick={() => window.location.replace("/#project")}>Project</button>
          <button className="headerButtons" onClick={() => window.location.replace("/#contact")}>Contacts</button>
        </div>
      </div>
      <div className="divider"></div>
    </header>
  );
};