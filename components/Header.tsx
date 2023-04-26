
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaLinkedin } from "react-icons/fa"
type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap-reverse gap-2 ">
        <h6 className="text-2xl  font-medium text-orange-800 ">
          Parikshit Verma
        </h6>
        <div className="flex space-x-2">
          <SocialMediaIcon icon={FiGithub} name="Github" href="https://github.com/parik-shit"/>
          <SocialMediaIcon icon={FiTwitter} name="Twitter" href="https://twitter.com/ParikshitVerma7"/>
          <SocialMediaIcon icon={FaLinkedin} name="LinkedIn" href="https://www.linkedin.com/in/parikshit-verma-598068201/"/>
          <SocialMediaIcon icon={FiMail} name="Gmail" href="mailto:parikshit152018@gmail.com"/>
        </div>
      </div>
      <p className="font-mono">Developer / Designer / Web3 </p>
    </div>
  );
};

export default Header;
