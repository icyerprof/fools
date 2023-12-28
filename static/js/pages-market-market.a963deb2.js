(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-market-market"], {
    "01a7": function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("2f1d")
          , i = a("e728");
        for (var n in i)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(n);
        a("543e");
        var r = a("f0c5")
          , c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "447d6c2e", null, !1, o["a"], void 0);
        e["default"] = c.exports
    },
    "01cc": function(t, e, a) {
        "use strict";
        a("7a82");
        var o = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = o(a("ed0ee"))
          , n = {
            name: "u-notice-bar",
            mixins: [uni.$u.mpMixin, uni.$u.mixin, i.default],
            data: function() {
                return {
                    show: !0
                }
            },
            methods: {
                click: function(t) {
                    this.$emit("click", t),
                    this.url && this.linkType && this.openPage()
                },
                close: function() {
                    this.show = !1,
                    this.$emit("close")
                }
            }
        };
        e.default = n
    },
    "076f": function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("a9e3");
        var o = {
            props: {
                text: {
                    type: [Array],
                    default: uni.$u.props.columnNotice.text
                },
                icon: {
                    type: String,
                    default: uni.$u.props.columnNotice.icon
                },
                mode: {
                    type: String,
                    default: uni.$u.props.columnNotice.mode
                },
                color: {
                    type: String,
                    default: uni.$u.props.columnNotice.color
                },
                bgColor: {
                    type: String,
                    default: uni.$u.props.columnNotice.bgColor
                },
                fontSize: {
                    type: [String, Number],
                    default: uni.$u.props.columnNotice.fontSize
                },
                speed: {
                    type: [String, Number],
                    default: uni.$u.props.columnNotice.speed
                },
                step: {
                    type: Boolean,
                    default: uni.$u.props.columnNotice.step
                },
                duration: {
                    type: [String, Number],
                    default: uni.$u.props.columnNotice.duration
                },
                disableTouch: {
                    type: Boolean,
                    default: uni.$u.props.columnNotice.disableTouch
                }
            }
        };
        e.default = o
    },
    "101a": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return o
        }
        )),
        a.d(e, "c", (function() {
            return i
        }
        )),
        a.d(e, "a", (function() {}
        ));
        var o = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "uni-countdown"
            }, [t.showDay ? a("v-uni-text", {
                staticClass: "uni-countdown__number",
                style: [t.timeStyle]
            }, [t._v(t._s(t.d))]) : t._e(), t.showDay ? a("v-uni-text", {
                staticClass: "uni-countdown__splitor",
                style: [t.splitorStyle]
            }, [t._v(t._s(t.dayText))]) : t._e(), a("v-uni-text", {
                staticClass: "uni-countdown__number",
                style: [t.timeStyle]
            }, [t._v(t._s(t.h))]), a("v-uni-text", {
                staticClass: "uni-countdown__splitor",
                style: [t.splitorStyle]
            }, [t._v(t._s(t.showColon ? ":" : t.hourText))]), a("v-uni-text", {
                staticClass: "uni-countdown__number",
                style: [t.timeStyle]
            }, [t._v(t._s(t.i))]), a("v-uni-text", {
                staticClass: "uni-countdown__splitor",
                style: [t.splitorStyle]
            }, [t._v(t._s(t.showColon ? ":" : t.minuteText))]), a("v-uni-text", {
                staticClass: "uni-countdown__number",
                style: [t.timeStyle]
            }, [t._v(t._s(t.s))]), t.showColon ? t._e() : a("v-uni-text", {
                staticClass: "uni-countdown__splitor",
                style: [t.splitorStyle]
            }, [t._v(t._s(t.secondText))])], 1)
        }
          , i = []
    },
    1332: function(t, e, a) {
        var o = a("232f");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
        var i = a("4f06").default;
        i("06c949a1", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    1617: function(t) {
        t.exports = JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"時","uni-countdown.m":"分","uni-countdown.s":"秒"}')
    },
    "1ce6": function(t) {
        t.exports = JSON.parse('{"uni-countdown.day":"天","uni-countdown.h":"时","uni-countdown.m":"分","uni-countdown.s":"秒"}')
    },
    "232f": function(t, e, a) {
        var o = a("24fb");
        e = o(!1),
        e.push([t.i, "uni-page-body[data-v-2972319e]{background:#e0f2f1}body.?%PAGE?%[data-v-2972319e]{background:#e0f2f1}.title[data-v-2972319e]{padding:0 %?20?%;height:%?88?%;display:flex;justify-content:space-between;align-items:center}.page[data-v-2972319e]{box-sizing:border-box}.page .top-notice[data-v-2972319e]{display:flex;align-items:center}.page .card[data-v-2972319e]{padding-bottom:%?20?%;margin:0 %?20?%;border-radius:%?20?%;height:70px;background-image:linear-gradient(25deg,#0d4b60,#1b7271,#219b81,#1fc791);display:flex;align-items:center;justify-content:space-evenly;box-shadow:0 3px 6px 1px rgba(0,0,0,.12);align-content:center;flex-wrap:nowrap;flex-direction:row}.page .card .active-item .cardtitle[data-v-2972319e]{color:#d4d4d4;font-size:%?20?%}.page .card .active-item .title[data-v-2972319e]{color:grey;font-size:%?20?%}.page .card .active-item .number[data-v-2972319e]{color:#aff;text-align:center;margin-top:%?10?%;font-size:%?36?%;font-family:Black Ops One}.page .tabs[data-v-2972319e]{margin-top:%?20?%}.page .goods-item[data-v-2972319e]{margin:%?20?%;background:#fff;box-shadow:0 %?6?% %?12?% %?2?% rgba(0,0,0,.12);border-radius:%?20?%;padding:%?20?%;position:relative;padding-bottom:%?4?%}.page .hot[data-v-2972319e]{position:absolute;top:%?12?%;left:%?12?%;width:%?80?%;height:%?38?%;line-height:%?38?%;text-align:center;font-size:%?24?%;color:#fff;font-weight:600;background-color:#e55e3c;border-radius:%?8?%}.page .goods-name[data-v-2972319e]{height:30px;line-height:30px;padding-bottom:%?20?%;color:#1abfac;display:flex;justify-content:center;align-items:flex-start;font-size:28rpxpx;font-weight:500;text-align:center;align-content:center;flex-wrap:nowrap;flex-direction:row;border-bottom:1px solid #eceff1;font-family:UTM Than Chien Tranh}.page .info[data-v-2972319e]{display:flex;padding-bottom:%?8?%;border-bottom:1px solid #e6e6e6;justify-content:center;align-content:center;flex-wrap:nowrap;flex-direction:row;align-items:center}.page .info .right[data-v-2972319e]{flex:1;margin-left:%?20?%;display:flex;flex-direction:column;justify-content:space-around}.page .info .info-item[data-v-2972319e]{display:flex;justify-content:space-between;font-size:%?20?%;align-content:center;flex-wrap:nowrap;flex-direction:row;align-items:center}.page .info .info-item .info-item-title[data-v-2972319e]{height:%?50?%;line-height:%?50?%;color:#9c9c9c}.page .info .info-item .info-item-number[data-v-2972319e]{height:%?50?%;line-height:%?50?%;color:#eaa02a;font-weight:500}.page .info .info-item .info-item-number.color-b[data-v-2972319e]{color:#1abfac}.page .panic-buying[data-v-2972319e]{display:flex;justify-content:space-between;padding:%?20?% 0}.page .panic-buying .tip[data-v-2972319e]{display:flex;align-items:center}.page .op[data-v-2972319e]{height:%?90?%;display:flex;justify-content:space-between;align-items:center}.page .op .price[data-v-2972319e]{color:#e55e3c;font-size:%?36?%;font-weight:700;flex:1}.page .op .buttons[data-v-2972319e]{flex:1;display:flex;justify-content:end;align-items:center}.page .op .buttons .btn-1[data-v-2972319e]{margin:0;padding:0 %?38?%;background-color:#eaa02a;border-radius:%?30?%;font-size:%?28?%;font-weight:400;justify-self:end}.page .op .buttons .btn-1[data-v-2972319e]::after{border:none}.page .op .buttons .btn-2[data-v-2972319e]{margin:0;margin-left:%?20?%;justify-self:end;padding:0 %?38?%;background-color:#1abfac;border-radius:%?30?%;font-size:%?28?%}.page .op .buttons .btn-2[data-v-2972319e]::after{border:none}.page .op .buttons .btn-2-disabled[data-v-2972319e]{margin:0;margin-left:%?20?%;justify-self:end;padding:0 %?38?%;background-color:#ebebeb;border-radius:%?30?%;font-size:%?28?%;color:#fff}.page .op .buttons .btn-2-disabled[data-v-2972319e]::after{border:none}", ""]),
        t.exports = e
    },
    "236f": function(t) {
        t.exports = JSON.parse('{"uni-countdown.day":"day","uni-countdown.h":"h","uni-countdown.m":"m","uni-countdown.s":"s"}')
    },
    "2a8b": function(t, e, a) {
        var o = a("624a");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
        var i = a("4f06").default;
        i("f771f92a", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "2f1d": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return n
        }
        )),
        a.d(e, "a", (function() {
            return o
        }
        ));
        var o = {
            uIcon: a("d168").default
        }
          , i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "u-notice",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.clickHandler.apply(void 0, arguments)
                    }
                }
            }, [t._t("icon", [t.icon ? a("v-uni-view", {
                staticClass: "u-notice__left-icon"
            }, [a("u-icon", {
                attrs: {
                    name: t.icon,
                    color: t.color,
                    size: "19",
                    customStyle: {
                        fontSize: "20px"
                    }
                }
            })], 1) : t._e()]), a("v-uni-view", {
                ref: "u-notice__content",
                staticClass: "u-notice__content"
            }, [a("v-uni-view", {
                ref: "u-notice__content__text",
                staticClass: "u-notice__content__text",
                style: [t.animationStyle]
            }, t._l(t.innerText, (function(e, o) {
                return a("v-uni-text", {
                    key: o,
                    style: [t.textStyle]
                }, [t._v(t._s(e))])
            }
            )), 1)], 1), ["link", "closable"].includes(t.mode) ? a("v-uni-view", {
                staticClass: "u-notice__right-icon"
            }, ["link" === t.mode ? a("u-icon", {
                attrs: {
                    name: "arrow-right",
                    size: 17,
                    color: t.color
                }
            }) : t._e(), "closable" === t.mode ? a("u-icon", {
                attrs: {
                    name: "close",
                    size: 16,
                    color: t.color
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e()], 2)
        }
          , n = []
    },
    3016: function(t, e, a) {
        "use strict";
        a("7a82");
        var o = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = o(a("236f"))
          , n = o(a("1ce6"))
          , r = o(a("1617"))
          , c = {
            en: i.default,
            "zh-Hans": n.default,
            "zh-Hant": r.default
        };
        e.default = c
    },
    3376: function(t, e, a) {
        "use strict";
        var o = a("481b")
          , i = a.n(o);
        i.a
    },
    3819: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("c587")
          , i = a("d097");
        for (var n in i)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(n);
        a("e9a9");
        var r = a("f0c5")
          , c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "485c3904", null, !1, o["a"], void 0);
        e["default"] = c.exports
    },
    "481b": function(t, e, a) {
        var o = a("bf81");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
        var i = a("4f06").default;
        i("26f515d9", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "48fe": function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return n
        }
        )),
        a.d(e, "a", (function() {
            return o
        }
        ));
        var o = {
            uColumnNotice: a("3819").default,
            uRowNotice: a("01a7").default
        }
          , i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return t.show ? a("v-uni-view", {
                staticClass: "u-notice-bar",
                style: [{
                    backgroundColor: t.bgColor
                }, t.$u.addStyle(t.customStyle)]
            }, ["column" === t.direction || "row" === t.direction && t.step ? [a("u-column-notice", {
                attrs: {
                    color: t.color,
                    bgColor: t.bgColor,
                    text: t.text,
                    mode: t.mode,
                    step: t.step,
                    icon: t.icon,
                    "disable-touch": t.disableTouch,
                    fontSize: t.fontSize,
                    duration: t.duration
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    },
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.click.apply(void 0, arguments)
                    }
                }
            })] : [a("u-row-notice", {
                attrs: {
                    color: t.color,
                    bgColor: t.bgColor,
                    text: t.text,
                    mode: t.mode,
                    fontSize: t.fontSize,
                    speed: t.speed,
                    url: t.url,
                    linkType: t.linkType,
                    icon: t.icon
                },
                on: {
                    close: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    },
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.click.apply(void 0, arguments)
                    }
                }
            })]], 2) : t._e()
        }
          , n = []
    },
    4978: function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return n
        }
        )),
        a.d(e, "a", (function() {
            return o
        }
        ));
        var o = {
            uImage: a("30ab").default,
            uIcon: a("d168").default,
            uNoticeBar: a("b28e").default,
            uTabs: a("3cbd").default,
            "u-Image": a("3360").default,
            uniCountdown: a("81ac").default
        }
          , i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "page"
            }, [a("v-uni-view", {
                staticClass: "title"
            }, [a("v-uni-view", [a("u-image", {
                attrs: {
                    shape: "circle",
                    src: t.logo,
                    width: "60rpx",
                    height: "60rpx"
                }
            })], 1), a("v-uni-view", {
                staticStyle: {
                    "font-weight": "700"
                }
            }, [t._v(t._s(t.$t("index.market")))]), a("v-uni-view", {
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.rightClick.apply(void 0, arguments)
                    }
                }
            }, [a("u-icon", {
                attrs: {
                    name: t.icons[0],
                    size: "60rpx"
                }
            })], 1)], 1), a("v-uni-view", {
                staticClass: "top-notice"
            }, [a("u-notice-bar", {
                attrs: {
                    bgColor: "transparent",
                    text: t.notice,
                    color: "rgba(51, 51, 51, 1)",
                    fontSize: "28rpx"
                }
            })], 1), a("v-uni-view", {
                staticClass: "card"
            }, [a("v-uni-view", {
                staticClass: "active-item"
            }, [a("v-uni-view", {
                staticClass: "number"
            }, [t._v(t._s(t.activeCount.one))]), a("v-uni-view", {
                staticClass: "cardtitle"
            }, [t._v(t._s(t.$t("market.mi1")))])], 1), a("v-uni-view", {
                staticClass: "active-item"
            }, [a("v-uni-view", {
                staticClass: "number"
            }, [t._v(t._s(t.activeCount.two))]), a("v-uni-view", {
                staticClass: "cardtitle"
            }, [t._v(t._s(t.$t("market.mi2")))])], 1), a("v-uni-view", {
                staticClass: "active-item"
            }, [a("v-uni-view", {
                staticClass: "number"
            }, [t._v(t._s(t.activeCount.three))]), a("v-uni-view", {
                staticClass: "cardtitle"
            }, [t._v(t._s(t.$t("market.mi3")))])], 1)], 1), a("u-tabs", {
                staticClass: "tabs",
                attrs: {
                    list: t.tabList,
                    lineHeight: "4rpx",
                    lineWidth: "160rpx",
                    lineColor: "rgba(26, 191, 172, 1)",
                    activeStyle: {
                        color: "rgba(51, 51, 51, 1)",
                        fontWeight: "500"
                    },
                    inactiveStyle: {
                        color: "rgba(128, 128, 128, 1)"
                    },
                    itemStyle: "width: 50%; box-sizing: border-box; padding: 10rpx 0;"
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.tabChange.apply(void 0, arguments)
                    }
                }
            }), t._l(1 === t.active ? t.list1 : t.list2, (function(e, o) {
                return a("v-uni-view", {
                    key: o,
                    staticClass: "goods-item"
                }, [2 == e.is_hot ? a("v-uni-view", {
                    staticClass: "hot"
                }, [t._v("HOT")]) : t._e(), a("v-uni-view", {
                    staticClass: "goods-name"
                }, [t._v(t._s(e.name))]), a("v-uni-view", {
                    staticClass: "info"
                }, [a("u--image", {
                    attrs: {
                        showLoading: !0,
                        radius: "8rpx",
                        src: e.img,
                        width: "220rpx",
                        height: "220rpx"
                    }
                }), a("v-uni-view", {
                    staticClass: "right"
                }, [a("v-uni-view", {
                    staticClass: "info-item"
                }, [a("v-uni-text", {
                    staticClass: "info-item-title"
                }, [t._v(t._s(t.$t("market.mi6")) + "：")]), a("v-uni-text", {
                    staticClass: "info-item-number"
                }, [t._v(t._s(e.income_day) + "$")])], 1), a("v-uni-view", {
                    staticClass: "info-item"
                }, [a("v-uni-text", {
                    staticClass: "info-item-title"
                }, [t._v(t._s(t.$t("market.mi7")) + "：")]), a("v-uni-text", {
                    staticClass: "info-item-number color-b"
                }, [t._v(t._s(e.computing_power) + t._s(t.$t("market.mi8")))])], 1), a("v-uni-view", {
                    staticClass: "info-item"
                }, [a("v-uni-text", {
                    staticClass: "info-item-title"
                }, [t._v(t._s(t.$t("market.mi9")) + "：")]), a("v-uni-text", {
                    staticClass: "info-item-number"
                }, [t._v(t._s(e.income_all) + "$")])], 1), e.max_mall ? a("v-uni-view", {
                    staticClass: "info-item"
                }, [a("v-uni-text", {
                    staticClass: "info-item-title"
                }, [t._v(t._s(t.$t("market.mi10")) + "：")]), a("v-uni-text", {
                    staticClass: "info-item-number color-b"
                }, [t._v(t._s(e.max_mall))])], 1) : t._e(), a("v-uni-view", {
                    staticClass: "info-item"
                }, [a("v-uni-text", {
                    staticClass: "info-item-title"
                }, [t._v(t._s(t.$t("market.mi11")) + "：")]), a("v-uni-text", {
                    staticClass: "info-item-number color-b"
                }, [t._v(t._s(e.time) + t._s(t.$t("index.day")))])], 1)], 1)], 1), 2 == e.limited_buy ? a("v-uni-view", {
                    staticClass: "panic-buying"
                }, [a("v-uni-text", {
                    staticClass: "tip"
                }, [t._v(t._s(t.$t("index.tip")))]), a("uni-countdown", {
                    attrs: {
                        "font-size": 16,
                        dayTextY: t.$t("index.day"),
                        day: e.day,
                        hour: e.hour,
                        minute: e.minute,
                        second: e.second,
                        color: "#FFFFFF",
                        "background-color": "#007AFF"
                    }
                })], 1) : t._e(), a("v-uni-view", {
                    staticClass: "op"
                }, [a("v-uni-view", {
                    staticClass: "price"
                }, [t._v(t._s(e.money) + "$")]), a("v-uni-view", {
                    staticClass: "buttons"
                }, [a("v-uni-button", {
                    class: t.getBtnClass(e.status),
                    attrs: {
                        size: "mini",
                        type: "primary",
                        disabled: 2 === e.status
                    },
                    on: {
                        click: function(a) {
                            arguments[0] = a = t.$handleEvent(a),
                            t.buy(e)
                        }
                    }
                }, [t._v(t._s(t.$t("market.mi13")))])], 1)], 1)], 1)
            }
            ))], 2)
        }
          , n = []
    },
    "543e": function(t, e, a) {
        "use strict";
        var o = a("2a8b")
          , i = a.n(o);
        i.a
    },
    "5c82": function(t, e, a) {
        "use strict";
        a("7a82");
        var o = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("e9c4"),
        a("99af");
        var i = o(a("6ec0"))
          , n = {
            data: function() {
                return {
                    logo: "../../static/images/kbp_logo.png",
                    now: (new Date).getTime(),
                    timeData: {},
                    page: 0,
                    list: [],
                    list1: [],
                    list2: [],
                    avatarUrl: "",
                    icons: [i.default],
                    notice: "",
                    active: 1,
                    activeCount: {
                        one: 0,
                        two: 0,
                        three: 0
                    },
                    tabList: [{
                        name: this.$t("market.mi4"),
                        type: 1
                    }, {
                        name: this.$t("market.mi5"),
                        type: 2
                    }]
                }
            },
            methods: {
                onChange: function(t) {
                    this.timeData = t
                },
                getUserInfo: function() {
                    var t = this;
                    this.$http.post("/api/v2/get/user").then((function(e) {
                        t.avatarUrl = e.data.head_img
                    }
                    ))
                },
                getNotice: function() {
                    var t = this;
                    this.$http.post("/api/v1/notice", {
                        type: 4
                    }).then((function(e) {
                        t.notice = e.data.content
                    }
                    ))
                },
                buy: function(t) {
                    uni.navigateTo({
                        url: "../buy/buy?goods=" + encodeURIComponent(JSON.stringify(t))
                    })
                },
                rightClick: function() {
                    uni.navigateTo({
                        url: "../invest/invest"
                    })
                },
                tabChange: function(t) {
                    this.active = t.type,
                    this.page = 0,
                    this.list1 = [],
                    this.list2 = [],
                    this.getMiner(t.type)
                },
                getActive: function() {
                    var t = this;
                    this.$http.post("/api/v2/active/count").then((function(e) {
                        t.activeCount = e.data
                    }
                    ))
                },
                getMiner: function(t) {
                    var e = this;
                    this.$http.post("/api/v2/miner/list", {
                        type: t,
                        page: ++this.page,
                        num: 10
                    }).then((function(t) {
                        1 === e.active ? e.list1 = e.list1.concat(t.data.list) : 2 === e.active && (e.list2 = e.list2.concat(t.data.list))
                    }
                    ))
                },
                getBtnClass: function(t) {
                    return 2 === t ? "btn-2-disabled" : "btn-2"
                }
            },
            mounted: function() {
                this.getUserInfo(),
                this.getNotice(),
                this.getActive(),
                this.getMiner(this.active)
            },
            onReachBottom: function() {
                this.getMiner(this.active)
            }
        };
        e.default = n
    },
    "5e0c": function(t, e, a) {
        "use strict";
        a("7a82");
        var o = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0;
        var i = o(a("c7eb"))
          , n = o(a("1da1"));
        a("ac1f"),
        a("00b4"),
        a("14d9"),
        a("fb6a");
        var r = o(a("9276"))
          , c = {
            name: "u-row-notice",
            mixins: [uni.$u.mpMixin, uni.$u.mixin, r.default],
            data: function() {
                return {
                    animationDuration: "0",
                    animationPlayState: "paused",
                    nvueInit: !0,
                    show: !0
                }
            },
            watch: {
                text: {
                    immediate: !0,
                    handler: function(t, e) {
                        this.vue(),
                        uni.$u.test.string(t) || uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")
                    }
                },
                fontSize: function() {
                    this.vue()
                },
                speed: function() {
                    this.vue()
                }
            },
            computed: {
                textStyle: function() {
                    var t = {};
                    return t.color = this.color,
                    t.fontSize = uni.$u.addUnit(this.fontSize),
                    t
                },
                animationStyle: function() {
                    var t = {};
                    return t.animationDuration = this.animationDuration,
                    t.animationPlayState = this.animationPlayState,
                    t
                },
                innerText: function() {
                    for (var t = [], e = this.text.split(""), a = 0; a < e.length; a += 20)
                        t.push(e.slice(a, a + 20).join(""));
                    return t
                }
            },
            mounted: function() {
                this.init()
            },
            methods: {
                init: function() {
                    this.vue(),
                    uni.$u.test.string(this.text) || uni.$u.error("noticebar组件direction为row时，要求text参数为字符串形式")
                },
                vue: function() {
                    var t = this;
                    return (0,
                    n.default)((0,
                    i.default)().mark((function e() {
                        var a;
                        return (0,
                        i.default)().wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return 0,
                                    a = 0,
                                    e.next = 3,
                                    uni.$u.sleep();
                                case 3:
                                    return e.next = 5,
                                    t.$uGetRect(".u-notice__content__text");
                                case 5:
                                    return a = e.sent.width,
                                    e.next = 8,
                                    t.$uGetRect(".u-notice__content");
                                case 8:
                                    e.sent.width,
                                    t.animationDuration = "".concat(a / uni.$u.getPx(t.speed), "s"),
                                    t.animationPlayState = "paused",
                                    setTimeout((function() {
                                        t.animationPlayState = "running"
                                    }
                                    ), 10);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                nvue: function() {
                    return (0,
                    n.default)((0,
                    i.default)().mark((function t() {
                        return (0,
                        i.default)().wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                loopAnimation: function(t, e) {},
                getNvueRect: function(t) {},
                clickHandler: function(t) {
                    this.$emit("click")
                },
                close: function() {
                    this.$emit("close")
                }
            }
        };
        e.default = c
    },
    "624a": function(t, e, a) {
        var o = a("24fb");
        e = o(!1),
        e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-line-1[data-v-447d6c2e]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-447d6c2e]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-447d6c2e]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-447d6c2e]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-447d6c2e]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-447d6c2e]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-447d6c2e]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-447d6c2e]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-447d6c2e]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-447d6c2e]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-447d6c2e]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-447d6c2e]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-447d6c2e]::after{border:none}.u-hover-class[data-v-447d6c2e]{opacity:.7}.u-primary-light[data-v-447d6c2e]{color:#ecf5ff}.u-warning-light[data-v-447d6c2e]{color:#fdf6ec}.u-success-light[data-v-447d6c2e]{color:#f5fff0}.u-error-light[data-v-447d6c2e]{color:#fef0f0}.u-info-light[data-v-447d6c2e]{color:#f4f4f5}.u-primary-light-bg[data-v-447d6c2e]{background-color:#ecf5ff}.u-warning-light-bg[data-v-447d6c2e]{background-color:#fdf6ec}.u-success-light-bg[data-v-447d6c2e]{background-color:#f5fff0}.u-error-light-bg[data-v-447d6c2e]{background-color:#fef0f0}.u-info-light-bg[data-v-447d6c2e]{background-color:#f4f4f5}.u-primary-dark[data-v-447d6c2e]{color:#398ade}.u-warning-dark[data-v-447d6c2e]{color:#f1a532}.u-success-dark[data-v-447d6c2e]{color:#53c21d}.u-error-dark[data-v-447d6c2e]{color:#e45656}.u-info-dark[data-v-447d6c2e]{color:#767a82}.u-primary-dark-bg[data-v-447d6c2e]{background-color:#398ade}.u-warning-dark-bg[data-v-447d6c2e]{background-color:#f1a532}.u-success-dark-bg[data-v-447d6c2e]{background-color:#53c21d}.u-error-dark-bg[data-v-447d6c2e]{background-color:#e45656}.u-info-dark-bg[data-v-447d6c2e]{background-color:#767a82}.u-primary-disabled[data-v-447d6c2e]{color:#9acafc}.u-warning-disabled[data-v-447d6c2e]{color:#f9d39b}.u-success-disabled[data-v-447d6c2e]{color:#a9e08f}.u-error-disabled[data-v-447d6c2e]{color:#f7b2b2}.u-info-disabled[data-v-447d6c2e]{color:#c4c6c9}.u-primary[data-v-447d6c2e]{color:#3c9cff}.u-warning[data-v-447d6c2e]{color:#f9ae3d}.u-success[data-v-447d6c2e]{color:#5ac725}.u-error[data-v-447d6c2e]{color:#f56c6c}.u-info[data-v-447d6c2e]{color:#909399}.u-primary-bg[data-v-447d6c2e]{background-color:#3c9cff}.u-warning-bg[data-v-447d6c2e]{background-color:#f9ae3d}.u-success-bg[data-v-447d6c2e]{background-color:#5ac725}.u-error-bg[data-v-447d6c2e]{background-color:#f56c6c}.u-info-bg[data-v-447d6c2e]{background-color:#909399}.u-main-color[data-v-447d6c2e]{color:#303133}.u-content-color[data-v-447d6c2e]{color:#606266}.u-tips-color[data-v-447d6c2e]{color:#909193}.u-light-color[data-v-447d6c2e]{color:#c0c4cc}.u-safe-area-inset-top[data-v-447d6c2e]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-447d6c2e]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-447d6c2e]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-447d6c2e]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-447d6c2e]{z-index:10090}uni-toast .uni-toast[data-v-447d6c2e]{z-index:10090}[data-v-447d6c2e]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-view[data-v-447d6c2e], uni-scroll-view[data-v-447d6c2e], uni-swiper-item[data-v-447d6c2e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-447d6c2e]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-447d6c2e]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-447d6c2e]{margin-left:5px;align-items:center}.u-notice__content[data-v-447d6c2e]{text-align:right;flex:1;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden}.u-notice__content__text[data-v-447d6c2e]{font-size:14px;color:#f9ae3d;padding-left:100%;word-break:keep-all;white-space:nowrap;-webkit-animation:u-loop-animation-data-v-447d6c2e 10s linear infinite both;animation:u-loop-animation-data-v-447d6c2e 10s linear infinite both;display:flex;flex-direction:row}@-webkit-keyframes u-loop-animation-data-v-447d6c2e{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-447d6c2e{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}', ""]),
        t.exports = e
    },
    "6ec0": function(t, e, a) {
        t.exports = a.p + "static/img/矿工.dce50503.svg"
    },
    "7bed": function(t, e, a) {
        var o = a("9b00");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
        var i = a("4f06").default;
        i("a201b074", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "81ac": function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("101a")
          , i = a("8881");
        for (var n in i)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(n);
        a("89b8");
        var r = a("f0c5")
          , c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "500203f4", null, !1, o["a"], void 0);
        e["default"] = c.exports
    },
    "84cf": function(t, e, a) {
        "use strict";
        a("7a82");
        var o = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("ac1f"),
        a("00b4");
        var i = o(a("076f"))
          , n = {
            mixins: [uni.$u.mpMixin, uni.$u.mixin, i.default],
            watch: {
                text: {
                    immediate: !0,
                    handler: function(t, e) {
                        uni.$u.test.array(t) || uni.$u.error("noticebar组件direction为column时，要求text参数为数组形式")
                    }
                }
            },
            computed: {
                textStyle: function() {
                    var t = {};
                    return t.color = this.color,
                    t.fontSize = uni.$u.addUnit(this.fontSize),
                    t
                },
                vertical: function() {
                    return "horizontal" != this.mode
                }
            },
            data: function() {
                return {
                    index: 0
                }
            },
            methods: {
                noticeChange: function(t) {
                    this.index = t.detail.current
                },
                clickHandler: function() {
                    this.$emit("click", this.index)
                },
                close: function() {
                    this.$emit("close")
                }
            }
        };
        e.default = n
    },
    "86f8": function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("5c82")
          , i = a.n(o);
        for (var n in o)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return o[t]
                }
                ))
            }(n);
        e["default"] = i.a
    },
    8868: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("4978")
          , i = a("86f8");
        for (var n in i)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(n);
        a("ee02");
        var r = a("f0c5")
          , c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "2972319e", null, !1, o["a"], void 0);
        e["default"] = c.exports
    },
    8881: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("d031")
          , i = a.n(o);
        for (var n in o)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return o[t]
                }
                ))
            }(n);
        e["default"] = i.a
    },
    "89b8": function(t, e, a) {
        "use strict";
        var o = a("e383")
          , i = a.n(o);
        i.a
    },
    9276: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("a9e3");
        var o = {
            props: {
                text: {
                    type: String,
                    default: uni.$u.props.rowNotice.text
                },
                icon: {
                    type: String,
                    default: uni.$u.props.rowNotice.icon
                },
                mode: {
                    type: String,
                    default: uni.$u.props.rowNotice.mode
                },
                color: {
                    type: String,
                    default: uni.$u.props.rowNotice.color
                },
                bgColor: {
                    type: String,
                    default: uni.$u.props.rowNotice.bgColor
                },
                fontSize: {
                    type: [String, Number],
                    default: uni.$u.props.rowNotice.fontSize
                },
                speed: {
                    type: [String, Number],
                    default: uni.$u.props.rowNotice.speed
                }
            }
        };
        e.default = o
    },
    "9b00": function(t, e, a) {
        var o = a("24fb");
        e = o(!1),
        e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-line-1[data-v-485c3904]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-485c3904]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-485c3904]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-485c3904]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-485c3904]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-485c3904]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-485c3904]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-485c3904]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-485c3904]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-485c3904]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-485c3904]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-485c3904]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-485c3904]::after{border:none}.u-hover-class[data-v-485c3904]{opacity:.7}.u-primary-light[data-v-485c3904]{color:#ecf5ff}.u-warning-light[data-v-485c3904]{color:#fdf6ec}.u-success-light[data-v-485c3904]{color:#f5fff0}.u-error-light[data-v-485c3904]{color:#fef0f0}.u-info-light[data-v-485c3904]{color:#f4f4f5}.u-primary-light-bg[data-v-485c3904]{background-color:#ecf5ff}.u-warning-light-bg[data-v-485c3904]{background-color:#fdf6ec}.u-success-light-bg[data-v-485c3904]{background-color:#f5fff0}.u-error-light-bg[data-v-485c3904]{background-color:#fef0f0}.u-info-light-bg[data-v-485c3904]{background-color:#f4f4f5}.u-primary-dark[data-v-485c3904]{color:#398ade}.u-warning-dark[data-v-485c3904]{color:#f1a532}.u-success-dark[data-v-485c3904]{color:#53c21d}.u-error-dark[data-v-485c3904]{color:#e45656}.u-info-dark[data-v-485c3904]{color:#767a82}.u-primary-dark-bg[data-v-485c3904]{background-color:#398ade}.u-warning-dark-bg[data-v-485c3904]{background-color:#f1a532}.u-success-dark-bg[data-v-485c3904]{background-color:#53c21d}.u-error-dark-bg[data-v-485c3904]{background-color:#e45656}.u-info-dark-bg[data-v-485c3904]{background-color:#767a82}.u-primary-disabled[data-v-485c3904]{color:#9acafc}.u-warning-disabled[data-v-485c3904]{color:#f9d39b}.u-success-disabled[data-v-485c3904]{color:#a9e08f}.u-error-disabled[data-v-485c3904]{color:#f7b2b2}.u-info-disabled[data-v-485c3904]{color:#c4c6c9}.u-primary[data-v-485c3904]{color:#3c9cff}.u-warning[data-v-485c3904]{color:#f9ae3d}.u-success[data-v-485c3904]{color:#5ac725}.u-error[data-v-485c3904]{color:#f56c6c}.u-info[data-v-485c3904]{color:#909399}.u-primary-bg[data-v-485c3904]{background-color:#3c9cff}.u-warning-bg[data-v-485c3904]{background-color:#f9ae3d}.u-success-bg[data-v-485c3904]{background-color:#5ac725}.u-error-bg[data-v-485c3904]{background-color:#f56c6c}.u-info-bg[data-v-485c3904]{background-color:#909399}.u-main-color[data-v-485c3904]{color:#303133}.u-content-color[data-v-485c3904]{color:#606266}.u-tips-color[data-v-485c3904]{color:#909193}.u-light-color[data-v-485c3904]{color:#c0c4cc}.u-safe-area-inset-top[data-v-485c3904]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-485c3904]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-485c3904]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-485c3904]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-485c3904]{z-index:10090}uni-toast .uni-toast[data-v-485c3904]{z-index:10090}[data-v-485c3904]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-view[data-v-485c3904], uni-scroll-view[data-v-485c3904], uni-swiper-item[data-v-485c3904]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice[data-v-485c3904]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.u-notice__left-icon[data-v-485c3904]{align-items:center;margin-right:5px}.u-notice__right-icon[data-v-485c3904]{margin-left:5px;align-items:center}.u-notice__swiper[data-v-485c3904]{height:16px;display:flex;flex-direction:row;align-items:center;flex:1}.u-notice__swiper__item[data-v-485c3904]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.u-notice__swiper__item__text[data-v-485c3904]{font-size:14px;color:#f9ae3d}', ""]),
        t.exports = e
    },
    b28e: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("48fe")
          , i = a("e0ff");
        for (var n in i)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(n);
        a("3376");
        var r = a("f0c5")
          , c = Object(r["a"])(i["default"], o["b"], o["c"], !1, null, "47c738b8", null, !1, o["a"], void 0);
        e["default"] = c.exports
    },
    bf81: function(t, e, a) {
        var o = a("24fb");
        e = o(!1),
        e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-line-1[data-v-47c738b8]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-47c738b8]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-47c738b8]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-47c738b8]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-47c738b8]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-47c738b8]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-47c738b8]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-47c738b8]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-47c738b8]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-47c738b8]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-47c738b8]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-47c738b8]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-47c738b8]::after{border:none}.u-hover-class[data-v-47c738b8]{opacity:.7}.u-primary-light[data-v-47c738b8]{color:#ecf5ff}.u-warning-light[data-v-47c738b8]{color:#fdf6ec}.u-success-light[data-v-47c738b8]{color:#f5fff0}.u-error-light[data-v-47c738b8]{color:#fef0f0}.u-info-light[data-v-47c738b8]{color:#f4f4f5}.u-primary-light-bg[data-v-47c738b8]{background-color:#ecf5ff}.u-warning-light-bg[data-v-47c738b8]{background-color:#fdf6ec}.u-success-light-bg[data-v-47c738b8]{background-color:#f5fff0}.u-error-light-bg[data-v-47c738b8]{background-color:#fef0f0}.u-info-light-bg[data-v-47c738b8]{background-color:#f4f4f5}.u-primary-dark[data-v-47c738b8]{color:#398ade}.u-warning-dark[data-v-47c738b8]{color:#f1a532}.u-success-dark[data-v-47c738b8]{color:#53c21d}.u-error-dark[data-v-47c738b8]{color:#e45656}.u-info-dark[data-v-47c738b8]{color:#767a82}.u-primary-dark-bg[data-v-47c738b8]{background-color:#398ade}.u-warning-dark-bg[data-v-47c738b8]{background-color:#f1a532}.u-success-dark-bg[data-v-47c738b8]{background-color:#53c21d}.u-error-dark-bg[data-v-47c738b8]{background-color:#e45656}.u-info-dark-bg[data-v-47c738b8]{background-color:#767a82}.u-primary-disabled[data-v-47c738b8]{color:#9acafc}.u-warning-disabled[data-v-47c738b8]{color:#f9d39b}.u-success-disabled[data-v-47c738b8]{color:#a9e08f}.u-error-disabled[data-v-47c738b8]{color:#f7b2b2}.u-info-disabled[data-v-47c738b8]{color:#c4c6c9}.u-primary[data-v-47c738b8]{color:#3c9cff}.u-warning[data-v-47c738b8]{color:#f9ae3d}.u-success[data-v-47c738b8]{color:#5ac725}.u-error[data-v-47c738b8]{color:#f56c6c}.u-info[data-v-47c738b8]{color:#909399}.u-primary-bg[data-v-47c738b8]{background-color:#3c9cff}.u-warning-bg[data-v-47c738b8]{background-color:#f9ae3d}.u-success-bg[data-v-47c738b8]{background-color:#5ac725}.u-error-bg[data-v-47c738b8]{background-color:#f56c6c}.u-info-bg[data-v-47c738b8]{background-color:#909399}.u-main-color[data-v-47c738b8]{color:#303133}.u-content-color[data-v-47c738b8]{color:#606266}.u-tips-color[data-v-47c738b8]{color:#909193}.u-light-color[data-v-47c738b8]{color:#c0c4cc}.u-safe-area-inset-top[data-v-47c738b8]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-47c738b8]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-47c738b8]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-47c738b8]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-47c738b8]{z-index:10090}uni-toast .uni-toast[data-v-47c738b8]{z-index:10090}[data-v-47c738b8]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-view[data-v-47c738b8], uni-scroll-view[data-v-47c738b8], uni-swiper-item[data-v-47c738b8]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-notice-bar[data-v-47c738b8]{overflow:hidden;padding:9px 12px;flex:1}', ""]),
        t.exports = e
    },
    c587: function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return n
        }
        )),
        a.d(e, "a", (function() {
            return o
        }
        ));
        var o = {
            uIcon: a("d168").default
        }
          , i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("v-uni-view", {
                staticClass: "u-notice",
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.clickHandler.apply(void 0, arguments)
                    }
                }
            }, [t._t("icon", [t.icon ? a("v-uni-view", {
                staticClass: "u-notice__left-icon"
            }, [a("u-icon", {
                attrs: {
                    name: t.icon,
                    color: t.color,
                    size: "19"
                }
            })], 1) : t._e()]), a("v-uni-swiper", {
                staticClass: "u-notice__swiper",
                attrs: {
                    "disable-touch": t.disableTouch,
                    vertical: !t.step,
                    circular: !0,
                    interval: t.duration,
                    autoplay: !0
                },
                on: {
                    change: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.noticeChange.apply(void 0, arguments)
                    }
                }
            }, t._l(t.text, (function(e, o) {
                return a("v-uni-swiper-item", {
                    key: o,
                    staticClass: "u-notice__swiper__item"
                }, [a("v-uni-text", {
                    staticClass: "u-notice__swiper__item__text u-line-1",
                    style: [t.textStyle]
                }, [t._v(t._s(e))])], 1)
            }
            )), 1), ["link", "closable"].includes(t.mode) ? a("v-uni-view", {
                staticClass: "u-notice__right-icon"
            }, ["link" === t.mode ? a("u-icon", {
                attrs: {
                    name: "arrow-right",
                    size: 17,
                    color: t.color
                }
            }) : t._e(), "closable" === t.mode ? a("u-icon", {
                attrs: {
                    name: "close",
                    size: 16,
                    color: t.color
                },
                on: {
                    click: function(e) {
                        arguments[0] = e = t.$handleEvent(e),
                        t.close.apply(void 0, arguments)
                    }
                }
            }) : t._e()], 1) : t._e()], 2)
        }
          , n = []
    },
    d031: function(t, e, a) {
        "use strict";
        a("7a82");
        var o = a("4ea4").default;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("a9e3"),
        a("e25e");
        var i = a("37dc")
          , n = o(a("3016"))
          , r = (0,
        i.initVueI18n)(n.default)
          , c = r.t
          , d = {
            name: "UniCountdown",
            emits: ["timeup"],
            props: {
                showDay: {
                    type: Boolean,
                    default: !0
                },
                showColon: {
                    type: Boolean,
                    default: !0
                },
                start: {
                    type: Boolean,
                    default: !0
                },
                backgroundColor: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: "#333"
                },
                fontSize: {
                    type: Number,
                    default: 14
                },
                splitorColor: {
                    type: String,
                    default: "#333"
                },
                day: {
                    type: Number,
                    default: 0
                },
                hour: {
                    type: Number,
                    default: 0
                },
                minute: {
                    type: Number,
                    default: 0
                },
                second: {
                    type: Number,
                    default: 0
                },
                timestamp: {
                    type: Number,
                    default: 0
                },
                dayTextY: {
                    type: String,
                    default: "天"
                }
            },
            data: function() {
                return {
                    timer: null,
                    syncFlag: !1,
                    d: "00",
                    h: "00",
                    i: "00",
                    s: "00",
                    leftTime: 0,
                    seconds: 0
                }
            },
            computed: {
                dayText: function() {
                    return this.dayTextY
                },
                hourText: function(t) {
                    return c("uni-countdown.h")
                },
                minuteText: function(t) {
                    return c("uni-countdown.m")
                },
                secondText: function(t) {
                    return c("uni-countdown.s")
                },
                timeStyle: function() {
                    var t = this.color
                      , e = this.backgroundColor
                      , a = this.fontSize;
                    return {
                        color: t,
                        backgroundColor: e,
                        fontSize: "".concat(a, "px"),
                        width: "".concat(26 * a / 14, "px"),
                        lineHeight: "".concat(20 * a / 14, "px"),
                        borderRadius: "".concat(3 * a / 14, "px")
                    }
                },
                splitorStyle: function() {
                    var t = this.splitorColor
                      , e = this.fontSize
                      , a = this.backgroundColor;
                    return {
                        color: t,
                        fontSize: "".concat(12 * e / 14, "px"),
                        margin: a ? "".concat(4 * e / 14, "px") : ""
                    }
                }
            },
            watch: {
                day: function(t) {
                    this.changeFlag()
                },
                hour: function(t) {
                    this.changeFlag()
                },
                minute: function(t) {
                    this.changeFlag()
                },
                second: function(t) {
                    this.changeFlag()
                },
                start: {
                    immediate: !0,
                    handler: function(t, e) {
                        if (t)
                            this.startData();
                        else {
                            if (!e)
                                return;
                            clearInterval(this.timer)
                        }
                    }
                }
            },
            created: function(t) {
                this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second),
                this.countDown()
            },
            destroyed: function() {
                clearInterval(this.timer)
            },
            methods: {
                toSeconds: function(t, e, a, o, i) {
                    return t ? t - parseInt((new Date).getTime() / 1e3, 10) : 60 * e * 60 * 24 + 60 * a * 60 + 60 * o + i
                },
                timeUp: function() {
                    clearInterval(this.timer),
                    this.$emit("timeup")
                },
                countDown: function() {
                    var t = this.seconds
                      , e = 0
                      , a = 0
                      , o = 0
                      , i = 0;
                    t > 0 ? (e = Math.floor(t / 86400),
                    a = Math.floor(t / 3600) - 24 * e,
                    o = Math.floor(t / 60) - 24 * e * 60 - 60 * a,
                    i = Math.floor(t) - 24 * e * 60 * 60 - 60 * a * 60 - 60 * o) : this.timeUp(),
                    e < 10 && (e = "0" + e),
                    a < 10 && (a = "0" + a),
                    o < 10 && (o = "0" + o),
                    i < 10 && (i = "0" + i),
                    this.d = e,
                    this.h = a,
                    this.i = o,
                    this.s = i
                },
                startData: function() {
                    var t = this;
                    if (this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second),
                    this.seconds <= 0)
                        return this.seconds = this.toSeconds(0, 0, 0, 0, 0),
                        void this.countDown();
                    clearInterval(this.timer),
                    this.countDown(),
                    this.timer = setInterval((function() {
                        t.seconds--,
                        t.seconds < 0 ? t.timeUp() : t.countDown()
                    }
                    ), 1e3)
                },
                update: function() {
                    this.startData()
                },
                changeFlag: function() {
                    this.syncFlag || (this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second),
                    this.startData(),
                    this.syncFlag = !0)
                }
            }
        };
        e.default = d
    },
    d097: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("84cf")
          , i = a.n(o);
        for (var n in o)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return o[t]
                }
                ))
            }(n);
        e["default"] = i.a
    },
    e0ff: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("01cc")
          , i = a.n(o);
        for (var n in o)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return o[t]
                }
                ))
            }(n);
        e["default"] = i.a
    },
    e286: function(t, e, a) {
        var o = a("24fb");
        e = o(!1),
        e.push([t.i, '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-line-1[data-v-500203f4]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-500203f4]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-500203f4]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-500203f4]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-500203f4]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-500203f4]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-500203f4]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-500203f4]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-500203f4]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-500203f4]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-500203f4]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-500203f4]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-500203f4]::after{border:none}.u-hover-class[data-v-500203f4]{opacity:.7}.u-primary-light[data-v-500203f4]{color:#ecf5ff}.u-warning-light[data-v-500203f4]{color:#fdf6ec}.u-success-light[data-v-500203f4]{color:#f5fff0}.u-error-light[data-v-500203f4]{color:#fef0f0}.u-info-light[data-v-500203f4]{color:#f4f4f5}.u-primary-light-bg[data-v-500203f4]{background-color:#ecf5ff}.u-warning-light-bg[data-v-500203f4]{background-color:#fdf6ec}.u-success-light-bg[data-v-500203f4]{background-color:#f5fff0}.u-error-light-bg[data-v-500203f4]{background-color:#fef0f0}.u-info-light-bg[data-v-500203f4]{background-color:#f4f4f5}.u-primary-dark[data-v-500203f4]{color:#398ade}.u-warning-dark[data-v-500203f4]{color:#f1a532}.u-success-dark[data-v-500203f4]{color:#53c21d}.u-error-dark[data-v-500203f4]{color:#e45656}.u-info-dark[data-v-500203f4]{color:#767a82}.u-primary-dark-bg[data-v-500203f4]{background-color:#398ade}.u-warning-dark-bg[data-v-500203f4]{background-color:#f1a532}.u-success-dark-bg[data-v-500203f4]{background-color:#53c21d}.u-error-dark-bg[data-v-500203f4]{background-color:#e45656}.u-info-dark-bg[data-v-500203f4]{background-color:#767a82}.u-primary-disabled[data-v-500203f4]{color:#9acafc}.u-warning-disabled[data-v-500203f4]{color:#f9d39b}.u-success-disabled[data-v-500203f4]{color:#a9e08f}.u-error-disabled[data-v-500203f4]{color:#f7b2b2}.u-info-disabled[data-v-500203f4]{color:#c4c6c9}.u-primary[data-v-500203f4]{color:#3c9cff}.u-warning[data-v-500203f4]{color:#f9ae3d}.u-success[data-v-500203f4]{color:#5ac725}.u-error[data-v-500203f4]{color:#f56c6c}.u-info[data-v-500203f4]{color:#909399}.u-primary-bg[data-v-500203f4]{background-color:#3c9cff}.u-warning-bg[data-v-500203f4]{background-color:#f9ae3d}.u-success-bg[data-v-500203f4]{background-color:#5ac725}.u-error-bg[data-v-500203f4]{background-color:#f56c6c}.u-info-bg[data-v-500203f4]{background-color:#909399}.u-main-color[data-v-500203f4]{color:#303133}.u-content-color[data-v-500203f4]{color:#606266}.u-tips-color[data-v-500203f4]{color:#909193}.u-light-color[data-v-500203f4]{color:#c0c4cc}.u-safe-area-inset-top[data-v-500203f4]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-500203f4]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-500203f4]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-500203f4]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-500203f4]{z-index:10090}uni-toast .uni-toast[data-v-500203f4]{z-index:10090}[data-v-500203f4]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.uni-countdown[data-v-500203f4]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.uni-countdown__splitor[data-v-500203f4]{margin:0 2px;font-size:14px;color:#333}.uni-countdown__number[data-v-500203f4]{border-radius:3px;text-align:center;font-size:14px}', ""]),
        t.exports = e
    },
    e383: function(t, e, a) {
        var o = a("e286");
        o.__esModule && (o = o.default),
        "string" === typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
        var i = a("4f06").default;
        i("a6ccb9f0", o, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    e728: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("5e0c")
          , i = a.n(o);
        for (var n in o)
            ["default"].indexOf(n) < 0 && function(t) {
                a.d(e, t, (function() {
                    return o[t]
                }
                ))
            }(n);
        e["default"] = i.a
    },
    e9a9: function(t, e, a) {
        "use strict";
        var o = a("7bed")
          , i = a.n(o);
        i.a
    },
    ed0ee: function(t, e, a) {
        "use strict";
        a("7a82"),
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.default = void 0,
        a("a9e3");
        var o = {
            props: {
                text: {
                    type: [Array, String],
                    default: uni.$u.props.noticeBar.text
                },
                direction: {
                    type: String,
                    default: uni.$u.props.noticeBar.direction
                },
                step: {
                    type: Boolean,
                    default: uni.$u.props.noticeBar.step
                },
                icon: {
                    type: String,
                    default: uni.$u.props.noticeBar.icon
                },
                mode: {
                    type: String,
                    default: uni.$u.props.noticeBar.mode
                },
                color: {
                    type: String,
                    default: uni.$u.props.noticeBar.color
                },
                bgColor: {
                    type: String,
                    default: uni.$u.props.noticeBar.bgColor
                },
                speed: {
                    type: [String, Number],
                    default: uni.$u.props.noticeBar.speed
                },
                fontSize: {
                    type: [String, Number],
                    default: uni.$u.props.noticeBar.fontSize
                },
                duration: {
                    type: [String, Number],
                    default: uni.$u.props.noticeBar.duration
                },
                disableTouch: {
                    type: Boolean,
                    default: uni.$u.props.noticeBar.disableTouch
                },
                url: {
                    type: String,
                    default: uni.$u.props.noticeBar.url
                },
                linkType: {
                    type: String,
                    default: uni.$u.props.noticeBar.linkType
                }
            }
        };
        e.default = o
    },
    ee02: function(t, e, a) {
        "use strict";
        var o = a("1332")
          , i = a.n(o);
        i.a
    }
}]);
