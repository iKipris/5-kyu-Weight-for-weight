function orderWeight(strng) {
  return strng.split(' ').sort((a,b) => {
      var c = a.split('').reduce((a, b) => Number(a) + Number(b));
      var d = b.split('').reduce((a, b) => Number(a) + Number(b));
      return (c < d) ? -1 : (c > d) ? 1 : a.localeCompare(b);
  }).join(' ');
}
