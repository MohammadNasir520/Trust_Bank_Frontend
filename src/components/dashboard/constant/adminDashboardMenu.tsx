import { BsDash, BsPerson } from "react-icons/bs"
export interface IDashboardMenuItem {
    title: string;
    pathname: string;
    icon?: any; // Define the type for the icon component
    children?: IDashboardMenuItem[]; // Optional children for nested menu items
}
export const adminDashboardMenu: IDashboardMenuItem[] = [
    {
        title: 'profile',
        pathname: '/dashboard/profile',
        icon: <BsPerson />,
        children: [
            {
                title: 'Accounts',
                pathname: '/dashboard/profile/account'
            },

            {
                title: 'Setting',
                pathname: '/dashboard/profile/setting'
            },

        ]
    },
    {
        title: 'Loan',
        pathname: '/dashboard/loan',
        icon: <BsDash />,
        children: [
            {
                title: 'Home Loan',
                pathname: '/dashboard/loan/home'
            },
            {
                title: 'Education Loan',
                pathname: '/dashboard/loan/education'
            },
        ]
    },
    {
        title: 'Deposit',
        pathname: '/dashboard/deposit',
        icon: <BsDash />,

    }
]