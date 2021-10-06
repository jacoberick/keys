import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div
      id="headerContainer"
      className=" flex px-16 justify-between items-center max-w-7xl my-0 mx-auto py-3"
    >
      <div id="logoContainer" className="flex items-center mr-4">
        <FontAwesomeIcon icon={faKey} className="text-2xl text-yellow-400" />
        <h1 className="font-zilla text-white text-3xl ml-2">Keys</h1>
      </div>
      <hr className="border-yellow-400 border-2 rounded-full w-full" />
    </div>
  );
};

export default Header;
