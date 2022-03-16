interface step {
  element: string;
  popover: {
    title: string;
    description: string;
    position: string;
  };
}

const steps: Array<step> = [
  {
    element: "#floder-icon",
    popover: {
      title: "Hamburger",
      description: "Open && Close sidebar",
      position: "bottom",
    },
  },
];

export default steps;
