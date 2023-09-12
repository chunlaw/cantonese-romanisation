import pkgutil
import json

class Cantonese:
  def __init__(self):
    self.charToRoman = json.loads(pkgutil.get_data(__name__, "data/charToRoman.json").decode().encode("utf-8"))
    self.charToLshk = json.loads(pkgutil.get_data(__name__, "data/charToLshk.json").decode().encode("utf-8"))
    self.charToYale = json.loads(pkgutil.get_data(__name__, "data/charToYale.json").decode().encode("utf-8"))
    self.romanToChar = json.loads(pkgutil.get_data(__name__, "data/romanToChar.json").decode().encode("utf-8"))
    self.lshkToChar = json.loads(pkgutil.get_data(__name__, "data/lshkToChar.json").decode().encode("utf-8"))
    self.yaleToChar = json.loads(pkgutil.get_data(__name__, "data/yaleToChar.json").decode().encode("utf-8"))
    
  def getRoman(self, str):
    return [self.charToRoman[c] if c in self.charToRoman else [] for c in [*str]]

  def getLshk(self, str):
    return [self.charToLshk[c] if c in self.charToRoman else [] for c in [*str]]

  def getYale(self, str):
    return [self.charToYale[c] if c in self.charToRoman else [] for c in [*str]]

  def pingyam(self, str, sys="roman"):
    if sys == "roman":
      return [self.romanToChar[c] if c in self.romanToChar else [] for c in str.lower().split(" ")]
    elif sys == "lshk":
      return [self.lshkToChar[c] if c in self.lshkToChar else [] for c in str.lower().split(" ")]
    elif sys == "yale":
      return [self.yaleToChar[c] if c in self.yaleToChar else [] for c in str.lower().split(" ")]
    raise ValueError("sys should be \"roman\" or \"lshk\" or \"yale\"")