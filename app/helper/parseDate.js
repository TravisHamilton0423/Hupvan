export const parseDate = (planDate) => {
  const nowDate = new Date(planDate);
  const year = nowDate.getFullYear();
  let month = nowDate.getMonth();
  const date = nowDate.getDate();
  if (date <= 3 && new Date(year, month, 1).getDay() >= 4) {
    month--;
  } else
  if (date >= 28 && new Date(year, month + 1, 0).getDay() <= 2) {
    month++;
  }
  return new Date(year, month, 15);
};

