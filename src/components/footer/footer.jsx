import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-800 border-t-white border-t-[2px]">
      {/* Tested pull request */}
      <div className="flex justify-start items-center max-w-screen-xl text-center">
        <FaSquareGithub className="text-gray-200 text-xl mr-2" />
        <p className="my-6 text-gray-200 hover:underline">
          <a href="https://github.com/chingu-voyages/v45-tier2-team-20">
            Team project github repository
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
