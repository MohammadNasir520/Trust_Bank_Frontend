

export const cardNavMenuOptions = [
    {
        label: 'Credit',
        link: '/credit-card'
    },
    {
        label: 'Debit',
        link: '/debit-card',
      
    },
    {
        label: 'Corporate Card',
        link: '',
        children: [
            {
                label: 'Small business',
                link: ''
            },
            {
                label: 'Large business',
                link: ''
            },
            {
                label: 'Manufacture',
                link: ''
            },
            {
                label: 'Marketing',
                link: ''
            },
        ]
    },
    {
        label: 'Student',
        link: '',
        children: [
            {
                label: 'Scholarship',
                link: ''
            },
            {
                label: 'Phd',
                link: ''
            },
            {
                label: 'Graduate',
                link: ''
            },
        ]
    },
   
]

export const loanNavMenuOptions = [
  {
    label: "Agriculture",
    link: "/loan/agriculture",
  },
  {
    label: "Personal",
    link: "",
    children: [
      {
        label: "Education Loan",
        link: "",
        children: [
          {
            label: "Terms and Condition",
            link: "/loan/personal/education/terms_condition",
          },
          {
            label: "Apply for loan",
            link: "/loan/personal/education/apply",
          },
        ],
      },
      {
        label: "Loan Against D.",
        link: "/loan/personal/loan_against_d",
      },
      {
        label: "Pension Loan",
        link: "/loan/personal/pension",
      },
      {
        label: "Event Loan",
        link: "/loan/personal/event",
      },
      {
        label: "Loan Against Gold",
        link: "/loan/personal/loan_against_gold",
      },
    ],
  },
  {
    label: "Corporate & Business",
    link: "",
    children: [
      {
        label: "Small business",
        link: "/loan/corporate/small_business",
      },
      {
        label: "Large business",
        link: "/loan/corporate/large_business",
      },
      {
        label: "Manufacture",
        link: "/loan/corporate/manufacture",
      },
      {
        label: "Marketing",
        link: "/loan/corporate/manufacture",
      },
    ],
  },
  {
    label: "Education",
    link: "",
    children: [
      {
        label: "Scholarship",
        link: "/loan/education/scholarship",
      },
      {
        label: "Phd",
        link: "/loan/education/scholarship",
      },
      {
        label: "Graduate",
        link: "/loan/education/graduate",
      },
    ],
  },
  {
    label: "Home Loans",
    link: "/loan/home",
  },
  {
    label: "Vehicle Loans",
    link: "/loan/vehicle",
  },
];