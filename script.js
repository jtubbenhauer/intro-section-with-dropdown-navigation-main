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
  const downArrow = document.getElementById(id + "-down");
  const upArrow = document.getElementById(id + "-up");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    downArrow.style.display = "inline-block";
    upArrow.style.display = "none";
  } else {
    dropdown.style.display = "block";
    downArrow.style.display = "none";
    upArrow.style.display = "inline-block";
  }
};
