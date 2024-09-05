export const displayPrice = (
  priceInCents: string,
  decimals: number = 2,
  symbol: string = "$",
  separator: string = "."
) => {
  const units = priceInCents.substring(0, priceInCents.length - decimals);
  const cents = priceInCents.substring(
    priceInCents.length - decimals,
    decimals
  );
  return `${symbol} ${units}${separator}${cents}`;
};
