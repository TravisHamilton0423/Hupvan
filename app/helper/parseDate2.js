
export const parseDate2 = (planDate) => {
  const nowDate = new Date(planDate);
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth();

  return new Date(year, month, 15);
};
