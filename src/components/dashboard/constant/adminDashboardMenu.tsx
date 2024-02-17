import { BsDash, BsPerson } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
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
    children: [
      {
        title: "Current Accounts",
        pathname: "/dashboard/schemeLoans/agricultureScheme",
      },
      {
        title: "Savings Accounts",
        pathname: "/dashboard/schemeLoans/personalScheme",
      },
      {
        title: "Student Accounts",
        pathname: "/dashboard/schemeLoans/corporateScheme",
      },
      {
        title: "Savings Accounts",
        pathname: "/dashboard/schemeLoans/educationScheme",
      },
    ],
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
  {
    title: "Loan Scheme",
    pathname: "/dashboard/schemeLoans",
    icon: <GoInfo className="text-lg" />,
    children: [
      {
        title: "Agriculture  Scheme",
        pathname: "/dashboard/schemeLoans/agricultureScheme",
      },
      {
        title: "Personal Scheme",
        pathname: "/dashboard/schemeLoans/personalScheme",
      },
      {
        title: "Corporate  Scheme",
        pathname: "/dashboard/schemeLoans/corporateScheme",
      },
      {
        title: "Education  Scheme",
        pathname: "/dashboard/schemeLoans/educationScheme",
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
