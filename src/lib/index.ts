export const getSuccessRate = (successes: number, attempts: number) => {
  const successRate = (successes / attempts) * 100
  return Number(successRate.toFixed(1))
};
