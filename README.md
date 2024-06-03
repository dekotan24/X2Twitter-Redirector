# X2Twitter-Redirector
x.comからtwitter.comへ自動的にリダイレクトする拡張機能 X to Twitter Redirector！

何番煎じかな？わからない！


## なんだこれ？（What is?）
x.comドメインで開いたページを、自動的にtwitter.comで開き直す拡張機能です。

`x.com`を`twitter.com`に置換し、x.comにリダイレクトしないように、URLパラメータとして`mx=1`を追加しています。

さわらつき(@sawaratsuki1004)氏に感謝！→[参考にしたツイート](https://x.com/sawaratsuki1004/status/1792530714736656656)


## インストール（Installation）
### Firefox
- Firefoxは、下記ダウンロードセクションからReleaseページに飛び、xpiファイルから直接インストールしてください。
- Firefox can be installed directly from the xpi file by jumping to the Release page from the Downloads section below.
![image](https://github.com/dekotan24/X2Twitter-Redirector/assets/27037519/75133154-d929-4ee2-81ed-9ef2836dfe63)

### Chrome
- Chromeは、ソース（`chrome_x2twitter` フォルダ）をダウンロードした後、「パッケージ化されていない拡張機能を読み込む」からご利用ください（Chromeを閉じるたびに毎回この手順が必要です）。
- For Chrome, download the source (in the `chrome_x2twitter` folder) and then use "Load Unpackaged Extensions" (you will need to do this step every time you close Chrome).
![image](https://github.com/dekotan24/X2Twitter-Redirector/assets/27037519/87c0c6ca-6c31-481b-9a67-395606501ff8)


## ダウンロード（Download）
### Firefox
- xpiファイルは [Release](https://github.com/dekotan24/X2Twitter-Redirector/releases) からダウンロードしてください。
- xpi file can download from [Release](https://github.com/dekotan24/X2Twitter-Redirector/releases) page!

### Chrome
- "Code" → "Download ZIP"からダウンロードしてください。
- Please download from "Code" → "Download ZIP".
![image](https://github.com/dekotan24/X2Twitter-Redirector/assets/27037519/fdbcebde-f9f6-4201-aba2-a5cb6be9572d)


## 一時的な無効化（Temporary disable）
◆ リダイレクトを無効にするには、URLに`x2t_dis=true`パラメータを追加します。

◆ To temporarily stop automatic redirection, add `x2t_dis=true` parameter to URL.

Ex) `https://x.com/foo/1234567890?x2t_dis=true`
