import { BsDash, BsPerson } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
export interface IDashboardMenuItem {
  title: string;
  pathname: string;
  icon?: any; // Define the type for the icon component
  children?: IDashboardMenuItem[]; // Optional children for nested menu items
}
export const adminDashboardMenu: IDashboardMenuItem[] = [
  {
    title: "profile",
    pathname: "/dashboard/profile/account",
    icon: <BsPerson />,
  },
  {
    title: "Accounts",
    pathname: "/dashboard/account",
    icon: <FaUsers />,
  },
  {
    title: "Loan",
    pathname: "/dashboard/loan",
    icon: <BsDash />,
    children: [
      {
        title: "Agriculture Loan",
        pathname: "/dashboard/loan/agriculture",
      },
      {
        title: "Personal Loan",
        pathname: "/dashboard/loan/personal",
      },
      {
        title: "Corporate Loan",
        pathname: "/dashboard/loan/corporate",
      },
      {
        title: "Education Loan",
        pathname: "/dashboard/loan/education",
      },
    ],
  },
  {
    title: "Deposit",
    pathname: "/dashboard/deposit",
    icon: <BsDash />,
  },
];
