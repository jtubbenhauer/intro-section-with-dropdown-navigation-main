const openMenuHandler = () => {
  const menu = document.getElementById("mobile-menu");
  const shadow = document.getElementById("shadow");
  shadow.style.opacity = 0.8;
  shadow.style.visibility = "visible";
  menu.style.visibility = "visible";
  menu.style.opacity = 1;
};

const closeMenuHandler = () => {
  const menu = document.getElementById("mobile-menu");
  const shadow = document.getElementById("shadow");
  menu.style.visibility = "hidden";
  menu.style.opacity = 0;
  shadow.style.visibility = "hidden";
  shadow.style.opacity = 0;
};

const handleDropdown = (id) => {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
};
