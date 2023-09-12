from cantoroman import Cantonese

cantonese = Cantonese()
print(cantonese.getRoman("梁國雄"))
print(cantonese.getLshk("梁國雄"))
print(cantonese.getYale("梁國雄"))
print(cantonese.pingyam("leung kwok hung", 'roman'))
print(cantonese.pingyam("loeng4 gwok3 hung4", 'lshk'))
print(cantonese.pingyam("leung4 gwok3 hung4", 'yale'))