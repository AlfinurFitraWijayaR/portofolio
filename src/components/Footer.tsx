import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 mb-4 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-4 text-2xl mb-4">
          <a
            href="https://www.linkedin.com/in/alfinurfitrawijaya/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/AlfinurFitraWijayaR/" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/alfinurfitrawijaya/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Portofolio Alfinur Fitra Wijaya.R</p>
      </div>
    </footer>
  );
};

export default Footer;
