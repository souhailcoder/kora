$(document).ready(function()
{
   if($("#blogID").attr("blogID")!="7583727358499328661" )
   if($("#blogID").attr("blogID")!="7611084565443154667" )
   if($("#blogID").attr("blogID")!="508065087838810966" )

 {
   window.location.href="https://www.almosamm.com/";
 }
    });

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});

$(document).ready(function($) {
	var k = -1,
		o = "",
		p = "";
	$("#menu").find("ul").find("li").each(function() {
		for (var text = $(this).text(), url = $(this).find("a").attr("href"), x = 0, z = 0; z < text.length && (x = text.indexOf("_", x), -1 != x); z++) x++;
		if (level = z, level > k && (o += "<ul>", p += "<ul>"), level < k) {
			offset = k - level;
			for (var z = 0; z < offset; z++) o += "</ul></li>", p += "</ul></li>"
		}
		text = text.replace(/_/gi, ""), o += "<li><a href='" + url + "'>" + text + "</a>", p += "<li><a href='" + url + "'>";
		for (var z = 0; z < level; z++) p += "";
		p += text + "</a>", k = level
	});
	for (var x = 0; k >= x; x++) o += "</ul>", p += "</ul>", 0 != x && (o += "</li>", p += "</li>");
	$("#menu .LinkList").html(p), $("#menu > .LinkList > ul").attr("id", "nav"), selectnav('nav'), $("#menu ul > li > ul").parent("li").addClass("parent"), $("#menu .widget").attr("style", "display:block!important;")
});
$(function() {
	$('.post').matchHeight()
});
$(document).ready(function($) {
	$("#menu").show();
	$("ul.sub-menu").parent("li").addClass("has-children");
	$('#search-icon').on('click', function() {
		$('#nav-search').slideToggle(0)
	});
	$(".footer-widget .widget h2").wrap("<div class='widget-title'/>");
	$(this).find(".block-image .thumb a").attr("style", function(e, t) {
		return t.replace("/default.jpg", "/mqdefault.jpg")
	}).attr("style", function(e, t) {
		return t.replace("s72-c", "s1600")
	});
	$(this).find(".PopularPosts img").attr("src", function(e, t) {
		return t.replace("/default.jpg", "/mqdefault.jpg")
	}).attr("src", function(e, t) {
		return t.replace("s72-c", "s1600")
	});
	$('.PopularPosts .item-thumbnail a').append("<span class='img-overlay'></span>");
	$('.avatar-image-container img').each(function() {
		$(this).attr('src', function(i, src) {
			return src.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s45-r/avatar.png')
		}).attr('src', function(i, src) {
			return src.replace('/s35', '/s45')
		})
	});
	var t = $("a.newer-link");
	var n = $("a.older-link");
	$.get(t.attr("href"), function(n) {
		t.html('<strong>' + nextText + ' <i class="fa fa-hand-o-right"></i></strong><span>' + $(n).find(".post h1.post-title").text() + "</span>")
	}, "html");
	$.get(n.attr("href"), function(t) {
		n.html('<strong><i class="fa fa-hand-o-left"></i> ' + prevText + '</strong><span>' + $(t).find(".post h1.post-title").text() + "</span>")
	}, "html");
	$('#back-to-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false
	});
	$('a[name="ad-inter"]').before($('.ads-inter-box').html());
	$('.ads-inter-box').html('')
});
$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#almosamm:visible')['length']) {
            window['location']['href'] = 'https://www.almosamm.com'
        }
    }, 3000)
});
window['onload'] = function() {
    var _0x6d7ax1 = document['getElementById']('almosamm');
    _0x6d7ax1['setAttribute']('href', 'https://www.almosamm.com');
    _0x6d7ax1['setAttribute']('rel', 'dofollow');
    _0x6d7ax1['setAttribute']('title', 'من تطوير');
    _0x6d7ax1['innerHTML'] = 'المصمم'
};

$(".intro-random .HTML .widget-content span").each(function() {
	var b = $(this).attr("data-type"),
		o = $(this).attr("data-no"),
		y = "random";
	if (b.match(y)) {
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script",
			type: 'get',
			dataType: "jsonp",
			success: function(t) {
				t = t.feed.entry.length - 5, t = Math.floor(Math.random() * (t - 0 + 1)) + 0, 0 == t && (t = Math.floor(Math.random() * (t - 0 + 1)) + 1), t == 0 && (t == 1);
				$.ajax({
					url: "/feeds/posts/default?alt=json-in-script&start-index=" + t + "&max-results=" + o,
					type: 'get',
					dataType: "jsonp",
					success: function(e) {
						var u = "";
						var h = '<div class="main-intro">';
						for (var i = 0; i < e.feed.entry.length; i++) {
							for (var j = 0; j < e.feed.entry[i].link.length; j++) {
								if (e.feed.entry[i].link[j].rel == "alternate") {
									u = e.feed.entry[i].link[j].href;
									break
								}
							}
							var g = e.feed.entry[i].title.$t;
							var c = e.feed.entry[i].content.$t;
							var $c = $('<div>').html(c);
							if (c.indexOf("//www.youtube.com/embed/") > -1) {
								var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
								var k = p
							} else if (c.indexOf("<img") > -1) {
								var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
								var k = q
							} else {
								var k = noThumb
							}
							h += '<div class="intro-item"><a class="intro-img" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="intro-title"><h3><a href="' + u + '">' + g + '</a></h3></div></div>'
						}
						h += '</div>';
						$('.intro-random .HTML .widget-content').each(function() {
							$(this).html(h);
							$(".main-intro").owlCarousel({
								items: 3,
								smartSpeed: 550,
								nav: true,
								navText: ["", ""],
								loop: true,
								autoplay: true,
								autoplaySpeed: 1000,
								autoplayHoverPause: true,
								dots: false,
								responsive: {
									0: {
										items: 1,
										nav: true
									},
									360: {
										items: 1,
										nav: true
									},
									601: {
										items: 2,
										nav: true
									},
									720: {
										items: 3,
										nav: true
									},
									920: {
										items: 3,
										nav: true
									}
								}
							})
						})
					}
				})
			}
		})
	}
});
$(".featured .HTML .widget-content span").each(function() {
	var b = $(this).attr("data-label");
	$.ajax({
		url: "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
		type: 'get',
		dataType: "jsonp",
		success: function(e) {
			var u = "";
			var h = '<ul>';
			for (var i = 0; i < e.feed.entry.length; i++) {
				for (var j = 0; j < e.feed.entry[i].link.length; j++) {
					if (e.feed.entry[i].link[j].rel == "alternate") {
						u = e.feed.entry[i].link[j].href;
						break
					}
				}
				var g = e.feed.entry[i].title.$t;
				var d = e.feed.entry[i].published.$t,
					m = d.substring(0, 4),
					n = d.substring(5, 7),
					o = d.substring(8, 10),
					r = textMonth[parseInt(n, 10)] + ' ' + o + ', ' + m;
				var c = e.feed.entry[i].content.$t;
				var $c = $('<div>').html(c);
				if (c.indexOf("//www.youtube.com/embed/") > -1) {
					var p = e.feed.entry[i].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
					var k = p
				} else if (c.indexOf("<img") > -1) {
					var q = $c.find("img:first").attr("src").replace("s72-c", "s1600");
					var k = q
				} else {
					var k = noThumb
				}
				h += '<li><a class="ib-thumb" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><span class="intro-date">' + r + '</span><h3 class="rcp-title"><a href="' + u + '">' + g + '</a></h3></div></li>'
			}
			h += '<div class="clear"/></ul>';
			$(".featured .HTML .widget-content").each(function() {
				$(this).html(h)
			})
		}
	})
});

