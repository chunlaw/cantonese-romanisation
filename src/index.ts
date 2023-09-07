import _charToRoman from './charToRoman.json';
import _charToLshk from './charToLshk.json';
import _charToYale from './charToYale.json';
import _romanToChar from './romanToChar.json';
import _lshkToChar from './lshkToChar.json';
import _yaleToChar from './yaleToChar.json';

type Mapping = Record<string, string[]>

const charToRoman = _charToRoman as Mapping;
const charToLshk = _charToLshk as Mapping;
const charToYale = _charToYale as Mapping;
const romanToChar = _romanToChar as Mapping;
const lshkToChar = _lshkToChar as Mapping;
const yaleToChar = _yaleToChar as Mapping;

export const getRoman = (str: string): Array<string[]> => {
  return str.split("").map(c => (
    charToRoman[c] ?? []
  ))
}

export const getLshk = (str: string): Array<string[]> => {
  return str.split("").map(c => (
    charToLshk[c] ?? []
  ))
}

export const getYale = (str: string): Array<string[]> => {
  return str.split("").map(c => (
    charToYale[c] ?? []
  ))
}

export const pingyam = (py: string, system: "yale" | "lshk" | "roman" = "roman"): Array<string[]> => {
  return py.split(" ").map(token => {
    if ( system === "roman" ) return romanToChar[token.toLowerCase()] ?? "";
    if ( system === "lshk" ) return lshkToChar[token.toLowerCase()] ?? "";
    return yaleToChar[token.toLowerCase()] ?? "";
  })
};
