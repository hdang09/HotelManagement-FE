var getDaysArray = function (s, e) {
  for (var a = [], d = new Date(s); d <= new Date(e); d.setDate(d.getDate() + 1)) {
    a.push(new Date(d));
  }
  return a;
};

export default getDaysArray;
