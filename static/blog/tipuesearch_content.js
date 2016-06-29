var tipuesearch = {"pages":[{"text":"w18 心得報告及自評 自評成績 : 90分 這一週的作業是依照之前所學的畫出一個2D的網際繪圖及利用Onshape協同繪出齒輪並組合。 2D的網際繪圖我選擇改變之前所繪製的abcd英文字母，我將A改為粉色，並將排序變為ACBD，且垂直及水平都有，程式是先將ABCD四個字母繪製出來，再將它們以 return head_str + chain_str + b(0, 0) + a(0+65, 0) + d(0+65 2, 0) + c(0+65 3, 0) +.....+ tail_str 組合起來，b(0,0)表示字母b在點(0,0)的位置，將所有字母的原點定義好即完成。 2D網際繪圖網址: http://2016springcdbg5-40323204.rhcloud.com/bg5_40323204_2/acbd 利用Onshape繪製齒輪並組合其實很簡單，我是第一個組員，所以我負責的是齒數17的齒輪，之前已經自己用Onshape劃過一次了，步驟都一樣，在這個協同中沒有遇到什麼問題，大家都很快地就完成了。 Onshape網址: https://cad.onshape.com/documents/4a0f3c870751f01ee4527dc8/w/a38b85cf8b16eaa1d52599f9/e/40dcb1e72c21678324724daf 期末心得及自評: 自評成績90分 在這幾週的課程中學了很多，如何建立openshift或是利用程式繪製圖形，雖然對於組員間的協同繪製英文字母還是不懂，像是第一個繪製英文字母的作業，在繪製上沒問題，但如果要用到組員合作協同的話，就完全沒有頭緒。 第二個作業繪製垂直鍊條，一開始不知道如改成垂直，但了解程式後發現其實很簡單，角度加90之後，其他的數字改一下就可對其了。 第三個作業2D 正齒輪傳動囓合繪圖，我複製了老師的成績後，多加了一個齒輪以及改了顏色，把它存成html檔就完成了，其中最後要結合的角度計算方式最複雜難懂，其餘的都很簡單。 第四個作業網際 3D 正齒輪傳動模擬，這個作業要使用Onshape繪製，經過同學的教導後，我也依照同樣的方法繪製出來了，並且利用截圖說明了過程，自己會使用後覺得很方便，齒輪間的結合可以模擬出來，覺得現在的網路工具越來越強了。 Leo Editor 基本的使用: 1.開啟 Leo Editor 後, 使用者可以新增一個 .leo 檔案, 並在其中加入節點，以及在節點的內文中輸入資料。 2.當節點名稱為@edit _____.md時，即為網誌檔，其內文可打資料，傳會後會顯示在網頁上。 3.當節點名稱為@edit ____.py時，即為python檔，若想讓.py檔裡的程式分節，就將 edit 改為 auto，在檔名的位置點滑鼠右鍵選擇Refresh from disk就會自動分節，再將 auto改為 clean就完成。 4.@path content/b/g5即為檔案存取到 content下的 b下的 g5 。 5.程式中bg5_40323204_2 = Blueprint('bg5_40323204_2', name , url_prefix='/bg5_40323204_2', template_folder='templates') 此行為定義藍圖名稱 6.若要在近端實行就輸入 python wsgi.py當跑出三行有*字號的文字即為成功，若沒有成功可看@clean myflaskapp.py或myflaskapp declarations 中是否有定義到自己的檔案或藍圖，也有可能是別人的定義錯誤，可在錯誤的定義前面加一個#字號暫時蓋掉，完成後再輸入一次python wsgi.py即可。. 7.當近端跑成功後可在網頁網址中輸入 localhost:5000/檔案位置/藍圖名稱/繪圖所定義的名稱。 2D英文字母繪製: AAAA: http://cdw11g5-40323204sandy.rhcloud.com/bg5_40323204/task04_1 BACD: http://cdw11g5-40323204sandy.rhcloud.com/bg5_40323204/task04_2 ABCD: http://cdw11g5-40323204sandy.rhcloud.com/bg5_40323204/task04_3 自行車傳動 2D 鏈條繪圖: 計算鍊條點的位置: 利用solvespace繪圖計算鍊條點的位置在帶入程式中 欲將鍊條改為垂直，將first_degree都加上90，X與Y的部分做算並填上即可。 垂直鍊條: http://cdw11g5-40323204sandy.rhcloud.com/bg5_40323204_1/eighteenthirty1 2D 正齒輪傳動囓合繪圖: 齒輪嚙合程式: window.onload=function(){ brython(1); } # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window # 針對 Javascript 既有的物件, 則必須透過 JSConstructor 轉換 from javascript import JSConstructor import math # 主要用來取得畫布大小 canvas = doc[\"gear1\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx #ctx = canvas.getContext(\"2d\") # 針對類別的轉換, 將 Cango.js 中的 Cango 物件轉為 Python cango 物件 cango = JSConstructor(window.Cango) # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 cobj = JSConstructor(window.Cobj) creategeartooth = JSConstructor(window.createGearTooth) # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"plotarea\" 的 canvas 上 cgo = cango(\"gear1\") ###################################### # 畫正齒輪輪廓 ##################################### def spur(cx, cy, m, n, pa, theta): # n 為齒數 #n = 17 # pa 為壓力角 #pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth #m = 0.8*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = cobj(data, \"SHAPE\", { \"fillColor\":\"#660099\", \"border\": True, \"strokeColor\": \"#cc9933\" }) #gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh, 請注意 rotate 角度為 degree # theta 為角度 gearTooth.rotate(theta) # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = cobj(shapedefs.circle(hr), \"PATH\") shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 cgo.render(gear) # 接著繪製齒輪的基準線 deg = math.pi/180 Line = cobj(['M', cx, cy, 'L', cx+pr*math.cos(theta*deg), cy+pr*math.sin(theta*deg)], \"PATH\", { 'strokeColor':'blue', 'lineWidth': 1}) cgo.render(Line) # 3個齒輪的齒數 n1 = 17 n2 = 29 n3 = 15 n4 = 39 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth # 利用 80% 的畫布寬度進行繪圖 # 計算模數的對應尺寸 m = canvas.width*0.8/(n1+n2+n3+n4) # 根據齒數與模組計算各齒輪的節圓半徑 pr1 = n1*m/2 pr2 = n2*m/2 pr3 = n3*m/2 pr4 = n4*m/2 # 畫布左右兩側都保留畫布寬度的 10% # 依此計算對應的最左邊齒輪的軸心座標 cx = canvas.width*0.1+pr1 cy = canvas.height/2 # pa 為壓力角 pa = 25 # 畫最左邊齒輪, 定位線旋轉角為 0, 軸心座標 (cx, cy) spur(cx, cy, m, n1, pa, 0) # 第2個齒輪將原始的定位線逆時鐘轉 180 度後, 與第1個齒輪正好齒頂與齒頂對齊 # 只要第2個齒輪再逆時鐘或順時鐘轉動半齒的角度, 即可完成囓合 # 每一個齒分別包括從齒根到齒頂的範圍, 涵蓋角度為 360/n, 因此所謂的半齒角度為 180/n spur(cx+pr1+pr2, cy, m, n2, pa, 180-180/n2) # 第2齒與第3齒的囓合, 首先假定第2齒的定位線在 theta 角為 0 的原始位置 # 如此, 第3齒只要逆時鐘旋轉 180 度後, 再逆時鐘或順時鐘轉動半齒的角度, 即可與第2齒囓合 # 但是第2齒為了與第一齒囓合時, 已經從原始定位線轉了 180-180/n2 度 # 而當第2齒從與第3齒囓合的定位線, 逆時鐘旋轉 180-180/n2 角度後, 原先囓合的第3齒必須要再配合旋轉 (180-180/n2 )*n2/n3 spur(cx+pr1+pr2+pr2+pr3, cy, m, n3, pa, 180-180/n3+(180-180/n2)*n2/n3) spur(cx+pr1+pr2+pr2+pr3+pr3+pr4, cy, m, n4, pa, 180-180/n4) 網際 3D 正齒輪傳動模擬: Onshape齒輪繪製網址: https://cad.onshape.com/documents/62acae18224e677f2927970c/w/f54d41bf511577881863e911/e/2f5927f6835a9194a0e62cd2 過程介紹: 新增齒輪方法 1.點選螢光筆畫的地方 2.點下去後會跑出一個視窗，在搜尋處輸入spur會跑出許多選項，按下第一個紅筆圈起來處的選項 3.按下後會跑出下圖的樣子，按下螢光筆畫起來處 4.跑完後點選視窗右上角的SG 5.點下後會出現下圖視窗，可在視窗中設定齒數、模數，紅筆圈起來處是指齒輪中間的孔，點選後可更改孔直徑 齒輪組合方法 1.依照齒輪組合後的位置關係，繪製出底板 2.進入組合圖叫出底板，步驟如下圖 3.按下確定後，要將底板與組合圖中心固定在一起，點選螢光筆繪製處 4.選擇中心處的面與底板的面，結合後按下確定即可 5.一樣的方法叫出齒輪一 6.點選上排旋轉結合按鈕，並加底板的軸與齒輪的孔結合 7.相同的方法叫出齒輪二並與底板結合 8.欲將兩齒輪結合在一起，點選上排兩個齒輪的圖案 9.跳出視窗後選取齒輪一與齒輪二的結合選項，如圖 10.將螢光筆繪製處改為:齒數二/齒數一 11.結合後如下圖，接下來以此類推 成果圖片: 齒輪一設置(齒數30，模數2) 齒輪二設置(齒數20，模數2) 齒輪三設置(齒數10，模數2) 齒輪四設置(齒數25，模數2) 齒輪一與二的結合 齒輪一與三的結合 齒輪二與四的結合 組合完成圖","url":"./40323204qi-mo-kao-zhou-zhuan-an-bao-gao.html","title":"40323204期末考週專案報告","tags":"bg5"},{"text":"為了能夠更客觀進行各組與各學員的期末自評, 特別以組為單位, 各組員為內容建構成員, 利用四堂課程的時間, 在各組新建的 Github 倉儲中完成此一專案報告. 基本專案建置流程: 請各組推派代表, 在其 Github 帳號下, 建立一個分組期末專案倉儲, 倉儲名稱定為 2016springcd_aG1, 其中的 aG1 代表 a 班的第 1 組 (以下將以 2016springcd_xGx 代表各組建立的倉儲名稱), 請各組自行配合改為各自的組別代號, 而且請各組特別注意, 此一倉儲的建立時間, 必須是在各班期末考週的第1堂課程時間之後建立, 才納入計分. 倉儲建立之後的第1階段提交推送資料, 必須是修改 README.md, 而且必須透過協調, 由各組員依序 git clone 各組在代表組員帳號下所建立的 2016springcd_xGx 倉儲後, 分別由各組員自行用學號登錄的 github 帳號以協同提交推送的過程, 各自修改 README.md 檔案, 將自己的學號與個人對應的 Github Page 網頁, 放入 REAEME.md 檔案中. 第2項的評分依據為各組員必須自行用自己在 Github 登錄的帳號, 取得各組的 2016springcd_xGx 倉儲協同權限後, 再進行 RADEME.md 的協同修改, 之後各組員完成提交推送的紀錄, 必須可以在 commits 呈現各自的學號與提交推送內容及時間, 才納入計分. 各組以協同流程完成 README.md 的編修後, 接著請取用 https://github.com/2015fallhw/2016springcd_final 倉儲中的架構, 在各組的代表成員的 2016springcd_xGx 倉儲中運作, 並設法將其中的 pelican 網誌內容, 呈現在 2016springcd_xGx 倉儲的 gh-pages 分支中, 完成後, 請各組員在此一 gh-pages 倉儲中各自建立一個能夠呈現自我期末報告的網誌, 並且將此一在 2016springcd_xGx 倉儲的 gh-pages 分支中的連結, 放入 2016springcd_xGx 倉儲 master 分支的 README.md 最前方. 接著, 請利用協同產品設計實習課程所學到的 2D 網際繪圖內容, 以分組組員各自繪製一簡單幾何零件圖形的方式, 將 2016springcd_xGx 倉儲資料中的 wsgi 程式, 送到各組代表成員的 OpenShift 網站中呈現, 並將 2D 繪圖程式連結, 放到 2016springcd_xGx 倉儲 master 分支的 README.md 資料中, 並且放在分組 gh-pages 連結之後. 最後, 請各組以協同方式在 Onshape 雲端電腦輔助設計軟體中, 建立一個名稱為 2016springcd_xGx 的公開協同 Document, 然後將各組組員納入作為可以 edit 與 view 的協同者, 以每一位組員利用 Onshape 官方所釋出的 SG (正齒輪) FeatureScript, 分別依照學號排序, 從齒數 17 開始, 以每位學員遞增 2 齒的方式, 各自在 Part Studio 建立一個正齒輪零件, 並以學號命名零件後, 完成後, 以最簡單的方式在以組別 xGx 命名的組立件中完成囓合組立 (例如, 該組有 6 位成員, 則各自提供一個正齒輪零件, 齒數分別為 17, 19, 21, 23, 25, 27 等, 最後則完成6個齒輪的囓合組立), 完成後, 請將各組的囓合正齒輪組立件以 share 功能, 設定成網路公開組立件, 並將此一 Onshape 的組立件連結, 放到 2016springcd_xGx 倉儲 master 分支的 README.md 資料中, 放在分組 wsgi 2D 繪圖連結之後. 最最後, 請各組依序完成上述工作任務後, 將各組與各學員所完成的網站連結放入 https://github.com/2015fallhw/cdw11/wiki 各組員的對應資料區中, 以作為期末成績評分參考. 祝大家 2016 Summer 假期愉快!","url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-mo-kao-zhou-zhuan-an-bao-gao.html","title":"協同產品設計實習期末考週專案報告","tags":"ag100"}]};