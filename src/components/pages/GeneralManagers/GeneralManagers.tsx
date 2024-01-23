import { Divider } from "@chakra-ui/react";
import ManagerCard from "./ManagerCard/ManagerCard";

const managersData = [
  {
    name: "Md. Nasir Uddin",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
  },
  {
    name: "Md. Akramul Hoque",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
  },
  {
    name: "Milkat Sayed",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
  },
  {
    name: "Morshed Ali Masud",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
  },
  {
    name: "Foysal Ahmed",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
  },
  {
    name: "Md. Akramul Hoque",
    avatar: "/assets/managers/ah-likhon.jpg",
    designation: "Founder",
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
            name={el.name}
            avatar={el.avatar}
            designation={el.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralManagers;
