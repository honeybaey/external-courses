const customSlice = (arr, begin = 0, end = 0) => {
  if (end === 0) return arr.filter((_, i) => i >= begin);

  begin = begin < 0 ? begin + arr.length : begin;
  end = end < 0 ? end + arr.length : end;

  return arr.filter((_, i) => i >= begin && i < end);
};

module.exports = customSlice;
