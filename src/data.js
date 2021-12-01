//data[0] - navigation bar

const data = [
  {
    Navdivisions: [
      {
        title: "Axios Tables",
        topics: [
          {
            name: "Posts",
            link: "/table",
          },
          {
            name: "Users",
            link: "/users",
          },
        ],
      },
      {
        title: "Utilities",
        topics: [
          {
            name: "Colors",
            link: "/colors",
          },
          {
            name: "Borders",
            link: "/borders",
          },
        ],
      },
    ],
  },
  {
    cards: [
      {
        name: "Earnings (Monthly)",
        number: "$40,000",
        clasname1: "card border-left-primary shadow h-100 py-2",
        clasname2: "text-xs font-weight-bold text-primary text-uppercase mb-1",
      },
      {
        name: "Earnings (Annual)",
        number: "$215,000",
        clasname1: "card border-left-success shadow h-100 py-2",
        clasname2: "text-xs font-weight-bold text-success text-uppercase mb-1",
      },
      {
        name: "Pending Requests",
        number: "18",
        clasname1: "card border-left-warning shadow h-100 py-2",
        clasname2: "text-xs font-weight-bold text-warning text-uppercase mb-1",
      },
    ],
  },
  {
    projects: [
      {
        name: "Server migration",
        percent: "20%",
        classnam: "progress-bar bg-danger",
      },
      {
        name: "Sales tracking",
        percent: "40%",
        classnam: "progress-bar bg-warning",
      },
      {
        name: "Customer Database",
        percent: "60%",
        classnam: "progress-bar ",
      },
      {
        name: "Payout details",
        percent: "80%",
        classnam: "progress-bar bg-info",
      },
      {
        name: "Account setup",
        percent: "100%",
        classnam: "progress-bar bg-success",
      },
    ],
  },
  {
    colors: [
      {
        name: "Primary",
        percent: "#4e73df",
        classnam: "card bg-primary text-white shadow",
        classnam1: "text-white-50 small",
      },
      {
        name: "Success",
        percent: "#1cc88a",
        classnam: "card bg-success text-white shadow",
        classnam1: "text-white-50 small",
      },
      {
        name: "Info",
        percent: "#36b9cc",
        classnam: "card bg-info text-white shadow",
        classnam1: "text-white-50 small",
      },
      {
        name: "Warning",
        percent: "#f6c23e",
        classnam: "card bg-warning text-white shadow",
        classnam1: "text-white-50 small",
      },
      {
        name: "Danger",
        percent: "#e74a3b",
        classnam: "card bg-danger text-white shadow",
        classnam1: "text-white-50 small",
      },
      {
        name: "Secondary",
        percent: "#858796",
        classnam: "card bg-secondary text-white shadow",
        classnam1: "text-white-50 small",
      },
      {
        name: "Light",
        percent: "#f8f9fc",
        classnam: "card bg-light text-black shadow",
        classnam1: "text-black-50 small",
      },
      {
        name: "Dark",
        percent: "#5a5c69",
        classnam: "card bg-dark text-white shadow",
        classnam1: "text-white-50 small",
      },
    ],
  },
];
export default data;
