const age14 = new Date(new Date().setFullYear(new Date().getFullYear() - 14));
const age2 = new Date(new Date().setFullYear(new Date().getFullYear() - 2));

export const passengersAge = {
  adult: {
    min: null,
    max: age14,
  },
  child: {
    min: new Date(new Date(age14).setDate(age14.getDate() - 1)),
    max: age2,
  },
  infant: {
    min: new Date(new Date(age2).setDate(age2.getDate() - 1)),
    max: new Date(),
  },
};
