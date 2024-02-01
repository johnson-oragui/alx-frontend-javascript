export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = new Date().getFullYear();

  const budget = {
    [`income-${year}`]: income,
    [`gdp-${year}`]: gdp,
    [`capita-${year}`]: capita,
  };

  return budget;
}

if (require.main === module) {
  console.log(getBudgetForCurrentYear(2100, 5200, 1090));
}
