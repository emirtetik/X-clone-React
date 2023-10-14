export const numberFormat = (value) => {
  let config = {};
  if (value > 9999) {
    config = {
      notation: "compact",
      maximumSignificantDigits: 1,
    };
  }
  return Intl.NumberFormat("tr", config).format(value);
};

// sayıları 4034 = 4 B şeklinde yuvarlar
