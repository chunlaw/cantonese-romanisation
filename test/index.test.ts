import { 
  getRoman,
  getLshk,
  getYale,
  pingyam
} from '../src/index'

test('expected roman returned', () => {
  expect(getRoman("梁國雄")).toStrictEqual([["leung"], ["gwok", "kwok"], ['hung']])
})

test('expected lshk returned', () => {
  expect(getLshk("吳靄儀")).toStrictEqual([["ng4"], ["oi2", "ngoi2"], ["ji4"]])
})

test('expected yale returned', () => {
  expect(getYale("黎智英")).toStrictEqual([["lai4"], ["ji3"], ["ying1"]])
})

test('expected char returned from roman', () => {
  expect(pingyam("Ho Kwai Lam")).toStrictEqual([["勂","匼","厂","呺","哠","哿","婐","岢","嶱","悎","昦","暠","淏","渮","滈","澔","牁","牁","皜","砢","秏","籇","舸","菏","薃","藃","蚝","蚵","譹","鄗","鈳","錒","閜","魺","鰝","可","嗥","嚎","壕","好","昊","毫","浩","濠","灝","犒","皓","皞","耗","蒿","號","蠔","豪","鎬","顥","何","呵","坷","河","苛","荷","訶","賀"],["劌","匱","夔","奊","媿","媿","嶡","戣","撌","昋","暌","暩","楑","楑","樻","湀","溎","犪","瓗","痵","瞶","硊","纗","聧","蕢","蠵","觿","赽","躨","鄈","酅","鐀","鑴","闠","隗","頄","頯","騤","騩","騩","驨","鯚","鱖","圭","季","悸","桂","櫃","歸","瑰","癸","皈","硅","簣","貴","跪","軌","閨","餽","饋","鬼","鮭","龜","愧","揆","携","攜","珪","畦","盔","睽","窺","葵","虧","規","逵","馗"],["咶","嚂","嚂","壈","壏","惏","惏","懍","杬","杬","檁","浨","灆","灠","灠","爁","爦","痳","碄","礛","箖","糮","糮","菡","菻","豏","轞","轞","醂","顲","舐","婪","嵐","攬","檻","欖","濫","籃","纜","艦","藍","襤","覽","林","淋","琳","臨","霖","冧","凜","廩","諗"]])
})

test('expected char returned from lshk', () => {
  expect(pingyam("can4 zi3 cyun4", "lshk")).toStrictEqual([["樄","蔯","螴","塵","陳"],["伿","倳","兕","剚","寘","忮","懥","懫","洷","滍","潪","疐","礩","胔","胾","覟","觶","贄","跮","鋕","駤","騺","鷙","恣","遲","質","志","摯","智","痣","知","緻","置","至","致","誌","躓","輊","漬","識"],["圌","壿","姾","巑","拵","攢","暷","椯","椽","欑","歂","灥","縓","菆","蟤","袸","謜","跧","遄","鐉","佺","全","存","恮","泉","牷","瑔","痊","筌","絟","荃","詮","輇","醛","銓","駩","蹲","傳","拴"]])
})

test('expected char returned from yale', () => {
  expect(pingyam("leung4 gai3 ping4", "yale")).toStrictEqual([["俍","椋","綡","蜋","踉","輬","駺","梁","樑","涼","粱","糧","良","諒","量","莨"],["瀱","猘","瘈","瞉","筀","紒","罽","蘮","蘻","薊","髻","繼","計","炔"],["呯","帡","枰","洴","玶","竮","缾","苹","荓","蓱","蛢","軿","郱","鉼","秤","蘋","平","駢","坪","屏","抨","瓶","砰","萍","評"]])
})