!function (t) {
    var e = {};

    function n(a) {
        if (e[a]) return e[a].exports;
        var o = e[a] = {i: a, l: !1, exports: {}};
        return t[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(a, o, function (e) {
            return t[e]
        }.bind(null, o));
        return a
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 3)
}([function (t, e, n) {
    "use strict";
    var a, o, i;
    o = window, i = function () {
        var t = o, e = function (e, n) {
            var a = document, i = this;
            "string" == typeof e && (e = a.getElementById(e));
            var c = function (t) {
                return a.querySelectorAll(t)[0]
            }, s = function (t, e) {
                return t && t[e] || ""
            }, r = function (t, e) {
                if (t) for (var n = t.length, a = 0; a < n; a++) e(a, t[a])
            }, l = function (t, e, n) {
                var a = [e.toLowerCase(), "webkit".concat(e), "MS".concat(e), "o".concat(e)];
                r(a, function (e, a) {
                    t[a] = n
                })
            }, d = function (t, e, n) {
                var a = [n.toLowerCase(), "webkit".concat(n), "MS".concat(n), "o".concat(n)];
                r(a, function (n, a) {
                    t.addEventListener(a, e, !1)
                })
            }, u = function (t, e) {
                d(t, e, "AnimationEnd")
            }, m = function (t, e) {
                t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
            }, p = function (t, e) {
                var n = "RequestFullScreen";
                try {
                    e ? (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen().catch(function () {
                    }) : document.mozCancelFullScreen ? document.mozCancelFullScreen().catch(function () {
                    }) : document.webkitExitFullscreen && document.webkitExitFullscreen().catch(function () {
                    })) : t.requestFullScreen ? t.requestFullScreen() : t["ms".concat(n)] ? t["ms".concat(n)]() : t["moz".concat(n)] ? t["moz".concat(n)]() : t["webkit".concat(n)] && t["webkit".concat(n)]()
                } catch (t) {
                    console.warn("[Zuck.js] Can't access fullscreen")
                }
            }, v = function (t, e, n, a) {
                var o = e > 0 ? 1 : -1, i = Math.abs(e) / c("#zuck-modal").offsetWidth * 90 * o;
                if (y("cubeEffect")) {
                    var s = 0 === i ? "scale(0.95)" : "scale(0.930,0.930)";
                    if (l(c("#zuck-modal-content").style, "Transform", s), i < -90 || i > 90) return !1
                }
                var r = y("cubeEffect") ? "rotateY(".concat(i, "deg)") : "translate3d(".concat(e, "px, 0, 0)");
                t && (l(t.style, "TransitionTimingFunction", a), l(t.style, "TransitionDuration", "".concat(n, "ms")), l(t.style, "Transform", r))
            }, g = function (t, e, n, a) {
                var o = 0, i = 0;
                if (t) {
                    if (t.offsetParent) do {
                        if (o += t.offsetLeft, i += t.offsetTop, t === a) break
                    } while (t = t.offsetParent);
                    e && (i -= e), n && (o -= n)
                }
                return [o, i]
            }, f = function (t) {
                t = 1e3 * Number(t);
                var e = new Date(t), n = e.getTime(), a = ((new Date).getTime() - n) / 1e3, o = y("language", "time"),
                    i = [[60, " ".concat(o.seconds), 1], [120, "1 ".concat(o.minute), ""], [3600, " ".concat(o.minutes), 60], [7200, "1 ".concat(o.hour), ""], [86400, " ".concat(o.hours), 3600], [172800, " ".concat(o.yesterday), ""], [604800, " ".concat(o.days), 86400]],
                    c = 1;
                a < 0 && (a = Math.abs(a), c = 2);
                for (var s = 0, r = void 0; r = i[s++];) if (a < r[0]) return "string" == typeof r[2] ? r[c] : Math.floor(a / r[2]) + r[1];
                var l = e.getDate(), d = e.getMonth(), u = e.getFullYear();
                return "".concat(l, "/").concat(d + 1, "/").concat(u)
            }, h = e.id, b = {
                skin: "snapgram",
                avatars: !0,
                stories: [],
                backButton: !0,
                backNative: !1,
                previousTap: !0,
                autoFullScreen: !1,
                openEffect: !0,
                cubeEffect: !1,
                list: !1,
                localStorage: !0,
                callbacks: {
                    onRender: function (t, e) {
                        return e
                    }, onOpen: function (t, e) {
                        e()
                    }, onView: function (t) {
                    }, onEnd: function (t, e) {
                        e()
                    }, onClose: function (t, e) {
                        e()
                    }, onNextItem: function (t, e, n) {
                        n()
                    }, onNavigateItem: function (t, e, n) {
                        n()
                    }
                },
                language: {
                    unmute: "Touch to unmute",
                    keyboardTip: "Press space to see next",
                    visitLink: "Visit link",
                    time: {
                        ago: "ago",
                        hour: "hour ago",
                        hours: "hours ago",
                        minute: "minute ago",
                        minutes: "minutes ago",
                        fromnow: "from now",
                        seconds: "seconds ago",
                        yesterday: "yesterday",
                        tomorrow: "tomorrow",
                        days: "days ago"
                    }
                }
            }, y = function (t, e) {
                var a = function (t) {
                    return void 0 !== t
                };
                return e ? a(n[t]) && a(n[t][e]) ? n[t][e] : b[t][e] : a(n[t]) ? n[t] : b[t]
            }, w = new function () {
                var e, n, l = c("#zuck-modal");
                l || t.Zuck.hasModal || (t.Zuck.hasModal = !0, (l = a.createElement("div")).id = "zuck-modal", y("cubeEffect") && (l.className = "with-cube"), l.innerHTML = '<div id="zuck-modal-content"></div>', l.style.display = "none", l.setAttribute("tabIndex", "1"), l.onkeyup = function (t) {
                    var e = t.keyCode;
                    27 === e ? w.close() : 13 !== e && 32 !== e || w.next()
                }, y("openEffect") && l.classList.add("with-effects"), n = function () {
                    l.classList.contains("closed") && (b.innerHTML = "", l.style.display = "none", l.classList.remove("closed"), l.classList.remove("animated"))
                }, (e = l).transitionEndEvent || (e.transitionEndEvent = !0, d(e, n, "TransitionEnd")), a.body.appendChild(l));
                var b = c("#zuck-modal-content"), k = function (t) {
                    var e = c("#zuck-modal"), n = "", a = "", o = "0", s = c("#zuck-modal-slider-".concat(h)), r = {
                        previous: c("#zuck-modal .story-viewer.previous"),
                        next: c("#zuck-modal .story-viewer.next"),
                        viewing: c("#zuck-modal .story-viewer.viewing")
                    };
                    if (!r.previous && !t || !r.next && t) return !1;
                    t ? (n = "next", a = "previous") : (n = "previous", a = "next"), y("cubeEffect") ? "previous" === n ? o = e.slideWidth : "next" === n && (o = -1 * e.slideWidth) : o = -1 * (o = g(r[n]))[0], v(s, o, 600, null), setTimeout(function () {
                        if ("" !== n && r[n] && "" !== a) {
                            var t = r[n].getAttribute("data-story-id");
                            i.internalData.currentStory = t;
                            var e = c("#zuck-modal .story-viewer.".concat(a));
                            e && e.parentNode.removeChild(e), r.viewing && (r.viewing.classList.add("stopped"), r.viewing.classList.add(a), r.viewing.classList.remove("viewing")), r[n] && (r[n].classList.remove("stopped"), r[n].classList.remove(n), r[n].classList.add("viewing"));
                            var o = x(n);
                            o && j(o, n);
                            var l = i.internalData.currentStory, d = c('#zuck-modal [data-story-id="'.concat(l, '"]'));
                            if (d) {
                                var m = (d = d.querySelectorAll("[data-index].active"))[0].firstElementChild;
                                i.data[l].currentItem = parseInt(d[0].getAttribute("data-index"), 10), d[0].innerHTML = '<b style="'.concat(m.style.cssText, '"></b>'), u(d[0].firstElementChild, function () {
                                    i.nextItem(!1)
                                })
                            }
                            v(s, "0", 0, null), d && S([d[0], d[1]], !0), y("callbacks", "onView")(i.internalData.currentStory)
                        }
                    }, 650)
                }, j = function (t, e, n) {
                    var o = c("#zuck-modal-slider-".concat(h)), l = "", d = "", p = s(t, "id"),
                        v = a.createElement("div"), g = s(t, "currentItem") || 0,
                        b = c('#zuck-modal .story-viewer[data-story-id="'.concat(p, '"]')), k = "";
                    if (b) return !1;
                    v.className = "slides", r(s(t, "items"), function (e, n) {
                        g > e && (t.items[e].seen = !0, n.seen = !0);
                        var a = s(n, "id"), o = s(n, "length"), i = s(n, "linkText"),
                            c = !0 === s(n, "seen") ? "seen" : "",
                            r = 'data-index="'.concat(e, '" data-item-id="').concat(a, '"'),
                            u = y("callbacks", "onRender");
                        g === e && (k = f(s(n, "time"))), d += "\n                            <span ".concat(r, ' class="').concat(g === e ? "active" : "", " ").concat(c, '">\n                                <b style="animation-duration:').concat("" === o ? "3" : o, 's"></b>\n                            </span>'), l += '\n            <div data-time="'.concat(s(n, "time"), '" data-type="').concat(s(n, "type"), '"').concat(r, ' class="item ').concat(c, " ").concat(g === e ? "active" : "", '">\n              ').concat(u(n, "\n                ".concat("video" === s(n, "type") ? '\n                      <video class="media" muted webkit-playsinline playsinline preload="auto" src="'.concat(s(n, "src"), '" ').concat(s(n, "type"), '></video>\n                      <b class="tip muted">').concat(y("language", "unmute"), "</b>\n                ") : '\n                      <img class="media" src="'.concat(s(n, "src"), '" ').concat(s(n, "type"), ">\n                "), "\n\n                ").concat(s(n, "link") ? '\n                      <a class="tip link" href="'.concat(s(n, "link"), '" rel="noopener" target="_blank">\n                        ').concat(i && "" !== i ? i : y("language", "visitLink"), "\n                      </a>\n                ") : "\n                ", "\n              ")), "\n            </div>")
                    }), v.innerHTML = l;
                    var x = v.querySelector("video"), L = function (t) {
                        t.muted ? $.classList.add("muted") : $.classList.remove("muted")
                    };
                    x && (x.onwaiting = function (t) {
                        x.paused && ($.classList.add("paused"), $.classList.add("loading"))
                    }, x.onplay = function () {
                        L(x), $.classList.remove("stopped"), $.classList.remove("paused"), $.classList.remove("loading")
                    }, x.onready = x.onload = x.onplaying = x.oncanplay = function () {
                        L(x), $.classList.remove("loading")
                    }, x.onvolumechange = function () {
                        L(x)
                    });
                    var $ = a.createElement("div");
                    $.className = "story-viewer muted ".concat(e, " ").concat(n ? "" : "stopped", " ").concat(y("backButton") ? "with-back-button" : ""), $.setAttribute("data-story-id", p);
                    var E = '<div class="head"><div class="left">'.concat(y("backButton") ? '<a class="back">&lsaquo;</a>' : "", '<u class="img" style="background-image:url(').concat(s(t, "photo"), ');"></u><div><strong>').concat(s(t, "name"), '</strong><span class="time">').concat(k, '</span></div></div><div class="right"><span class="time">').concat(k, '</span><span class="loading"></span><a class="close" tabIndex="2">&times;</a></div></div><div class="slides-pointers"><div>').concat(d, "</div></div>");
                    $.innerHTML = E, r($.querySelectorAll(".close, .back"), function (t, e) {
                        e.onclick = function (t) {
                            t.preventDefault(), w.close()
                        }
                    }), $.appendChild(v), "viewing" === e && S($.querySelectorAll('[data-index="'.concat(g, '"].active')), !1), r($.querySelectorAll(".slides-pointers [data-index] > b"), function (t, e) {
                        u(e, function () {
                            i.nextItem(!1)
                        })
                    }), "previous" === e ? m(o, $) : o.appendChild($)
                };
                return {
                    show: function (t, e) {
                        var n = c("#zuck-modal");
                        y("callbacks", "onOpen")(t, function () {
                            b.innerHTML = '<div id="zuck-modal-slider-'.concat(h, '" class="slider"></div>');
                            var e = i.data[t], a = e.currentItem || 0;
                            !function (t) {
                                var e = c("#zuck-modal"), n = t, a = {}, s = void 0, r = void 0, l = void 0, d = void 0,
                                    u = void 0, m = function (t) {
                                        var o = c("#zuck-modal .viewing");
                                        if ("A" === t.target.nodeName) return !0;
                                        t.preventDefault();
                                        var i = t.touches ? t.touches[0] : t, m = g(c("#zuck-modal .story-viewer.viewing"));
                                        e.slideWidth = c("#zuck-modal .story-viewer").offsetWidth, a = {x: m[0], y: m[1]};
                                        var v = i.pageX, h = i.pageY;
                                        s = {
                                            x: v,
                                            y: h,
                                            time: Date.now()
                                        }, r = void 0, l = {}, n.addEventListener("mousemove", p), n.addEventListener("mouseup", f), n.addEventListener("mouseleave", f), n.addEventListener("touchmove", p), n.addEventListener("touchend", f), o && o.classList.add("paused"), $(), d = setTimeout(function () {
                                            o.classList.add("longPress")
                                        }, 600), u = setTimeout(function () {
                                            clearInterval(u), u = !1
                                        }, 250)
                                    }, p = function (t) {
                                        var e = t.touches ? t.touches[0] : t, o = e.pageX, i = e.pageY;
                                        s && (l = {
                                            x: o - s.x,
                                            y: i - s.y
                                        }, void 0 === r && (r = !!(r || Math.abs(l.x) < Math.abs(l.y))), !r && s && (t.preventDefault(), v(n, a.x + l.x, 0, null)))
                                    }, f = function t(m) {
                                        var g = c("#zuck-modal .viewing"), f = s;
                                        if (l) {
                                            var h = s ? Date.now() - s.time : void 0,
                                                b = Number(h) < 300 && Math.abs(l.x) > 25 || Math.abs(l.x) > e.slideWidth / 3,
                                                w = l.x < 0,
                                                x = c(w ? "#zuck-modal .story-viewer.next" : "#zuck-modal .story-viewer.previous");
                                            r || (!b || w && !x || !w && !x ? v(n, a.x, 300) : k(w)), s = void 0, n.removeEventListener("mousemove", p), n.removeEventListener("mouseup", t), n.removeEventListener("mouseleave", t), n.removeEventListener("touchmove", p), n.removeEventListener("touchend", t)
                                        }
                                        var L = i.internalData.currentVideoElement;
                                        if (d && clearInterval(d), g && (S(g.querySelectorAll(".active"), !1), g.classList.remove("longPress"), g.classList.remove("paused")), u) {
                                            clearInterval(u), u = !1;
                                            var $ = function () {
                                                f.x > o.screen.width / 3 || !y("previousTap") ? i.navigateItem("next", m) : i.navigateItem("previous", m)
                                            }, I = c("#zuck-modal .viewing");
                                            if (!I || !L) return $(), !1;
                                            I.classList.contains("muted") ? E(L, I) : $()
                                        }
                                    };
                                n.addEventListener("touchstart", m), n.addEventListener("mousedown", m)
                            }(c("#zuck-modal-slider-".concat(h))), i.internalData.currentStory = t, e.currentItem = a, y("backNative") && (o.location.hash = "#!".concat(h));
                            var s = x("previous");
                            s && j(s, "previous"), j(e, "viewing", !0);
                            var r = x("next");
                            r && j(r, "next"), y("autoFullScreen") && n.classList.add("fullscreen");
                            var l = function () {
                                n.classList.contains("fullscreen") && y("autoFullScreen") && o.screen.width <= 1024 && p(n), n.focus()
                            };
                            if (y("openEffect")) {
                                var d = c("#".concat(h, ' [data-id="').concat(t, '"] .img')), u = g(d);
                                n.style.marginLeft = "".concat(u[0] + d.offsetWidth / 2, "px"), n.style.marginTop = "".concat(u[1] + d.offsetHeight / 2, "px"), n.style.display = "block", n.slideWidth = c("#zuck-modal .story-viewer").offsetWidth, setTimeout(function () {
                                    n.classList.add("animated")
                                }, 10), setTimeout(function () {
                                    l()
                                }, 300)
                            } else n.style.display = "block", n.slideWidth = c("#zuck-modal .story-viewer").offsetWidth, l();
                            y("callbacks", "onView")(t)
                        })
                    }, next: function (t) {
                        y("callbacks", "onEnd")(i.internalData.currentStory, function () {
                            var t = i.internalData.currentStory, e = c("#".concat(h, ' [data-id="').concat(t, '"]'));
                            e && (e.classList.add("seen"), i.data[t].seen = !0, i.internalData.seenItems[t] = !0, I("seenItems", i.internalData.seenItems), L()), c("#zuck-modal .story-viewer.next") ? k(!0) : w.close()
                        })
                    }, close: function () {
                        var t = c("#zuck-modal");
                        y("callbacks", "onClose")(i.internalData.currentStory, function () {
                            y("backNative") && (o.location.hash = ""), p(t, !0), y("openEffect") ? t.classList.add("closed") : (b.innerHTML = "", t.style.display = "none")
                        })
                    }
                }
            }, k = function (t) {
                var e = t.getAttribute("data-id"), n = !1;
                i.internalData.seenItems[e] && (n = !0), n ? t.classList.add("seen") : t.classList.remove("seen");
                try {
                    i.data[e] = {
                        id: e,
                        photo: t.getAttribute("data-photo"),
                        name: t.firstElementChild.lastElementChild.firstChild.innerText,
                        link: t.firstElementChild.getAttribute("href"),
                        lastUpdated: t.getAttribute("data-last-updated"),
                        seen: n,
                        items: []
                    }
                } catch (t) {
                    i.data[e] = {items: []}
                }
                t.onclick = function (t) {
                    t.preventDefault(), w.show(e)
                }
            }, x = function (t) {
                var e = i.internalData.currentStory, n = "".concat(t, "ElementSibling");
                if (e) {
                    var a = c("#".concat(h, ' [data-id="').concat(e, '"]'))[n];
                    if (a) {
                        var o = a.getAttribute("data-id");
                        return i.data[o] || !1
                    }
                }
                return !1
            }, L = function () {
                r(a.querySelectorAll("#".concat(h, " .story.seen")), function (t, e) {
                    var n = i.data[e.getAttribute("data-id")];
                    e.parentNode.removeChild(e), i.add(n, !0)
                })
            }, S = function (t, e) {
                var n = t[1], a = t[0], o = a.parentNode.parentNode.parentNode;
                if (!n || !a) return !1;
                var c = i.internalData.currentVideoElement;
                if (c && c.pause(), "video" === n.getAttribute("data-type")) {
                    var s = n.getElementsByTagName("video")[0];
                    if (!s) return i.internalData.currentVideoElement = !1, !1;
                    var r = function () {
                        s.duration && l(a.getElementsByTagName("b")[0].style, "AnimationDuration", "".concat(s.duration, "s"))
                    };
                    r(), s.addEventListener("loadedmetadata", r), i.internalData.currentVideoElement = s, s.play(), e.target && E(s, o)
                } else i.internalData.currentVideoElement = !1
            }, $ = function () {
                var t = i.internalData.currentVideoElement;
                if (t) try {
                    t.pause()
                } catch (t) {
                }
            }, E = function (t, e) {
                t.muted = !1, t.volume = 1, t.removeAttribute("muted"), t.play(), t.paused && (t.muted = !0, t.play()), e && e.classList.remove("paused")
            }, I = function (t, e) {
                try {
                    if (y("localStorage")) {
                        var n = "zuck-".concat(h, "-").concat(t);
                        o.localStorage[n] = JSON.stringify(e)
                    }
                } catch (t) {
                }
            };
            return i.data = {}, i.internalData = {}, i.internalData.seenItems = function (t) {
                if (y("localStorage")) {
                    var e = "zuck-".concat(h, "-").concat(t);
                    return !!o.localStorage[e] && JSON.parse(o.localStorage[e])
                }
                return !1
            }("seenItems") || {}, i.add = i.update = function (t, n) {
                var o, l = s(t, "id"), d = c("#".concat(h, ' [data-id="').concat(l, '"]')), u = s(t, "items"), p = !1;
                i.data[l] = {}, d ? p = d : (p = a.createElement("div")).className = "story", !1 === t.seen && (i.internalData.seenItems[l] = !1, I("seenItems", i.internalData.seenItems)), p.setAttribute("data-id", l), p.setAttribute("data-photo", s(t, "photo")), p.setAttribute("data-last-updated", s(t, "lastUpdated"));
                var v = !1;
                u[0] && (v = u[0].preview || ""), o = '<a href="'.concat(s(t, "link"), '"><span class="img"><u style="background-image:url(').concat(y("avatars") || !v || "" === v ? s(t, "photo") : v, ')"></u></span><span class="info"><strong>').concat(s(t, "name"), '</strong><span class="time">').concat(f(s(t, "lastUpdated")), '</span></span></a><ul class="items"></ul>'), p.innerHTML = o, k(p), d || (n ? e.appendChild(p) : m(e, p)), r(u, function (t, e) {
                    i.addItem(l, e, n)
                }), n || L()
            }, i.next = function () {
                w.next()
            }, i.remove = function (t) {
                var e = c("#".concat(h, ' > [data-id="').concat(t, '"]'));
                e.parentNode.removeChild(e)
            }, i.addItem = function (t, e, n) {
                var o = c("#".concat(h, ' > [data-id="').concat(t, '"]')), l = a.createElement("li");
                l.className = s(e, "seen") ? "seen" : "", l.setAttribute("data-id", s(e, "id")), l.innerHTML = '<a href="'.concat(s(e, "src"), '" data-link="').concat(s(e, "link"), '" data-linkText="').concat(s(e, "linkText"), '" data-time="').concat(s(e, "time"), '" data-type="').concat(s(e, "type"), '" data-length="').concat(s(e, "length"), '"><img src="').concat(s(e, "preview"), '"></a>');
                var d = o.querySelectorAll(".items")[0];
                n ? d.appendChild(l) : m(d, l), function (t) {
                    var e = t.getAttribute("data-id"),
                        n = a.querySelectorAll("#".concat(h, ' [data-id="').concat(e, '"] .items > li')), o = [];
                    r(n, function (t, e) {
                        var n = e.firstElementChild, a = n.firstElementChild;
                        o.push({
                            src: n.getAttribute("href"),
                            length: n.getAttribute("data-length"),
                            type: n.getAttribute("data-type"),
                            time: n.getAttribute("data-time"),
                            link: n.getAttribute("data-link"),
                            linkText: n.getAttribute("data-linkText"),
                            preview: a.getAttribute("src")
                        })
                    }), i.data[e].items = o
                }(o)
            }, i.removeItem = function (t, n) {
                var a = c("#".concat(h, ' > [data-id="').concat(t, '"] [data-id="').concat(n, '"]'));
                e.parentNode.removeChild(a)
            }, i.navigateItem = i.nextItem = function (t, e) {
                var n = i.internalData.currentStory, a = i.data[n].currentItem,
                    o = c('#zuck-modal .story-viewer[data-story-id="'.concat(n, '"]')), s = "previous" === t ? -1 : 1;
                if (!o || 1 === o.touchMove) return !1;
                var l = o.querySelectorAll('[data-index="'.concat(a, '"]')), d = l[0], u = l[1], m = a + s,
                    p = o.querySelectorAll('[data-index="'.concat(m, '"]')), v = p[0], g = p[1];
                if (o && v && g) {
                    var h = y("callbacks", "onNavigateItem");
                    (h = y("callbacks", h ? "onNavigateItem" : "onNextItem"))(n, g.getAttribute("data-story-id"), function () {
                        "previous" === t ? (d.classList.remove("seen"), u.classList.remove("seen")) : (d.classList.add("seen"), u.classList.add("seen")), d.classList.remove("active"), u.classList.remove("active"), v.classList.remove("seen"), v.classList.add("active"), g.classList.remove("seen"), g.classList.add("active"), r(o.querySelectorAll(".time"), function (t, e) {
                            e.innerText = f(g.getAttribute("data-time"))
                        }), i.data[n].currentItem = i.data[n].currentItem + s, S(p, e)
                    })
                } else o && "previous" !== t && w.next(e)
            }, function () {
                c("#".concat(h, " .story")) && r(e.querySelectorAll(".story"), function (t, e) {
                    k(e)
                }), y("backNative") && (o.location.hash === "#!".concat(h) && (o.location.hash = ""), o.addEventListener("popstate", function (t) {
                    o.location.hash !== "#!".concat(h) && (o.location.hash = "")
                }, !1)), r(y("stories"), function (t, e) {
                    i.add(e, !0)
                }), L();
                var t = y("avatars") ? "user-icon" : "story-preview", n = y("list") ? "list" : "carousel";
                return e.className = "stories ".concat(t, " ").concat(n, " ").concat("".concat(y("skin")).toLowerCase()), i
            }()
        };
        return e.buildItem = function (t, e, n, a, o, i, c, s, r) {
            return {id: t, type: e, length: n, src: a, preview: o, link: i, linkText: c, seen: s, time: r}
        }, t.ZuckitaDaGalera = t.Zuck = e, e
    }(), void 0 === (a = function () {
        return i
    }.call(e, n, e, t)) || (t.exports = a)
}, function (t, e, n) {
    "use strict";

    function a(t) {
        const e = t.width();
        t.height(e)
    }

    function o(t) {
        $(window).resize(() => a(t))
    }

    n.r(e), n.d(e, "madeCub", function () {
        return a
    }), n.d(e, "onResize", function () {
        return o
    })
}, function (t, e, n) {
    "use strict";

    function a() {
        const t = window.sessionStorage.getItem("night");
        return JSON.parse(t)
    }

    function o(t) {
        const e = $(".story");
        $(e).each((e, n) => {
            $(n).find("u").css({backgroundImage: `url(./img/${e + 1}st${t}.png)`})
        })
    }

    n.r(e), n.d(e, "getThemeValue", function () {
        return a
    }), $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
        $(this).toggleClass("open"), $(".menu-dropdown").toggleClass("menu-dropdown_position-active")
    }), $(".menu-dropdown-link ").click(function (t) {
        $(this).siblings(".sub").slideToggle()
    }), function () {
        const t = window.sessionStorage.getItem("night");
        JSON.parse(t), a() && ($("body").addClass("themeNight"), o("W")), $(".night").click(function () {
            $("body").addClass("themeNight"), window.sessionStorage.setItem("night", !0), o("W")
        }), $(".day").click(function () {
            $("body").removeClass("themeNight"), window.sessionStorage.setItem("night", !1), o("D")
        })
    }(), $(".feedBack-modal-form, .contacts-form").on("submit", function (t) {
        t.preventDefault();
        const e = $(this), n = e.serializeArray(), a = e.attr("action");
        $ajax({
            type: "post",
            url: a,
            data: n,
            headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")},
            success: function () {
                $("#success-modal").modal("show")
            }
        })
    })
}, function (t, e, n) {
    n(4), t.exports = n(12)
}, function (t, e, n) {
    n(5)
}, function (t, e, n) {
    const a = document.querySelector("main").getAttribute("id");
    n(2), "main-page" === a && n(6), "main-page" === a && n(1), "services" === a && n(7), "stock" === a && n(8), "price" === a && n(9), "contacts" === a && n(10), "documents" === a && n(11)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(0), o = n.n(a), i = n(2);
    $(window).width() < 992 && function () {
        var t = document.getElementById("header"), e = location.href.split("skin=")[1];
        e || (e = "Snapgram"), -1 !== e.indexOf("#") && (e = e.split("#")[0]);
        var n = {
            Snapgram: {avatars: !0, list: !1, autoFullScreen: !1, cubeEffect: !0},
            VemDeZAP: {avatars: !1, list: !0, autoFullScreen: !1, cubeEffect: !1},
            FaceSnap: {avatars: !0, list: !1, autoFullScreen: !0, cubeEffect: !1},
            Snapssenger: {avatars: !1, list: !1, autoFullScreen: !1, cubeEffect: !1}
        };
        const a = Object(i.getThemeValue)();
        console.log(a);
        new o.a("stories", {
            backButton: !0,
            backNative: !0,
            previousTap: !1,
            autoFullScreen: !1,
            skin: e,
            avatars: n[e].avatars,
            list: n[e].list,
            cubeEffect: n[e].cubeEffect,
            localStorage: !1,
            stories: [{
                id: "1",
                photo: a ? "./img/1stW.png" : "./img/1stD.png",
                name: "Дипломы",
                link: "",
                lastUpdated: "",
                items: [o.a.buildItem("doc-1", "photo", 3, "./img/documents/1diplom.jpg", "./img/documents/1diplom.jpg", "", !1, !1), o.a.buildItem("doc-2", "photo", 3, "./img/documents/2diplom.jpg", "./img/documents/2diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-3", "photo", 3, "./img/documents/3diplom.jpg", "./img/documents/3diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-4", "photo", 3, "./img/documents/4-1diplom.jpg", "./img/documents/4-1diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-5", "photo", 3, "./img/documents/4-2diplom.jpg", "./img/documents/4-2diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-6", "photo", 3, "./img/documents/5diplom.jpeg", "./img/documents/5diplom.jpeg", "", "Дипломы", !1), o.a.buildItem("doc-7", "photo", 3, "./img/documents/6diplom.jpeg", "./img/documents/6diplom.jpeg", "", "Дипломы", !1), o.a.buildItem("doc-8", "photo", 3, "./img/documents/7-1diplom.jpeg", "./img/documents/7-1diplom.jpeg", "", "Дипломы", !1), o.a.buildItem("doc-9", "photo", 3, "./img/documents/7-2diplom.jpg", "./img/documents/7-2diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-10", "photo", 3, "./img/documents/8diplom.jpeg", "./img/documents/8diplom.jpeg", "", "Дипломы", !1), o.a.buildItem("doc-11", "photo", 3, "./img/documents/9diplom.jpeg", "./img/documents/9diplom.jpeg", "", "Дипломы", !1), o.a.buildItem("doc-12", "photo", 3, "./img/documents/10diplom.jpg", "./img/documents/10diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-13", "photo", 3, "./img/documents/11diplom.jpg", "./img/documents/11diplom.jpg", "", "Дипломы", !1), o.a.buildItem("doc-14", "photo", 3, "./img/documents/12diplom.jpg", "./img/documents/12diplom.jpg", "", "Дипломы", !1)]
            }, {
                id: "2",
                photo: a ? "./img/2stW.png" : "./img/2stD.png",
                name: "Прайс",
                link: "",
                lastUpdated: "",
                items: [o.a.buildItem("gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "", !1, !1, "")]
            }, {
                id: "3",
                photo: a ? "./img/3stW.png" : "./img/3stD.png",
                name: "Специалисты",
                link: "",
                lastUpdated: "",
                items: [o.a.buildItem("ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "", !1, !1, ""), o.a.buildItem("ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "", !1, !1, "")]
            }, {
                id: "4",
                photo: a ? "./img/4stW.png" : "./img/4stD.png",
                name: "Акции",
                link: "",
                lastUpdated: "",
                items: [o.a.buildItem("starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "", !1, !1, "")]
            }, {
                id: "5",
                photo: a ? "./img/5stW.png" : "./img/5stD.png",
                name: "Контакты",
                link: "",
                lastUpdated: "",
                items: [o.a.buildItem("riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "", !1, !1, "")]
            }]
        });
        for (var c = document.querySelectorAll("#skin option"), s = c.length, r = 0; r < s; r++) {
            var l = e == c[r].value;
            l ? (c[r].setAttribute("selected", l), t.innerHTML = e, t.className = e) : c[r].removeAttribute("selected")
        }
    }()
}, function (t, e) {
    $(".service-iframe-box").on("click", function () {
        const t = $(this), e = function (t) {
            return t.find(".service-iframe-img").attr("data-src")
        }(t), n = function (t) {
            const e = t.find(".service-iframe-img").width(), n = t.find(".service-iframe-img").height();
            return {width: e, height: n}
        }(t);
        console.log(n);
        const a = function ({width: t, height: e}, n) {
            return `<iframe\n                    width="${t}px"\n                    height="${e}px"\n                    src="${n}"\n                    frameborder="0"\n                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n                    allowfullscreen\n                  ></iframe>`
        }(n, e);
        t.html(a)
    }), $(".service-gallery-slider").on("init", function (t, e) {
        const n = e.$slides.length;
        $(".count").text(n), $(".current").text($(e.$slides[e.currentSlide]).index() + 1);
        const a = $(e.$slides[e.currentSlide]).next(), o = $(a).find("img").attr("src");
        $(".service-gallery-next-slide img").attr("src", o)
    }).on("afterChange", function (t, e, n) {
        $(".current").text(n + 1);
        const a = $(e.$slides[e.currentSlide]).next(), o = $(e.$slides[e.currentSlide]).index(),
            i = e.$slides.length - 1;
        let c = $(a).find("img");
        o === i && (c = $(e.$slides[0]).find("img"));
        const s = c[0].src;
        $(".service-gallery-next-slide img").attr("src", s)
    }).on("beforeChange", function () {
        $(".service-gallery-next-slide").addClass("service-gallery-next-slide_active"), $(".service-gallery-slider .next-arrow").css({pointerEvents: "none"}), setTimeout(function () {
            $(".service-gallery-next-slide").removeClass("service-gallery-next-slide_active"), $(".service-gallery-slider .next-arrow").css({pointerEvents: "auto"})
        }, 1e3)
    }), $(".service-gallery-slider").slick({
        fade: !0,
        arrow: !0,
        nextArrow: $('.slick-arrow.next-arrow'),
        prevArrow: !1
    })
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var a = n(1);
    Object(a.madeCub)($(".stock-img-box")), Object(a.onResize)($(".stock-img-box"))
}, function (t, e) {
    function n() {
        const t = $(".price-list-container");
        $(t).first().slideDown(), $(".priceList-item-title").click(function () {
            const e = $(this), n = e.find(".accordArrow-wrap");
            $(n).hasClass("accordArrow-wrap_rotate") || (t.slideUp(), $(".accordArrow-wrap").removeClass("accordArrow-wrap_rotate"), n.addClass("accordArrow-wrap_rotate"), e.next().slideDown())
        })
    }

    $(window).width() < 992 && n(), $(window).resize(function () {
        $(this).width() < 992 && n()
    })
}, function (t, e) {
}, function (t, e) {
    $(".document-slider").on("init", function (t, e) {
        const n = e.$slides.length;
        $(".count").text(n), $(".current").text($(e.$slides[e.currentSlide]).index())
    }).on("beforeChange", function (t, e, n, a) {
        $(".current").text(a + 1)
    }), $(".document-slider").slick({
        arrow: !0,
        prevArrow: "<div class='document-slider-arrow document-slider-arrow_prev'><img src='./img/doc-arrow.svg' alt=''></div>",
        nextArrow: "<div class='document-slider-arrow document-slider-arrow_next'><img src='./img/doc-arrow.svg' alt=''></div>"
    })
}, function (t, e, n) {
}]);

//# sourceMappingURL=bundle.js.map
