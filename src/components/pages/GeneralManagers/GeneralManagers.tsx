import { Divider } from "@chakra-ui/react";
import ManagerCard from "./ManagerCard/ManagerCard";

const managersData = [
  {
    name: "Md. Nasir Uddin",
    avatar: "/assets/managers/NasirFormalPic.jpg",
    designation: "Founder",
    about:
      "I have completed my graduation with a B.Sc. (Eng.) and an M.Sc. (Eng.) in Information and Communication Technology (ICT) from Comilla University. I am currently working as a Junior Software Engineer (Javascript) with 1 year of experience for Profecia Links Consulting Pvt. Ltd (An Indian company with a remote base). I am skilled in Javascript, TypeScript, and Javascript frameworks like ReactJS, NodeJS, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind CSS, ES6, MongoDB, Redux, Context API, Restful API, Axios, Firebase Authentication, React Bootstrap, Material UI, and Wordpress Theme Customization.",
    socials: {
      facebook: "https://www.facebook.com/md.akramul.hoque.likhon",
      linkedin: "https://www.linkedin.com/in/mdakramulhoque/",
      twitter: "https://twitter.com/AurthohinL",
      github: "https://github.com/AH-Likhon",
    },
  },
  {
    name: "Md. Akramul Hoque",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
    about:
      "I have completed my graduation with a B.Sc. (Eng.) and an M.Sc. (Eng.) in Information and Communication Technology (ICT) from Comilla University. I am currently working as a Junior Software Engineer (Javascript) with 1 year of experience for Profecia Links Consulting Pvt. Ltd (An Indian company with a remote base). I am skilled in Javascript, TypeScript, and Javascript frameworks like ReactJS, NodeJS, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind CSS, ES6, MongoDB, Redux, Context API, Restful API, Axios, Firebase Authentication, React Bootstrap, Material UI, and Wordpress Theme Customization.",
    socials: {
      facebook: "https://www.facebook.com/md.akramul.hoque.likhon",
      linkedin: "https://www.linkedin.com/in/mdakramulhoque/",
      twitter: "https://twitter.com/AurthohinL",
      github: "https://github.com/AH-Likhon",
    },
  },
  {
    name: "Mikat Sayed",
    avatar: "/assets/managers/Sayed-Gaziul-Haque.jpg",
    designation: "Founder",
    about:
      "I have completed my graduation with a B.Sc. (Eng.) and an M.Sc. (Eng.) in Information and Communication Technology (ICT) from Comilla University. I am currently working as a Junior Software Engineer (Javascript) with 1 year of experience for Profecia Links Consulting Pvt. Ltd (An Indian company with a remote base). I am skilled in Javascript, TypeScript, and Javascript frameworks like ReactJS, NodeJS, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind CSS, ES6, MongoDB, Redux, Context API, Restful API, Axios, Firebase Authentication, React Bootstrap, Material UI, and Wordpress Theme Customization.",
    socials: {
      facebook: "https://www.facebook.com/md.akramul.hoque.likhon",
      linkedin: "https://www.linkedin.com/in/mdakramulhoque/",
      twitter: "https://twitter.com/AurthohinL",
      github: "https://github.com/AH-Likhon",
    },
  },
  {
    name: "Morshed Ali Masud",
    avatar: "/assets/managers/Morshed.png",
    designation: "Founder",
    about:
      "I have completed my graduation with a B.Sc. (Eng.) and an M.Sc. (Eng.) in Information and Communication Technology (ICT) from Comilla University. I am currently working as a Junior Software Engineer (Javascript) with 1 year of experience for Profecia Links Consulting Pvt. Ltd (An Indian company with a remote base). I am skilled in Javascript, TypeScript, and Javascript frameworks like ReactJS, NodeJS, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind CSS, ES6, MongoDB, Redux, Context API, Restful API, Axios, Firebase Authentication, React Bootstrap, Material UI, and Wordpress Theme Customization.",
    socials: {
      facebook: "https://www.facebook.com/md.akramul.hoque.likhon",
      linkedin: "https://www.linkedin.com/in/mdakramulhoque/",
      twitter: "https://twitter.com/AurthohinL",
      github: "https://github.com/AH-Likhon",
    },
  },
  {
    name: "Foysal Ahmed",
    avatar: "/assets/managers/abu-sany-faysal.png",
    designation: "Founder",
    about:
      "I have completed my graduation with a B.Sc. (Eng.) and an M.Sc. (Eng.) in Information and Communication Technology (ICT) from Comilla University. I am currently working as a Junior Software Engineer (Javascript) with 1 year of experience for Profecia Links Consulting Pvt. Ltd (An Indian company with a remote base). I am skilled in Javascript, TypeScript, and Javascript frameworks like ReactJS, NodeJS, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind CSS, ES6, MongoDB, Redux, Context API, Restful API, Axios, Firebase Authentication, React Bootstrap, Material UI, and Wordpress Theme Customization.",
    socials: {
      facebook: "https://www.facebook.com/md.akramul.hoque.likhon",
      linkedin: "https://www.linkedin.com/in/mdakramulhoque/",
      twitter: "https://twitter.com/AurthohinL",
      github: "https://github.com/AH-Likhon",
    },
  },
  {
    name: "Md. Akramul Hoque",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
    about:
      "I have completed my graduation with a B.Sc. (Eng.) and an M.Sc. (Eng.) in Information and Communication Technology (ICT) from Comilla University. I am currently working as a Junior Software Engineer (Javascript) with 1 year of experience for Profecia Links Consulting Pvt. Ltd (An Indian company with a remote base). I am skilled in Javascript, TypeScript, and Javascript frameworks like ReactJS, NodeJS, and ExpressJS. I also have solid foundations in HTML5, CSS3, Bootstrap, Tailwind CSS, ES6, MongoDB, Redux, Context API, Restful API, Axios, Firebase Authentication, React Bootstrap, Material UI, and Wordpress Theme Customization.",
    socials: {
      facebook: "https://www.facebook.com/md.akramul.hoque.likhon",
      linkedin: "https://www.linkedin.com/in/mdakramulhoque/",
      twitter: "https://twitter.com/AurthohinL",
      github: "https://github.com/AH-Likhon",
    },
  },
];

const GeneralManagers = () => {
  return (
    <div>
      <div className="text-lg lg:text-2xl font-bold tracking-wide mb-1">
        General Managers
      </div>
      <Divider className="h-[1px] bg-[#012169] opacity-20" />

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 my-8">
        {managersData.map((el, index) => (
          <ManagerCard
            key={index}
            index={index}
            name={el.name}
            avatar={el.avatar}
            designation={el.designation}
            about={el.about}
            socials={el.socials}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralManagers;
