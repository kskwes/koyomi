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
  { id: 72, sekkiId: 24, name: '雪下出麦', reading: 'ゆきわたりてむぎいずる', month: 1, day: 1,  description: '雪に覆われた大地の下で、麦が密かに芽吹く頃。厳しい冬の中に潜む春への確かな予感。見えないところで命が育まれている。' },
  { id:  1, sekkiId:  1, name: '芹乃栄',   reading: 'せりすなわちさかう',       month: 1, day: 6,  description: '水辺に芹が青々と茂る頃。春の七草のひとつ、芹が冬の寒さの中でも力強く育つ。清らかな水辺に緑が広がる生命力を感じる。' },
  { id:  2, sekkiId:  1, name: '水泉動',   reading: 'しみずあたたかをふくむ',   month: 1, day: 11, description: '地中で凍っていた泉が動き始める頃。地の底からゆっくりと温もりが戻り、春へ向かう命の動きが始まる。' },
  { id:  3, sekkiId:  1, name: '雉始雊',   reading: 'きじはじめてなく',         month: 1, day: 16, description: '雉が鳴き始める頃。雄の雉が縄張りを主張して鳴く声が野山に響き、春の気配を呼び込むような声が聞こえる。' },
  { id:  4, sekkiId:  2, name: '款冬華',   reading: 'ふきのはなさく',           month: 1, day: 20, description: '蕗の薹が咲く頃。雪の下からも力強く顔を出す蕗の薹は、春の到来を告げる最初の使者。ほろ苦い香りに春の予感が宿る。' },
  { id:  5, sekkiId:  2, name: '水沢腹堅', reading: 'さわみずこおりつめる',     month: 1, day: 25, description: '沢の水が厚く凍り詰める頃。一年で最も厳しい寒さが続く中、氷が最も厚く張り詰める。冬の極みに宿る静謐な美しさ。' },
  { id:  6, sekkiId:  2, name: '鶏始乳',   reading: 'にわとりはじめてとやにつく', month: 1, day: 30, description: '鶏が卵を産み始める頃。厳寒の中にも春の気配を感じ取り、鶏が産卵を始める。命の循環が静かに動き出す。' },
  { id:  7, sekkiId:  3, name: '東風解凍', reading: 'はるかぜこおりをとく',     month: 2, day: 4,  description: '東から吹く春風が氷を溶かし始める頃。冬の間凍っていた大地や川の氷が、春の風のぬくもりに少しずつ解けていく。' },
  { id:  8, sekkiId:  3, name: '黄鶯睍睆', reading: 'うぐいすなく',             month: 2, day: 9,  description: '鶯が山里で鳴き始める頃。「ホーホケキョ」という澄んだ声が山間に響き、春の訪れを告げる。春の象徴ともいえる美しい鳴き声。' },
  { id:  9, sekkiId:  3, name: '魚上氷',   reading: 'うおこおりをいずる',       month: 2, day: 14, description: '割れた氷の間から魚が飛び出す頃。春の温かさで川や湖の氷が割れ、その隙間から魚が躍り出る生き生きとした光景。' },
  { id: 10, sekkiId:  4, name: '土脉潤起', reading: 'つちのしょううるおいおこる', month: 2, day: 19, description: '雨が大地を潤し始める頃。冬の乾いた土が春の雨に潤い、草木が芽吹く準備を整え始める。生命の目覚めを促す雨。' },
  { id: 11, sekkiId:  4, name: '霞始靆',   reading: 'かすみはじめてたなびく',   month: 2, day: 24, description: '霞がたなびき始める頃。暖かくなった空気に水蒸気が漂い、山々がほんのり霞んで見える。春らしい柔らかな景色が広がる。' },
  { id: 12, sekkiId:  4, name: '草木萌動', reading: 'そうもくめばえいずる',     month: 3, day: 1,  description: '草木が芽吹き始める頃。大地を覆っていた枯れ草の中から、やわらかな新芽が顔を出す。春の息吹が大地を覆い始める。' },
  { id: 13, sekkiId:  5, name: '蟄虫啓戸', reading: 'すごもりむしとをひらく',   month: 3, day: 6,  description: '冬ごもりしていた虫が穴を開けて出てくる頃。暖かくなった大地から虫たちが目覚め活動を始める。生命力みなぎる季節の始まり。' },
  { id: 14, sekkiId:  5, name: '桃始笑',   reading: 'ももはじめてさく',         month: 3, day: 11, description: '桃の花が咲き始める頃。「笑う」という言葉で花が開くことを表した美しい表現。ほんのりピンクの花が春の到来を告げる。' },
  { id: 15, sekkiId:  5, name: '菜虫化蝶', reading: 'なむしちょうとなる',       month: 3, day: 16, description: '青虫が蝶に生まれ変わる頃。冬を越した青虫が、美しい蝶となって春の野を舞う。変容と再生の季節。' },
  { id: 16, sekkiId:  6, name: '雀始巣',   reading: 'すずめはじめてすくう',     month: 3, day: 21, description: '雀が巣を作り始める頃。春の陽気に誘われ、雀が小枝や藁を運んで巣を作り始める。身近な場所で繰り広げられる命のいとなみ。' },
  { id: 17, sekkiId:  6, name: '桜始開',   reading: 'さくらはじめてひらく',     month: 3, day: 26, description: '桜の花が咲き始める頃。待ちわびた春の主役がいよいよ登場する。ほころんだ花びらが春風に揺れ、人々の心を浮き立たせる。' },
  { id: 18, sekkiId:  6, name: '雷乃発声', reading: 'かみなりすなわちこえをはっす', month: 3, day: 31, description: '遠くで春の雷が鳴り始める頃。春雷は土を耕し農作物の成長を促すとされた。眠っていた大地を揺り起こすような力強い音。' },
  { id: 19, sekkiId:  7, name: '玄鳥至',   reading: 'つばめきたる',             month: 4, day: 5,  description: '燕が南から渡ってくる頃。軒先に巣を作り人と共に暮らす燕の到来は春の喜ばしい知らせ。素早い飛翔が春の空に躍動する。' },
  { id: 20, sekkiId:  7, name: '鴻雁北',   reading: 'こうがんかえる',           month: 4, day: 10, description: '冬の間滞在していた雁が北へ帰っていく頃。V字形の編隊を組んで北を目指す雁の姿に、季節の巡りの壮大さを感じる。' },
  { id: 21, sekkiId:  7, name: '虹始見',   reading: 'にじはじめてあらわる',     month: 4, day: 15, description: '春になって初めて虹が現れる頃。春雨の後の空に輝く虹は、生命の喜びのように空を彩る。七色の橋が地上と天をつなぐ。' },
  { id: 22, sekkiId:  8, name: '葭始生',   reading: 'あしはじめてしょうず',     month: 4, day: 20, description: '水辺に葦が芽を出し始める頃。川辺や湿地に青々とした葦の芽が伸び始め、水辺の春の景色を彩る。初夏への橋渡しをする生命力。' },
  { id: 23, sekkiId:  8, name: '霜止出苗', reading: 'しもやんでなえいずる',     month: 4, day: 25, description: '霜が降らなくなり苗が育ち始める頃。田植えの準備として苗床で育てられた苗が、すくすくと成長する農の季節。' },
  { id: 24, sekkiId:  8, name: '牡丹華',   reading: 'ぼたんはなさく',           month: 4, day: 30, description: '牡丹の花が咲く頃。「百花の王」と称される牡丹が豪華に咲き誇る。気品と華やかさで春の庭を彩る季節の最後の輝き。' },
  { id: 25, sekkiId:  9, name: '蛙始鳴',   reading: 'かわずはじめてなく',       month: 5, day: 6,  description: '蛙が鳴き始める頃。水田に水が張られ、蛙の声が田んぼ一面に響き渡る。日本の原風景ともいえる、初夏の夕暮れを彩る合唱。' },
  { id: 26, sekkiId:  9, name: '蚯蚓出',   reading: 'みみずいずる',             month: 5, day: 11, description: 'ミミズが地上に出てくる頃。土を耕すミミズの活動が活発になり、大地が生き生きと動き始める。見えないところで営まれる自然の恵み。' },
  { id: 27, sekkiId:  9, name: '竹笋生',   reading: 'たけのこしょうず',         month: 5, day: 16, description: '筍が生えてくる頃。竹林の地面から顔を出した筍が日ごとに伸び、あっという間に空へ向かって成長する。生命力の象徴。' },
  { id: 28, sekkiId: 10, name: '蚕起食桑', reading: 'かいこおきてくわをはむ',   month: 5, day: 21, description: '蚕が桑の葉を盛んに食べる頃。蚕の飼育が最も忙しい時期。大切に育てられた蚕が白い繭を作る、日本の絹文化の原点。' },
  { id: 29, sekkiId: 10, name: '紅花栄',   reading: 'べにばなさかう',           month: 5, day: 26, description: '紅花が咲き誇る頃。鮮やかな橙色の花が野に広がる。かつて染料として重宝されたその花は、初夏の陽光の下で輝く美しさ。' },
  { id: 30, sekkiId: 10, name: '麦秋至',   reading: 'むぎのときいたる',         month: 5, day: 31, description: '麦が熟する頃。黄金色に色づいた麦の穂が風に揺れる「麦秋」の景色は、初夏の日本の原風景。収穫の喜びと夏の訪れが重なる。' },
  { id: 31, sekkiId: 11, name: '螳螂生',   reading: 'かまきりしょうず',         month: 6, day: 6,  description: '蟷螂の子が生まれる頃。秋に産み付けられた卵から小さなかまきりが生まれてくる。梅雨の時期に生命が芽吹く。' },
  { id: 32, sekkiId: 11, name: '腐草為蛍', reading: 'くされたるくさほたるとなる', month: 6, day: 11, description: '蛍が飛び始める頃。暗闇にほのかに光る蛍の姿は日本の夏の象徴。川辺に光の点が舞う、幻想的な初夏の夜。' },
  { id: 33, sekkiId: 11, name: '梅子黄',   reading: 'うめのみきばむ',           month: 6, day: 16, description: '梅の実が黄色く熟す頃。青々としていた梅の実が梅雨の雨に濡れながら熟していく。梅干しや梅酒の仕込み時。' },
  { id: 34, sekkiId: 12, name: '乃東枯',   reading: 'なつかれくさかるる',       month: 6, day: 21, description: '夏枯草（ウツボグサ）が枯れる頃。最も日が長い日に静かに枯れるその姿に、自然の不思議な摂理を感じる。' },
  { id: 35, sekkiId: 12, name: '菖蒲華',   reading: 'あやめはなさく',           month: 6, day: 26, description: '菖蒲の花が咲く頃。紫と白の美しい花が水辺に咲き誇り、梅雨空の下でも凛とした美しさを放つ。日本の夏を象徴する花。' },
  { id: 36, sekkiId: 12, name: '半夏生',   reading: 'はんげしょうず',           month: 7, day: 1,  description: '半夏（カラスビシャク）が生える頃。田植えの終わりを告げる目安とされ、農事の節目。葉の一部が白くなる不思議な植物。' },
  { id: 37, sekkiId: 13, name: '温風至',   reading: 'あつかぜいたる',           month: 7, day: 7,  description: '温かい夏の風が吹く頃。梅雨が明け、本格的な夏の到来を告げる熱い風が吹き始める。七夕の夜に天の川を渡る風でもある。' },
  { id: 38, sekkiId: 13, name: '蓮始開',   reading: 'はすはじめてひらく',       month: 7, day: 12, description: '蓮の花が咲き始める頃。泥の中から清らかな花を咲かせる蓮は清浄の象徴。夜明けの池に静かに開く美しい姿。' },
  { id: 39, sekkiId: 13, name: '鷹乃学習', reading: 'たかすなわちわざをならう', month: 7, day: 17, description: '鷹の雛が飛ぶ練習をする頃。親鷹に教わりながら飛翔の技を習う若鷹。夏の青空に大きく羽を広げる姿が凛々しい。' },
  { id: 40, sekkiId: 14, name: '桐始結花', reading: 'きりはじめてはなをむすぶ', month: 7, day: 23, description: '桐が来年の花芽をつける頃。夏の盛りに、すでに翌春の準備を始める桐の先見性。季節をまたいだ生命の計画に驚かされる。' },
  { id: 41, sekkiId: 14, name: '土潤溽暑', reading: 'つちうるおうてむしあつし', month: 7, day: 28, description: '大地が湿り蒸し暑い頃。夏の最も蒸し暑い時期。湿度と熱がまとわりつくような暑さが続くが、自然はこの熱さを糧に育つ。' },
  { id: 42, sekkiId: 14, name: '大雨時行', reading: 'たいうときどきふる',       month: 8, day: 2,  description: '激しいにわか雨が降る頃。入道雲が空に湧き上がり夕立が降る。夏の雨は激しいが短く、雨上がりの空に虹が架かることも。' },
  { id: 43, sekkiId: 15, name: '涼風至',   reading: 'すずかぜいたる',           month: 8, day: 7,  description: '涼しい風が吹き始める頃。まだ残暑は厳しいが、朝晩の風にかすかな涼しさが混じる。夏の終わりを知らせる秋の予感。' },
  { id: 44, sekkiId: 15, name: '寒蝉鳴',   reading: 'ひぐらしなく',             month: 8, day: 12, description: '日暮れ時に「カナカナカナ」と悲しげに鳴くひぐらしの声は、夏の終わりを告げる哀愁に満ちた音色。' },
  { id: 45, sekkiId: 15, name: '蒙霧升降', reading: 'ふかきりまとう',           month: 8, day: 17, description: '深い霧が立ちこめる頃。朝晩の気温差が大きくなり、早朝に白い霧が野山を包む。霧の中に秋の気配が静かに漂う。' },
  { id: 46, sekkiId: 16, name: '綿柎開',   reading: 'わたのはなしべひらく',     month: 8, day: 23, description: '綿の実が弾けて白い綿毛が飛び出す頃。晩夏の空に舞う白い綿毛は、秋の到来を告げるやわらかな風景。' },
  { id: 47, sekkiId: 16, name: '天地始粛', reading: 'てんちはじめてさむし',     month: 8, day: 28, description: '天地が冷え始める頃。真夏の熱気が少しずつ和らぎ、空気が澄んでくる。夏の終わりに感じる静けさと寂しさが漂う。' },
  { id: 48, sekkiId: 16, name: '禾乃登',   reading: 'こくものすなわちみのる',   month: 9, day: 2,  description: '稲が実る頃。黄金色に実った稲穂が頭を垂れる美しい秋の田んぼ。一年の農の集大成、豊穣の喜びが溢れる季節。' },
  { id: 49, sekkiId: 17, name: '草露白',   reading: 'くさのつゆしろし',         month: 9, day: 8,  description: '草に白い露が宿る頃。朝の光の中で草葉に輝く白い露は、秋の清澄な美しさの象徴。はかなく消える露に秋の情趣が宿る。' },
  { id: 50, sekkiId: 17, name: '鶺鴒鳴',   reading: 'せきれいなく',             month: 9, day: 13, description: '鶺鴒が鳴く頃。水辺を尾を上下に振りながら歩く鶺鴒の姿が秋の景色に溶け込む。澄んだ鳴き声が秋の空気を引き締める。' },
  { id: 51, sekkiId: 17, name: '玄鳥去',   reading: 'つばめさる',               month: 9, day: 18, description: '燕が南へ旅立つ頃。春に渡ってきた燕が南国へ帰っていく。見慣れた軒先の巣が空になり、秋の寂しさをしみじみと感じる。' },
  { id: 52, sekkiId: 18, name: '雷乃収声', reading: 'かみなりすなわちこえをおさむ', month: 9, day: 23, description: '雷が鳴らなくなる頃。夏の間轟いていた雷が収まり、秋の静けさが訪れる。空が高く澄み渡り、秋の景色が広がっていく。' },
  { id: 53, sekkiId: 18, name: '蟄虫坏戸', reading: 'むしかくれてとをふさぐ',   month: 9, day: 28, description: '虫が土に潜り始める頃。夏の間賑やかだった虫たちが地中に戻り始める。秋が深まるにつれ虫の声も少なくなっていく。' },
  { id: 54, sekkiId: 18, name: '水始涸',   reading: 'みずはじめてかるる',       month: 10, day: 3, description: '田んぼの水が涸れ始める頃。稲刈りを終えた田んぼから水が引き、大地が秋の静けさの中に落ち着いていく。' },
  { id: 55, sekkiId: 19, name: '鴻雁来',   reading: 'こうがんきたる',           month: 10, day: 8,  description: '雁が北から渡ってくる頃。空高くV字形に編隊を組んで飛ぶ雁の姿は秋の風物詩。遠い北の国からの使者を迎える秋の空。' },
  { id: 56, sekkiId: 19, name: '菊花開',   reading: 'きくのはなひらく',         month: 10, day: 13, description: '菊の花が咲く頃。重陽の節句と結びつく菊は秋を代表する花。清楚な白や華やかな黄が秋の庭を彩る。' },
  { id: 57, sekkiId: 19, name: '蟋蟀在戸', reading: 'きりぎりすとにあり',       month: 10, day: 18, description: '寒くなってきたこおろぎが家の戸口に近づいて鳴く。秋の夜長に聞こえる虫の声が物悲しく美しい。' },
  { id: 58, sekkiId: 20, name: '霜始降',   reading: 'しもはじめてふる',         month: 10, day: 23, description: '霜が初めて降りる頃。朝に草葉や地面に霜が降り、冬の訪れを告げる。白く輝く霜の中に厳かな美しさと季節の移ろいを感じる。' },
  { id: 59, sekkiId: 20, name: '霎時施',   reading: 'こさめときどきふる',       month: 10, day: 28, description: '小雨がしとしとと降る頃。秋の終わりの冷たい小雨が降り止んだりを繰り返す。晩秋の物悲しさと静けさが漂う。' },
  { id: 60, sekkiId: 20, name: '楓蔦黄',   reading: 'もみじつたきばむ',         month: 11, day: 2,  description: '紅葉や蔦が黄色く色づく頃。山々が赤や黄色に染まり、日本の秋が最も美しく輝く時期。錦を纏ったような山の姿に心を奪われる。' },
  { id: 61, sekkiId: 21, name: '山茶始開', reading: 'つばきはじめてひらく',     month: 11, day: 7,  description: '山茶花が咲き始める頃。落葉した木々の中で、赤や白のさざんかが寒空に鮮やかに咲く。冬の花の先駆けとして愛でられる。' },
  { id: 62, sekkiId: 21, name: '地始凍',   reading: 'ちはじめてこおる',         month: 11, day: 12, description: '大地が凍り始める頃。朝の寒さで地面が固く凍りつくようになる。冬が本格的に訪れたことを大地が身をもって示す季節。' },
  { id: 63, sekkiId: 21, name: '金盞香',   reading: 'きんせんかさく',           month: 11, day: 17, description: '水仙の花が香りを放つ頃。「金盞」は水仙の別名。白い花びらと黄色い副花冠が清楚で、凛とした冬の香りが辺りに漂う。' },
  { id: 64, sekkiId: 22, name: '虹蔵不見', reading: 'にじかくれてみえず',       month: 11, day: 22, description: '虹が見えなくなる頃。空気が乾燥し太陽の高度も低くなる冬には虹が現れにくくなる。春に初めて虹が見えるまでの静かな空。' },
  { id: 65, sekkiId: 22, name: '朔風払葉', reading: 'きたかぜこのはをはらう',   month: 11, day: 27, description: '北風が木の葉を払い落とす頃。冷たい北風が残った葉を容赦なく吹き落とし、木々が枝だけの冬姿になっていく。' },
  { id: 66, sekkiId: 22, name: '橘始黄',   reading: 'たちばなはじめてきばむ',   month: 12, day: 2,  description: '橘の実が黄色くなる頃。常緑の葉の間に黄色い実がなる橘は、冬の庭に彩りを添える。不老長寿の実として古くから愛でられてきた。' },
  { id: 67, sekkiId: 23, name: '閉塞成冬', reading: 'そらさむくふゆとなる',     month: 12, day: 7,  description: '天地が閉ざされ冬になる頃。重い雲が空を覆い天地が冬に閉ざされる。静寂と寒さが支配する冬の世界が本格的に始まる。' },
  { id: 68, sekkiId: 23, name: '熊蟄穴',   reading: 'くまあなにこもる',         month: 12, day: 12, description: '熊が冬眠のために穴にこもる頃。山の主が春まで眠りにつく。山が静まり返り、冬の深い静寂が山を包む。' },
  { id: 69, sekkiId: 23, name: '鱖魚群',   reading: 'さけのうおむらがる',       month: 12, day: 17, description: '鮭が群がり川を上る頃。生まれた川に帰ってくる鮭の力強い遡上は、命の循環の壮大さを示す。冬の川に生命力が溢れる。' },
  { id: 70, sekkiId: 24, name: '乃東生',   reading: 'なつかれくさしょうず',     month: 12, day: 22, description: '夏枯草が芽を出す頃。夏至に枯れた草が冬至に再び芽吹く。陰極まって陽となる冬至の日に、命が静かに動き出す。' },
  { id: 71, sekkiId: 24, name: '麋角解',   reading: 'おおしかのつのおつる',     month: 12, day: 27, description: '大鹿の角が落ちる頃。一年かけて成長した大鹿の立派な角が自然に落ちる。命の循環と再生を象徴する冬至の頃の出来事。' },
];

// =============================================
//  季語データ（季節別プール）
// =============================================
const KIGO_DATA = {
  spring: [
    { word: '春霞',   reading: 'はるがすみ', description: '春の水蒸気が漂い、山や景色をぼんやりと霞ませる現象。柔らかな白さが春の到来を告げ、すべてをやわらかく包む。' },
    { word: '春雨',   reading: 'はるさめ',   description: '春に降る細かく柔らかい雨。大地を潤し草木の芽吹きを促す恵みの雨。しっとりとした情趣が春の心を落ち着かせる。' },
    { word: '春風',   reading: 'はるかぜ',   description: '春に吹くおだやかで暖かな風。冬の厳しさが和らぎ、花の香りを運んでくるような心地よい風が野を渡る。' },
    { word: '桜',     reading: 'さくら',     description: '日本の春を象徴する花。淡いピンクの花が満開に咲き誇り、人々の心を浮き立たせる。散り際の潔さも古来より愛でられてきた。' },
    { word: '梅',     reading: 'うめ',       description: '春の初めに香り高く咲く花。雪の中でも凛と咲くことから「花の兄」とも呼ばれ、気高さと清らかさの象徴として詠まれてきた。' },
    { word: '菜の花', reading: 'なのはな',   description: '鮮やかな黄色の花が一面に広がる春の景色。春風に揺れる黄色の絨毯が目にも鮮やかで、春の訪れを色で告げてくれる。' },
    { word: '蝶',     reading: 'ちょう',     description: '暖かくなると花から花へと舞い飛ぶ姿が春の喜びを象徴する。冬を越してきた命の美しさが、春の野を彩る。' },
    { word: '鶯',     reading: 'うぐいす',   description: '「ホーホケキョ」と澄んだ声で春を告げる鳥。梅の花と共に春の代名詞とされ、その声が聞こえる日に春を実感する。' },
    { word: '燕',     reading: 'つばめ',     description: '春に南から渡ってくる鳥。軒先に巣を作り人の生活の近くで子育てをする。素早い飛翔が初夏の空を縦横無尽に彩る。' },
    { word: '蛙',     reading: 'かわず',     description: '春になると水田や池で鳴き始める。その賑やかな合唱が春の夜の風物詩。芭蕉の句で永遠に俳句の世界に刻まれた生き物。' },
    { word: '土筆',   reading: 'つくし',     description: '春の野に顔を出すスギナの胞子茎。頭を出した姿が愛らしく、春の到来を地面から告げる小さな使者。' },
    { word: '蒲公英', reading: 'たんぽぽ',   description: '春の野原に咲く黄色い花。綿毛が風に舞う様子が春の自由さを表す。道端にも力強く咲く、誰もが親しみを持つ野の花。' },
    { word: '朧月',   reading: 'おぼろづき', description: '春の霞の中でぼんやりと霞んで見える月。柔らかな光が春の夜をロマンティックに彩り、見る者の心を温かく揺らす。' },
    { word: '花冷え', reading: 'はなびえ',   description: '桜の開花時期に訪れる突然の寒さ。花見の季節に冬の気配が戻ってくる、春ならではの気候の揺らぎが花をより愛しくさせる。' },
    { word: '若葉',   reading: 'わかば',     description: '芽吹いたばかりの柔らかく鮮やかな緑の葉。光を透かして輝く若葉は春の生命力の象徴で、目にも清々しい。' },
    { word: '山笑う', reading: 'やまわらう', description: '春になり木々が一斉に芽吹いて、山全体が明るく賑やかになる様子。春夏秋冬の山を擬人化した表現の中で最も明るく楽しい姿。' },
    { word: '春の海', reading: 'はるのうみ', description: '穏やかにうねる春の海。冬の荒々しさが和らぎ、ゆったりとした光の中で輝く海が訪れる人の心をほぐしていく。' },
    { word: '囀り',   reading: 'さえずり',   description: '春に鳥たちが縄張りや求愛のために盛んに鳴き交わすこと。賑やかな鳴き声が春の朝を満たし、一日の始まりを明るくする。' },
    { word: '水温む', reading: 'みずぬるむ', description: '春になり川や池の水が少しずつ温かくなること。触れると感じる微かな温もりに春の到来を知る、繊細な季節の感覚。' },
    { word: '桃の花', reading: 'もものはな', description: 'ひな祭りの頃に咲くほんのりピンクの花。女の子の節句と結びつき、春の優しさと可憐さを体現する花として愛されてきた。' },
    { word: '木蓮',   reading: 'もくれん',   description: '葉より先に白や紫の大きな花を咲かせる。その豪快な花姿が冬枯れの景色に突然現れる、春の到来を告げる鮮烈な美しさ。' },
    { word: '花曇り', reading: 'はなぐもり', description: '桜の時期に多い白っぽく薄曇りの空。柔らかな光が花を包み、独特の幻想的な雰囲気を生む春ならではの空模様。' },
    { word: '雪柳',   reading: 'ゆきやなぎ', description: '枝いっぱいに小さな白い花を咲かせ、雪が積もったように見える低木。春の庭に清楚な白を添え、風に揺れる姿が優美。' },
    { word: '春暁',   reading: 'しゅんぎょう', description: '春の夜明け。空が少しずつ明るくなり、冷たい空気の中に春の香りが漂う清々しい時間帯。「春眠暁を覚えず」の世界。' },
    { word: '春泥',   reading: 'しゅんでい', description: '雪解けや春雨で柔らかくなった泥。田畑の土が春の訪れとともに生命の準備を始め、歩くたびに春を足裏で感じる。' },
    { word: '新緑',   reading: 'しんりょく', description: '初夏の手前、緑が最も鮮やかに輝く時期。山や野が生命力溢れる緑色に染まり、目も心も洗われるような清々しさに満ちる。' },
    { word: '花筏',   reading: 'はないかだ', description: '散った桜の花びらが川面に浮かび流れていく様子。はかなさと美しさが同居する、春の終わりを告げる風雅な景物。' },
    { word: '春光',   reading: 'しゅんこう', description: '春の穏やかで明るい日の光。冬の鋭い光とは異なる、温かみのある柔らかな輝きが大地をやさしく包む。' },
    { word: '蕨',     reading: 'わらび',     description: '春の山野に生えるシダ植物。くるんと丸まった新芽が地面から顔を出す姿は春の喜びそのもの。山菜の代表として食卓にも春を運ぶ。' },
    { word: '春の虹', reading: 'はるのにじ', description: '春雨の後に現れる虹。柔らかな光の中に浮かぶ色の橋が、春の喜びを空いっぱいに描き出す。' },
    { word: '春眠',   reading: 'しゅんみん', description: '春の温かさに誘われてうとうとすること。「春眠暁を覚えず」の句で知られる心地よい眠りは、春の穏やかさが生む贈り物。' },
    { word: '春の夕', reading: 'はるのゆう', description: '春の夕暮れ時。少しずつ長くなる夕方の時間に、淡い橙色の光が大地をやわらかく包み、一日の終わりをしみじみと感じる。' },
  ],
  summer: [
    { word: '夏空',   reading: 'なつぞら',   description: '眩しいほどに青く広がる夏の空。積乱雲が白くそびえ立ち、太陽が強烈な光を降り注ぐ。見上げるだけで夏の活力が満ちてくる。' },
    { word: '入道雲', reading: 'にゅうどうぐも', description: '夏の午後に激しく湧き上がる積乱雲。白く巨大な柱が空にそびえ立ち、夏の盛りと夕立の到来を予感させる。' },
    { word: '夕立',   reading: 'ゆうだち',   description: '夏の午後に突然激しく降る雨。熱気を冷まし雨上がりの清々しい空気をもたらす。子供の頃の夏の思い出に刻まれる風物詩。' },
    { word: '蛍',     reading: 'ほたる',     description: '夏の夜の闇に光を放つ昆虫。川辺や田んぼの近くに光の点が舞う幻想的な光景は、日本の夏が誇る最も美しい夜の景物。' },
    { word: '向日葵', reading: 'ひまわり',   description: '太陽に向かって咲く夏の花。鮮やかな黄色が夏の強い日差しに似合い、生命力と元気さを象徴する夏を代表する花。' },
    { word: '朝顔',   reading: 'あさがお',   description: '夏の朝に涼しげに咲き昼にはしぼむ花。青や紫の花が朝の光の中で輝く日本の夏の象徴で、縁側のある暮らしに欠かせない。' },
    { word: '蝉',     reading: 'せみ',       description: '夏の盛りに木々で鳴く昆虫。その賑やかな鳴き声は夏そのものを体現し、静寂との対比でより深い夏の印象を刻む。' },
    { word: '花火',   reading: 'はなび',     description: '夏の夜空を彩る光の花。大きな音と共に広がる色とりどりの光が、夏の夜の感動と記憶を人々の心に残す。' },
    { word: '風鈴',   reading: 'ふうりん',   description: '夏に軒先に吊るすガラスや金属の鈴。風に揺れて涼しげな音を出し、暑さの中に涼しさを感じさせる日本の知恵。' },
    { word: '西瓜',   reading: 'すいか',     description: '夏の風物詩となる大きな果物。縞模様の外皮と赤い果肉、そのみずみずしい甘さが夏の喜びそのものを体現する。' },
    { word: '梅雨',   reading: 'つゆ',       description: '初夏に訪れる長雨の季節。じめじめとした空気の中にも草木が生き生きと育つ生命の季節で、日本の夏の入口となる。' },
    { word: '青田',   reading: 'あおた',     description: '夏の太陽の下で青々と育つ稲のある水田。風に波打つ青い田んぼが夏の農の景色を彩り、日本の原風景を形作る。' },
    { word: '炎天',   reading: 'えんてん',   description: '太陽が照りつける焼けるように暑い夏の空。逃げ場のない暑さの中に夏の厳しさと生命力が溢れ、じっとしていても汗が噴き出す。' },
    { word: '滝',     reading: 'たき',       description: '夏に訪れる清涼感の象徴。白く落ちる水が轟音とともに岩肌を流れ、飛沫が涼しさをもたらす自然の恵み。' },
    { word: '鮎',     reading: 'あゆ',       description: '夏の清流に泳ぐ香魚。清らかな水と夏の日差しを受けて育ち、塩焼きにすると独特の香りを放つ夏の味覚の王者。' },
    { word: '蓮',     reading: 'はす',       description: '夏の朝に咲く清らかな花。泥の中から清浄な花を咲かせる姿が清浄さの象徴。早朝に花が開く神秘的な音がするとも言われる。' },
    { word: '緑蔭',   reading: 'りょくいん', description: '夏の木々が茂り、その葉が作る木陰。強い日差しを遮り涼しく心地よい空間を生み出す、夏の都会と自然の安息所。' },
    { word: '五月雨', reading: 'さみだれ',   description: '梅雨時に降り続く長雨。しとしとと降り続く雨音が、夏の始まりを静かに告げる。芭蕉の句で永遠に刻まれた雨の名前。' },
    { word: '青嵐',   reading: 'あおあらし', description: '初夏に吹く新緑の香りを運ぶ風。若葉が茂る木々を揺らして吹き抜ける清々しい強い風に、夏の始まりの活力を感じる。' },
    { word: '夏祭り', reading: 'なつまつり', description: '夏に行われる地域の祭り。神輿や屋台、賑わいの中に夏の熱気と人々の活気が溢れ、子供から大人まで心躍らせる。' },
    { word: '涼し',   reading: 'すずし',     description: '夏の暑い中でも感じられる涼しさ。木陰や水辺、朝夕のひとときに感じるほっとする涼やかさが夏の生きがいとなる。' },
    { word: '金魚',   reading: 'きんぎょ',   description: '夏の縁日や金魚鉢に揺れる赤い魚。水中でひらひらとたなびく尾ひれが涼しさと夏の情趣を添える、夏の室内の風景。' },
    { word: '夏草',   reading: 'なつくさ',   description: '夏の強い日差しを浴びて生命力旺盛に茂る草。芭蕉の「夏草や兵どもが夢の跡」で知られる、無常を映す夏の季語。' },
    { word: '浴衣',   reading: 'ゆかた',     description: '夏の夕涼みや祭りに着る薄手の着物。涼しげな模様と素材が夏の風情を醸し出し、夏の夜を特別な時間に変える。' },
    { word: '虹',     reading: 'にじ',       description: '夕立の後に現れる七色の光の弧。雨と光が作り出す自然の芸術で、夏の空に希望のように輝く。見た者に幸せを届ける。' },
    { word: '扇',     reading: 'おうぎ',     description: '夏の暑さをしのぐための道具。ぱちりと開く音と風を起こす動作に、日本の夏の優雅な涼の取り方が宿っている。' },
    { word: '冷奴',   reading: 'ひややっこ', description: '冷えた豆腐に薬味をのせたシンプルな夏の料理。涼やかな白さと冷たさが夏の食卓を彩り、簡素の中に夏の美味がある。' },
    { word: '海水浴', reading: 'かいすいよく', description: '夏の海で泳ぐこと。波の音と潮の香り、太陽の光の中で体を動かす開放的な喜びが夏の最高の娯楽として親しまれてきた。' },
    { word: '白南風', reading: 'しらはえ',   description: '梅雨明けの頃に吹く南からの風。白い雲と共にやってきて梅雨明けを告げる清々しい風。夏本番の到来を体で感じる瞬間。' },
    { word: '夜店',   reading: 'よみせ',     description: '夏の夜の祭りや縁日に並ぶ屋台の店。賑やかな明かりと甘い匂いが夏の夜の特別な記憶を作る、子供の頃の原点の景色。' },
    { word: '蚊',     reading: 'か',         description: '夏の夜に現れる小さな昆虫。細い羽音と刺す痛さが夏の風物詩。蚊帳や線香など対策も含め、夏の暮らしの一部を成してきた。' },
    { word: '泳ぐ',   reading: 'およぐ',     description: '夏の海や川、プールで水に入り体を動かすこと。水の冷たさと浮遊感が夏の開放感を体全体で感じさせる、夏の喜びの原点。' },
  ],
  autumn: [
    { word: '紅葉',   reading: 'もみじ',     description: '秋に葉が赤や黄色に色づくこと。山々が錦に染まる様子は日本の秋の最大の見どころで、古来より多くの詩歌に詠まれてきた。' },
    { word: '月',     reading: 'つき',       description: '秋の澄んだ空に輝く月。中秋の名月が特に美しく、月見の習慣と共に古くから愛でられ、秋の夜長の最高の友となる。' },
    { word: '菊',     reading: 'きく',       description: '秋を代表する花。凛とした佇まいと多様な色が秋の庭を彩る。高貴さの象徴として皇室の紋章にも使われる秋の主役。' },
    { word: '稲刈り', reading: 'いねかり',   description: '黄金色に実った稲穂を刈り取る秋の農作業。一年の農の営みの締めくくりで、豊穣への感謝が大地に溢れる収穫の喜び。' },
    { word: '萩',     reading: 'はぎ',       description: '秋の七草のひとつ。細い枝にたくさんの小さな花を咲かせ、風に揺れる姿が秋の野の侘び寂びの風情を作り出す。' },
    { word: '栗',     reading: 'くり',       description: '秋に実る棘のある殻に包まれた木の実。ほくほくした甘さが秋の味覚の代表格で、里山の秋の風景を形作る欠かせない実り。' },
    { word: '松茸',   reading: 'まつたけ',   description: '秋の赤松林に生える香り高いきのこ。独特の芳香と贅沢な味わいが秋の食の最高峰とされ、香りだけで秋を感じさせる。' },
    { word: '秋刀魚', reading: 'さんま',     description: '秋に旬を迎える細長い魚。塩焼きにして大根おろしと食べる秋の味覚の象徴。脂ののった旨味に秋の豊かさが凝縮されている。' },
    { word: '虫の声', reading: 'むしのこえ', description: '秋の夜長に響く鈴虫やコオロギなどの虫の鳴き声。その繊細な音色に秋の深まりと物悲しさが重なり、日本人の心を揺さぶる。' },
    { word: '秋風',   reading: 'あきかぜ',   description: '秋に吹く涼しく乾いた風。夏の熱気が和らぎ、どこか物悲しさを帯びた風が季節の変わり目と命の有限さを告げる。' },
    { word: '霧',     reading: 'きり',       description: '秋の朝に水辺や谷間に発生する霧。幻想的に景色を包む白い霧が秋の神秘的な美しさを演出し、異世界への入口のように見える。' },
    { word: '露',     reading: 'つゆ',       description: '秋の朝に草葉に宿る水の玉。朝日に輝く露は清澄で美しく、はかなさの象徴として多くの歌に詠まれ、秋の情趣を深める。' },
    { word: '柿',     reading: 'かき',       description: '秋に実るオレンジ色の果物。軒先に吊るされた干し柿や葉が落ちた枝に残る実が、秋の農村の懐かしい景色を作り出す。' },
    { word: '銀杏',   reading: 'いちょう',   description: '秋に鮮やかな黄色に染まる木。街路樹として親しまれ、黄金色の葉が舞い散る秋の景色が都市に季節の彩りを添える。' },
    { word: '鈴虫',   reading: 'すずむし',   description: '秋の夜に「リーンリーン」と美しく鳴く虫。その澄んだ音色が秋の夜長を彩る日本の虫の音の代表格として古来より珍重される。' },
    { word: '芒',     reading: 'すすき',     description: '秋の野原に穂を出す植物。風になびく銀色の穂が秋の野の寂寥感を表す。月見に欠かせない植物として秋を彩る存在。' },
    { word: '名月',   reading: 'めいげつ',   description: '旧暦8月15日の満月。一年で最も美しいとされる月で、ススキや月見団子と共に愛でる習慣が今も各地で続いている。' },
    { word: '秋晴れ', reading: 'あきばれ',   description: '雲ひとつない澄み切った秋の青空。空気が澄んで高く感じる空が広がり、すべてのものが鮮明に見える秋の最高の一日。' },
    { word: '山粧う', reading: 'やまよそおう', description: '紅葉で山が美しく装う様子。春は「笑う」夏は「滴る」秋は「粧う」冬は「眠る」と山の四季を擬人化した美しい表現。' },
    { word: '案山子', reading: 'かかし',     description: '田んぼに立てて鳥を追い払うもの。収穫の秋の田んぼに立つ案山子の姿に農の営みの温かさと長閑な秋の風景が宿る。' },
    { word: '夜長',   reading: 'よなが',     description: '秋の夜が次第に長くなること。静かな夜が長く続き、読書や物思いにふける時間が増える。秋の夜長に独り過ごす豊かな時間。' },
    { word: '林檎',   reading: 'りんご',     description: '秋に赤く実る果物。丸くて赤い実が枝にぶら下がる様子が秋の実りを象徴し、蜜の入った甘さが口いっぱいに秋を広げる。' },
    { word: '渡り鳥', reading: 'わたりどり', description: '秋になると北から南へ移動する鳥たち。V字形に空を渡る姿に季節の移り変わりの壮大さと、命の旅路の感動を覚える。' },
    { word: '葡萄',   reading: 'ぶどう',     description: '秋に実る紫や緑の果物。ぎっしりと実が詰まった房が秋の豊かさを体現し、甘い香りと深い色が秋の食卓を豊かに彩る。' },
    { word: '天高し', reading: 'てんたかし', description: '秋の空が高く澄んで見える様子。「天高く馬肥ゆる秋」という言葉でも知られる、澄み切った秋の空の清々しい表現。' },
    { word: '秋の朝', reading: 'あきのあさ', description: '澄み切った空気の中に始まる秋の朝。冷たい空気と清明な光が一日の始まりに清々しさをもたらし、体を引き締める。' },
    { word: '枯れ葉', reading: 'かれは',     description: '木から落ちた色づいた葉。風に舞い地面に積もる枯れ葉が秋の終わりと冬の訪れを告げ、踏むたびにかさこそと秋の音を立てる。' },
    { word: '新米',   reading: 'しんまい',   description: '秋に収穫されたばかりの米。白く輝く粒と炊き上がりの甘い香りが、秋の収穫の喜びと一年の労いを体現する恵みの食。' },
    { word: '秋霖',   reading: 'しゅうりん', description: '秋に降り続く長雨。しとしとと降る冷たい雨が秋の深まりを告げ、物悲しい情趣を醸し出しながら冬への橋渡しをする。' },
    { word: '秋の夕', reading: 'あきのゆう', description: '日が短くなった秋の夕暮れ。早く訪れる夕暮れに茜色の空が広がり、秋の物悲しさと一日の終わりのしみじみとした美しさが滲む。' },
    { word: '冬隣',   reading: 'ふゆどなり', description: '冬が近づいてきた晩秋の様子。枯れ葉が舞い風が冷たくなる中に冬の足音を感じ、心が静かに冬支度へと向かう頃。' },
    { word: '七五三', reading: 'しちごさん', description: '秋の子供の成長を祝う行事。晴れ着を着た子供たちが神社に参る秋の風物詩で、千歳飴の甘さが子供の喜びを包む。' },
  ],
  winter: [
    { word: '雪',     reading: 'ゆき',       description: '冬の空から降り積もる白い結晶。大地を白く覆い音を吸収した静寂の世界を作り出す。その純白の美しさは古来より詩歌に詠まれてきた。' },
    { word: '初雪',   reading: 'はつゆき',   description: 'その冬に初めて降る雪。白い雪が舞い始めた瞬間の驚きと喜びに冬の到来を実感する。毎年変わらず訪れる季節の最初の使者。' },
    { word: '霜',     reading: 'しも',       description: '冬の夜から朝にかけて草葉や地面に降りる白い結晶。朝日に輝く霜が冬の清澄な美しさを作り出し、冬の朝を神聖な時間にする。' },
    { word: '冬晴れ', reading: 'ふゆばれ',   description: '空気が澄み切った冬の晴れた日。青く高い空と乾いた光が冬ならではの清潔感を生み出し、遠くの山々まで鮮やかに見える。' },
    { word: '木枯らし', reading: 'こがらし', description: '晩秋から初冬に吹く冷たい強い北風。残った葉を落とし冬の到来を告げる厳しくも清々しい風に、季節の潔さを感じる。' },
    { word: '山眠る', reading: 'やまねむる', description: '冬に木々が葉を落とし枯れた山が静かに眠るような様子。春は笑い夏は滴り秋は粧い冬は眠る、山の四季の最後の姿。' },
    { word: '水仙',   reading: 'すいせん',   description: '冬に咲く白や黄色の清楚な花。寒さの中で凛と咲く姿が純粋さを体現し、上品な香りも心を和ませる冬の清らかな花。' },
    { word: '山茶花', reading: 'さざんか',   description: '晩秋から冬に咲く花。椿に似た花が寒空の下で咲き続け、冬の庭に温かみのある色を添える。冬の庭の主役として愛される。' },
    { word: '椿',     reading: 'つばき',     description: '冬から春にかけて咲く花。鮮やかな赤い花が落下する様子が武士道と結びつき、その美しい散り際が古来より詠まれてきた。' },
    { word: '焚き火', reading: 'たきび',     description: '冬の野外で落ち葉や枝を燃やす火。オレンジ色の炎と温もり、木の燃える香りが冬の幸せを運ぶ。人と人を集める冬の求心力。' },
    { word: '冬の月', reading: 'ふゆのつき', description: '冬の澄んだ空に輝く月。空気が乾いて澄み、月の光が鋭く冷たく大地を照らす。秋の月とは異なる冬独自の凛とした美しさ。' },
    { word: '北風',   reading: 'きたかぜ',   description: '冬に北から吹く冷たい風。頬を刺すような冷気が冬の厳しさを体に伝え、思わず身を縮める。その厳しさの中にも清澄な美しさがある。' },
    { word: '吹雪',   reading: 'ふぶき',     description: '強風と共に激しく雪が吹き荒れること。視界を奪う白い嵐の中に、冬の壮大な力強さと自然の圧倒的な存在感が宿る。' },
    { word: 'みかん', reading: 'みかん',     description: '冬に旬を迎えるオレンジ色の果物。甘い香りと酸味が冬の室内に温かさをもたらし、こたつで食べるみかんが冬の幸せの原点となる。' },
    { word: '冬星',   reading: 'ふゆほし',   description: '冬の澄んだ夜空に輝く星。空気が乾燥して澄み切った冬の夜は星が最も美しく輝き、満天の星が冬の夜を荘厳に彩る。' },
    { word: '年の暮れ', reading: 'としのくれ', description: '一年の終わりに向かう年末の頃。慌ただしい中にも一年を振り返る静かな感慨が宿り、人々の心が年の重みを感じる時期。' },
    { word: '冬の海', reading: 'ふゆのうみ', description: '鉛色に荒れる冬の海。夏の賑わいとは打って変わり、孤独で壮大な景色が広がる。冬の海の荒々しさと孤高の美しさに魅せられる。' },
    { word: '枯れ木', reading: 'かれき',     description: '葉をすべて落とし枝だけになった冬の木。骨格が現れた枝の形の美しさに冬の木の表情が宿り、空を背景に凛とした姿を見せる。' },
    { word: '冬日和', reading: 'ふゆびより', description: '風もなく穏やかに晴れた冬の日。冬の厳しさの中にある一時の安らぎで、縁側での日向ぼっこが恋しくなる冬の贈り物。' },
    { word: '節分',   reading: 'せつぶん',   description: '立春の前日に行う豆まきの行事。「鬼は外、福は内」の声と共に豆を撒き、冬から春への移り変わりと厄払いを祝う行事。' },
    { word: '雪解け', reading: 'ゆきどけ',   description: '春の訪れと共に積もった雪が溶け始めること。ぽたぽたと滴る雪解け水に春の気配を感じ、冬から解放される喜びが訪れる。' },
    { word: '氷',     reading: 'こおり',     description: '冬の寒さで水が凍ったもの。池や水田に張る氷の透明な美しさと踏んだときの軽い音が冬を体現し、冬の朝の清澄さを象徴する。' },
    { word: '初日の出', reading: 'はつひので', description: '元日の夜明けに昇る太陽。新年の始まりを告げる最初の太陽に人々が手を合わせ、一年の希望と祈りを込める日本の年初の風物詩。' },
    { word: '暖炉',   reading: 'だんろ',     description: '室内で薪を燃やして暖を取るもの。炎の揺らめきと温もりが冬の室内に特別な安らぎをもたらし、人々を炎の前に集める。' },
    { word: '春を待つ', reading: 'はるをまつ', description: '厳しい冬の中で春の訪れを待ちわびる気持ち。庭の梅の芽や早春の光に希望を見出す、冬の心情の美しい表れ。' },
    { word: '冬枯れ', reading: 'ふゆがれ',   description: '草木が枯れ野山が茶色く沈んだ冬の風景。生命が地中に潜んだ静かな時間の中に次の春の準備があることを想う。' },
    { word: '凧',     reading: 'たこ',       description: '冬の空に揚げる紙や布の玩具。冬の青空を背に高く揚がる凧は正月の風物詩で、糸を手に感じる風の力が冬の喜びになる。' },
    { word: '霙',     reading: 'みぞれ',     description: '雨と雪が混じって降るもの。どちらとも決まらない不安定な天候が冬の終わりの曖昧な季節感を表し、春への期待を高める。' },
    { word: '冬籠',   reading: 'ふゆごもり', description: '寒い冬の間外に出ずに家の中で過ごすこと。温かい部屋で読書や手仕事に没頭する静かな冬の暮らしに、冬独自の豊かさがある。' },
    { word: '雪見',   reading: 'ゆきみ',     description: '積もった雪を愛でること。雪景色を眺めながら温かい飲み物を手にする、冬の穏やかな喜び。日本人の自然を愛でる心の表れ。' },
    { word: '冬至',   reading: 'とうじ',     description: '一年で最も夜が長い日。ゆず湯に入りかぼちゃを食べる習わしがあり、ここから日が伸び始める転換点として古来より大切にされてきた。' },
    { word: '寒稽古', reading: 'かんげいこ', description: '寒さの最も厳しい時期に行う武道や芸事の稽古。精神と体を鍛える厳しい修行に冬の清澄さが宿り、己と向き合う時間となる。' },
  ],
};

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

// =============================================
//  節気・候の判定
// =============================================
function dayBefore(month, day) {
  const d = new Date(2024, month - 1, day);
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
//  季語の日替わり選出（シード付きシャッフル）
// =============================================
function seededShuffle(arr, seed) {
  const result = [...arr];
  let s = seed >>> 0;
  for (let i = result.length - 1; i > 0; i--) {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s = s >>> 0;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickDailyKigo(season, date) {
  const pool  = KIGO_DATA[season];
  const seed  = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  const shuffled = seededShuffle(pool, seed);
  const count = (seed % 2 === 0) ? 4 : 5;
  return shuffled.slice(0, count);
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

function renderKigo(kigoList) {
  const content = document.getElementById('kigo-content');
  document.getElementById('kigo-updated').textContent = '';

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

// =============================================
//  初期化
// =============================================
function init() {
  const today  = new Date();
  const season = getSeason(today.getMonth() + 1);

  document.body.classList.add(season);
  renderDate(today);

  const sekkiCtx = findCurrentWithContext(SEKKI_DATA, today);
  const kikoCtx  = findCurrentWithContext(KIKO_DATA, today);
  renderTerm('sekki', sekkiCtx);
  renderTerm('kiko', kikoCtx);

  const kigo = pickDailyKigo(season, today);
  renderKigo(kigo);
}

document.addEventListener('DOMContentLoaded', init);
