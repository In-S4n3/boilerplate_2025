export const formatPrice = ({
  locale,
  price,
  currency,
}: {
  locale: string;
  price: number;
  currency: string;
}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
};

export const capitalize = (text: string) =>
  text
    ? text
        .trim()
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : text;
