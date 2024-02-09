import { BsDash, BsPerson } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
export interface IDashboardMenuItem {
  title: string;
  pathname: string;
  icon?: any; // Define the type for the icon component
  children?: IDashboardMenuItem[]; // Optional children for nested menu items
}
export const adminDashboardMenu: IDashboardMenuItem[] = [
    {
        title: 'profile',
        pathname: '/dashboard/profile/account',
        icon: <BsPerson />,
    },
  {
    title: "Dashboard",
    pathname: "/dashboard/overview",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Profile",
    pathname: "/dashboard/profile/account",
    icon: <BsPerson />,
  },
  {
    title: "Accounts",
    pathname: "/dashboard/account",
    icon: <FiUsers />,
  },
  {
    title: "Loan",
    pathname: "/dashboard/loan",
    icon: <FaHandHoldingDollar className="text-lg" />,
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
  // {
  //   title: "Deposit",
  //   pathname: "/dashboard/deposit",
  //   icon: <BsDash />,
  // },
  {
    title: "Transactions",
    pathname: "/dashboard/transactions",
    icon: <GrTransaction className="text-lg" />,
    children: [
      {
        title: "Deposits",
        pathname: "/dashboard/transactions/deposits",
      },
      {
        title: "Withdraws",
        pathname: "/dashboard/transactions/withdraws",
      }

    ],
  },
  {
    title: "Deposit/Withdraw",
    pathname: "/dashboard/deposit_withdraw",
    icon: <RiExchangeDollarLine className="text-lg" />,
  },

];
