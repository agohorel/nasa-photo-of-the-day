export const dateToday = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // january = 0!
  let dd = date.getDate();

  // format single digit days/months correctly
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  return `${yyyy}-${mm}-${dd}`;
};
