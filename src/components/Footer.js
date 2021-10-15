import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const iconClass = "text-2xl text-gray-400 hover:text-yellow-400 transition-all bSix:text-xl";

const Footer = () => {
  return (
    <div id="footerContainer" className="px-16 py-8 flex justify-center">
      <div id="iconContainer" className="">
        <a rel="noreferrer" target="_blank" href="https://github.com/jacoberick" className={iconClass}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/jacob-e-white/"
          className={`${iconClass} mx-16`}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a rel="noreferrer" target="_blank" href="https://twitter.com/jacobwhitedev" className={iconClass}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
