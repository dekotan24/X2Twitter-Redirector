var current = location.href;
console.log("Hi, current URL is: " + current);

var url = new URL(current);

// パラメータ 'x2t_dis' が存在しない場合のみ処理を実行
//if (!url.searchParams.has('x2t_dis')) {
	if (url.hostname === 'x.com') {
		url.hostname = 'twitter.com';
		url.search = '';
		url.searchParams.set('mx', '1');
		url.searchParams.set('x2t_dis', 'true');

		console.log("success!\nNew URL is: " + url.href + "\nRedirecting..");
		window.location.href = url.href;
	}
//}
