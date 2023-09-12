Cantonese Romanisation
=========

It is a python version for the npm package [cantonese-romanisation](https://www.npmjs.com/package/cantonese-romanisation).

Cantonese romanization based on [Hong Kong Government Romanisation](https://zh.wikipedia.org/zh-hk/%E9%A6%99%E6%B8%AF%E6%94%BF%E5%BA%9C%E7%B2%B5%E8%AA%9E%E6%8B%BC%E9%9F%B3), which is widely adapted for assigning of names to HKID, streets and places. 

The pacakage also provides features of  [pinyin](https://zh.wikipedia.org/zh-tw/%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3) supporting the standards of [LSHK](https://lshk.org/) and [Yale](https://zh.wikipedia.org/wiki/%E8%80%B6%E9%AD%AF%E6%8B%BC%E9%9F%B3#%E7%B2%A4%E8%AF%AD%E8%80%B6%E9%B2%81%E6%8B%BC%E9%9F%B3).

Demo is available [here](https://cantonese-romanisation.chunlaw.io/).

## Install
```
pip install cantonese-romanisation
```

## Usage

__getRoman__
```python
from cantoroman import Cantonese

cantonese = Cantonese()
print( cantonese.getRoman("梁國雄") )
"""
[['leung'], ['gwok', 'kwok'], ['hung']]
"""

print( cantonese.getLshk("梁國雄") )
"""
[['loeng4'], ['gwok3'], ['hung4']]
[['leung4'], ['gwok3'], ['hung4']]
"""

print( cantonese.getYale("梁國雄") )
"""
[['loeng4'], ['gwok3'], ['hung4']]
[['leung4'], ['gwok3'], ['hung4']]
"""

print( cantonese.pingyam("leung kwok hung", 'roman') )
"""
[['俍', '倞', '啢', '啢', '喨', '悢', '惊', '椋', '湸', '綡', '緉', '緉', '蜋', '裲', '踉', '踉', '輬', '駺', '魎', '両', '亮', '倆', '兩', '梁', '樑', '涼', '粱', '糧', '良', '諒', '輛', '量', '娘'], ['嘓', '囗', '墎', '壙', '夼', '崞', '彉', '彉', '彏', '慖', '懭', '桄', '槨', '漍', '爌', '玃', '矌', '矍', '穬', '簂', '籗', '絖', '纊', '聝', '膕', '貜', '躩', '躩', '钁', '霩', '霩', '鞹', '馘', '廓', '國', '幗', '蟈', '郭', '擴', '漷'], ['仜', '倥', '倥', '倥', '哅', '嗊', '妅', '忷', '恟', '悾', '愩', '洚', '涳', '渱', '澒', '灴', '焢', '玒', '硿', '箜', '篊', '羾', '舼', '芎', '蕻', '蕻', '谼', '谾', '闀', '霟', '鞚', '魟', '齁', '烘', '兇', '凶', '匈', '哄', '孔', '崆', '恐', '控', '汞', '洪', '洶', '熊', '空', '紅', '胸', '葒', '虹', '訌', '雄', '鬨', '鴻', '黌', '吽']]
"""

print( cantonese.pingyam("loeng4 gwok3 hung4", 'lshk') )
"""
[['俍', '椋', '綡', '蜋', '踉', '輬', '駺', '梁', '樑', '涼', '粱', '糧', '良', '諒', '量', '莨'], ['嘓', '囗', '墎', '崞', '彉', '彏', '慖', '槨', '漍', '玃', '矍', '簂', '聝', '膕', '貜', '躩', '钁', '霩', '馘', '攫', '摑', '廓', '國', '幗', '蟈', '郭', '擴', '漷'], ['仜', '妅', '洚', '渱', '玒', '篊', '羾', '舼', '蕻', '谼', '霟', '魟', '烘', '洪', '熊', '紅', '葒', '虹', '訌', '雄', '鴻', '黌']]
"""

print( cantonese.pingyam("leung4 gwok3 hung4", 'yale') )
"""
[['俍', '椋', '綡', '蜋', '踉', '輬', '駺', '梁', '樑', '涼', '粱', '糧', '良', '諒', '量', '莨'], ['嘓', '囗', '墎', '崞', '彉', '彏', '慖', '槨', '漍', '玃', '矍', '簂', '聝', '膕', '貜', '躩', '钁', '霩', '馘', '攫', '摑', '廓', '國', '幗', '蟈', '郭', '擴', '漷'], ['仜', '妅', '洚', '渱', '玒', '篊', '羾', '舼', '蕻', '谼', '霟', '魟', '烘', '洪', '熊', '紅', '葒', '虹', '訌', '雄', '鴻', '黌']]
"""
```

## Dictionary

If you would like to update the dictionary, you may checkout the [dictionary](https://github.com/chunlaw/cantonese-romanisation/blob/main/dictionary/source.tsv).

## Contribute
Project owner [chunlaw](https://github.com/chunlaw) is the initiator of the whole project. Everyone is welcome to contribute.

## License

MIT license