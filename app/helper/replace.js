export const replaceProblem = (proList, payload) => {
  let position = 0;
  const res = proList;

  res.map((problem, index) => {
    if (problem._id === payload._id) {
      position = index;
    }
  });

  res[position] = payload;
  return res;
};
