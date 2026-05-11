// =============================================
//  設定: Gemini APIキーをここに入力してください
//  Google Cloud Console で HTTP リファラー制限を
//  かけることでキーの不正利用を防げます
// =============================================
const GEMINI_API_KEY = 'AIzaSyAhqfU5Sw2EFKURNW4lAyLxLd7xF5AGGcA';

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
const CACHE_KEY = 'koyomi_kigo_cache';

// =============================================
//  二十四節気データ
// =============================================
const SEKKI_DATA = [
  { id:  1, name: '小寒',   reading: 'しょうかん', month:  1, day:  6, season: 'winter', description: '寒さが本格的になる頃。「寒の入り」とも呼ばれ、大寒へ向かう寒中の始まり。凍てつく空気の中でも、光にはどこかきりりとした清々しさがある。' },
  { id:  2, name: '大寒',   reading: 'だいかん',   month:  1, day: 20, season: 'winter', description: '一年で最も寒さが厳しい時期。空気が澄み切り、冬の景色が最も美しく際立つ。この頃に仕込んだ味噌や醤油は最良のものができるとされ、寒仕込みの季節でもある。' },
  { id:  3, name: '立春',   reading: 'りっしゅん', month:  2, day:  4, season: 'spring', description: '暦の上で春が始まる日。まだ寒さは残るが、光の角度が変わり、どこか春の予感が漂い始める。節分の翌日にあたり、この日から春の暦が動き出す。' },
  { id:  4, name: '雨水',   reading: 'うすい',     month:  2, day: 19, season: 'spring', description: '雪が雨に変わり、大地が潤い始める頃。積もった雪や氷が溶け出し、草木が芽吹く準備を整えていく。農耕の始まりを告げる節気とされてきた。' },
  { id:  5, name: '啓蟄',   reading: 'けいちつ',   month:  3, day:  6, season: 'spring', description: '大地が温まり、冬ごもりしていた虫たちが目覚めて地上に出てくる頃。土の中から命が動き出す、生命力あふれる季節の幕開け。' },
  { id:  6, name: '春分',   reading: 'しゅんぶん', month:  3, day: 21, season: 'spring', description: '昼と夜の長さが等しくなる日。春彼岸の中日で、先祖を敬い感謝する。この日を境に昼が長くなり、春の陽光が日増しに力を増していく。' },
  { id:  7, name: '清明',   reading: 'せいめい',   month:  4, day:  5, season: 'spring', description: '「清浄明潔」を略した言葉で、すべてのものが清らかで生き生きとする頃。桜が散り、若葉が萌え出て、野山が淡い緑に染まっていく。' },
  { id:  8, name: '穀雨',   reading: 'こくう',     month:  4, day: 20, season: 'spring', description: '穀物を育む春雨が降る頃。田畑を潤す恵みの雨が大地に降り注ぎ、種まきや田植えの準備が本格的に始まる農の季節。' },
  { id:  9, name: '立夏',   reading: 'りっか',     month:  5, day:  6, season: 'summer', description: '暦の上で夏が始まる日。若葉が風にそよぎ、空気に夏の気配が混じり始める。山々は鮮やかな緑に覆われ、生命のエネルギーが満ちあふれる。' },
  { id: 10, name: '小満',   reading: 'しょうまん', month:  5, day: 21, season: 'summer', description: '草木が育ち、天地に生命が満ちてくる頃。麦などの穀物が穂をつけ始め、万物が少しずつ満ちていく、充実した季節。' },
  { id: 11, name: '芒種',   reading: 'ぼうしゅ',   month:  6, day:  6, season: 'summer', description: '稲や麦など芒（のぎ）を持つ穀物の種をまく頃。田植えが各地で始まり、水を張った田んぼが空を映す美しい光景が広がる。梅雨の季節でもある。' },
  { id: 12, name: '夏至',   reading: 'げし',       month:  6, day: 21, season: 'summer', description: '一年で最も昼が長い日。日差しは最も強く、夏の盛りへと向かう転換点。この日を過ぎると少しずつ夜が長くなっていく。' },
  { id: 13, name: '小暑',   reading: 'しょうしょ', month:  7, day:  7, season: 'summer', description: '梅雨が明け、本格的な暑さが始まる頃。蓮の花が咲き、ひまわりが空に向かって咲き誇る。七夕の節句もこの頃で、夏の行事が賑わいを見せる。' },
  { id: 14, name: '大暑',   reading: 'たいしょ',   month:  7, day: 23, season: 'summer', description: '一年で最も暑い時期。蒸し暑さが最高潮に達し、夏の強烈な生命力が溢れる。夕立や入道雲、夕涼みなど、夏の情景が凝縮された頃。' },
  { id: 15, name: '立秋',   reading: 'りっしゅう', month:  8, day:  7, season: 'autumn', description: '暦の上で秋が始まる日。まだ暑さは続くが、朝夕にはかすかな涼風が感じられ始める。この日以降の暑さは「残暑」と呼ばれる。' },
  { id: 16, name: '処暑',   reading: 'しょしょ',   month:  8, day: 23, season: 'autumn', description: '暑さが収まり始める頃。朝晩の空気に秋の気配が漂い、夜には虫の声が聞こえ始める。空の色も少しずつ秋色へと変わっていく。' },
  { id: 17, name: '白露',   reading: 'はくろ',     month:  9, day:  8, season: 'autumn', description: '草の葉に白い露が宿るようになる頃。朝の光の中で輝く露は秋の訪れを告げる。空は高く澄み渡り、秋の深まりを感じさせる。' },
  { id: 18, name: '秋分',   reading: 'しゅうぶん', month:  9, day: 23, season: 'autumn', description: '昼と夜の長さが再び等しくなる日。秋彼岸の中日で、先祖を敬い感謝する。この日を境に夜が長くなり、秋が深まっていく。' },
  { id: 19, name: '寒露',   reading: 'かんろ',     month: 10, day:  8, season: 'autumn', description: '冷たい露が草葉に宿る頃。空気が澄み渡り、紅葉が始まる。渡り鳥が飛来し、稲刈りが行われる実りの秋の真っ只中。' },
  { id: 20, name: '霜降',   reading: 'そうこう',   month: 10, day: 23, season: 'autumn', description: '朝に霜が降り始める頃。紅葉が最も美しく色づき、山々が錦に染まる。冬の訪れを告げるかのように、朝の冷え込みが一段と厳しくなる。' },
  { id: 21, name: '立冬',   reading: 'りっとう',   month: 11, day:  7, season: 'winter', description: '暦の上で冬が始まる日。木枯らしが吹き始め、空気がきりりと冷たくなる。落ち葉が舞い、冬支度を促すような風が吹き渡る。' },
  { id: 22, name: '小雪',   reading: 'しょうせつ', month: 11, day: 22, season: 'winter', description: '山の頂に雪が積もり始める頃。まだ本格的な雪ではないが、冬の訪れを告げる淡雪がちらつく。空が低く重く垂れ込め、冬の景色が始まる。' },
  { id: 23, name: '大雪',   reading: 'たいせつ',   month: 12, day:  7, season: 'winter', description: '雪が本格的に降り積もる頃。熊が冬眠に入り、鮭が川を遡上する。銀世界の静けさの中に、冬の荘厳な美しさが宿る。' },
  { id: 24, name: '冬至',   reading: 'とうじ',     month: 12, day: 22, season: 'winter', description: '一年で最も夜が長い日。ゆず湯に入り、かぼちゃを食べる風習がある。冬の底にあって、ここからまた少しずつ日が長くなっていく転換点。' },
];

// =============================================
//  七十二候データ
// =============================================
const KIKO_DATA = [
  // 冬至（年をまたぐ候）
  { id: 72, sekkiId: 24, name: '雪下出麦', reading: 'ゆきわたりてむぎいずる', month: 1, day: 1,  description: '雪に覆われた大地の下で、麦が密かに芽吹く頃。厳しい冬の中に潜む春への確かな予感。見えないところで命が育まれている。' },
  // 小寒
  { id:  1, sekkiId:  1, name: '芹乃栄',   reading: 'せりすなわちさかう',       month: 1, day: 6,  description: '水辺に芹が青々と茂る頃。春の七草のひとつ、芹が冬の寒さの中でも力強く育つ。清らかな水辺に緑が広がる生命力を感じる。' },
  { id:  2, sekkiId:  1, name: '水泉動',   reading: 'しみずあたたかをふくむ',   month: 1, day: 11, description: '地中で凍っていた泉が動き始める頃。地の底からゆっくりと温もりが戻り、春へ向かう命の動きが始まる。' },
  { id:  3, sekkiId:  1, name: '雉始雊',   reading: 'きじはじめてなく',         month: 1, day: 16, description: '雉が鳴き始める頃。雄の雉が縄張りを主張して鳴く声が野山に響き、春の気配を呼び込むような声が聞こえる。' },
  // 大寒
  { id:  4, sekkiId:  2, name: '款冬華',   reading: 'ふきのはなさく',           month: 1, day: 20, description: '蕗の薹が咲く頃。雪の下からも力強く顔を出す蕗の薹は、春の到来を告げる最初の使者。ほろ苦い香りに春の予感が宿る。' },
  { id:  5, sekkiId:  2, name: '水沢腹堅', reading: 'さわみずこおりつめる',     month: 1, day: 25, description: '沢の水が厚く凍り詰める頃。一年で最も厳しい寒さが続く中、氷が最も厚く張り詰める。冬の極みに宿る静謐な美しさ。' },
  { id:  6, sekkiId:  2, name: '鶏始乳',   reading: 'にわとりはじめてとやにつく', month: 1, day: 30, description: '鶏が卵を産み始める頃。厳寒の中にも春の気配を感じ取り、鶏が産卵を始める。命の循環が静かに動き出す。' },
  // 立春
  { id:  7, sekkiId:  3, name: '東風解凍', reading: 'はるかぜこおりをとく',     month: 2, day: 4,  description: '東から吹く春風が氷を溶かし始める頃。冬の間凍っていた大地や川の氷が、春の風のぬくもりに少しずつ解けていく。' },
  { id:  8, sekkiId:  3, name: '黄鶯睍睆', reading: 'うぐいすなく',             month: 2, day: 9,  description: '鶯が山里で鳴き始める頃。「ホーホケキョ」という澄んだ声が山間に響き、春の訪れを告げる。春の象徴ともいえる美しい鳴き声。' },
  { id:  9, sekkiId:  3, name: '魚上氷',   reading: 'うおこおりをいずる',       month: 2, day: 14, description: '割れた氷の間から魚が飛び出す頃。春の温かさで川や湖の氷が割れ、その隙間から魚が躍り出る生き生きとした光景。' },
  // 雨水
  { id: 10, sekkiId:  4, name: '土脉潤起', reading: 'つちのしょううるおいおこる', month: 2, day: 19, description: '雨が大地を潤し始める頃。冬の乾いた土が春の雨に潤い、草木が芽吹く準備を整え始める。生命の目覚めを促す雨。' },
  { id: 11, sekkiId:  4, name: '霞始靆',   reading: 'かすみはじめてたなびく',   month: 2, day: 24, description: '霞がたなびき始める頃。暖かくなった空気に水蒸気が漂い、山々がほんのり霞んで見える。春らしい柔らかな景色が広がる。' },
  { id: 12, sekkiId:  4, name: '草木萌動', reading: 'そうもくめばえいずる',     month: 3, day: 1,  description: '草木が芽吹き始める頃。大地を覆っていた枯れ草の中から、やわらかな新芽が顔を出す。春の息吹が大地を覆い始める。' },
  // 啓蟄
  { id: 13, sekkiId:  5, name: '蟄虫啓戸', reading: 'すごもりむしとをひらく',   month: 3, day: 6,  description: '冬ごもりしていた虫が穴を開けて出てくる頃。暖かくなった大地から虫たちが目覚め活動を始める。生命力みなぎる季節の始まり。' },
  { id: 14, sekkiId:  5, name: '桃始笑',   reading: 'ももはじめてさく',         month: 3, day: 11, description: '桃の花が咲き始める頃。「笑う」という言葉で花が開くことを表した美しい表現。ほんのりピンクの花が春の到来を告げる。' },
  { id: 15, sekkiId:  5, name: '菜虫化蝶', reading: 'なむしちょうとなる',       month: 3, day: 16, description: '青虫が蝶に生まれ変わる頃。冬を越した青虫が、美しい蝶となって春の野を舞う。変容と再生の季節。' },
  // 春分
  { id: 16, sekkiId:  6, name: '雀始巣',   reading: 'すずめはじめてすくう',     month: 3, day: 21, description: '雀が巣を作り始める頃。春の陽気に誘われ、雀が小枝や藁を運んで巣を作り始める。身近な場所で繰り広げられる命のいとなみ。' },
  { id: 17, sekkiId:  6, name: '桜始開',   reading: 'さくらはじめてひらく',     month: 3, day: 26, description: '桜の花が咲き始める頃。待ちわびた春の主役がいよいよ登場する。ほころんだ花びらが春風に揺れ、人々の心を浮き立たせる。' },
  { id: 18, sekkiId:  6, name: '雷乃発声', reading: 'かみなりすなわちこえをはっす', month: 3, day: 31, description: '遠くで春の雷が鳴り始める頃。春雷は土を耕し農作物の成長を促すとされた。眠っていた大地を揺り起こすような力強い音。' },
  // 清明
  { id: 19, sekkiId:  7, name: '玄鳥至',   reading: 'つばめきたる',             month: 4, day: 5,  description: '燕が南から渡ってくる頃。軒先に巣を作り人と共に暮らす燕の到来は春の喜ばしい知らせ。素早い飛翔が春の空に躍動する。' },
  { id: 20, sekkiId:  7, name: '鴻雁北',   reading: 'こうがんかえる',           month: 4, day: 10, description: '冬の間滞在していた雁が北へ帰っていく頃。V字形の編隊を組んで北を目指す雁の姿に、季節の巡りの壮大さを感じる。' },
  { id: 21, sekkiId:  7, name: '虹始見',   reading: 'にじはじめてあらわる',     month: 4, day: 15, description: '春になって初めて虹が現れる頃。春雨の後の空に輝く虹は、生命の喜びのように空を彩る。七色の橋が地上と天をつなぐ。' },
  // 穀雨
  { id: 22, sekkiId:  8, name: '葭始生',   reading: 'あしはじめてしょうず',     month: 4, day: 20, description: '水辺に葦が芽を出し始める頃。川辺や湿地に青々とした葦の芽が伸び始め、水辺の春の景色を彩る。初夏への橋渡しをする生命力。' },
  { id: 23, sekkiId:  8, name: '霜止出苗', reading: 'しもやんでなえいずる',     month: 4, day: 25, description: '霜が降らなくなり苗が育ち始める頃。田植えの準備として苗床で育てられた苗が、すくすくと成長する農の季節。' },
  { id: 24, sekkiId:  8, name: '牡丹華',   reading: 'ぼたんはなさく',           month: 4, day: 30, description: '牡丹の花が咲く頃。「百花の王」と称される牡丹が豪華に咲き誇る。気品と華やかさで春の庭を彩る季節の最後の輝き。' },
  // 立夏
  { id: 25, sekkiId:  9, name: '蛙始鳴',   reading: 'かわずはじめてなく',       month: 5, day: 6,  description: '蛙が鳴き始める頃。水田に水が張られ、蛙の声が田んぼ一面に響き渡る。日本の原風景ともいえる、初夏の夕暮れを彩る合唱。' },
  { id: 26, sekkiId:  9, name: '蚯蚓出',   reading: 'みみずいずる',             month: 5, day: 11, description: 'ミミズが地上に出てくる頃。土を耕すミミズの活動が活発になり、大地が生き生きと動き始める。見えないところで営まれる自然の恵み。' },
  { id: 27, sekkiId:  9, name: '竹笋生',   reading: 'たけのこしょうず',         month: 5, day: 16, description: '筍が生えてくる頃。竹林の地面から顔を出した筍が日ごとに伸び、あっという間に空へ向かって成長する。生命力の象徴。' },
  // 小満
  { id: 28, sekkiId: 10, name: '蚕起食桑', reading: 'かいこおきてくわをはむ',   month: 5, day: 21, description: '蚕が桑の葉を盛んに食べる頃。蚕の飼育が最も忙しい時期。大切に育てられた蚕が白い繭を作る、日本の絹文化の原点。' },
  { id: 29, sekkiId: 10, name: '紅花栄',   reading: 'べにばなさかう',           month: 5, day: 26, description: '紅花が咲き誇る頃。鮮やかな橙色の花が野に広がる。かつて染料として重宝されたその花は、初夏の陽光の下で輝く美しさ。' },
  { id: 30, sekkiId: 10, name: '麦秋至',   reading: 'むぎのときいたる',         month: 5, day: 31, description: '麦が熟する頃。黄金色に色づいた麦の穂が風に揺れる「麦秋」の景色は、初夏の日本の原風景。収穫の喜びと夏の訪れが重なる。' },
  // 芒種
  { id: 31, sekkiId: 11, name: '螳螂生',   reading: 'かまきりしょうず',         month: 6, day: 6,  description: '蟷螂の子が生まれる頃。秋に産み付けられた卵から小さなかまきりが生まれてくる。梅雨の時期に生命が芽吹く。' },
  { id: 32, sekkiId: 11, name: '腐草為蛍', reading: 'くされたるくさほたるとなる', month: 6, day: 11, description: '蛍が飛び始める頃。暗闇にほのかに光る蛍の姿は日本の夏の象徴。川辺に光の点が舞う、幻想的な初夏の夜。' },
  { id: 33, sekkiId: 11, name: '梅子黄',   reading: 'うめのみきばむ',           month: 6, day: 16, description: '梅の実が黄色く熟す頃。青々としていた梅の実が梅雨の雨に濡れながら熟していく。梅干しや梅酒の仕込み時。' },
  // 夏至
  { id: 34, sekkiId: 12, name: '乃東枯',   reading: 'なつかれくさかるる',       month: 6, day: 21, description: '夏枯草（ウツボグサ）が枯れる頃。最も日が長い日に静かに枯れるその姿に、自然の不思議な摂理を感じる。' },
  { id: 35, sekkiId: 12, name: '菖蒲華',   reading: 'あやめはなさく',           month: 6, day: 26, description: '菖蒲の花が咲く頃。紫と白の美しい花が水辺に咲き誇り、梅雨空の下でも凛とした美しさを放つ。日本の夏を象徴する花。' },
  { id: 36, sekkiId: 12, name: '半夏生',   reading: 'はんげしょうず',           month: 7, day: 1,  description: '半夏（カラスビシャク）が生える頃。田植えの終わりを告げる目安とされ、農事の節目。葉の一部が白くなる不思議な植物。' },
  // 小暑
  { id: 37, sekkiId: 13, name: '温風至',   reading: 'あつかぜいたる',           month: 7, day: 7,  description: '温かい夏の風が吹く頃。梅雨が明け、本格的な夏の到来を告げる熱い風が吹き始める。七夕の夜に天の川を渡る風でもある。' },
  { id: 38, sekkiId: 13, name: '蓮始開',   reading: 'はすはじめてひらく',       month: 7, day: 12, description: '蓮の花が咲き始める頃。泥の中から清らかな花を咲かせる蓮は清浄の象徴。夜明けの池に静かに開く美しい姿。' },
  { id: 39, sekkiId: 13, name: '鷹乃学習', reading: 'たかすなわちわざをならう', month: 7, day: 17, description: '鷹の雛が飛ぶ練習をする頃。親鷹に教わりながら飛翔の技を習う若鷹。夏の青空に大きく羽を広げる姿が凛々しい。' },
  // 大暑
  { id: 40, sekkiId: 14, name: '桐始結花', reading: 'きりはじめてはなをむすぶ', month: 7, day: 23, description: '桐が来年の花芽をつける頃。夏の盛りに、すでに翌春の準備を始める桐の先見性。季節をまたいだ生命の計画に驚かされる。' },
  { id: 41, sekkiId: 14, name: '土潤溽暑', reading: 'つちうるおうてむしあつし', month: 7, day: 28, description: '大地が湿り蒸し暑い頃。夏の最も蒸し暑い時期。湿度と熱がまとわりつくような暑さが続くが、自然はこの熱さを糧に育つ。' },
  { id: 42, sekkiId: 14, name: '大雨時行', reading: 'たいうときどきふる',       month: 8, day: 2,  description: '激しいにわか雨が降る頃。入道雲が空に湧き上がり夕立が降る。夏の雨は激しいが短く、雨上がりの空に虹が架かることも。' },
  // 立秋
  { id: 43, sekkiId: 15, name: '涼風至',   reading: 'すずかぜいたる',           month: 8, day: 7,  description: '涼しい風が吹き始める頃。まだ残暑は厳しいが、朝晩の風にかすかな涼しさが混じる。夏の終わりを知らせる秋の予感。' },
  { id: 44, sekkiId: 15, name: '寒蝉鳴',   reading: 'ひぐらしなく',             month: 8, day: 12, description: '日暮れ時に「カナカナカナ」と悲しげに鳴くひぐらしの声は、夏の終わりを告げる哀愁に満ちた音色。' },
  { id: 45, sekkiId: 15, name: '蒙霧升降', reading: 'ふかきりまとう',           month: 8, day: 17, description: '深い霧が立ちこめる頃。朝晩の気温差が大きくなり、早朝に白い霧が野山を包む。霧の中に秋の気配が静かに漂う。' },
  // 処暑
  { id: 46, sekkiId: 16, name: '綿柎開',   reading: 'わたのはなしべひらく',     month: 8, day: 23, description: '綿の実が弾けて白い綿毛が飛び出す頃。晩夏の空に舞う白い綿毛は、秋の到来を告げるやわらかな風景。' },
  { id: 47, sekkiId: 16, name: '天地始粛', reading: 'てんちはじめてさむし',     month: 8, day: 28, description: '天地が冷え始める頃。真夏の熱気が少しずつ和らぎ、空気が澄んでくる。夏の終わりに感じる静けさと寂しさが漂う。' },
  { id: 48, sekkiId: 16, name: '禾乃登',   reading: 'こくものすなわちみのる',   month: 9, day: 2,  description: '稲が実る頃。黄金色に実った稲穂が頭を垂れる美しい秋の田んぼ。一年の農の集大成、豊穣の喜びが溢れる季節。' },
  // 白露
  { id: 49, sekkiId: 17, name: '草露白',   reading: 'くさのつゆしろし',         month: 9, day: 8,  description: '草に白い露が宿る頃。朝の光の中で草葉に輝く白い露は、秋の清澄な美しさの象徴。はかなく消える露に秋の情趣が宿る。' },
  { id: 50, sekkiId: 17, name: '鶺鴒鳴',   reading: 'せきれいなく',             month: 9, day: 13, description: '鶺鴒が鳴く頃。水辺を尾を上下に振りながら歩く鶺鴒の姿が秋の景色に溶け込む。澄んだ鳴き声が秋の空気を引き締める。' },
  { id: 51, sekkiId: 17, name: '玄鳥去',   reading: 'つばめさる',               month: 9, day: 18, description: '燕が南へ旅立つ頃。春に渡ってきた燕が南国へ帰っていく。見慣れた軒先の巣が空になり、秋の寂しさをしみじみと感じる。' },
  // 秋分
  { id: 52, sekkiId: 18, name: '雷乃収声', reading: 'かみなりすなわちこえをおさむ', month: 9, day: 23, description: '雷が鳴らなくなる頃。夏の間轟いていた雷が収まり、秋の静けさが訪れる。空が高く澄み渡り、秋の景色が広がっていく。' },
  { id: 53, sekkiId: 18, name: '蟄虫坏戸', reading: 'むしかくれてとをふさぐ',   month: 9, day: 28, description: '虫が土に潜り始める頃。夏の間賑やかだった虫たちが地中に戻り始める。秋が深まるにつれ虫の声も少なくなっていく。' },
  { id: 54, sekkiId: 18, name: '水始涸',   reading: 'みずはじめてかるる',       month: 10, day: 3, description: '田んぼの水が涸れ始める頃。稲刈りを終えた田んぼから水が引き、大地が秋の静けさの中に落ち着いていく。' },
  // 寒露
  { id: 55, sekkiId: 19, name: '鴻雁来',   reading: 'こうがんきたる',           month: 10, day: 8,  description: '雁が北から渡ってくる頃。空高くV字形に編隊を組んで飛ぶ雁の姿は秋の風物詩。遠い北の国からの使者を迎える秋の空。' },
  { id: 56, sekkiId: 19, name: '菊花開',   reading: 'きくのはなひらく',         month: 10, day: 13, description: '菊の花が咲く頃。重陽の節句と結びつく菊は秋を代表する花。清楚な白や華やかな黄が秋の庭を彩る。' },
  { id: 57, sekkiId: 19, name: '蟋蟀在戸', reading: 'きりぎりすとにあり',       month: 10, day: 18, description: '寒くなってきたこおろぎが家の戸口に近づいて鳴く。秋の夜長に聞こえる虫の声が物悲しく美しい。' },
  // 霜降
  { id: 58, sekkiId: 20, name: '霜始降',   reading: 'しもはじめてふる',         month: 10, day: 23, description: '霜が初めて降りる頃。朝に草葉や地面に霜が降り、冬の訪れを告げる。白く輝く霜の中に厳かな美しさと季節の移ろいを感じる。' },
  { id: 59, sekkiId: 20, name: '霎時施',   reading: 'こさめときどきふる',       month: 10, day: 28, description: '小雨がしとしとと降る頃。秋の終わりの冷たい小雨が降り止んだりを繰り返す。晩秋の物悲しさと静けさが漂う。' },
  { id: 60, sekkiId: 20, name: '楓蔦黄',   reading: 'もみじつたきばむ',         month: 11, day: 2,  description: '紅葉や蔦が黄色く色づく頃。山々が赤や黄色に染まり、日本の秋が最も美しく輝く時期。錦を纏ったような山の姿に心を奪われる。' },
  // 立冬
  { id: 61, sekkiId: 21, name: '山茶始開', reading: 'つばきはじめてひらく',     month: 11, day: 7,  description: '山茶花が咲き始める頃。落葉した木々の中で、赤や白のさざんかが寒空に鮮やかに咲く。冬の花の先駆けとして愛でられる。' },
  { id: 62, sekkiId: 21, name: '地始凍',   reading: 'ちはじめてこおる',         month: 11, day: 12, description: '大地が凍り始める頃。朝の寒さで地面が固く凍りつくようになる。冬が本格的に訪れたことを大地が身をもって示す季節。' },
  { id: 63, sekkiId: 21, name: '金盞香',   reading: 'きんせんかさく',           month: 11, day: 17, description: '水仙の花が香りを放つ頃。「金盞」は水仙の別名。白い花びらと黄色い副花冠が清楚で、凛とした冬の香りが辺りに漂う。' },
  // 小雪
  { id: 64, sekkiId: 22, name: '虹蔵不見', reading: 'にじかくれてみえず',       month: 11, day: 22, description: '虹が見えなくなる頃。空気が乾燥し太陽の高度も低くなる冬には虹が現れにくくなる。春に初めて虹が見えるまでの静かな空。' },
  { id: 65, sekkiId: 22, name: '朔風払葉', reading: 'きたかぜこのはをはらう',   month: 11, day: 27, description: '北風が木の葉を払い落とす頃。冷たい北風が残った葉を容赦なく吹き落とし、木々が枝だけの冬姿になっていく。' },
  { id: 66, sekkiId: 22, name: '橘始黄',   reading: 'たちばなはじめてきばむ',   month: 12, day: 2,  description: '橘の実が黄色くなる頃。常緑の葉の間に黄色い実がなる橘は、冬の庭に彩りを添える。不老長寿の実として古くから愛でられてきた。' },
  // 大雪
  { id: 67, sekkiId: 23, name: '閉塞成冬', reading: 'そらさむくふゆとなる',     month: 12, day: 7,  description: '天地が閉ざされ冬になる頃。重い雲が空を覆い天地が冬に閉ざされる。静寂と寒さが支配する冬の世界が本格的に始まる。' },
  { id: 68, sekkiId: 23, name: '熊蟄穴',   reading: 'くまあなにこもる',         month: 12, day: 12, description: '熊が冬眠のために穴にこもる頃。山の主が春まで眠りにつく。山が静まり返り、冬の深い静寂が山を包む。' },
  { id: 69, sekkiId: 23, name: '鱖魚群',   reading: 'さけのうおむらがる',       month: 12, day: 17, description: '鮭が群がり川を上る頃。生まれた川に帰ってくる鮭の力強い遡上は、命の循環の壮大さを示す。冬の川に生命力が溢れる。' },
  // 冬至
  { id: 70, sekkiId: 24, name: '乃東生',   reading: 'なつかれくさしょうず',     month: 12, day: 22, description: '夏枯草が芽を出す頃。夏至に枯れた草が冬至に再び芽吹く。陰極まって陽となる冬至の日に、命が静かに動き出す。' },
  { id: 71, sekkiId: 24, name: '麋角解',   reading: 'おおしかのつのおつる',     month: 12, day: 27, description: '大鹿の角が落ちる頃。一年かけて成長した大鹿の立派な角が自然に落ちる。命の循環と再生を象徴する冬至の頃の出来事。' },
];

// =============================================
//  和暦・日本語表示
// =============================================
const JP_MONTHS = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走'];
const JP_DAYS   = ['日', '月', '火', '水', '木', '金', '土'];

function getWareki(year, month) {
  if (year > 2019 || (year === 2019 && month >= 5)) {
    const n = year - 2019 + 1;
    return `令和${n === 1 ? '元' : n}年`;
  }
  if (year > 1989 || (year === 1989 && month >= 1)) {
    const n = year - 1989 + 1;
    return `平成${n === 1 ? '元' : n}年`;
  }
  return `${year}年`;
}

function getSeason(month) {
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
}

function getTodayString(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// =============================================
//  節気・候の判定
// =============================================
function dayBefore(month, day) {
  const d = new Date(2024, month - 1, day); // 閏年を使い月末処理を安全に
  d.setDate(d.getDate() - 1);
  return { month: d.getMonth() + 1, day: d.getDate() };
}

function findCurrentWithContext(data, date) {
  const month = date.getMonth() + 1;
  const day   = date.getDate();
  const value = month * 100 + day;

  const sorted = [...data].sort((a, b) => (a.month * 100 + a.day) - (b.month * 100 + b.day));
  const n = sorted.length;

  let currentIdx = n - 1;
  for (let i = 0; i < n; i++) {
    if (sorted[i].month * 100 + sorted[i].day <= value) {
      currentIdx = i;
    }
  }

  const current = sorted[currentIdx];
  const prev    = sorted[(currentIdx - 1 + n) % n];
  const next    = sorted[(currentIdx + 1) % n];
  const endDate = dayBefore(next.month, next.day);

  return { current, prev, next, endDate };
}

// =============================================
//  Gemini API
// =============================================
async function fetchKigo(sekki, kiko) {
  const prompt = `現在の暦の情報です。

■ 二十四節気：${sekki.name}（${sekki.reading}）
${sekki.description}

■ 七十二候：${kiko.name}（${kiko.reading}）
${kiko.description}

この時期らしい俳句の季語を4〜5つ選んでください。植物・動物・天候・行事・食など、多彩な視点から選んでください。

以下のJSON形式のみで返してください（マークダウンの装飾は一切不要。JSONのみ）：
[
  {
    "word": "季語の言葉",
    "reading": "よみがな（ひらがな）",
    "description": "この季語の意味・情景・季節感を50〜100字で"
  }
]`;

  const res = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.9, maxOutputTokens: 1200 },
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`HTTP ${res.status}: ${errBody}`);
  }

  const data = await res.json();
  console.log('Gemini response:', JSON.stringify(data, null, 2));

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  if (!text) throw new Error(`レスポンスにテキストがありません: ${JSON.stringify(data)}`);

  // マークダウンのコードブロックがある場合は除去
  const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  return JSON.parse(cleaned);
}

// =============================================
//  キャッシュ管理
// =============================================
function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveCache(date, kigo) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ date, kigo }));
  } catch { /* localStorage が使えない環境では無視 */ }
}

// =============================================
//  DOM 更新
// =============================================
function renderDate(date) {
  const year  = date.getFullYear();
  const month = date.getMonth() + 1;
  const day   = date.getDate();
  const dow   = date.getDay();

  document.getElementById('date-wareki').textContent =
    `${getWareki(year, month)} ${JP_MONTHS[month - 1]}`;
  document.getElementById('date-main').textContent =
    `${year}年${month}月${day}日（${JP_DAYS[dow]}）`;
  document.getElementById('date-month-name').textContent =
    JP_MONTHS[month - 1];
}

function renderTerm(prefix, { current, prev, next, endDate }) {
  document.getElementById(`${prefix}-name`).textContent    = current.name;
  document.getElementById(`${prefix}-reading`).textContent = current.reading;
  document.getElementById(`${prefix}-desc`).textContent    = current.description;
  document.getElementById(`${prefix}-period`).textContent  =
    `${current.month}月${current.day}日 〜 ${endDate.month}月${endDate.day}日`;
  document.getElementById(`${prefix}-nav`).innerHTML =
    `<div class="nav-prev"><span class="nav-label">前</span><span class="nav-name">${prev.name}（${prev.reading}）</span></div>` +
    `<div class="nav-next"><span class="nav-label">次</span><span class="nav-name">${next.name}（${next.reading}）</span></div>`;
}

function renderKigo(kigoList, updatedDate) {
  const content = document.getElementById('kigo-content');
  const meta    = document.getElementById('kigo-updated');

  const [y, m, d] = updatedDate.split('-');
  meta.textContent = `${parseInt(m)}月${parseInt(d)}日 更新`;

  const html = kigoList.map(k => `
    <div class="kigo-item">
      <div class="kigo-word-line">
        <span class="kigo-word">${k.word}</span>
        <span class="kigo-reading">${k.reading}</span>
      </div>
      <p class="kigo-desc">${k.description}</p>
    </div>
  `).join('');

  content.innerHTML = `<div class="card-body"><div class="kigo-list">${html}</div></div>`;
}

function renderKigoError(detail = '') {
  const content = document.getElementById('kigo-content');
  const detailHtml = detail ? `<br><small style="font-size:0.7rem;opacity:0.7;">${detail}</small>` : '';
  content.innerHTML = `<div class="card-body"><p class="error-msg">季語の取得に失敗しました。<br>APIキーをご確認いただくか、しばらくしてから再度お試しください。${detailHtml}</p></div>`;
}

// =============================================
//  初期化
// =============================================
async function init() {
  const today   = new Date();
  const todayStr = getTodayString(today);
  const season  = getSeason(today.getMonth() + 1);

  // season クラスをbodyに設定
  document.body.classList.add(season);

  // 日付・節気・候を表示
  renderDate(today);
  const sekkiCtx = findCurrentWithContext(SEKKI_DATA, today);
  const kikoCtx  = findCurrentWithContext(KIKO_DATA, today);
  renderTerm('sekki', sekkiCtx);
  renderTerm('kiko', kikoCtx);

  // APIキー未設定の場合
  if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
    document.getElementById('kigo-content').innerHTML =
      `<div class="card-body"><p class="error-msg">app.js の先頭にある <code>GEMINI_API_KEY</code> を設定してください。</p></div>`;
    return;
  }

  // キャッシュ確認
  const cache = loadCache();
  if (cache && cache.date === todayStr && Array.isArray(cache.kigo)) {
    renderKigo(cache.kigo, cache.date);
    return;
  }

  // Gemini API で季語を取得
  try {
    const kigo = await fetchKigo(sekkiCtx.current, kikoCtx.current);
    saveCache(todayStr, kigo);
    renderKigo(kigo, todayStr);
  } catch (err) {
    console.error('Kigo fetch error:', err);
    renderKigoError(err.message);
  }
}

document.addEventListener('DOMContentLoaded', init);
