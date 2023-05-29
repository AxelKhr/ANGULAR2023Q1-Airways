const age14 = new Date(new Date().setFullYear(new Date().getFullYear() - 14));
const age2 = new Date(new Date().setFullYear(new Date().getFullYear() - 2));

export const passengersAge = {
  Adult: {
    min: null,
    max: age14,
  },
  Children: {
    min: new Date(new Date(age14).setDate(age14.getDate() - 1)),
    max: age2,
  },
  Infant: {
    min: new Date(new Date(age2).setDate(age2.getDate() - 1)),
    max: new Date(),
  },
};
