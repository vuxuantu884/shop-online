export const formatNumber = (value: number | string | boolean): string => {
  try {
    let format = Number(value).toLocaleString();
    return format;
  } catch (e) {
    return '';
  }
};
