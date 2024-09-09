export const displayPrice = (
  priceInCents: string,
  decimals: number = 2,
  symbol: string | null = null,
  separator: string = "."
) => {
  const units = priceInCents.substring(0, priceInCents.length - decimals);
  const cents = priceInCents.substring(
    priceInCents.length - decimals,
    decimals
  );
  return `${symbol ? `${symbol} ` : ""}${units}${separator}${cents}`;
};
