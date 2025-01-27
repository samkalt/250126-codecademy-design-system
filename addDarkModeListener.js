const CSS_VARS = {
  LIGHT: {
    "--basic-light": "#ffffff",
    "--basic-normal": "#dddddd",
    "--basic-dark": "#3b3b3b",
    "--primary-light": "#ffd8d6",
    "--primary-normal": "#ff7a73",
    "--primary-dark": "#7a3d3a",
    "--secondary-light": "#ffc49d",
    "--secondary-normal": "#bc7f57",
    "--secondary-dark": "#6e4021",
  },
  DARK: {
    "--basic-light": "#333333",
    "--basic-normal": "#555555",
    "--basic-dark": "#ffffff",
    "--primary-light": "#7a3d3a",
    "--primary-normal": "#ff7a73",
    "--primary-dark": "#ffd8d6",
    "--secondary-light": "#6e4021",
    "--secondary-normal": "#bc7f57",
    "--secondary-dark": "#ffc49d",
  },
};

const addDarkModeButtonListener = () => {
  const darkModeToggleButtonElement =
    document.querySelector("#dark-mode-toggle");

  let isDarkMode =
    getComputedStyle(document.documentElement).getPropertyValue(
      "--basic-light"
    ) === CSS_VARS.LIGHT["--basic-light"];

  darkModeToggleButtonElement.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      Object.entries(CSS_VARS.DARK).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    } else {
      Object.entries(CSS_VARS.LIGHT).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  });
};
addDarkModeButtonListener();

const addDarkModeSystemListener = () => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const updateDarkMode = (e) => {
    if (e.matches) {
      Object.entries(CSS_VARS.DARK).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    } else {
      Object.entries(CSS_VARS.LIGHT).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  };

  darkModeMediaQuery.addEventListener("change", updateDarkMode);
  updateDarkMode(darkModeMediaQuery);
};

addDarkModeSystemListener();
