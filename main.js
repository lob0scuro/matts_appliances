const openedOn = new Date("2014-09-01");
const currentDate = new Date();
const yearsOpen = currentDate.getFullYear() - openedOn.getFullYear();

const thisLong = document.getElementById("this-long");
thisLong.textContent = yearsOpen;
