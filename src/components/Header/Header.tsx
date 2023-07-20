import logo from "../../assets/WATERMSRK.png";
import githubIcon from "../../assets/GitHub_Logo.png";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Watermark" height="120px" className="header-img" />

        
        <a
          className="header-link"
          href="https://github.com/GennadiyK/watermark"
          target="_blank"
          title="Open GitHub repository"
        >
          &#11088;
          <img src={githubIcon} alt="Github repository" width="70" />
        </a>

    </header>
  );
};
