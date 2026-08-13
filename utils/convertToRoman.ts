export function convertToRoman(num: number) {
  const romanMap = {
    m: 1000,
    cm: 900,
    d: 500,
    cd: 400,
    c: 100,
    xc: 90,
    l: 50,
    xl: 40,
    x: 10,
    ix: 9,
    v: 5,
    iv: 4,
    i: 1,
  };
  let romanStr = "";

  for (const [romanKey, value] of Object.entries(romanMap)) {
    while (num >= value) {
      num -= value;
      romanStr += romanKey;
    }
  }
  return romanStr;
}
