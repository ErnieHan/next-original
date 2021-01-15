function caratCounting(carat) {
  let value = "030";
  if (carat >= 0.3 && carat <= 0.39) {
    value = "030";
  } else if (carat >= 0.4 && carat <= 0.49) {
    value = "040";
  } else if (carat >= 0.5 && carat <= 0.59) {
    value = "050";
  } else if (carat >= 0.6 && carat <= 0.69) {
    value = "060";
  } else if (carat >= 0.7 && carat <= 0.79) {
    value = "070";
  } else if (carat >= 1 && carat <= 1.19) {
    value = "100";
  } else if (carat >= 1.5 && carat <= 1.69) {
    value = "150";
  } else if (carat >= 2 && carat <= 2.19) {
    value = "200";
  } else if (carat > 2.19) {
    value = "300";
  }
  return value;
}

export default caratCounting;
