(() => {
  const TOPICS_DB = [
    {
      id: "couple",
      name: "情侶撒嬌",
      character: "可愛女友／甜美表情／粉色系",
      texts: "想你、愛你喔、抱抱、親親、陪我、不要走、我吃醋、哼、晚安寶、早安寶、等你喔、好想見你、你最好、撒嬌中、我錯了、原諒我、一起吃飯、去哪裡、好開心、最愛你",
      actions: "想你用思念表情、愛你喔用比愛心、抱抱用張開雙手、親親用飛吻、陪我用撒嬌拜託、不要走用伸手挽留、我吃醋用吃醋嘟嘴、哼用雙手抱胸、晚安寶用睡覺、早安寶用起床伸懶腰、等你喔用等待表情、好想見你用期待開心、你最好用比讚、撒嬌中用可愛嘟嘴、我錯了用流淚道歉、原諒我用雙手合十拜託、一起吃飯用拿餐具、去哪裡用疑問、好開心用撒花、最愛你用大愛心。"
    },
    {
      id: "daily",
      name: "日常問候",
      character: "可愛女生／長髮／溫柔親切",
      texts: "你好、早安、晚安、謝謝、加油、辛苦了、收到、OK、哈哈、抱歉、沒問題、等等我、好喔、愛你喔、開心、哭哭、太棒了、麻煩了、傻眼、生氣",
      actions: "你好用揮手、早安用拿馬克杯、晚安用揉眼睛、謝謝用雙手合十、加油用握拳、辛苦了用遞茶、收到用敬禮、OK用比OK、哈哈用大笑、抱歉用抓頭、沒問題用拍胸、等等我用奔跑、好喔用點頭、愛你喔用手比愛心、開心用撒花、哭哭用流淚、太棒了用雙手高舉、麻煩了用低頭拜託、傻眼用石化、生氣用叉腰。"
    },
    {
      id: "office",
      name: "上班族日常",
      character: "辦公室女生／襯衫外套／忙碌可愛",
      texts: "開會中、在忙、馬上回、收到、辛苦了、加油、先下班、了解、麻煩了、休假中、崩潰、想睡、午餐吃啥、好的、交給我、謝謝、趕稿中、已寄出、頭痛、想下班",
      actions: "依文字搭配相符動作，例如：開會中用拿筆記本、在忙用狂敲鍵盤、先下班用背著包包開心跑走、休假中用戴墨鏡喝飲料、崩潰用雙手抓頭髮、想睡用趴在桌上、想下班用盯著時鐘看。"
    },
    {
      id: "friends",
      name: "朋友聊天",
      character: "活潑女孩／日常休閒服／搞笑風格",
      texts: "欸欸、真的假的、太扯了、笑死、蛤、我懂、先不要、可以、++、走啊、吃什麼、在哪、等我一下、快點、太神啦、哭啊、隨便、都行、無言、好喔",
      actions: "依文字搭配相符誇張動作，例如：太扯了用嘴巴張大、笑死用捧腹大笑在地上滾、蛤用黑人問號臉、先不要用雙手比X、++用舉手、快點用看手錶跺腳、無言用烏鴉飛過三條線。"
    },
    {
      id: "mom",
      name: "媽媽常用",
      character: "親切媽媽／圍裙或居家服／溫暖",
      texts: "吃飯了、早點睡、注意安全、記得喝水、路上小心、到家說一聲、幾點回來、買好了、辛苦了、愛你、生氣囉、快起床、衣服穿暖、早安、晚安、記得吃飯、在幹嘛、少滑手機、真棒、媽媽抱抱",
      actions: "依文字搭配相符動作，例如：吃飯了用拿鍋鏟、記得喝水用拿水杯、幾點回來用看時鐘、生氣囉用手拿著雞毛撢子或叉腰、快起床用掀棉被、少滑手機用指著手機搖頭。"
    },
    {
      id: "office_praise",
      name: "同事互助與讚美",
      character: "辦公室女生 / 襯衫套裝 / 黑色粗框眼鏡 / 比讚且充滿感激",
      texts: "大神、太強了、感謝凱瑞、靠你了、偶像、你最棒、辛苦了、請喝飲料、有你真好、拯救世界、效率王、沒問題、收到指令、馬上辦、辛苦了大大、太神啦、專業、沒你不行、感謝幫忙、給你讚",
      actions: "大神用膜拜姿勢、太強了用驚訝讚嘆、感謝凱瑞用流淚抱大腿、靠你了用眼神充滿希望、偶像用雙手比心。"
    },
    {
      id: "office_ot",
      name: "萬惡加班夜",
      character: "辦公室女生 / 襯衫解開一顆扣子 / 披頭散髮 / 眼圈發黑",
      texts: "還沒完、我想回家、修仙中、靈魂出竅、還有幾份、肝在燒、我要死掉了、誰來救我、天亮了、咖啡續杯、趕工中、還不能睡、最後衝刺、崩潰邊緣、眼神死、還要多久、我要振作、撐住、不要跟我說話、又是這時候",
      actions: "還沒完用狂敲鍵盤、我想回家用趴在桌上哭、靈魂出竅用頭頂冒出靈魂、肝在燒用身體冒煙、咖啡續杯用灌咖啡。"
    },
    {
      id: "office_funny",
      name: "職場幽默心聲",
      character: "辦公室女生 / 黑框眼鏡 / 表情豐富鬼臉 / 詼諧風格",
      texts: "我就靜靜看著、你認真？、已讀不回、我的天、傻眼貓咪、聽你在吹、這我不行、腦袋進水、這什麼鬼、關我屁事、你是誰、我有問題、我在哪、我想靜靜、怪我囉、無話可說、眼神死、不要鬧、你確定？、這太扯",
      actions: "我就靜靜看著用推眼鏡冷笑、你認真？用懷疑眼神、已讀不回用滑手機、我的天用扶額、傻眼貓咪用變成貓咪樣子。"
    },
    {
      id: "office_payday",
      name: "發薪日與購物",
      character: "辦公室女生 / 眼睛變成錢字號 / 手拿大把鈔票 / 購物狂樣",
      texts: "發薪水啦、有錢、買買買、剁手、清空購物車、這我要了、這個讚、好想要、缺錢、土很好吃、我要忍住、不行買、忍痛放棄、下個月再說、又沒錢了、我要理財、省吃儉用、吃大餐、買給自己、開心",
      actions: "發薪水啦用撒鈔票、買買買用狂點手機、剁手用拿刀要砍手（誇張版）、清空購物車用購物車滿出來、吃大餐用拿著大蝦。"
    },
    {
      id: "office_meeting",
      name: "開會這檔事",
      character: "辦公室女生 / 手拿簡報筆 / 認真解說 / 有時恍神",
      texts: "開始囉、誰要報告、這重點、有問題嗎、我想想、我要發言、沒意見、這可以、這不行、重新來、效率、沒重點、恍神、我要睡著了、快結束吧、下一位、整理中、這數據、大家辛苦、開會中",
      actions: "開始囉用指著白板、誰要報告用東張西望、這重點用紅筆圈起來、恍神用眼神空洞、我要睡著了用掐自己。"
    },
    {
      id: "home_lazy",
      name: "居家懶人生活",
      character: "眼鏡女生 / 寬鬆鯊魚夾抓髮 / 宅女乾物女風 / 睡衣穿搭",
      texts: "不想動、廢人模式、我要躺著、懶得動、好廢、不想起床、只想躺、耍廢中、沒動力、肚子餓、我要睡覺、不想洗頭、好懶、這可以、沒問題、我要吃、不要叫我、只想躺著、人生好難、好廢喔",
      actions: "不想動用躺在沙發上、廢人模式用變成一團爛泥、我要躺著用棉被蓋頭、只想躺用趴在床上。"
    },
    {
      id: "home_snack",
      name: "吃貨萬歲",
      character: "眼鏡女生 / 手拿零食 / 嘴角有餅乾屑 / 滿足表情",
      texts: "好好吃、還要吃、肚子餓、想吃東西、這個讚、美食、罪惡感、要變胖了、明天再減肥、再吃一口、好好吃喔、這個我愛、吃貨、我要吃、開心、滿足、肚子餓了、想吃、好好吃、太棒了",
      actions: "好好吃用捧頰滿足、還要吃用伸手拿、肚子餓用肚子咕嚕叫、明天再減肥用秤體重驚嚇。"
    },
    {
      id: "home_pet",
      name: "貓奴日常",
      character: "眼鏡女生 / 身邊圍繞貓咪 / 手拿逗貓棒 / 幸福貓奴",
      texts: "主子、奴才來了、好可愛、吸貓、抱抱、不要跑、來親親、陪我玩、睡著了、好萌、我的愛、不理我、又在睡、搗蛋、壞貓咪、不聽話、又抓沙發、吃飯囉、罐罐、鏟屎中",
      actions: "主子用跪拜、好可愛用比愛心、吸貓用臉埋進貓毛、抱抱用緊抱貓咪、鏟屎中用拿鏟子。"
    },
    {
      id: "home_game",
      name: "電動手遊日",
      character: "眼鏡女生 / 戴耳機 / 手拿手把或手機 / 眼神專注",
      texts: "開戰、打他、快輸了、復活、差一點、豬隊友、神操作、贏了、再一局、不想輸、我要贏、升級、太神啦、沒血了、補血、等一下、快快快、可惡、又是你、贏啦",
      actions: "開戰用比出戰鬥姿勢、快輸了用焦慮狂按、豬隊友用抱頭翻白眼、贏了用高舉雙手。"
    },
    {
      id: "home_wfh",
      name: "在家工作（WFH）",
      character: "眼鏡女生 / 上半身襯衫 / 下半身睡褲 / 視訊會議中",
      texts: "訊號不好、聽得到嗎、畫面卡住、麥克風沒開、視訊中、在家工作、快好了、沒問題、稍等一下、我要報告、會議結束、大家辛苦、視訊壞了、可以嗎、好的、有聲音嗎、有畫面嗎、視訊會議、在家中、沒問題",
      actions: "訊號不好用手抓頭、麥克風沒開用指著麥克風、視訊中用整理頭髮、畫面卡住用靜止不動。"
    },
    {
      id: "emotion_angry",
      name: "極度憤怒",
      character: "眼鏡女生 / 頭頂冒火 / 咬牙切齒 / 憤怒火焰背景",
      texts: "氣死我、炸裂、不可原諒、滾、不要鬧、閉嘴、再說一次、不要臉、我的天、搞什麼、這不行、生氣、我想死、去死吧、不要跟我說話、氣炸、這太扯、你是誰、不要再來、氣死",
      actions: "氣死我用抓頭髮、炸裂用身體爆炸、滾用手指外面、閉嘴用手摀住嘴巴。"
    },
    {
      id: "emotion_sad",
      name: "傷心難過",
      character: "眼鏡女生 / 眼淚像瀑布 / 縮在角落 / 陰雨背景",
      texts: "嗚嗚、好難過、想哭、心碎、這不行、為什麼、好難受、沒人理我、孤單、寂寞、我想哭、為什麼是我、不開心、這太慘、嗚嗚嗚、好難過喔、想哭哭、心痛、好慘、嗚嗚",
      actions: "嗚嗚用流淚、想哭用眼眶紅、心碎用手捧破碎的心、縮在角落用抱膝。"
    },
    {
      id: "emotion_tired",
      name: "好累喔",
      character: "眼鏡女生 / 身體癱軟 / 眼神死 / 疲憊無力",
      texts: "好累、沒力氣、不想動、我要睡、我要躺、這不行、人生好難、好廢、沒動力、不要叫我、我想休息、我要睡覺、好累喔、不行了、沒血了、補血、我要睡、好累喔、不行了、好累",
      actions: "好累用癱在椅子上、沒力氣用身體變透明、我要睡用趴在桌上、人生好難用眼神死。"
    },
    {
      id: "emotion_scared",
      name: "嚇死人了",
      character: "眼鏡女生 / 眼睛瞪大 / 身體發抖 / 驚嚇表情",
      texts: "嚇死我、這什麼、不要過來、鬼啊、好恐怖、這太扯、這不行、我要逃、救命、嚇死人了、好可怕、這什麼鬼、快跑、不要鬧、嚇死我了、好恐怖喔、救命啊、嚇死人、好可怕、嚇死",
      actions: "嚇死我用縮起身子、不要過來用雙手擋在前面、鬼啊用尖叫、好恐怖用發抖。"
    },
    {
      id: "emotion_confused",
      name: "滿頭問號",
      character: "眼鏡女生 / 頭頂冒出問號 / 歪頭懷疑 / 困惑樣",
      texts: "蛤？、什麼、這什麼、不懂、什麼意思、我是誰、我在哪、這是啥、搞什麼、真的假的、你認真？、聽不懂、這是什麼、搞不清楚、你是誰、蛤、不懂、真的假的、這是啥、不懂",
      actions: "蛤？用歪頭、這什麼用指著東西、我是誰用摸著頭、搞不清楚用眼神迷惘。"
    },
    {
      id: "net_text",
      name: "網路常用語",
      character: "眼鏡女生 / 手拿手機 / 潮流流行風 / 活潑樣",
      texts: "LMAO、LOL、OMG、這太扯、我的天、真的是、沒問題、收到、好的、愛你、加油、哭哭、生氣、哈哈、抱歉、等等、知道、沒問題、好的、LMAO",
      actions: "LMAO用大笑、LOL用笑、OMG用驚訝、這太扯用翻白眼。"
    },
    {
      id: "net_emoticon",
      name: "顏文字表情包",
      character: "眼鏡女生 / 表情跟顏文字一樣 / 單純可愛風",
      texts: "(^^)、(T_T)、(>_<)、(O_O)、(^_^)、(ToT)、(o_o)、(T-T)、(^^)、(>.<)、(@_@)、(>_o)、(O_O)、(^_^)、(ToT)、(o_o)、(T-T)、(^^)、(>.<)、(@_@)",
      actions: "(^^)用微笑、(T_T)用哭、(>_<)用生氣、(O_O)用驚訝。"
    },
    {
      id: "net_slang",
      name: "網路流行梗",
      character: "眼鏡女生 / 動作跟流行梗一樣 / 詼諧風",
      texts: "這太扯、你是誰、沒問題、好的、愛你、加油、哭哭、生氣、哈哈、抱歉、等等、知道、沒問題、好的、這太扯、你是誰、沒問題、好的、愛你、加油",
      actions: "這太扯用翻白眼、你是誰用懷疑眼神、沒問題用比OK。"
    },
    {
      id: "net_sticker",
      name: "貼圖常用語",
      character: "眼鏡女生 / 活潑可愛 / 手拿貼圖板子",
      texts: "讚、棒、對、好、NO、NG、OK、感謝、抱歉、收到、了解、馬上、稍等、哭哭、生氣、哈哈、等等、知道、感謝、讚",
      actions: "讚用比讚、棒用雙手比讚、對用點頭。"
    },
    {
      id: "net_voice",
      name: "語音訊息",
      character: "眼鏡女生 / 手拿手機錄音 / 錄音中",
      texts: "語音中、稍等、好的、知道了、沒問題、愛你、加油、哭哭、生氣、哈哈、抱歉、等等、知道、沒問題、好的、語音中、稍等、好的、知道了、沒問題",
      actions: "語音中用拿手機錄音、稍等用比1、好的用點頭。"
    },
    {
      id: "season_cny",
      name: "新年快樂",
      character: "眼鏡女生 / 旗袍裝扮 / 恭喜發財手勢 / 節慶紅 background",
      texts: "恭喜、發財、大吉、紅包、春節、新年、快樂、萬事、如意、平安、健康、發財、恭喜、新年快樂、萬事如意、大吉大利、紅包拿來、新年好、發財、恭喜",
      actions: "恭喜用雙手合十、發財用拿金元寶、大吉用拿橘子。"
    },
    {
      id: "season_xmas",
      name: "聖誕快樂",
      character: "眼鏡女生 / 聖誕帽 / 手拿禮物 / 聖誕背景",
      texts: "聖誕、快樂、交換、禮物、聖誕樹、雪人、麋鹿、聖誕老人、快樂、聖誕快樂、交換禮物、聖誕節、禮物、聖誕樹、雪人、麋鹿、聖誕老人、快樂、聖誕快樂、交換禮物",
      actions: "聖誕快樂用戴聖誕帽、交換禮物用拿禮物、聖誕樹用跟聖誕樹合影。"
    },
    {
      id: "season_val",
      name: "情人節",
      character: "眼鏡女生 / 比愛心 / 浪漫風",
      texts: "愛你、情節、情人、快樂、愛你、我愛你、一生、一世、陪伴、相守、情人節、快樂、我愛你、愛你、一生、一世、陪伴、相守、情人節、快樂",
      actions: "愛你用比愛心、我愛你用雙手比大愛心、陪伴用兩人合影。"
    },
    {
      id: "season_halloween",
      name: "萬聖節",
      character: "眼鏡女生 / 巫師帽 / 南瓜燈 / 萬聖背景",
      texts: "萬聖、快樂、南瓜、鬼、不給糖、就搗蛋、糖果、派對、萬聖節、快樂、南瓜、鬼、不給糖、就搗蛋、糖果、派對、萬聖節、快樂、南瓜、鬼",
      actions: "萬聖快樂用戴巫師帽、不給糖就搗蛋用拿南瓜燈。"
    },
    {
      id: "season_birthday",
      name: "生日快樂",
      character: "眼鏡女生 / 生日帽 / 吹蠟燭 / 生日背景",
      texts: "生日、快樂、蛋糕、禮物、吹蠟燭、許願、開心、慶祝、生日快樂、快樂、蛋糕、禮物、吹蠟燭、許願、開心、慶祝、生日快樂、快樂、蛋糕、禮物",
      actions: "生日快樂用戴生日帽、吹蠟燭用吹蠟燭。"
    },
    {
      id: "life_sports",
      name: "運動健康",
      character: "眼鏡女生 / 運動服 / 流汗 / 運動樣",
      texts: "運動、健身、減肥、流汗、加油、堅持、健康、活力、運動、健身、減肥、流汗、加油、堅持、健康、活力、運動、健身、減肥、流汗",
      actions: "運動用跑步、健身用舉啞鈴、減肥用稱體重。"
    },
    {
      id: "life_travel",
      name: "旅遊萬歲",
      character: "眼鏡女生 / 墨鏡 / 拿相機 / 旅遊背景",
      texts: "旅遊、度假、開心、拍照、美食、風景、好玩、放鬆、旅遊、度假、開心、拍照、美食、風景、好玩、放鬆、旅遊、度假、開心、拍照",
      actions: "旅遊用背行李箱、拍照用拿相機、放鬆用躺在海灘椅上。"
    },
    {
      id: "life_study",
      name: "好學不倦",
      character: "眼鏡女生 / 書堆 / 看書 / 學習樣",
      texts: "學習、看書、考試、加油、堅持、知識、進步、學習、看書、考試、加油、堅持、知識、進步、學習、看書、考試、加油、堅持、知識",
      actions: "學習用看書、考試用寫考卷、加油用比讚。"
    },
    {
      id: "life_weather",
      name: "天氣變換",
      character: "眼鏡女生 / 傘 / 太陽眼鏡 / 天氣背景",
      texts: "下雨、晴天、陰天、好熱、好冷、颱風、天氣、晴天、下雨、晴天、陰天、好熱、好冷、颱風、天氣、晴天、下雨、晴天、陰天、好熱",
      actions: "下雨用撐傘、晴天用戴墨鏡、好熱用扇子、好冷用發抖。"
    },
    {
      id: "life_cheer",
      name: "應援加油",
      character: "眼鏡女生 / 拉拉隊裝 / 手拿加油棒 / 加油樣",
      texts: "加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的",
      actions: "加油用揮動加油棒、勝利用比2。"
    },
    {
      id: "mom_pregnancy",
      name: "懷孕準媽媽",
      character: "眼鏡女生 / 寬鬆孕婦裝 / 挺著大肚子 / 手摸肚子 / 充滿期待",
      texts: "寶貝、期待、肚子餓、好累、加油、愛你、踢我、產檢、小寶貝、好想你、加油、平安、健康、準媽媽、肚子好大、小生命、期待見面、好愛你、平安長大、小驚喜",
      actions: "期待用眼神充滿希望、踢我用肚子彈一下、好累用趴在椅子上。"
    },
    {
      id: "mom_newborn",
      name: "育兒日常",
      character: "眼鏡女生 / 睡衣 / 熊貓眼 / 抱著嬰兒 / 疲憊但幸福",
      texts: "寶貝、喝奶、換布布、睡著了、好可愛、哭哭、抱抱、不要哭、媽媽在、愛你、乖乖、肚子餓、洗澡、小天使、小惡魔、安靜、好好睡、小寶貝、愛你、辛苦了",
      actions: "喝奶用拿奶瓶餵、睡著了用嬰兒安靜睡、哭哭用嬰兒大哭媽媽焦慮。"
    },
    {
      id: "mom_toddler",
      name: "學步幼兒",
      character: "眼鏡女生 / 休閒服 / 追著學步車 / 手忙腳亂",
      texts: "加油、不要跑、來親親、好棒、危險、停下來、抓到了、愛你、乖乖、不可以、吃飯、洗澡、睡覺、好可愛、小寶貝、快跑、小心、不要摔倒、好厲害、小調皮",
      actions: "加油用比讚、停下來用手擋、抓到了用緊抱。"
    },
    {
      id: "mom_meal",
      name: "媽媽大廚",
      character: "眼鏡女生 / 圍裙 / 拿著鍋鏟 / 眼神發光 / 美食 background",
      texts: "吃飯囉、好好吃、都吃完、不挑食、這個讚、美食、大餐、愛心料理、吃飽飽、好滿足、加菜、好好吃、太棒了、媽媽的味道、肚子餓、想吃、開動囉、吃光光、好好吃喔、這個我愛",
      actions: "吃飯囉用敲鍋蓋、不挑食用指著蔬菜、愛心料理用比大愛心。"
    },
    {
      id: "mom_homework",
      name: "陪寫作業",
      character: "眼鏡女生 / 眼神死 / 手扶額頭 / 小孩在一旁寫字",
      texts: "專心、這題、為什麼、加油、快好了、沒問題、我想死、不要分心、還有幾題、趕快、寫完、可以玩、人生好難、好廢、沒動力、不想寫、好累、快寫、加油、好的",
      actions: "專心用眼神充滿殺氣、沒問題用眼神死、人生好難用癱在椅子上。"
    },
    {
      id: "mom_teach",
      name: "愛的教育",
      character: "眼鏡女生 / 溫柔親切 / 抱著小孩 / 講故事中",
      texts: "乖乖、聽話、愛你、好棒、加油、沒問題、知道嗎、不要做、這個、不可以、對不起、原諒我、愛你喔、抱抱、親親、陪我、不哭、好可愛、小寶貝、好棒喔",
      actions: "乖乖用摸頭、知道嗎用點頭、不要做用手擋。"
    },
    {
      id: "mom_break",
      name: "崩潰邊緣",
      character: "眼鏡女生 / 頭頂冒煙 / 抓頭髮 / 小孩搗蛋中",
      texts: "氣死我、炸裂、滾、不要鬧、閉嘴、再說一次、不要臉、我的天、搞什麼、這不行、生氣、我想死、去死吧、不聽話、又抓沙發、搗蛋、壞小孩、生氣、氣死、不要來",
      actions: "氣死我用抓頭髮、炸裂用身體爆炸、滾用手指外面。"
    },
    {
      id: "mom_worry",
      name: "媽媽操碎心",
      character: "眼鏡女生 / 焦慮 / 手拿體溫計 / 小孩發燒中",
      texts: "發燒、退燒、加油、撐住、沒事、媽媽在、愛你、小心、不要怕、生病、好難受、嗚嗚、哭哭、好痛、媽媽、不要、生病、好累、沒力氣、加油",
      actions: "發燒用拿體溫計、沒事用摸頭、愛你用緊抱。"
    },
    {
      id: "mom_clean",
      name: "家事達人",
      character: "眼鏡女生 / 圍裙 / 拿著吸塵器 / 手忙腳亂 / 髒亂 home background",
      texts: "乾淨、整潔、收好、不要亂丟、這太髒、搞什麼、收玩具、衣服、洗碗、地鐵、好累、不想動、廢人模式、我要躺著、懶得動、好廢、不想起床、只想躺、耍廢中、沒動力",
      actions: "乾淨用眼神死、這太髒用指著地板、收玩具用指著小孩。"
    },
    {
      id: "mom_rest",
      name: "媽媽的休息時間",
      character: "眼鏡女生 / 睡衣 / 躺在沙發 / 眼神空洞 / Zzz background",
      texts: "好累、沒力氣、不想動、我要睡、我要躺、這不行、人生好難、好廢、沒動力、不要叫我、我想休息、我要睡覺、好累喔、不行了、沒血了、補血、我要睡、好累喔、不行了、好累",
      actions: "好累用癱在椅子上、沒力氣用身體變透明、我要睡用趴在桌上。"
    },
    {
      id: "mom_love",
      name: "媽媽的愛",
      character: "眼鏡女生 / 抱著小孩 / 嘴角上揚 / 幸福表情",
      texts: "愛你、寶貝、親親、抱抱、永遠、守護、陪伴、長大、我的愛、幸福、開心、滿足、肚子餓了、想吃、好好吃、太棒了、美食、吃貨、我要吃、開心",
      actions: "愛你用比愛心、親親用飛吻、抱抱用緊抱。"
    },
    {
      id: "mom_nag",
      name: "媽媽碎碎念",
      character: "眼鏡女生 / 推眼鏡 / 眼神死 / 話很多",
      texts: "聽話、不可以、這重點、專心、快寫、加油、好的、收到指令、馬上辦、辛苦了大大、太神啦、專業、沒你不行、感謝幫忙、給你讚、謝謝、讚、棒、對、好",
      actions: "聽話用眼神死、不可以用手擋、這重點用紅筆圈起來。"
    },
    {
      id: "mom_shout",
      name: "大吼大叫",
      character: "眼鏡女生 / 頭頂冒火 / 咬牙切齒 / 憤怒火焰背景",
      texts: "氣死我、炸裂、不可原諒、滾、不要鬧、閉嘴、再說一次、不要臉、我的天、搞什麼、這不行、生氣、我想死、去死吧、不要跟我說話、氣炸、這太扯、你是誰、不要再來、氣死",
      actions: "氣死我用抓頭髮、炸裂用身體爆炸、滾用手指外面。"
    },
    {
      id: "mom_sad",
      name: "傷心難過",
      character: "眼鏡女生 / 眼淚像瀑布 / 縮在角落 / 陰雨背景",
      texts: "嗚嗚、好難過、想哭、心碎、這不行、為什麼、好難受、沒人理我、孤單、寂寞、我想哭、為什麼是我、不開心、這太慘、嗚嗚嗚、好難過喔、想哭哭、心痛、好慘、嗚嗚",
      actions: "嗚嗚用流淚、想哭用眼眶紅、心碎用手捧破碎的心。"
    },
    {
      id: "mom_angry",
      name: "極度憤怒",
      character: "眼鏡女生 / 頭頂冒火 / 咬牙切齒 / 憤怒火焰背景",
      texts: "氣死我、炸裂、不可原諒、滾、不要鬧、閉嘴、再說一次、不要臉、我的天、搞什麼、這不行、生氣、我想死、去死吧、不要跟我說話、氣炸、這太扯、你是誰、不要再來、氣死",
      actions: "氣死我用抓頭髮、炸裂用身體爆炸、滾用手指外面。"
    },
    {
      id: "mom_gift",
      name: "母親節快樂",
      character: "眼鏡女生 / 旗袍裝扮 / 手拿金元寶 / 節慶紅 background",
      texts: "恭喜、發財、大吉、紅包、春節、新年、快樂、萬事、如意、平安、健康、發財、恭喜、新年快樂、萬事如意、大吉大利、紅包拿來、新年好、發財、恭喜",
      actions: "恭喜用雙手合十、發財用拿金元寶、大吉用拿橘子。"
    },
    {
      id: "mom_work",
      name: "工作媽媽",
      character: "眼鏡女生 / 上半身襯衫 / 下半身睡褲 / 視訊會議中 / 小孩在一旁搗蛋",
      texts: "訊號不好、聽得到嗎、畫面卡住、麥克風沒開、視訊中、在家工作、快好了、沒問題、稍等一下、我要報告、會議結束、大家辛苦、視訊壞了、可以嗎、好的、有聲音嗎、有畫面嗎、視訊會議、在家中、沒問題",
      actions: "訊號不好用手抓頭、麥克風沒開用指著麥克風、視訊中用整理頭髮。"
    },
    {
      id: "mom_super",
      name: "全能媽媽",
      character: "眼鏡女生 / 披風 / 拿著鍋鏟 / 眼神發光 / 美食 background",
      texts: "吃飯囉、好好吃、都吃完、不挑食、這個讚、美食、大餐、愛心料理、吃飽飽、好滿足、加菜、好好吃、太棒了、媽媽的味道、肚子餓、想吃、開動囉、吃光光、好好吃喔、這個我愛",
      actions: "吃飯囉用敲鍋蓋、不挑食用指著蔬菜、愛心料理用比大愛心。"
    },
    {
      id: "mom_beauty",
      name: "媽媽也要美美的",
      character: "眼鏡女生 / 戴墨鏡 / 拿相機 / 旅遊背景",
      texts: "旅遊、度假、開心、拍照、美食、風景、好玩、放鬆、旅遊、度假、開心、拍照、美食、風景、好玩、放鬆、旅遊、度假、開心、拍照",
      actions: "旅遊用背行李箱、拍照用拿相機、放鬆用躺在海灘椅上。"
    },
    {
      id: "mom_cheer",
      name: "媽媽加油",
      character: "眼鏡女生 / 拉拉隊裝 / 手拿加油棒 / 加油樣",
      texts: "加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的、加油、勝利、衝啊、你是最棒的",
      actions: "加油用揮動加油棒、勝利用比2。"
    },
    {
      id: "kids_daily",
      name: "小朋友日常",
      character: "可愛小朋友 / 圓圓臉 / 書包 / 活潑開朗",
      texts: "我要玩、肚子餓、好棒喔、不要啦、我累了、放假啦、老師來了、我第一名、我要睡覺、陪我玩、我不敢、耶耶耶、我要糖果、遲到了、好開心、哭哭、看我的、我生氣了、出發吧、我最乖",
      actions: "我要玩用跳跳動作、肚子餓用摸肚子、好棒喔用拍手、不要啦用甩手撒嬌、我累了用坐地休息、放假啦用開心奔跑、老師來了用緊張站好、我第一名用舉獎盃、我要睡覺用抱枕頭、陪我玩用拉手拜託。"
    },
    {
      id: "dad_daily",
      name: "爸爸日常",
      character: "可愛爸爸 / 微胖 / 居家服 / 親切搞笑",
      texts: "交給爸爸、先睡了、爸爸累了、不要吵、吃飯啦、我來修、爸爸出門、誰弄的、今天加班、乖一點、來抱抱、買給你、別亂跑、好麻煩、爸爸生氣了、等等我、很可以、爸爸OK、超想睡、回家啦",
      actions: "交給爸爸用拍胸口、先睡了用打哈欠、爸爸累了用肩膀痠痛、不要吵用捂耳朵、吃飯啦用端飯菜、我來修用拿工具箱、爸爸出門用背公事包、誰弄的用傻眼表情、今天加班用狂敲鍵盤、乖一點用指指。"
    },
    {
      id: "shiba",
      name: "可愛柴犬",
      character: "Q版柴犬 / 圓滾滾 / 表情豐富 / 暖橘色",
      texts: "汪汪、好想你、吃飯飯、出去玩、累了柴、好開心、不要啦、睡覺中、等等我、生氣柴、太棒了、柴柴來了、給你愛心、陪我玩、肚子餓、我不想動、汪嗚、今天耍廢、笑死柴、衝啊",
      actions: "汪汪用大叫、好想你用飛撲、吃飯飯用流口水、出去玩用咬牽繩、累了柴用趴地、好開心用轉圈圈、不要啦用打滾、睡覺中用抱尾巴睡覺、等等我用小跑步、生氣柴用炸毛。"
    },
    {
      id: "cat_daily",
      name: "貓咪日常",
      character: "灰白貓咪 / 慵懶可愛 / 圓眼睛",
      texts: "喵喵、罐罐呢、睡覺中、不想動、踩踩你、朕來了、摸摸我、生氣喵、今天厭世、撒嬌中、喵嗚、我餓了、鏟屎官、陪我玩、好舒服、別吵我、想睡、發呆中、累累、開心喵",
      actions: "喵喵用舉手、罐罐呢用期待眼神、睡覺中用蜷曲睡覺。"
    },
    {
      id: "student_life",
      name: "學生生活",
      character: "學生女生 / 制服 / 青春感",
      texts: "要考試了、作業好多、我不會、下課啦、老師來了、借我抄、睡過頭、好累喔、考很好、一起玩、放學啦、遲到了、救命啊、我要畢業、頭腦空白、再等等、今天很讚、不要點我、讀書中、崩潰中",
      actions: "要考試了用緊張翻書、作業好多用抱作業山。"
    },
    {
      id: "baby_mood",
      name: "寶寶情緒",
      character: "Q版寶寶 / 包子臉 / 奶嘴",
      texts: "抱抱、餓餓、睏睏、哭哭、不要啦、開心、討抱抱、喝奶奶、爬爬、玩玩、怕怕、親親、我要這個、笑咪咪、耍賴中、寶寶委屈、撒嬌、我最可愛、晚安、早安",
      actions: "抱抱用張手、餓餓用哭哭摸肚子。"
    },
    {
      id: "foodie",
      name: "吃貨人生",
      character: "可愛女生 / 吃貨 / 圓臉幸福感",
      texts: "我要吃、飲料呢、好好吃、再一口、減肥明天、吃爆它、好餓、宵夜嗎、開動啦、甜點時間、火鍋走、炸雞讚、奶茶最高、我流口水了、今天吃啥、幸福、不能沒有吃、胖了啦、吃飽了、再來一份",
      actions: "我要吃用拿筷子、好好吃用冒愛心。"
    },
    {
      id: "lazy_day",
      name: "厭世耍廢",
      character: "宅宅女生 / 睡衣 / 黑眼圈",
      texts: "不想上班、再睡一下、好懶喔、今天廢、不要吵我、躺平中、好累、我先睡、想放假、發呆中、完全不想動、沒電了、人生好難、啊啊啊、快下班、耍廢最高、我不行了、好想睡、電量不足、厭世中",
      actions: "不想上班用趴床、躺平中用攤平。"
    },
    {
      id: "gaming",
      name: "遊戲人生",
      character: "電玩少女 / 耳機 / 興奮感",
      texts: "開打啦、我贏了、別送頭、再一場、等等排位、超神啦、斷線啦、氣死我、太爛了吧、Carry我、我要開台、輸麻了、好緊張、隊友呢、衝啊、MVP、睡不著、好好玩、我來了、電競魂",
      actions: "開打啦用握手把、我贏了用舉手歡呼。"
    },
    {
      id: "rainy_day",
      name: "下雨天",
      character: "可愛女生 / 雨衣 / 小雨傘",
      texts: "下雨啦、沒帶傘、濕答答、冷死了、想喝熱湯、今天不出門、雨停沒、鞋子濕了、塞車中、雷聲好大、窩在家、抱緊我、好想睡、陰天厭世、天氣好差、一起撐傘、發霉中、我要暖暖包、好冷喔、躲雨中",
      actions: "下雨啦用撐傘、沒帶傘用淋雨慌張。"
    },
    {
      id: "exercise",
      name: "運動加油",
      character: "運動女孩 / 馬尾 / 活力感",
      texts: "衝啊、再一下、我可以、流汗中、累爆了、健身去、今天腿日、加油加油、我要變瘦、跑起來、不要放棄、肌肉痛、深蹲中、燃燒脂肪、繼續撐、休息一下、喝水啦、好強喔、完成啦、運動魂",
      actions: "衝啊用奔跑、深蹲中用蹲姿。"
    },
    {
      id: "travel",
      name: "旅行模式",
      character: "旅遊女孩 / 相機 / 草帽",
      texts: "出發啦、拍照中、海邊耶、迷路了、我要放空、好漂亮、行李好重、飛機起飛、度假中、累到爆、吃當地美食、這裡超美、打卡中、我要買爆、旅遊魂、走吧走吧、曬黑了、早起好累、回家啦、還想玩",
      actions: "出發啦用拉行李箱、拍照中用拿相機。"
    },
    {
      id: "horror",
      name: "嚇死人了",
      character: "眼鏡女生 / 驚嚇表情 / 身體發抖",
      texts: "嚇死我、鬼啊、救命、不要過來、快跑、太恐怖了、我不敢看、嚇爛、這什麼、媽媽呀、不要鬧、好可怕、發抖中、我先逃、真的假的、尖叫中、嚇哭了、別嚇我、我要回家、心臟爆擊",
      actions: "鬼啊用尖叫、快跑用逃跑。"
    },
    {
      id: "mom_life",
      name: "媽媽日常",
      character: "可愛媽媽 / 圍裙 / 溫柔忙碌",
      texts: "快去洗澡、吃飯了、不要挑食、媽媽累了、再講一次、睡覺時間、我數到三、媽媽來了、寶貝乖、收玩具、起床啦、你最棒、不要亂跑、今天吃什麼、忙死了、抱一下、快遲到了、聽到了沒、別吵架、媽媽生氣了",
      actions: "吃飯了用端菜、媽媽累了用扶腰。"
    },
    {
      id: "love_boyfriend",
      name: "男友日常",
      character: "可愛男友 / 短髮 / 暖男風",
      texts: "想你了、抱一下、我來接你、晚安啦、別生氣、吃飯沒、我愛你、等等我、加油喔、我錯了、別難過、想見你、寶寶乖、今天很帥、我在這、陪你、衝啊、笑一個、睡醒沒、出門啦",
      actions: "想你了用愛心眼、我來接你用騎車。"
    },
    {
      id: "rabbit",
      name: "軟萌兔兔",
      character: "Q版兔子 / 粉嫩 / 軟綿綿",
      texts: "蹦蹦、愛你、胡蘿蔔呢、睡覺中、不要啦、兔兔來了、開心、累累、抱抱、我餓了、衝呀、撒嬌中、好耶、晚安、早安、一起玩、哭哭、發呆中、生氣兔、兔兔無辜",
      actions: "蹦蹦用跳躍、胡蘿蔔呢用期待。"
    },
    {
      id: "bear_cute",
      name: "可愛熊熊",
      character: "棕色小熊 / 圓滾滾 / 呆萌",
      texts: "熊抱、我來了、吃蜂蜜、睡醒了、好冷喔、開心熊、今天很棒、別吵我、耍廢中、抱緊我、累了熊、晚安熊、出門啦、加油熊、我不想動、餓了、暖暖的、好可愛、衝衝衝、傻眼熊",
      actions: "熊抱用張手、吃蜂蜜用舔蜂蜜。"
    },
    {
      id: "frog_meme",
      name: "青蛙搞笑",
      character: "Q版青蛙 / 表情包風格",
      texts: "笑死、蛤、真的假的、我不懂、太扯了、先不要、我要逃、累了、今天很怪、哭啊、頂不住、超煩、加油啦、睡爆、我OK、衝一波、好欸、沒救了、你說啥、別鬧啦",
      actions: "蛤用歪頭、我要逃用奔跑。"
    },
    {
      id: "penguin",
      name: "企鵝日常",
      character: "小企鵝 / 圓肚肚 / 呆萌感",
      texts: "滑倒啦、冷死了、抱抱、企鵝來了、吃魚魚、走吧、跌倒、開心搖搖、晚安、早安、今天耍廢、不要啦、等等我、好朋友、愛你喔、睡不醒、衝衝衝、發呆中、我要玩、企鵝無奈",
      actions: "滑倒啦用滑倒姿勢、吃魚魚用抱魚。"
    },
    {
      id: "salaryman",
      name: "社畜人生",
      character: "男上班族 / 黑眼圈 / 西裝",
      texts: "加班中、想離職、咖啡呢、今天也撐住、主管來了、會議地獄、我好累、還沒做完、快下班、人生好難、肚子餓、先摸魚、週末在哪、不要找我、壓力山大、救命啊、今天很忙、我要放假、再撐一下、睡著了",
      actions: "加班中用敲電腦、主管來了用驚嚇。"
    },
    {
      id: "hamster",
      name: "倉鼠小劇場",
      character: "小倉鼠 / 圓滾滾 / 臉頰鼓鼓",
      texts: "塞滿嘴、偷吃中、滾來滾去、不要抓我、我很忙、倉鼠開心、累扁了、今天很棒、肚子餓、跑滾輪、睡覺中、愛你、驚呆了、鼠鼠無奈、加油呀、發呆中、衝呀、不要啦、抱抱、鼠鼠生氣",
      actions: "塞滿嘴用鼓臉、跑滾輪用狂奔。"
    },
    {
      id: "idol_fan",
      name: "追星人生",
      character: "追星女孩 / 應援棒 / 激動感",
      texts: "我可以、太帥了、尖叫中、我要哭了、神仙顏值、應援中、見到本人了、幸福死、我的偶像、太可愛了、我要收藏、衝演唱會、愛爆、瘋掉、排隊中、手燈準備、好感動、今天圓滿、應援成功、還想再看",
      actions: "尖叫中用雙手尖叫、應援中用揮手燈。"
    },
    {
      id: "fortune_cat",
      name: "招財貓咪",
      character: "招財貓 / 金幣 / 喜氣洋洋",
      texts: "發財啦、賺大錢、財神到、恭喜發財、開運中、好運來、金運爆棚、招財進寶、紅包拿來、生意興隆、旺旺來、今天超順、財氣滿滿、加薪啦、買彩券、開工大吉、中獎啦、暴富、一路發、好運貓",
      actions: "發財啦用灑金幣、招財進寶用招手。"
    },
    {
      id: "ghost_funny",
      name: "搞笑幽靈",
      character: "Q版小幽靈 / 白白軟軟 / 愛惡作劇",
      texts: "嚇你喔、飄過去、鬼來啦、不要怕、今晚不睡、我在你後面、嘿嘿嘿、好冷喔、偷偷來、你看不到我、晚安嚇你、一起飄、鬼鬼祟祟、驚不驚喜、我超可愛、靈魂出竅、別尖叫、鬧一下、半夜見、鬼混中",
      actions: "飄過去用漂浮、嘿嘿嘿用壞笑。"
    },
    {
      id: "weekend",
      name: "週末模式",
      character: "休閒女生 / 居家感 / 放鬆",
      texts: "放假啦、睡到飽、今天不出門、追劇中、耍廢中、好幸福、外送到了、躺平、不要找我、下午茶、超放鬆、懶洋洋、今天很爽、再睡一下、窩在家、吃零食、週末快樂、按摩一下、放空中、明天不想上班",
      actions: "睡到飽用抱棉被、追劇中用看平板。"
    },
    {
      id: "cute_duck",
      name: "小黃鴨",
      character: "黃色小鴨 / 呆萌 / 圓滾滾",
      texts: "呱呱、游泳去、跌倒啦、鴨鴨來了、吃飯飯、睡覺啦、一起玩、衝呀、我好累、不要啦、開心鴨、呆住了、快樂出發、今天很棒、肚子餓、鴨鴨愛你、泡澡中、發呆、晚安鴨、笑死鴨",
      actions: "呱呱用張嘴叫、游泳去用游泳圈。"
    },
    {
      id: "nurse",
      name: "護理師日常",
      character: "可愛護理師 / 護士帽 / 溫柔專業",
      texts: "量體溫囉、辛苦了、請休息、今天值班、別緊張、記得吃藥、加油喔、好好睡、病人好多、累翻了、馬上來、收到、請戴口罩、照顧自己、我先忙、打針囉、忙碌中、請等等、沒問題、平安健康",
      actions: "量體溫囉用拿耳溫槍、打針囉用拿針筒。"
    },
    {
      id: "teacher",
      name: "老師日常",
      character: "可愛老師 / 眼鏡 / 溫柔但嚴格",
      texts: "上課囉、安靜、交作業、考試開始、辛苦了、很好、不要聊天、下課、你很棒、專心點、老師來了、今天小考、再想想、快坐好、不要睡覺、認真一點、老師累了、回答問題、做得很好、明天見",
      actions: "上課囉用拿課本、安靜用比噓。"
    },
    {
      id: "doctor",
      name: "醫生人生",
      character: "Q版醫生 / 白袍 / 專業親切",
      texts: "哪裡不舒服、記得休息、多喝水、不要熬夜、辛苦了、檢查一下、今天很忙、請等等、保持健康、別擔心、恢復中、量血壓、深呼吸、按時吃藥、沒問題、病人好多、好好照顧自己、累了醫生、平安就好、健康第一",
      actions: "哪裡不舒服用問診、量血壓用血壓計。"
    },
    {
      id: "coffee_addict",
      name: "咖啡成癮",
      character: "咖啡女孩 / 黑眼圈 / 馬克杯",
      texts: "需要咖啡、沒咖啡不行、今天第幾杯、提神一下、我快睡著、咖啡救我、先喝再說、續命中、苦中作樂、聞到香味了、咖啡時間、滿血復活、早八地獄、加班配咖啡、喝爆、好苦但好爽、精神來了、我要冰美式、今天超睏、咖啡萬歲",
      actions: "需要咖啡用抱咖啡杯、續命中用靈魂出竅。"
    }
  ];

  const STYLES_DB = [
    {
      id: "candy",
      name: "彩色糖果風",
      description: "高飽和粉嫩配色、像糖果般繽紛可愛，文字有漸層與白色粗外框，適合活潑、戀愛、搞笑主題。",
      features: ["高彩度活潑色彩", "漸層文字效果", "白色粗描邊", "圓潤Q版角色", "LINE貼圖感強烈"],
      prompt: "文字使用彩色糖果風，大字體、可愛漸層配色、粗白邊、繽紛但整體協調。"
    },
    {
      id: "rounded_handwriting",
      name: "圓潤手寫風",
      description: "像手寫筆記般自然可愛，筆畫圓滑柔和，適合溫暖日常與療癒系貼圖。",
      features: ["手寫感字體", "柔和圓角", "親切溫暖", "閱讀清楚", "適合日常對話"],
      prompt: "文字使用圓潤手寫風，粗體可愛、筆畫柔和，搭配白邊增加清晰度。"
    },
    {
      id: "bold_simple",
      name: "簡約加粗體",
      description: "乾淨俐落的大字設計，強調訊息辨識度，適合辦公室、快速回覆、實用型貼圖。",
      features: ["粗黑體設計", "高辨識度", "簡潔有力", "適合小尺寸閱讀", "偏實用風格"],
      prompt: "文字使用簡約加粗體，大型粗體字、乾淨俐落、白色描邊，提升閱讀性。"
    },
    {
      id: "manga",
      name: "日系漫畫風",
      description: "具有日系漫畫效果線與情緒張力，文字帶漫畫感與擬聲效果，適合誇張表情與情緒主題。",
      features: ["漫畫效果線", "情緒張力強", "誇張表情", "日系動畫感", "動態構圖"],
      prompt: "文字使用日系漫畫風，搭配漫畫效果線、情緒字體與誇張動態感。"
    },
    {
      id: "korean_soft",
      name: "韓系奶油風",
      description: "低飽和奶油色調，整體柔軟溫暖，有韓系插畫感與療癒氛圍。",
      features: ["奶油色系", "低飽和配色", "溫柔療癒", "韓系插畫感", "簡潔可愛"],
      prompt: "使用韓系奶油風配色，柔和低飽和色彩、溫暖可愛、大字體白描邊。"
    },
    {
      id: "pastel",
      name: "夢幻粉彩風",
      description: "大量粉彩與柔光效果，適合少女感、夢幻系與甜美主題。",
      features: ["粉彩色調", "柔光效果", "少女感", "夢幻氛圍", "甜美可愛"],
      prompt: "文字使用夢幻粉彩風，粉嫩漸層、柔光感、可愛白邊字體。"
    },
    {
      id: "retro",
      name: "復古港風",
      description: "帶有復古漫畫與港風招牌色彩，強烈對比與懷舊感。",
      features: ["復古色彩", "港風元素", "懷舊漫畫感", "高對比", "特色字體"],
      prompt: "使用復古港風文字設計，鮮明撞色、復古漫畫感、粗體字與白描邊。"
    },
    {
      id: "minimal",
      name: "極簡留白風",
      description: "大量白色留白與簡潔線條，畫面乾淨高級。",
      features: ["大量留白", "簡潔構圖", "高級感", "乾淨舒服", "低干擾"],
      prompt: "使用極簡留白風，簡潔粗體字、留白明顯、畫面乾淨。"
    },
    {
      id: "emoji",
      name: "Emoji 表情風",
      description: "像大型表情符號般誇張可愛，強調臉部情緒與趣味性。",
      features: ["大表情", "誇張反應", "可愛搞笑", "高情緒辨識", "貼圖感強"],
      prompt: "使用Emoji表情風，大臉誇張表情、鮮豔文字與可愛動態感。"
    },
    {
      id: "watercolor",
      name: "水彩療癒風",
      description: "水彩渲染感與柔和筆觸，帶有溫暖療癒氣氛。",
      features: ["水彩筆觸", "柔和漸層", "療癒感", "自然色彩", "文青感"],
      prompt: "使用水彩療癒風，柔和水彩色塊、淡雅字體與溫暖氛圍。"
    },
    {
      id: "pixel",
      name: "像素遊戲風",
      description: "復古電玩像素風格，角色與文字像遊戲UI。",
      features: ["像素感", "遊戲風格", "復古電玩", "趣味性高", "低解析可愛感"],
      prompt: "使用像素遊戲風，8bit像素感文字與角色設計，帶復古電玩氛圍。"
    },
    {
      id: "sticker_pop",
      name: "潮流貼紙風",
      description: "像潮流品牌貼紙，具有粗邊框、撞色與街頭感。",
      features: ["街頭潮流", "粗外框", "撞色設計", "貼紙感", "時尚活潑"],
      prompt: "使用潮流貼紙風，粗描邊、撞色文字與街頭潮流感。"
    }
  ];

  const OPTIONS = {
    layouts: ["4x4", "4x6"],
    fontSizes: ["大", "中", "極大"],
    fontColors: ["自動活潑配色", "單一粉色系", "馬卡龍色系", "黑底白字", "每格隨機顏色"],
    textPositions: ["每格依構圖變化", "統一置底", "統一置頂", "統一在人物旁邊"],
    borders: ["中白邊", "粗白邊", "細白邊", "無白邊，用陰影替代"],
    styles: STYLES_DB.map((style) => style.name)
  };

  const state = {
    layout: "4x4",
    selectedTopicId: "couple",
    character: "",
    texts: "",
    actions: "",
    fontSize: "大",
    fontColor: "自動活潑配色",
    textPosition: "每格依構圖變化",
    border: "中白邊",
    customColor: "可空白；例如：粉藍+奶油黃",
    style: "彩色糖果風",
    copied: false
  };

  const imageState = {
    layout: "4x4",
    originalImage: null,
    stickers: [],
    isProcessing: false,
    progress: 0,
    bgType: "green",
    isZipping: false
  };

  const el = {
    tabButtons: document.querySelectorAll(".tab-button"),
    tabPanels: {
      generator: document.getElementById("tab-generator"),
      processor: document.getElementById("tab-processor")
    },
    layoutSelect: document.getElementById("select-layout"),
    topicSelect: document.getElementById("select-topic"),
    characterInput: document.getElementById("input-character"),
    textsTextarea: document.getElementById("textarea-texts"),
    actionsTextarea: document.getElementById("textarea-actions"),
    fontSizeSelect: document.getElementById("select-fontsize"),
    borderSelect: document.getElementById("select-border"),
    styleSelect: document.getElementById("select-style"),
    positionSelect: document.getElementById("select-position"),
    colorSelect: document.getElementById("select-color"),
    customColorInput: document.getElementById("input-custom-color"),
    promptResult: document.getElementById("prompt-result"),
    copyButton: document.getElementById("btn-copy"),
    uploadZone: document.getElementById("upload-zone"),
    fileInput: document.getElementById("file-input"),
    processorPanel: document.getElementById("processor-panel"),
    originalPreview: document.getElementById("original-preview"),
    layoutButtons: document.querySelectorAll(".layout-button"),
    splitButton: document.getElementById("btn-split"),
    processButton: document.getElementById("btn-process"),
    restoreButton: document.getElementById("btn-restore"),
    downloadButton: document.getElementById("btn-download"),
    stickerGrid: document.getElementById("sticker-grid"),
    stickerEmpty: document.getElementById("sticker-empty"),
    toast: document.getElementById("toast")
  };

  const setToast = (message, type = "success") => {
    el.toast.textContent = message;
    el.toast.className = `toast ${type}`;
    el.toast.classList.remove("hidden");
    setTimeout(() => {
      el.toast.classList.add("hidden");
    }, 2800);
  };

  const populateSelect = (select, options) => {
    select.innerHTML = "";
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      select.appendChild(option);
    });
  };

  const populateTopicSelect = () => {
    el.topicSelect.innerHTML = "";
    TOPICS_DB.forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic.id;
      option.textContent = topic.name;
      el.topicSelect.appendChild(option);
    });
  };

  const syncTopic = () => {
    const topic = TOPICS_DB.find((item) => item.id === state.selectedTopicId);
    if (!topic) return;
    state.character = topic.character;
    state.texts = topic.texts;
    state.actions = topic.actions;
    el.characterInput.value = state.character;
    el.textsTextarea.value = state.texts;
    el.actionsTextarea.value = state.actions;
  };

  const buildPrompt = () => {
    const topic = TOPICS_DB.find((item) => item.id === state.selectedTopicId);
    const topicName = topic ? topic.name : "自訂主題";
    const cols = 4;
    const rows = state.layout === "4x4" ? 4 : 6;
    const gridCount = cols * rows;

    const safeTexts = state.texts || "";
    const textArray = safeTexts
      .split(/[、,，]/)
      .map((t) => t.trim())
      .filter(Boolean);
    const visibleTexts = textArray.slice(0, gridCount).join("、");

    let extraColorNote = "";
    if (state.customColor && state.customColor !== "可空白；例如：粉藍+奶油黃") {
      extraColorNote = `\n特別指定顏色：${state.customColor}`;
    }

    const styleObj = STYLES_DB.find((item) => item.name === state.style);
    const stylePrompt = styleObj ? styleObj.prompt : `文字風格使用「${state.style}」。`;

    return `請依照參考照片，設計一張 Q 版 LINE 貼圖整張圖。

主題：${topicName}
角色設定：${state.character}

目標：製作一張 ${state.layout} 排版的 LINE 貼圖總表，共 ${gridCount} 張小貼圖。

畫風：可愛 Q 版、LINE 貼圖風格、大頭小身體、表情清楚、動作誇張可愛、乾淨白色背景、每一格貼圖之間要有明顯間距。

排版：${cols} 欄 × ${rows} 列。每格都是同一個角色，但表情與動作不同。

貼圖文字：
${visibleTexts || state.texts}

重要：${state.layout} 請只使用前 ${gridCount} 句文字(有少請依整體風格補滿)，從左到右、從上到下排列。

文字樣式：文字請使用繁體中文，字體要${state.fontSize}、粗體、可愛清楚。文字顏色使用「${state.fontColor}」。${stylePrompt}每個字都要有${state.border}，讓文字在白色背景與角色旁邊都清楚可讀。文字位置使用${state.textPosition}，但不可遮住角色臉部。若使用彩色、漸層或每格不同顏色，請讓顏色搭配主題，不要過於雜亂。${extraColorNote}

限制：不要簡體中文、不要亂字、不要多字、不要英文字（除非我要求的文字）、不要浮水印、不要 Logo。

安全距離：請加大每格之間的留白與安全距離，人物和文字都不要靠太近邊界。每張小貼圖都要完整置中，方便後續切割成獨立 LINE 貼圖。

動作建議：
${state.actions}

每一句文字都要搭配相符表情與動作。整體要可愛、乾淨、角色一致、適合做成 LINE 貼圖。`;
  };

  const updatePrompt = () => {
    el.promptResult.value = buildPrompt();
  };

  const updateCopyState = (copied) => {
    state.copied = copied;
    if (copied) {
      el.copyButton.classList.add("is-copied");
      el.copyButton.innerHTML = '<i data-lucide="check"></i> 已複製成果！';
    } else {
      el.copyButton.classList.remove("is-copied");
      el.copyButton.innerHTML = '<i data-lucide="copy"></i> 點我複製提示詞';
    }
    lucide.createIcons();
  };

  const handleCopy = () => {
    const promptText = el.promptResult.value;
    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = promptText;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
        updateCopyState(true);
        setTimeout(() => updateCopyState(false), 2000);
      } catch (err) {
        console.error("複製失敗", err);
      }
      document.body.removeChild(textarea);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(promptText)
        .then(() => {
          updateCopyState(true);
          setTimeout(() => updateCopyState(false), 2000);
        })
        .catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  };

  const detectBackgroundType = (data) => {
    let greenScore = 0;
    let whiteScore = 0;
    const sampleRate = 10;

    for (let i = 0; i < data.length; i += 4 * sampleRate) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const greenness = (g * 2 - r - b) / 510;
      if (greenness > 0.15) greenScore++;

      const avg = (r + g + b) / 3;
      const isGray = Math.abs(r - avg) < 20 && Math.abs(g - avg) < 20 && Math.abs(b - avg) < 20;
      if (avg > 230 && isGray) whiteScore++;
    }

    return greenScore > whiteScore ? "green" : "white";
  };

  const isBackgroundCandidate = (r, g, b) => {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const brightness = (r + g + b) / 3;
    const saturation = max === 0 ? 0 : (max - min) / max;
    return brightness > 210 && saturation < 0.18;
  };

  const floodFillBackground = (imageData, width, height, isCandidate) => {
    const visited = new Array(width * height).fill(false);
    const queue = [];
    const seedPoints = [
      [0, 0],
      [width - 1, 0],
      [0, height - 1],
      [width - 1, height - 1]
    ];

    seedPoints.forEach(([x, y]) => {
      const idx = y * width + x;
      const pixelIdx = idx * 4;
      const r = imageData[pixelIdx];
      const g = imageData[pixelIdx + 1];
      const b = imageData[pixelIdx + 2];
      if (isCandidate(r, g, b)) {
        queue.push([x, y]);
        visited[idx] = true;
      }
    });

    let qIdx = 0;
    while (qIdx < queue.length) {
      const [x, y] = queue[qIdx++];
      const neighbors = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1]
      ];

      neighbors.forEach(([nx, ny]) => {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const nIdx = ny * width + nx;
          if (!visited[nIdx]) {
            const nPixelIdx = nIdx * 4;
            const nr = imageData[nPixelIdx];
            const ng = imageData[nPixelIdx + 1];
            const nb = imageData[nPixelIdx + 2];
            if (isCandidate(nr, ng, nb)) {
              queue.push([nx, ny]);
              visited[nIdx] = true;
            }
          }
        }
      });
    }

    return visited;
  };

  const handleFile = (file) => {
    if (!file.type.startsWith("image/")) {
      setToast("格式不支援，請上傳 PNG / JPG / WEBP", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        imageState.originalImage = img;
        imageState.stickers = [];
        updateProcessorView();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const updateProcessorView = () => {
    if (!imageState.originalImage) {
      el.uploadZone.classList.remove("hidden");
      el.processorPanel.classList.add("hidden");
      return;
    }

    el.uploadZone.classList.add("hidden");
    el.processorPanel.classList.remove("hidden");
    el.originalPreview.innerHTML = "";
    const img = document.createElement("img");
    img.src = imageState.originalImage.src;
    img.alt = "preview";
    el.originalPreview.appendChild(img);
    updateHeaderButtons();
    renderStickers();
  };

  const updateHeaderButtons = () => {
    const hasStickers = imageState.stickers.length > 0;
    el.splitButton.classList.toggle("hidden", hasStickers);
    el.processButton.classList.toggle("hidden", !hasStickers);
    el.restoreButton.classList.toggle("hidden", !hasStickers);
    el.downloadButton.classList.toggle("hidden", !hasStickers);

    const processingText = imageState.isProcessing
      ? `處理中 ${imageState.progress}%`
      : "一鍵全自動去背 + 加邊";
    el.processButton.innerHTML = `<i data-lucide="eraser"></i>${processingText}`;
    lucide.createIcons();

    el.processButton.disabled = imageState.isProcessing;
    el.downloadButton.disabled = imageState.isZipping;
  };

  const splitGrid = () => {
    if (!imageState.originalImage) return;

    const cols = 4;
    const rows = imageState.layout === "4x4" ? 4 : 6;
    const cellWidth = imageState.originalImage.width / cols;
    const cellHeight = imageState.originalImage.height / rows;

    const checkCanvas = document.createElement("canvas");
    checkCanvas.width = imageState.originalImage.width;
    checkCanvas.height = imageState.originalImage.height;
    const checkCtx = checkCanvas.getContext("2d");
    let detectedType = "green";
    if (checkCtx) {
      checkCtx.drawImage(imageState.originalImage, 0, 0);
      const imageData = checkCtx.getImageData(0, 0, checkCanvas.width, checkCanvas.height);
      detectedType = detectBackgroundType(imageData.data);
      imageState.bgType = detectedType;
      if (detectedType === "green") {
        setToast("偵測到「綠色」背景，將使用綠幕去背。", "success");
      } else {
        setToast("偵測到「白色」背景，將使用亮度敏感演算法去背。", "success");
      }
    }

    const newStickers = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const canvas = document.createElement("canvas");
        canvas.width = 370;
        canvas.height = 320;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (detectedType === "green") {
            ctx.fillStyle = "#00FF00";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          const sourceX = c * cellWidth;
          const sourceY = r * cellHeight;
          ctx.drawImage(
            imageState.originalImage,
            sourceX,
            sourceY,
            cellWidth,
            cellHeight,
            0,
            0,
            canvas.width,
            canvas.height
          );

          newStickers.push({
            id: r * cols + c + 1,
            originalCanvas: canvas,
            processedCanvas: null,
            mainThumbnail: null,
            tabThumbnail: null,
            isRemovingBg: false,
            hasError: null
          });
        }
      }
    }

    imageState.stickers = newStickers;
    updateHeaderButtons();
    renderStickers();
  };

  const processSticker = async (sticker) => {
    const canvas = sticker.originalCanvas;
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return sticker;

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    if (imageState.bgType === "white") {
      const isBackground = floodFillBackground(data, width, height, isBackgroundCandidate);
      for (let i = 0; i < isBackground.length; i++) {
        if (isBackground[i]) {
          data[i * 4 + 3] = 0;
        }
      }
    } else {
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] === 0) continue;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const greenness = (g * 2 - r - b) / 510;
        if (greenness > 0.25) {
          data[i + 3] = 0;
        } else if (greenness > 0.05) {
          const factor = (greenness - 0.05) / (0.25 - 0.05);
          data[i + 3] = Math.round(255 * (1 - factor));
        }
        if (g > r && g > b) {
          data[i + 1] = (r + b) / 2;
        }
      }
    }

    const erodedData = new Uint8ClampedArray(data);
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = (y * width + x) * 4;
        if (data[i + 3] > 0) {
          let hasTransparentNeighbor = false;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (data[((y + dy) * width + (x + dx)) * 4 + 3] === 0) {
                hasTransparentNeighbor = true;
                break;
              }
            }
            if (hasTransparentNeighbor) break;
          }
          if (hasTransparentNeighbor) {
            erodedData[i + 3] = Math.max(0, data[i + 3] - 100);
          }
        }
      }
    }

    const processedCanvas = document.createElement("canvas");
    processedCanvas.width = 370;
    processedCanvas.height = 320;
    const pCtx = processedCanvas.getContext("2d");
    if (!pCtx) return sticker;
    pCtx.clearRect(0, 0, 370, 320);
    pCtx.putImageData(new ImageData(erodedData, width, height), 0, 0);

    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = 370;
    finalCanvas.height = 320;
    const fCtx = finalCanvas.getContext("2d");
    if (!fCtx) return sticker;
    fCtx.clearRect(0, 0, 370, 320);

    fCtx.save();
    fCtx.shadowColor = "white";
    fCtx.shadowBlur = 0;
    for (let angle = 0; angle < 360; angle += 15) {
      const rad = (angle * Math.PI) / 180;
      fCtx.shadowOffsetX = Math.cos(rad) * 7;
      fCtx.shadowOffsetY = Math.sin(rad) * 7;
      fCtx.drawImage(processedCanvas, 0, 0);
    }
    fCtx.restore();

    fCtx.save();
    fCtx.shadowColor = "rgba(0,0,0,0.3)";
    fCtx.shadowBlur = 10;
    fCtx.shadowOffsetX = 3;
    fCtx.shadowOffsetY = 3;
    fCtx.drawImage(processedCanvas, 0, 0);
    fCtx.restore();

    fCtx.drawImage(processedCanvas, 0, 0);

    const pixels = fCtx.getImageData(0, 0, 370, 320).data;
    let minX = 370;
    let minY = 320;
    let maxX = 0;
    let maxY = 0;
    let hasPixels = false;
    for (let y = 0; y < 320; y++) {
      for (let x = 0; x < 370; x++) {
        const i = (y * 370 + x) * 4;
        if (pixels[i + 3] > 0) {
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
          hasPixels = true;
        }
      }
    }

    const fitCanvas = document.createElement("canvas");
    fitCanvas.width = 370;
    fitCanvas.height = 320;
    const fitCtx = fitCanvas.getContext("2d");
    if (fitCtx) {
      fitCtx.clearRect(0, 0, 370, 320);
      if (hasPixels) {
        const contentW = Math.max(1, maxX - minX + 1);
        const contentH = Math.max(1, maxY - minY + 1);
        const targetW = 350;
        const targetH = 300;
        const scale = Math.min(targetW / contentW, targetH / contentH, 1);
        const drawW = contentW * scale;
        const drawH = contentH * scale;
        const offX = (370 - drawW) / 2;
        const offY = (320 - drawH) / 2;
        fitCtx.drawImage(finalCanvas, minX, minY, contentW, contentH, offX, offY, drawW, drawH);
      }
    }

    const mainThumb = document.createElement("canvas");
    mainThumb.width = 240;
    mainThumb.height = 240;
    const mtCtx = mainThumb.getContext("2d");
    if (mtCtx) {
      mtCtx.clearRect(0, 0, 240, 240);
      const scale = Math.min(240 / 370, 240 / 320);
      const dw = 370 * scale;
      const dh = 320 * scale;
      mtCtx.drawImage(fitCanvas, (240 - dw) / 2, (240 - dh) / 2, dw, dh);
    }

    const tabThumb = document.createElement("canvas");
    tabThumb.width = 96;
    tabThumb.height = 74;
    const ttCtx = tabThumb.getContext("2d");
    if (ttCtx) {
      ttCtx.clearRect(0, 0, 96, 74);
      const scale = Math.min(96 / 370, 74 / 320);
      const dw = 370 * scale;
      const dh = 320 * scale;
      ttCtx.drawImage(fitCanvas, (96 - dw) / 2, (74 - dh) / 2, dw, dh);
    }

    return {
      ...sticker,
      processedCanvas: fitCanvas,
      mainThumbnail: mainThumb,
      tabThumbnail: tabThumb,
      isRemovingBg: false
    };
  };

  const renderStickers = () => {
    el.stickerGrid.innerHTML = "";
    if (imageState.stickers.length === 0) {
      el.stickerEmpty.classList.remove("hidden");
      return;
    }
    el.stickerEmpty.classList.add("hidden");
    const fragment = document.createDocumentFragment();

    imageState.stickers.forEach((sticker) => {
      const card = document.createElement("div");
      card.className = "sticker-card";

      const wrap = document.createElement("div");
      wrap.className = "sticker-canvas-wrap";

      const canvas = document.createElement("canvas");
      const source = sticker.processedCanvas || sticker.originalCanvas;
      canvas.width = source.width;
      canvas.height = source.height;
      canvas.getContext("2d")?.drawImage(source, 0, 0);
      wrap.appendChild(canvas);

      const index = document.createElement("div");
      index.className = "sticker-index";
      index.textContent = `#${sticker.id.toString().padStart(2, "0")}`;
      wrap.appendChild(index);

      const download = document.createElement("button");
      download.className = "sticker-download";
      download.setAttribute("data-id", sticker.id);
      download.innerHTML = '<i data-lucide="download"></i>';
      wrap.appendChild(download);

      if (sticker.isRemovingBg) {
        const loading = document.createElement("div");
        loading.className = "sticker-loading";
        loading.innerHTML = '<div class="spinner"></div>';
        wrap.appendChild(loading);
      }

      const meta = document.createElement("div");
      meta.className = "sticker-meta";
      const status = document.createElement("span");
      status.textContent = sticker.processedCanvas ? "已去背" : "原始圖";
      meta.appendChild(status);
      if (sticker.processedCanvas) {
        const done = document.createElement("i");
        done.setAttribute("data-lucide", "check");
        meta.appendChild(done);
      }

      card.appendChild(wrap);
      card.appendChild(meta);
      fragment.appendChild(card);
    });

    el.stickerGrid.appendChild(fragment);
    lucide.createIcons();
  };

  const processAll = async () => {
    if (imageState.stickers.length === 0) return;
    imageState.isProcessing = true;
    imageState.progress = 0;
    updateHeaderButtons();

    for (let i = 0; i < imageState.stickers.length; i++) {
      imageState.stickers[i].isRemovingBg = true;
      renderStickers();
      await new Promise((resolve) => setTimeout(resolve, 10));
      try {
        imageState.stickers[i] = await processSticker(imageState.stickers[i]);
      } catch (err) {
        console.error("Error processing sticker", i, err);
        imageState.stickers[i].isRemovingBg = false;
        imageState.stickers[i].hasError = "去背失敗";
      }
      imageState.progress = Math.round(((i + 1) / imageState.stickers.length) * 100);
      updateHeaderButtons();
      renderStickers();
    }

    imageState.isProcessing = false;
    updateHeaderButtons();
    setToast("全部貼圖處理完成！", "success");
  };

  const restoreAll = () => {
    imageState.stickers = imageState.stickers.map((sticker) => ({
      ...sticker,
      processedCanvas: null,
      mainThumbnail: null,
      tabThumbnail: null,
      isRemovingBg: false
    }));
    renderStickers();
    setToast("已還原所有原圖", "success");
  };

  const downloadZip = async () => {
    if (imageState.stickers.length === 0 || imageState.isZipping) return;
    imageState.isZipping = true;
    updateHeaderButtons();

    try {
      const zip = new JSZip();
      const stickersFolder = zip.folder("stickers");
      const thumbnailsFolder = zip.folder("thumbnails");

      for (let i = 0; i < imageState.stickers.length; i++) {
        const sticker = imageState.stickers[i];
        const fileName = (i + 1).toString().padStart(2, "0");
        const sourceCanvas = sticker.processedCanvas || sticker.originalCanvas;

        const mainBlob = await new Promise((resolve) => sourceCanvas.toBlob(resolve, "image/png"));
        if (mainBlob) stickersFolder.file(`${fileName}.png`, mainBlob);

        if (sticker.mainThumbnail) {
          const thumbBlob = await new Promise((resolve) => sticker.mainThumbnail.toBlob(resolve, "image/png"));
          if (thumbBlob) thumbnailsFolder.file(`main_${fileName}.png`, thumbBlob);
        }
        if (sticker.tabThumbnail) {
          const tabBlob = await new Promise((resolve) => sticker.tabThumbnail.toBlob(resolve, "image/png"));
          if (tabBlob) thumbnailsFolder.file(`tab_${fileName}.png`, tabBlob);
        }
      }

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = `line_stickers_${Date.now()}.zip`;
      link.click();
      URL.revokeObjectURL(url);
      setToast("ZIP 打包下載中...", "success");
    } catch (err) {
      console.error(err);
      setToast("打包失敗，請重試", "error");
    } finally {
      imageState.isZipping = false;
      updateHeaderButtons();
    }
  };

  const downloadSingle = (stickerId) => {
    const sticker = imageState.stickers.find((item) => item.id === stickerId);
    if (!sticker) return;
    const canvas = sticker.processedCanvas || sticker.originalCanvas;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `sticker_${sticker.id.toString().padStart(2, "0")}.png`;
    link.click();
  };

  const bindEvents = () => {
    el.tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tab = button.dataset.tab;
        el.tabButtons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
        Object.entries(el.tabPanels).forEach(([key, panel]) => {
          panel.classList.toggle("is-active", key === tab);
        });
      });
    });

    el.layoutSelect.addEventListener("change", (event) => {
      state.layout = event.target.value;
      updatePrompt();
    });

    el.topicSelect.addEventListener("change", (event) => {
      state.selectedTopicId = event.target.value;
      syncTopic();
      updatePrompt();
    });

    el.characterInput.addEventListener("input", (event) => {
      state.character = event.target.value;
      updatePrompt();
    });

    el.textsTextarea.addEventListener("input", (event) => {
      state.texts = event.target.value;
      updatePrompt();
    });

    el.actionsTextarea.addEventListener("input", (event) => {
      state.actions = event.target.value;
      updatePrompt();
    });

    el.fontSizeSelect.addEventListener("change", (event) => {
      state.fontSize = event.target.value;
      updatePrompt();
    });

    el.borderSelect.addEventListener("change", (event) => {
      state.border = event.target.value;
      updatePrompt();
    });

    el.styleSelect.addEventListener("change", (event) => {
      state.style = event.target.value;
      updatePrompt();
    });

    el.positionSelect.addEventListener("change", (event) => {
      state.textPosition = event.target.value;
      updatePrompt();
    });

    el.colorSelect.addEventListener("change", (event) => {
      state.fontColor = event.target.value;
      updatePrompt();
    });

    el.customColorInput.addEventListener("focus", () => {
      if (state.customColor.includes("可空白")) {
        state.customColor = "";
        el.customColorInput.value = "";
      }
    });

    el.customColorInput.addEventListener("input", (event) => {
      state.customColor = event.target.value;
      updatePrompt();
    });

    el.copyButton.addEventListener("click", handleCopy);

    el.uploadZone.addEventListener("click", () => el.fileInput.click());
    el.uploadZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      el.uploadZone.classList.add("is-dragging");
    });
    el.uploadZone.addEventListener("dragleave", () => {
      el.uploadZone.classList.remove("is-dragging");
    });
    el.uploadZone.addEventListener("drop", (event) => {
      event.preventDefault();
      el.uploadZone.classList.remove("is-dragging");
      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        handleFile(event.dataTransfer.files[0]);
      }
    });
    el.fileInput.addEventListener("change", (event) => {
      if (event.target.files && event.target.files[0]) {
        handleFile(event.target.files[0]);
      }
    });

    el.layoutButtons.forEach((button) => {
      button.addEventListener("click", () => {
        imageState.layout = button.dataset.layout;
        el.layoutButtons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
      });
    });

    el.splitButton.addEventListener("click", splitGrid);
    el.processButton.addEventListener("click", processAll);
    el.restoreButton.addEventListener("click", restoreAll);
    el.downloadButton.addEventListener("click", downloadZip);

    el.stickerGrid.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target || !target.dataset.id) return;
      downloadSingle(Number(target.dataset.id));
    });
  };

  const init = () => {
    populateSelect(el.layoutSelect, OPTIONS.layouts);
    populateTopicSelect();
    populateSelect(el.fontSizeSelect, OPTIONS.fontSizes);
    populateSelect(el.borderSelect, OPTIONS.borders);
    populateSelect(el.styleSelect, OPTIONS.styles);
    populateSelect(el.positionSelect, OPTIONS.textPositions);
    populateSelect(el.colorSelect, OPTIONS.fontColors);

    el.layoutSelect.value = state.layout;
    el.topicSelect.value = state.selectedTopicId;
    el.fontSizeSelect.value = state.fontSize;
    el.borderSelect.value = state.border;
    el.styleSelect.value = state.style;
    el.positionSelect.value = state.textPosition;
    el.colorSelect.value = state.fontColor;
    el.customColorInput.value = state.customColor;

    syncTopic();
    updatePrompt();
    updateCopyState(false);
    bindEvents();
    updateProcessorView();
    lucide.createIcons();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
