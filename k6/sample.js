import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - https://docs.k6.io/docs/checks", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://docs.k6.io/docs/checks",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888"
				},
				"headers": {
					"Host": "docs.k6.io",
					"Connection": "keep-alive",
					"Cache-Control": "max-age=0",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
					"Referer": "https://k6.io/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(24.66);
		req = [{
			"method": "get",
			"url": "https://files.readme.io/77ea339-Screenshot_2017-06-01_17.05.21.png",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://files.readme.io/193aa85-Screen_Shot_2017-06-05_at_15.07.06.png",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://files.readme.io/8c85d4a-Screen_Shot_2017-06-05_at_15.51.59.png",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://cdn.readme.io/js/bundle-hub2.js?1541638972813"
		},{
			"method": "get",
			"url": "https://cdn.readme.io/fonts/fontawesome-webfont.woff2?v=4.3.0"
		},{
			"method": "get",
			"url": "https://cdn.readme.io/fonts/ReadMe-Icons.woff2?1a1gc4"
		},{
			"method": "get",
			"url": "https://files.readme.io/15b7f84-small-k6.png"
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/analytics.js",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://cdn.readme.io/img/pg-types@2x.png"
		},{
			"method": "post",
			"url": "https://metrics.readme.io/pageview",
			"body": "path=%2Fdocs%2Fchecks&subdomain=k6&version=1.0&type=docs.show",
			"params": {
				"headers": {
					"Accept": "*/*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Origin": "https://docs.k6.io",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/directive/magictextarea",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888"
				},
				"headers": {
					"If-None-Match": "W/\"12c0-Dnm/yKZCf0fqiOWux4ju/vNliJM\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/r/collect?v=1&_v=j72&a=1831521054&t=pageview&_s=1&dl=https%3A%2F%2Fdocs.k6.io%2Fdocs%2Fchecks&dr=https%3A%2F%2Fk6.io%2F&dp=%2Fdocs%2Fchecks&ul=en-us&de=UTF-8&dt=Checks&sd=24-bit&sr=1920x1200&vp=1251x924&je=0&_u=AACAAEAB~&jid=695674666&gjid=1665432441&cid=866505682.1538050496&tid=UA-6552004-13&_gid=554029537.1542468888&_r=1&z=297907754",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.google-analytics.com/r/collect?v=1&_v=j72&a=1831521054&t=pageview&_s=1&dl=https%3A%2F%2Fdocs.k6.io%2Fdocs%2Fchecks&dr=https%3A%2F%2Fk6.io%2F&dp=%2Fdocs%2Fchecks&ul=en-us&de=UTF-8&dt=Checks&sd=24-bit&sr=1920x1200&vp=1251x924&je=0&_u=AACAAEAB~&jid=985429091&gjid=2028347570&cid=866505682.1538050496&tid=UA-52479696-1&_gid=554029537.1542468888&_r=1&z=584684677",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/code/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"8e7-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/api-header/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"a7-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/parameters/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"745-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/image/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"91d-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/callout/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"538-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/embed/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"58c-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://docs.k6.io/blocks/html/edit",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"16a-166f0d6e860\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"If-Modified-Since": "Thu, 08 Nov 2018 01:01:48 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://stats.g.doubleclick.net/r/collect?v=1&aip=1&t=dc&_r=3&tid=UA-52479696-1&cid=866505682.1538050496&jid=985429091&_gid=554029537.1542468888&gjid=2028347570&_v=j72&z=584684677",
			"params": {
				"headers": {
					"Referer": "https://docs.k6.io/docs/checks",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
				}
			}
		}];
		res = http.batch(req);
		sleep(6.34);
		req = [{
			"method": "get",
			"url": "https://docs.k6.io/directive/image-uploader",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"If-None-Match": "W/\"4ca-pB559737hO20OgqHvErgW9medI8\"",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "application/json, text/plain, */*",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive"
				}
			}
		}];
		res = http.batch(req);
		sleep(8.64);
		req = [{
			"method": "get",
			"url": "https://docs.k6.io/favicon.ico",
			"params": {
				"cookies": {
					"_ga": "GA1.2.866505682.1538050496",
					"connect.sid": "s%3AhwQZ7Y1kpimHssNntG5OzKvjaDJgSA2t.djwDaEFNil6wKC9JVJM3IF2yPnJU%2BLgkc3v9nZGLPts",
					"_gid": "GA1.2.554029537.1542468888",
					"_gat": "1",
					"_gat_custom": "1"
				},
				"headers": {
					"Pragma": "no-cache",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "docs.k6.io",
					"Accept-Language": "en-US,en;q=0.9",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://docs.k6.io/docs/checks",
					"Connection": "keep-alive",
					"Cache-Control": "no-cache"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
