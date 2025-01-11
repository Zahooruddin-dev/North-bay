import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="container mb-8 mt-20">
      <div className="flex justify-center items-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a href={link.href} target="_blank" rel="noopener noreferrer" key={index}>
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-neutral-400 text-center mt-8">
        Copyright &copy; {currentYear} North Bay Luxembourg. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
