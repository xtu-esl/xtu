$.getJSON("./app/data/config/chat.json", function(e) {
  !function(t) {
    var i;
    t.$_Tawk_AccountKey = e.api, t.$_Tawk_WidgetId = "default", t.$_Tawk_Unstable = !1, t.$_Tawk = t.$_Tawk || {},
      function(t) {
        t.$_Tawk.widgetSettings = e.settings
      }(t),
      function(t) {
        let i = e.txt;
        i.pluralFormFunction = function(e) {
          return 1 === e ? "one" : "other"
        }, t.$_Tawk.language = i, t.$_Tawk.languageUpdater && t.$_Tawk.languageUpdater()
      }(void 0 === t ? window : t), "undefined" != typeof window ? i = window : void 0 !== t ? i = t : "undefined" != typeof self && (i = self), i.$__TawkEngine = function e(t, i, n) {
        function a(o, s) {
          if (!i[o]) {
            if (!t[o]) {
              var l = "function" == typeof require && require;
              if (!s && l) return l(o, !0);
              if (r) return r(o, !0);
              throw Error("Cannot find module '" + o + "'")
            }
            l = i[o] = {
              exports: {}
            }, t[o][0].call(l.exports, function(e) {
              var i = t[o][1][e];
              return a(i || e)
            }, l, l.exports, e, t, i, n)
          }
          return i[o].exports
        }
        for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) a(n[o]);
        return a
      }({
        debug: [function(e, t, i) {
          t.exports = e("n9i2g6")
        }, {}],
        n9i2g6: [function(e, t, i) {
          t.exports = function() {
            return function() {}
          }
        }, {}],
        3: [function(e, t, i) {
          function n() {}
          t.exports = function(e, t, i) {
            function a(e, n) {
              if (0 >= a.count) throw Error("after called too many times");
              --a.count, e ? (r = !0, t(e), t = i) : 0 !== a.count || r || t(null, n)
            }
            var r = !1;
            return i = i || n, a.count = e, 0 === e ? t() : a
          }
        }, {}],
        4: [function(e, t, i) {
          t.exports = function(e, t, i) {
            var n = e.byteLength;
            if (t = t || 0, i = i || n, e.slice) return e.slice(t, i);
            if (0 > t && (t += n), 0 > i && (i += n), i > n && (i = n), t >= n || t >= i || 0 === n) return new ArrayBuffer(0);
            e = new Uint8Array(e);
            for (var n = new Uint8Array(i - t), a = 0; t < i; t++, a++) n[a] = e[t];
            return n.buffer
          }
        }, {}],
        5: [function(e, t, i) {
          var n;
          n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i.encode = function(e) {
            var t, i = (e = new Uint8Array(e)).length,
              a = "";
            for (t = 0; t < i; t += 3) a += n[e[t] >> 2], a += n[(3 & e[t]) << 4 | e[t + 1] >> 4], a += n[(15 & e[t + 1]) << 2 | e[t + 2] >> 6], a += n[63 & e[t + 2]];
            return 2 == i % 3 ? a = a.substring(0, a.length - 1) + "=" : 1 == i % 3 && (a = a.substring(0, a.length - 2) + "=="), a
          }, i.decode = function(e) {
            var t, i, a, r, o = .75 * e.length,
              s = e.length,
              l = 0;
            "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
            for (var c = new ArrayBuffer(o), d = new Uint8Array(c), o = 0; o < s; o += 4) t = n.indexOf(e[o]), i = n.indexOf(e[o + 1]), a = n.indexOf(e[o + 2]), r = n.indexOf(e[o + 3]), d[l++] = t << 2 | i >> 4, d[l++] = (15 & i) << 4 | a >> 2, d[l++] = (3 & a) << 6 | 63 & r;
            return c
          }
        }, {}],
        6: [function(e, t, i) {
          (function(e) {
            function i(e) {
              for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if (i.buffer instanceof ArrayBuffer) {
                  var n = i.buffer;
                  if (i.byteLength !== n.byteLength) {
                    var a = new Uint8Array(i.byteLength);
                    a.set(new Uint8Array(n, i.byteOffset, i.byteLength)), n = a.buffer
                  }
                  e[t] = n
                }
              }
            }
            var n, a, r = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder;
            try {
              n = 2 === new Blob(["hi"]).size
            } catch (e) {
              n = !1
            }
            if (a = n) try {
              a = 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (e) {
              a = !1
            }
            var o = r && r.prototype.append && r.prototype.getBlob;
            e = n ? a ? e.Blob : function(e, t) {
              return i(e), new Blob(e, t || {})
            } : o ? function(e, t) {
              t = t || {};
              var n = new r;
              i(e);
              for (var a = 0; a < e.length; a++) n.append(e[a]);
              return t.type ? n.getBlob(t.type) : n.getBlob()
            } : void 0, t.exports = e
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        7: [function(e, t, i) {}, {}],
        8: [function(e, t, i) {
          function n(e) {
            if (e) {
              for (var t in n.prototype) e[t] = n.prototype[t];
              return e
            }
          }
          t.exports = n, n.prototype.on = n.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
          }, n.prototype.once = function(e, t) {
            function i() {
              n.off(e, i), t.apply(this, arguments)
            }
            var n = this;
            return this._callbacks = this._callbacks || {}, i.fn = t, this.on(e, i), this
          }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var i = this._callbacks[e];
            if (!i) return this;
            if (1 == arguments.length) return delete this._callbacks[e], this;
            for (var n, a = 0; a < i.length; a++)
              if ((n = i[a]) === t || n.fn === t) {
                i.splice(a, 1);
                break
              } return this
          }, n.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1),
              i = this._callbacks[e];
            if (i)
              for (var i = i.slice(0), n = 0, a = i.length; n < a; ++n) i[n].apply(this, t);
            return this
          }, n.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
          }, n.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
          }
        }, {}],
        9: [function(e, t, i) {
          t.exports = function(e, t) {
            var i = function() {};
            i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
          }
        }, {}],
        10: [function(e, t, i) {
          t.exports = e("./lib/")
        }, {
          "./lib/": 11
        }],
        11: [function(e, t, i) {
          t.exports = e("./socket"), t.exports.parser = e("engine.io-parser")
        }, {
          "./socket": 12,
          "engine.io-parser": 20
        }],
        12: [function(e, t, i) {
          (function(i) {
            function n(e, t) {
              if (!(this instanceof n)) return new n(e, t);
              t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = c(e), t.hostname = e.host, t.secure = "https" == e.protocol || "wss" == e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = c(t.host).host), this.secure = null != t.secure ? t.secure : i.location && "https:" == location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (i.location ? location.hostname : "localhost"), this.port = t.port || (i.location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized;
              var a = "object" == typeof i && i;
              a.global === a && t.extraHeaders && 0 < Object.keys(t.extraHeaders).length && (this.extraHeaders = t.extraHeaders), this.open()
            }
            var a = e("./transports"),
              r = e("component-emitter"),
              o = e("debug")("engine.io-client:socket"),
              s = e("indexof"),
              l = e("engine.io-parser"),
              c = e("parseuri"),
              d = e("parsejson"),
              h = e("parseqs");
            t.exports = n, n.priorWebsocketSuccess = !1, r(n.prototype), n.protocol = l.protocol, n.Socket = n, n.Transport = e("./transport"), n.transports = e("./transports"), n.parser = e("engine.io-parser"), n.prototype.createTransport = function(e) {
              o('creating transport "%s"', e);
              var t, i = this.query,
                n = {};
              for (t in i) i.hasOwnProperty(t) && (n[t] = i[t]);
              return n.EIO = l.protocol, n.transport = e, this.id && (n.sid = this.id), new a[e]({
                agent: this.agent,
                hostname: this.hostname,
                port: this.port,
                secure: this.secure,
                path: this.path,
                query: n,
                forceJSONP: this.forceJSONP,
                jsonp: this.jsonp,
                forceBase64: this.forceBase64,
                enablesXDR: this.enablesXDR,
                timestampRequests: this.timestampRequests,
                timestampParam: this.timestampParam,
                policyPort: this.policyPort,
                socket: this,
                pfx: this.pfx,
                key: this.key,
                passphrase: this.passphrase,
                cert: this.cert,
                ca: this.ca,
                ciphers: this.ciphers,
                rejectUnauthorized: this.rejectUnauthorized,
                perMessageDeflate: this.perMessageDeflate,
                extraHeaders: this.extraHeaders
              })
            }, n.prototype.open = function() {
              var e;
              if (this.rememberUpgrade && n.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) e = "websocket";
              else {
                if (0 === this.transports.length) {
                  var t = this;
                  return void setTimeout(function() {
                    t.emit("error", "No transports available")
                  }, 0)
                }
                e = this.transports[0]
              }
              this.readyState = "opening";
              try {
                e = this.createTransport(e)
              } catch (e) {
                return this.transports.shift(), void this.open()
              }
              e.open(), this.setTransport(e)
            }, n.prototype.setTransport = function(e) {
              o("setting transport %s", e.name);
              var t = this;
              this.transport && (o("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
                t.onDrain()
              }).on("packet", function(e) {
                t.onPacket(e)
              }).on("error", function(e) {
                t.onError(e)
              }).on("close", function() {
                t.onClose("transport close")
              })
            }, n.prototype.probe = function(e) {
              function t() {
                if (p.onlyBinaryUpgrades) {
                  var t = !this.supportsBinary && p.transport.supportsBinary;
                  h = h || t
                }
                h || (o('probe transport "%s" opened', e), d.send([{
                  type: "ping",
                  data: "probe"
                }]), d.once("packet", function(t) {
                  h || ("pong" == t.type && "probe" == t.data ? (o('probe transport "%s" pong', e), p.upgrading = !0, p.emit("upgrading", d), d && (n.priorWebsocketSuccess = "websocket" == d.name, o('pausing current transport "%s"', p.transport.name), p.transport.pause(function() {
                    h || "closed" == p.readyState || (o("changing transport and sending upgrade packet"), c(), p.setTransport(d), d.send([{
                      type: "upgrade"
                    }]), p.emit("upgrade", d), d = null, p.upgrading = !1, p.flush())
                  }))) : (o('probe transport "%s" failed', e), (t = Error("probe error")).transport = d.name, p.emit("upgradeError", t)))
                }))
              }

              function i() {
                h || (h = !0, c(), d.close(), d = null)
              }

              function a(t) {
                var n = Error("probe error: " + t);
                n.transport = d.name, i(), o('probe transport "%s" failed because of error: %s', e, t), p.emit("upgradeError", n)
              }

              function r() {
                a("transport closed")
              }

              function s() {
                a("socket closed")
              }

              function l(e) {
                d && e.name != d.name && (o('"%s" works - aborting "%s"', e.name, d.name), i())
              }

              function c() {
                d.removeListener("open", t), d.removeListener("error", a), d.removeListener("close", r), p.removeListener("close", s), p.removeListener("upgrading", l)
              }
              o('probing transport "%s"', e);
              var d = this.createTransport(e, {
                  probe: 1
                }),
                h = !1,
                p = this;
              n.priorWebsocketSuccess = !1, d.once("open", t), d.once("error", a), d.once("close", r), this.once("close", s), this.once("upgrading", l), d.open()
            }, n.prototype.onOpen = function() {
              if (o("socket open"), this.readyState = "open", n.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                o("starting upgrade probes");
                for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
              }
            }, n.prototype.onPacket = function(e) {
              if ("opening" == this.readyState || "open" == this.readyState) switch (o('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                case "open":
                  this.onHandshake(d(e.data));
                  break;
                case "pong":
                  this.setPing(), this.emit("pong");
                  break;
                case "error":
                  var t = Error("server error");
                  t.code = e.data, this.onError(t);
                  break;
                case "message":
                  this.emit("data", e.data), this.emit("message", e.data)
              } else o('packet received with socket readyState "%s"', this.readyState)
            }, n.prototype.onHandshake = function(e) {
              this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }, n.prototype.onHeartbeat = function(e) {
              clearTimeout(this.pingTimeoutTimer);
              var t = this;
              t.pingTimeoutTimer = setTimeout(function() {
                "closed" != t.readyState && t.onClose("ping timeout")
              }, e || t.pingInterval + t.pingTimeout)
            }, n.prototype.setPing = function() {
              var e = this;
              clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
                o("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
              }, e.pingInterval)
            }, n.prototype.ping = function() {
              var e = this;
              this.sendPacket("ping", function() {
                e.emit("ping")
              })
            }, n.prototype.onDrain = function() {
              this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }, n.prototype.flush = function() {
              "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (o("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            }, n.prototype.write = n.prototype.send = function(e, t, i) {
              return this.sendPacket("message", e, t, i), this
            }, n.prototype.sendPacket = function(e, t, i, n) {
              "function" == typeof t && (n = t, t = void 0), "function" == typeof i && (n = i, i = null), "closing" != this.readyState && "closed" != this.readyState && ((i = i || {}).compress = !1 !== i.compress, e = {
                type: e,
                data: t,
                options: i
              }, this.emit("packetCreate", e), this.writeBuffer.push(e), n && this.once("flush", n), this.flush())
            }, n.prototype.close = function() {
              function e() {
                n.onClose("forced close"), o("socket closing - telling transport to close"), n.transport.close()
              }

              function t() {
                n.removeListener("upgrade", t), n.removeListener("upgradeError", t), e()
              }

              function i() {
                n.once("upgrade", t), n.once("upgradeError", t)
              }
              if ("opening" == this.readyState || "open" == this.readyState) {
                this.readyState = "closing";
                var n = this;
                this.writeBuffer.length ? this.once("drain", function() {
                  this.upgrading ? i() : e()
                }) : this.upgrading ? i() : e()
              }
              return this
            }, n.prototype.onError = function(e) {
              o("socket error %j", e), n.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
            }, n.prototype.onClose = function(e, t) {
              "opening" != this.readyState && "open" != this.readyState && "closing" != this.readyState || (o('socket close with reason: "%s"', e), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
            }, n.prototype.filterUpgrades = function(e) {
              for (var t = [], i = 0, n = e.length; i < n; i++) ~s(this.transports, e[i]) && t.push(e[i]);
              return t
            }
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          "./transport": 13,
          "./transports": 14,
          "component-emitter": 8,
          debug: "n9i2g6",
          "engine.io-parser": 20,
          indexof: 24,
          parsejson: 26,
          parseqs: 27,
          parseuri: 28
        }],
        13: [function(e, t, i) {
          function n(e) {
            this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders
          }
          var a = e("engine.io-parser");
          e = e("component-emitter"), t.exports = n, e(n.prototype), n.prototype.onError = function(e, t) {
            var i = Error(e);
            return i.type = "TransportError", i.description = t, this.emit("error", i), this
          }, n.prototype.open = function() {
            return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()), this
          }, n.prototype.close = function() {
            return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()), this
          }, n.prototype.send = function(e) {
            if ("open" != this.readyState) throw Error("Transport not open");
            this.write(e)
          }, n.prototype.onOpen = function() {
            this.readyState = "open", this.writable = !0, this.emit("open")
          }, n.prototype.onData = function(e) {
            e = a.decodePacket(e, this.socket.binaryType), this.onPacket(e)
          }, n.prototype.onPacket = function(e) {
            this.emit("packet", e)
          }, n.prototype.onClose = function() {
            this.readyState = "closed", this.emit("close")
          }
        }, {
          "component-emitter": 8,
          "engine.io-parser": 20
        }],
        14: [function(e, t, i) {
          (function(t) {
            var n = e("xmlhttprequest-ssl"),
              a = e("./polling-xhr"),
              r = e("./polling-jsonp"),
              o = e("./websocket");
            i.polling = function(e) {
              var i = !1,
                o = !1,
                s = !1 !== e.jsonp;
              if (t.location && (o = "https:" == location.protocol, (i = location.port) || (i = o ? 443 : 80), i = e.hostname != location.hostname || i != e.port, o = e.secure != o), e.xdomain = i, e.xscheme = o, "open" in new n(e) && !e.forceJSONP) return new a(e);
              if (!s) throw Error("JSONP disabled");
              return new r(e)
            }, i.websocket = o
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          "./polling-jsonp": 15,
          "./polling-xhr": 16,
          "./websocket": 18,
          "xmlhttprequest-ssl": 19
        }],
        15: [function(e, t, i) {
          (function(i) {
            function n() {}

            function a(e) {
              r.call(this, e), this.query = this.query || {}, s || (i.___eio || (i.___eio = []), s = i.___eio), this.index = s.length;
              var t = this;
              s.push(function(e) {
                t.onData(e)
              }), this.query.j = this.index, i.document && i.addEventListener && i.addEventListener("beforeunload", function() {
                t.script && (t.script.onerror = n)
              }, !1)
            }
            var r = e("./polling"),
              o = e("component-inherit");
            t.exports = a;
            var s, l = /\n/g,
              c = /\\n/g;
            o(a, r), a.prototype.supportsBinary = !1, a.prototype.doClose = function() {
              this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.iframe = this.form = null), r.prototype.doClose.call(this)
            }, a.prototype.doPoll = function() {
              var e = this,
                t = document.createElement("script");
              this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                e.onError("jsonp poll error", t)
              };
              var i = document.getElementsByTagName("script")[0];
              i ? i.parentNode.insertBefore(t, i) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                var e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e)
              }, 100)
            }, a.prototype.doWrite = function(e, t) {
              function i() {
                n(), t()
              }

              function n() {
                if (a.iframe) try {
                  a.form.removeChild(a.iframe)
                } catch (e) {
                  a.onError("jsonp polling iframe removal error", e)
                }
                try {
                  r = document.createElement('<iframe src="javascript:0" name="' + a.iframeId + '">')
                } catch (e) {
                  (r = document.createElement("iframe")).name = a.iframeId, r.src = "javascript:0"
                }
                r.id = a.iframeId, a.form.appendChild(r), a.iframe = r
              }
              var a = this;
              if (!this.form) {
                var r, o = document.createElement("form"),
                  s = document.createElement("textarea"),
                  d = this.iframeId = "eio_iframe_" + this.index;
                o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = d, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), s.name = "d", o.appendChild(s), document.body.appendChild(o), this.form = o, this.area = s
              }
              this.form.action = this.uri(), n(), e = e.replace(c, "\\\n"), this.area.value = e.replace(l, "\\n");
              try {
                this.form.submit()
              } catch (e) {}
              this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                "complete" == a.iframe.readyState && i()
              } : this.iframe.onload = i
            }
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          "./polling": 17,
          "component-inherit": 9
        }],
        16: [function(e, t, i) {
          (function(i) {
            function n() {}

            function a(e) {
              if (l.call(this, e), i.location) {
                var t = "https:" == location.protocol,
                  n = location.port;
                n || (n = t ? 443 : 80), this.xd = e.hostname != i.location.hostname || n != e.port, this.xs = e.secure != t
              } else this.extraHeaders = e.extraHeaders
            }

            function r(e) {
              this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 != e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
            }

            function o() {
              for (var e in r.requests) r.requests.hasOwnProperty(e) && r.requests[e].abort()
            }
            var s = e("xmlhttprequest-ssl"),
              l = e("./polling"),
              c = e("component-emitter"),
              d = e("component-inherit"),
              h = e("debug")("engine.io-client:polling-xhr");
            t.exports = a, t.exports.Request = r, d(a, l), a.prototype.supportsBinary = !0, a.prototype.request = function(e) {
              return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.extraHeaders = this.extraHeaders, new r(e)
            }, a.prototype.doWrite = function(e, t) {
              var i = this.request({
                  method: "POST",
                  data: e,
                  isBinary: "string" != typeof e && void 0 !== e
                }),
                n = this;
              i.on("success", t), i.on("error", function(e) {
                n.onError("xhr post error", e)
              }), this.sendXhr = i
            }, a.prototype.doPoll = function() {
              h("xhr poll");
              var e = this.request(),
                t = this;
              e.on("data", function(e) {
                t.onData(e)
              }), e.on("error", function(e) {
                t.onError("xhr poll error", e)
              }), this.pollXhr = e
            }, c(r.prototype), r.prototype.create = function() {
              var e = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
              };
              e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
              var t = this.xhr = new s(e),
                n = this;
              try {
                h("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                try {
                  if (this.extraHeaders)
                    for (var a in t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(a) && t.setRequestHeader(a, this.extraHeaders[a])
                } catch (e) {}
                if (this.supportsBinary && (t.responseType = "arraybuffer"), "POST" == this.method) try {
                  this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (e) {}
                "withCredentials" in t && (t.withCredentials = !0), this.hasXDR() ? (t.onload = function() {
                  n.onLoad()
                }, t.onerror = function() {
                  n.onError(t.responseText)
                }) : t.onreadystatechange = function() {
                  4 == t.readyState && (200 == t.status || 1223 == t.status ? n.onLoad() : setTimeout(function() {
                    n.onError(t.status)
                  }, 0))
                }, h("xhr data %s", this.data), t.send(this.data)
              } catch (e) {
                return void setTimeout(function() {
                  n.onError(e)
                }, 0)
              }
              i.document && (this.index = r.requestsCount++, r.requests[this.index] = this)
            }, r.prototype.onSuccess = function() {
              this.emit("success"), this.cleanup()
            }, r.prototype.onData = function(e) {
              this.emit("data", e), this.onSuccess()
            }, r.prototype.onError = function(e) {
              this.emit("error", e), this.cleanup(!0)
            }, r.prototype.cleanup = function(e) {
              if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = n : this.xhr.onreadystatechange = n, e) try {
                  this.xhr.abort()
                } catch (e) {}
                i.document && delete r.requests[this.index], this.xhr = null
              }
            }, r.prototype.onLoad = function() {
              var e;
              try {
                var t;
                try {
                  t = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                } catch (e) {}
                if ("application/octet-stream" === t) e = this.xhr.response;
                else if (this.supportsBinary) try {
                  e = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                } catch (r) {
                  var i = new Uint8Array(this.xhr.response);
                  t = [];
                  for (var n = 0, a = i.length; n < a; n++) t.push(i[n]);
                  e = String.fromCharCode.apply(null, t)
                } else e = this.xhr.responseText
              } catch (e) {
                this.onError(e)
              }
              null != e && this.onData(e)
            }, r.prototype.hasXDR = function() {
              return void 0 !== i.XDomainRequest && !this.xs && this.enablesXDR
            }, r.prototype.abort = function() {
              this.cleanup()
            }, i.document && (r.requestsCount = 0, r.requests = {}, i.attachEvent ? i.attachEvent("onunload", o) : i.addEventListener && i.addEventListener("beforeunload", o, !1))
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          "./polling": 17,
          "component-emitter": 8,
          "component-inherit": 9,
          debug: "n9i2g6",
          "xmlhttprequest-ssl": 19
        }],
        17: [function(e, t, i) {
          function n(e) {
            var t = e && e.forceBase64;
            c && !t || (this.supportsBinary = !1), a.call(this, e)
          }
          var a = e("../transport"),
            r = e("parseqs"),
            o = e("engine.io-parser");
          i = e("component-inherit");
          var s = e("yeast"),
            l = e("debug")("engine.io-client:polling");
          t.exports = n;
          var c = null != new(e("xmlhttprequest-ssl"))({
            xdomain: !1
          }).responseType;
          i(n, a), n.prototype.name = "polling", n.prototype.doOpen = function() {
            this.poll()
          }, n.prototype.pause = function(e) {
            function t() {
              l("paused"), i.readyState = "paused", e()
            }
            var i = this;
            if (this.readyState = "pausing", this.polling || !this.writable) {
              var n = 0;
              this.polling && (l("i am currently polling - waiting to pause"), n++, this.once("pollComplete", function() {
                l("pre-pause polling complete"), --n || t()
              })), this.writable || (l("i am currently writing - waiting to pause"), n++, this.once("drain", function() {
                l("pre-pause writing complete"), --n || t()
              }))
            } else t()
          }, n.prototype.poll = function() {
            l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
          }, n.prototype.onData = function(e) {
            var t = this;
            l("polling got data %s", e), o.decodePayload(e, this.socket.binaryType, function(e, i, n) {
              if ("opening" == t.readyState && t.onOpen(), "close" == e.type) return t.onClose(), !1;
              t.onPacket(e)
            }), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
          }, n.prototype.doClose = function() {
            function e() {
              l("writing close packet"), t.write([{
                type: "close"
              }])
            }
            var t = this;
            "open" == this.readyState ? (l("transport open - closing"), e()) : (l("transport not open - deferring close"), this.once("open", e))
          }, n.prototype.write = function(e) {
            var t = this;
            this.writable = !1;
            var i = function() {
                t.writable = !0, t.emit("drain")
              },
              t = this;
            o.encodePayload(e, this.supportsBinary, function(e) {
              t.doWrite(e, i)
            })
          }, n.prototype.uri = function() {
            var e = this.query || {},
              t = this.secure ? "https" : "http",
              i = "";
            !1 !== this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || e.sid || (e.b64 = 1), e = r.encode(e), this.port && ("https" == t && 443 != this.port || "http" == t && 80 != this.port) && (i = ":" + this.port), e.length && (e = "?" + e);
            var n = -1 !== this.hostname.indexOf(":");
            return t + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
          }
        }, {
          "../transport": 13,
          "component-inherit": 9,
          debug: "n9i2g6",
          "engine.io-parser": 20,
          parseqs: 27,
          "xmlhttprequest-ssl": 19,
          yeast: 30
        }],
        18: [function(e, t, i) {
          (function(i) {
            function n(e) {
              e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, a.call(this, e)
            }
            var a = e("../transport"),
              r = e("engine.io-parser"),
              o = e("parseqs"),
              s = e("component-inherit"),
              l = e("yeast"),
              c = e("debug")("engine.io-client:websocket"),
              d = i.WebSocket || i.MozWebSocket,
              h = d;
            if (!h && "undefined" == typeof window) try {
              h = e("ws")
            } catch (e) {}
            t.exports = n, s(n, a), n.prototype.name = "websocket", n.prototype.supportsBinary = !0, n.prototype.doOpen = function() {
              if (this.check()) {
                var e = this.uri(),
                  t = {
                    agent: this.agent,
                    perMessageDeflate: this.perMessageDeflate
                  };
                t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (t.headers = this.extraHeaders), this.ws = d ? new h(e) : new h(e, void 0, t), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
              }
            }, n.prototype.addEventListeners = function() {
              var e = this;
              this.ws.onopen = function() {
                e.onOpen()
              }, this.ws.onclose = function() {
                e.onClose()
              }, this.ws.onmessage = function(t) {
                e.onData(t.data)
              }, this.ws.onerror = function(t) {
                e.onError("websocket error", t)
              }
            }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (n.prototype.onData = function(e) {
              var t = this;
              setTimeout(function() {
                a.prototype.onData.call(t, e)
              }, 0)
            }), n.prototype.write = function(e) {
              var t = this;
              this.writable = !1;
              for (var n = e.length, a = 0, o = n; a < o; a++) ! function(e) {
                r.encodePacket(e, t.supportsBinary, function(a) {
                  if (!d) {
                    var r = {};
                    e.options && (r.compress = e.options.compress), t.perMessageDeflate && ("string" == typeof a ? i.Buffer.byteLength(a) : a.length) < t.perMessageDeflate.threshold && (r.compress = !1)
                  }
                  try {
                    d ? t.ws.send(a) : t.ws.send(a, r)
                  } catch (e) {
                    c("websocket closed before onclose event")
                  }--n || (t.emit("flush"), setTimeout(function() {
                    t.writable = !0, t.emit("drain")
                  }, 0))
                })
              }(e[a])
            }, n.prototype.onClose = function() {
              a.prototype.onClose.call(this)
            }, n.prototype.doClose = function() {
              void 0 !== this.ws && this.ws.close()
            }, n.prototype.uri = function() {
              var e = this.query || {},
                t = this.secure ? "wss" : "ws",
                i = "";
              this.port && ("wss" == t && 443 != this.port || "ws" == t && 80 != this.port) && (i = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = l()), this.supportsBinary || (e.b64 = 1), (e = o.encode(e)).length && (e = "?" + e);
              var n = -1 !== this.hostname.indexOf(":");
              return t + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
            }, n.prototype.check = function() {
              return !(!h || "__initialize" in h && this.name === n.prototype.name)
            }
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          "../transport": 13,
          "component-inherit": 9,
          debug: "n9i2g6",
          "engine.io-parser": 20,
          parseqs: 27,
          ws: 7,
          yeast: 30
        }],
        19: [function(e, t, i) {
          var n = e("has-cors");
          t.exports = function(e) {
            var t = e.xdomain,
              i = e.xscheme;
            e = e.enablesXDR;
            try {
              if ("undefined" != typeof XMLHttpRequest && (!t || n)) return new XMLHttpRequest
            } catch (e) {}
            try {
              if ("undefined" != typeof XDomainRequest && !i && e) return new XDomainRequest
            } catch (e) {}
            if (!t) try {
              return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
          }
        }, {
          "has-cors": 23
        }],
        20: [function(e, t, i) {
          (function(t) {
            function n(e, t, i) {
              var n = Array(e.length);
              i = l(e.length, i);
              for (var a = function(e, i, a) {
                  t(i, function(t, i) {
                    n[e] = i, a(t, n)
                  })
                }, r = 0; r < e.length; r++) a(r, e[r], i)
            }
            var a = e("./keys"),
              r = e("has-binary"),
              o = e("arraybuffer.slice"),
              s = e("base64-arraybuffer"),
              l = e("after"),
              c = e("utf8"),
              d = navigator.userAgent.match(/Android/i),
              h = /PhantomJS/i.test(navigator.userAgent),
              p = d || h;
            i.protocol = 3;
            var m = i.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
              },
              u = a(m),
              g = {
                type: "error",
                data: "parser error"
              },
              f = e("blob");
            i.encodePacket = function(e, n, a, r) {
              "function" == typeof n && (r = n, n = !1), "function" == typeof a && (r = a, a = null);
              var o = void 0 === e.data ? void 0 : e.data.buffer || e.data;
              if (t.ArrayBuffer && o instanceof ArrayBuffer) {
                if (n) {
                  for (a = e.data, n = new Uint8Array(a), (a = new Uint8Array(1 + a.byteLength))[0] = m[e.type], e = 0; e < n.length; e++) a[e + 1] = n[e];
                  e = r(a.buffer)
                } else e = i.encodeBase64Packet(e, r);
                return e
              }
              return f && o instanceof t.Blob ? (n ? p ? e = function(e, t, n) {
                if (!t) return i.encodeBase64Packet(e, n);
                var a = new FileReader;
                return a.onload = function() {
                  e.data = a.result, i.encodePacket(e, t, !0, n)
                }, a.readAsArrayBuffer(e.data)
              }(e, n, r) : ((n = new Uint8Array(1))[0] = m[e.type], e = new f([n.buffer, e.data]), e = r(e)) : e = i.encodeBase64Packet(e, r), e) : o && o.base64 ? r("b" + i.packets[e.type] + e.data.data) : (n = m[e.type], void 0 !== e.data && (n += a ? c.encode(String(e.data)) : String(e.data)), r("" + n))
            }, i.encodeBase64Packet = function(e, n) {
              var a, r = "b" + i.packets[e.type];
              if (f && e.data instanceof t.Blob) {
                var o = new FileReader;
                return o.onload = function() {
                  var e = o.result.split(",")[1];
                  n(r + e)
                }, o.readAsDataURL(e.data)
              }
              try {
                a = String.fromCharCode.apply(null, new Uint8Array(e.data))
              } catch (t) {
                a = new Uint8Array(e.data);
                for (var s = Array(a.length), l = 0; l < a.length; l++) s[l] = a[l];
                a = String.fromCharCode.apply(null, s)
              }
              return r += t.btoa(a), n(r)
            }, i.decodePacket = function(e, t, n) {
              if ("string" == typeof e || void 0 === e) {
                if ("b" == e.charAt(0)) return i.decodeBase64Packet(e.substr(1), t);
                if (n) try {
                  e = c.decode(e)
                } catch (e) {
                  return g
                }
                return n = e.charAt(0), Number(n) == n && u[n] ? 1 < e.length ? {
                  type: u[n],
                  data: e.substring(1)
                } : {
                  type: u[n]
                } : g
              }
              return n = new Uint8Array(e)[0], e = o(e, 1), f && "blob" === t && (e = new f([e])), {
                type: u[n],
                data: e
              }
            }, i.decodeBase64Packet = function(e, i) {
              var n = u[e.charAt(0)];
              if (!t.ArrayBuffer) return {
                type: n,
                data: {
                  base64: !0,
                  data: e.substr(1)
                }
              };
              var a = s.decode(e.substr(1));
              return "blob" === i && f && (a = new f([a])), {
                type: n,
                data: a
              }
            }, i.encodePayload = function(e, t, a) {
              "function" == typeof t && (a = t, t = null);
              var o = r(e);
              return t && o ? f && !p ? i.encodePayloadAsBlob(e, a) : i.encodePayloadAsArrayBuffer(e, a) : e.length ? void n(e, function(e, n) {
                i.encodePacket(e, !!o && t, !0, function(e) {
                  n(null, e.length + ":" + e)
                })
              }, function(e, t) {
                return a(t.join(""))
              }) : a("0:")
            }, i.decodePayload = function(e, t, n) {
              if ("string" != typeof e) return i.decodePayloadAsBinary(e, t, n);
              var a;
              if ("function" == typeof t && (n = t, t = null), "" == e) return n(g, 0, 1);
              a = "";
              for (var r, o, s = 0, l = e.length; s < l; s++)
                if (":" != (o = e.charAt(s))) a += o;
                else {
                  if ("" == a || a != (r = Number(a))) return n(g, 0, 1);
                  if (o = e.substr(s + 1, r), a != o.length) return n(g, 0, 1);
                  if (o.length) {
                    if (a = i.decodePacket(o, t, !0), g.type == a.type && g.data == a.data) return n(g, 0, 1);
                    if (!1 === n(a, s + r, l)) return
                  }
                  s += r, a = ""
                } return "" != a ? n(g, 0, 1) : void 0
            }, i.encodePayloadAsArrayBuffer = function(e, t) {
              if (!e.length) return t(new ArrayBuffer(0));
              n(e, function(e, t) {
                i.encodePacket(e, !0, !0, function(e) {
                  return t(null, e)
                })
              }, function(e, i) {
                var n = i.reduce(function(e, t) {
                    var i;
                    return i = "string" == typeof t ? t.length : t.byteLength, e + i.toString().length + i + 2
                  }, 0),
                  a = new Uint8Array(n),
                  r = 0;
                return i.forEach(function(e) {
                  var t = "string" == typeof e,
                    i = e;
                  if (t) {
                    for (var i = new Uint8Array(e.length), n = 0; n < e.length; n++) i[n] = e.charCodeAt(n);
                    i = i.buffer
                  }
                  for (a[r++] = t ? 0 : 1, e = i.byteLength.toString(), n = 0; n < e.length; n++) a[r++] = parseInt(e[n]);
                  for (a[r++] = 255, i = new Uint8Array(i), n = 0; n < i.length; n++) a[r++] = i[n]
                }), t(a.buffer)
              })
            }, i.encodePayloadAsBlob = function(e, t) {
              n(e, function(e, t) {
                i.encodePacket(e, !0, !0, function(e) {
                  var i = new Uint8Array(1);
                  if (i[0] = 1, "string" == typeof e) {
                    for (var n = new Uint8Array(e.length), a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
                    e = n.buffer, i[0] = 0
                  }
                  for (var n = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(), r = new Uint8Array(n.length + 1), a = 0; a < n.length; a++) r[a] = parseInt(n[a]);
                  r[n.length] = 255, f && (e = new f([i.buffer, r.buffer, e]), t(null, e))
                })
              }, function(e, i) {
                return t(new f(i))
              })
            }, i.decodePayloadAsBinary = function(e, t, n) {
              "function" == typeof t && (n = t, t = null);
              for (var a = [], r = !1; 0 < e.byteLength;) {
                for (var s = new Uint8Array(e), l = 0 === s[0], c = "", d = 1; 255 != s[d]; d++) {
                  if (310 < c.length) {
                    r = !0;
                    break
                  }
                  c += s[d]
                }
                if (r) return n(g, 0, 1);
                if (e = o(e, 2 + c.length), c = parseInt(c), s = o(e, 0, c), l) try {
                  s = String.fromCharCode.apply(null, new Uint8Array(s))
                } catch (e) {
                  for (l = new Uint8Array(s), s = "", d = 0; d < l.length; d++) s += String.fromCharCode(l[d])
                }
                a.push(s), e = o(e, c)
              }
              var h = a.length;
              a.forEach(function(e, a) {
                n(i.decodePacket(e, t, !0), a, h)
              })
            }
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          "./keys": 21,
          after: 3,
          "arraybuffer.slice": 4,
          "base64-arraybuffer": 5,
          blob: 6,
          "has-binary": 22,
          utf8: 29
        }],
        21: [function(e, t, i) {
          t.exports = Object.keys || function(e) {
            var t, i = [],
              n = Object.prototype.hasOwnProperty;
            for (t in e) n.call(e, t) && i.push(t);
            return i
          }
        }, {}],
        22: [function(e, t, i) {
          (function(i) {
            var n = e("isarray");
            t.exports = function(e) {
              return function e(t) {
                if (!t) return !1;
                if (i.Buffer && i.Buffer.isBuffer(t) || i.ArrayBuffer && t instanceof ArrayBuffer || i.Blob && t instanceof Blob || i.File && t instanceof File) return !0;
                if (n(t)) {
                  for (var a = 0; a < t.length; a++)
                    if (e(t[a])) return !0
                } else if (t && "object" == typeof t)
                  for (a in t.toJSON && (t = t.toJSON()), t)
                    if (Object.prototype.hasOwnProperty.call(t, a) && e(t[a])) return !0;
                return !1
              }(e)
            }
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
          isarray: 25
        }],
        23: [function(e, t, i) {
          try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
          } catch (e) {
            t.exports = !1
          }
        }, {}],
        24: [function(e, t, i) {
          var n = [].indexOf;
          t.exports = function(e, t) {
            if (n) return e.indexOf(t);
            for (var i = 0; i < e.length; ++i)
              if (e[i] === t) return i;
            return -1
          }
        }, {}],
        25: [function(e, t, i) {
          t.exports = Array.isArray || function(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
          }
        }, {}],
        26: [function(e, t, i) {
          (function(e) {
            var i = /^[\],:{}\s]*$/,
              n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
              a = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              r = /(?:^|:|,)(?:\s*\[)+/g,
              o = /^\s+/,
              s = /\s+$/;
            t.exports = function(t) {
              return "string" == typeof t && t ? (t = t.replace(o, "").replace(s, ""), e.JSON && JSON.parse ? JSON.parse(t) : i.test(t.replace(n, "@").replace(a, "]").replace(r, "")) ? new Function("return " + t)() : void 0) : null
            }
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        27: [function(e, t, i) {
          i.encode = function(e) {
            var t, i = "";
            for (t in e) e.hasOwnProperty(t) && (i.length && (i += "&"), i += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return i
          }, i.decode = function(e) {
            for (var t = {}, i = 0, n = (e = e.split("&")).length; i < n; i++) {
              var a = e[i].split("=");
              t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
            }
            return t
          }
        }, {}],
        28: [function(e, t, i) {
          var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            a = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
          t.exports = function(e) {
            var t = e,
              i = e.indexOf("["),
              r = e.indexOf("]"); - 1 != i && -1 != r && (e = e.substring(0, i) + e.substring(i, r).replace(/:/g, ";") + e.substring(r, e.length)), e = n.exec(e || "");
            for (var o = {}, s = 14; s--;) o[a[s]] = e[s] || "";
            return -1 != i && -1 != r && (o.source = t, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o
          }
        }, {}],
        29: [function(e, t, i) {
          (function(e) {
            ! function(n) {
              function a(e) {
                for (var t, i, n = [], a = 0, r = e.length; a < r;) 55296 <= (t = e.charCodeAt(a++)) && 56319 >= t && a < r ? 56320 == (64512 & (i = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), a--) : n.push(t);
                return n
              }

              function r(e) {
                if (55296 <= e && 57343 >= e) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value")
              }

              function o() {
                if (m >= p) throw Error("Invalid byte index");
                var e = 255 & h[m];
                if (m++, 128 == (192 & e)) return 63 & e;
                throw Error("Invalid continuation byte")
              }

              function s() {
                var e, t, i, n;
                if (m > p) throw Error("Invalid byte index");
                if (m == p) return !1;
                if (e = 255 & h[m], m++, 0 == (128 & e)) return e;
                if (192 == (224 & e)) {
                  if (t = o(), 128 <= (e = (31 & e) << 6 | t)) return e;
                  throw Error("Invalid continuation byte")
                }
                if (224 == (240 & e)) {
                  if (t = o(), i = o(), 2048 <= (e = (15 & e) << 12 | t << 6 | i)) return r(e), e;
                  throw Error("Invalid continuation byte")
                }
                if (240 == (248 & e) && (t = o(), i = o(), n = o(), 65536 <= (e = (15 & e) << 18 | t << 12 | i << 6 | n) && 1114111 >= e)) return e;
                throw Error("Invalid UTF-8 detected")
              }
              var l = "object" == typeof i && i,
                c = "object" == typeof t && t && t.exports == l && t,
                d = "object" == typeof e && e;
              d.global !== d && d.window !== d || (n = d);
              var h, p, m, u = String.fromCharCode,
                d = {
                  version: "2.0.0",
                  encode: function(e) {
                    for (var t, i = (e = a(e)).length, n = -1, o = ""; ++n < i;) {
                      if (0 == (4294967168 & (t = e[n]))) t = u(t);
                      else {
                        var s = "";
                        0 == (4294965248 & t) ? s = u(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (r(t), s = u(t >> 12 & 15 | 224), s += u(t >> 6 & 63 | 128)) : 0 == (4292870144 & t) && (s = u(t >> 18 & 7 | 240), s += u(t >> 12 & 63 | 128), s += u(t >> 6 & 63 | 128)), t = s += u(63 & t | 128)
                      }
                      o += t
                    }
                    return o
                  },
                  decode: function(e) {
                    h = a(e), p = h.length, m = 0, e = [];
                    for (var t; !1 !== (t = s());) e.push(t);
                    t = e.length;
                    for (var i, n = -1, r = ""; ++n < t;) 65535 < (i = e[n]) && (r += u((i -= 65536) >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r += u(i);
                    return r
                  }
                };
              if (l && !l.nodeType)
                if (c) c.exports = d;
                else
                  for (var g in n = {}.hasOwnProperty, d) n.call(d, g) && (l[g] = d[g]);
              else n.utf8 = d
            }(this)
          }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        30: [function(e, t, i) {
          function n(e) {
            var t = "";
            do {
              t = o[e % s] + t, e = Math.floor(e / s)
            } while (0 < e);
            return t
          }

          function a() {
            var e = n(+new Date);
            return e !== r ? (c = 0, r = e) : e + "." + n(c++)
          }
          for (var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, l = {}, c = 0, d = 0; d < s; d++) l[o[d]] = d;
          a.encode = n, a.decode = function(e) {
            var t = 0;
            for (d = 0; d < e.length; d++) t = t * s + l[e.charAt(d)];
            return t
          }, t.exports = a
        }, {}]
      }, {}, [10])(10),
      function(e) {
        "function" != typeof Array.isArray && (Array.isArray = function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
          for (var t = 0, i = this.length; t < i; t++)
            if (this[t] === e) return t;
          return -1
        }), e = e.EventEmitter = function() {};
        var t = Array.isArray;
        e.prototype.emit = function(e) {
          var i;
          if ("error" === e && (!this._events || !this._events.error || t(this._events.error) && !this._events.error.length)) {
            if (arguments[1] instanceof Error) throw arguments[1];
            throw Error("Uncaught, unspecified 'error' event.")
          }
          if (!this._events) return !1;
          if (!(n = this._events[e])) return !1;
          if ("function" == typeof n) {
            switch (arguments.length) {
              case 1:
                n.call(this);
                break;
              case 2:
                n.call(this, arguments[1]);
                break;
              case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
              default:
                i = Array.prototype.slice.call(arguments, 1), n.apply(this, i)
            }
            return !0
          }
          if (t(n)) {
            i = Array.prototype.slice.call(arguments, 1);
            for (var n, a = 0, r = (n = n.slice()).length; a < r; a++) n[a].apply(this, i);
            return !0
          }
          return !1
        }, e.prototype.addListener = function(e, i) {
          if ("function" != typeof i) throw Error("addListener only takes instances of Function");
          return this._events || (this._events = {}), this._events[e] ? t(this._events[e]) ? this._events[e].push(i) : this._events[e] = [this._events[e], i] : this._events[e] = i, this
        }, e.prototype.on = e.prototype.addListener, e.prototype.once = function(e, t) {
          var i = this;
          i.on(e, function n() {
            i.removeListener(e, n), t.apply(this, arguments)
          })
        }, e.prototype.removeListener = function(e, i) {
          if ("function" != typeof i) throw Error("removeListener only takes instances of Function");
          if (!this._events || !this._events[e]) return this;
          var n = this._events[e];
          if (t(n)) {
            var a = n.indexOf(i);
            if (0 > a) return this;
            n.splice(a, 1), 0 === n.length && delete this._events[e]
          } else this._events[e] === i && delete this._events[e];
          return this
        }, e.prototype.removeAllListeners = function(e) {
          return e ? e && this._events && this._events[e] && (this._events[e] = null) : this._events = {}, this
        }, e.prototype.listeners = function(e) {
          return this._events || (this._events = {}), this._events[e] || (this._events[e] = []), t(this._events[e]) || (this._events[e] = [this._events[e]]), this._events[e]
        }
      }(window),
      function(e) {
        function t(t, i) {
          if (!i.engineIo) throw Error("You must specify engineIo");
          if (i.timestampRequests = !0, i.timestampParam = "__t", this.__callbackIndex = 0, this.__callbacks = {}, this.state = n.OPENING, this.socket = new i.engineIo(t, i), this.debug = !1, document.getElementById("tawk__dmz")) {
            var a = this;
            e.getSocketTransport = function() {
              if (a.socket.transport) return a.socket.transport.name
            }
          }
          document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0), EventEmitter.call(this), this.attachListeners()
        }
        var i, n = {
          OPENING: "opening",
          OPEN: "open",
          CLOSING: "closing",
          CLOSED: "closed"
        };
        for (i in EventEmitter.prototype) "function" == typeof EventEmitter.prototype[i] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, i) && (t.prototype[i] = EventEmitter.prototype[i]);
        t.prototype.attachListeners = function() {
          var e = this;
          this.socket.on("open", function() {
            e.state = n.OPEN, e.emit("connect")
          }), this.socket.on("close", function(t, i) {
            e.emit("disconnect", t, i), e.doClose()
          }), this.socket.on("error", function(t) {
            e.emit("error", t)
          }), this.socket.on("message", function(t) {
            e.onMessage(t)
          })
        }, t.prototype.close = t.prototype.disconnect = function() {
          var e = this;
          this.state === n.OPENING && setTimeout(function() {
            e.close()
          }, 1e3), this.state === n.OPEN && (this.state = n.CLOSING, this.clearCallbacks(), this.socket.close())
        }, t.prototype.doClose = function() {
          this.clearCallbacks(), this.state = n.CLOSED, this.socket.removeAllListeners(), this.removeAllListeners(), this.socket = null
        }, t.prototype.clearCallbacks = function() {
          this.__callbacks = {}
        }, t.prototype.onMessage = function(e) {
          (e = this.decode(e)) && ("__callback__" === e.c ? this.executeCallback(e) : this.emit.apply(this, [e.c].concat(e.p)))
        }, t.prototype.executeCallback = function(e) {
          var t = this.__callbacks[e.cb];
          delete this.__callbacks[e.cb], t.apply(null, e.p)
        }, t.prototype.decode = function(e) {
          var t;
          this.debug && console && console.log && (data = new Date, console.log("received " + data.toUTCString() + " : " + e));
          try {
            t = JSON.parse(e)
          } catch (e) {
            return void this.emit("error", e)
          }
          if (t.c)
            if ("error" === t.c || "connect" === t.c || "disconnect" === t.c) this.emit("error", Error("server returned reserved command : `" + t.cmd + "`"));
            else if (t.p && "[object Array]" !== Object.prototype.toString.call(t.p)) this.emit("error", Error("data is expected to be an array"));
          else {
            if ("__callback__" !== t.c) return t;
            if (e = parseInt(t.cb, 10), isNaN(e)) this.emit("error", Error("received callback command but there was no valid callback id(`" + e + "`"));
            else {
              if (this.__callbacks[e]) return t.cb = e, t;
              this.emit("error", Error("received callback command but callback isnt present (`" + t.cb + "`)"))
            }
          } else this.emit("error", Error("no command was sent by the server"))
        }, t.prototype.send = function() {
          var e = this.encode(arguments);
          this.debug && console && console.log && (data = new Date, console.log("send " + data.toUTCString() + " : " + e)), this.state !== n.OPEN ? this.emit("error", Error("Socket isnt open its state is `" + this.state + "` tried to send `" + e + "`")) : e && this.socket.send(e)
        }, t.prototype.encode = function(e) {
          var t = {};
          if ((e = Array.prototype.slice.call(e))[0]) {
            var i;
            t.c = e[0], "function" == typeof e[e.length - 1] && (t.cb = this.enqueuCallback(e.pop())), t.p = e.slice(1);
            try {
              i = JSON.stringify(t)
            } catch (e) {
              return void this.emit("error", e)
            }
            return i
          }
          this.emit("error", Error("now command specified"))
        }, t.prototype.enqueuCallback = function(e) {
          return this.__callbacks[this.__callbackIndex] = e, this.__callbackIndex++
        }, e.$__TawkSocket = t
      }(window),
      function(t) {
        var i, n, a, r, o, s, l = {},
          c = this,
          d = (new Date).getTime(),
          h = c.navigator,
          p = {
            viewHandler: null
          };
        t.startTime = d.toString(), t.loaded = !1, t.connected = !1, t.ready = !1, "undefined" != typeof Tawk_LoadStart && ($_Tawk_LoadStart = Tawk_LoadStart);
        try {
          p.ResetStyle = e.style.ResetStyle, p.MaximizedStyle = e.style.MaximizedStyle, p.MinifiedStyle = e.style.MinifiedStyle, p.MinifiedMobileStyle = e.style.MinifiedMobileStyle, p.MaximizedMobileStyle = e.style.MaximizedMobileStyle, p.CommonStyle = e.style.CommonStyle;
          var m = e.templates,
            u = {
              undefined: 1,
              boolean: 1,
              number: 1,
              string: 1
            },
            g = {
              exportProperty: function(e, t, i) {
                e[t] = i
              }
            };
          g.dependencyDetection = (s = [], {
            begin: function(e) {
              s.push(e && {
                callback: e,
                distinctDependencies: []
              })
            },
            end: function() {
              s.pop()
            },
            registerDependency: function(e) {
              if (!g.isSubscribable(e)) throw Error("Only subscribable things can act as dependencies");
              if (0 < s.length) {
                var t = s[s.length - 1];
                !t || 0 <= g.utils.arrayIndexOf(t.distinctDependencies, e) || (t.distinctDependencies.push(e), t.callback(e))
              }
            },
            ignore: function(e, t, i) {
              try {
                return s.push(null), e.apply(t, i || [])
              } finally {
                s.pop()
              }
            }
          }), g.observable = function(e) {
            function t() {
              return 0 < arguments.length ? (t.equalityComparer && t.equalityComparer(i, arguments[0]) || (t.valueWillMutate(), i = arguments[0], t.valueHasMutated()), this) : (g.dependencyDetection.registerDependency(t), i)
            }
            var i = e;
            return g.subscribable.call(t), t.peek = function() {
              return i
            }, t.valueHasMutated = function() {
              t.notifySubscribers(i)
            }, t.valueWillMutate = function() {
              t.notifySubscribers(i, "beforeChange")
            }, g.utils.extend(t, g.observable.fn), g.exportProperty(t, "peek", t.peek), g.exportProperty(t, "valueHasMutated", t.valueHasMutated), g.exportProperty(t, "valueWillMutate", t.valueWillMutate), t
          }, g.subscribable = function() {
            this._subscriptions = {}, g.utils.extend(this, g.subscribable.fn), g.exportProperty(this, "subscribe", this.subscribe), g.exportProperty(this, "getSubscriptionsCount", this.getSubscriptionsCount)
          }, g.subscribable.fn = {
            subscribe: function(e, t, i) {
              i = i || "change", e = t ? e.bind(t) : e;
              var n = new g.subscription(this, e, function() {
                g.utils.arrayRemoveItem(this._subscriptions[i], n)
              }.bind(this));
              return this._subscriptions[i] || (this._subscriptions[i] = []), this._subscriptions[i].push(n), n
            },
            notifySubscribers: function(e, t) {
              if (t = t || "change", this.hasSubscriptionsForEvent(t)) {
                var i, n = this._subscriptions[t];
                i = 0;
                for (var a = this._subscriptions[t].length; i < a; ++i)(n = (n = this._subscriptions[t].slice(0))[i]) && !0 !== n.isDisposed && n.callback(e)
              }
            },
            hasSubscriptionsForEvent: function(e) {
              return this._subscriptions[e] && this._subscriptions[e].length
            },
            getSubscriptionsCount: function() {
              var e = 0;
              return g.utils.objectForEach(this._subscriptions, function(t, i) {
                e += i.length
              }), e
            },
            unsubscribe: function(e, t) {
              g.utils.arrayRemoveItem(this._subscriptions[t || "change"], e)
            }
          }, g.isSubscribable = function(e) {
            return null !== e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers
          }, g.subscription = function(e, t, i) {
            this.target = e, this.callback = t, this.disposeCallback = i, g.exportProperty(this, "dispose", this.dispose)
          }, g.subscription.prototype.dispose = function() {
            this.isDisposed = !0, this.disposeCallback()
          }, g.observable.fn = {
            equalityComparer: function(e, t) {
              return (null === e || typeof e in u) && e === t
            }
          };
          var f = g.observable.protoProperty = "__tw_proto__";
          if (g.observable.fn[f] = g.observable, g.hasPrototype = function(e, t) {
              return null !== e && void 0 !== e && void 0 !== e[f] && (e[f] === t || g.hasPrototype(e[f], t))
            }, g.isObservable = function(e) {
              return g.hasPrototype(e, g.observable)
            }, g.utils = {
              arrayIndexOf: function(e, t) {
                if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);
                for (var i = 0, n = e.length; i < n; i++)
                  if (e[i] === t) return i;
                return -1
              },
              extend: function(e, t) {
                if (t)
                  for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e
              },
              arrayRemoveItem: function(e, t) {
                var i = g.utils.arrayIndexOf(e, t);
                0 <= i && e.splice(i, 1)
              },
              objectForEach: function(e, t) {
                for (var i in e) e.hasOwnProperty(i) && t(i, e[i])
              }
            }, function(e) {
              function t(e) {
                for (var t, i, n = [], a = 0, r = e.length; a < r;) 55296 <= (t = e.charCodeAt(a++)) && 56319 >= t && a < r ? 56320 == (64512 & (i = e.charCodeAt(a++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), a--) : n.push(t);
                return n
              }

              function i(e) {
                var i, p, m, v, w, b, C, x, E, T, k, S, H = [];
                for (T = (e = t(e)).length, i = d, p = 0, w = c, b = 0; b < T; ++b) 128 > (E = e[b]) && H.push(y(E));
                for ((m = v = H.length) && H.push(h); m < T;) {
                  for (C = n, b = 0; b < T; ++b)(E = e[b]) >= i && E < C && (C = E);
                  if (C - i > f((n - p) / (k = m + 1))) throw new RangeError(u.overflow);
                  for (p += (C - i) * k, i = C, b = 0; b < T; ++b) {
                    if ((E = e[b]) < i && ++p > n) throw new RangeError(u.overflow);
                    if (E == i) {
                      for (x = p, C = a; !(x < (E = C <= w ? r : C >= w + o ? o : C - w)); C += a) S = x - E, x = a - E, H.push(y(E + S % x + 22 + 75 * (26 > E + S % x) - 0)), x = f(S / x);
                      for (H.push(y(x + 22 + 75 * (26 > x) - 0)), w = k, C = 0, p = m == v ? f(p / l) : p >> 1, p += f(p / w); p > g * o >> 1; C += a) p = f(p / g);
                      w = f(C + (g + 1) * p / (p + s)), p = 0, ++m
                    }
                  }++p, ++i
                }
                return H.join("")
              }
              var n = 2147483647,
                a = 36,
                r = 1,
                o = 26,
                s = 38,
                l = 700,
                c = 72,
                d = 128,
                h = "-",
                p = /[^\x20-\x7E]/,
                m = /[\x2E\u3002\uFF0E\uFF61]/g,
                u = {
                  overflow: "Overflow: input needs wider integers to process",
                  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                  "invalid-input": "Invalid input"
                },
                g = a - r,
                f = Math.floor,
                y = String.fromCharCode;
              e.punycode = {
                version: "1.4.1",
                ucs2: {
                  decode: t
                },
                encode: i,
                toASCII: function(e) {
                  return function(e, t) {
                    var i = "";
                    1 < (n = e.split("@")).length && (i = n[0] + "@", e = n[1]);
                    for (var n, a = (n = (e = e.replace(m, ".")).split(".")).length, r = []; a--;) r[a] = t(n[a]);
                    return i + (n = r.join("."))
                  }(e, function(e) {
                    return p.test(e) ? "xn--" + i(e) : e
                  })
                }
              }
            }(p), l = {}, c.$_Tawk = c.$_Tawk || {}, c.Tawk_API = c.Tawk_API || {}, "object" == typeof c.$_Tawk_API)
            for (var y in c.$_Tawk_API) c.$_Tawk_API.hasOwnProperty(y) && (c.Tawk_API[y] = c.$_Tawk_API[y]);
          if ("function" != typeof c.CustomEvent) {
            var v = function(e, t) {
              t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
              };
              var i = document.createEvent("CustomEvent");
              return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
            };
            v.prototype = c.Event.prototype, p.CustomEventIE = v
          }
          t.begin = function(e) {
            p.main.begin(e)
          }, t.init = function(e) {
            p.main.init(e)
          };
          t.maximize = Tawk_API.maximize = function() {
            t.ready && p.sessionHandler.notifyWindowState("max")
          }, t.minimize = Tawk_API.minimize = function() {
            t.ready && p.sessionHandler.notifyWindowState("min")
          }, t.toggle = Tawk_API.toggle = function() {
            t.ready && p.viewHandler.toggleWidget()
          }, t.popup = Tawk_API.popup = function() {
            t.ready && p.viewHandler.popoutWidget()
          }, t.getWindowType = Tawk_API.getWindowType = function() {
            if (t.ready) return H.isEmbedded ? "embed" : H.isPopup ? "popup" : "inline"
          }, t.showWidget = Tawk_API.showWidget = function() {
            t.ready && p.viewHandler.showWidget()
          }, t.hideWidget = Tawk_API.hideWidget = function() {
            t.ready && p.viewHandler.hideWidget()
          }, t.toggleVisibility = Tawk_API.toggleVisibility = function() {
            t.ready && p.viewHandler.toggleVisibility()
          }, t.getStatus = Tawk_API.getStatus = function() {
            if (t.ready) return B.pageStatus()
          }, t.isChatMaximized = Tawk_API.isChatMaximized = function() {
            if (t.ready) return "max" === B.chatWindowState()
          }, t.isChatMinimized = Tawk_API.isChatMinimized = function() {
            if (t.ready) return "min" === B.chatWindowState()
          }, t.isChatHidden = Tawk_API.isChatHidden = function() {
            if (t.ready) return p.viewHandler.isWidgetHidden()
          }, t.isChatOngoing = Tawk_API.isChatOngoing = function() {
            if (t.ready) return p.chatHandler.isChatOngoing()
          }, t.isVisitorEngaged = Tawk_API.isVisitorEngaged = function() {
            if (t.ready) return p.chatHandler.isVisitorEngaged()
          }, t.endChat = Tawk_API.endChat = function() {
            t.ready && p.chatHandler.triggerEndChat()
          }, t.addEvent = Tawk_API.addEvent = function(e, t, i) {
            p.sessionHandler.addEvent(e, t, i)
          }, t.setAttributes = Tawk_API.setAttributes = function(e, t) {
            p.sessionHandler.setAttributes(e, !0, t)
          }, t.addTags = Tawk_API.addTags = function(e, t) {
            p.sessionHandler.addTags(e, t)
          }, t.removeTags = Tawk_API.removeTags = function(e, t) {
            p.sessionHandler.removeTags(e, t)
          };
          var w = "",
            b = 0,
            C = !1,
            x = !1,
            E = null,
            T = null,
            k = {},
            S = !0,
            H = {
              widgetId: "default",
              isPopup: !1,
              isEmbedded: !1,
              soundOn: g.observable(!0),
              showAgentBar: !0,
              showWaitTime: !0,
              showPreChatForm: !1,
              showOfflineForm: !0,
              hideWidget: !1,
              hideWidgetOnLoad: !1,
              hideWidgetOnOffline: !1,
              greetings: {},
              prechatOptions: {},
              headerBgColor: null,
              headerTxtColor: null,
              isLegacyLayout: !1,
              whiteLabel: g.observable(),
              mobileWidget: g.observable("round"),
              desktopWidget: g.observable("full"),
              chatBubble: g.observable(),
              chatPosition: g.observable("br"),
              maximizedDimensions: g.observable({
                width: 0,
                height: 0
              }),
              minimizedDimensions: g.observable({
                width: 0,
                height: 0,
                position: "br"
              }),
              showMessagePreview: g.observable(!0),
              showUploads: g.observable(!0),
              showRating: g.observable(!0),
              showAgentTyping: !0,
              showVisitorTyping: g.observable(!0),
              showEmoji: g.observable(!0),
              showUnreadInTab: g.observable(!0),
              onClickAction: "max",
              widgetVersion: 0,
              locale: "en",
              schedule: null,
              scheduleTimezone: null,
              isTopPositioned: function() {
                return "tr" === this.chatPosition() || "tl" === this.chatPosition()
              },
              isBottomPositioned: function() {
                return "br" === this.chatPosition() || "bl" === this.chatPosition()
              },
              isCenterPositioned: function() {
                return "cr" === this.chatPosition() || "cl" === this.chatPosition()
              },
              isRightPositioned: function() {
                return "cr" === this.chatPosition() || "tr" === this.chatPosition() || "br" === this.chatPosition()
              },
              isLeftPositioned: function() {
                return "cl" === this.chatPosition() || "tl" === this.chatPosition() || "bl" === this.chatPosition()
              },
              isDesktopRectangle: function() {
                return "min" !== this.desktopWidget()
              },
              agentTextBgColor: null,
              agentTextColor: null,
              visitorTextBgColor: null,
              visitorTextColor: null,
              agentTextBorderColor: null,
              topCorner: null,
              bottomCorner: null,
              widgetOffsetX: 0,
              widgetOffsetY: 0,
              isHeaderCompact: null,
              maxStyle: g.observable(),
              minStyle: g.observable(),
              mobMaxStyle: g.observable(),
              mobMinStyle: g.observable(),
              isRTL: g.observable(!1),
              webRTCSettings: g.observable(),
              brandingRedirect: g.observable()
            },
            _ = {
              uuid: null,
              uuidVer: 0,
              visitorId: "",
              name: g.observable(),
              displayName: g.observable(),
              email: g.observable(),
              transcriptEmail: "",
              uuids: []
            },
            I = {
              pageId: null,
              tawkId: "",
              pageName: g.observable(),
              isStable: !0
            },
            R = {
              chatSynced: !1,
              chatBuffer: [],
              chatVersion: 0,
              chatDepartment: "any",
              agents: {},
              agentProfiles: {},
              profiles: {},
              rating: g.observable(),
              chatHistory: [],
              chatOrder: 0,
              chatEndVersion: 1,
              chatId: null
            },
            B = {
              transferKey: "",
              sessionKey: "",
              transferedSession: !1,
              currentVersion: 679,
              criticalVersion: 0,
              serverVersion: 0,
              agentImgUrl: "https://s3.amazonaws.com/tawk-to-pi",
              visitorAppServer: "https://va.tawk.to",
              visitorSocketServer: "",
              chatWindowState: g.observable("min"),
              pageStatus: g.observable(),
              pageStatusVersion: 0,
              prechatFormSubmitted: g.observable(!1),
              waitTime: 6e4,
              chatBubbleClosed: g.observable(!1),
              restarted: !1,
              departments: []
            },
            P = {
              chat_sound: "./app/audio/chat_sound.mp3"
            },
            N = {
              chat_sound: "./app/audio/chat_sound.ogg"
            },
            M = {
              chat_sound: "./app/audio/chat_sound.wav"
            };
          ! function() {
            var e = !1,
              t = /xyz/.test(function() {
                xyz
              }) ? /\b_super\b/ : /.*/;
            this.TawkClass = function() {}, TawkClass.extend = function(i) {
              function n() {
                !e && this.init && this.init.apply(this, arguments)
              }
              var a = this.prototype;
              e = !0;
              var r = new this;
              for (var o in e = !1, i) r[o] = "function" == typeof i[o] && "function" == typeof a[o] && t.test(i[o]) ? function(e, t) {
                return function() {
                  var i = this._super;
                  this._super = a[e];
                  var n = t.apply(this, arguments);
                  return this._super = i, n
                }
              }(o, i[o]) : i[o];
              return n.prototype = r, n.prototype.constructor = n, n.extend = arguments.callee, n
            }
          }();
          var A = function() {
            this.br = "<br/>", this.regAlphaNumeric = /^[a-z0-9\-]{1,50}$/i, this.regNameMach = /^V[0-9]{16}$/, this.regTrim = /^\s+|\s+$/g, this.regDate = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/, this.regEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/i, this.regSurvey = /\[option\](.*?)(<br\/>|$)/g, this.regSurveyQuestion = /^(.*?)\[option\]/g, this.regOption = /\[option\]/g, this.regBr = /<br\/>/, this.regMatchUrl = RegExp('(?:^(?:(?:[a-z]+:)?//)?(?:\\S+(?::\\S*)?@)?(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i"), this.regMatchIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\/\?#]+)+)\b/gi, this.regEmailMatch = /^((mailto:){0,1}[a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)$/, this.regLineBreaks = /(\r\n|\n|\r)/gm, this.decodedAmp = "&", this.decodedQuote = '"', this.decodedApos = "'", this.decodedLess = "<", this.decodedGreat = ">", this.encodedQuote = "&quot;", this.encodedApos = "&#39;", this.encodedLess = "&lt;", this.encodedGreat = "&gt;", this.encodedAmp = "&amp;", this.rtlLangTab = ["ar", "he", "fa"], this.decodedAmpRegex = RegExp(this.decodedAmp, "g"), this.decodedQuoteRegex = RegExp(this.decodedQuote, "g"), this.decodedAposRegex = RegExp(this.decodedApos, "g"), this.decodedLessRegex = RegExp(this.decodedLess, "g"), this.decodedGreatRegex = RegExp(this.decodedGreat, "g"), this.encodedQuoteRegex = RegExp(this.encodedQuote, "g"), this.encodedAposRegex = RegExp(this.encodedApos, "g"), this.encodedLessRegex = RegExp(this.encodedLess, "g"), this.encodedGreatRegex = RegExp(this.encodedGreat, "g"), this.encodedAmpRegex = RegExp(this.encodedAmp, "g"), this.connectionUrl = "https://video.tawk.to"
          };
          A.prototype.createElement = function(e, t, i, n, a) {
            var r;
            for (r in e = e.createElement(t), i = i || {}) e[r] = i[r];
            return a && "iframe" !== t && (e.innerHTML = a), n && (e.style.cssText = n), e
          }, A.prototype.getDocument = function(e) {
            return e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document ? e.document : null
          }, A.prototype.parseQueryString = function(e) {
            var t, i, n, a = {};
            for (n = (e ? e.replace(/(.*)\?/, "") : c.location.search.substring(1)).split("&"), e = 0, t = n.length; e < t; e += 1) a[(i = n[e].split("="))[0]] = i[1];
            return a
          }, A.prototype.createQueryString = function(e) {
            var t, i = [];
            for (t in e) e.hasOwnProperty(t) && i.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return i.join("&")
          }, A.prototype.getReloadedScript = function() {
            var e, t, i = document.getElementsByTagName("script"),
              n = null;
            for (e = 0, t = i.length; e < t; e++) i[e].id && -1 !== i[e].id.indexOf("TawkScript") && (n = i[e]);
            return n
          }, A.prototype.trim = function(e) {
            return this.isString(e) ? String.prototype.trim ? e.trim().toString() : e.replace(this.regTrim, "") : null
          }, A.prototype.isString = function(e) {
            return void 0 !== e && "string" == typeof e
          }, A.prototype.isEmail = function(e) {
            return this.regEmail.test(e)
          }, A.prototype.isArray = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
          }, A.prototype.parseVisitorName = function(e) {
            return this.isGeneratedName(e) ? p.languageParser.translate("chat", "defaultName") : e
          }, A.prototype.generateRandomString = function(e) {
            var t, i = [];
            for (e = e || 6, t = 0; t < e; t++) i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random())));
            return i.join("")
          }, A.prototype.computedStyle = function(e, t) {
            var i;
            if (!e || !t) return null;
            if (e.currentStyle) i = e.currentStyle[t];
            else try {
              i = getComputedStyle(e, null).getPropertyValue(t)
            } catch (e) {
              i = "none"
            }
            return "width" === t && "auto" === i && (i = e.clientWidth), "" + i
          }, A.prototype.parseChatTime = function(e) {
            var t = this.getDateFromUTC(e);
            return e = t.getHours(), t = t.getMinutes(), 10 > e && (e = "0" + e), 10 > t && (t = "0" + t), e + ":" + t
          }, A.prototype.getDateFromUTC = function(e) {
            return e instanceof Date ? e : (e = this.regDate.exec(e), new Date(Date.UTC(e[1], e[2] - 1, e[3], e[4], e[5], e[6], e[7])))
          }, A.prototype.rawEncode = function(e) {
            return e.replace(this.decodedAmpRegex, this.encodedAmp).replace(this.decodedQuoteRegex, this.encodedQuote).replace(this.decodedAposRegex, this.encodedApos).replace(this.decodedLessRegex, this.encodedLess).replace(this.decodedGreatRegex, this.encodedGreat)
          }, A.prototype.rawDecode = function(e) {
            return e.replace(this.encodedQuoteRegex, this.decodedQuote).replace(this.encodedAposRegex, this.decodedApos).replace(this.encodedLessRegex, this.decodedLess).replace(this.encodedGreatRegex, this.decodedGreat).replace(this.encodedAmpRegex, this.decodedAmp)
          }, A.prototype.getMilliseconds = function(e) {
            return e instanceof Date || (e = this.regDate.exec(e), e = new Date(Date.UTC(e[1], e[2] - 1, e[3], e[4], e[5], e[6], e[7]))), e.getTime()
          }, A.prototype.capitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
          }, A.prototype.getDepartmentStatus = function(e) {
            var t, i, n = B.departments,
              a = "",
              r = !0,
              o = "";
            if ("any" === e) return {
              status: "",
              isOnline: !0,
              name: ""
            };
            for (t = 0, i = n.length; t < i; t++)
              if (n[t].did === e) {
                r = "online" === n[t].st, a = n[t].st, o = n[t].n;
                break
              } return {
              status: a,
              isOnline: r,
              name: o
            }
          }, A.prototype.getElementsByClassName = function(e, t) {
            var i, n, a, r;
            if (e.getElementsByClassName) return e.getElementsByClassName(t);
            for (r = [], i = 0, n = (a = e.getElementsByTagName("*")).length; i < n; i++) - 1 !== a[i].className.indexOf(t) && r.push(a[i]);
            return r
          }, A.prototype.insertScript = function(e, t, i) {
            var n = document.getElementsByTagName("script")[0],
              a = document.createElement("script");
            a.async = !0, a.src = e, a.charset = "UTF-8", a.setAttribute("crossorigin", "*"), t && (a.id = t), i ? n.parentNode.insertBefore(a, n) : n.parentNode.appendChild(a)
          }, A.prototype.isPlaceholderSupported = function() {
            return "placeholder" in document.createElement("input")
          }, A.prototype.togglePlaceholderText = function(e, t, i) {
            p.eventHandler.listen(e, "focus", function(e) {
              this.value === t && (this.value = "")
            }, i + "inputfocus"), p.eventHandler.listen(e, "blur", function() {
              "" === this.value && (this.value = t)
            }, i + "inputblur")
          }, A.prototype.redraw = function(e) {
            var t = e.style.display;
            e.style.display = "none !important", e.style.display = t + " !important"
          }, A.prototype.isTouchDevice = function() {
            try {
              return document.createEvent("TouchEvent"), !0
            } catch (e) {
              return !1
            }
          }, A.prototype.shadeColor = function(e, t) {
            var i, n, a = "#";
            for (6 > (e = String(e).replace(/[^0-9a-f]/gi, "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), t = t || 0, n = 0; 6 > n; n += 2) i = parseInt(e[n] + "" + e[n + 1], 16), a += ("00" + (i = Math.round(Math.min(Math.max(0, i + i * t), 255)).toString(16))).substring(i.length);
            return a
          }, A.prototype.getContrast = function(e) {
            return 6 > (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), 8388607.5 < parseInt(e, 16) ? "white" : "black"
          }, A.prototype.getElementsByTagName = function(e, t) {
            for (var i = [], n = e.getElementsByTagName(t), a = 0; a < n.length; a++) i.push(n[a]);
            return i
          }, A.prototype.chatElementInView = function(e) {
            var t = p.viewHandler.chatContainer.getElementById("chatContainer");
            return !!(e.offsetTop >= t.scrollTop && e.offsetTop <= t.scrollTop + t.offsetHeight && 0 !== e.clientWidth && 0 !== e.clientHeight)
          }, A.prototype.formatFileSize = function(e) {
            var t = "Bytes KB MB GB TB PB EB ZB YB".split(" ");
            if (!(e = parseInt(e, 10))) return "0Bytes";
            for (var i = 1; i < t.length; i++)
              if (e < Math.pow(1024, i)) return Math.round(e / Math.pow(1024, i - 1) * 100) / 100 + t[i - 1];
            return e
          }, A.prototype.isFileInputSupported = function() {
            if (h.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
            var e = document.createElement("input");
            return e.type = "file", !e.disabled
          }, A.prototype.escapeTemplateReplacement = function(e, t) {
            for (var i = 0; i < t.length; i++) {
              var n = t[i],
                a = n.textReplace;
              "string" == typeof a && (a = a.replace(/\$/g, "$$$")), e = e.replace(n.placeholder, a)
            }
            return e
          }, A.prototype.getGenericStyle = function(e) {
            return ["outline: " + (e.outline ? e.outline : "none") + " !important; ", "visibility: " + (e.visibility ? e.visibility : "visible") + " !important; ", "resize : " + (e.resize ? e.resize : "none") + " !important; ", "box-shadow: " + (e.boxshadow ? e.boxshadow : "none") + " !important; ", "overflow: " + (e.overflow ? e.overflow : "visible") + " !important; ", "background: " + (e.background ? e.background : "none") + " !important; ", "opacity: " + (e.opacity ? e.opacity : "1") + " !important; ", "filter: alpha(opacity=" + (e.opacity ? 100 * e.opacity : "100") + ") !important; ", "-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity" + (e.opacity ? e.opacity : "1") + ") !important; ", "-moz-opacity : " + (e.opacity ? e.opacity : "1") + " !important; ", "-khtml-opacity: " + (e.opacity ? e.opacity : "1") + " !important; ", "top: " + (e.top ? e.top : "auto") + " !important; ", "right: " + (e.right ? e.right : "auto") + " !important; ", "bottom: " + (e.bottom ? e.bottom : "auto") + " !important; ", "left   : " + (e.left ? e.left : "auto") + " !important; ", "position: " + (e.position ? e.position : "absolute") + " !important; ", "border : " + (e.border ? e.border : "0") + " !important; ", "min-height: " + (e.minheight ? e.minheight : "auto") + " !important; ", "min-width : " + (e.minwidth ? e.minwidth : "auto") + " !important; ", "max-height: " + (e.maxheight ? e.maxheight : "none") + " !important; ", "max-width : " + (e.maxwidth ? e.maxwidth : "none") + " !important; ", "padding: " + (e.padding ? e.padding : "0") + " !important; ", "margin : " + (e.margin ? e.margin : "0") + " !important; ", "-moz-transition-property    : " + (e.transition ? e.transition : "none") + " !important; ", "-webkit-transition-property : " + (e.transition ? e.transition : "none") + " !important; ", "-o-transition-property      : " + (e.transition ? e.transition : "none") + " !important; ", "transition-property         : " + (e.transition ? e.transition : "none") + " !important; ", "transform : " + (e.transform ? e.transform : "none") + " !important; ", "-webkit-transform           : " + (e.transform ? e.transform : "none") + " !important; ", "-ms-transform: " + (e.transform ? e.transform : "none") + " !important; ", "width  : " + (e.width ? e.width : "auto") + " !important; ", "height : " + (e.height ? e.height : "auto") + " !important; ", "display: " + (e.display ? e.display : "block") + " !important; ", "z-index: " + (e.zindex ? e.zindex : "none") + " !important; ", "background-color: " + (e.backgroundcolor ? e.backgroundcolor : "transparent") + " !important; ", "cursor : " + (e.cursor ? e.cursor : "auto") + " !important; ", "float  : " + (e.float ? e.float : "none") + " !important; ", "border-radius: " + (e.borderRadius ? e.borderRadius : "unset") + " !important; ", "pointer-events: auto !important"].join("").replace(/\s/gm, "")
          }, A.prototype.isGeneratedName = function(e) {
            return this.regNameMach.test(e)
          }, A.prototype.getRotateStyling = function(e, t) {
            var i = "rotate(" + e + "deg) translateZ(0px)";
            return {
              transform: i,
              "-moz-transform": i,
              "-webkit-transform": i,
              "-o-transform": i,
              "-ms-transform": i,
              "transform-origin": t,
              "-moz-transform-origin": t,
              "-webkit-transform-origin": t,
              "-o-transform-origin": t,
              "-ms-transform-origin": t
            }
          }, A.prototype.blurElements = function(e) {
            for (var t = 0; t < e.length; t++) e[t].blur()
          }, A.prototype.transformGreetings = function(e) {
            for (var t, i, n = /\[([^)]+)\]/, a = /\(([^)]+)\)/, r = /\[[^\]\(\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\(\)]+\)/i, o = "_blank", s = e; null !== (t = r.exec(s)) && (i = n.exec(t[0]), (t = a.exec(t[0]))[0].indexOf("(mailto:") || (o = "_top"), (s = s.replace(i[0] + t[0], '<a target="' + o + '" href="' + t[1] + '" class="link">' + i[1] + "</a>")) !== e););
            return s
          }, A.prototype.checkWhiteLabelLink = function(e, t, i) {
            var n, a, r = 1e4 * Math.random(),
              o = this,
              s = p.viewHandler.chatContainer,
              l = function() {
                (t.label !== e.innerHTML || t.url && t.url !== e.href || !t.url && e.href || t.id !== e.id || !s.getElementById(e.id) || t.cssText !== e.style.cssText) && (o.whiteLabelUnexpectedIssueLogged || (p.loggingHandler.logIncident("White label element has changed unexpectedly", {
                  pageId: _.uuid
                }), o.whiteLabelUnexpectedIssueLogged = !0), e.id = t.id, e.innerHTML = t.label, e.style.cssText = t.cssText, null !== t.url ? e.href = t.url : e.removeAttribute("href"), !s.getElementById(t.parentElem.id) && t.grandParentName && (n = s.getElementById(t.grandParentName), t.siblingName && (a = s.getElementById(t.siblingName)) && n && n.insertBefore(t.parentElem, a)), n = s.getElementById(t.parentElem.id), !s.getElementById(e.id) && n && n.appendChild(e)), o.checkWhiteLabelLink(e, t, i)
              };
            i ? this.messagePreviewCheckWhiteLabelRef = setTimeout(l, r) : this.checkWhiteLabelRef = setTimeout(l, r)
          }, A.prototype.applyWhiteLabelSettings = function(e, t, i) {}, A.prototype.transformLabel = function(e) {
            var t;
            return (t = e.match(/_[^_]+_/gi)) && 0 < t.length && t.forEach(function(t) {
              var i;
              i = t.indexOf("_");
              var n = t.lastIndexOf("_");
              i = t.substring(0, i) + "<i>" + t.substring(i + 1, n) + "</i>" + t.substring(n + 1, t.length), e = e.replace(t, i)
            }), (t = e.match(/\*[^*]+\*/gi)) && 0 < t.length && t.forEach(function(t) {
              var i;
              i = t.indexOf("*");
              var n = t.lastIndexOf("*");
              i = t.substring(0, i) + "<b>" + t.substring(i + 1, n) + "</b>" + t.substring(n + 1, t.length), e = e.replace(t, i)
            }), e
          }, A.prototype.getRandomName = function() {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(52 * Math.random()) + this.generateRandomString() + "-" + (new Date).getTime()
          }, A.prototype.insertRandomTagsBeforeAndAfter = function(e, t, i) {
            var n, a = Math.floor(3 * Math.random() + 1);
            for (n = 0; n < a; n++) {
              var r = document.createElement(i);
              r.id = L.getRandomName(), t.insertBefore(r, e)
            }
            for (a = Math.floor(3 * Math.random() + 1), n = 0; n < a; n++)(e = document.createElement(i)).id = L.getRandomName(), t.appendChild(e)
          }, A.prototype.getWebRTCToken = function(e, t, i) {
            if (!this.hasWebRTC()) return i(!0);
            var n = this;
            e = {
              video: e,
              screen: t
            }, i = i || function() {}, this.webrtcWin = c.open("", ""), p.socketManager.sendToConnector("getWebRTCToken", e, function(e, t) {
              if (e) return n.webrtcWin.close(), i(!0, e);
              n.webrtcWin.location.href = n.connectionUrl + "/v2/call?token=" + t.data.token, i()
            })
          }, A.prototype.rejectCall = function(e, t) {
            var i = {
              callId: e
            };
            t = t || function() {}, p.socketManager.sendToConnector("declineCall", i, function() {
              t()
            })
          }, A.prototype.disconnectWebRTC = function() {
            this.webrtcWin && this.webrtcWin.close()
          }, A.prototype.debounce = function(e, t, i) {
            var n;
            return function() {
              var a = this,
                r = arguments,
                o = i && !n;
              clearTimeout(n), n = setTimeout(function() {
                n = null, i || e.apply(a, r)
              }, t), o && e.apply(a, r)
            }
          }, A.prototype.isDescendent = function(e, t) {
            for (var i = t.parentNode; null !== i;) {
              if (i === e) return !0;
              i = i.parentNode || null
            }
            return !1
          }, A.prototype.getTimeDifference = function(e, t) {
            var i, n;
            return i = new Date(e), endTimeFmt = new Date(t), diff = endTimeFmt.getTime() - i.getTime(), 36e5 <= diff ? (i = Math.round(diff / 36e5), n = "hours") : 6e4 <= diff ? (i = Math.round(diff / 6e4), n = "minutes") : (i = Math.round(diff / 1e3), n = "seconds"), p.languageParser.translate("chat", n, {
              num: i
            })
          }, A.prototype.hasClass = function(e, t) {
            return e.classList ? e.classList.contains(t) : !!e.className.match(RegExp("(\\s|^)" + t + "(\\s|$)"))
          }, A.prototype.addClass = function(e, t) {
            e.classList ? e.classList.add(t) : this.hasClass(e, t) || (e.className += " " + t)
          }, A.prototype.removeClass = function(e, t) {
            e.classList ? e.classList.remove(t) : this.hasClass(e, t) && (e.className = e.className.replace(RegExp("(\\s|^)" + t + "(\\s|$)"), " "))
          }, A.prototype.hasWebRTC = function() {
            return !C && (h.getUserMedia || h.webkitGetUserMedia || h.mozGetUserMedia || h.msGetUserMedia || h.mediaDevices && h.mediaDevices.getUserMedia)
          }, Inheritance_Manager = {
            extend: function(e, t) {
              function i() {}
              i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e, e.prototype.parent = t.prototype, e.baseConstructor = t, e.superClass = t.prototype
            }
          };
          var L = new A;
          "undefined" != typeof module && module.exports && (module.exports.Utils = A);
          var O = [{
              string: h.userAgent,
              subString: "Edge",
              identity: "explorer",
              versionSearch: "Edge"
            }, {
              string: h.userAgent,
              subString: "Trident/7.0",
              identity: "explorer",
              versionSearch: "rv"
            }, {
              string: h.userAgent,
              subString: "(Opera|OPR)",
              identity: "opera",
              versionSearch: "Version"
            }, {
              string: h.userAgent,
              subString: "Chrome",
              identity: "chrome",
              versionSearch: "Chrome"
            }, {
              string: h.userAgent,
              subString: "Mobile Safari",
              identity: "android",
              versionSearch: "Version"
            }, {
              string: h.userAgent,
              subString: "Firefox",
              identity: "firefox",
              versionSearch: "Firefox"
            }, {
              string: h.userAgent,
              subString: "MSIE",
              identity: "explorer",
              versionSearch: "MSIE"
            }, {
              string: h.userAgent,
              subString: "IEMobile",
              identity: "explorer",
              versionSearch: "IEMobile"
            }, {
              string: h.userAgent,
              subString: "Safari",
              identity: "safari",
              versionSearch: "Version"
            }, {
              string: h.userAgent,
              subString: "Gecko",
              identity: "mozilla",
              versionSearch: "rv"
            }],
            D = [{
              string: h.userAgent,
              subString: "Windows Phone",
              identity: "windows_phone"
            }, {
              string: h.platform,
              subString: "Win",
              identity: "windows"
            }, {
              string: h.platform,
              subString: "Mac",
              identity: "mac"
            }, {
              string: h.userAgent,
              subString: "iPhone",
              identity: "iphone"
            }, {
              string: h.userAgent,
              subString: "Android",
              identity: "android"
            }, {
              string: h.platform,
              subString: "Linux",
              identity: "linux"
            }, {
              string: h.userAgent,
              subString: "iPad",
              identity: "ipad"
            }],
            W = {
              google: "q",
              yahoo: "p",
              baidu: "wd",
              yandex: "text",
              bing: "q",
              soso: "w",
              ask: "q",
              aol: "q",
              sogou: "query",
              mywebsearch: "searchfor",
              youdao: "q",
              lycos: "q",
              infospace: "q",
              blekko: "q",
              info: "q",
              dogpile: "q",
              duckduckgo: "q",
              webcrawler: "q"
            },
            F = {
              src: "about:blank",
              border: "0",
              cellspacing: "0",
              frameBorder: "0",
              scrolling: "no",
              horizontalscrolling: "no",
              verticalscrolling: "no",
              allowTransparency: "true",
              title: "chat widget"
            },
            z = {
              nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
              blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
              chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
              ie: [/(IEMobile)[ \/](\d+)\.(\d+)/],
              firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
              operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
              opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
              safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
              uc: [/(UCBrowser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
              "android2.3": [/(Android) 2\.3(?:[.\-]([a-z0-9]+))?/],
              android2: [/(Android) 2\.(\d+)(?:[.\-]([a-z0-9]+))?/],
              android: [/Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[\- ][\d]+\.[\d]+\-update1; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}\-[A-Za-z]{0,2};(.+) Build/, /Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[\- ][\d]+\.[\d]+; (.+) Build/]
            },
            U = function() {
              this.versionSearchString = this.browserObj = null, this.init()
            };
          U.prototype.init = function() {
            var e = this.getBrowserVersion();
            T = this.getMobileBrowser(), b = e.version, w = e.vendor, (k = {
              mp3: this.hasHtmlAudio("mp3"),
              ogg: this.hasHtmlAudio("ogg"),
              wav: this.hasHtmlAudio("wav")
            }).supported = k.mp3 || k.ogg || k.wav || k.aac, S = L.isPlaceholderSupported(), "explorer" === w && (C = !0, 6 === b && (x = !0))
          }, U.prototype.getBrowserVersion = function() {
            return this.browserObj ? this.browserObj : this.browserObj = {
              vendor: this.searchString(O) || "other",
              version: this.searchVersion(h.userAgent) || this.searchVersion(h.appVersion) || "other",
              os: this.searchString(D) || "other",
              plugins: this.getPlugins()
            }
          }, U.prototype.getPlugins = function() {
            var e, t, i = [];
            for (e = 0, t = h.plugins.length; e < t; e++) h.plugins[e].name && i.push(h.plugins[e].name);
            return i
          }, U.prototype.searchString = function(e) {
            var t, i, n;
            for (t = 0; t < e.length; t++)
              if (i = e[t].string, n = RegExp(e[t].subString), this.versionSearchString = e[t].versionSearch || e[t].identity, n.test(i)) return e[t].identity
          }, U.prototype.searchVersion = function(e) {
            var t = e.indexOf(this.versionSearchString);
            if (-1 !== t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
          }, U.prototype.getMobileBrowser = function() {
            for (var e = !1, t = h.userAgent, i = Object.keys(z), n = 0; !e && n < i.length;) {
              for (var a = i[n], r = 0; r < z[a].length; r++)
                if (t.match(z[a][r])) {
                  e = a;
                  break
                } n++
            }
            return e
          }, U.prototype.getReferredSearchEngine = function() {
            var e, t, i = "";
            if (document.referrer && (t = this.getHostname(document.referrer)))
              for (e in t = t.toLowerCase(), W)
                if (0 <= t.indexOf(e)) {
                  queryString = this.getQuerystring(document.referrer, W[e]), "blekko" === e && "" === queryString && (queryString = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q")), i = e;
                  break
                } return i
          }, U.prototype.getQuerystring = function(e, t) {
            var i;
            return t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), null === (i = RegExp("[\\?&]" + t + "=([^&#]*)").exec(e)) || !L.isArray(i) || 2 > i.length ? null : i[1] ? unescape(i[1].replace(/\+/g, " ")) : null
          }, U.prototype.getHostname = function(e) {
            return null === (e = e.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im)) || !L.isArray(e) || 2 > e.length ? null : e[1] ? e[1].toString() : null
          }, U.prototype.hasHtmlAudio = function(e) {
            var t = document.createElement("audio");
            try {
              if (!t.canPlayType || "no" === t.canPlayType("audio/" + e) || "" === t.canPlayType("audio/" + e)) return !1
            } catch (e) {
              return !1
            }
            return !0
          }, p.browserData = new U;
          var V = function() {
            this.unloading = !1
          };
          V.prototype.logPerformance = function(e) {
            Y.xhrRequest("https://va.tawk.to/log-performance/v3", {
              logData: JSON.stringify(e)
            }, function() {})
          }, V.prototype.logIncident = function(e, t) {
            var i = a.getBrowserData();
            i.visitorId = _.visitorId || "", i.message = e, i.data = t, this.log("warning", i)
          }, V.prototype.log = function(e, t) {
            var i;
            t && e && (t.uiVersion = "v3", t.buildVersion = "679", t.buildCommit = "1c92a0ab1b2d24babba3377a900cd238b60e274c", i = {
              type: e,
              data: t
            }, this.postForm("log", JSON.stringify(i)))
          }, V.prototype.postForm = function(e, t) {
            var i, n, a;
            if (n = document.createElement("iframe"), !document.body) return !1;
            n.src = "about:blank", n.style.cssText = ";display:none !important;", n.title = "chat widget logging", document.body.appendChild(n);
            try {
              i = L.getDocument(n)
            } catch (e) {
              return !1
            }
            C && (i.open(), i.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><iframe name="form-receiver" id="form-receiver"></iframe></body></html>'), i.close()), (n = i.createElement("form")).method = "POST", n.action = "https://va.tawk.to/" + e, n.enctype = "application/x-www-form-urlencoded", n.acceptCharset = "UTF-8", (a = i.createElement("input")).type = "text", a.name = "logData", a.value = t, n.appendChild(a), C && (n.target = "form-receiver"), i.body.appendChild(n), n.submit(), n.parentNode.removeChild(n)
          }, c.onbeforeunload = function() {
            this.unloading = !0
          }, c.onunload = function() {
            this.unloading = !0
          };
          var q = function() {
            this.originalErrorHandlerFn = c.onerror
          };
          q.prototype.getBrowserData = function() {
            var e = p.browserData.getBrowserVersion();
            return {
              site: c.location.href,
              browser: e.vendor || "",
              version: e.version || "",
              os: e.os || "",
              plugins: e.plugins || ""
            }
          }, q.prototype.handleError = function(e, t, i, n, a) {
            var r;
            return !(!(t && i || "Script error." !== e && "Script error" !== e) || "string" != typeof t || -1 === t.indexOf("tawk.to") && -1 === t.indexOf("tawk.js")) && ((r = this.getBrowserData()).visitorId = _.visitorId || "", r.message = e || "", r.file = t || "", r.line = i || "", r.column = n || "", r.stack = a ? JSON.stringify(a) : "", r.stack = r.stack.replace(L.regLineBreaks, ""), p.loggingHandler.log("error", r), !0)
          }, a = new q, c.onerror = function() {
            var e;
            return !!a && (e = a.handleError.apply(this, arguments), "function" == typeof a.originalErrorHandlerFn ? a.originalErrorHandlerFn.apply(this, arguments) : e)
          };
          var j = function() {
            this.events = {}
          };
          j.prototype.attachEvent = function(e, t, i) {
            var n = this,
              a = function(t) {
                i.call(e, n.getEvent(t))
              };
            return e.attachEvent("on" + t, a), a
          }, j.prototype.listen = function(e, t, i, n) {
            var a;
            if (n) {
              if (this.events[n] && (a = this.events[n], this.events[n] = null, this.removeEventHandler(a.element, a.eventName, a.eventListener)), e.addEventListener) e.addEventListener(t, i, !1);
              else {
                if (!document.attachEvent) return null;
                i = this.attachEvent(e, t, i)
              }
              return this.events[n] = {
                element: e,
                eventName: t,
                eventListener: i
              }, i
            }
          }, j.prototype.cancelEvent = function(e) {
            document.attachEvent && (e = this.getEvent(e)), e.preventDefault ? e.preventDefault() : e.returnValue = !1
          }, j.prototype.removeEventHandler = function(e, t, i) {
            document.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i)
          }, j.prototype.getEvent = function(e) {
            var t = e || c.event;
            if (!t)
              for (e = this.getEvent.caller; e && (!(t = e.arguments[0]) || Event != t.constructor);) e = e.caller;
            return t
          }, j.prototype.clearEvents = function() {
            var e = this;
            Object.keys(this.events).forEach(function(t) {
              t = e.events[t], e.removeEventHandler(t.element, t.eventName, t.eventListener)
            }), this.events = {}
          }, j.prototype.getTargetElement = function(e) {
            return document.attachEvent && (e = this.getEvent(e)), 3 === (e = e.target || e.srcElement).nodeType && (e = e.parentNode), e
          };
          var G = {
              keypressTimer: 0,
              previousValue: 0,
              initElement: function(e, t) {
                var i = this;
                this.previousValue = "", p.eventHandler.listen(e, "focus", function(n) {
                  i.startWatching(n, e, t)
                }, e.id + "focus"), p.eventHandler.listen(e, "blur", function(e) {
                  i.stopWatching()
                }, e.id + "blur"), p.eventHandler.listen(e, "keyup", function(n) {
                  i.detectChange(n, e, t)
                }, e.id + "keyup")
              },
              startWatching: function(e, t, i) {
                var n = this;
                this.stopWatching(), this.keypressTimer = setInterval(function() {
                  n.detectChange(e, t, i)
                }, 100)
              },
              stopWatching: function() {
                0 != this.keypressTimer && (clearInterval(this.keypressTimer), this.keypressTimer = 0)
              },
              detectChange: function(e, t, i) {
                if (t = t.value || "", this.previousValue === t) return !1;
                i(e, t), this.previousValue = t
              }
            },
            X = function() {};
          X.prototype.xhrRequest = function(e, t, i) {
            var n = new XMLHttpRequest;
            return t = t || {}, n.onerror = i, n.open("POST", e, !0), n.withCredentials = !0, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
              n.passed || 4 !== n.readyState || (n.passed = !0, i(null, n.responseText))
            }, n.send(L.createQueryString(t)), {
              type: "xhr",
              req: n
            }
          }, X.prototype.abort = function(e) {
            e && "xhr" === e.type && e.req.abort()
          };
          var Y = new X,
            $ = function() {
              this.isCookieEnabled = this.checkCookieEnabled(), this.alphaNumericReg = /[^0-9a-zA-Z]/g, this.hasSessionStorage = this.isCookieEnabled && !!c.sessionStorage, this.checkLocalStorageUsage(), this.clearOldCookies("TawkCookie")
            };
          $.prototype.checkLocalStorageUsage = function() {
            try {
              localStorage.setItem("exist_test", "yes"), localStorage.removeItem("exist_test"), this.hasLocalStorage = !0
            } catch (e) {
              this.hasLocalStorage = !1
            }
          }, $.prototype.setHTTPCookie = function(e, t, i, n) {
            var a = "";
            i || ((i = new Date).setTime(i.getTime() + 15552e6), a = "; expires=" + i.toGMTString()), document.cookie = e + "=" + t + a + "; path=/" + (n ? ";domain=" + n : "")
          }, $.prototype.getHTTPCookie = function(e) {
            var t, i, n = [],
              a = e + "=",
              r = document.cookie.split(";");
            for (e = 0, t = r.length; e < t; e++) {
              for (i = r[e];
                " " === i.charAt(0);) i = i.substring(1, i.length);
              0 === i.indexOf(a) && n.push(i.substring(a.length, i.length))
            }
            return n
          }, $.prototype.setSessionStorage = function(e, t) {
            if (this.hasSessionStorage && sessionStorage.setItem) try {
              sessionStorage.setItem(e, t)
            } catch (e) {}
          }, $.prototype.getSessionStorage = function(e) {
            return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(e) : null
          }, $.prototype.setLocalStorage = function(e, t) {
            c.localStorage.setItem(e, t)
          }, $.prototype.getLocalStorage = function(e) {
            return c.localStorage.getItem(e)
          }, $.prototype.setWindowName = function(e) {
            c.name && 0 !== c.name.indexOf("TawkWindowName-") || (c.name = "TawkWindowName-" + e)
          }, $.prototype.getWindowName = function() {
            var e, t, i;
            if (!c.name) return null;
            if (0 !== c.name.indexOf("TawkWindowName-")) {
              if (6 > (t = (i = c.name.substring(0, 5)).length))
                for (e = 0, t = 6 - t; e < t; e++) i += "0";
              return i.replace(/[^0-9a-zA-Z]/g, "0").replace(" ", "0")
            }
            return c.name.substring(15, 21)
          }, $.prototype.handleWindowId = function() {
            var e = this.getSessionStorage("TawkWindowName");
            "null" === e && (e = null), e || this.hasSessionStorage || (e = this.getWindowName()), "null" === e && (e = null), e || (e = L.generateRandomString(), this.hasSessionStorage ? this.setSessionStorage("TawkWindowName", e) : this.setWindowName(e)), E = e
          }, $.prototype.storeUUID = function() {
            var e = this;
            B.transferedSession || _.uuids && 0 < _.uuids.length && _.uuids.forEach(function(t) {
              var i = (t.isExact ? "e::" : "p::") + t.domain + "::" + t.uuid + "::" + _.uuidVer;
              e.isCookieEnabled && e.setHTTPCookie("__tawkuuid", i, !1, t.domain)
            }), this.handleWindowId(), this.storeSessionInformation()
          }, $.prototype.getSessionInformation = function() {
            var e;
            return this.sessionInformation && (e = this.sessionInformation), this.hasLocalStorage && (e = this.getLocalStorage("twk_" + I.pageId)), e || (e = this.getHTTPCookie("Tawk_" + I.pageId)[0]), this.parseSessionInformation(e)
          }, $.prototype.storeSessionInformation = function(e, t) {
            var i, n = this.getSessionInformation();
            e && !B.visitorSocketServer || (e ? i = B.visitorSocketServer + "::" + p.viewHandler.indicator.unansweredMessages : (i = n[1] || 0, p.main.previousSessionKey !== B.sessionKey && (i = 0), i = B.visitorSocketServer + "::" + i), t ? i += "::cf" : 3 === n.length && (i += "::" + n[2]), this.hasLocalStorage ? (this.setLocalStorage("twk_" + I.pageId, i), this.clearOldCookies("Tawk_" + I.pageId)) : this.setHTTPCookie("Tawk_" + I.pageId, i, !1), this.sessionInformation = i)
          }, $.prototype.parseSessionInformation = function(e) {
            var t = [];
            return e && (1 >= (t = e.split("::")).length && (t = e.split("||"))), t
          }, $.prototype.clearOldCookies = function(e) {
            document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
          }, $.prototype.checkCookieEnabled = function() {
            var e = !!h.cookieEnabled;
            return void 0 !== h.cookieEnabled || e || (document.cookie = "testcookie", e = -1 != document.cookie.indexOf("testcookie")), e
          }, $.prototype.getStoredUUID = function() {
            var e;
            return this.isCookieEnabled && (e = this.getHTTPCookie("__tawkuuid")), e && 0 < e.length ? e : []
          };
          var K = new $,
            Q = function(e) {
              var t;
              "symbian" === T ? this.play = function() {} : ("safari" === T ? ((t = document.createElement("audio")).src = e, t.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(t)) : t = new Audio(e), t.addEventListener("timeupdate", function() {
                .2 <= t.currentTime && t.pause()
              }, !1), t.load(), this.soundEl = t, this.play = function() {
                try {
                  t.currentTime = 0, t.autoplay = !0, t.load(), t.play()
                } catch (e) {}
              })
            },
            J = function(e, t, i) {
              this.sourcePath = e, this.buffer = null, this.name = t, this.audioPlayer = i, this.source = null, this.volume = 1, this.play = function() {
                if (this.buffer) {
                  var e = this.audioPlayer.audioContext.createGain();
                  e.gain.value = this.volume, this.source = this.audioPlayer.audioContext.createBufferSource(), this.source.buffer = this.buffer, this.source.connect(e), e.connect(this.audioPlayer.audioContext.destination), this.source.start(0)
                }
              }, this.loadBuffer = function() {
                var e = new XMLHttpRequest,
                  t = this;
                e.open("GET", t.sourcePath, !0), e.responseType = "arraybuffer", e.onload = function() {
                  t.audioPlayer.audioContext.decodeAudioData(e.response, function(e) {
                    e && (t.buffer = e, t.audioPlayer.isReadyForInit || (t.audioPlayer.eventUsedForInit = t.name, t.audioPlayer.isReadyForInit = !0))
                  }, function(e) {
                    throw Error(e)
                  })
                }, e.onerror = function(e) {
                  throw Error("BufferLoader: XHR error for " + t.sourcePath)
                }, e.send()
              }, this.loadBuffer()
            },
            Z = function() {
              this.sounds = {}, this.audioContext = null, this.isReadyForInit = !1, this.eventUsedForInit = null
            };
          Z.prototype.initAudioPlayer = function() {
            var e, t, i, n = {},
              a = this;
            if (k.supported) {
              for (e in this.audioContext || /Firefox/.test(h.userAgent) || "undefined" == typeof AudioBuffer || void 0 === c.AudioContext && void 0 === c.webkitAudioContext || (c.AudioContext = c.AudioContext || c.webkitAudioContext, this.audioContext = new c.AudioContext), k.mp3 ? n = P : k.wav ? n = M : k.ogg && (n = N), n) this.sounds[e] = this.audioContext ? new J(n[e], e, this) : new Q(n[e]);
              this.audioContext && (i = function() {
                a.isReadyForInit && a.eventUsedForInit && !a.touchstartInited && (a.sounds[a.eventUsedForInit].volume = 0, a.sounds[a.eventUsedForInit].play(), a.sounds[a.eventUsedForInit].source.stop(0), a.sounds[a.eventUsedForInit].volume = 1, c && "function" == typeof c.removeEventListener && c.removeEventListener("touchstart", i, !1), t && "function" == typeof t.removeEventListener && t.removeEventListener("touchstart", i, !1), a.touchstartInited = !0)
              }, T && "ontouchstart" in c && (e = p.viewHandler.chatContainer.elementReferrer, H.isPopup || (t = e.contentWindow ? e.contentWindow : e.contentDocument.defaultView), t ? t.addEventListener("touchstart", i, !1) : e.addEventListener("touchstart", i, !1), c.addEventListener("touchstart", i, !1)))
            }
          }, Z.prototype.play = function(e) {
            l.disableSound || H.soundOn() && this.sounds[e] && this.sounds[e].play()
          };
          var ee = function() {
            var e = this;
            this.uploads = {}, p.eventEmitter.on("fileUploadProgress", function(e) {
              p.viewHandler.updateFileProgress(e)
            }), p.eventEmitter.on("fileUploadFinished", function(t) {
              e.uploads[t.handle] && (delete e.uploads[t.handle], p.viewHandler.fileUploaded(t.handle), p.chatHandler.sendFileMessage(t))
            }), p.eventEmitter.on("fileUploadError", function(t) {
              var i = e.uploads[t.handle];
              i && p.viewHandler.handleUploadError(null, i, t.handle)
            })
          };
          ee.prototype.getUploadHandler = function(e) {
            var t = "https://upload.tawk.to/upload/handle?_t=" + (new Date).getTime(),
              i = new XMLHttpRequest;
            i.onreadystatechange = function() {
              4 === this.readyState && (200 <= this.status && 400 > this.status ? e(JSON.parse(this.responseText)) : e(!0))
            }, i.open("GET", t), i.onerror = function() {
              e(!0)
            }, i.send(), i = null
          }, ee.prototype.uploadFile = function(e, t, i, n) {
            var a = "https://upload.tawk.to/upload/visitor-chat/visitor?handle=" + e + "&visitorSessionId=" + B.sessionKey;
            if (this.uploads[e] = i, 52428800 < t.size) return n(!0, "limit50");
            (e = new FormData).append("upload", t, t.name || t.filename), (t = new XMLHttpRequest).open("POST", a), t.onload = function() {
              return n(JSON.parse(this.responseText))
            }, t.onerror = function() {
              return n(!0)
            }, t.send(e)
          };
          var te, ie, ne, ae, re = 0,
            oe = function() {
              var e;
              clearTimeout(ne), H.isPopup ? e = c : (e = T && H.isPopup ? p.viewHandler.chatContainer.elementId : i.container.elementId, e = (e = document.getElementById(e)).contentWindow || e.contentDocument || e), void 0 === e.emojione ? 20 === ++re ? (clearTimeout(ne), re = 0) : ne = setTimeout(function() {
                oe()
              }, 20) : (clearTimeout(ne), re = 0, (ie = e.emojione).ascii = !0, ae = ie.shortnames.replace(/\\\+/g, "+").split("|"))
            },
            se = function(e) {
              var t, i = "",
                n = m["emoji-selection"],
                a = m["emoji-tab-select"];
              te && te === e ? L.addClass(e, "showWithFade") : (L.addClass(e, "showWithFade"), void 0 === ie ? 20 === re ? e.innerHTML = p.languageParser.translate("chat", "emoji_error_load") : (0 === re && oe(), setTimeout(function() {
                se(e)
              }, 20)) : (clearTimeout(ne), te = e, setTimeout(function() {
                Object.keys(null).forEach(function(e) {
                  i += a.replace(/__ID__/, e).replace(/__IMAGE__/, ie.shortnameToImage(null[e].header)).replace(/__IS_ACTIVE__/, "")
                }), n = n.replace(/__TAB_LIST__/, i), e.innerHTML = n, t = L.getElementsByClassName(e, "open-tab"), le(e, {
                  target: t[0]
                });
                for (var r = 0; r < t.length; r++) p.eventHandler.listen(t[r], p.viewHandler.clickEvent, function(t) {
                  t.stopPropagation(), le(e, t)
                }, t[r].id + "OpenTab")
              })))
            },
            le = function(e, t) {
              var n, a, r, o = "",
                s = m["emoji-tab-pane"],
                l = m["emoji-list"];
              if (a = L.getElementsByClassName(e, "open-tab"), r = "max" !== B.chatWindowState() && p.viewHandler.messagePreview ? p.viewHandler.messagePreview.container.getElementById("tab-content") : T && H.isPopup ? p.viewHandler.chatContainer.getElementById("tab-content") : i.container.getElementById("tab-content")) {
                n = (n = "open-tab" === t.target.className ? t.target : t.target.offsetParent).id;
                for (var c = 0; c < a.length; c++) a[c].className = a[c].id === n ? "open-tab active" : "open-tab";
                "search" === n ? (r.innerHTML = m["emoji-search-pane"], r = T && H.isPopup ? p.viewHandler.chatContainer.getElementById("search-emoji") : i.container.getElementById("search-emoji"), p.eventHandler.listen(r, "keyup", function(e) {
                  var t = p.eventHandler.getTargetElement(e).value.trim().toLowerCase(),
                    n = m["emoji-list"],
                    a = "";
                  if ((e = T && H.isPopup ? p.viewHandler.chatContainer.getElementById("search-list") : i.container.getElementById("search-list")) && ae) {
                    if (t)
                      for (var r = 0; r < ae.length; r++) {
                        var o = ae[r]; - 1 !== o.indexOf(t) && (a += n.replace(/__IMAGE__/, ie.shortnameToImage(o)).replace(/__SHORTNAME__/g, o))
                      }
                    e.innerHTML = a, ce()
                  }
                }, "searchEmojiKeyup")) : (a = null[n]) && (a.content.forEach(function(e) {
                  o += l.replace(/__IMAGE__/, ie.shortnameToImage(e)).replace(/__SHORTNAME__/g, e)
                }), r.innerHTML = s.replace(/__EMOJIS__/, o).replace(/__ID__/, "people"), ce())
              }
            },
            ce = function() {
              for (var e = L.getElementsByClassName(te, "emoji-select"), t = 0; t < e.length; t++) p.eventHandler.listen(e[t], p.viewHandler.clickEvent, function(e) {
                e = p.eventHandler.getTargetElement(e), e = ie.shortnameToUnicode(e.title), T && H.isPopup ? p.viewHandler.addEmojiToInput(e) : "max" === B.chatWindowState() || H.isPopup ? i.addEmojiToInput(e) : p.viewHandler.messagePreview && p.viewHandler.messagePreview.addEmojiToInput(e)
              }, e[t].id + "SelectEmoji")
            },
            de = function() {
              this.chatWindowStates = {
                min: !0,
                max: !0
              }, this.selfOrigin = this.socket = null, this.forceDisconnected = this.banned = this.ready = this.disconnect = !1, this.clearRegisterRetryTimeout = null
            };
          (de.prototype = new EventEmitter).init = function() {
            var e, i = this,
              n = (new Date).getTime();
            this.forceDisconnected = this.disconnect = t.connected = !1, this.removeAllListeners(), this.socket && (this.socket.removeAllListeners(), this.socket.disconnect()), null === E && K.handleWindowId(), null !== E && "null" !== E || p.loggingHandler.logIncident("windowId is null", {
              windowId: E,
              type: typeof E
            }), (e = {
              k: B.sessionKey,
              u: _.uuid,
              uv: _.uuidVer,
              a: I.pageId,
              cver: R.chatVersion,
              pop: H.isPopup,
              w: E,
              jv: B.currentVersion,
              asver: B.pageStatusVersion,
              ust: $_Tawk_Unstable,
              p: H.isPopup ? I.pageName() : document.title,
              r: document.referrer
            }).p && 255 < e.p.length && (e.p = e.p.substring(0, 255)), this.socket = new $__TawkSocket("wss://" + B.visitorSocketServer + "/", {
              engineIo: $__TawkEngine,
              path: "/s",
              query: e
            }), this.socket.on("disconnect", function() {
              i.disconnectHandler()
            }), this.socket.on("error", function(e) {
              var t, n = "socket on error";
              if (e instanceof Error) {
                if (t = {
                    toString: e.toString(),
                    stack: e.stack,
                    lineNumber: e.lineNumber,
                    fileName: e.fileName
                  }, p.loggingHandler.unloading && -1 === t.toString.indexOf("post")) return;
                "TransportError" === e.type && (t.description = e.description), -1 !== t.toString.indexOf("post") && (n = "socket post error")
              } else t = e;
              p.loggingHandler.logIncident(n, t), i.socket.disconnect(), i.disconnectHandler()
            }), this.socket.on("connect", function() {
              i.disconnect = !1
            }), this.socket.on("ready", function(e, o, s) {
              if (!p) return i.disconnectSocket();
              i.selfOrigin = e, t.connected = !0, i.ready || (t.loaded = !0, "undefined" != typeof $_Tawk_LoadStart && p.loggingHandler.logPerformance({
                socket: (new Date).getTime() - n,
                register: r.registerTime,
                widget: (new Date).getTime() - $_Tawk_LoadStart,
                script: (new Date).getTime() - d,
                download: d - $_Tawk_LoadStart
              })), i.ready = !0;
              try {
                p.eventEmitter.emit("syncConversation", o)
              } catch (e) {
                a.handleError("Unable to emit syncConversation", e.fileName, e.lineNumber, e.stack)
              }
              try {
                p.eventEmitter.emit("pageStatusUpdated", s)
              } catch (e) {
                a.handleError("Unable to emit pageStatusUpdated", e.fileName, e.lineNumber, e.stack)
              }
              try {
                p.eventEmitter.emit("socketReady")
              } catch (e) {
                a.handleError("Unable to emit socketReady", e.fileName, e.lineNumber, e.stack)
              }
              clearTimeout(i.clearRegisterRetryTimeout), i.clearRegisterRetryTimeout = setTimeout(function() {
                i.disconnect || r.resetRetryCount(), i.clearRegisterRetryTimeout = null
              }, 5e3)
            }), this.socket.on("remoteDisconnect", function(e) {
              if ("BANNED" === (e = e || {}).msg) {
                i.banned = !0;
                try {
                  i.socket.disconnect()
                } catch (e) {
                  a.handleError("Unable to emit disconnect socket on ban", e.fileName, e.lineNumber, e.stack)
                }
                p.main.hideWidget()
              } else i.socket.disconnect(), i.disconnectHandler()
            }), this.addEventListeners()
          }, de.prototype.addEventListeners = function() {
            function e(e, t) {
              try {
                p.eventEmitter.emit(e, t)
              } catch (i) {
                a.handleError("Unable to emit socket event : " + e + " with data : " + JSON.stringify(t), i.fileName, i.lineNumber, i.stack)
              }
            }
            var t = this;
            this.socket.on("visitorChatWindowState", function(i) {
              t.selfOrigin !== i.origin && e("windowStateUpdated", i)
            }), this.socket.on("visitorDataUpdate", function(i) {
              t.selfOrigin !== i.origin && e("visitorDataUpdate", i)
            }), this.socket.on("visitorSound", function(e) {
              e.origin !== t.selfOrigin && p.chatHandler.toggleSound(!!e.sdo)
            }), this.socket.on("visitorMessage", function(i) {
              t.selfOrigin !== i.origin && e("incomingMessage", i)
            }), this.socket.on("visitorConversationPresenceUpdate", function(t) {
              e("incomingMessage", t)
            }), this.socket.on("pageStatus", function(t) {
              e("pageStatusUpdated", t)
            }), this.socket.on("newCriticalUpdate", function(e) {
              (e = e || 0) != B.criticalVersion && p.main.criticalRefresh(e, !0)
            }), this.socket.on("newUnstableCriticalUpdate", function(e) {
              e = e || 0, $_Tawk_Unstable && e != B.criticalVersion && p.main.criticalRefresh(e, !0)
            }), this.socket.on("visitorPopupFocus", function(t) {
              e("visitorPopupFocus", !!(t = t || {}).hasFocus)
            }), this.socket.on("chatBubbleClosed", function(i) {
              i.origin !== t.selfOrigin && e("chatBubbleClosed", !0)
            }), this.socket.on("agentIsTyping", function(t) {
              e("agentIsTyping", t)
            }), this.socket.on("agentStopedTyping", function(t) {
              e("agentStopedTyping", t)
            }), this.socket.on("pageDisable", function() {
              e("removeWidget")
            }), this.socket.on("widgetScheduleUpdate", function(t) {
              e("scheduleUpdate", t)
            }), this.socket.on("uploadProgress", function(t) {
              e("fileUploadProgress", t)
            }), this.socket.on("uploadFinished", function(t) {
              e("fileUploadFinished", t)
            }), this.socket.on("uploadError", function(t) {
              e("fileUploadError", t)
            }), this.socket.on("vCallStatus", function(t) {
              e("webrtcCallStatus", t)
            }), this.socket.on("visitorChatSeen", function(t) {
              e("visitorChatSeen", t)
            }), this.socket.on("visitorChatDismiss", function(t) {
              e("visitorChatDismiss", t)
            }), this.socket.on("visitorTagsUpdate", function(t) {
              e("visitorTagsUpdate", t)
            }), this.on("notifyWindowState", function(e) {
              t.chatWindowStates[e] && t.socket.send("chatWindowState", e)
            }), this.on("notifyChatBubbleClosed", function() {
              t.socket.send("chatBubbleClose")
            }), this.on("notifyMessagePreview", function(e) {
              t.socket.send("messagePreview", e, (new Date).getTime())
            }), this.on("sendChatMessage", function(e, i) {
              t.socket.send("chatMessage", e, i)
            }), this.on("notifyNameChange", function(e, i) {
              t.socket.send("saveNameChangeForm", e, i)
            }), this.on("notifyEmailTranscript", function(e, i) {
              t.socket.send("saveTranscriptEmailForm", e, i)
            }), this.on("notifyEndChatTranscript", function(e, i) {
              t.socket.send("sendTranscript", e, i)
            }), this.on("notifyOfflineMessage", function(e, i) {
              t.socket.send("service", "visitor-chat", "/v1/visitor/offline-form", e, i)
            }), this.on("visitorChatSeen", function(e, t) {
              this.socket.send("service", "visitor-chat", "/v1/visitor/messages-seen", e, t)
            }), this.on("visitorChatDismiss", function(e, t) {
              this.socket.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", e, t)
            }), this.on("notifyPrechat", function(e, i) {
              t.socket.send("savePrechatForm", e, i)
            }), this.on("setRating", function(e) {
              t.socket.send("visitorRating", e)
            }), this.on("toggleSound", function(e) {
              t.socket.send("visitorSound", e)
            }), this.on("notifyWidgetResized", function() {
              t.socket.send("chatWindowResize")
            }), this.on("popupOnFocus", function(e) {
              t.socket.send("visitorPopupFocus", e)
            }), this.on("notifySocketStatusUpdate", function(e) {
              t.socket.send("socketStatusUpdate", e)
            }), this.on("saveForeignKey", function(e, i) {
              t.socket.send("saveForeignKey", e, i)
            }), this.on("saveConversion", function(e, i) {
              t.socket.send("saveConversion", e, i)
            }), this.on("submitMultipleOptions", function(e, i) {
              t.socket.send("saveMultipleOptions", e, i)
            }), this.on("endVisitorChat", function(e, i) {
              t.socket.send("endChat", i)
            }), this.on("fileUploadMessage", function(e, i) {
              t.socket.send("fileUploadMessage", e, i)
            }), this.on("addEvent", function(e, i) {
              t.socket.send("addEvent", e, i)
            }), this.on("setAttributes", function(e, i) {
              t.socket.send("setAttributes", e, i)
            }), this.on("addTags", function(e, i) {
              t.socket.send("addTags", e, i)
            }), this.on("removeTags", function(e, i) {
              t.socket.send("removeTags", e, i)
            }), this.on("getWebRTCToken", function(e, t) {
              this.socket.send("service", "webrtc", "/v1/vcall/init/visitor", e, t)
            }), this.on("getCallStatus", function(e, t) {
              this.socket.send("service", "webrtc", "/v1/vcall/status/visitor", e, t)
            }), this.on("declineCall", function(e, t) {
              this.socket.send("service", "webrtc", "/v1/vcall/reject/visitor", e, t)
            })
          }, de.prototype.disconnectSocket = function() {
            this.forceDisconnected = !0, this.socket && (this.socket.disconnect(), this.disconnectHandler())
          }, de.prototype.disconnectHandler = function() {
            t.connected = !1, this.socket.removeAllListeners(), this.removeAllListeners(), p.scheduler.cleanUp(), this.banned || this.forceDisconnected || this.disconnect || (this.disconnect = !0, r.retryRegister())
          };
          var he = function(e, t, i, n, a) {
            var r = this;
            this.elementId = e || "", this.style = t || "", this.tagName = n || "div", this.childViews = [], this.template = e && m[e] ? m[e] : "", this.elementReferrer = null, this.documentRef = a || document, this.attributes = {}, this.isVisible = !1, this.classNames = [], "iframe" === n && (this.isIframe = !0), this.elementId && (this.attributes.id = this.elementId), i && Object.keys(i).forEach(function(e) {
              r.attributes[e] = i[e]
            })
          };
          he.prototype.addChildViews = function(e) {
            var t = this;
            e.forEach(function(e) {
              t.childViews.push(e)
            })
          }, he.prototype.buildView = function(e) {
            return this.documentRef = e || this.documentRef, this.elementReferrer = L.createElement(this.documentRef, this.tagName, this.attributes, this.style, this.template), this.elementReferrer.className += this.classNames.join(" "), this.isIframe || this.buildChildViews(), this.elementReferrer
          }, he.prototype.buildChildViews = function(e) {
            var t = this;
            this.childViews.length && (this.documentRef = e || this.documentRef, this.childViews.forEach(function(e) {
              t.elementReferrer.appendChild(e.buildView(t.documentRef))
            }))
          }, he.prototype.restyle = function(e, t) {
            t && (-1 === t.indexOf("!important") && (t += " !important"), this.elementReferrer ? this.elementReferrer.style.cssText += ";" + e + ":" + t : this.style += ";" + e + ":" + t)
          }, he.prototype.attachUserEventListener = function(e, t, i, n) {
            var a;
            (a = i ? this.getElementById(i) : this.elementReferrer) && (1 < (i = e.split(" ")).length ? i.forEach(function(e) {
              p.eventHandler.listen(a, e, t, e + n)
            }) : p.eventHandler.listen(a, e, t, n))
          }, he.prototype.toggle = function() {
            this.isVisible ? (this.restyle("display", "none !important"), this.isVisible = !1) : (this.restyle("display", "block !important"), this.isVisible = !0)
          }, he.prototype.getElementById = function(e) {
            return this.elementReferrer ? this.documentRef.getElementById(e) : null
          }, he.prototype.insertHtml = function(e) {
            this.elementReferrer.innerHTML = e
          }, he.prototype.clear = function() {
            this.elementReferrer && (this.elementReferrer.outerHTML = "", this.elementReferrer = null)
          }, he.prototype.addClass = function(e) {
            -1 === this.classNames.indexOf(e) && (this.classNames.push(e), this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" ")))
          }, he.prototype.removeClass = function(e) {
            for (; - 1 !== this.classNames.indexOf(e);) this.classNames.splice(this.classNames.indexOf(e), 1);
            this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
          }, he.prototype.hide = function() {
            this.restyle("display", "none !important"), this.isVisible = !1
          }, he.prototype.show = function() {
            this.restyle("display", "block !important"), this.isVisible = !0
          }, he.prototype.insertCssFile = function(e, t) {
            var i = this.documentRef.getElementsByTagName("head")[0],
              n = this.documentRef.createDocumentFragment(),
              a = L.createElement(this.documentRef, "style", {
                type: "text/css"
              }),
              r = this.documentRef.createTextNode(t ? e : p.ResetStyle + "" + e);
            n.appendChild(a), i.appendChild(n), a.styleSheet ? a.styleSheet.cssText = r.nodeValue : a.appendChild(r)
          }, he.prototype.massRestyle = function(e) {
            for (var t in e) e.hasOwnProperty(t) && this.restyle(t, e[t])
          };
          var pe = function() {
            he.apply(this, arguments)
          };
          (pe.prototype = new he).constructor = pe, pe.prototype.parent = he.prototype, pe.prototype.buildIframe = function(e, t) {
            this.documentRef = L.getDocument(this.elementReferrer), this.documentRef.open(), this.documentRef.writeln('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head><body></body></html>'), this.documentRef.close(), t || this.insertCssFile(e), this.insertContent(), this.buildChildViews()
          }, pe.prototype.insertContent = function() {
            this.documentRef.body.innerHTML = this.template
          }, pe.prototype.buildChildViews = function() {
            var e = this;
            this.childViews.forEach(function(t) {
              e.documentRef.body.appendChild(t.buildView(e.documentRef))
            })
          };
          var me = function(e) {
            this.template = (this.elementId = (this.formData = e) ? e.id : null) && m[this.elementId] ? m[this.elementId] : "", this.elementReferrer = null, this.documentRef = document, this.attributes = {
              className: "form"
            }, this.elementId && (this.attributes.id = this.elementId)
          };
          me.prototype.buildForm = function() {
            this.formData.additionalFields = [], this.insertTranslatedTexts()
          }, me.prototype.buildView = function(e) {
            return this.documentRef = e || this.documentRef, this.elementReferrer = L.createElement(this.documentRef, "div", this.attributes, null, this.template)
          }, me.prototype.addPlaceholderText = function(e, t, i, n, a) {
            a = RegExp("__" + e.toUpperCase() + "_PLACEHOLDER__", "gm"), e.toUpperCase(), e = RegExp("__" + e.toUpperCase() + "__", "gm");
            var r = p.languageParser.translate("form", i + "Placeholder");
            if (S || t || (t = r), r && r !== i + "Placeholder" || (r = t, t = ""), n) return L.escapeTemplateReplacement(n, [{
              placeholder: a,
              textReplace: r
            }, {
              placeholder: e,
              textReplace: t
            }]);
            this.template = L.escapeTemplateReplacement(this.template, [{
              placeholder: a,
              textReplace: r
            }, {
              placeholder: e,
              textReplace: t
            }])
          }, me.prototype.addPlaceholderHandler = function() {
            var e, t = this;
            S || (e = this.formData.fields) && e.forEach(function(e) {
              var i, n, a;
              "input" !== e.type || e.isEnabled && !e.isEnabled() || (a = e.getValue ? e.getValue() : "", "input" === e.type && L.isArray(a) ? a.forEach(function(a, r) {
                i = t.documentRef.getElementById(e.fieldName + r), n = a, L.togglePlaceholderText(i, n, e.fieldName + r), "textarea" !== i.tagName.toLowerCase() || L.trim(i.value) || (i.value = n)
              }) : e.hiddenIE8 || (i = t.documentRef.getElementById(e.fieldName + "Field"), n = p.languageParser.translate("form", e.languageKey + "Placeholder"), L.togglePlaceholderText(i, n, e.fieldName + "Field"), "textarea" !== i.tagName.toLowerCase() || L.trim(i.value) || (i.value = n)))
            })
          }, me.prototype.insertTranslatedTexts = function() {
            var e = this,
              t = "";
            (this.formData.fields || []).forEach(function(t) {
              var i;
              i = t.getValue ? t.getValue() : "", e.addPlaceholderText(t.fieldName, i, t.languageKey, null, t.labelText)
            }), this.template = L.escapeTemplateReplacement(this.template, [{
              placeholder: "__TITLE__",
              textReplace: this.formData.getTitle ? this.formData.getTitle() : p.languageParser.translate("form", this.formData.title)
            }, {
              placeholder: "__OVERLAY__",
              textReplace: p.languageParser.translate("overlay", this.formData.overlayMessage)
            }, {
              placeholder: "__CANCEL_BUTTON__",
              textReplace: p.languageParser.translate("form", "CancelButton")
            }, {
              placeholder: "__CLOSE_BUTTON__",
              textReplace: p.languageParser.translate("form", "CloseButton")
            }, {
              placeholder: "__SAVE_BUTTON__",
              textReplace: p.languageParser.translate("form", "SaveButton")
            }, {
              placeholder: "__SEND_BUTTON__",
              textReplace: p.languageParser.translate("form", "SendButton")
            }, {
              placeholder: "__SUBMIT_BUTTON__",
              textReplace: p.languageParser.translate("form", "SubmitButton")
            }, {
              placeholder: "__START_CHAT_BUTTON__",
              textReplace: p.languageParser.translate("form", "StartChatButton")
            }, {
              placeholder: "__END_CHAT_BUTTON__",
              textReplace: p.languageParser.translate("rollover", "end")
            }, {
              placeholder: "__SUBMITTING_INDICATOR__",
              textReplace: p.languageParser.translate("form", "SubmittingProcess")
            }, {
              placeholder: "__ENDING_INDICATOR__",
              textReplace: p.languageParser.translate("form", "EndingProcess")
            }, {
              placeholder: "__SENDING_INDICATOR__",
              textReplace: p.languageParser.translate("form", "SendingProcess")
            }, {
              placeholder: "__SAVING_INDICATOR__",
              textReplace: p.languageParser.translate("form", "SavingProcess")
            }, {
              placeholder: "__EMAIL_TRANSCRIPT_TO__",
              textReplace: p.languageParser.translate("form", "EmailTranscriptTo")
            }, {
              placeholder: "__OFFLINE_MESSAGE_SUCCESSFULY_SENT__",
              textReplace: p.languageParser.translate("form", "OfflineMessageSent")
            }, {
              placeholder: "__SEND_AGAIN__",
              textReplace: p.languageParser.translate("form", "sendAgain")
            }, {
              placeholder: /__STATUS__/gm,
              textReplace: p.languageParser.translate("form", "saving")
            }, {
              placeholder: "__CHANGE_NAME__",
              textReplace: p.languageParser.translate("menu", "change_name")
            }, {
              placeholder: /__SAFARI__/gm,
              textReplace: "safari" === w ? "safari-fix" : ""
            }, {
              placeholder: /__SKIP_BUTTON__/,
              textReplace: p.languageParser.translate("chat", "skip")
            }, {
              placeholder: "__START_CHAT__",
              textReplace: p.languageParser.translate("chat", "newChat")
            }, {
              placeholder: "__EMAIL_TRANCRIPT__",
              textReplace: p.languageParser.translate("rollover", "emailTranscriptOption")
            }, {
              placeholder: "__END_CHAT_MESSAGE__",
              textReplace: p.languageParser.translate("form", "EndChatMessage")
            }]), this.template = "safari" === w || "chrome" === w || "firefox" === w || "mozilla" === w || C && 8 <= b ? this.template.replace("__NON_MODERN__", "") : this.template.replace("__NON_MODERN__", "other-fix"), T && (t = L.escapeTemplateReplacement(m["close-form-button"], [{
              placeholder: "__CLOSE_BUTTON__",
              textReplace: p.languageParser.translate("form", "CloseButton")
            }])), this.template = L.escapeTemplateReplacement(this.template, [{
              placeholder: "__CLOSE_BUTTON_CONTAINER__",
              textReplace: t
            }]), this.formData.customButtons && (this.template = L.escapeTemplateReplacement(this.template, this.formData.customButtons()))
          };
          var ue = function(e, t) {
            me.apply(this, [e]), this.formName = t, this.isFormRequired = !1
          };
          (ue.prototype = new me).constructor = ue, ue.prototype.parent = me.prototype, ue.prototype.buildForm = function() {
            var e, t = [];
            if (e = "preChatForm" == this.formName ? "prechat" : "offline", this.formData.additionalFields = [], this.insertTranslatedTexts(), null === this.formData.dynamicFields) {
              for (var i = 0, n = H[e + "Options"].fields.length; i < n; i++) {
                var a = {},
                  r = H[e + "Options"].fields[i];
                r.id = e + i, a.label = r.label, a.instantValidation = !1, a.isRequired = r.isRequired, a.fieldName = e + i, a.fieldType = r.type, a.validation = "isValidString", "name" === r.type ? (a.valueMaxLength = 40, a.getValue = p.visitorHandler.getNameValue, a.languageKey = "Name") : "email" === r.type ? (a.valueMaxLength = 150, a.getValue = p.visitorHandler.getEmailValue, a.validation = "isValidEmail", a.languageKey = "Email") : "message" === r.type || "textArea" === r.type ? a.valueMaxLength = 500 : "inputText" === r.type ? a.valueMaxLength = 150 : "department" === r.type ? a.getValue = p.sessionHandler.getDeparmentOptions : "choice" === r.type || "option" === r.type ? (a.type = "options", a.selections = r.selections) : "phone" === r.type && (a.valueMaxLength = 20, a.validation = "isValidPhone", a.languageKey = "Phone"), a.isRequired && !a.languageKey && (a.languageKey = "Required"), t.push(a)
              }
              this.formData.dynamicFields = t
            }
            this.generateDynamicFields()
          }, ue.prototype.generateDynamicFields = function() {
            for (var e = "", t = RegExp("__LABEL__", "gm"), i = RegExp("__ID__", "gm"), n = RegExp("__MAXLENGTH__", "gm"), a = 0, r = this.formData.dynamicFields.length; a < r; a++) {
              var o, s = "",
                l = this.formData.dynamicFields[a];
              "name" === l.fieldType || "email" === l.fieldType || "phone" === l.fieldType || "inputText" === l.fieldType ? (o = m.inputTextFieldType, o = "email" === l.fieldType ? o.replace("__INPUT_TYPE__", "email") : o.replace("__INPUT_TYPE__", "text")) : "message" === l.fieldType || "textArea" === l.fieldType ? o = m.textAreaFieldType : "department" === l.fieldType ? o = m.departmentSelection : "choice" !== l.fieldType && "option" !== l.fieldType || (o = m.selectionsType, s = "choice" === l.fieldType ? this.generateCheckboxOptions(l.fieldName, l.selections) : this.generateRadioOptions(l.fieldName, l.selections)), o && (o = (o = (o = o.replace(t, l.label || "")).replace(i, l.fieldName || "")).replace(n, l.valueMaxLength || ""), l.isRequired ? (o = o.replace(/__REQUIRED__/gm, "*"), this.isFormRequired || (this.isFormRequired = !0)) : o = o.replace(/__REQUIRED__/gm, ""), l.getValue && ("department" === l.fieldType ? (s = this.generateDropDownOptions(l.getValue(), l.isRequired, l.label)) || (o = "") : s = l.getValue()), e += o = o.replace("__VALUE__", s))
            }
            this.template = this.template.replace("__FIELDS__", e)
          }, ue.prototype.generateDropDownOptions = function(e, t, i) {
            var n = "";
            if (0 === e.length) return !1;
            for ("preChatForm" === this.formData.id ? n += '<option id="department-default" value="" disabled selected>' + (t ? "* " : "") + (i || p.languageParser.translate("form", "department")) + "</option>" : t || (n += '<option value="0"></option>'), t = 0, i = e.length; t < i; t++) n += '<option value="' + e[t].value + '"' + (e[t].selected ? 'selected="selected"' : "") + ">" + e[t].text + "</option>";
            return n
          }, ue.prototype.generateRadioOptions = function(e, t) {
            for (var i = "", n = m.radioSelectionType, a = 0, r = t.length; a < r; a++) i += n.replace(/__ID__/gm, e + "radio" + a).replace(/__FIELD_ID__/gm, e).replace(/__VALUE__/gm, t[a]);
            return i
          }, ue.prototype.generateCheckboxOptions = function(e, t) {
            for (var i = "", n = m.checkboxSelectionType, a = 0, r = t.length; a < r; a++) i += n.replace(/__ID__/gm, e + "check" + a).replace(/__FIELD_ID__/gm, e).replace(/__VALUE__/gm, t[a]);
            return i
          }, ue.prototype.updateName = function(e) {
            for (var t, i = 0, n = this.formData.dynamicFields.length; i < n; i++) {
              var a = this.formData.dynamicFields[i];
              if ("name" === a.fieldType) {
                t = p.viewHandler.chatContainer.getElementById(a.fieldName + "Field");
                break
              }
            }
            t && (t.value = e)
          }, ue.prototype.updateEmail = function(e) {
            for (var t, i = 0, n = this.formData.dynamicFields.length; i < n; i++) {
              var a = this.formData.dynamicFields[i];
              if ("email" === a.fieldType) {
                t = p.viewHandler.chatContainer.getElementById(a.fieldName + "Field");
                break
              }
            }
            t && (t.value = e)
          }, ue.prototype.addPlaceholderHandler = function() {
            var e, t;
            if (!S)
              for (var i = 0, n = this.formData.dynamicFields.length; i < n; i++) "department" !== (t = this.formData.dynamicFields[i]).fieldType && "choice" !== t.fieldType && "option" !== t.fieldType && (this.formData.dynamicFields[i].placeholderText = (t.isRequired ? "* " : "") + t.label, e = this.documentRef.getElementById(t.fieldName + "Field"), L.togglePlaceholderText(e, this.formData.dynamicFields[i].placeholderText, t.fieldName + "Field"), L.trim(e.value) || (e.value = this.formData.dynamicFields[i].placeholderText))
          };
          var ge = function(e) {
            var t = this;
            this.container = e, this.unansweredMessages = 0, p.eventEmitter.on("visitorPopupFocus", function(e) {
              t.isPopupFocused = e, t.hide()
            }), B.chatWindowState.subscribe(function(e) {
              "max" === e && t.hide()
            }), this.originalPageTitle = document.title, this.pageTitleNotification = {
              interval: null,
              on: function() {
                !this.interval && H.showUnreadInTab() && (this.interval = setInterval(function() {
                  document.title = t.originalPageTitle === document.title ? p.languageParser.translate("chat", "newMessage", {
                    num: t.unansweredMessages
                  }) : t.originalPageTitle
                }, 1e3))
              },
              off: function() {
                clearInterval(this.interval), this.interval = null, document.title = t.originalPageTitle
              }
            }
          };
          ge.prototype.initIndicator = function() {
            p.viewHandler.totalUnseenMessages && this.updateUnseenMessages(p.viewHandler.totalUnseenMessages)
          }, ge.prototype.show = function() {
            var e, t;
            "max" === B.chatWindowState() && !H.isPopup || this.isPopupFocused && !p.viewHandler.popoutWin.closed || H.hideWidgetOnLoad || "restartChatForm" === p.formHandler.currentForm || "offlineForm" === p.formHandler.currentForm || !this.container || !this.container.elementReferrer || (e = this.container.getElementById("tawkchat-chat-indicator"), (t = this.container.getElementById("tawkchat-chat-indicator-text")) && (t.innerHTML = this.unansweredMessages), e && "block" !== e.style.display && (e.style.display = "block", e.style.visibility = "hidden", p.viewHandler.handleIndicatorToggle(!0), p.viewHandler.showWidget(), this.container.show()), H.showMessagePreview() && p.viewHandler.messagePreview && p.viewHandler.messagePreview.isShown && !document.hidden || this.pageTitleNotification.on())
          }, ge.prototype.hide = function() {
            var e, t;
            this.container && this.container.elementReferrer && (e = this.container.getElementById("tawkchat-chat-indicator"), t = this.container.getElementById("tawkchat-chat-indicator-text"), e && "block" === e.style.display && (e.style.display = "none", p.viewHandler.handleIndicatorToggle(), T || this.container.hide()), t && (t.innerHTML = ""))
          }, ge.prototype.updateUnseenMessages = function(e) {
            this.unansweredMessages = e, l.triggerApiHandlers("onUnreadCountChanged", this.unansweredMessages), 0 === this.unansweredMessages ? this.pageTitleNotification.off() : "min" === B.chatWindowState() ? this.show() : this.pageTitleNotification.on()
          };
          var fe = function(e) {
            this.container = e, this.documentRef = this.container.documentRef, this.quickReplyContainer = this.messagePreviewContainer = null, this.prevSenderUid = "", this.messagePreviewCount = 0, this.timeIntervalsArr = [], this.isQuickReplyInitialized = !1, this.maxNumberFileUpload = 5, this.chatTextarea = new he("chatTextarea", null, null, "textarea"), this.incomingCallContainer = null, this.offsetX = H.widgetOffsetX, this.offsetY = H.widgetOffsetY, this.wrapper = null, this.isActionsContainerNotifShown = !1, this.lastRadioButton = null, this.resizeThrottle = 0
          };
          fe.prototype.init = function() {
            this.container && (this.wrapper || (this.wrapper = this.container.getElementById("tawkchat-message-preview-container"), H.isRTL() && (this.wrapper.className += "rtl-direction ")), T ? this.updateMobilePositions() : this.updatePositions())
          }, fe.prototype.show = function(e, t, i) {
            var a = this;
            0 !== e && this.container && (t || i) && (1 === e ? this.messagePreviewCount = 1 : this.messagePreviewCount++, this.messagePreviewContainer || (this.messagePreviewContainer = this.container.getElementById("tawkchat-message-preview-messages-container"), H.isCenterPositioned() ? this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (document.documentElement.clientHeight / 2 - 180) - 210 + "px" : this.messagePreviewContainer.style.maxHeight = document.documentElement.clientHeight - (H.minimizedDimensions().height + H.widgetOffsetY + 300) + "px", this.toggleUploadsAction(), this.toggleRatingAction(), this.toggleEmojiAction()), this.quickReplyContainer || (this.quickReplyContainer = this.container.getElementById("tawkchat-message-preview-quick-reply-container")), this.isShown = !0, this.container.restyle("display", "block"), n && n.hideBubble(), t && !T ? this.appendMessage(t) : i && (i.isMissed ? this.appendCallInfo(i) : (this.messagePreviewCount--, this.appendCallRequest(i))), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
              p.sessionHandler.visitorChatDismiss(function() {}), a.removeAllElements()
            }, "tawkchat-message-preview-close", "mp-closeitemsclick"), this.isQuickReplyInitialized || this.initQuickReply(), this.showQuickReply(), 0 === this.messagePreviewCount ? this.hideQuickReply() : (H.showPreChatForm && !B.prechatFormSubmitted() && H.prechatOptions.fields.forEach(function(e) {
              e.isRequired && a.hideQuickReply()
            }), this.hideActionsContainerNotif(), this.resizeTextArea(), setTimeout(function() {
              a.container && a.container.restyle("height", a.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
            }, 50), H.showEmoji.subscribe(function() {
              a.toggleEmojiAction()
            }), H.showUploads.subscribe(function() {
              a.toggleUploadsAction()
            }), H.showRating.subscribe(function() {
              a.toggleRatingAction()
            })))
          }, fe.prototype.toggleUploadsAction = function() {
            var e = this,
              t = this.container.documentRef.getElementById("uploadFileOption"),
              i = this.container.documentRef.getElementById("actionsContainer");
            t && (H.showUploads() ? (t.style.display = "block", this.container.attachUserEventListener("change", function(t) {
              p.eventHandler.cancelEvent(t);
              var i = [],
                n = [];
              if ((t = p.eventHandler.getTargetElement(t).files) && t.length) {
                for (var a = 0; a < t.length; a++) t[a].size > e.maxSizeFileUpload ? i.push(t[a]) : a >= e.maxNumberFileUpload ? n.push(t[a]) : p.viewHandler.startUpload(t[a]);
                p.viewHandler.checkUploadFileWarning(i, n), p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max")
              }
            }, "fileInput", "mp-fileInputChanged"), this.chatTextarea.attachUserEventListener("paste", function(e) {
              var t, i;
              if ((t = (e.originalEvent || e).clipboardData) && (t = t.items) && t.length) {
                for (var n = 0; n < t.length; n++)
                  if (-1 !== t[n].type.indexOf("image")) {
                    var a = t[n].getAsFile();
                    if (null !== a) {
                      (i = a).name = p.languageParser.translate("chat", "pasted_image_title", {
                        dateTime: L.parseChatTime(new Date)
                      });
                      break
                    }
                  } i && (p.viewHandler.startUpload(i), e.preventDefault())
              }
            }, null, "mp-chatTextareaPaste"), this.container.attachUserEventListener("dragover", function(e) {
              e.preventDefault(), e.stopPropagation && e.stopPropagation(), -1 === i.className.indexOf(" drag-over") && L.addClass(i, "drag-over")
            }, "actionsContainer", "mp-textareaContainerDragOver"), this.container.attachUserEventListener("dragleave", function(t) {
              var n = e.container.getElementById("tawkchat-message-preview-container").getBoundingClientRect();
              (t.clientY < n.top || t.clientY >= n.bottom || t.clientX < n.left || t.clientX >= n.right) && (t.preventDefault(), t.stopPropagation && t.stopPropagation(), L.removeClass(i, "drag-over"))
            }, "actionsContainer", "mp-textareaContainerDragLeave"), this.container.attachUserEventListener("drop", function(t) {
              t.preventDefault(), t.stopPropagation && t.stopPropagation(), i.className = i.className.replace(/ drag-over/g, "");
              var n = [],
                a = [];
              if ((t = t.target.files || t.dataTransfer.files) && 0 !== t.length) {
                for (var r = 0; r < t.length; r++) t[r].size > e.maxSizeFileUpload ? n.push(t[r]) : r >= e.maxNumberFileUpload ? a.push(t[r]) : p.viewHandler.startUpload(t[r]);
                e.chatTextarea.elementReferrer.value = "", e.resizeTextArea(), e.chatTextarea.elementReferrer.value ? e.toggleActionsContentOnTyping(!1) : e.toggleActionsContentOnTyping(!0), p.viewHandler.checkUploadFileWarning(n, a), p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max")
              }
            }, "actionsContainer", "mp-textareaContainerDrop")) : t.style.display = "none")
          }, fe.prototype.toggleRatingAction = function() {
            var e = this.container.getElementById("rateMainWrapper"),
              t = this.container.getElementById("rateContainer");
            e && t && (H.showRating() ? (e.style.display = "block", this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
              p.chatHandler.changeRating(1), p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max"), p.eventHandler.cancelEvent(e)
            }, "ratePositive", "mp-ratepveclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
              p.chatHandler.changeRating(-1), p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max"), p.eventHandler.cancelEvent(e)
            }, "rateNegative", "mp-ratenveclick"), this.container.attachUserEventListener("mouseover", function() {
              t.style.display = "block"
            }, "rateMainWrapper", "rateMainWrapperOverQR"), this.container.attachUserEventListener("mouseout", function() {
              t.style.display = "none"
            }, "rateMainWrapper", "rateMainWrapperOutQR")) : e.style.display = "none")
          }, fe.prototype.updateMobilePositions = function() {
            var e = {},
              t = H.minimizedDimensions().width,
              i = H.minimizedDimensions().height;
            H.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), e.top = "calc(50% - " + (.5 * t + 20) + "px) !important", e.bottom = "auto !important", H.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), e.right = this.offsetX + i + 15 + 100 + "px !important", e.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), e.left = this.offsetX + i + 15 + 100 + "px !important", e.right = "auto !important")) : (i = p.viewHandler.minifiedBoxHeight * p.viewHandler.zoom + 30, H.isTopPositioned() ? (e.bottom = "auto !important", e.top = i + 30 + "px !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (e.bottom = i + 30 + "px !important", e.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className += " bottom")), H.isRightPositioned() ? (e.right = "10px !important", e.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (e.right = "auto !important", e.left = "10px !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"))), this.container.massRestyle(e)
          }, fe.prototype.updatePositions = function() {
            var e = {},
              t = H.minimizedDimensions().width,
              i = H.minimizedDimensions().height;
            H.isCenterPositioned() ? (-1 === this.wrapper.className.indexOf("center") && (this.wrapper.className += "center"), e.top = "calc(50% - " + (.5 * t + 40) + "px) !important", e.bottom = "auto !important", H.isRightPositioned() ? (-1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right"), e.right = this.offsetX + i + 15 + "px !important", e.left = "auto !important") : (-1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"), e.left = this.offsetX + i + 15 + "px !important", e.right = "auto !important")) : (H.isTopPositioned() ? (e.top = H.minimizedDimensions().height + this.offsetY + "px !important", e.bottom = "auto !important", -1 === this.wrapper.className.indexOf("top") && (this.wrapper.className += " top")) : (H.isDesktopRectangle() ? e.bottom = H.minimizedDimensions().height + this.offsetY + 10 + "px !important" : e.bottom = 80 + this.offsetY + "px !important", e.top = "auto !important", -1 === this.wrapper.className.indexOf("bottom") && (this.wrapper.className += " bottom")), H.isRightPositioned() ? (e.right = this.offsetX + "px !important", e.left = "auto !important", -1 === this.wrapper.className.indexOf("right") && (this.wrapper.className += " right")) : (e.left = this.offsetX + "px !important", e.right = "auto !important", -1 === this.wrapper.className.indexOf("left") && (this.wrapper.className += " left"))), this.container.massRestyle(e)
          }, fe.prototype.setStyleToSingleAgent = function() {
            var e, t, i;
            if (this.messagePreviewContainer && this.container)
              for (e = this.messagePreviewContainer.getElementsByClassName("messageBody"), t = this.container.documentRef.getElementById("actionsContainer"), i = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "10px", t.setAttribute("style", "border-radius:5px 5px 5px 5px !important; background-color: #fff"), i.setAttribute("style", "border-radius:5px 5px 5px 5px !important"), t = 0; t < e.length; t++) i = 10, e[t].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 5px 5px !important"), 0 === t && (i = 0), e[t].parentElement.setAttribute("style", "margin-top:" + i + "px !important")
          }, fe.prototype.setStyleToMultipleAgent = function() {
            var e, t, i;
            if (this.messagePreviewContainer && this.container)
              for (e = this.messagePreviewContainer.getElementsByClassName("messageBody"), t = this.container.documentRef.getElementById("actionsContainer"), i = this.container.documentRef.getElementById("textareaWrapper"), this.quickReplyContainer.style.marginTop = "0px", t.setAttribute("style", "border-radius:0px 0px 5px 5px !important; background-color: #f8f8f8"), i.setAttribute("style", "border-radius:0px 0px 5px 5px !important"), t = 0; t < e.length; t++) 0 === t ? 1 === this.messagePreviewCount ? e[t].setAttribute("style", "border-bottom-width: 3px !important; border-radius:5px 5px 0px 0px !important") : e[t].setAttribute("style", "border-bottom-width:1px !important; border-radius:5px 5px 0px 0px !important") : (t === e.length - 1 ? e[t].setAttribute("style", "border-bottom-width:3px !important; border-radius:0px 0px 0px 0px !important") : e[t].setAttribute("style", "border-bottom-width:1px !important; border-radius:0px 0px 0px 0px !important"), e[t].parentElement.setAttribute("style", "margin-top:0px !important"))
          }, fe.prototype.hide = function() {
            if (this.isShown = !1, this.container.restyle("display", "none !important"), this.messagePreviewContainer) {
              this.messagePreviewContainer.innerHTML = "";
              for (var e = 0; e < this.timeIntervalsArr.length; e++) clearInterval(this.timeIntervalsArr[e].timeInterval);
              this.timeIntervalsArr = [], this.prevSenderUid = "", this.closeEmojiSelection(), n && n.showBubble()
            }
          }, fe.prototype.removeCallRequest = function() {
            this.incomingCallContainer && (this.incomingCallContainer.elementReferrer.parentElement && (this.incomingCallContainer.elementReferrer.outerHTML = ""), this.incomingCallContainer = null), T && this.hide()
          }, fe.prototype.appendCallRequest = function(e) {
            var t, i;
            t = m.incomingCallRequest;
            var n = e.callId;
            i = (i = (e = R.agentProfiles[R.profiles[e.caller.urid]]) && e.pi ? B.agentImgUrl + "/" + e.pi : "") ? "url('" + i + "');" : "transparent;", p.chatHandler.webrtcWin && !p.chatHandler.webrtcWin.closed ? p.chatHandler.webrtcWin.focus() : (t = (t = (t = t.replace(/__IMAGE_URL__/, i)).replace(/__INCOMING_CALL__/, p.languageParser.translate("chat", "incoming_call_message", {
              name: e.n
            }))).replace(/__ACCEPT_CALL__/, p.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, p.languageParser.translate("chat", "decline_call")), (e = new he("incoming-call")).template = t, e.buildView(), this.messagePreviewContainer.insertBefore(e.elementReferrer, this.messagePreviewContainer.firstElementChild), e.elementReferrer.style.marginBottom = 0 === this.messagePreviewCount ? "0px" : "10px", this.incomingCallContainer = e, t = this.container.getElementById("accept-call"), e = this.container.getElementById("decline-call"), t && p.eventHandler.listen(t, "click", function() {
              clearTimeout(p.viewHandler.incomingCallTimeout), L.getWebRTCToken(!1, !1, function() {
                p.viewHandler.removeCallRequest()
              }), p.viewHandler.userAction = !0, p.sessionHandler.notifyWindowState("max")
            }, "mp-acceptVideoCall"), e && p.eventHandler.listen(e, "click", function() {
              clearTimeout(p.viewHandler.incomingCallTimeout), L.rejectCall(n, function() {
                p.viewHandler.removeCallRequest()
              }), p.viewHandler.userAction = !0, p.sessionHandler.notifyWindowState("max")
            }, "mp-declineVideoCall"), p.audioPlayer.play("chat_sound"), 0 === this.messagePreviewCount ? (this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), this.messagePreviewContainer.style.maxHeight = this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px", this.hideQuickReply()) : (this.messagePreviewContainer.style.maxHeight = this.container.elementReferrer.offsetHeight + "px", this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + this.messagePreviewContainer.offsetHeight + "px")))
          }, fe.prototype.appendCallInfo = function(e) {
            if (!T) {
              var t, i, n = m["messagePreview-callInfo"],
                a = e.callId,
                r = e.caller;
              e = e.isMissed;
              var o = null,
                s = null,
                l = Date.now(),
                c = o = t = null,
                d = (a = "callInfo-" + a, c = null, ""),
                h = null;
              this.container && this.messagePreviewContainer && e && (c = p.languageParser.translate("chat", "missed_visitor_messagePreview"), "transparent" !== (i = (t = (o = R.agentProfiles[R.profiles[r.urid]]) && o.pi ? B.agentImgUrl + "/" + o.pi : "") ? "url('" + t + "');" : "transparent;") && (i += "background-position:0 0;background-size:28px 28px"), (t = new he(a, null, {
                className: "message-preview-item"
              }, null, this.documentRef)).template = L.escapeTemplateReplacement(n, [{
                placeholder: "__CALL_INFO__",
                textReplace: c
              }, {
                placeholder: "__CALLER_NAME__",
                textReplace: o.n
              }, {
                placeholder: "__IMAGE_URL__",
                textReplace: i
              }, {
                placeholder: "__ELAPSED_TIME__",
                textReplace: p.languageParser.translate("chat", "justNow")
              }]), t.buildView(), H.isTopPositioned() ? this.messagePreviewContainer.insertBefore(t.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(t.elementReferrer), o = t.elementReferrer.getElementsByClassName("btn-icon")[0], c = t.elementReferrer.getElementsByClassName("mp-callIconContainer")[0], e && (o.style.transform = "rotate(135deg)", o.style.top = "1px", c.style.backgroundColor = "#e52f48"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "10px"), this.prevSenderUid === R.profiles[r.urid] && (d += " hidden-profile"), t.elementReferrer.className += d, t.elementReferrer.setAttribute("data-uid", R.profiles[r.urid]), h = t.elementReferrer.getElementsByClassName("mp-callInfoElapsedTime")[0], this.timeIntervalsArr.push({
                messageId: a,
                timeInterval: setInterval(function() {
                  s = Math.floor((Date.now() - l) / 1e3), h.innerHTML = 60 > s ? p.languageParser.translate("chat", "justNow") : p.languageParser.translate("chat", "minutes", {
                    num: Math.floor(s / 60)
                  }) + " ago"
                }, 6e4)
              }), this.prevSenderUid = R.profiles[r.urid], 3 < this.messagePreviewCount && (H.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), this.container.restyle("height", this.wrapper.offsetHeight + this.messagePreviewContainer.offsetHeight + "px"), t.elementReferrer.className += " animate-fade-object")
            }
          }, fe.prototype.scrollToBottom = function() {
            this.messagePreviewContainer && (this.messagePreviewContainer.scrollTop = 1e8)
          }, fe.prototype.parseSurvey = function(e, t) {
            var i, n, a, r, o, s, l = e.match(L.regSurvey),
              c = "";
            if (!l) return {
              message: e,
              isSurvey: !1
            };
            for (r = e.match(L.regSurveyQuestion), o = "survey-" + (new Date).getTime(), i = 0, n = l.length; i < n; i++) a = (a = l[i].replace(L.regOption, "")).replace(L.regBr, ""), a = L.trim(a), s = o + i, c += L.escapeTemplateReplacement(m["survey-option"], [{
              placeholder: /__RADIO_ID__/gm,
              textReplace: s
            }, {
              placeholder: "__RADIO_NAME__",
              textReplace: t
            }, {
              placeholder: /__RADIO_VALUE__/gm,
              textReplace: a
            }]);
            return {
              message: L.escapeTemplateReplacement(m["tawk-survey-wrapper"], [{
                placeholder: "__QUESTION__",
                textReplace: r[0].replace(L.regOption, "")
              }, {
                placeholder: "__OPTIONS__",
                textReplace: c
              }]),
              isSurvey: !0
            }
          }, fe.prototype.appendMessage = function(e) {
            var t = this,
              i = null,
              n = m["message-preview-item"],
              a = null,
              r = null,
              o = r = null,
              s = o = o = null,
              l = "",
              c = null,
              d = (c = !1, Date.now()),
              h = "msgPreview-messageId-" + (new Date).getTime().toString() + Object.keys(p.chatHandler.messages).length,
              u = new Date(e.time).getTime();
            e && this.container && (r = e.message, o = (o = e.profileImg ? e.profileImg ? "https://tawk.link/" + e.profileImg : "" : (o = R.agentProfiles[e.ownerId]) && o.pi ? B.agentImgUrl + "/" + o.pi : "") ? "url('" + o + "');" : "transparent;", this.messagePreviewContainer && (void 0 !== ie && (0 === (r = ie.unifyUnicode(r)).replace(ie.regUnicode, "").trim().length && (l += " emojionly"), r = ie.toImage(r)), r = "s" === e.senderType ? this.limitMessageLength(r, 500) : this.limitMessageLength(r, 150), e.data && e.data.file && (r = p.viewHandler.parseUploadedFile(e.data.file)), r = (c = this.parseSurvey(r, h)).message, c = c.isSurvey, (i = new he(h, null, {
              className: "message-preview-item"
            }, null, this.documentRef)).template = L.escapeTemplateReplacement(n, [{
              placeholder: "__MESSAGE__",
              textReplace: r
            }, {
              placeholder: "__NAME__",
              textReplace: e.name
            }, {
              placeholder: "__IMAGE_URL__",
              textReplace: o
            }, {
              placeholder: "__TIME__",
              textReplace: p.languageParser.translate("chat", "justNow")
            }]), i.buildView(), H.isTopPositioned() ? this.messagePreviewContainer.insertBefore(i.elementReferrer, this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0]) : this.messagePreviewContainer.appendChild(i.elementReferrer), e.data && e.data.file && (i.elementReferrer.getElementsByClassName("messageBody")[0].className += " imageMessageBody"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "10px"), e.ownerId && this.prevSenderUid === e.ownerId && (l += " hidden-profile"), i.elementReferrer.className += l, i.elementReferrer.setAttribute("data-uid", e.ownerId), a = i.elementReferrer.getElementsByClassName("messageTime")[0], this.timeIntervalsArr.push({
              messageId: h,
              timeInterval: setInterval(function() {
                s = Math.floor((Date.now() - d) / 1e3), a.innerHTML = 60 > s ? p.languageParser.translate("chat", "justNow") : p.languageParser.translate("chat", "minutes", {
                  num: Math.floor(s / 60)
                }) + " ago"
              }, 1e3),
              timestamp: u
            }), this.prevSenderUid = e.ownerId, r = i.elementReferrer.firstElementChild, p.eventHandler.listen(r, p.viewHandler.clickEvent, function() {
              t.removeElement(i.elementReferrer)
            }, "close-" + i.elementReferrer.id), 3 < this.messagePreviewCount && (H.isTopPositioned() ? this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[3]) : this.removeElement(this.messagePreviewContainer.getElementsByClassName("message-preview-item")[0])), t.scrollToBottom(), c && this.addSurveyHandlers(h), this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"), i.elementReferrer.className += " animate-fade-object"))
          }, fe.prototype.addSurveyHandlers = function(e) {
            var t, i = this;
            this.container && (t = this.container.getElementById(e), (t = L.getElementsByTagName(t, "input")).forEach(function(t, n) {
              t.id && i.container.attachUserEventListener("click", function() {
                i.lastRadioButton !== t.id && (i.lastRadioButton = t.id, p.chatHandler.sendMessage(t.value), p.sessionHandler.notifyWindowState("max"), p.viewHandler.scrollToBottom())
              }, t.id, "survey" + e + n + "click")
            }))
          }, fe.prototype.limitMessageLength = function(e, t) {
            var i = 0;
            if (e.length > t)
              for (i = 0; i < t;)
                if ('<img class="emojione"' === e.substring(i, i + 21) || '<a target="_blank"' === e.substring(i, i + 18)) {
                  for (var n = i; n < e.length; n++)
                    if (i++, t++, ">" === e.substring(n, n + 1)) {
                      t -= 1;
                      break
                    }
                } else i++;
            return e.substring(0, t) + (e.length > t ? "[...]" : "")
          }, fe.prototype.removeAllElements = function() {
            for (var e = null, t = 0, i = H.minimizedDimensions().width, n = 0; n < this.timeIntervalsArr.length; n++) clearInterval(this.timeIntervalsArr[n].timeInterval), this.timeIntervalsArr.splice(n, 1);
            if (this.messagePreviewContainer) {
              for (t = (e = this.messagePreviewContainer.getElementsByClassName("message-preview-item")).length, n = 0; n < t; n++) e[0].parentElement && (e[0].outerHTML = "");
              this.messagePreviewCount = 0, this.removeCallRequest(), this.prevSenderUid = "", H.isCenterPositioned() && this.container.restyle("top", "calc(50% - " + .5 * i + "px) !important"), this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px"), this.hide()
            }
          }, fe.prototype.removeElement = function(e) {
            for (var t, i = null, n = 0; n < this.timeIntervalsArr.length; n++)
              if (this.timeIntervalsArr[n].messageId === e.id) {
                clearInterval(this.timeIntervalsArr[n].timeInterval), this.timeIntervalsArr.splice(n, 1);
                break
              } if (t = this.messagePreviewContainer.getElementsByClassName("message-preview-item"), -1 === e.className.indexOf("hidden-profile"))
              if (H.isTopPositioned()) {
                for (n = t.length - 2; n < t.length; n--)
                  if ((i = t[n]).getAttribute("data-uid") === e.getAttribute("data-uid")) {
                    i.className = i.className.replace(/hidden-profile/gi, "");
                    break
                  }
              } else
                for (n = 1; n < t.length; n++)
                  if ((i = t[n]).getAttribute("data-uid") === e.getAttribute("data-uid")) {
                    i.className = i.className.replace(/hidden-profile/gi, "");
                    break
                  } e.parentElement && (e.outerHTML = ""), this.messagePreviewCount--, 0 === this.messagePreviewCount && this.container.getElementById("incoming-call") && (this.container.getElementById("incoming-call").style.marginBottom = "0px")
          }, fe.prototype.initQuickReply = function() {
            var e, t;
            T || (t = this.container.documentRef.getElementById("tooLongMsgNotification"), this.container.documentRef.getElementById("textareaContainer").insertBefore(this.chatTextarea.buildView(this.container.documentRef), t), e = this.container.getElementById("tawkchat-message-preview-quick-reply-container"), t = this.container.getElementById("file-upload-drop-label"), B.pageStatus() && e && (e = L.rawDecode(H.onlineGreeting.actionMessage), S ? this.chatTextarea.elementReferrer.placeholder = e : (this.chatTextarea.elementReferrer.value = e, L.togglePlaceholderText(this.chatTextarea.elementReferrer, e, "chatTextarea")), t.innerHTML = p.languageParser.translate("rollover", "uploadFile"), this.container.getElementById("viewEmoji").setAttribute("title", p.languageParser.translate("chat", "insert_emoji")), this.container.getElementById("uploadFileOption").setAttribute("title", p.languageParser.translate("rollover", "uploadFile")), this.container.getElementById("ratePositive").setAttribute("title", p.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title", p.languageParser.translate("rollover", "negativeRating")), this.attachEventListenerQuickReply(), this.isQuickReplyInitialized = !0))
          }, fe.prototype.showQuickReply = function() {
            T || (this.quickReplyContainer.style.display = "block", this.toggleActionsContentOnTyping(!0))
          }, fe.prototype.hideQuickReply = function() {
            this.quickReplyContainer && (this.quickReplyContainer.style.display = "none")
          }, fe.prototype.attachEventListenerQuickReply = function() {
            var e = this;
            this.container.documentRef.getElementById("notifMessageText").innerHTML = p.languageParser.translate("chat", "message_too_long"), this.hideActionsContainerNotif(), this.chatTextarea.attachUserEventListener("keydown", function(t) {
              if (e.resizeTextArea(), 13 === t.keyCode && !t.shiftKey) {
                if (5e3 < this.value.length) return void t.preventDefault();
                p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max"), p.viewHandler.scrollToBottom()
              }
              this.value ? e.toggleActionsContentOnTyping(!1) : e.toggleActionsContentOnTyping(!0), p.chatHandler.sendTextPreview(t)
            }, null, "mp-chatinputkeyupresize"), this.chatTextarea.attachUserEventListener("keyup", function() {
              5e3 >= this.value.length ? e.hideActionsContainerNotif() : e.showActionsContainerNotif(), this.value ? e.toggleActionsContentOnTyping(!1) : e.toggleActionsContentOnTyping(!0), e.resizeTextArea()
            }, null, "mp-chatinputkeyup")
          }, fe.prototype.toggleActionsContentOnTyping = function(e) {
            var t = this.container.getElementById("hidableActionsWrapper"),
              i = this.container.getElementById("textareaContainer");
            e ? (t.style.display = "block", L.addClass(i, "additionalPadding")) : (t.style.display = "none", L.removeClass(i, "additionalPadding"))
          }, fe.prototype.toggleEmojiAction = function() {
            var e = this,
              t = this.container.getElementById("viewEmoji"),
              i = this.container.documentRef.getElementById("emoji-selection-container"),
              n = this.container.getElementById("textareaContainer");
            H.showEmoji() ? (t.style.display = "block", L.addClass(n, "with-emoji"), i.innerHTML = m.loader, this.container.attachUserEventListener("click", function(t) {
              t.stopPropagation(), "active" === e.container.getElementById("viewEmoji").className ? e.closeEmojiSelection() : (e.container.getElementById("viewEmoji").className = "active", se(i), e.container.restyle("height", e.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px"))
            }, "viewEmoji", "mp-viewEmojiClick")) : (t.style.display = "none", L.removeClass(n, "with-emoji"))
          }, fe.prototype.closeEmojiSelection = function() {
            if (!T) {
              var e = this.container.documentRef.getElementById("actionsContainer"),
                t = this.container.documentRef.getElementById("emoji-selection-container");
              this.container.getElementById("viewEmoji").className = "", e.style.height = "50px", L.removeClass(t, "showWithFade"), this.container.restyle("height", this.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")
            }
          }, fe.prototype.resizeTextArea = function() {
            var e = this;
            clearTimeout(this.resizeThrottle), T || (this.resizeThrottle = setTimeout(function() {
              var t = e.chatTextarea.elementReferrer.value,
                i = e.container.documentRef.getElementById("actionsContainer"),
                n = e.container.documentRef.getElementById("textareaContainer"),
                a = t.split(/\r\n|\r|\n/).length || 1,
                r = 20 * a;
              1 === a && e.chatTextarea.elementReferrer.scrollHeight >= e.chatTextarea.elementReferrer.clientHeight && (r = e.chatTextarea.elementReferrer.scrollHeight), t && 20 <= r ? (r = 150 < r ? 150 : r, e.isActionsContainerNotifShown ? (r += 52, n.style.paddingBottom = "67px") : n.style.paddingBottom = "15px", i.style.height = r - 20 + 50 + "px", e.container.getElementById("tawkchat-message-preview-container").offsetHeight > e.container.elementReferrer.offsetHeight && e.container.restyle("height", e.container.getElementById("tawkchat-message-preview-container").offsetHeight + "px")) : (i.style.height = "50px", n.style.paddingBottom = "15px")
            }, 100))
          }, fe.prototype.addEmojiToInput = function(e) {
            S || this.chatTextarea.elementReferrer.value !== L.rawDecode(H.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = ""), this.chatTextarea.elementReferrer.value += e, this.chatTextarea.elementReferrer.focus(), this.closeEmojiSelection()
          }, fe.prototype.showActionsContainerNotif = function() {
            T || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "block", this.isActionsContainerNotifShown = !0)
          }, fe.prototype.hideActionsContainerNotif = function() {
            T || (this.container.documentRef.getElementById("tooLongMsgNotification").style.display = "none", this.isActionsContainerNotifShown = !1)
          };
          var ye = TawkClass.extend({
            init: function() {
              this.chatContainer = null, this.removeAgentNotification = !1, this.lastRadioButton = null, this.clickEvent = "click", this.isPopupFocused = !1, this.indicator = null, this.newMessageNotSeen = !1, this.unseenMessages = [], this.lastMessageTime = null, this.totalUnseenMessages = 0, this.retryUploadList = this.removeDividerTimeout = null, this.tawktoLinkName = L.getRandomName(), this.bottomContainerName = L.getRandomName(), this.currentScrollY = this.incomingCallTimeout = null, this.callData = {}, this.mainAgent = null
            },
            show: function() {
              var e = this,
                t = "visibilitychange";
              "webkitvisibilitychange" in document ? t = "webkitvisibilitychange" : "mozvisibilitychange" in document ? t = "mozvisibilitychange" : "msvisibilitychange\ufeff" in document && (t = "msvisibilitychange\ufeff"), p.eventHandler.listen(c, "focus", function() {
                p.viewHandler.messagePreview && p.viewHandler.indicator.pageTitleNotification.off(), e.checkSeenMessageViewport()
              }, "windowOnFocus"), p.eventHandler.listen(document, t, function() {
                document.hidden || (p.viewHandler.messagePreview && p.viewHandler.indicator.pageTitleNotification.off(), e.checkSeenMessageViewport())
              }, "documentVisibilityChange")
            },
            appendAgent: function(e) {
              var t, i, n, a, r, o = "";
              t = (a = this.chatContainer).getElementById("agentProfileContainer");
              var s = a.getElementById("agentList");
              i = a.getElementById("chatWrapper"), n = a.getElementById("headerAccountStateContainer"), r = a.getElementById("shortMessage"), a && t && s && (-1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (r.style.display = "none", t.className = "show"), p.agents.agentsCount++, 1 < p.agents.agentsCount || 1 === p.agents.agentsCount && this.mainAgent && this.mainAgent.pid !== e.pid ? i.classList.remove("one-agent") : i.classList.add("one-agent"), 1 === p.agents.agentsCount ? (this.mainAgent = e, p.viewHandler.renderAgentHeader(e.pid), this.renderAgentMinimizedWidget(e.pid)) : (p.viewHandler.renderAgentHeader(e.pid), n.classList.add("multiple-agent")), p.viewHandler.openAgentList(), t = m["agent-profile"], i = m["agent-profile-image"], n = m["agent-profile-description"], a = new he("agentProfile-" + e.pid, null, {
                className: "agentWrapper clearfix"
              }, null, a.documentRef), (r = e.pi ? B.agentImgUrl + "/" + e.pi : "") && (o = "background-image : url('" + r + "'); background-position : 0px 0px;"), o += "box-shadow: 0px 0px 0px 1px " + H.headerTxtColor + ";", n = L.escapeTemplateReplacement(n, [{
                placeholder: "__POSITION_CLASS__",
                textReplace: "agentName"
              }, {
                placeholder: "__POSITION__",
                textReplace: e.pst
              }, {
                placeholder: "__NAME__",
                textReplace: e.n
              }]), i = i.replace("__PROFILE_ID__", e.pid).replace("__IMAGE_URL__", o), a.template = L.escapeTemplateReplacement(t, [{
                placeholder: "__AGENT_PROFILE_DETAIL__",
                textReplace: n
              }, {
                placeholder: "__AGENT_PROFILE_IMAGE__",
                textReplace: i
              }, {
                placeholder: "__ID__",
                textReplace: ""
              }]), s.appendChild(a.buildView()), s.style.left = "50%")
            },
            removeAgent: function(e) {
              var t, n, a, r, o = i.container.elementReferrer ? i.container : null,
                s = o.getElementById("chatWrapper");
              o && (p.agents.agentsCount--, t = o.getElementById("agentProfileContainer"), n = o.getElementById("agentProfile-" + e), a = o.getElementById("profileImage-" + e), r = o.getElementById("profileDetail" + e), 0 === p.agents.agentsCount ? (p.viewHandler.clearAgentHeader(), this.clearAgentFooter()) : 1 === p.agents.agentsCount && (p.eventHandler.removeEventHandler(t, "click", this.expandAgentList), o.getElementById("headerAccountStateContainer").classList.remove("multiple-agent")), 0 < p.agents.agentsCount && this.mainAgent.pid === e && (this.mainAgent = R.agentProfiles[Object.keys(R.agentProfiles)[0]], this.renderAgentMinimizedWidget(this.mainAgent.pid)), n && n.parentNode.removeChild(n), a && (a.parentNode && a.parentNode.removeChild(a), t.style.width = 1 >= p.agents.agentsCount ? "" : 30 * p.agents.agentsCount - 10 * (p.agents.agentsCount - 1) + "px"), r && r.parentNode && r.parentNode.removeChild(r), 1 === p.agents.agentsCount && (this.renderAgentMinimizedWidget(this.mainAgent.pid), s.className = "single-agent", p.viewHandler.calculateOwnerNameAndMessageTimeSizeAll(), p.viewHandler.messagePreview && p.viewHandler.messagePreview.setStyleToSingleAgent())), 0 === p.agents.agentsCount && (p.viewHandler.clearAgentHeader(), this.clearAgentFooter(), p.viewHandler.closeAgentList())
            },
            clearAgentFooter: function() {
              var e, t, i, a;
              e = n && n.container && n.container.elementReferrer ? n.container : null, T && this.minifiedWidget && this.minifiedWidget.container && (e = this.minifiedWidget.container), e && this.chatContainer && (i = e.getElementById("tawkchat-status-text-container"), a = e.getElementById("min-agent-profile-details"), t = e.getElementById("agent-profile-image"), (e = e.getElementById("tawkchat-status-agent-container")) || e) && (i && (i.style.display = "block"), a && (a.innerHTML = ""), t.innerHTML = "", e.style = "", e.className = "")
            },
            renderAgentMinimizedWidget: function(e) {
              var t, i, a, r;
              i = n && n.container && n.container.elementReferrer ? n.container : null, T && this.minifiedWidget && this.minifiedWidget.container && (i = this.minifiedWidget.container), i && this.chatContainer && e && (t = R.agentProfiles[e], e = i.getElementById("tawkchat-status-agent-container"), iconContainer = i.getElementById("tawkchat-status-icon-container"), r = i.getElementById("agent-profile-image"), tawkStatusMessage = i.getElementById("tawkchat-status-text-container"), profileDetails = i.getElementById("min-agent-profile-details"), a = i.getElementById("tawkchat-chat-indicator"), e && (this.clearAgentFooter(), i = t.pi ? B.agentImgUrl + "/" + t.pi : "", r.style.backgroundImage = i ? "url('" + i + "')" : "", r.style.boxShadow = "0px 0px 0px 1px " + H.headerTxtColor, e.className += "appear", profileDetails && (profileDetails.innerHTML = '<p class="name">' + t.n + '</p><p class="position">' + t.pst + "</p>"), tawkStatusMessage && H.isDesktopRectangle() && (tawkStatusMessage.style.display = "none"), a && "block" === a.style.display && p.viewHandler.handleIndicatorToggle(!0)))
            },
            clearAgentHeader: function() {},
            handleAcknowledgment: function(e) {
              var t, i, n, a, r, o, s, l = this.chatContainer;
              if (l && e.messageId && (a = l.getElementById(e.messageId))) {
                n = a.parentNode, i = 0;
                for (var c = a.childNodes.length; i < c; i++) {
                  var d = a.childNodes[i]; - 1 !== d.className.indexOf("messageBody") && (t = L.getElementsByClassName(d, "messageWrapper"), s = L.getElementsByClassName(d, "messageStatusContainer"))
                }
                t && t.length && s && s.length && (s = s[0], t = t[0], e.error ? s && (n = m["chat-resend-link"].replace("__MESSAGE_ID__", e.messageId).replace("__NOT_DELIVERED__", p.languageParser.translate("chat", "resend")).replace("__FAILED__", p.languageParser.translate("chat", "failed")), t.className = "messageWrapper error", s.className = "messageStatusContainer errorInMessage", s.innerHTML = n, r = L.rawDecode(t.childNodes[0].textContent || t.childNodes[0].innerText), this.scrollToBottom(), o = p.eventHandler.listen(s, p.viewHandler.clickEvent, function(i) {
                  p.eventHandler.cancelEvent(i), p.chatHandler.sendMessageToServer(r, e.messageId), l.getElementById("errorFor" + e.messageId) && (t.className = "messageWrapper pending"), s.className = "messageStatusContainer pending", s.childNodes[0].className = "", s.childNodes[0].innerHTML = m.loader, p.eventHandler.removeEventHandler(t, "click", o)
                }, "resend" + e.messageId + "click")) : (i = p.chatHandler.messages[e.order], p.viewHandler.addWaitTime(), n.removeChild(a), p.chatHandler.prepareMessage(i, !0, !1, !0)))
              }
            },
            handleEndChat: function() {},
            clearAgents: function() {},
            handleRestartChat: function() {},
            appendMessage: function(e) {
              var t, i, n, r, o;
              t = !1;
              var s = null;
              i = e.message;
              var l = e.time,
                c = e.senderType,
                d = this.chatContainer.documentRef,
                h = this.ifScrollbarDown(),
                u = d.getElementById("chatWrapper"),
                g = "messageId-" + (new Date).getTime().toString() + Object.keys(p.chatHandler.messages).length,
                f = (s = "messageContainer clearfix", {
                  "chat-message-row": m["chat-message-row"],
                  "chat-resend-link": m["chat-resend-link"],
                  "chat-message-owner-agent": m["chat-message-owner-agent"],
                  "chat-message-owner-visitor": m["chat-message-owner-visitor"],
                  "chat-message-container": m["chat-message-container"],
                  "chat-notification-container": m["chat-notification-container"],
                  "chat-message-status-row": m["chat-message-status-row"],
                  "chat-divider": m["chat-divider"]
                });
              l = L.parseChatTime(l);
              p.chatHandler.noRedraw || p.viewHandler.isMaximized || H.isEmbedded || H.isPopup || T || "v" === c || "c" !== e.type || (H.hideWidgetOnLoad && "max" === H.onClickAction ? (p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max")) : p.viewHandler.messagePreview && p.viewHandler.messagePreview.show ? p.viewHandler.messagePreview.show(p.viewHandler.indicator.unansweredMessages + 1, e) : p.viewHandler.messagePreview || this.hasBeenMaximizedOnce || "max" !== H.onClickAction || p.chatHandler.agentHasMessaged || (p.viewHandler.userAction = !1, p.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0)), o = (o = e.profileImg ? e.profileImg ? "https://tawk.link/" + e.profileImg : "" : (o = R.agentProfiles[e.ownerId]) && o.pi ? B.agentImgUrl + "/" + o.pi : "") ? "url('" + o + "');" : "transparent;", "a" !== e.senderType && "s" !== e.senderType || (f["chat-message-owner-agent"] = f["chat-message-owner-agent"].replace("__IMAGE_URL__", o)), f["chat-message-status-row"] = e.isPending ? m["chat-message-pending-row"] : f["chat-message-status-row"].replace("__TIME__", l).replace("__TIME_CLASS__", "v" === e.senderType ? "visitor" : "agent").replace("__NAME__", "v" === e.senderType ? "" : e.name), void 0 !== ie && (0 === (i = ie.unifyUnicode(i)).replace(ie.regUnicode, "").trim().length && (s += " emojionly"), i = ie.toImage(i)), 1 >= R.chatOrder && (p.viewHandler.chatContainer.getElementById("changeName").style.display = "block", p.viewHandler.chatContainer.getElementById("emailTranscriptOption").style.display = "block"), "a" === c ? (i = (t = this.parseSurvey(i, g)).message, t = t.isSurvey, p.chatHandler.handleAgentStoppedTyping(e.data.rsc)) : p.chatHandler.visitorHasMessaged || "s" === c || (p.chatHandler.visitorHasMessaged = !0), e.data && e.data.file && (i = this.parseUploadedFile(e.data.file)), "c" === e.type && (n = L.escapeTemplateReplacement(f["chat-message-row"], [{
                placeholder: "__MESSAGE_STATUS_ROW__",
                textReplace: f["chat-message-status-row"]
              }, {
                placeholder: /__MESSAGE_ID__/gm,
                textReplace: g
              }, {
                placeholder: "__MESSAGE__",
                textReplace: i
              }, {
                placeholder: "__PENDING__",
                textReplace: e.isPending ? "pending" : ""
              }]), s = "v" === c ? s + " visitorChatContainer " : s + " agentChatContainer "), s = new he(g, null, {
                className: s
              }, null, d), this.lastMessageTime = e.isPending ? this.lastMessageTime : l, "c" === e.type ? (p.chatHandler.lastMessageOwner = "s" === c ? "server" : e.isPending ? p.chatHandler.lastMessageOwner : e.ownerId, "a" === c || "s" === c ? ("a" === c && (p.chatHandler.agentHasMessaged = !0, this.removeWaitTime()), i = L.escapeTemplateReplacement(f["chat-message-owner-agent"], [{
                placeholder: "__NAME__",
                textReplace: e.name
              }])) : i = L.isGeneratedName(_.name()) && f["chat-message-owner-visitor"] ? L.escapeTemplateReplacement(f["chat-message-owner-visitor"], [{
                placeholder: "__NAME__",
                textReplace: e.name
              }]) : "", r = L.escapeTemplateReplacement(f["chat-message-container"], [{
                placeholder: "__OWNER_TPL__",
                textReplace: i
              }, {
                placeholder: "__CONTENT__",
                textReplace: n
              }]), e.data && "v" === c && (r = r.replace("messageBody", "messageBody file")), "s" === c && (r = (r = r.replace("ownerNameContainer", "ownerNameContainer trigger")).replace("messageBody", "messageBody trigger"))) : "n" === e.type && (p.chatHandler.lastMessageOwner = "notif", e.isRtcError ? (n = "video" === e.rtcType ? p.languageParser.translate("chat", "video_call_error") : "screen" === e.rtcType ? p.languageParser.translate("chat", "screen_share_error") : p.languageParser.translate("chat", "voice_call_error"), r = L.escapeTemplateReplacement(m.noWebrtc, [{
                placeholder: "__MESSAGE__",
                textReplace: i
              }, {
                placeholder: "__HEADER__",
                textReplace: n
              }])) : r = L.escapeTemplateReplacement(f["chat-notification-container"], [{
                placeholder: "__MESSAGE_ID__",
                textReplace: g
              }, {
                placeholder: "__MESSAGE__",
                textReplace: i
              }, {
                placeholder: "__TIME__",
                textReplace: l
              }])), s.template = r, s.buildView();
              try {
                u.insertBefore(s.elementReferrer, d.getElementById("agentTypingContainer"))
              } catch (t) {
                a.handleError("Chat wrapper is null to append message : " + JSON.stringify(e), t.fileName, t.lineNumber, t.stack)
              }
              return e.dontPlaySound || "v" === c || e.isPending || this.popoutWin && !this.popoutWin.closed || p.audioPlayer.play("chat_sound"), e.timeStamp > B.lastMessageTimestamp && ("v" === c ? B.lastMessageTimestamp = e.timeStamp : !document.hidden && L.chatElementInView(s.elementReferrer) && p.viewHandler.isMaximized ? this.updateLastTimestamp(e.timeStamp) : (this.unseenMessages.push(g), this.updateTotalUnseenMessages(), 0 < this.totalUnseenMessages && (this.setDivider(s.elementReferrer, f["chat-divider"], s), e = this.chatContainer.documentRef.getElementById("newMessagesBar")) && (this.chatContainer.getElementById("notificationMessageText").innerHTML = p.languageParser.translate("chat", "newMessage", {
                num: this.totalUnseenMessages
              })))), !h || p.formHandler.currentForm && !p.viewHandler.isMaximized || this.scrollToBottom(), t && this.addSurveyHandlers(g), g
            },
            parseSurvey: function(e, t) {
              var i, n, a, r, o, s, l = e.match(L.regSurvey),
                c = "";
              if (!l) return {
                message: e,
                isSurvey: !1
              };
              for (r = e.match(L.regSurveyQuestion), o = "survey-" + (new Date).getTime(), i = 0, n = l.length; i < n; i++) a = (a = l[i].replace(L.regOption, "")).replace(L.regBr, ""), a = L.trim(a), s = o + i, c += L.escapeTemplateReplacement(m["survey-option"], [{
                placeholder: /__RADIO_ID__/gm,
                textReplace: s
              }, {
                placeholder: "__RADIO_NAME__",
                textReplace: t
              }, {
                placeholder: /__RADIO_VALUE__/gm,
                textReplace: a
              }]);
              return {
                message: L.escapeTemplateReplacement(m["tawk-survey-wrapper"], [{
                  placeholder: "__QUESTION__",
                  textReplace: r[0].replace(L.regOption, "")
                }, {
                  placeholder: "__OPTIONS__",
                  textReplace: c
                }]),
                isSurvey: !0
              }
            },
            updateViewByStatus: function(e) {
              if ("emailTranscriptFormOnChatEnded" !== p.formHandler.currentForm && "restartChatForm" !== p.formHandler.currentForm && p.formHandler.closeForm(), H.isPopup) {
                var t = o.getShortMessage(e);
                document.title = t ? I.pageName() + " - " + L.rawDecode(t) : I.pageName()
              }
              "online" === e || "away" === e ? (H.showConsentForm ? p.formHandler.openForm("consentForm") : H.showPreChatForm && !B.prechatFormSubmitted() && p.formHandler.openForm("preChatForm"), this.showWidget(), n && (p.viewHandler.isMaximized || n.showBubble(), n.toggleOfflineIcon(!1))) : "offline" === e && (H.hideWidgetOnOffline ? this.hideWidget() : (p.formHandler.openForm(H.showConsentForm ? "consentForm" : "offlineForm"), this.showWidget()), n && (n.hideBubble(), n.toggleOfflineIcon(!0), this.messagePreview && this.messagePreview.removeAllElements()))
            }
          });
          ye.prototype.openAgentList = function() {
            var e = this.chatContainer.getElementById("agentBar");
            "preChatForm" !== p.formHandler.currentForm && (this.scrollToBottom(), this.chatContainer.getElementById("greetingsContent") && (this.chatContainer.getElementById("greetingsContent").style.display = "none"), e.style.display = "block")
          }, ye.prototype.addProfileDetail = function(e) {
            var t, i, n, a = this.chatContainer.getElementById("agentProfileContainer");
            e.pi || 1 < p.agents.agentsCount ? (t = new he("profileDetail", null, null, null, this.chatContainer.documentRef), n = m["agent-profile-description"], t.template = L.escapeTemplateReplacement(n, [{
              placeholder: "__POSITION_CLASS__",
              textReplace: e.pst ? "agentName" : "agentNameCentered"
            }, {
              placeholder: "__POSITION__",
              textReplace: e.pst
            }, {
              placeholder: "__NAME__",
              textReplace: e.n
            }])) : (t = new he("profileDetailNoImage", null, {
              className: "noImageAgentProfileDetail"
            }, null, this.chatContainer.documentRef), i = e.pst ? "&nbsp-&nbsp" + e.pst : "", n = m["agent-profile-description-noimage"], t.template = L.escapeTemplateReplacement(n, [{
              placeholder: "__POSITION__",
              textReplace: i
            }, {
              placeholder: "__NAME__",
              textReplace: e.n
            }])), a.appendChild(t.buildView())
          }, ye.prototype.renderAgentWithPosition = function(e) {
            var t, i, n, a = (t = this.chatContainer).getElementById("agentProfileContainer");
            t && a && e && (e = R.agentProfiles[e], t = new he("profileDetail" + e.pid, null, {
              className: "agent-profile-detailed theme-background-color"
            }, null, t.documentRef), i = e.pst ? e.pst : "", n = m["agent-profile-detailed"], t.template = L.escapeTemplateReplacement(n, [{
              placeholder: "__POSITION__",
              textReplace: i
            }, {
              placeholder: "__NAME__",
              textReplace: e.n
            }]), a.appendChild(t.buildView()))
          }, ye.prototype.renderAgentHeader = function(e) {
            var t, i, n = "",
              a = this.chatContainer,
              r = a.getElementById("agentProfileContainer");
            a && r && e && ((i = (t = R.agentProfiles[e]).pi ? B.agentImgUrl + "/" + t.pi : "") && (n = "background-image : url('" + i + "'); background-position : 0px 0px;z-index: " + (7 - p.agents.agentsCount) + ";"), n += "box-shadow: 0px 0px 0px 1px " + H.headerTxtColor + ";", t = new he("profileImage-" + t.pid, n, {
              className: "alias-image theme-background-color"
            }, null, a.documentRef), r.appendChild(t.buildView()), this.renderAgentWithPosition(e), 1 < p.agents.agentsCount && (r.style.width = 30 * p.agents.agentsCount - 10 * (p.agents.agentsCount - 1) + "px"), -1 < this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && (1 === p.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "none"))
          }, ye.prototype.clearAgentHeader = function() {
            var e = this.chatContainer;
            e.getElementById("agentProfileContainer").innerHTML = "", e.getElementById("innerWrapper").className = "border-corner", e.getElementById("shortMessage").style.display = "block"
          }, ye.prototype.closeAgentList = function() {
            var e = this.chatContainer.getElementById("greetingsContent");
            this.chatContainer.getElementById("agentBar").style.display = "none", e && (L.hasClass(e, "no-content") ? this.chatContainer.getElementById("greetingsContent").style.display = "none" : this.chatContainer.getElementById("greetingsContent").style.display = "block")
          }, ye.prototype.calculateOwnerNameAndMessageTimeSizeAll = function() {
            var e = this.chatContainer.getElementById("chatWrapper"),
              t = null,
              i = null,
              n = null,
              a = null;
            [].forEach.call(e.getElementsByClassName("agentChatContainer"), function(e) {
              t = e.getElementsByClassName("messageOwnerName")[0], i = e.getElementsByClassName("messageTime")[0], a = e.getElementsByClassName("message")[0], n = e.getElementsByClassName("messageTimeContainer")[0], t && i && a && n && (1 < p.agents.agentsCount && a.offsetWidth < i.offsetWidth + t.offsetWidth ? (n.style.left = 45 + t.offsetWidth + "px", n.style.right = "auto") : (n.style.right = "0", n.style.left = "auto"))
            })
          }, ye.prototype.resetView = function() {}, ye.prototype.styleAgentBar = function() {}, ye.prototype.expandAgentList = function() {}, ye.prototype.hideWidget = function() {}, ye.prototype.showWidget = function() {}, ye.prototype.toggleWidget = function() {
            T && p.viewHandler.maximize()
          }, ye.prototype.popoutWidget = function() {
            T && p.viewHandler.popup()
          }, ye.prototype.handleIndicatorToggle = function() {}, ye.prototype.begin = function() {}, ye.prototype.getViewportDimensions = function(e) {
            var t, n = {};
            return e ? (e = c, t = document) : (e = i.container.elementReferrer, t = i.container.documentRef), void 0 !== e.innerWidth ? (n.height = e.innerHeight, n.width = e.innerWidth, n) : void 0 !== t.documentElement && void 0 !== t.documentElement.clientWidth && 0 !== t.documentElement.clientWidth ? (n.height = t.documentElement.clientHeight, n.width = t.documentElement.clientWidth, n) : (n.height = t.getElementsByTagName("body")[0].clientHeight, n.width = t.getElementsByTagName("body")[0].clientWidth, n)
          }, ye.prototype.getActualViewportDimensions = function() {
            var e = this.getViewportDimensions(!0);
            return {
              width: this.isVerticalScrollbar() ? e.width - this.getScrollerWidth() : e.width,
              height: this.isHorizontalScrollbar() ? e.height - this.getScrollerWidth() : e.height
            }
          }, ye.prototype.isVerticalScrollbar = function() {
            return this.getViewportDimensions(!0).height < document.body.scrollHeight
          }, ye.prototype.isHorizontalScrollbar = function() {
            var e = this.getViewportDimensions(!0).width;
            return document.documentElement && e < document.documentElement.scrollWidth || e < document.body.scrollWidth
          }, ye.prototype.getScrollerWidth = function() {
            var e, t = null,
              i = null;
            t = 0;
            return (t = document.createElement("div")).style.cssText = "position: absolute; top: -10000px; left: -10000px; width: 100px; height: 50px; overflow: hidden", (i = document.createElement("div")).style.cssText = "width: 100%; height: 200px", t.appendChild(i), document.body.appendChild(t), e = i.offsetWidth, t.style.overflow = "auto", t = i.offsetWidth, document.body.removeChild(document.body.lastChild), e - t
          }, ye.prototype.addSurveyHandlers = function(e) {
            var t, i = this;
            this.chatContainer && (t = this.chatContainer.getElementById(e), (t = L.getElementsByTagName(t, "input")).forEach(function(t, n) {
              t.id && i.chatContainer.attachUserEventListener("click", function() {
                i.lastRadioButton !== t.id && (i.lastRadioButton = t.id, p.chatHandler.sendMessage(t.value))
              }, t.id, "survey" + e + n + "click")
            }))
          }, ye.prototype.ifScrollbarDown = function() {
            var e, t, i;
            return !(!this.chatContainer || !this.chatContainer.elementReferrer) && (e = this.chatContainer.getElementById("chatContainer"), i = this.chatContainer.getElementById("chatPanel"), e && i ? p.formHandler.currentForm ? (i.style.display = "block", t = e.offsetHeight + 10, e = 30 > e.scrollHeight - (e.scrollTop + t), i.style.display = "none", e) : (t = e.offsetHeight + 10, 30 > e.scrollHeight - (e.scrollTop + t)) : void 0)
          }, ye.prototype.scrollToBottom = function() {
            if (this.chatContainer && this.chatContainer.elementReferrer) {
              var e = this.chatContainer.getElementById("chatContainer"),
                t = this.chatContainer.getElementById("chatPanel");
              if (e) {
                var i = e.style.display,
                  n = t.style.display;
                "none" === i && (e.style.display = "block"), "none" === n && (t.style.display = "block"), e.scrollTop = 1e8, "none" === i && (e.style.display = i), "none" === n && (t.style.display = n), -1 === this.chatContainer.getElementById("greetingsMainContainer").className.indexOf("minimize") && 0 !== e.scrollTop && this.toggleGreetingsView(e.scrollHeight < this.chatContainer.getElementById("chatWrapper").offsetHeight)
              }
            }
          }, ye.prototype.isChatScrollbar = function() {
            var e;
            if (this.chatContainer && this.chatContainer.elementReferrer && (e = this.chatContainer.getElementById("chatContainer"))) return e.scrollHeight > this.getViewportDimensions(H.isPopup).height - 139
          }, ye.prototype.addWaitTime = function() {
            var e, t, i;
            !p.chatHandler.agentHasMessaged && H.showWaitTime && (t = this.chatContainer.getElementById("greetingsContent"), (e = this.chatContainer.getElementById("greetingsWaitTime")) && t && (i = Math.ceil(B.waitTime / 6e4), i = p.languageParser.translate("chat", "messageQueuedText", {
              t: i,
              strongStart: "<b>",
              strongEnd: "</b>"
            }), e.innerHTML = i, e.style.display = "block", t.style.display = "block", this.waitTimeUpdater(!0)))
          }, ye.prototype.removeWaitTime = function() {
            var e, t;
            this.chatContainer && this.chatContainer.elementReferrer && (e = this.chatContainer.getElementById("greetingsWaitTime"), t = this.chatContainer.getElementById("greetingsContent"), e && t && (e.innerHTML = "", e.style.display = "none", L.hasClass(t, "no-content") && (t.style.display = "none")))
          }, ye.prototype.waitTimeUpdater = function(e) {
            var t, i, n = this;
            if (this.chatContainer && this.chatContainer.elementReferrer && (i = this.chatContainer.getElementById("greetingsWaitTime")) && !(6e4 >= B.waitTime)) {
              if (t = B.waitTime % 6e4 || 6e4, e) return setTimeout(function() {
                n.waitTimeUpdater()
              }, t);
              B.waitTime -= t, e = Math.ceil(B.waitTime / 6e4), e = p.languageParser.translate("chat", "messageQueuedText", {
                t: e,
                strongStart: "<b>",
                strongEnd: "</b>"
              }), i.innerHTML = e, setTimeout(function() {
                n.waitTimeUpdater()
              }, 6e4)
            }
          }, ye.prototype.appendAgentIsTypingElement = function(e) {
            var t, i, n = this.ifScrollbarDown(),
              a = R.agentProfiles[e];
            this.chatContainer && (i = a && a.pi ? B.agentImgUrl + "/" + a.pi : "", a.strongStart = "<b>", a.strongEnd = "</b>", t = m["agent-typing"], t = L.escapeTemplateReplacement(t, [{
              placeholder: "__MESSAGE_ID__",
              textReplace: e
            }, {
              placeholder: /__NAME__/gm,
              textReplace: a.n
            }, {
              placeholder: "__IMAGE_URL__",
              textReplace: i ? "url('" + i + "');" : "transparent;"
            }]), this.chatContainer.getElementById("agentTypingContainer").innerHTML += t, this.chatContainer.getElementById("agentTypingContainer").style.display = "block", n && this.scrollToBottom())
          }, ye.prototype.removeAgentTypingElement = function(e) {
            this.chatContainer && ((e = this.chatContainer.getElementById("agentTyping-" + e)) && e.parentNode.removeChild(e), this.chatContainer.getElementById("agentTypingContainer").style.display = "none")
          }, ye.prototype.changeRating = function(e) {
            var t = "c";
            this.chatContainer && (0 > e ? e = H.showEmoji() && void 0 !== ie ? ":thumbsdown_tone2:" : "&#128078;" : 0 < e ? e = H.showEmoji() && void 0 !== ie ? ":thumbsup_tone2:" : "&#128077;" : (e = p.languageParser.translate("chat", "remove_rate"), t = "n"), p.viewHandler.appendMessage({
              message: e,
              type: t,
              time: new Date,
              senderType: "v",
              ownerId: _.visitorId
            }))
          }, ye.prototype.notifiyDepartmentIsNotOnline = function(e, t) {
            var i, n, a = this.chatContainer;
            a && (i = a.getElementById("chatWrapper")) && (n = L.escapeTemplateReplacement(m.departmentOfflineNotification, [{
              placeholder: "__TITLE__",
              textReplace: x ? "<span>" + p.languageParser.translate("chat", "notificationTitle") + "</span>" : "<center><span>" + p.languageParser.translate("chat", "notificationTitle") + "</span></center>"
            }, {
              placeholder: "__MESSAGE__",
              textReplace: p.languageParser.translate("chat", "offline" === t ? "departmentIsOffline" : "departmentIsAway", {
                departmentName: e,
                strongStart: "<b>",
                strongEnd: "</b>"
              })
            }]), n = L.createElement(a.documentRef, "div", {
              id: "departmentOfflineNotification",
              className: "messageContainer"
            }, null, n), i.insertBefore(n, i.firstChild))
          }, ye.prototype.setDivider = function(e, t, i) {
            var n, a, r, o = this;
            !this.chatContainer.documentRef.getElementById("newMessageDivider") && (r = this.chatContainer.documentRef.getElementById("chatWrapper"), (a = new he("newMessageDivider")).template = L.escapeTemplateReplacement(t, [{
              placeholder: /__NEW_MESSAGES__/gm,
              textReplace: p.languageParser.translate("chat", "newMessages").toUpperCase()
            }]), a.buildView(), r.insertBefore(a.elementReferrer, i.elementReferrer), !L.chatElementInView(a.elementReferrer) && (p.viewHandler.isMaximized || H.isPopup || H.isEmbedded) && (n = this.chatContainer.documentRef.getElementById("newMessagesBar"))) && (n.className = "visible", p.eventHandler.listen(n, this.clickEvent, function() {
              o.scrollToSeeMessage(e), n.className = ""
            }, "newmessagedivider"))
          }, ye.prototype.removeDivider = function() {
            var e, t = this;
            clearTimeout(this.removeDividerTimeout), this.removeDividerTimeout = setTimeout(function() {
              (e = t.chatContainer.documentRef.getElementById("newMessageDivider")) && e.parentNode.removeChild(e)
            }, 1e3)
          }, ye.prototype.scrollToSeeMessage = function(e) {
            var t = this.chatContainer.documentRef.getElementById("chatContainer");
            e && t && (t.scrollTop = e.offsetTop - t.offsetHeight + 50, this.checkSeenMessageViewport())
          }, ye.prototype.checkUnseenMessages = function() {
            var e;
            if (!this.newMessageNotSeen && !this.unseenMessages.length) return !1;
            for (var t = 0; t < this.unseenMessages.length; t++) L.chatElementInView(this.unseenMessages[t]) && (this.unseenMessages.splice(t, 1), t--);
            (!this.unseenMessages.length || T && this.ifScrollbarDown()) && (this.newMessageNotSeen = !1, (e = this.chatContainer.documentRef.getElementById("newMessagesBar")) && setTimeout(function() {
              e.className = ""
            }, 250), this.removeDivider())
          }, ye.prototype.parseUploadedFile = function(e) {
            var t = "https://tawk.link/" + e.name,
              i = this,
              n = m["file-upload"],
              a = this.ifScrollbarDown();
            if (-1 !== ["jpeg", "png", "gif"].indexOf(e.type) && 2e6 >= e.size) {
              var r = new Image;
              r.onload = function() {
                var n = L.createElement(i.chatContainer.documentRef, "a", {
                    href: t,
                    target: "_blank"
                  }),
                  o = i.chatContainer.getElementById("placeholder-" + e.name),
                  s = null,
                  l = null;
                o && (n.appendChild(r), n.className = "clearfix", o.parentNode.insertBefore(n, o), o.parentNode.removeChild(o), !p.viewHandler.isMaximized && i.messagePreview && (s = L.createElement(i.messagePreview.container.documentRef, "a", {
                  href: t,
                  target: "_blank"
                }), (l = i.messagePreview.container.getElementById("placeholder-" + e.name)) && (s.appendChild(r), s.className = "clearfix", l.parentNode.insertBefore(s, l), l.parentNode.removeChild(l)), i.messagePreview.scrollToBottom()), setTimeout(function() {
                  c.requestAnimationFrame(function() {
                    a && i.scrollToBottom()
                  })
                }, 1e3 / 6))
              }, r.setAttribute("src", t), r.setAttribute("class", "uploaded-image"), n = L.escapeTemplateReplacement(n, [{
                placeholder: "__FILE_DISPLAY__",
                textReplace: '<div class="image-loader" id="placeholder-' + e.name + '">' + m.loader + "</div>"
              }])
            } else n = -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(e.mimeType) ? L.escapeTemplateReplacement(n, [{
              placeholder: "__FILE_DISPLAY__",
              textReplace: '<video width="auto" height="auto" controls style="display: block; max-width: 420px; width: 100%;"><source src="' + t + '" type="' + e.mimeType + '"></source></video>'
            }]) : -1 !== ["audio/mp3", "audio/ogg"].indexOf(e.mimeType) ? L.escapeTemplateReplacement(n, [{
              placeholder: "__FILE_DISPLAY__",
              textReplace: '<audio controls style="display: block; max-width : 220px;"><source src="' + t + '" type="' + e.mimeType + '"></source></audio>'
            }]) : m["file-upload-not-img-vid-audio"];
            return L.escapeTemplateReplacement(n, [{
              placeholder: "__FILE_NAME__",
              textReplace: e.fileName
            }, {
              placeholder: "__DOWNLOAD_URL__",
              textReplace: t
            }, {
              placeholder: "__DOWNLOAD_TEXT__",
              textReplace: p.languageParser.translate("chat", "downloadFile")
            }, {
              placeholder: "__FILE_SIZE__",
              textReplace: L.formatFileSize(e.size)
            }, {
              placeholder: "__FILE_TYPE__",
              textReplace: e.type
            }, {
              placeholder: "__DOWNLOAD_LABEL__",
              textReplace: p.languageParser.translate("chat", "download")
            }])
          }, ye.prototype.startUpload = function(e) {
            var t, i, n, a = this,
              r = m.fileUploadProgress,
              o = this.ifScrollbarDown();
            if (n = this.chatContainer.getElementById("fileInput"), t = e.name || e.fileName, (i = L.getElementsByClassName(a.chatContainer.elementReferrer, "upload-error")).length)
              for (var s = 0; s < i.length; s++) i[s].parentNode.removeChild(i[s]);
            p.fileUploadHandler.getUploadHandler(function(i) {
              var s;
              i.handle ? (s = i.handle, r = L.escapeTemplateReplacement(r, [{
                placeholder: "__HANDLE__",
                textReplace: s
              }, {
                placeholder: "__FILE_NAME__",
                textReplace: L.rawEncode(t)
              }, {
                placeholder: "__FILE_STATUS__",
                textReplace: p.languageParser.translate("chat", "uploading")
              }]), a.chatContainer.getElementById("chatWrapper").innerHTML += r, o && a.scrollToBottom(), p.fileUploadHandler.uploadFile(s, e, t, function(i, r) {
                n.value = "", i.success || a.handleUploadError(e, t, s, r)
              })) : (a.handleUploadError(e, t, s), n.value = "")
            })
          }, ye.prototype.handleUploadError = function(e, t, i, n) {
            var a = this.ifScrollbarDown(),
              r = this,
              o = document.createElement("a"),
              s = new he("uploadFailedNotification"),
              l = (l = (l = m.uploadFailedNotification).replace(/__UPLOAD_FAILED_LABEL__/, p.languageParser.translate("chat", "generalUploadErrorLabel"))).replace(/__UPLOAD_FAILED_MESSAGE__/, p.languageParser.translate("chat", "generalUploadError", {
                fileName: L.rawEncode(t)
              }));
            if (s.template = l, s.buildView(), e) {
              if (i) {
                if (!(t = this.chatContainer.getElementById("upload-" + i))) return;
                var c;
                if (t.parentNode.removeChild(t), e && (!n || "generalUploadError" === n)) o.innerHTML = p.languageParser.translate("chat", "tryAgain"), o.setAttribute("href", "javascript:void(0);"), o.setAttribute("id", "retry-" + i), s.elementReferrer.getElementsByClassName("uploadFailedRetryContainer")[0].appendChild(o), c = p.eventHandler.listen(o, this.clickEvent, function() {
                  p.eventHandler.removeEventHandler(o, this.clickEvent, c), s.elementReferrer.parentNode.removeChild(s.elementReferrer), r.startUpload(e)
                }, "retry-" + i)
              }
              this.chatContainer.getElementById("chatContainer").appendChild(s.elementReferrer), a && this.scrollToBottom()
            }
          }, ye.prototype.updateFileProgress = function(e) {
            var t = this.chatContainer.getElementById("upload-" + e.handle);
            e = e.progress / 100 * 360, t && (180 >= e ? (t.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(" + e + "deg)", t.getElementsByClassName("circle-progress-right")[0].style.display = "none", t.getElementsByClassName("circle-progress-clip")[0].style.display = "block") : (t.getElementsByClassName("circle-progress-left")[0].style.transform = "rotate(180deg)", t.getElementsByClassName("circle-progress-right")[0].style.transform = "rotate(" + e + "deg)", t.getElementsByClassName("circle-progress-right")[0].style.display = "block", t.getElementsByClassName("circle-progress-clip")[0].style.display = "none"))
          }, ye.prototype.fileUploaded = function(e) {
            (e = this.chatContainer.getElementById("upload-" + e)) && e.parentNode.removeChild(e)
          }, ye.prototype.retryUploadFile = function(e) {
            var t, i, n = this;
            this.retryUploadList[e] && this.startUpload(this.retryUploadList[e], function() {
              t = n.chatContainer.getElementById(e), (i = t.parentNode).removeChild(t), i.parentNode.removeChild(i), delete n.retryUploadList[e], Object.keys(n.retryUploadList).length || n.chatContainer.getElementById("maxFileNotificationContainer").classList.add("hidden"), t = null
            })
          }, ye.prototype.checkUploadFileWarning = function(e, t) {
            var i, n = this.chatContainer.getElementById("maxFileNotificationContainer"),
              a = this.chatContainer.getElementById("maxSizeNotificationContainer"),
              r = this.chatContainer.getElementById("maxFileSizeList"),
              o = this.chatContainer.getElementById("maxFileNumberList"),
              s = this;
            if (t.length) {
              i = "<ul>", this.retryUploadList = {};
              for (var l = 0; l < t.length; l++) this.retryUploadList["retry_upload_" + l] = t[l], i += "<li>" + t[l].name + ' <a id="retry_upload_' + l + '" class="actionRetry">' + p.languageParser.translate("notifications", "retry") + "</a></li>";
              for (o.innerHTML = i + "</ul>", i = L.getElementsByClassName(o, "actionRetry"), o = 0; o < i.length; o++) i[o].addEventListener(s.clickEvent, function() {
                this.classList.add("hidden"), s.retryUploadFile(this.id)
              });
              n.classList.remove("hidden")
            }
            if (e.length) {
              for (i = "<ul>", n = 0; n < e.length; n++) i += "<li>" + e[n].name + "</li>";
              r.innerHTML = i + "</ul>", a.classList.remove("hidden")
            }
            i && this.scrollToBottom()
          }, ye.prototype.applyWhiteLabelSettings = function() {
            var e, t, i;
            this.chatContainer && (e = this.chatContainer.documentRef.getElementById(this.tawktoLinkName), t = this.chatContainer.documentRef.getElementById(this.bottomContainerName), i = {
              id: this.tawktoLinkName,
              parentElem: t,
              siblingName: t.nextSibling ? t.nextSibling.id : null,
              grandParentName: t.parentNode.id
            }, H.whiteLabel() ? (i.url = H.whiteLabel().url || null, i.label = L.transformLabel(L.rawEncode(H.whiteLabel().label)) || null, i.textColor = H.whiteLabel().textColor || "#000000") : (i.url = "javascript:void(0);", i.label = m["default-branding"]), null === i.label ? ((e = this.chatContainer.documentRef.getElementById("contentContainer")).className += "no-branding", t.parentNode.removeChild(t)) : (L.insertRandomTagsBeforeAndAfter(t, t.parentNode, "div"), L.insertRandomTagsBeforeAndAfter(e, e.parentNode, "a"), L.applyWhiteLabelSettings(e, i)))
          }, ye.prototype.showCallRequest = function(e, t, i, n) {
            var a, r, o = this;
            a = m.incomingCallRequest;
            var s = (new Date).getTime();
            s = t - (s - (r = new Date(i).getTime())), i = {
              callId: e,
              ringTimeout: t,
              startedOn: i,
              caller: n,
              isMissed: null
            }, (r = this.chatContainer.getElementById("incoming-call")) || (t = this.ifScrollbarDown(), p.chatHandler.webrtcWin && !p.chatHandler.webrtcWin.closed ? p.chatHandler.webrtcWin.focus() : (r = (n = R.agentProfiles[R.profiles[n.urid]]) && n.pi ? B.agentImgUrl + "/" + n.pi : "default", a = (a = (a = a.replace(/__IMAGE_URL__/, r ? "url('" + r + "');" : "transparent;")).replace(/__INCOMING_CALL__/, p.languageParser.translate("chat", "incoming_call_message", {
              name: n.n
            }))).replace(/__ACCEPT_CALL__/, p.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, p.languageParser.translate("chat", "decline_call")), clearTimeout(this.incomingCallTimeout), (r = new he("incoming-call")).template = a, r.buildView(), n = (a = this.chatContainer.getElementById("chatContainer")).parentNode, a && n && (n.insertBefore(r.elementReferrer, a), a = this.chatContainer.getElementById("accept-call"), n = this.chatContainer.getElementById("decline-call"), t && this.scrollToBottom(), p.eventHandler.listen(a, this.clickEvent, function() {
              clearTimeout(o.incomingCallTimeout), L.getWebRTCToken(!1, !1, function() {
                o.removeCallRequest()
              })
            }, "acceptVideoCall"), p.eventHandler.listen(n, this.clickEvent, function() {
              clearTimeout(o.incomingCallTimeout), L.rejectCall(e, function() {
                o.removeCallRequest()
              })
            }, "declineVideoCall"), this.incomingCallTimeout = setTimeout(function() {
              o.removeCallRequest()
            }, s), H.isPopup || p.viewHandler.isMaximized || H.isEmbedded || (p.viewHandler.indicator.show(), p.viewHandler.messagePreview && p.viewHandler.messagePreview.show(p.viewHandler.indicator.unansweredMessages, null, i)), p.audioPlayer.play("chat_sound"))))
          }, ye.prototype.removeCallRequest = function() {
            var e = this.chatContainer.getElementById("incoming-call");
            e && e.parentNode.removeChild(e), this.messagePreview && this.messagePreview.incomingCallContainer && this.messagePreview.removeCallRequest()
          }, ye.prototype.subscribeCallUpdate = function(e, t) {
            var i, n, a, r, o, s, l, c = this,
              d = this.chatContainer.documentRef,
              h = this.callData[e],
              u = this.ifScrollbarDown();
            h ? i = h.callView : ((i = new he(e, null, {
              className: "webrtcCallContainer messageContainer clearfix"
            }, null, d)).template = L.escapeTemplateReplacement(m.callInfo, [{
              placeholder: "__LOADER__",
              textReplace: m.loader
            }]), i.buildView(), d.getElementById("chatWrapper").insertBefore(i.elementReferrer, d.getElementById("agentTypingContainer")), this.callData[e] = {
              callView: i
            }), n = L.getElementsByClassName(i.elementReferrer, "callLoader"), a = L.getElementsByClassName(i.elementReferrer, "callInfoContainer"), r = L.getElementsByClassName(i.elementReferrer, "callIconWrapper"), o = L.getElementsByClassName(i.elementReferrer, "callErrorContainer"), n && n.length && (n[0].style.display = "block"), o && o.length && (o[0].style.display = "none"), p.socketManager.sendToConnector("getCallStatus", {
              callId: e
            }, function(d, h) {
              n && n.length && (n[0].style.display = "none"), d ? (a && a.length && (a[0].style.display = "none"), o && o.length ? o[0].style.display = "block" : (l = m.callError.replace("__HEADER__", p.languageParser.translate("chat", "error_title")).replace("__MESSAGE__", p.languageParser.translate("chat", "call_error_load")).replace("__ACTION__", p.languageParser.translate("notifications", "retry")), (o = L.createElement(c.chatContainer.documentRef, "div", null, null, l)).className = "callErrorContainer", o.style.display = "block", i.elementReferrer.appendChild(o)), (s = L.getElementsByClassName(i.elementReferrer, "retry-load")) && s.length && p.eventHandler.listen(s[0], c.clickEvent, function() {
                c.subscribeCallUpdate(e, t)
              }, "retryCallLoad" + e)) : h.data.call.f && (a && a.length && (a[0].style.display = "block"), callIcon = h.data.call.f.vid ? '<span class="callIcon btn-icon icon-video-chat"></span>' : h.data.call.f.scrn ? '<span class="callIcon btn-icon icon-desktop-sharing"></span>' : '<span class="callIcon btn-icon icon-voice-chat"></span>', r && r.length && (r[0].innerHTML = callIcon), c.callData[e].ver = h.data.call.ver, u && c.scrollToBottom(), c.updateCallView(h.data.call, t))
            })
          }, ye.prototype.updateCallView = function(e, t) {
            var i, n, a, r, o, s = !!e.mssd;
            a = !!e.rjctd;
            var l = {};
            l = null;
            if (!(n = this.callData[e.clid])) return this.subscribeCallUpdate(e.clid);
            n.ver > e.ver || (o = this.ifScrollbarDown(), l = (n = n.callView).elementReferrer.getElementsByClassName("btn-icon")[0], callIconContainerEl = n.elementReferrer.getElementsByClassName("callIconContainer")[0], callIconContainerEl.style.backgroundColor = "#47ca2b", "ringing" === e.stts ? ("v" !== e.cllr.t && this.showCallRequest(e.clid, e.rt, e.so, e.cllr), i = p.languageParser.translate("chat", ("v" === e.cllr.t ? "visitor_" : "agent_") + "ringing")) : "in-progress" === e.stts ? (this.removeCallRequest(), i = p.languageParser.translate("chat", "ongoing_call")) : "completed" === e.stts && (r = L.parseChatTime(e.so), this.removeCallRequest(), e.f.vid || e.f.scrn || (l.style.transform = "rotate(135deg)"), callIconContainerEl.style.backgroundColor = "#e52f48", l = {
              callId: e.clid,
              ringTimeout: e.rt,
              startedOn: e.so,
              caller: e.cllr,
              isMissed: s
            }, t || !p.viewHandler.messagePreview || T || p.viewHandler.messagePreview.show(p.viewHandler.indicator.unansweredMessages, null, l), s || a ? (i = a ? p.languageParser.translate("chat", "rejected_call") : p.languageParser.translate("chat", "missed_" + ("v" === e.cllr.t ? "agent" : "visitor")), a = p.languageParser.translate("chat", "call_started_on", {
              startedOn: r
            })) : (a = L.getTimeDifference(e.so, e.eo), i = p.languageParser.translate("chat", "completed_call"), a = p.languageParser.translate("chat", "call_end_details", {
              startedOn: r,
              duration: a
            })), (r = L.getElementsByClassName(n.elementReferrer, "callEndDetails")) && r.length && (r[0].innerHTML = a, r[0].style.display = "block")), (n = L.getElementsByClassName(n.elementReferrer, "callTitle")) && n.length && (n[0].innerHTML = i, s && (n[0].className += " missed")), this.callData[e.clid].ver = e.ver, o && this.scrollToBottom())
          }, ye.prototype.closeMessagePreview = function(e) {
            e.ts && this.messagePreview && this.messagePreview.removeAllElements(e.ts)
          }, ye.prototype.toggleGreetingsView = function(e) {
            var t = this.chatContainer.getElementById("chatContainer"),
              i = this.chatContainer.getElementById("greetingsMainContainer"),
              n = Math.floor(t.scrollHeight),
              a = Math.floor(t.clientHeight);
            e || n === a || 5 >= n - a ? 0 === t.scrollTop && -1 !== i.className.indexOf("minimize") && (i.className = i.className.replace(" minimize", ""), this.chatContainer.getElementById("agentProfileContainer").className = "", 1 === p.agents.agentsCount && this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), this.chatContainer.getElementById("shortMessage").style.display = "block") : -1 === i.className.indexOf("minimize") && (i.className += " minimize", this.chatContainer.getElementById("agentProfileContainer").className = "show", 1 < p.agents.agentsCount ? this.chatContainer.getElementById("headerAccountStateContainer").classList.add("multiple-agent") : this.chatContainer.getElementById("headerAccountStateContainer").classList.remove("multiple-agent"), 0 < p.agents.agentsCount && (this.chatContainer.getElementById("shortMessage").style.display = "none"))
          }, ye.prototype.checkSeenMessageViewport = function() {
            var e, t, i = -1;
            if (0 !== this.unseenMessages.length) {
              for (var n = 0; n < this.unseenMessages.length; n++) {
                t = this.unseenMessages[n];
                var a = this.chatContainer.getElementById(t);
                if (a && L.chatElementInView(a) && (e = p.chatHandler.getMessageObjectById(t)), e && e.timeStamp > B.lastMessageTimestamp) {
                  i = n;
                  break
                }
              } - 1 !== i && (t = this.unseenMessages[this.unseenMessages.length - 1]) && (e = p.chatHandler.getMessageObjectById(t)) && this.updateLastTimestamp(e.timeStamp)
            }
          }, ye.prototype.updateLastTimestamp = function(e) {
            this.lastUpdateTimeout && clearTimeout(this.lastUpdateTimeout), this.clearUnseenNotification(), this.lastUpdateTimeout = setTimeout(function() {
              !(document.hidden || document.msHidden || document.webkitHidden) && e > B.lastMessageTimestamp && (B.lastMessageTimestamp = e, p.socketManager.sendToConnector("visitorChatSeen", {
                timestamp: e
              }, function() {}))
            }, 1e3)
          }, ye.prototype.clearUnseenNotification = function() {
            var e = this.chatContainer.documentRef.getElementById("newMessagesBar");
            this.unseenMessages = [], e && (e.className = ""), this.updateTotalUnseenMessages(), this.removeDivider()
          }, ye.prototype.updateTotalUnseenMessages = function() {
            this.totalUnseenMessages = this.unseenMessages.length, p.viewHandler.indicator && p.viewHandler.indicator.updateUnseenMessages(this.totalUnseenMessages)
          }, ye.prototype.scrollToFirstUnseen = function() {
            var e = this.chatContainer.documentRef.getElementById("newMessageDivider");
            e ? this.scrollToSeeMessage(e) : this.scrollToBottom()
          };
          var ve = function() {
            var e = this;
            this.currentForm = "", this.formView = null, this.forms = {
              nameForm: {
                id: "changeNameForm",
                title: "NameFormMessage",
                fields: [{
                  fieldName: "name",
                  valueMaxLength: 40,
                  languageKey: "Name",
                  getValue: p.visitorHandler.getNameValue,
                  validation: "isValidString",
                  type: "input",
                  isRequired: !0
                }],
                publish: "notifyNameChange",
                afterSave: p.visitorHandler.setNameFromForm,
                resize: "auto"
              },
              emailTranscriptForm: {
                id: "emailTranscriptForm",
                title: "EmailTranscriptFormMessage",
                fields: [{
                  fieldName: "name",
                  valueMaxLength: 40,
                  languageKey: "Name",
                  getValue: p.visitorHandler.getNameValue,
                  validation: "isValidString",
                  type: "input",
                  hiddenIE8: !0,
                  isRequired: !0
                }, {
                  fieldName: "transcriptEmail",
                  valueMaxLength: 150,
                  languageKey: "Email",
                  getValue: p.visitorHandler.getTranscriptEmailValue,
                  validation: "isValidEmail",
                  type: "input",
                  instantValidation: !1,
                  isRequired: !0
                }],
                saveFunc: "requestEmailTranscript",
                afterSave: p.visitorHandler.setTranscriptValue,
                resize: "auto"
              },
              offlineForm: {
                id: "offlineForm",
                getTitle: function() {
                  return L.transformGreetings(H.offlineOptions.text)
                },
                dynamicFields: null,
                saveFunc: "submitOfflineForm",
                dontCloseForm: !0,
                afterSave: e.showOfflineOverlay
              },
              preChatForm: {
                id: "preChatForm",
                getTitle: function() {
                  return H.prechatOptions.text ? L.transformGreetings(H.prechatOptions.text) : H.isEmbedded && "page" === $_Tawk_WidgetId && pageType && "profile" === pageType ? p.languageParser.translate("form", "PreChatFormMessageProfile") : p.languageParser.translate("form", "PreChatFormMessage")
                },
                dynamicFields: null,
                saveFunc: "submitPrechatForm",
                afterSave: e.handlePrechatForm,
                dontCloseForm: !1
              },
              inactivityOverlay: {
                id: "inactivityOverlay",
                overlayMessage: "inactive",
                otherEvent: {
                  eventName: "click",
                  elementName: "inactivityOverlay",
                  executedFunc: p.main.criticalRefresh
                }
              },
              maintenanceOverlay: {
                id: "maintenanceOverlay",
                overlayMessage: "maintenance"
              },
              endChatForm: {
                id: "endChatForm",
                publish: "endVisitorChat",
                afterSave: e.handleChatEnded,
                dontCloseForm: !1,
                resize: "auto",
                title: "EndChatTitle"
              },
              consentForm: {
                id: "consentForm",
                saveFunc: "submitConsent",
                getTitle: function() {
                  return L.transformGreetings(H.consentOption.text).replace(L.regLineBreaks, L.br)
                },
                dynamicFields: null,
                dontCloseForm: !0,
                otherEvent: {
                  eventName: "click",
                  elementName: "formDecline",
                  executedFunc: function() {
                    H.isPopup ? c.close() : B.chatWindowState("min")
                  }
                },
                customButtons: function() {
                  return H.consentOption.buttons
                }
              },
              restartChatForm: {
                id: "restartChatForm",
                dontCloseForm: !0,
                resize: "auto",
                title: "chatEnded",
                fields: [{
                  fieldName: "transcriptEmail",
                  valueMaxLength: 150,
                  languageKey: "Email",
                  getValue: p.visitorHandler.getTranscriptEmailValue,
                  validation: "isValidEmail",
                  type: "input",
                  instantValidation: !1,
                  isRequired: !0
                }],
                saveFunc: "requestEmailTranscript",
                afterSave: p.visitorHandler.setTranscriptValue
              }
            }, p.eventEmitter.on("localeChanged", function() {
              var t = e.currentForm;
              t && (e.closeForm(), e.openForm(t))
            }), _.displayName.subscribe(function(t) {
              !e.currentForm || "preChatForm" !== e.currentForm && "offlineForm" !== e.currentForm || e.formView.updateName(t)
            }), _.email.subscribe(function(t) {
              !e.currentForm || "preChatForm" !== e.currentForm && "offlineForm" !== e.currentForm || e.formView.updateEmail(t)
            }), B.prechatFormSubmitted.subscribe(function() {
              "preChatForm" === e.currentForm && e.closeForm()
            })
          };
          ve.prototype.openForm = function(e) {
            var t, n, a, r = this,
              o = p.viewHandler.chatContainer.getElementById("formContainer"),
              s = this.forms[e];
            if (s && this.currentForm !== e && o) {
              this.formView = null, "preChatForm" === e || "offlineForm" === e ? ((t = p.viewHandler.chatContainer.getElementById("contentContainer")) && (t.className += " form-opened "), this.formView = new ue(s, e), "offlineForm" === e && p.viewHandler.indicator && (p.viewHandler.indicator.pageTitleNotification.off(), p.viewHandler.indicator.hide()), i && i.clearTextareaResize()) : this.formView = new me(s), this.currentForm = e, this.formView.buildForm(), this.formView.buildView(p.viewHandler.chatContainer.documentRef), a = p.viewHandler.chatContainer.getElementById("greetingsMainContainer"), t = p.viewHandler.chatContainer.getElementById("greetingsText"), p.viewHandler.chatContainer.getElementById("chatPanel").style.display = "none", o.innerHTML = "", o.appendChild(this.formView.elementReferrer), o.style.display = "block", this.forms[e].getTitle && "consentForm" !== e && this.forms[e].getTitle() ? (t.innerHTML = this.forms[e].getTitle(), a.style.display = "block") : a.style.display = "none", "endChatForm" === e && (a.style.display = "block", p.viewHandler.chatContainer.getElementById("contentContainer").className = "chatEndVisible"), this.attachEventListeners(), this.formView.addPlaceholderHandler(), o.className = this.formView.isFormRequired ? "has-required" : "", p.eventHandler.listen(c, "resize", function() {
                r.resize()
              }, "windowresizeform"), L.redraw(o), "preChatForm" !== e && "offlineForm" !== e || p.eventEmitter.emit("formOpened");
              var l, d = 0,
                m = 0,
                u = 0;
              e = /Firefox/i.test(h.userAgent) ? "DOMMouseScroll" : "mousewheel", T && (e = "touchstart touchmove touchend"), n = p.viewHandler.chatContainer.getElementById("formFieldsContainer"), p.viewHandler.chatContainer.attachUserEventListener(e, function(e) {
                var t, i = Math.ceil(n.scrollHeight),
                  r = Math.ceil(n.clientHeight);
                if (l = e.originalEvent ? e.originalEvent : e, t = 0 < (u = l.detail ? -40 * l.detail : l.wheelDelta), "touchmove" === e.type ? m = e.changedTouches[0].clientY : "touchstart" === e.type ? d = e.touches[0].clientY : "touchend" === e.type && (t = d < m), 0 === n.scrollTop && -1 !== a.className.indexOf("minimize")) {
                  if (0 > u || d > m) return
                } else if (-1 === a.className.indexOf("minimize") && (d < m || 0 < u)) return;
                t || i === r || 5 >= i - r ? 0 === n.scrollTop && -1 !== a.className.indexOf("minimize") && (a.className = a.className.replace(" minimize", "")) : -1 === a.className.indexOf("minimize") && (a.className += " minimize")
              }, "formFieldsContainer", "formContainerScroll"), this.handleResizeofForm()
            }
          }, ve.prototype.handleResizeofForm = function(e) {
            if (!(T || H.isPopup || H.isEmbedded))
              if (!p.formHandler.currentForm || e) p.viewHandler.chatContainer.restyle("height", H.maximizedDimensions().height + "px !important");
              else {
                var t = p.viewHandler.chatContainer.getElementById("formContainer");
                e = p.viewHandler.chatContainer.getElementById("greetingsMainContainer");
                var i = 120;
                "offlineForm" === p.formHandler.currentForm && "block" === p.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display ? t = p.viewHandler.chatContainer.getElementById("offlineForm") : L.getElementsByClassName(t, "formFrame") ? t = L.getElementsByClassName(t, "formFrame")[0] : (t = L.getElementsByClassName(t, "formTable")[0], i = 60), e && (i += e.offsetHeight), (e = t.offsetHeight + i) >= H.maximizedDimensions().height && (e = H.maximizedDimensions().height), p.viewHandler.chatContainer.restyle("height", e + "px !important")
              }
          }, ve.prototype.showOfflineOverlay = function() {
            p.viewHandler.chatContainer.getElementById("formContainer").className += " success"
          }, ve.prototype.resize = function() {
            var e, t, i, n, a;
            null !== this.formView && T && (n = p.viewHandler.chatContainer.getElementById("formContainer"), i = p.viewHandler.chatContainer.getElementById("formInnerHeight"), a = p.viewHandler.chatContainer.getElementById("headerBoxWrapper"), n && (e = L.getElementsByClassName(n, "formMessageField"), t = L.getElementsByClassName(n, "longFormContainer"), e && e.length && t && t.length && (e = L.getElementsByClassName(n, "longFormBottomContainer")[0].clientHeight, t[0].style.height = p.viewHandler.iframeContainer.clientHeight - a.clientHeight - e + "px"), !i || "android" !== T && "android2" !== T && "android2.3" !== T || (i.style.overflow = "hidden", p.viewHandler.addOverflowScroll(i))))
          }, ve.prototype.closeForm = function() {
            var e, t;
            e = p.viewHandler.chatContainer.getElementById("formContainer");
            var i = p.viewHandler.chatContainer.getElementById("submitWrapper");
            t = p.viewHandler.chatContainer.getElementById("contentContainer");
            var n = "endChatForm" === this.currentForm,
              a = this.formView ? "preChatForm" === this.formView.elementId : null;
            (this.currentForm || a) && (t && (t.className = t.className.replace(/form-opened/g, "")), e && this.formView && (this.formView = null, this.currentForm = "", e.innerHTML = "", e.style.display = "none", e.className = "", e = p.viewHandler.chatContainer.getElementById("greetingsMainContainer"), t = p.viewHandler.chatContainer.getElementById("greetingsText"), e && (e.style.display = "block", t.innerHTML = ""), i && (i.className = "", i.innerHTML = ""), p.eventEmitter.emit("formClosed"), n && (p.viewHandler.chatContainer.getElementById("contentContainer").className = "", p.formHandler.openForm("emailTranscriptFormOnChatEnded")), this.handleResizeofForm()))
          }, ve.prototype.attachEventListeners = function() {
            var e, t, n = this,
              a = this.formView.formData,
              r = p.viewHandler.chatContainer.getElementById("formCancel"),
              o = p.viewHandler.chatContainer.getElementById("formSubmit"),
              s = p.viewHandler.chatContainer.getElementById("formCloseChat"),
              l = this.formView.formData.fields || [],
              c = "preChatForm" === n.formView.elementId,
              d = "offlineForm" === n.formView.elementId,
              h = "formcancelclick",
              m = "formsubmitclick";
            if (this.formView.formData.dynamicFields && (l = this.formView.formData.dynamicFields), c ? (r = p.viewHandler.chatContainer.getElementById("formCancel"), o = p.viewHandler.chatContainer.getElementById("formSubmit"), h = "formcancelclick-pc", m = "formsubmitclick-pc") : d && (o = p.viewHandler.chatContainer.getElementById("formSubmit"), e = p.viewHandler.chatContainer.getElementById("resendButton"), m = "formsubmitclick-ol"), t = p.viewHandler.chatContainer.getElementById("newChat"), r && p.eventHandler.listen(r, p.viewHandler.clickEvent, function(e) {
                if (c) return p.eventEmitter.emit(n.formView.formData.saveFunc, {}, function(e, t) {
                  n.handleAfterSave(e, {
                    serverData: t
                  })
                });
                n.closeForm(), p.eventHandler.cancelEvent(e)
              }, h), o && p.eventHandler.listen(o, p.viewHandler.clickEvent, function() {
                n.submitForm()
              }, m), s && p.eventHandler.listen(s, p.viewHandler.clickEvent, function(e) {
                i ? (i.container.hide(), p.viewHandler.isMaximized = !1, p.viewHandler.show()) : p.main.hideWidget(), p.eventHandler.cancelEvent(e)
              }, "formcloseclick"), e && p.eventHandler.listen(e, p.viewHandler.clickEvent, function() {
                d && (p.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "none", p.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "block"), p.viewHandler.chatContainer.getElementById("submitWrapper").className = p.viewHandler.chatContainer.getElementById("submitWrapper").className.replace("visible", ""), p.viewHandler.chatContainer.getElementById("formContainer").className = p.viewHandler.chatContainer.getElementById("formContainer").className.replace("success", "")
              }, "resendButtonClick"), t && p.eventHandler.listen(t, p.viewHandler.clickEvent, function(e) {
                i.chatStarted(), p.chatHandler.startNewChat(), p.eventHandler.cancelEvent(e)
              }, "newChat", "newChat"), l.forEach(function(e) {
                if (!e.disabled) {
                  var t = p.viewHandler.chatContainer.getElementById(e.fieldName + "Field"),
                    i = p.viewHandler.chatContainer.getElementById(e.fieldName + "FieldError"),
                    a = p.viewHandler.chatContainer.getElementById(e.fieldName + "FieldErrorIcon");
                  t && ("textarea" !== t.nodeName.toLowerCase() && p.eventHandler.listen(t, "keypress", function(e) {
                    13 === e.keyCode && n.submitForm()
                  }, "formkeypress" + e.fieldName), p.eventHandler.listen(t, "keydown", function(e) {
                    13 !== e.keyCode && setTimeout(function() {
                      "" !== i.innerHTML && (i.innerHTML = "", i.style.display = "none", a.style.display = "none", t.parentNode.className = t.parentNode.className.replace(" error", ""))
                    }, 1)
                  }, "formkeydown" + e.fieldName))
                }
              }), a.otherEvent) {
              var u = a.otherEvent;
              (e = p.viewHandler.chatContainer.getElementById(u.elementName)) && p.eventHandler.listen(e, u.eventName, function() {
                u.executedFunc()
              }, "formother")
            }
          }, ve.prototype.submitForm = function() {
            var e, t = this,
              i = p.viewHandler.chatContainer.getElementById("formSubmit"),
              n = p.viewHandler.chatContainer.getElementById("formCancel"),
              r = p.viewHandler.chatContainer.getElementById("formCloseChat"),
              o = p.viewHandler.chatContainer.getElementById("submitWrapper");
            if (null === (e = this.validateForm())) o.className = "";
            else {
              if (o.innerHTML = '<p id="submitWrapperMessage">' + p.languageParser.translate("form", "SubmittingProcess") + "</p>" + m.loader, o.className = "visible", i && i.setAttribute("disabled", "disabled"), n && n.setAttribute("disabled", "disabled"), r && r.setAttribute("disabled", "disabled"), t.handleResizeofForm(!0), this.formView.formData.publish) return p.socketManager.sendToConnector(this.formView.formData.publish, e, function(i, n) {
                e.serverData = n, t.handleAfterSave(i, e)
              });
              if (this.formView.formData.saveFunc) try {
                p.eventEmitter.emit(this.formView.formData.saveFunc, e, function(i, n) {
                  e.serverData = n, t.handleAfterSave(i, e)
                })
              } catch (i) {
                t.handleAfterSave(!0), a.handleError("Unable to emit form handler save func : " + this.formView.formData.saveFunc + " with data : " + JSON.stringify(e), i.fileName, i.lineNumber, i.stack)
              }
            }
          }, ve.prototype.handleAfterSave = function(e, t) {
            var i, n, a, r, o, s, l, c;
            if (p && p.formHandler.formView && p.formHandler.formView.formData) {
              if (i = p.formHandler.formView.formData.afterSave, n = p.viewHandler.chatContainer.getElementById("formSubmit"), a = p.viewHandler.chatContainer.getElementById("formCancel"), r = p.viewHandler.chatContainer.getElementById("formCloseChat"), o = p.viewHandler.chatContainer.getElementById("submitWrapper"), l = p.viewHandler.chatContainer.getElementById("transcriptEmailField"), s = "emailTranscriptFormOnChatEnded" === this.currentForm, c = "offlineForm" === p.formHandler.formView.elementId, o.className = "", o.innerHTML = "", n && n.removeAttribute("disabled"), a && a.removeAttribute("disabled"), r && r.removeAttribute("disabled"), e) return this.updateFormStatus(e);
              i && i(t), s ? l.value = "" : (c && (p.viewHandler.chatContainer.getElementById("overlayOfflineForm").style.display = "block", p.viewHandler.chatContainer.getElementById("formFieldsContainer").style.display = "none"), this.formView.formData.dontCloseForm ? this.updateFormStatus() : this.closeForm())
            }
          }, ve.prototype.updateFormStatus = function(e) {
            var t, i, n;
            p.viewHandler.chatContainer && (t = p.viewHandler.chatContainer.getElementById("formSavingStatus"), i = p.viewHandler.chatContainer.getElementById("savingStatus"), n = p.viewHandler.chatContainer.getElementById("submitWrapper"), t && i ? e ? (t.className = "errorMessage", i.innerHTML = p.languageParser.translate("form", "errorSaving"), (e = L.getElementsByClassName(p.viewHandler.chatContainer.documentRef, "longFormContainer")).length && (e[0].scrollTop = 999999999999)) : (t.className = "", i.innerHTML = p.languageParser.translate("form", "saved")) : this.currentForm && "offlineForm" === this.currentForm ? e ? (n.className = "visible", n.innerHTML = "<p>" + p.languageParser.translate("form", "OfflineMessageNotSent") + "</p>", setTimeout(function() {
              n.className = ""
            }, 3e3)) : (n.className = "", this.clearForm()) : n.className = "")
          }, ve.prototype.validateForm = function() {
            var e, t, i = {},
              n = 0,
              a = this;
            if (this.formView) return e = this.formView.formData.fields || [], this.formView.formData.dynamicFields && (e = this.formView.formData.dynamicFields), e.forEach(function(e) {
              var r, o, s, l, c;
              if ("additionalQuestion" === e.fieldName && e.getValue && L.isArray(e.getValue())) i.additionalQuestion = {}, e.getValue().forEach(function(t, n) {
                (o = p.viewHandler.chatContainer.getElementById(e.fieldName + n)) && (i.additionalQuestion[n] = t === o.value ? null : L.trim(o.value))
              });
              else if ("choice" === e.fieldType || "option" === e.fieldType) c = p.viewHandler.chatContainer.documentRef.getElementsByName(e.fieldName + "group"), s = p.viewHandler.chatContainer.getElementById(e.fieldName + "FieldError"), r = p.viewHandler.chatContainer.getElementById(e.fieldName + "Container"), formLabelEl = r.parentElement.parentElement.getElementsByClassName("form-field-label")[0], errorIconEl = p.viewHandler.chatContainer.getElementById(e.fieldName + "FieldErrorIcon"), c = "choice" === e.fieldType ? a.getSelectedCheckbox(c, e.isRequired) : a.getSelectedRadio(c, e.isRequired), s.innerHTML = "", s.style.display = "none", errorIconEl.style.display = "none", r.className = r.className.replace("error", ""), null === c ? (n++, l = !1, s.innerHTML = p.languageParser.translate("form", e.languageKey + "ErrorMessage"), s.style.display = "block", errorIconEl.style.display = "block", r.className += " error", formLabelEl.style.color = "#e52f48") : (formLabelEl.style.color = "#707070", i[e.fieldName] = c);
              else {
                if (o = p.viewHandler.chatContainer.getElementById(e.fieldName + "Field"), s = p.viewHandler.chatContainer.getElementById(e.fieldName + "FieldError"), errorIconEl = p.viewHandler.chatContainer.getElementById(e.fieldName + "FieldErrorIcon"), !o) return;
                r = e.placeholderText === o.value ? null : L.trim(o.value), l = a[e.validation](r, e.valueMaxLength, e.isRequired), s.innerHTML = "", s.style.display = "none", errorIconEl.style.display = "none", o.parentNode.className = o.parentNode.className.replace("error", ""), l ? i[e.fieldName] = r : (n++, s.innerHTML = p.languageParser.translate("form", e.languageKey + "ErrorMessage"), s.style.display = "block", errorIconEl.style.display = "block", o.parentNode.className += " error")
              }
              t || l || (t = o)
            }), 0 < n ? (t && ((e = p.viewHandler.chatContainer.getElementById("formContainer")).scrollTop = t.offsetTop), null) : i
          }, ve.prototype.isValidString = function(e, t, i) {
            return !i && !e || !(!e || !L.isString(e) || t && !(t && e.length <= t))
          }, ve.prototype.isValidEmail = function(e, t, i) {
            return !i && !e || !!(e && L.isEmail(e) && L.isString(e) && e.length <= t)
          }, ve.prototype.isValidDepartment = function(e, t, i) {
            var n;
            if (t = B.departments, !(i || e && "0" !== e)) return !0;
            for (n in t)
              if (t[n].did === e) return !0;
            return !1
          }, ve.prototype.getSelectedCheckbox = function(e, t) {
            for (var i = [], n = 0, a = e.length; n < a; n++) e[n].checked && i.push(e[n].value);
            return !i.length && t ? null : i
          }, ve.prototype.getSelectedRadio = function(e, t) {
            for (var i = "", n = 0, a = e.length; n < a; n++)
              if (e[n].checked) {
                i = e[n].value;
                break
              } return !i && t ? null : i
          }, ve.prototype.isValidPhone = function(e, t, i) {
            return !i && !e || ("+" === e.charAt(0) && (e = e.replace("+", "")), !!(e.length && 7 <= e.length && e.match(/[0-9]/im)))
          }, ve.prototype.handlePrechatForm = function(e) {
            (e = L.getDepartmentStatus(e.department)).isOnline || p.viewHandler.notifiyDepartmentIsNotOnline(e.name, e.status), p.formHandler.formView.formData.dontCloseForm = !1
          }, ve.prototype.handleChatEnded = function(e) {
            p.formHandler.formView.formData.dontCloseForm = !1, R.chatId = e.serverData.nextChatId, p.chatHandler.endChat(e.serverData.chatEndVersion), p.viewHandler.resetView()
          }, ve.prototype.clearForm = function() {
            var e = this.formView.formData.fields || [];
            this.formView.formData.dynamicFields && (e = this.formView.formData.dynamicFields), e.forEach(function(e, t) {
              var i;
              if ("name" !== e.fieldType && "email" !== e.fieldType && "department" !== e.fieldType)
                if ("choice" === e.fieldType || "option" === e.fieldType)
                  for (var n = 0, a = (i = p.viewHandler.chatContainer.documentRef.getElementsByName(e.fieldName + "group")).length; n < a; n++) i[n].checked = !1;
                else(i = p.viewHandler.chatContainer.getElementById(e.fieldName + "Field")) && (i.value = "", "choice" === e.fieldType || "option" === e.fieldType || S || (i.value = e.placeholderText))
            })
          };
          var we = TawkClass.extend({
            init: function() {
              var e = this,
                t = H.minimizedDimensions().width,
                i = H.minimizedDimensions().height;
              this.shown = this.inDocument = !1, this.indicatorWidth = this.indicatorHeight = 21, this.frameHeight = i + "px", this.frameWidth = t + "px", this.offsetX = H.widgetOffsetX, this.offsetY = H.widgetOffsetY, this.messagePreviewHeight = null, this.messagePreviewOffset = 25, H.isDesktopRectangle() ? (this.container = new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "1000001",
                position: "fixed",
                bottom: this.offsetY,
                display: "none",
                height: this.frameHeight,
                width: this.frameWidth,
                maxheight: this.frameHeight,
                maxwidth: this.frameWidth,
                minheight: "40px",
                minwidth: "126px"
              }), F, "iframe"), this.container.template = m["tawkchat-minified-iframe-element-rectangle"], this.chatIndicator = new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "1000003",
                margin: "0px",
                width: this.frameWidth,
                height: "37px",
                position: "fixed",
                display: "none",
                bottom: i + "px",
                left: "100%",
                maxheight: "37px",
                maxwidth: this.frameWidth,
                minheight: "37px",
                minwidth: this.frameWidth
              }), F, "iframe")) : (this.frameWidth = this.frameHeight = "60px", this.container = new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "1000001",
                position: "fixed",
                bottom: this.offsetY,
                display: "none",
                height: this.frameHeight,
                width: this.frameWidth,
                maxheight: this.frameHeight,
                maxwidth: this.frameWidth,
                minheight: this.frameHeight,
                minwidth: this.frameWidth,
                borderRadius: "50%"
              }), F, "iframe"), this.container.restyle("box-shadow", "rgba(0, 0, 0, 0.16) 0px 2px 10px 0px !important"), this.container.template = m["tawkchat-minified-iframe-element-round"], this.chatIndicator = new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "1000003",
                margin: "0px",
                width: "60px",
                height: "22px",
                position: "fixed",
                display: "none",
                bottom: "57px",
                left: "100%",
                maxheight: "22px",
                maxwidth: "60px",
                minheight: "22px",
                minwidth: "60px"
              }), F, "iframe")), H.isCenterPositioned() ? this.messagePreviewHeight = .5 * Math.max(document.documentElement.clientHeight, c.innerHeight || 0) + .5 * H.minimizedDimensions().width + 20 - this.messagePreviewOffset + "px" : this.messagePreviewHeight = Math.max(document.documentElement.clientHeight, c.innerHeight || 0) - (H.minimizedDimensions().height + this.offsetY) - this.messagePreviewOffset + "px", this.messagePreview = new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "999999",
                width: "378px",
                height: this.messagePreviewHeight,
                position: "fixed",
                display: "none",
                bottom: H.minimizedDimensions().height + this.offsetY + 10 + "px",
                right: this.offsetX + "px"
              }), F, "iframe"), this.bubbleContainer = new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "1000000",
                width: "146px",
                height: "85px",
                position: "fixed",
                display: "none",
                bottom: i + 2 + "px",
                right: "20px",
                maxheight: "85px",
                maxwidth: "146px",
                minheight: "85px",
                minwidth: "146px"
              }), F, "iframe"), H.minimizedDimensions.subscribe(function(t) {
                e.frameHeight = t.height + "px", e.frameWidth = t.width + "px", e.widgetDimensionsUpdated()
              }), B.pageStatus.subscribe(function(t) {
                e.updateGreetings(t), e.updateStatus(t)
              }), B.chatBubbleClosed.subscribe(function(t) {
                t && e.bubbleContainer && e.bubbleContainer.clear()
              }), H.chatBubble.subscribe(function() {
                e.bubbleSettingsChanged()
              }), H.isRTL.subscribe(function() {
                e.bubbleSettingsChanged()
              }), H.desktopWidget.subscribe(function() {
                t = H.minimizedDimensions().width, i = H.minimizedDimensions().height, e.offsetX = H.widgetOffsetX, e.offsetY = H.widgetOffsetY, H.isDesktopRectangle() ? (e.container.template = m["tawkchat-minified-iframe-element-rectangle"], e.chatIndicator.massRestyle(L.getGenericStyle({
                  zindex: "1000003",
                  margin: "0px",
                  width: e.indicatorWidth + "px",
                  height: e.indicatorHeight + "px",
                  position: "fixed",
                  display: "none",
                  bottom: e.offsetY + "px",
                  left: e.offsetY + "px",
                  maxheight: e.indicatorHeight + "px",
                  maxwidth: e.indicatorWidth + "px",
                  minheight: e.indicatorHeight + "px",
                  minwidth: e.indicatorWidth + "px"
                }))) : (e.container.template = m["tawkchat-minified-iframe-element-round"], e.chatIndicator.massRestyle(L.getGenericStyle({
                  zindex: "1000003",
                  margin: "0px",
                  width: "60px",
                  height: "22px",
                  position: "fixed",
                  display: "none",
                  bottom: "57px",
                  left: "100%",
                  maxheight: "22px",
                  maxwidth: "60px",
                  minheight: "22px",
                  minwidth: "60px"
                }))), e.container.massRestyle(L.getGenericStyle({
                  zindex: "1000001",
                  position: "fixed",
                  bottom: H.isDesktopRectangle() ? "0px" : e.offsetY,
                  display: "none",
                  height: e.frameHeight,
                  width: e.frameWidth,
                  maxheight: e.frameHeight,
                  maxwidth: e.frameWidth,
                  minheight: e.frameHeight,
                  minwidth: e.frameWidth
                })), e.bubbleContainer && e.bubbleContainer.elementReferrer && e.bubbleContainer.clear(), e.buildView(), e.updateStatus()
              }), H.showMessagePreview.subscribe(function() {
                H.showMessagePreview() ? e.initMessagePreviewContainer() : e.destroyMessagePreviewContainer()
              })
            },
            buildView: function() {
              var e;
              if (this.container && (p.MinifiedStyle = p.MinifiedStyle.replace(/#tawktoLink/g, "#" + p.viewHandler.tawktoLinkName), p.MinifiedStyle = p.MinifiedStyle.replace(/#bottomContainer/g, "#" + p.viewHandler.bottomContainerName), H.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer(), this.chatIndicator.buildIframe(p.MinifiedStyle + H.minStyle()), (e = L.getElementsByTagName(this.chatIndicator.documentRef, "body")[0]).innerHTML = m["tawkchat-chat-indicator"], this.container.buildIframe(p.MinifiedStyle + H.minStyle()), this.bubbleContainer && (H.chatBubble() && this.bubbleContainer.elementReferrer ? this.bubbleContainer.buildIframe(p.MinifiedStyle + H.minStyle()) : this.bubbleContainer.clear()), this.widgetDimensionsUpdated(), this.updateGreetings(), this.attachEvents(), this.inDocument = !0, H.isDesktopRectangle())) {
                e = this.container.getElementById("tawkchat-minified-container");
                var t = H.topCorner + "px ",
                  i = H.bottomCorner + "px ";
                e.style.borderRadius = t + t + i + i
              }
            },
            attachEvents: function() {
              this.container && (this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                "max" === B.chatWindowState() ? (p.viewHandler.userAction = !0, p.sessionHandler.notifyWindowState("min")) : "max" === H.onClickAction ? (p.viewHandler.userAction = !0, p.sessionHandler.notifyWindowState("max")) : p.viewHandler.popoutWidget(), p.eventHandler.cancelEvent(e)
              }, "tawkchat-minified-wrapper", "minifiedclick"), this.container.attachUserEventListener("mousedown", function(e) {
                p.viewHandler.lastFocusedElement = c.document.activeElement
              }, "tawkchat-minified-wrapper", "minifiedWidgetMouseDown"), this.attachBubbleEvents())
            },
            createCanvasChatBubble: function() {}
          });
          we.prototype.updateStatus = function(e) {
            var t;
            if (e || (e = B.pageStatus()), this.container && e) {
              (t = this.container.getElementById("tawkchat-status-icon")) && (t.className = e), (t = this.container.getElementById("tawk-minified-mobile-text")) && (t.innerHTML = "online" === e || "away" === e ? p.languageParser.translate("chat", "chat_text") : p.languageParser.translate("chat", "mail_text"));
              try {
                p.eventEmitter.emit("resizeIframeHeight")
              } catch (e) {
                a.handleError("Unable to emit resizeIframeHeight", e.fileName, e.lineNumber, e.stack)
              }
            }
          }, we.prototype.attachBubbleEvents = function() {
            this.bubbleContainer && this.bubbleContainer.attachUserEventListener(p.viewHandler.clickEvent, p.sessionHandler.closeBubble, "tawkchat-chat-bubble-close", "bubblecloseclick")
          }, we.prototype.hide = function() {
            this.container && (this.shown = !1, this.container.restyle("display", "none !important"), this.hideBubble())
          }, we.prototype.show = function() {
            this.container && (this.shown = !0, this.container.restyle("display", "block !important"), this.showBubble())
          }, we.prototype.widgetDimensionsUpdated = function() {
            this.container && (H.isDesktopRectangle() ? (minWidth = H.minimizedDimensions().width, minHeight = H.minimizedDimensions().height) : minHeight = minWidth = 60, this.container.massRestyle({
              height: minHeight + "px !important",
              "min-height": minHeight + "px !important",
              "max-height": minHeight + "px !important",
              width: minWidth + "px !important",
              "min-width": minWidth + "px !important",
              "max-width": minWidth + "px !important",
              "border-radius": H.isDesktopRectangle() ? "0 !important" : "50% !important"
            }), this.widgetPositonChanged(), this.bubbleSettingsChanged(), this.calculateIndicatorPositioning())
          }, we.prototype.bubbleSettingsChanged = function() {
            var e = H.chatBubble();
            if (!e && this.bubbleContainer || H.hideWidgetOnLoad) return this.bubbleContainer.clear();
            p && p.viewHandler && p.viewHandler.iframeContainer && p.viewHandler.iframeContainer.elementReferrer && (e && (e.type && "default" !== e.type || this.bubbleContainer.elementReferrer && this.bubbleContainer.insertCssFile(".bubble-text-color{color:" + (H.chatBubble() ? H.chatBubble().fgc : "#ffffff") + ";}", !0), e && (this.bubbleContainer || (this.bubbleContainer = new pe(L.getRandomName(), L.getGenericStyle({
              zindex: "1000000",
              width: "146px",
              height: "85px",
              position: "fixed",
              display: "none",
              bottom: minHeight + 2 + "px",
              right: "20px",
              maxheight: "85px",
              maxwidth: "146px",
              minheight: "85px",
              minwidth: "146px"
            }), F, "iframe")), this.bubbleContainer.elementReferrer || (p.viewHandler.iframeContainer.elementReferrer.appendChild(this.bubbleContainer.buildView(), !0), this.bubbleContainer.buildIframe(p.MinifiedStyle + H.minStyle())))), this.createBubble(), this.attachBubbleEvents())
          }, we.prototype.updateGreetings = function(e) {
            var t;
            e || (e = B.pageStatus()), this.container && e && (t = this.container.getElementById("short-message")) && (null !== (e = o.getShortMessage(e)) && (t.innerHTML = e))
          }, we.prototype.clear = function() {
            this.container.clear(), this.container = null
          }, we.prototype.widgetPositonChanged = function() {
            var e = {},
              t = this.offsetX,
              i = this.offsetY,
              n = t + "px";
            H.isCenterPositioned() ? (H.isDesktopRectangle() && (n = .5 * H.minimizedDimensions().height - .5 * H.minimizedDimensions().width + "px"), H.isRightPositioned() ? (bodyClassName = "center right", (e = H.isDesktopRectangle() ? L.getRotateStyling("-90", "49%") : L.getRotateStyling("0", "0")).right = n, e.left = "auto !important") : (bodyClassName = "center left", (e = H.isDesktopRectangle() ? L.getRotateStyling("90", "49%") : L.getRotateStyling("0", "0")).left = n, e.right = "auto !important"), H.isDesktopRectangle() || (e.transform = "unset"), e.top = "calc(50% - " + .5 * H.minimizedDimensions().height + "px) !important", e.bottom = "auto !important") : ((e = L.getRotateStyling("0", "0")).margin = "0px !important", H.isTopPositioned() ? (e.top = i + "px !important", e.bottom = "auto !important", bodyClassName = " top ") : (e.top = "auto !important", e.bottom = i + "px !important", bodyClassName = " bottom "), H.isRightPositioned() ? (bodyClassName += " right ", e.right = t + "px !important", e.left = "auto !important") : (bodyClassName += " left ", e.left = t + "px !important", e.right = "auto !important")), this.container.massRestyle(e)
          }, we.prototype.createBubble = function() {
            var e;
            this.bubbleContainer && this.bubbleContainer.elementReferrer && !H.hideWidget && H.chatBubble && !B.chatBubbleClosed() && (H.chatBubble().type && "default" !== H.chatBubble().type ? this.createImageBubble() : this.createDefaultBubble(), e = this.bubbleContainer.getElementById("tawkchat-chat-bubble-close"), this.bubbleContainer.attachUserEventListener("mouseover", function() {
              e && (e.style.visibility = "visible")
            }, null, "bubbleHover"), this.bubbleContainer.attachUserEventListener("mouseout", function() {
              e && (e.style.visibility = "hidden")
            }, null, "bubbleOut"), this.bubbleContainer.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
              "max" === H.onClickAction ? (p.viewHandler.userAction = !0, p.sessionHandler.notifyWindowState("max")) : p.viewHandler.popoutWidget(), p.eventHandler.cancelEvent(e)
            }, "bubble-image", "bubbleContainerClick"), p.viewHandler.isMaximized || this.showBubble())
          }, we.prototype.calculateBubblePositioning = function(e, t, i, n, a, r, o) {
            var s, l, c = H.minimizedDimensions().width,
              d = {};
            H.isCenterPositioned() ? (s = -.5 * t, l = n, 0 === r ? (c = "gallery" === H.chatBubble().type ? 0 : .5 * (c - t), i += "px !important") : "gallery" === H.chatBubble().type ? (l = c = 0, i = -1 * (.5 * (e - t) - n) + "px !important") : (c = .5 * (c - e), i = -1 * (.5 * (e - t) - i) + "px !important"), d = L.getRotateStyling(r, "49%"), H.isRightPositioned() ? (d.right = i, d.left = "auto !important") : (d.left = i, d.right = "auto !important"), d.top = "50% !important", d.bottom = "auto !important", r = s - c + l) : (d = L.getRotateStyling("0", "0"), r = "0", H.isTopPositioned() ? (d.top = n + "px !important", d.bottom = "auto !important", o += " top ") : (d.bottom = n + "px !important", d.top = "auto !important", o += " bottom "), H.isRightPositioned() ? (d.right = i + "px !important", d.left = "auto !important", o += " right ") : (d.left = i + "px !important", d.right = "auto !important", o += " left "));
            d.width = e + "px !important", d["max-width"] = e + "px !important", d["min-width"] = e + "px !important", d.height = t + "px !important", d["max-height"] = t + "px !important", d["min-height"] = t + "px !important", d["z-index"] = (0 === a ? "1000000" : "1000002") + " !important", d.margin = r + "px 0 0 0 !important", this.bubbleContainer.massRestyle(d), this.bubbleContainer.documentRef.body.className += o
          }, we.prototype.createDefaultBubble = function() {
            var e, t, i, n = 0;
            e = 0, e = !!document.createElement("canvas").getContext;
            var a = " default ";
            t = C && 9 > b, (e || t) && ((t = L.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0]).innerHTML = m["tawkchat-chat-bubble-canvas"], e && this.createCanvasChatBubble(), (e = this.bubbleContainer.getElementById("tawkchat-chat-bubble-text")).innerHTML = H.chatBubble().txt, e.style.color = H.chatBubble().fgc, H.isCenterPositioned() ? (H.isRightPositioned() ? (i = -90, n -= 10, H.isRTL() && (n = H.minimizedDimensions().width - 146)) : (i = 90, n = H.isDesktopRectangle() ? H.minimizedDimensions().width - 146 + 10 : 10, H.isRTL() && (n = 0)), e = H.minimizedDimensions().height + this.offsetX + 2) : (n = H.minimizedDimensions().height + this.offsetY + 2, e = !H.isRightPositioned() && !H.isRTL() || H.isRightPositioned() && H.isRTL() ? H.isDesktopRectangle() ? H.minimizedDimensions().width - 146 + 16 : 10 : 0), H.isRTL() && (a += " rtl-direction"), this.calculateBubblePositioning(146, 85, e, n, 0, i, a))
          }, we.prototype.createImageBubble = function() {
            var e, t, i, n;
            i = L.getElementsByTagName(this.bubbleContainer.documentRef, "body")[0];
            var a = H.chatBubble(),
              r = a.height + 16,
              o = 0;
            "gallery" === a.type ? (n = 22 === (t = parseInt(a.name, 10)), H.isDesktopRectangle() || (t += "-r"), H.isCenterPositioned() ? (t += H.isRightPositioned() ? "-cr" : "-cl", H.isDesktopRectangle()) : t = H.isTopPositioned() ? t + (H.isRightPositioned() ? "-tr" : "-tl") : t + (H.isRightPositioned() ? "-br" : "-bl"), e = " gallery ", t = "https://static-v.tawk.to/a-v3/images/bubbles/" + t + (n ? ".png" : ".svg"), H.isCenterPositioned() && 0 === a.rotate && (e += " center-right"), i.innerHTML = L.escapeTemplateReplacement(m["tawkchat-chat-bubble-gallery"], [{
              placeholder: "__IMAGE_SRC__",
              textReplace: t
            }, {
              placeholder: "__IMAGE_SIZE__",
              textReplace: "width:" + a.width + "px; height:" + a.height + "px;"
            }])) : (e = " upload ", t = "https://tawk.link/" + H.chatBubble().name, i.innerHTML = L.escapeTemplateReplacement(m["tawkchat-chat-bubble-upload"], [{
              placeholder: "__IMAGE_SRC__",
              textReplace: t
            }])), H.isTopPositioned() || H.isCenterPositioned() ? (o += a.topOffset, H.isCenterPositioned() && 0 === a.rotate && (o -= 16)) : o += a.bottomOffset, i = H.isRightPositioned() ? a.rightOffset : a.leftOffset, H.isCenterPositioned() && 0 !== a.rotate && (i = "gallery" === a.type ? i - 3 : i + 2), this.calculateBubblePositioning(a.width, r, i, o, a.zIndex, a.rotate, e)
          }, we.prototype.toggleBubble = function() {
            H.chatBubble && this.bubbleContainer && this.bubbleContainer.elementReferrer && (this.shown && "offline" !== B.pageStatus() ? this.bubbleContainer.restyle("display", "block !important") : this.bubbleContainer.restyle("display", "none !important"))
          }, we.prototype.agentBarChanged = function(e) {
            var t, i, n, a, r, o, s, l = {};
            H.hideWidget || (this.container.massRestyle({
              height: e + "px !important",
              "min-height": e + "px !important",
              "max-height": e + "px !important"
            }), o = C && 10 > b, closeIconWidth = 16, minWidth = H.minimizedDimensions().width, minHeight = H.minimizedDimensions().height, t = H.chatBubble(), i = e - minHeight, s = t.rotate, t.type && "default" !== t.type ? (n = t.topOffset, a = t.bottomOffset, bubbleWidth = t.width, bubbleContainerHeight = t.height + closeIconWidth, r = H.isRightPositioned() ? t.rightOffset : t.leftOffset) : (bubbleWidth = 146, bubbleContainerHeight = 85, H.isCenterPositioned() ? (r = minHeight + 2, s = H.isRightPositioned() ? -90 : 90) : (n = minHeight + 2, a = minHeight + 2, r = H.isRightPositioned() ? 0 : minWidth - bubbleWidth + closeIconWidth)), H.isCenterPositioned() ? (n = -.5 * minWidth + .5 * e + "px !important", r += i, i = 0 === s ? r + "px !important" : -1 * (.5 * (bubbleWidth - bubbleContainerHeight) - r) + "px !important", H.isRightPositioned() ? (this.container.restyle("right", n), l.right = i, o && (this.container.restyle("right", e - minWidth + "px !important"), 0 !== s && (l.right = r - (bubbleWidth - bubbleContainerHeight) + "px !important"))) : H.isCenterPositioned() || (this.container.restyle("left", n), l.left = i, o && (this.container.restyle("left", "0px !important"), 0 !== t.rotate && (l.left = r + "px !important"))), o ? this.container.restyle("margin", -.5 * minWidth + "px 0 0 0 !important") : this.container.restyle("margin", -.5 * e + "px 0 0 0 !important")) : H.isCenterPositioned() || (H.isTopPositioned() ? l.top = n + i + "px !important" : l.bottom = a + i + "px !important"), this.bubbleContainer && this.bubbleContainer.elementReferrer && H.chatBubble && !B.chatBubbleClosed() && this.bubbleContainer.massRestyle(l))
          }, we.prototype.calculateIndicatorPositioning = function() {
            var e = {},
              t = this.indicatorWidth,
              i = this.indicatorHeight,
              n = H.minimizedDimensions().width,
              a = H.minimizedDimensions().height,
              r = "";
            Math.max(document.documentElement.clientHeight, c.innerHeight || 0);
            var o, s = this.offsetX,
              l = this.offsetY;
            H.isCenterPositioned() ? (H.isRightPositioned() ? (e.right = l + a - i + 5 + "px !important", e.top = "calc(50% - " + .5 * n + "px) !important", e.left = "auto !important", o = "right", e.bottom = "auto !important", H.isDesktopRectangle() ? (e.right = l + a - i + 5 + "px !important", H.isRTL() && (e.bottom = "calc(50% - " + (.5 * n + 5) + "px) !important", e.top = "auto !important")) : (H.isRTL() ? e.right = a + "px !important" : e.right = s - 5 + "px !important", e.left = "auto !important")) : (e.right = "auto !important", o = "left", e.bottom = "auto !important", H.isDesktopRectangle() ? (e.top = "calc(50% - " + (.5 * n + 5) + "px) !important", e.left = l + a - i + 5 + "px !important", H.isRTL() || (e.top = "calc(50% + " + (.5 * n - .5 * i) + "px) !important")) : (e.top = "calc(50% - " + .5 * n + "px) !important", H.isRTL() ? e.left = s - 5 + "px !important" : e.left = s + n - t + 5 + "px !important", e.right = "auto !important")), r += " bottom " + o) : (H.isTopPositioned() ? (r += " top ", e.top = l + "px !important", e.bottom = "auto !important") : (r += " bottom ", e.top = "auto !important", H.isDesktopRectangle() ? e.bottom = a - s - 5 + "px !important" : e.bottom = a + l - H.widgetOffsetY + "px !important"), H.isRightPositioned() ? (r += " right ", H.isRTL() ? H.isDesktopRectangle() ? e.right = n - 5 + "px !important" : e.right = n + "px !important" : H.isDesktopRectangle() ? e.right = "1px !important" : e.right = s - 5 + "px !important", e.left = "auto !important") : (r += " left ", H.isRTL() ? e.left = s - 5 + "px !important" : e.left = s + n - t + 5 + "px !important", e.right = "auto !important")), e.width = t + "px !important", e["max-width"] = t + "px !important", e["min-width"] = t + "px !important", e.height = i + "px !important", e["max-height"] = i + "px !important", e["min-height"] = i + "px !important", this.chatIndicator.documentRef.body.className += " " + r + " round", this.chatIndicator.massRestyle(e)
          }, we.prototype.toggleOfflineIcon = function(e) {
            var t, i;
            this.container && !H.isDesktopRectangle() && (t = this.container.getElementById("maximizeChat")) && (e ? (e = "icon-chat", i = "icon-mail") : (e = "icon-mail", i = "icon-chat"), L.removeClass(t, e), L.addClass(t, i))
          }, we.prototype.showBubble = function() {
            this.bubbleContainer && "offline" !== B.pageStatus() && (!p.viewHandler.messagePreview || p.viewHandler.messagePreview && 1 > p.viewHandler.messagePreview.messagePreviewCount) && this.bubbleContainer.show()
          }, we.prototype.hideBubble = function() {
            this.bubbleContainer && this.bubbleContainer.hide()
          }, we.prototype.initMessagePreviewContainer = function() {
            var e, t;
            e = p.viewHandler.iframeContainer, this.messagePreview = new pe(L.getRandomName(), L.getGenericStyle({
              zindex: "999999",
              width: "378px",
              height: this.messagePreviewHeight,
              position: "fixed",
              display: "none",
              bottom: H.minimizedDimensions().height + this.offsetY + 10 + "px",
              right: this.offsetX + "px"
            }), F, "iframe"), p.viewHandler.messagePreview = new fe(this.messagePreview), this.messagePreview.elementReferrer || e.elementReferrer.appendChild(this.messagePreview.buildView(e.documentRef)), this.messagePreview.buildIframe(p.MinifiedStyle + H.minStyle()), e = L.getElementsByTagName(this.messagePreview.documentRef, "body")[0], t = (t = (t = m["tawkchat-message-preview"]).replace(/__TAWK_TO_LINK__/gm, p.viewHandler.tawktoLinkName)).replace(/__BOTTOM_CONTAINER__/gm, p.viewHandler.bottomContainerName), e.innerHTML = t, p.viewHandler.messagePreview.init()
          }, we.prototype.destroyMessagePreviewContainer = function() {
            this.messagePreview && this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef), this.messagePreview = null, p.viewHandler.messagePreview = null
          };
          var be = we.extend({
            init: function() {
              var e = this;
              this._super(this), p.eventEmitter.on("localeChanged", function() {
                e.setLinkTitle()
              }), H.isRTL.subscribe(function() {
                e.addClassName()
              })
            },
            buildView: function() {
              this._super(this), this.addClassName(), this.setLinkTitle()
            },
            attachEvents: function() {
              this.container && this._super()
            },
            createCanvasChatBubble: function() {
              var e, t, i, n, a, r, o, s, l, c, d, h, p, m, u, g, f, y = 5,
                v = H.chatBubble().bgc;
              (e = this.bubbleContainer.getElementById("tawkchat-chat-bubble-canvas")) && (H.chatPosition(), e.width = "146", e.height = "85", (a = e.getContext("2d")).clearRect(0, 0, 134, 63), a.fillStyle = v, H.isTopPositioned() ? (r = 68, p = (y = 16) + 3, h = 81, m = 6, u = !1, e = 1.1, t = 1.9, i = 1.6, n = .85) : (r = y = 6, p = y + 63 - 3, h = 55, m = 79, u = !0, e = .9, t = .1, i = .4, n = 1.15), H.isRTL() ? (f = 10, closeContainerStart = f - 4, o = f + 2, s = f + 5, l = f - 2, c = f - 2, d = f + 5, h = 81, H.isTopPositioned() ? (g = u, i = .2, n = 1.45) : (g = !u, i = .6, n = 1.85)) : (f = 2, closeContainerStart = f + 134 + 4, o = f + 134 - 2, s = f + 134 - 5, l = f + 134 + 2, c = f + 134 + 2, d = f + 134 - 5, g = u), a.beginPath(), a.moveTo(f + 8, y), a.lineTo(68, y), a.lineTo(f + 134 - 8, y), a.quadraticCurveTo(f + 134, y, f + 134, y + 8), a.lineTo(f + 134, y + 63 - 8), a.quadraticCurveTo(f + 134, y + 63, f + 134 - 8, y + 63), a.lineTo(f + 8, y + 63), a.quadraticCurveTo(f, y + 63, f, y + 63 - 8), a.lineTo(f, y + 8), a.quadraticCurveTo(f, y, f + 8, y), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.closePath(), a.fill(), a.beginPath(), a.arc(68, p, 10, Math.PI * e, Math.PI * t, u), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.fill(), H.isDesktopRectangle() || (H.isTopPositioned() && H.isLeftPositioned() ? h -= 30 : H.isBottomPositioned() && H.isRightPositioned() ? h += 30 : H.isCenterPositioned() && H.isRightPositioned() && (h += 30)), a.beginPath(), a.arc(h, m, 5, 0, 2 * Math.PI, !1), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.closePath(), a.fill(), a.beginPath(), a.arc(o, r + 5, 10, Math.PI * i, Math.PI * n, g), a.strokeStyle = "#e3e0e7", a.lineWidth = 2, a.stroke(), a.closePath(), a.fillStyle = v, a.fill(), a.beginPath(), a.moveTo(s, r + 1.5), a.lineTo(l, r + 8), a.closePath(), a.lineWidth = 2, a.strokeStyle = H.chatBubble().fgc, a.stroke(), a.beginPath(), a.moveTo(c, r + 1.5), a.lineTo(d, r + 8), a.closePath(), a.lineWidth = 2, a.strokeStyle = H.chatBubble().fgc, a.stroke())
            }
          });
          be.prototype.setLinkTitle = function() {
            var e = this.container.getElementById("minimizeChatMinifiedBtn"),
              t = this.container.getElementById("maximizeChat");
            this.container && (t && t.setAttribute("title", p.languageParser.translate("rollover", "maximize")), e && e.setAttribute("title", p.languageParser.translate("rollover", "minimize")))
          }, be.prototype.chatEnded = function() {
            var e = this.container.getElementById("tawkchat-minified-agent-container"),
              t = this.container.getElementById("tawkchat-status-text-container"),
              i = this.container.getElementById("tawkchat-minified-link-container");
            e && t && (e.innerHTML = "", e.style.display = "none", t.style.display = "block", i.style.marginTop = "0px")
          }, be.prototype.addClassName = function() {
            var e;
            e = H.isRTL() ? " rtl-direction" : " ltr-direction", this.container && this.container.elementReferrer && (this.container.getElementById("tawkchat-minified-wrapper").className = L.getContrast(H.headerTxtColor) + e), this.chatIndicator && this.chatIndicator.elementReferrer && (this.chatIndicator.getElementById("tawkchat-chat-indicator").className = e)
          };
          var Ce = TawkClass.extend({
            init: function(e, t) {
              var i = this;
              this.inDocument = !1, this.maxNumberFileUpload = 5, this.maxSizeFileUpload = 52428800, this.frameWidth = T ? "100%" : H.maximizedDimensions().width + "px", this.frameHeight = T ? "100%" : H.maximizedDimensions().height + "px", this.isActionsContainerNotifShown = this.isChatMenuOpen = !1, this.resizeThrottle = 0, this.container = H.isPopup ? new he(L.getRandomName(), "display: none;") : new pe(L.getRandomName(), L.getGenericStyle({
                zindex: "999999",
                position: "static",
                display: "none",
                height: this.frameHeight,
                width: this.frameWidth
              }), F, "iframe"), this.wrapper = new he("tawkchat-maximized-wrapper"), p.MaximizedStyle = p.MaximizedStyle.replace(/#tawktoLink/g, "#" + e), p.MaximizedStyle = p.MaximizedStyle.replace(/#bottomContainer/g, "#" + t), this.wrapper.template = this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, e), this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm, t), this.wrapper.template = this.wrapper.template.replace("__TOO_LONG_MESSAGE__", p.languageParser.translate("chat", "message_too_long")), H.isDesktopRectangle() || this.wrapper.addClass("roundWidget"), this.chatTextarea = new he("chatTextarea", null, null, "textarea"), this.container.addChildViews([this.wrapper]), H.maximizedDimensions.subscribe(function(e) {
                H.isEmbedded || H.isPopup || T || (i.frameHeight = e.height + "px", i.frameWidth = e.width + "px", i.container.restyle("height", i.frameHeight + " !important"), i.container.restyle("width", i.frameWidth + " !important"))
              }), B.pageStatus.subscribe(function(e) {
                i.updateGreetings(e)
              }), H.soundOn.subscribe(function() {
                i.toggleSound()
              }), p.eventEmitter.on("localeChanged", function() {
                i.container && i.updateGreetings()
              }), H.isRTL.subscribe(function() {
                i.addClassName()
              }), _.name.subscribe(function() {
                if (!L.isGeneratedName(_.name()))
                  for (var e = L.getElementsByClassName(i.container.documentRef, "messageOwnerName visitor"), t = 0; t < e.length; t++) e[t].style.display = "none"
              }), H.webRTCSettings.subscribe(function() {
                i.toggleWebRTCActions()
              }), H.desktopWidget.subscribe(function() {
                H.isDesktopRectangle() ? (i.wrapper.removeClass("roundWidget"), i.container.documentRef.getElementById("minimizeChat").className = "headerBoxLink", "br" === H.chatPosition() ? i.container.documentRef.body.className = "right" : i.container.documentRef.body.className = "left") : (i.wrapper.addClass("roundWidget"), i.container.documentRef.getElementById("minimizeChat").className = "notShown")
              }), H.showEmoji.subscribe(function() {
                i.toggleEmojiAction()
              }), H.showUploads.subscribe(function() {
                i.toggleUploadsAction()
              }), H.showRating.subscribe(function() {
                i.toggleRatingAction()
              })
            },
            buildView: function() {
              H.isPopup || this.container.buildIframe(p.MaximizedStyle + H.maxStyle()), this.container.documentRef.getElementById("textareaContainer").appendChild(this.chatTextarea.buildView(this.container.documentRef)), H.isEmbedded || H.isPopup || T ? this.restyleEmbed() : "br" == H.chatPosition() ? (L.removeClass(this.container.documentRef.body, "left"), L.addClass(this.container.documentRef.body, "right")) : (L.removeClass(this.container.documentRef.body, "right"), L.addClass(this.container.documentRef.body, "left")), this.addClassName(), this.updateGreetings(), this.toggleSound(), this.attachEvents(), this.toggleUploadsAction(), this.toggleRatingAction(), this.toggleEmojiAction(), L.redraw(this.container.elementReferrer), this.inDocument = !0, this.toggleWebRTCActions();
              var e = this.container.documentRef.getElementById("minimizeChat");
              H.isEmbedded || !H.isDesktopRectangle() || H.isPopup ? e.className = "notShown" : e.className = "headerBoxLink"
            },
            toggleUploadsAction: function() {
              var e = this,
                t = this.container.getElementById("uploadFileOption");
              t && (H.showUploads() ? (t.style.display = "block", this.container.attachUserEventListener("change", function(t) {
                p.eventHandler.cancelEvent(t), e.closeMenu();
                var i = [],
                  n = [];
                if ((t = p.eventHandler.getTargetElement(t).files) && t.length) {
                  for (var a = 0; a < t.length; a++) t[a].size > e.maxSizeFileUpload ? i.push(t[a]) : a >= e.maxNumberFileUpload ? n.push(t[a]) : p.viewHandler.startUpload(t[a]);
                  p.viewHandler.checkUploadFileWarning(i, n)
                }
              }, "fileInput", "fileInputChanged"), this.container.attachUserEventListener("dragover", function(t) {
                t.preventDefault(), t.stopPropagation && t.stopPropagation(), e.wrapper.addClass("drag-over")
              }, "innerWrapper", "textareaContainerDragOver"), t = function(t) {
                var i = e.container.getElementById("tawkchat-maximized-wrapper").getBoundingClientRect();
                (t.clientY < i.top || t.clientY >= i.bottom || t.clientX < i.left || t.clientX >= i.right) && (t.preventDefault(), t.stopPropagation && t.stopPropagation(), e.wrapper.removeClass("drag-over"))
              }, this.container.attachUserEventListener("dragleave", t, "innerWrapper", "textareaContainerDragLeave"), this.container.attachUserEventListener("dragend", t, "innerWrapper", "textareaContainerDragEnd"), this.container.attachUserEventListener("drop", function(t) {
                t.preventDefault(), t.stopPropagation && t.stopPropagation(), e.wrapper.removeClass("drag-over");
                var i = [],
                  n = [];
                if ((t = t.target.files || t.dataTransfer.files) && 0 !== t.length) {
                  for (var a = 0; a < t.length; a++) t[a].size > e.maxSizeFileUpload ? i.push(t[a]) : a >= e.maxNumberFileUpload ? n.push(t[a]) : p.viewHandler.startUpload(t[a]);
                  p.viewHandler.checkUploadFileWarning(i, n)
                }
              }, "innerWrapper", "textareaContainerDrop"), this.container.attachUserEventListener("paste", function(e) {
                var t, i;
                if ((t = (e.originalEvent || e).clipboardData) && (t = t.items) && t.length) {
                  for (var n = 0; n < t.length; n++)
                    if (-1 !== t[n].type.indexOf("image")) {
                      var a = t[n].getAsFile();
                      if (null !== a) {
                        (i = a).name = p.languageParser.translate("chat", "pasted_image_title", {
                          dateTime: L.parseChatTime(new Date)
                        });
                        break
                      }
                    } i && (p.viewHandler.startUpload(i), e.preventDefault())
                }
              }, "chatTextarea", "chatTextareaPaste")) : t.style.display = "none")
            },
            toggleRatingAction: function() {
              var e = this.container.getElementById("rateMainWrapper"),
                t = this.container.getElementById("rateContainer");
              e && t && (H.showRating() ? (e.style.display = "block", this.container.attachUserEventListener("mouseover", function() {
                t.style.display = "block"
              }, "rateMainWrapper", "rateMainWrapperOver"), this.container.attachUserEventListener("mouseout", function() {
                t.style.display = "none"
              }, "rateMainWrapper", "rateMainWrapperOut"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.chatHandler.changeRating(1), p.eventHandler.cancelEvent(e)
              }, "ratePositive", "ratepveclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.chatHandler.changeRating(-1), p.eventHandler.cancelEvent(e)
              }, "rateNegative", "ratenveclick")) : e.style.display = "none")
            },
            toggleEmojiAction: function() {
              var e = this,
                t = this.container.getElementById("textareaContainer"),
                i = this.container.getElementById("viewEmoji"),
                n = this.container.documentRef.getElementById("emoji-selection-container");
              H.showEmoji() ? (n.innerHTML = m.loader, i.style.display = "block", L.addClass(t, "with-emoji"), void 0 === ie && (this.container.documentRef, oe()), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, "active" === e.container.getElementById("viewEmoji").className ? e.closeEmojiSelection() : (e.container.getElementById("viewEmoji").className = "active", se(n), p.viewHandler.adjustEmojiContainerHeight())
              }, "viewEmoji", "viewEmojiClick"), this.wrapper.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                t = p.eventHandler.getTargetElement(t), n && ("function" == typeof n.contains ? n.contains(t) || e.closeEmojiSelection() : L.isDescendent(n, t) && e.closeEmojiSelection())
              }, null, "maxWidgetClick")) : (i.style.display = "none", L.removeClass(t, "with-emoji"))
            },
            attachEvents: function() {
              var e = this,
                t = this.container.documentRef.getElementById("tooLongMsgNotification"),
                i = L.hasWebRTC() ? null : "Browser not supported.";
              if (this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                  H.isPopup ? c.close() : (p.eventHandler.cancelEvent(t), p.sessionHandler.notifyWindowState("min"), e.closeMenu())
                }, "minimizeChat", "minlinkclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                  p.viewHandler.popoutWidget(), e.closeMenu()
                }, "popoutChat", "poplinkclick"), T) {
                var n = this.container.getElementById("chatTextarea");
                n && (G.initElement(n, function(i, n) {
                  5e3 >= n.length ? (t.className = "", e.isActionsContainerNotifShown = !1) : (t.className = "visible", e.isActionsContainerNotifShown = !0), e.toggleMobileSubmitButton(n), p.chatHandler.sendTextPreview(i)
                }), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                  p.eventHandler.cancelEvent(t), p.chatHandler.sendMessage(n.value), n.value = "", e.toggleMobileSubmitButton(""), e.resizeTextArea()
                }, "textareaSubmitButton", "submitclick"))
              } else this.chatTextarea.attachUserEventListener("keyup", function(i) {
                5e3 >= this.value.length ? (t.className = "", e.isActionsContainerNotifShown = !1) : (t.className = "visible", e.isActionsContainerNotifShown = !0), e.resizeTextArea()
              }, null, "chatinputkeyup"), this.chatTextarea.attachUserEventListener("keydown", function(i) {
                var n, a = e.container.getElementById("hidableActionsWrapper"),
                  r = e.container.getElementById("textareaContainer");
                if (e.resizeTextArea(), 13 === i.keyCode) {
                  if (5e3 < this.value.length) return void i.preventDefault();
                  t.className = "", e.isActionsContainerNotifShown = !1, p.viewHandler.scrollToBottom()
                }
                n = p.eventHandler.getTargetElement(i), setTimeout(function() {
                  n.value ? (a.style.display = "none", r.className = r.className.replace("additionalPadding", ""), L.removeClass(r, "additionalPadding")) : (a.style.display = "block", r.className += " additionalPadding ", L.addClass(r, "additionalPadding"))
                }, 0), p.chatHandler.sendTextPreview(i)
              }, null, "chatinputkeydown"), this.chatTextarea.attachUserEventListener("blur", function(t) {
                t = p.eventHandler.getTargetElement(t);
                var i = e.container.getElementById("hidableActionsWrapper");
                t.value || (i.style.display = "block", L.addClass(e.container.getElementById("textareaContainer"), "additionalPadding"))
              }, null, "chatinputblur");
              this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                var t = p.eventHandler.getTargetElement(e); - 1 !== t.className.indexOf("messageOwnerName") && -1 !== t.className.indexOf("visitor") && (p.formHandler.openForm("nameForm"), p.eventHandler.cancelEvent(e))
              }, "chatWrapper", "chatWrapperclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                p.formHandler.openForm("nameForm"), e.closeMenu(), p.eventHandler.cancelEvent(t)
              }, "changeName", "changenameclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                p.formHandler.openForm("emailTranscriptForm"), e.closeMenu(), p.eventHandler.cancelEvent(t)
              }, "emailTranscriptOption", "emailclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.eventHandler.cancelEvent(e), p.chatHandler.toggleSound()
              }, "soundOn", "soundonclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.eventHandler.cancelEvent(e), p.chatHandler.toggleSound()
              }, "soundOff", "soundoffclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.eventHandler.cancelEvent(e), p.viewHandler.expandAgentList(e)
              }, "expandableIcon", "expandclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                var e = p.languageParser.translate("chat", "video_call_error");
                L.getWebRTCToken(!0, !1, function(t) {
                  t && p.viewHandler.appendMessage({
                    senderType: "s",
                    message: i || e,
                    time: new Date,
                    type: "n",
                    isRtcError: !0,
                    rtcType: "video"
                  })
                })
              }, "videoCall", "videoCallClick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                var e = p.languageParser.translate("chat", "voice_call_error");
                L.getWebRTCToken(!1, !1, function(t) {
                  t && p.viewHandler.appendMessage({
                    senderType: "s",
                    message: i || e,
                    time: new Date,
                    type: "n",
                    isRtcError: !0,
                    rtcType: "voice"
                  })
                })
              }, "voiceCall", "voiceCallClick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                var t = e.container.getElementById("chatMenu"),
                  i = e.container.getElementById("chatMenuControls");
                e.chatMenuOpen ? (e.chatMenuOpen = !1, t.className = "", i.style.display = "none") : (e.chatMenuOpen = !0, t.className = "active", i.style.display = "block")
              }, "chatMenu", "chatMenuClick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                e.container.getElementById("chatMenu").className = "", e.closeMenu()
              }, "chatMenuControlsOverlay", "chatMenuControlsOverlayClick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                var e = p.languageParser.translate("chat", "screen_share_error");
                L.getWebRTCToken(!1, !0, function(t) {
                  t && p.viewHandler.appendMessage({
                    senderType: "s",
                    message: i || e,
                    time: new Date,
                    type: "n",
                    isRtcError: !0,
                    rtcType: "screen"
                  })
                })
              }, "screenShare", "screenShareClick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                e.container.getElementById("maxFileNotificationContainer").classList.add("hidden")
              }, "closeNumberNotification", "closeNumberNotification"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function() {
                e.container.getElementById("maxSizeNotificationContainer").classList.add("hidden")
              }, "closeSizeNotification", "closeSizeNotification"), this.container.attachUserEventListener("mousedown", function() {
                var e = c.document.activeElement;
                !e || "input" !== e.tagName.toLowerCase() && "textarea" !== e.tagName.toLowerCase() || (p.viewHandler.lastFocusedElement = e)
              }, "innerWrapper", "maximizedWidgetMouseDown"), this.container.attachUserEventListener("click", function(t) {
                t.preventDefault(), e.chatTextarea && e.chatTextarea.elementReferrer && e.chatTextarea.elementReferrer.focus()
              }, "textareaContainer", "textareaContainerClick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.formHandler.openForm("nameForm"), p.eventHandler.cancelEvent(e)
              }, "changeNameOption", "changenameclick"), this.wrapper.attachUserEventListener("keydown", function(t) {
                27 === t.keyCode && e.closeEmojiSelection()
              }, null, "maxWidgetKeydown");
              var a = function(t) {
                "cut" !== t.type && "paste" !== t.type || p.chatHandler.sendTextPreview(t), e.resizeTextArea()
              };
              this.chatTextarea.attachUserEventListener("keydown", a, null, "chatinputkeyupresize"), this.chatTextarea.attachUserEventListener("change", a, null, "chatinputchangeresize"), this.chatTextarea.attachUserEventListener("input", a, null, "chatinputinputresize"), this.chatTextarea.attachUserEventListener("paste", a, null, "chatinputpasteresize"), this.chatTextarea.attachUserEventListener("cut", a, null, "chatinputcutresize");
              var r, o, s, l, d = this.container.getElementById("greetingsMainContainer"),
                m = (a = /Firefox/i.test(h.userAgent) ? "DOMMouseScroll" : "mousewheel", this.container.getElementById("chatContainer"));
              T && (a = "touchstart touchmove touchend"), T && this.container.attachUserEventListener("scroll", e.chatViewScroll.bind(e), "chatContainer", "chatContainerScroll"), this.container.attachUserEventListener(a, function(t) {
                r = t.originalEvent ? t.originalEvent : t;
                var i = 0 < (l = r.detail ? -40 * r.detail : r.wheelDelta);
                if ("touchmove" === t.type ? s = t.changedTouches[0].clientY : "touchstart" === t.type ? o = t.touches[0].clientY : "touchend" === t.type ? i = o < s : T || e.chatViewScroll(t), 0 === m.scrollTop && -1 !== d.className.indexOf("minimize")) {
                  if (0 > l || o > s) return
                } else if (-1 === m.className.indexOf("minimize") && (o < s || 0 < l)) return;
                p.viewHandler.toggleGreetingsView(i)
              }, "chatPanel", "chatPanelScroll")
            },
            toggleSound: function() {
              var e = this.container.getElementById("soundOn"),
                t = this.container.getElementById("soundOff");
              e && t && (H.soundOn() ? (e.style.display = "block", t.style.display = "none") : (e.style.display = "none", t.style.display = "block"))
            }
          });
          Ce.prototype.chatViewScroll = function() {
            this.isScrolling && clearTimeout(this.isScrolling), this.isScrolling = setTimeout(function() {
              "max" === B.chatWindowState() && p.viewHandler.checkSeenMessageViewport()
            }, 1e3 / 66)
          }, Ce.prototype.hide = function() {
            this.container.restyle("display", "none !important")
          }, Ce.prototype.show = function() {
            this.container.restyle("display", "block !important"), p.viewHandler.checkSeenMessageViewport(), "consentForm" === p.formHandler.currentForm && this.wrapper.addClass("noMenu"), p.formHandler.handleResizeofForm()
          }, Ce.prototype.restyleEmbed = function() {
            var e = document.getElementById(l.embedded);
            if (this.wrapper.addClass("embedded"), (H.isPopup || H.isEmbedded) && (this.container.getElementById("popoutChat").outerHTML = ""), H.isEmbedded) return e ? p.viewHandler.onEmbeddedWindowResize() : void 0;
            H.isPopup && (this.wrapper.addClass("popout")), this.container.restyle("width", "100% !important"), this.container.restyle("height", "100% !important")
          }, Ce.prototype.updateGreetings = function(e) {
            var t;
            this.container.elementReferrer && ((t = this.container.getElementById("file-upload-drop-label")) && (t.innerHTML = p.languageParser.translate("chat", "dragDropText")), (e = e || B.pageStatus()) && (t = this.container.getElementById("shortMessage"), this.setChatGreetings(), t && this.chatTextarea && (null !== (e = o.getShortMessage(e)) && (t.innerHTML = e, H.onlineGreeting && (e = L.rawDecode(H.onlineGreeting.actionMessage), S ? this.chatTextarea.elementReferrer.placeholder = e : (this.chatTextarea.elementReferrer.value = e, L.togglePlaceholderText(this.chatTextarea.elementReferrer, e, "chatTextarea")))))))
          }, Ce.prototype.addClassName = function() {
            this.wrapper && this.wrapper.elementReferrer && (H.isRTL() ? (this.wrapper.addClass("rtl-direction"), this.wrapper.removeClass("ltr-direction")) : (this.wrapper.addClass("ltr-direction"), this.wrapper.removeClass("rtl-direction")))
          }, Ce.prototype.toggleEndChatOption = function(e) {
            var t = this.container.getElementById("endChatOption");
            t && (endChatEl = this.container.getElementById("endChat"), chatMenuEl = this.container.getElementById("chatMenuControls"), H.isEmbedded ? e ? (t.style.width = "220px", t.style.marginLeft = "-220px", chatMenuEl.style.right = "34px", endChatEl.style.display = "inline-block") : (t.style.width = "194px", t.style.marginLeft = "-194px", chatMenuEl.style.right = "10px", endChatEl.style.display = "none") : t.style.display = e ? "block" : "none")
          }, Ce.prototype.addEmojiToInput = function(e) {
            S || this.chatTextarea.elementReferrer.value !== L.rawDecode(H.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value = ""), this.chatTextarea.elementReferrer.value += e, this.chatTextarea.elementReferrer.focus(), this.closeEmojiSelection()
          }, Ce.prototype.closeEmojiSelection = function() {
            this.container.getElementById("viewEmoji").className = "", L.removeClass(this.container.getElementById("emoji-selection-container"), "showWithFade")
          }, Ce.prototype.resizeTextArea = function() {
            var e = this;
            clearTimeout(this.resizeThrottle), this.resizeThrottle = setTimeout(function() {
              var t = e.chatTextarea.elementReferrer.value,
                i = e.container.documentRef.getElementById("textareaContainer"),
                n = e.container.documentRef.getElementById("actionsContainer"),
                a = e.container.documentRef.getElementById("emoji-selection-container"),
                r = p.viewHandler.ifScrollbarDown(),
                o = T ? 18 : 20,
                s = e.container.documentRef.getElementById(p.viewHandler.bottomContainerName),
                l = t.split(/\r\n|\r|\n/).length || 1,
                c = l * o;
              1 === l && e.chatTextarea.elementReferrer.scrollHeight > e.chatTextarea.elementReferrer.clientHeight && (c = e.chatTextarea.elementReferrer.scrollHeight), t && c >= o ? (c = 150 < c ? 150 : c, this.isActionsContainerNotifShown && (c += 42, i.style.paddingBottom = "42px"), n.style.height = c - o + 46 + "px", r && p.viewHandler.scrollToBottom()) : n.style.height = "46px", a && (a.style.bottom = n.clientHeight + 2 + "px"), s && (s.style.bottom = n.clientHeight + 2 + "px"), clearTimeout(e.resizeThrottle)
            }, 100)
          }, Ce.prototype.clearTextareaResize = function() {
            var e = this.container.documentRef.getElementById("actionsContainer"),
              t = this.container.documentRef.getElementById("emoji-selection-container"),
              i = this.container.documentRef.getElementById(p.viewHandler.bottomContainerName);
            e && (e.style.height = "46px"), t && (t.style.bottom = "48px"), i && (i.style.bottom = "")
          }, Ce.prototype.toggleWebRTCActions = function() {
            if (this.inDocument) {
              var e = "none",
                t = "none",
                i = "none";
              H.webRTCSettings() && H.webRTCSettings().en && (e = H.webRTCSettings().v ? "inline-block" : "none", t = "inline-block", i = H.webRTCSettings().s ? "inline-block" : "none"), this.container.documentRef.getElementById("videoCall").style.display = e, this.container.documentRef.getElementById("voiceCall").style.display = t, this.container.documentRef.getElementById("screenShare").style.display = i
            }
          }, Ce.prototype.setChatGreetings = function(e) {
            var t, i = this.container.getElementById("greetingsText"),
              n = this.container.getElementById("greetingsContent");
            (t = B.pageStatus()) && n && i && (t = o.getLongMessage(t), e && !t ? (n.className += " no-content", n.style.display = "none") : (i.innerHTML = t.replace(L.regLineBreaks, L.br), 1 > p.agents.agentsCount && (n.style.display = "block"), e || (n.className = n.className.replace(" minimize", ""))))
          }, Ce.prototype.toggleMobileSubmitButton = function(e) {
            var t = this.container.getElementById("actionsContainer");
            e && "mobile-typing" !== t.className ? t.className = "mobile-typing" : e || "mobile-typing" !== t.className || (t.className = "")
          };
          var xe = Ce.extend({
            init: function() {
              var e = this;
              this._super.apply(this, arguments), p.eventEmitter.on("formClosed", function() {
                var t = e.container.getElementById("chatPanel");
                if (t)
                  if (H.showPreChatForm && !B.prechatFormSubmitted()) p.formHandler.openForm("preChatForm");
                  else if (e.setChatGreetings(!0), t.style.display = "block", e.wrapper.removeClass("noMenu"), p.viewHandler.checkSeenMessageViewport(), !T && e.container.getElementById("chatTextarea") && "max" === B.chatWindowState() && p.viewHandler.userAction) {
                  var i = L.getDocument(L.getDocument(c).getElementById(e.container.elementId));
                  if (i && i.getElementById("chatTextarea")) try {
                    setTimeout(function() {
                      i.getElementById("chatTextarea").focus()
                    }, 0)
                  } catch (e) {}
                }
              }), p.eventEmitter.on("formOpened", function() {
                e.container && e.container.getElementById("chatPanel") && ("preChatForm" !== p.formHandler.currentForm && "offlineForm" !== p.formHandler.currentForm && "consentForm" !== p.formHandler.currentForm || e.wrapper.addClass("noMenu"), e.container.getElementById("chatPanel").style.display = "none")
              }), p.eventEmitter.on("localeChanged", function() {
                e.insertText(), e.setLinkTitle(), e.toggleSound()
              })
            },
            buildView: function() {
              this._super(this), this.setLinkTitle(), this.insertText(), this.wrapper && this.wrapper.addClass(L.getContrast(H.headerTxtColor)), this.attachEvents()
            },
            insertText: function() {
              var e;
              if (this.container) {
                this.container.getElementById("tawkContent").innerHTML = p.languageParser.translate("overlay", "tawkContent"), this.container.getElementById("cancelTawkRedirect").innerHTML = p.languageParser.translate("form", "CancelButton"), this.container.getElementById("tawkRedirect").innerHTML = p.languageParser.translate("form", "visitButton"), this.container.getElementById("maxFileNotificationMessage").innerHTML = p.languageParser.translate("notifications", "maximum_file_upload_warning", {
                  strongStart: "<strong>",
                  strongEnd: "</strong>",
                  limitFileNumber: "5"
                }), this.container.getElementById("maxSizeNotificationMessage").innerHTML = p.languageParser.translate("notifications", "maximum_size_upload_warning", {
                  strongStart: "<strong>",
                  strongEnd: "</strong>",
                  limitFileSize: "50mb"
                }), this.container.getElementById("emailTranscriptOption").innerHTML = p.languageParser.translate("menu", "email_transcript"), this.container.getElementById("changeName").innerHTML = p.languageParser.translate("menu", "change_name"), this.container.getElementById("soundOn").innerHTML = p.languageParser.translate("menu", "sound_on"), this.container.getElementById("soundOff").innerHTML = p.languageParser.translate("menu", "sound_off"), this.container.getElementById("maxSizeNotifLabel").innerHTML = p.languageParser.translate("chat", "Warning"), this.container.getElementById("maxFileNotifLabel").innerHTML = p.languageParser.translate("chat", "Warning"), this.container.getElementById("endChat").innerHTML = p.languageParser.translate("menu", "end_chat_session"), H.isEmbedded || H.isPopup || (this.container.getElementById("popoutChat").innerHTML = p.languageParser.translate("menu", "popout_widget")), e = L.getElementsByClassName(this.container.getElementById("chatContainer"), "closeNotification");
                for (var t = 0; t < e.length; t++) e[t].innerHTML = p.languageParser.translate("form", "CloseButton");
                (e = this.container.getElementById("uploadFileOption")) && (L.isFileInputSupported ? e.setAttribute("title", p.languageParser.translate("rollover", "uploadFile")) : e.parentNode.removeChild(e))
              }
            },
            attachEvents: function() {
              var e = this,
                t = e.container.getElementById("tawkToContent");
              this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                H.whiteLabel() || (H.brandingRedirect() ? c.open("https://ref.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + I.pageId) : t.style.display = "block")
              }, p.viewHandler.tawktoLinkName, "tawktoclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                t.style.display = "none"
              }, "cancelTawkRedirect", "cancelTawkRedirectclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                t.style.display = "none", c.open("https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + I.pageId)
              }, "tawkRedirect", "tawkRedirectClicn"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(e) {
                p.formHandler.openForm("emailTranscriptForm"), p.eventHandler.cancelEvent(e)
              }, "emailTranscriptOption", "emailclick"), this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
                "preChatForm" !== p.formHandler.currentForm && "offlineForm" !== p.formHandler.currentForm && "consentForm" !== p.formHandler.currentForm && p.chatHandler.isVisitorEngaged() ? (p.formHandler.openForm("endChatForm"), p.eventHandler.cancelEvent(t)) : (p.eventHandler.cancelEvent(t), p.sessionHandler.notifyWindowState("min")), e.closeMenu()
              }, "endChat", "endChatclick"), this._super(this)
            }
          });
          xe.prototype.closeMenu = function() {
            this.chatMenuOpen && (this.chatMenuOpen = !1, this.container.getElementById("chatMenuControls").style.display = "none", this.container.getElementById("chatMenu").className = "")
          }, xe.prototype.setLinkTitle = function() {
            this.container && (this.container.getElementById("ratePositive").setAttribute("title", p.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title", p.languageParser.translate("rollover", "negativeRating")), this.container.getElementById("screenShare").setAttribute("title", p.languageParser.translate("rollover", "screenShare")), this.container.getElementById("voiceCall").setAttribute("title", p.languageParser.translate("rollover", "voiceCall")), this.container.getElementById("videoCall").setAttribute("title", p.languageParser.translate("rollover", "videoCall")), this.container.getElementById("chatMenu").setAttribute("title", p.languageParser.translate("rollover", "chatMenu")), this.container.getElementById("viewEmoji").setAttribute("title", p.languageParser.translate("chat", "insert_emoji")), H.isEmbedded || this.container.getElementById("minimizeChat").setAttribute("title", p.languageParser.translate("form", "CloseButton")))
          }, xe.prototype.chatEnded = function() {
            p.formHandler.openForm("restartChatForm")
          }, xe.prototype.chatStarted = function() {
            var e = this.container.getElementById("chatEnded"),
              t = this.container.getElementById("chatContainerWrapper"),
              i = this.container.getElementById("agentList"),
              n = this.container.getElementById("options");
            e && e.parentNode.removeChild(e), i && (i.innerHTML = ""), t && (t.className = t.className.replace("chat-ended", "")), n && (n.style.display = "block")
          };
          var Ee = ye.extend({
            init: function() {
              var e = this;
              if (this._super(this), this.startY = this.startX = 0, this.iframeXOffsetPosition = H.widgetOffsetX, this.iframeYOffsetPosition = H.widgetOffsetY, this.isMaximized = this.isWidgetAnimating = this.userAction = this.isWidgetPositionsUpdated = !1, this.overlayElement = new he(null, L.getGenericStyle({
                  left: "0px",
                  top: "0px",
                  zindex: "1000001",
                  cursor: "move",
                  width: "100%",
                  height: "100%",
                  display: "none",
                  float: "left"
                })), this.iframeContainerName = L.getRandomName(), this.iframeContainer = new he(this.iframeContainerName), this.resizeFromLeft = new he(L.getRandomName(), L.getGenericStyle({
                  height: "100%",
                  left: "0px",
                  top: "0px",
                  zindex: "999998",
                  cursor: "w-resize",
                  width: "6px"
                })), this.resizeFromRight = new he(L.getRandomName(), L.getGenericStyle({
                  height: "100%",
                  width: "6px",
                  right: "0px",
                  top: "0px",
                  zindex: "999998",
                  cursor: "e-resize"
                })), this.resizeFromTop = new he(L.getRandomName(), L.getGenericStyle({
                  height: "6px",
                  width: "100%",
                  right: "0px",
                  top: "0px",
                  zindex: "999998",
                  cursor: "n-resize"
                })), this.resizeFromBottom = new he(L.getRandomName(), L.getGenericStyle({
                  height: "6px",
                  width: "100%",
                  right: "0px",
                  bottom: "0px",
                  zindex: "999998",
                  cursor: "s-resize"
                })), this.resizeTopLeft = new he(L.getRandomName(), L.getGenericStyle({
                  height: "12px",
                  width: "12px",
                  left: "0px",
                  top: "0px",
                  zindex: "999998",
                  cursor: "nw-resize"
                })), this.resizeTopRight = new he(L.getRandomName(), L.getGenericStyle({
                  height: "12px",
                  width: "12px",
                  right: "0px",
                  top: "0px",
                  zindex: "999998",
                  cursor: "ne-resize"
                })), this.resizeBottomLeft = new he(L.getRandomName(), L.getGenericStyle({
                  height: "12px",
                  width: "12px",
                  bottom: "0px",
                  left: "0px",
                  zindex: "999998",
                  cursor: "sw-resize"
                })), this.resizeBottomRight = new he(L.getRandomName(), L.getGenericStyle({
                  height: "12px",
                  width: "12px",
                  bottom: "0px",
                  right: "0px",
                  zindex: "999999",
                  cursor: "se-resize"
                })), i = new xe(this.tawktoLinkName, this.bottomContainerName), this.iframeContainer.addChildViews([i.container]), !H.isPopup && !H.isEmbedded) {
                var t, a = [(n = new be).container, n.chatIndicator, n.bubbleContainer, this.overlayElement];
                H.isDesktopRectangle() ? t = [this.resizeFromLeft, this.resizeFromRight, this.resizeFromTop, this.resizeFromBottom, this.resizeTopLeft, this.resizeTopRight, this.resizeBottomLeft, this.resizeBottomRight] : (t = [], H.isRightPositioned() ? t.push(this.resizeFromLeft) : t.push(this.resizeFromRight), H.isCenterPositioned() ? (t = t.concat([this.resizeFromBottom, this.resizeFromTop]), t = H.isRightPositioned() ? t.concat([this.resizeTopLeft, this.resizeBottomLeft]) : t.concat([this.resizeTopRight, this.resizeBottomRight])) : H.isTopPositioned() ? (t.push(this.resizeFromBottom), H.isRightPositioned() ? t.push(this.resizeBottomLeft) : t.push(this.resizeBottomRight)) : (t.push(this.resizeFromTop), H.isRightPositioned() ? t.push(this.resizeTopLeft) : t.push(this.resizeTopRight))), this.iframeContainer.addChildViews(a.concat(t))
              }
              this.indicator = new ge(n ? n.chatIndicator : null), this.chatContainer = i.container, this.iframeContainer.buildView(), this.insertFrameStyle(), B.pageStatus.subscribe(function(t) {
                e.updateViewByStatus(t)
              }), R.rating.subscribe(function(t) {
                e.changeRating(t)
              }), H.isPopup || H.isEmbedded || B.chatWindowState.subscribe(function(t) {
                "max" === t ? e.maximizeWidget() : e.minimizeWidget()
              }), H.minStyle.subscribe(function() {
                n && n.container.elementReferrer && (n.container.insertCssFile(H.minStyle(), !0), n.container.documentRef.getElementById("tawkchat-minified-wrapper").className = L.getContrast(H.headerTxtColor))
              }), H.maxStyle.subscribe(function() {
                i && i.container.elementReferrer && (i.container.insertCssFile(H.maxStyle(), !0), i.wrapper.removeClass("black"), i.wrapper.removeClass("white"), i.wrapper.addClass(L.getContrast(H.headerTxtColor)))
              }), H.minimizedDimensions.subscribe(function() {
                var t = e.calculateWidgetPosition();
                e.iframeContainer.restyle("top", t.top), e.iframeContainer.restyle("bottom", t.bottom), e.iframeContainer.restyle("right", t.right), e.iframeContainer.restyle("left", t.left)
              })
            },
            insertFrameStyle: function() {
              var e, t, n, a = "";
              n = this.calculateWidgetPosition(), n = L.getGenericStyle({
                display: "none",
                bottom: n.bottom,
                top: n.top,
                right: n.right,
                left: n.left,
                minwidth: "0",
                minheight: "0",
                zindex: C && 9 > b ? "none" : "2000000000",
                position: "fixed"
              }), H.isTopPositioned() ? (e = "transform:translate(0, -30px);", t = "transform:translate(0, 0px);") : H.isCenterPositioned() ? (e = H.isRightPositioned() ? "transform:translate(30px,0);" : "transform:translate(-30px,0);", t = "transform:translate(0px,0);") : (e = "transform:translate(0, 30px);", t = "transform:translate(0, 0px);"), a = a + "@keyframes tawkMaxOpen" + (e = "{0%{opacity:0;" + e + ";}to{opacity:1;" + t + "}}") + "@-moz-keyframes tawkMaxOpen" + e, a += "@-webkit-keyframes tawkMaxOpen" + e, a += "#" + this.iframeContainerName + "{" + n + "}", a += "#" + i.container.elementId + ".open{animation : tawkMaxOpen .25s ease!important;}", this.iframeContainer.insertCssFile(a, !0)
            },
            show: function() {
              i.hide(), H.isEmbedded || H.isPopup ? (this.iframeContainer.restyle("position", "static"), this.iframeContainer.restyle("right", ""), this.iframeContainer.restyle("left", ""), this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%"), i.show()) : (this.isWidgetPositionsUpdated = !0, this.indicator.initIndicator(), p.main.maximize ? this.maximizeWidget() : this.minimizeWidget()), this.updateViewByStatus(B.pageStatus()), this._super()
            }
          });
          Ee.prototype.calculateWidgetPosition = function() {
            var e, t, i = Math.max((document.documentElement.clientHeight, (c.innerHeight || 0) / 2)) - H.maximizedDimensions().height / 2,
              n = {};
            return H.isDesktopRectangle() ? (e = 0, t = H.widgetOffsetX) : (t = 10, e = H.minimizedDimensions().height + H.widgetOffsetX + 10, t = H.isCenterPositioned() ? H.minimizedDimensions().width + H.widgetOffsetX + t : t), H.isTopPositioned() ? (n.bottom = "auto", n.top = e + "px") : (H.isCenterPositioned() ? n.bottom = H.isDesktopRectangle() ? "0px" : i + "px" : n.bottom = e + "px", n.top = "auto"), H.isRightPositioned() ? (n.right = t + "px", n.left = "auto") : (n.right = "auto", n.left = t + "px"), n
          }, Ee.prototype.maximizeWidget = function() {
            var e = null,
              t = null;
            if (n && (e = n.container.getElementById("minimizeChatMinifiedBtn"), t = n.container.getElementById("maximizeChat")), this.messagePreview && this.messagePreview.hide(), "max" !== H.onClickAction) return this.popoutWidget();
            if (H.hideWidgetOnOffline && "offline" === B.pageStatus() && p.formHandler.openForm(H.showConsentForm ? "consentForm" : "offlineForm"), (H.hideWidgetOnLoad || H.hideWidgetOnOffline) && this.showWidget(), i.show(), n && n.container && (H.isDesktopRectangle() ? n.hide() : (n.shown || n.show(), e && t && (L.removeClass(t, "appear"), L.addClass(t, "hide"), L.removeClass(e, "hide"), L.addClass(e, "appear")), n.hideBubble(), L.addClass(n.container.getElementById("tawkchat-minified-box"), "open"))), this.isMaximized = !0, l.triggerApiHandlers("onChatMaximized"), p.viewHandler.scrollToFirstUnseen(), !T && this.chatContainer.getElementById("chatTextarea") && "max" === B.chatWindowState() && !p.formHandler.currentForm && p.viewHandler.userAction) {
              var a = L.getDocument(L.getDocument(c).getElementById(i.container.elementId));
              if (a && a.getElementById("chatTextarea")) try {
                setTimeout(function() {
                  a.getElementById("chatTextarea").focus(), p.viewHandler.userAction = !1
                }, 0)
              } catch (e) {}
            }
            i.container.addClass("open")
          }, Ee.prototype.minimizeWidget = function() {
            var e, t = null,
              a = null;
            if (!H.isPopup && !H.isEmbedded) {
              if (i.hide(), this.isMaximized = !1, H.hideWidgetOnLoad) return this.hideWidget();
              n && (t = n.container.getElementById("minimizeChatMinifiedBtn"), a = n.container.getElementById("maximizeChat"), e = n.container.getElementById("tawkchat-minified-box")), t && a && (L.removeClass(a, "hide"), L.addClass(a, "appear"), L.removeClass(t, "appear"), L.addClass(t, "hide"), L.removeClass(e, "open")), n.show(), l.triggerApiHandlers("onChatMinimized"), this.indicator.initIndicator()
            }
          }, Ee.prototype.popoutWidget = function() {
            var e = "https://tawk.to/chat/" + I.pageId + "/";
            this.indicator.hide(), B.chatWindowState("min"), this.popoutWin && !this.popoutWin.closed && this.popoutWin.focus ? this.popoutWin.focus() : (H.whiteLabel() && H.whiteLabel().chatUrl && (e = H.whiteLabel().chatUrl + "/chat/"), this.popoutWin = c.open(e + $_Tawk_WidgetId + "?$_tawk_sk=" + B.sessionKey + "&$_tawk_tk=" + B.transferKey + "&v=" + B.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"))
          }, Ee.prototype.toggleWidget = function() {
            var e = B.chatWindowState();
            B.chatWindowState("min" === e ? "max" : "min")
          }, Ee.prototype.removeBubble = function() {
            try {
              p.eventEmitter.emit("notifyBubbleClosed")
            } catch (e) {
              a.handleError("Unable to emit notifyBubbleClosed", e.fileName, e.lineNumber, e.stack)
            }
          }, Ee.prototype.insertPopupStyle = function() {
            var e, t = document.getElementsByTagName("head")[0],
              i = document.createDocumentFragment(),
              n = L.createElement(document, "style", {
                type: "text/css"
              });
            e = document.createTextNode(p.ResetStyle + "" + p.MaximizedStyle + H.maxStyle()), n.styleSheet ? n.styleSheet.cssText = e.nodeValue : n.appendChild(e), i.appendChild(n), t.appendChild(i), document.body.className = "popup"
          }, Ee.prototype.begin = function() {
            var e, t = this,
              a = document.getElementById(l.embedded);
            p.main.started || (this.iframeContainer && (e = document.getElementById(this.iframeContainer.elementId)), e && e.parentNode.removeChild(e), H.isEmbedded && a ? (a.appendChild(this.iframeContainer.elementReferrer), p.eventHandler.listen(c, "resize", function() {
              t.onEmbeddedWindowResize()
            }, "windowresize")) : (document.body.appendChild(this.iframeContainer.elementReferrer), H.isPopup ? this.insertPopupStyle() : (n.buildView(), this.resizeFromLeft.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, "left")
            }, null, "resizeLeftfocus"), this.resizeFromRight.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, "right")
            }, null, "resizeRightfocus"), this.resizeFromTop.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, null, "top")
            }, null, "resizeTopfocus"), this.resizeFromBottom.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, null, "bottom")
            }, null, "resizeBottomfocus"), this.resizeTopLeft.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, "left", "top")
            }, null, "resizeTopLeftfocus"), this.resizeTopRight.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, "right", "top")
            }, null, "resizeTopRightfocus"), this.resizeBottomLeft.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, "left", "bottom")
            }, null, "resizeBottomLeftfocus"), this.resizeBottomRight.attachUserEventListener("mousedown", function(e) {
              t.onHeaderMouseDown(e, "right", "bottom")
            }, null, "resizeBottomRightfocus"), p.eventHandler.listen(c, "resize", function() {
              t.onWindowResize()
            }, "windowresize"))), i.buildView())
          }, Ee.prototype.hideWidget = function() {
            this.iframeContainer.hide(), l.triggerApiHandlers("onChatHidden")
          }, Ee.prototype.adjustEmojiContainerHeight = function() {
            var e = this.chatContainer.documentRef.getElementById("emoji-selection-container"),
              t = this.chatContainer.documentRef.getElementById("innerWrapper"),
              i = this.chatContainer.documentRef.getElementById("textareaWrapper"),
              n = this.chatContainer.documentRef.getElementById("headerBoxWrapper");
            185 > (t = t.clientHeight - i.clientHeight - n.clientHeight) && (e.style.height = t + "px")
          }, Ee.prototype.showWidget = function() {
            this.iframeContainer.isVisible || this.iframeContainer.show()
          }, Ee.prototype.toggleVisibility = function() {
            this.iframeContainer.toggle()
          }, Ee.prototype.isWidgetHidden = function() {
            return !this.iframeContainer.isVisible
          }, Ee.prototype.onHeaderMouseUp = function() {
            this.overlayElement.restyle("display", "none !important"), this.resetFrameDimensions(), this.isResized && (this.isResized = !1, p.socketManager.sendToConnector("notifyWidgetResized")), p.eventHandler.removeEventHandler(document, "mousemove", this.mouseMovehandler), p.eventHandler.removeEventHandler(document, "mouseup", this.mouseUpHandler)
          }, Ee.prototype.onHeaderMouseDown = function(e, t, n) {
            var a = this,
              r = p.eventHandler.getTargetElement(e);
            r.id !== this.resizeFromLeft.elementId && r.id !== this.resizeFromRight.elementId && r.id !== this.resizeFromTop.elementId && r.id !== this.resizeFromBottom.elementId && r.id !== this.resizeTopLeft.elementId && r.id !== this.resizeBottomLeft.elementId && r.id !== this.resizeTopRight.elementId && r.id !== this.resizeBottomRight.elementId || 1 === e.button && !c.event && !i.documentRef.event || 1 < e.button || (p.eventHandler.cancelEvent(e), this.overlayElement.restyle("display", "block !important"), e = this.getActualViewportDimensions(), this.actualViewPortWidth = e.width, this.actualViewPortHeight = e.height, this.startOffsetY = this.startOffsetX = 0, this.mouseMovehandler = p.eventHandler.listen(document, "mousemove", function(e) {
              a.setResizedDimensions(e, t, n), a.isResized = !0, a.redrawIE()
            }, "dragmove"), this.mouseUpHandler = p.eventHandler.listen(document, "mouseup", function(e) {
              a.onHeaderMouseUp(e)
            }, "dragleave"))
          }, Ee.prototype.redrawIE = function() {
            "explorer" === w && (this.iframeContainer.restyle("visibility", "hidden !important"), this.iframeContainer.restyle("visibility", "visible !important"))
          }, Ee.prototype.setResizedDimensions = function(e, t, i) {
            var n, a = this.iframeContainer.elementReferrer,
              r = this.ifScrollbarDown();
            if (this.isRight && void 0 !== this.isRight || (this.isRight = H.isRightPositioned()), this.startX = e.clientX, this.startY = e.clientY, t) {
              n = this.isRight ? "right" : "left";
              var o = parseInt(L.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
                s = parseInt(L.computedStyle(a, n).replace("px", ""), 10),
                l = 0 > (l = this.isRight ? this.actualViewPortWidth - e.clientX : e.clientX) ? 0 : l;
              this.isRight && "right" === t || !this.isRight && "left" === t ? 280 > (t = o - (l - s)) ? t = 280 : (l > this.actualViewPortWidth - t - 1 && (l = this.actualViewPortWidth - t - 1), a.style.cssText += ";" + n + ":" + l + "px !important", this.startOffsetX = t) : this.startOffsetX = t = this.isRight ? this.actualViewPortWidth - e.clientX - s : e.clientX - s, 280 <= t && 0 < this.actualViewPortWidth - (t + parseInt(L.computedStyle(a, n).replace("px", ""), 10)) && this.setWidth(t)
            }
            i && ("bottom" === i ? (i = parseInt(a.style.bottom.replace("px", "")), 0 > (e = this.actualViewPortHeight - e.clientY) && (e = 0), 330 > (i = parseInt(L.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10) - (e - i)) ? i = 330 : (e > this.actualViewPortHeight - i - 1 && (e = this.actualViewPortHeight - i - 1), a.style.cssText += ";bottom:" + e + "px !important", this.startOffsetY = i)) : (startOffsetY = parseInt(L.computedStyle(a, "bottom").replace("px", ""), 10), i = this.actualViewPortHeight - e.clientY - startOffsetY, this.startOffsetY = this.startY - startOffsetY), 330 <= i && 0 < this.actualViewPortHeight - (i + parseInt(L.computedStyle(a, "bottom").replace("px", ""), 10)) && this.setHeight(i), p.viewHandler.adjustEmojiContainerHeight()), r && this.scrollToBottom(), p && p.formHandler && p.formHandler.resize()
          }, Ee.prototype.setChatWindowXPosition = function(e) {
            var t, n, a = parseInt(i.frameWidth.replace("px", ""), 10);
            void 0 === this.isRight && (this.isRight = H.isRightPositioned()), this.isRight ? (t = "right", n = parseInt(this.iframeContainer.elementReferrer.style.right, 10)) : (t = "left", n = -parseInt(this.iframeContainer.elementReferrer.style.left, 10)), this.startOffsetX || (this.startOffsetX = e + n), 20 > (e = this.isRight ? this.startOffsetX - e : e - this.startOffsetX) ? e = 0 : 20 > this.actualViewPortWidth - (e + a) && (e = this.actualViewPortWidth - a), this.iframeContainer.restyle(t, e + "px !important")
          }, Ee.prototype.setChatWindowYPosition = function(e) {
            var t, n, a = parseInt(i.frameHeight.replace("px", ""), 10);
            "auto" === this.iframeContainer.elementReferrer.style.bottom ? (styleKey = "top", t = -parseInt(this.iframeContainer.elementReferrer.style.top, 10), n = !1) : (styleKey = "bottom", t = parseInt(this.iframeContainer.elementReferrer.style.bottom, 10), n = !0), this.startOffsetY || (this.startOffsetY = e + t), 20 > (e = n ? this.startOffsetY - e : e - this.startOffsetY) ? e = 0 : 20 > this.actualViewPortHeight - (e + a) && (e = this.actualViewPortHeight - a), this.iframeContainer.restyle(styleKey, e + "px !important")
          }, Ee.prototype.onWindowResize = function() {
            var e = this;
            clearTimeout(this.resizeTimeout), this.wasScrollbarDown = this.ifScrollbarDown(), this.resizeTimeout = setTimeout(function() {
              e.onWindowResizeTimeout()
            }, 100)
          }, Ee.prototype.onWindowResizeTimeout = function() {
            var e = (t = this.getActualViewportDimensions()).width,
              t = t.height,
              n = this.iframeContainer.elementReferrer,
              a = this.isBottom ? parseInt(n.style.bottom.replace("px", ""), 10) : parseInt(n.style.top.replace("px", ""), 10),
              r = this.isRight ? parseInt(n.style.right.replace("px", ""), 10) : parseInt(n.style.left.replace("px", ""), 10),
              o = parseInt(i.frameWidth.replace("px", ""), 10),
              s = parseInt(i.frameHeight.replace("px", ""), 10);
            o + r > e && (0 > (r = e - o) && (o += r, r = 0, this.setWidth(o)), this.isRight ? n.style.right = r + "px" : n.style.left = r + "px"), s + a > t && (0 > (a = t - s) && (s += a, a = 0, this.setHeight(s)), this.isBottom ? n.style.bottom = a + "px" : n.style.top = a + "px"), this.wasScrollbarDown && this.scrollToBottom(), this.resetFrameDimensions()
          }, Ee.prototype.setWidth = function(e) {
            (!e || 300 > e) && (e = 300), this.chatContainer.restyle("width", e + "px !important")
          }, Ee.prototype.setHeight = function(e) {
            (!e || 350 > e) && (e = 350), this.chatContainer.restyle("height", e + "px !important")
          }, Ee.prototype.onEmbeddedWindowResize = function() {
            null === this.isWidgetElementDimensionsNull && this.setWidgetElementDimensions(), this.isWidgetElementDimensionsNull ? (this.setWidth(H.maximizedDimensions().width), this.setHeight(H.maximizedDimensions().height)) : (this.chatContainer.restyle("width", "100%"), this.chatContainer.restyle("height", "100%"))
          }, Ee.prototype.setWidgetElementDimensions = function() {
            var e = document.getElementById(l.embedded);
            this.isWidgetElementDimensionsNull = 280 > e.clientWidth || 330 > e.clientHeight
          }, Ee.prototype.resetFrameDimensions = function() {
            var e = parseInt(L.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
              t = parseInt(L.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10);
            i.frameWidth = e + "px", i.frameHeight = t + "px"
          }, Ee.prototype.isWidgetElementDimensionsNull = null, Ee.prototype.styleAgentBar = function() {
            var e, t = this.chatContainer;
            if (t) {
              e = t.getElementById("agentWrapper");
              try {
                0 < p.agents.agentsCount ? (t.getElementById("headerAccountStateContainer").style.display = "none", e.style.display = "block") : (t.getElementById("headerAccountStateContainer").style.display = "block", e.style.display = "none")
              } catch (e) {
                a.handleError("headerAccountStateContainer is null", e.fileName, e.lineNumber, e.stack)
              }
            }
          }, Ee.prototype.expandAgentList = function(e) {
            var t, i;
            (i = this.chatContainer) && (t = i.getElementById("agentBar"), i = i.getElementById("expandableLink"), 1 === e.button && !c.event || 1 < e.button || (-1 === t.className.indexOf("expanded") ? (t.className += " expanded", i.className = "expanded") : (t.className = t.className.replace("expanded", ""), i.className = ""), this.styleAgentBar()))
          }, Ee.prototype.resetView = function() {
            var e, t, i, n, a;
            (n = this.chatContainer) && (e = n.getElementById("chatWrapper"), i = n.getElementById("agentList"), a = n.getElementById("agentBar"), n = n.getElementById("expandableLink"), e && (t = e.lastChild, e.innerHTML = "", e.appendChild(t)), i && (i.innerHTML = ""), a && (e = a.parentNode.childNodes[0], a.className = "", e && -1 !== e.className.indexOf("agentWrapper") && e.parentNode.removeChild(e)), n && (n.style.visibility = "hidden", n.className = ""), this.show())
          }, Ee.prototype.handleIndicatorToggle = function() {
            n && n.container && n.chatIndicator && (n.chatIndicator.getElementById("tawkchat-chat-indicator").style.visibility = "visible")
          };
          var Te = Ee.extend({
              init: function() {
                this._super(this)
              },
              changeDragElementSize: function(e) {
                this.dragElement.restyle(H.isRTL() ? "right" : "left", e + "px !important")
              },
              handleEndChat: function() {
                n && n.container && n.chatEnded(), p.viewHandler.clearAgentHeader(), H.isEmbedded || (H.isPopup ? (p.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function() {
                  1 < c.history.length ? c.history.back() : c.close()
                }, 200)) : (p.sessionHandler.notifyWindowState("min"), i.chatEnded()))
              },
              handleRestartChat: function() {
                p.formHandler.closeForm(), i.chatStarted()
              }
            }),
            ke = function() {
              var e = this,
                t = {
                  width: e.minifiedBoxWidth + "px",
                  height: e.minifiedBoxHeight + "px",
                  minwidth: e.minifiedBoxWidth + "px",
                  minheight: e.minifiedBoxHeight + "px",
                  maxwidth: e.minifiedBoxWidth + "px",
                  maxheight: e.minifiedBoxHeight + "px",
                  zindex: "1000000",
                  display: "none"
                };
              this.setDimensions(), this.clickToPopout = this.setPopoutHref = this.isMoving = !1, this.offsetY = H.widgetOffsetY, this.clickEvent = "touchend", H.isCenterPositioned() && "rectangle" === H.mobileWidget() && (H.isRightPositioned() ? (t.transform = "rotate(-90deg)", t.right = "0px") : (t.left = "0px", t.transform = "rotate(90deg)")), this.container = new pe(L.getRandomName(), L.getGenericStyle(t), F, "iframe"), B.pageStatus.subscribe(function(t) {
                e.updateStatus(t)
              }), H.chatPosition.subscribe(function() {
                e.updateWidgetPosition()
              }), H.mobMinStyle.subscribe(function() {
                e.container && e.container.elementReferrer && e.container.insertCssFile(H.mobMinStyle(), !0)
              }), H.showMessagePreview.subscribe(function() {
                H.showMessagePreview() ? e.initMessagePreviewContainer() : e.destroyMessagePreviewContainer()
              }), p.eventEmitter.on("localeChanged", function() {
                e.updateStatus()
              })
            };
          ke.prototype.setDimensions = function() {
            "rectangle" === H.mobileWidget() ? (this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68) : this.minifiedBoxHeight = this.minifiedBoxWidth = 60
          }, ke.prototype.buildView = function() {
            this.container.buildIframe(p.MinifiedMobileStyle + H.mobMinStyle()), p.MinifiedMobileStyle = p.MinifiedMobileStyle.replace(/#tawktoLink/g, "#" + p.viewHandler.tawktoLinkName), p.MinifiedMobileStyle = p.MinifiedMobileStyle.replace(/#bottomContainer/g, "#" + p.viewHandler.bottomContainerName), H.showMessagePreview() ? this.initMessagePreviewContainer() : this.destroyMessagePreviewContainer(), H.isRTL() && (this.container.getElementById("tawkchat-minified-box").className += " rtl-direction "), this.updateStatus(), this.attachEvents(), this.updateWidgetPosition()
          }, ke.prototype.updateStatus = function(e) {
            var t;
            if (e || (e = B.pageStatus()), this.container && e) {
              (t = this.container.getElementById("tawkchat-status-icon")) && (t.className = e), (t = this.container.getElementById("tawk-minified-mobile-text")) && (t.innerHTML = "online" === e || "away" === e ? p.languageParser.translate("chat", "chat_text") : p.languageParser.translate("chat", "mail_text"));
              try {
                p.eventEmitter.emit("resizeIframeHeight")
              } catch (e) {
                a.handleError("Unable to emit resizeIframeHeight", e.fileName, e.lineNumber, e.stack)
              }
            }
          }, ke.prototype.attachEvents = function() {
            var e = this;
            this.container.attachUserEventListener(p.viewHandler.clickEvent, function(t) {
              p.eventHandler.cancelEvent(t), e.isMoving || (p.sessionHandler.notifyWindowState("max"), p.viewHandler.checkSeenMessageViewport()), e.isMoving = !1
            }, "tawkchat-minified-box", "mobpclick"), this.container.attachUserEventListener("touchmove", function() {
              e.isMoving = !0
            }, "tawkchat-minified-box", "mobpmove")
          }, ke.prototype.show = function() {
            this.container.restyle("display", "block")
          }, ke.prototype.updateWidgetPosition = function() {
            var e = "";
            this.container && this.container.elementReferrer && (e = H.isCenterPositioned() ? e + " center " : H.isTopPositioned() ? e + " top " : e + " bottom ", e = H.isRightPositioned() ? e + " right " : e + " left ", e += " " + H.mobileWidget() + " ", this.container.documentRef.body.className = e)
          }, ke.prototype.initMessagePreviewContainer = function() {
            var e, t;
            e = p.viewHandler.iframeContainer, this.messagePreview = new pe(L.getRandomName(), L.getGenericStyle({
              zindex: "999999",
              width: "100%",
              height: "0px",
              minwidth: "auto",
              maxwidth: "378px",
              minheight: "auto",
              left: "auto",
              right: "auto",
              position: "fixed",
              display: "none",
              top: "auto",
              bottom: "auto"
            }), F, "iframe"), p.viewHandler.messagePreview = new fe(this.messagePreview), this.messagePreview.elementReferrer || e.elementReferrer.appendChild(this.messagePreview.buildView(e.documentRef)), this.messagePreview.buildIframe(p.MinifiedStyle + H.minStyle()), e = L.getElementsByTagName(this.messagePreview.documentRef, "body")[0], t = (t = (t = m["tawkchat-message-preview"]).replace(/__TAWK_TO_LINK__/gm, p.viewHandler.tawktoLinkName)).replace(/__BOTTOM_CONTAINER__/gm, p.viewHandler.bottomContainerName), e.innerHTML = t
          }, ke.prototype.destroyMessagePreviewContainer = function() {
            this.messagePreview && this.messagePreview.documentRef && this.messagePreview.documentRef.parentNode && this.messagePreview.documentRef.parentNode.removeChild(this.messagePreview.documentRef), this.messagePreview = null, p.viewHandler.messagePreview = null
          };
          var Se = function(e) {
            var t = this;
            arguments.length && (this.browser = e, this.metaContent = this.getMetaContent(), this.landscape = !1, this.zoom = 1, this.resizeTimeout = this.hasKeyboard = this.minAndMaxScalesAreEqual = this.hasViewportHeightWidth = this.hasInitialScale = !1, this.removeAgentNotification = !0, this.clickEvent = "touchend", this.hasChatStarted = this.isMaximized = this.isBottomWidget = !1, this.originalDocumentStyle = null, this.isTherePreChat = H.showPreChatForm, this.noZoomMetaTag = null, this.isIndicatorOn = !1, this.scrollTop = this.scrollLeft = 0, this.mainAgent = null, this.shapeChanged(), this.minifiedWidget = new ke, (i = new xe(this.tawktoLinkName, this.bottomContainerName)).wrapper.addClass("mobile"), this.iframeContainer = new he("tawkchat-container", "border: 0 none !important; padding: 0 !important; margin: 0 !important; z-index: 999999999 !important; overflow : visible !important; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important; width : auto !important; height : auto !important;"), this.indicator = new ge(this.minifiedWidget.container), this.iframeContainer.addChildViews([this.minifiedWidget.container, i.container]), "#max-widget" === c.location.hash && (c.history ? c.history.replaceState({}, document.title, ".") : c.location.hash = ""), this.iframeContainer.buildView(), this.chatContainer = i.container, p.eventEmitter.on("resizeIframeHeight", function() {
              t.resizeIframeHeight()
            }), p.eventEmitter.on("visitorPopupFocus", function(e) {
              t.isPopupFocused = e
            }), p.eventHandler.listen(c, "popstate", function(e) {
              !H.isPopup && t.isMaximized && "#max-widget" !== c.location.hash && B.chatWindowState("min")
            }, "popstateFn"), B.chatWindowState.subscribe(function(e) {
              H.isPopup || (t.hideWidget(), "max" === e ? (l.disableMobileBackHistory || c.location.hash && "#max-widget" !== c.location.hash || (c.history.pushState ? c.history.pushState(null, null, c.location.href + "#max-widget") : c.location.hash = "max-widget"), t.maximize()) : (l.disableMobileBackHistory || "#max-widget" === c.location.hash && c.history.back(), t.isMaximized = !1, t.show()))
            }), B.pageStatus.subscribe(function(e) {
              t.updateViewByStatus(e)
            }), H.mobileWidget.subscribe(function() {
              t.renderBottomWidget(), t.minifiedWidget.buildView()
            }), H.chatPosition.subscribe(function() {
              t.updateWidgetPosition()
            }), R.rating.subscribe(function(e) {
              t.changeRating(e)
            }), H.maxStyle.subscribe(function() {
              t.chatContainer && t.chatContainer.elementReferrer && t.chatContainer.insertCssFile(H.maxStyle(), !0)
            }), H.mobileWidget.subscribe(function(e) {
              t.shapeChanged(), t.minifiedWidget.container.massRestyle({
                width: t.minifiedBoxWidth + "px !important",
                height: t.minifiedBoxHeight + "px !important",
                "min-width": t.minifiedBoxWidth + "px !important",
                "min-height": t.minifiedBoxHeight + "px !important",
                "max-width": t.minifiedBoxWidth + "px !important",
                "max-height": t.minifiedBoxHeight + "px !important"
              })
            }), p.chatHandler.hasChatStarted.subscribe(function(e) {
              i.toggleEndChatOption(e)
            }))
          };
          (Se.prototype = new ye).constructor = Se, Se.prototype.parent = ye.prototype, Se.prototype.begin = function() {
            if (document.body.appendChild(this.iframeContainer.elementReferrer), "symbian" !== this.browser && "ie" !== this.browser && "opera" !== this.browser && "android2.3" !== this.browser || (this.clickEvent = "click"), this.minifiedWidget.buildView(), i.buildView(), this.chatContainer = i.container, this.noZoomMetaTag = document.createElement("meta"), this.noZoomMetaTag.name = "viewport", this.parent.begin.call(this), L.isTouchDevice() && ("android" === T || "android2" === T || "android2.3" === T)) {
              var e = this.chatContainer.getElementById("chatContainer"),
                t = this.chatContainer.getElementById("menuScrollable");
              this.addOverflowScroll(e), this.addOverflowScroll(t), e.style.overflow = "hidden", t.style.overflow = "hidden"
            }
            p.audioPlayer.initAudioPlayer()
          }, Se.prototype.shapeChanged = function() {
            (this.isMinifiedRound = "round" === H.mobileWidget()) ? this.minifiedBoxHeight = this.minifiedBoxWidth = this.defaultHeight = this.defaultWidth = 60: (this.defaultWidth = 110, this.defaultHeight = 68, this.minifiedBoxWidth = 110, this.minifiedBoxHeight = 68)
          }, Se.prototype.handleEndChat = function() {
            i.chatEnded(), this.chatContainer.hide(), this.isMaximized = !1, this.iframeContainer.restyle("right", "0px"), this.show()
          }, Se.prototype.show = function() {
            var e = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
            this.isMaximized ? (this.iframeContainer.massRestyle({
              left: "0px",
              top: "0px",
              right: "0px",
              bottom: "0px"
            }), this.isMobileOptimizedWebsite() || null === this.noZoomMetaTag || (this.metaContent || "" !== this.noZoomMetaTag.content ? this.metaContent && !this.hasNoScale && e && e.setAttribute("content", this.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no", this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag))), this.isVisibilityToggled || (this.iframeContainer.show(), this.chatContainer.show()), this.minifiedWidget.container.hide(), "max" !== B.chatWindowState() && p.sessionHandler.notifyWindowState("max"), p.viewHandler.newMessageNotSeen && setTimeout(function() {
              p.viewHandler.checkUnseenMessages()
            }, 0)) : (this.isMobileOptimizedWebsite() ? (this.getZoom(), this.renderMinifiedBox()) : this.metaContent && !this.hasNoScale ? e && e.setAttribute("content", this.metaContent) : this.noZoomMetaTag.parentNode && (this.noZoomMetaTag.content = "", document.getElementsByTagName("head")[0].removeChild(this.noZoomMetaTag)), L.blurElements(i.container.documentRef.body.getElementsByTagName("input")), L.blurElements(i.container.documentRef.body.getElementsByTagName("textarea")), this.isVisibilityToggled || (this.minifiedWidget.container.show(), this.showWidget()), this.resetOriginalStyle(), this.indicator.initIndicator(), "min" !== B.chatWindowState() && p.sessionHandler.notifyWindowState("min"), this.resizeHandler(), l.triggerApiHandlers("onChatMinimized")), this.isVisibilityToggled || (this.updateViewByStatus(B.pageStatus()), this.parent.show.call(this))
          }, Se.prototype.hideWidget = function() {
            this.isMaximized ? (this.isPopupFocused && p.socketManager.sendToConnector("popupOnFocus", !1), this.chatContainer.hide()) : (null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle), this.minifiedWidget.container.hide()), this.iframeContainer.hide(), l.triggerApiHandlers("onChatHidden")
          }, Se.prototype.showWidget = function() {
            if (this.iframeContainer.show(), null !== this.originalDocumentStyle && (this.iframeContainer.documentRef.body.style.cssText = this.originalDocumentStyle, this.originalDocumentStyle = null, c.scrollTo(this.scrollLeft, this.scrollTop)), this.isMaximized) {
              this.scrollLeft = void 0 !== c.pageXOffset ? c.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, this.scrollTop = void 0 !== c.pageYOffset ? c.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, this.scrollToBottom(), this.originalDocumentStyle = this.iframeContainer.documentRef.body.style.cssText;
              for (var e = "height min-height max-height width min-width max-width".split(" "), t = 0; t < e.length; t++) this.iframeContainer.documentRef.body.style.setProperty(e[t], "100%", "important");
              this.iframeContainer.documentRef.body.style.setProperty("overflow", "hidden", "important"), this.iframeContainer.documentRef.body.style.setProperty("position", "fixed", "important"), i.container.show()
            } else {
              if (H.hideWidgetOnLoad) return void this.hideWidget();
              this.minifiedWidget.container.show(), this.resizeIframeHeight()
            }
            this.iframeContainer.show()
          }, Se.prototype.init = function() {
            this.checkMetaContent(), this.addResizeEvents(), this.resizeHandler()
          }, Se.prototype.getZoom = function() {
            this.zoom = screen.width / c.innerWidth
          }, Se.prototype.addResizeEvents = function(e) {
            var t, i = this;
            t = function(e) {
              i.resizeHandler()
            }, p.eventHandler.listen(c, "resize", t, "mobileresize"), p.eventHandler.listen(c, "scroll", t, "mobilescroll"), e && p.eventHandler.listen(c, "touchmove", t)
          }, Se.prototype.checkMetaContent = function() {
            var e, t = {};
            if (i = this.metaContent) {
              for (var i, n = 0, a = (i = (i = i.replace(/ /g, "")).split(",")).length; n < a; n++) t[(e = i[n].split("="))[0]] = e[1];
              this.hasInitialScale = "1.0" === t["initial-scale"], this.hasViewportHeightWidth = !(!t.width && !t.height), this.minAndMaxScalesAreEqual = t["minimum-scale"] && t["maximum-scale"] && t["minimum-scale"] === t["maximum-scale"], this.initialAndMaxScalesAreEqual = t["initial-scale"] && t["maximum-scale"] && t["initial-scale"] === t["maximum-scale"], this.hasNoScale = "no" === t["user-scalable"] || "0" === t["user-scalable"]
            }
          }, Se.prototype.ifScrollbarDown = function() {
            return this.isMaximized ? this.parent.ifScrollbarDown.call(this) : !!document && ((e = document.body) ? (t = document.documentElement.clientHeight + 10, i = e.scrollTop || document.documentElement.scrollTop, 80 > e.scrollHeight - (i + t)) : void 0);
            var e, t, i
          }, Se.prototype.resizeHandler = function() {
            var e = this;
            "offline" === B.pageStatus() && H.hideWidgetOnOffline || this.isMaximized || (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
              var t = e.isLandscape(),
                i = e.ifScrollbarDown();
              "offline" === B.pageStatus() && H.hideWidgetOnOffline || (e.landscape !== t && i && setTimeout(function() {
                e.scrollToBottom()
              }, 200), e.landscape = t, e.isMobileOptimizedWebsite() && "opera" !== T && "android2.3" !== T || (e.getZoom(), e.renderMinifiedBox()))
            }, 100))
          }, Se.prototype.getMetaContent = function() {
            var e, t, i = document.getElementsByTagName("meta"),
              n = "";
            for (e = 0, t = i.length; e < t; e++) i[e].getAttribute("name") && "viewport" === i[e].getAttribute("name").toLowerCase() && (n = i[e].getAttribute("content"));
            return n
          }, Se.prototype.isLandscape = function() {
            return screen.height < screen.width || c.innerHeight < c.innerWidth
          }, Se.prototype.isMobileOptimizedWebsite = function() {
            return this.checkMetaContent(), this.minAndMaxScalesAreEqual && (this.hasViewportHeightWidth || this.hasNoScale) || this.initialAndMaxScalesAreEqual
          }, Se.prototype.resizeMobileRectangleWidget = function() {
            var e = this.minifiedWidget.container.getElementById("tawk-minified-mobile-text"),
              t = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
              i = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper"),
              n = "safari" !== T ? screen.width : screen.height;
            "rectangle" === H.mobileWidget() && (e.style.width = "", this.minifiedBoxWidth = e.offsetWidth + 30, 110 > this.minifiedBoxWidth ? this.minifiedBoxWidth = 110 : !this.isLandscape() && this.minifiedBoxWidth > screen.width ? (this.minifiedBoxWidth = screen.width - 30, e.style.width = "calc(100% - 30px)") : this.isLandscape() && this.minifiedBoxWidth > n && (this.minifiedBoxWidth = n - 30, e.style.width = "calc(100% - 30px)"), !this.isLandscape() && this.minifiedBoxWidth > screen.width - 30 ? this.minifiedBoxWidth = screen.width - 30 : this.isLandscape() && this.minifiedBoxWidth > n - 30 && (this.minifiedBoxWidth = n - 30 - 10), i.style.width = this.minifiedBoxWidth + "px", H.isRTL() ? t.style.right = this.minifiedBoxWidth - 17 + "px" : t.style.left = this.minifiedBoxWidth - 17 + "px")
          }, Se.prototype.scaleContent = function(e) {
            if (!this.isMaximized) {
              var t = H.isRTL() ? "right" : "left";
              this.resizeMobileRectangleWidget();
              var i = this.minifiedBoxHeight,
                n = this.minifiedBoxWidth,
                a = this.minifiedWidget.container.getElementById("tawkchat-minified-box"),
                r = "-moz-transform : " + (r = "scale(" + e + ")") + "; -webkit-transform : " + r + "; -o-transform : " + r + "; -ms-transform : " + r + "; transform : " + r + ";";
              t = "-moz-transform-origin : bottom " + t + "; -webkit-transform-origin : bottom " + t + "; -o-transform-origin : bottom " + t + "; -ms-transform-origin : bottom " + t + "; transform-origin : bottom" + t;
              e && a && (i = Math.ceil(i * e) + 30, n = Math.ceil(n * e) + 10, this.minifiedWidget.container.massRestyle({
                height: i + "px !important",
                width: n + "px !important",
                "min-height": i + "px !important",
                "min-width": n + "px !important",
                "max-height": i + "px !important",
                "max-width": n + "px !important"
              }), a.style.cssText += r + t, H.isRTL() && !a.classList.contains("rtl-direction") ? a.classList.add("rtl-direction") : !H.isRTL() && a.classList.contains("rtl-direction") && a.classList.remove("rtl-direction")), this.updateWidgetPosition(i)
            }
          }, Se.prototype.popup = function() {
            var e = "https://tawk.to/chat/" + I.pageId + "/";
            if (this.indicator.hide(), this.chatContainer.hide(), this.isMaximized = !1, this.show(), i.closeMenu(), this.myWin && !this.myWin.closed) return this.myWin.focus();
            H.whiteLabel() && H.whiteLabel().chatUrl && (e = H.whiteLabel().chatUrl + "/chat/"), this.myWin = "nokia" === T ? c.open(e + $_Tawk_WidgetId + "?$_tawk_sk=" + B.sessionKey + "&$_tawk_tk=" + B.transferKey + "&v=" + B.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no") : c.open(e + $_Tawk_WidgetId + "?$_tawk_sk=" + B.sessionKey + "&$_tawk_tk=" + B.transferKey + "&v=" + B.serverVersion)
          }, Se.prototype.maximize = function() {
            "firefox" === T && !this.isMobileOptimizedWebsite() || "pop" === H.onClickAction ? this.popup() : (this.messagePreview && this.messagePreview.hide(), this.hasChatStarted || (H.showPreChatForm = this.isTherePreChat), this.indicator.hide(), this.minifiedWidget.container.hide(), this.originalIframeContainerStyle || (this.originalIframeContainerStyle = this.iframeContainer.elementReferrer.style.cssText), this.iframeContainer.restyle("margin", "0px !important"), this.isMaximized = !0, this.show())
          }, Se.prototype.resetOriginalStyle = function() {
            this.originalIframeContainerStyle && (this.iframeContainer.elementReferrer.style.cssText = this.originalIframeContainerStyle)
          }, Se.prototype.resizeIframeHeight = function() {
            var e;
            !this.isMaximized && this.iframeContainer && this.minifiedWidget.container.elementReferrer && this.isIEWidget && (e = this.minifiedWidget.container.getElementById("tawkchat-status-text-container").offsetHeight, this.minifiedWidget.container.restyle("height", e + "px"), this.iframeContainer.restyle("marginTop", "-" + e / 2 + "px"), this.iframeContainer.restyle("height", e + "px"))
          }, Se.prototype.renderBottomWidget = function() {
            this.isMaximized || (this.isBottomWidget = !0, this.minifiedWidget.container.template = m["mobile-bottom-" + H.mobileWidget()], this.iframeContainer.restyle("position", "fixed"), this.updateWidgetPosition())
          }, Se.prototype.handleIndicatorToggle = function(e) {
            var t = this.minifiedBoxWidth,
              i = this.minifiedWidget.container.getElementById("tawkchat-chat-indicator"),
              n = this.minifiedWidget.container.getElementById("tawkchat-minified-wrapper");
            this.isIndicatorOn = e, n.className = e ? n.className + " indicator-on " : n.className.replace("indicator-on", ""), this.minifiedBoxWidth = e ? t + 7 : this.defaultWidth, this.isMobileOptimizedWebsite() ? this.scaleContent(1) : this.renderMinifiedBox(), i.style.visibility = "visible"
          }, Se.prototype.updateViewByStatus = function(e, t) {
            this.isMaximized ? this.parent.updateViewByStatus.call(this, e) : this.iframeContainer.elementReferrer && ("offline" === e && H.hideWidgetOnOffline ? this.hideWidget() : this.showWidget(), this.resizeHandler())
          }, Se.prototype.updateWidgetPosition = function(e) {
            var t = {},
              i = {};
            e = e || this.minifiedBoxHeight, this.iframeContainer && (H.isCenterPositioned() ? (t.top = "50% !important", t.bottom = "auto !important", t.margin = this.isMinifiedRound ? -.5 * e + "px 0 0 0 !important" : -.5 * e - (this.defaultHeight - 37) / 2 + "px 0 0 0 !important") : (t.margin = "0 !important", H.isTopPositioned() ? (t.top = "0px !important", t.bottom = "auto !important", i.top = this.isMinifiedRound ? "20px !important" : "-10px !important") : (t.bottom = "0px !important", t.top = "auto !important", i.bottom = this.isMinifiedRound ? "14px !important" : "0px !important")), H.isRightPositioned() ? (t.right = "0px !important", t.left = "auto !important", i.right = this.isMinifiedRound ? "20px !important" : "15px !important") : (t.left = "0px !important", t.right = "auto !important", i.left = this.isMinifiedRound ? "20px !important" : "15px !important"), this.iframeContainer.massRestyle(t), this.minifiedWidget.container.massRestyle(i))
          }, Se.prototype.addOverflowScroll = function(e) {
            var t = 0,
              n = this;
            p.eventHandler.listen(e, "touchstart", function(i) {
              t = e.scrollTop + i.touches[0].pageY
            }, "mobiletouchstart" + e.id), p.eventHandler.listen(e, "touchmove", function(a) {
              p.eventHandler.cancelEvent(a), 20 >= a.touches[0].pageY || 0 > t - a.touches[0].pageY || (e.scrollTop = t - a.touches[0].pageY, i.isScrollbarDown = n.ifScrollbarDown())
            }, "mobiletouchmove" + e.id)
          }, Se.prototype.resetView = function() {
            var e, t;
            (e = this.chatContainer) && ((e = e.getElementById("chatWrapper")) && (t = e.lastChild, e.innerHTML = "", e.appendChild(t)), this.show())
          }, Se.prototype.renderAgentMinimizedWidget = function(e) {
            var t = this.minifiedWidget.container.getElementById("agent-profile-image"),
              i = this.minifiedWidget.container.getElementById("tawkchat-status-text-container"),
              n = this.minifiedWidget.container.getElementById("tawkchat-status-agent-container");
            e ? (e = (e = R.agentProfiles[e]).pi ? B.agentImgUrl + "/" + e.pi : "") && ("round" === H.mobileWidget() && (i.style.display = "none"), t.style.backgroundImage = "url('" + e + "')", n.style.display = "block") : (i.style.display = "inherit", t.style.backgroundImage = null, n.style.display = "none")
          }, Se.prototype.handleRestartChat = function() {
            p.formHandler.closeForm(), i.chatStarted()
          }, Se.prototype.toggleWidget = function() {
            p.sessionHandler.notifyWindowState(this.isMaximized ? "min" : "max")
          }, Se.prototype.toggleVisibility = function() {
            this.scrollToBottom(), (this.isVisibilityToggled = !this.isVisibilityToggled) ? this.hideWidget() : this.showWidget()
          }, Se.prototype.isWidgetHidden = function() {
            return !this.iframeContainer.isVisible
          };
          var He = function(e) {
            Se.call(this, e)
          };
          (He.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
          }, He.prototype.renderMinifiedBox = function() {
            var e = (1 / this.zoom.toFixed(2)).toFixed(2);
            this.scaleContent(.2 > e ? .2 : e)
          };
          var _e = function(e) {
            Se.call(this, e)
          };
          (_e.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
          }, _e.prototype.isLandscape = function() {
            return 0 !== c.orientation
          }, _e.prototype.getZoom = function() {
            this.zoom = (this.isLandscape() ? screen.height : screen.width) / c.innerWidth
          }, _e.prototype.renderMinifiedBox = function() {
            var e = (1 / this.zoom.toFixed(2)).toFixed(2);
            this.scaleContent(e, !1)
          };
          var Ie = function(e) {
            Se.call(this, e)
          };
          (Ie.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
          }, Ie.prototype.renderMinifiedBox = function() {
            var e = (1 / this.zoom.toFixed(2)).toFixed(2);
            this.scaleContent(e, !0)
          };
          var Re = function(e) {
            Se.call(this, e), this.screenWidth = 0
          };
          (Re.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.addResizeEvents(!0), this.resizeHandler()
          }, Re.prototype.isLandscape = function() {
            return 0 !== c.orientation
          }, Re.prototype.getZoom = function() {
            this.isLandscape() ? this.screenWidth = screen.height : this.screenWidth = screen.width, this.zoom = this.screenWidth / c.innerWidth
          }, Re.prototype.renderMinifiedBox = function() {
            var e;
            e = this.isMobileOptimizedWebsite() ? (.2 * this.screenWidth / this.minifiedBoxWidth).toFixed(2) : (1 / this.zoom.toFixed(2)).toFixed(2), this.scaleContent(e, !0)
          };
          var Be = function(e) {
            Se.call(this, e)
          };
          (Be.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
          }, Be.prototype.renderMinifiedBox = function() {
            this.scaleContent()
          };
          var Pe = function(e) {
            Se.call(this, e)
          };
          (Pe.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.checkMetaContent(), this.addResizeEvents(), this.resizeHandler()
          }, Pe.prototype.renderMinifiedBox = function() {
            var e = (1 / this.zoom.toFixed(2)).toFixed(2);
            this.scaleContent(e, !0)
          };
          var Ne = function(e) {
            Se.call(this, e)
          };
          (Ne.prototype = new Se).init = function() {
            var e;
            "ie" === this.browser && ((e = document.createElement("meta")).httpEquiv = "X-UA-Compatible", e.setAttribute("content", "IE=edge"), document.getElementsByTagName("head")[0].appendChild(e)), this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
          }, Ne.prototype.renderMinifiedBox = function() {
            var e = (1 / this.zoom.toFixed(2)).toFixed(2);
            this.scaleContent(.2 > e ? .2 : e)
          };
          var Me = function(e) {
            Se.call(this, e)
          };
          (Me.prototype = new Se).init = function() {
            this.renderBottomWidget(), this.addResizeEvents(), this.resizeHandler()
          }, Me.prototype.renderMinifiedBox = function() {
            var e = (1 / this.zoom.toFixed(2)).toFixed(2);
            this.scaleContent(.2 > e ? .2 : e)
          };
          var Ae = ye.extend({
            init: function() {
              var e, t, n, a, r = this;
              this._super(this), this.clickEvent = "touchend", this.iframeContainer = new he(L.getRandomName(), "border: 0 none; padding: 0; margin: 0; z-index: 9999999; width: 100%; height: 100%; display: none; position : fixed; top :0; bottom : 0; min-width: 0 !important; min-height: 0 !important; max-width: none !important; max-height: none !important;"), i = new xe(this.tawktoLinkName, this.bottomContainerName), this.indicator = new ge, this.iframeContainer.addChildViews([i.container]), this.iframeContainer.buildView(), e = document.getElementsByTagName("head")[0], t = document.createDocumentFragment(), n = L.createElement(document, "style", {
                type: "text/css"
              }), a = document.createTextNode(p.ResetStyle + "" + p.MaximizedStyle + H.maxStyle()), n.styleSheet ? n.styleSheet.cssText = a.nodeValue : n.appendChild(a), t.appendChild(n), e.appendChild(t), this.chatContainer = i.container, i.wrapper.addClass("mobile"), R.rating.subscribe(function(e) {
                r.changeRating(e)
              }), B.pageStatus.subscribe(function(e) {
                r.updateViewByStatus(e)
              }), H.maxStyle.subscribe(function() {
                i && i.container.elementReferrer && i.container.insertCssFile(H.maxStyle(), !0)
              }), p.chatHandler.hasChatStarted.subscribe(function(e) {
                i.toggleEndChatOption(e)
              })
            },
            show: function() {
              i.show(), this.updateViewByStatus(B.pageStatus()), this._super(), p.socketManager.sendToConnector("popupOnFocus", !0)
            },
            updateViewByStatus: function(e) {
              this._super(e), i && "preChatForm" !== p.formHandler.currentForm && "offlineForm" !== p.formHandler.currentForm && H.isPopup && (e = o.getShortMessage(e), document.title = e ? I.pageName() + " - " + L.rawDecode(e) : I.pageName())
            },
            handleEndChat: function() {
              i.chatEnded(), this.hideWidget()
            },
            handleRestartChat: function() {
              i.chatStarted()
            }
          });
          Ae.prototype.begin = function() {
            var e = T;
            if (document.body.appendChild(this.iframeContainer.elementReferrer), "symbian" !== e && "ie" !== e && "opera" !== e && "android2.3" !== e || (this.clickEvent = "click"), i.buildView(), L.isTouchDevice() && ("android" === T || "android2" === T || "android2.3" === T)) {
              e = this.chatContainer.getElementById("chatContainer");
              var t = this.chatContainer.getElementById("menuScrollable");
              this.addOverflowScroll(e), this.addOverflowScroll(t), e.style.overflow = "hidden", t.style.overflow = "hidden"
            }
            p.audioPlayer.initAudioPlayer()
          }, Ae.prototype.hideWidget = function() {
            p.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function() {
              1 < c.history.length ? c.history.back() : c.close()
            }, 200)
          }, Ae.prototype.showWidget = function() {
            this.scrollToBottom(), this.iframeContainer.show()
          }, Ae.prototype.resetView = function() {
            var e, t;
            (e = this.chatContainer) && ((e = e.getElementById("chatWrapper")) && (t = e.lastChild, e.innerHTML = "", e.appendChild(t)), this.show())
          }, Ae.prototype.addOverflowScroll = function(e) {
            var t = 0,
              n = this;
            p.eventHandler.listen(e, "touchstart", function(i) {
              t = e.scrollTop + i.touches[0].pageY
            }, "mobiletouchstart" + e.id), p.eventHandler.listen(e, "touchmove", function(a) {
              p.eventHandler.cancelEvent(a), 20 >= a.touches[0].pageY || 0 > t - a.touches[0].pageY || (e.scrollTop = t - a.touches[0].pageY, i.isScrollbarDown = n.ifScrollbarDown())
            }, "mobiletouchmove" + e.id)
          }, Ae.prototype.addEmojiToInput = function(e) {
            i.addEmojiToInput(e)
          }, Ae.prototype.closeEmojiSelection = function() {
            i.closeEmojiSelection()
          };
          var Le = function() {
            var e = this,
              i = !1;
            this.onActivityHandler = function() {
              p && (e.away && t.connected && p.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), e.active = !0, e.away = !1)
            }, this.popupOnFocusHandler = function() {
              p && (!t.connected && p.socketManager.isForcedDisconnect() ? p.main.criticalRefresh(B.serverVersion, !1, !0) : (e.hasFocus || (e.active = !0, e.hasFocus = !0, t.connected && p.socketManager.sendToConnector("popupOnFocus", !0)), e.away && t.connected && p.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), e.away = !1))
            }, this.popupOnBlurHandler = function() {
              p && (e.hasFocus = !1, t.connected && p.socketManager.sendToConnector("popupOnFocus", !1))
            }, this.reconnectOnActivity = function() {
              p && !i && (i = !0, p.main.criticalRefresh(B.serverVersion))
            }, this.away = this.active = this.hasFocus = !1, this.interval = this.awayTimeout = this.inactivityTimeout = null, this.initActivityReset = function() {
              e.resetTimeout(), e.setupListeners(), e.interval = setInterval(function() {
                e.active && (e.resetTimeout(), e.active = !1)
              }, 1e4)
            }
          };
          Le.prototype.resetTimeout = function() {
            var e = this;
            clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout), this.awayTimeout = setTimeout(function() {
              !e.away && p && (e.away = !0, p && p.socketManager && t.connected && p.socketManager.sendToConnector("notifySocketStatusUpdate", "away"))
            }, 6e5), p && !p.socketManager.isForcedDisconnect() && (this.inactivityTimeout = setTimeout(function() {
              e.inactivityTimeoutHandler()
            }, 12e5))
          }, Le.prototype.inactivityTimeoutHandler = function() {
            p && (p.socketManager.disconnectConnector(), H.isEmbedded ? p.formHandler.openForm("inactivityOverlay") : B.chatWindowState("min"), T ? (p.eventHandler.listen(p.viewHandler.chatContainer.documentRef, "touchmove", this.reconnectOnActivity, "acitmmousemove"), p.eventHandler.listen(p.viewHandler.chatContainer.documentRef, p.viewHandler.clickEvent, this.reconnectOnActivity, "acitmclick"), p.eventHandler.listen(p.viewHandler.chatContainer.documentRef, "keydown", this.reconnectOnActivity, "acitmkeydown"), p.eventHandler.listen(document, "touchmove", this.reconnectOnActivity, "acitmousemove"), p.eventHandler.listen(document, p.viewHandler.clickEvent, this.reconnectOnActivity, "acitclick"), p.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown")) : (p.eventHandler.listen(document, "mousemove", this.reconnectOnActivity, "acitmousemove"), p.eventHandler.listen(document, "click", this.reconnectOnActivity, "acitclick"), p.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown"), document.onfocusin ? p.eventHandler.listen(document, "focusin", this.reconnectOnActivity, "acitfocus") : p.eventHandler.listen(c, "focus", this.reconnectOnActivity, "acitfocus")), p.viewHandler.indicator.pageTitleNotification.off())
          }, Le.prototype.cleanUp = function() {
            clearInterval(this.interval), clearTimeout(this.inactivityTimeout), clearTimeout(this.awayTimeout)
          }, Le.prototype.setupListeners = function() {
            T ? (p.eventHandler.listen(p.viewHandler.chatContainer.documentRef, "touchmove", this.onActivityHandler, "acmmousemove"), p.eventHandler.listen(p.viewHandler.chatContainer.documentRef, p.viewHandler.clickEvent, this.onActivityHandler, "acmclick"), p.eventHandler.listen(p.viewHandler.chatContainer.documentRef, "keydown", this.onActivityHandler, "acmkeydown"), p.eventHandler.listen(document, "touchmove", this.onActivityHandler, "acmousemove"), p.eventHandler.listen(document, p.viewHandler.clickEvent, this.onActivityHandler, "acclick"), p.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown")) : H.isPopup ? (document.onfocusin ? (p.eventHandler.listen(document, "focusin", this.popupOnFocusHandler, "acfocus"), p.eventHandler.listen(document, "focusout", this.popupOnBlurHandler, "acblur")) : (p.eventHandler.listen(c, "focus", this.popupOnFocusHandler, "acfocus"), p.eventHandler.listen(c, "blur", this.popupOnBlurHandler, "acblur")), p.eventHandler.listen(document, "click", this.popupOnFocusHandler, "acphclick"), p.eventHandler.listen(document, "keydown", this.popupOnFocusHandler, "acphkeydown")) : (p.eventHandler.listen(document, "mousemove", this.onActivityHandler, "acmousemove"), p.eventHandler.listen(document, "click", this.onActivityHandler, "acclick"), p.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown"))
          };
          var Oe = function() {
            var e = this;
            this.originalPageStatus = this.agentCountSubscription = this.setupTimeout = null, this.utcOffset = 0, p.eventEmitter.on("scheduleUpdate", function(t) {
              H.widgetId === t.wdgt && (H.schedule = t.ws ? e.convertOldScheduleFormat(t.ws.sch) : null, H.scheduleTimezone = null === t.wstz ? {} : {
                utc: t.wstz.utc,
                tzo: t.wstz.offset
              }, e.setup())
            })
          };
          Oe.prototype.setup = function() {
            this.clear(), null === this.originalPageStatus && (this.originalPageStatus = B.pageStatus()), H.schedule ? (this.utcOffset = -1 * ((new Date).getTime() - H.scheduleTimezone.utc), this.calculate()) : B.pageStatus(this.originalPageStatus)
          }, Oe.prototype.calculate = function() {
            var e, t, i, n, a, r = this;
            if (this.clear(), H.schedule)
              if (0 === H.schedule.length) this.goOffline();
              else {
                t = -6e4 * (e = new Date).getTimezoneOffset(), t = H.scheduleTimezone.tzo - t, e = (i = new Date(e.getTime() + this.utcOffset + t)).getDay(), i = 60 * (t = 60 * i.getHours() + i.getMinutes()) + i.getSeconds();
                for (var o = 0; o < H.schedule.length; o++) {
                  var s = H.schedule[o];
                  if (s.day === e) {
                    if (t >= s.start && t < s.end) {
                      n = s;
                      break
                    }
                    if (t < s.start) {
                      a = s;
                      break
                    }
                  }
                }
                void 0 !== n ? (this.goOnline(), n = 60 * n.end - i) : (this.goOffline(), n = void 0 !== a ? 60 * a.start - i : 86400 - i + 1), void 0 !== n && (this.setupTimeout = setTimeout(function() {
                  r.calculate()
                }, 1e3 * n))
              }
          }, Oe.prototype.goOnline = function() {
            null !== this.agentCountSubscription && (p.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null), "offline" !== this.originalPageStatus && B.pageStatus(this.originalPageStatus)
          }, Oe.prototype.goOffline = function() {
            0 !== p.agents.totalAgents() ? (null !== this.agentCountSubscription && p.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = p.agents.totalAgents.subscribe(function(e) {
              0 === e && B.pageStatus("offline")
            })) : B.pageStatus("offline")
          }, Oe.prototype.clear = function() {
            clearTimeout(this.setupTimeout), this.setupTimeout = null, null !== this.agentCountSubscription && (p.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null)
          }, Oe.prototype.cleanUp = function() {
            this.clear(), this.originalPageStatus = null
          }, Oe.prototype.convertOldScheduleFormat = function(e) {
            var t = [];
            return !e || Array.isArray(e) ? e : (Object.keys(e).forEach(function(i) {
              var n = e[i];
              0 === n.start && 0 === n.end || t.push({
                day: parseInt(i, 10),
                start: Math.floor(n.start / 6e4),
                end: Math.floor(n.end / 6e4)
              })
            }), t)
          };
          var De = function() {
            this.registerTime = 0, this.registerStart = null, this.maxRetrycount = 3, this.retryCount = 0, this.registerData = this.registerDelayTimeout = this.connectionCookieInterval = this.requestCancelTimeout = this.previousRegisterCall = null, this.registerStarted = !1, this.retryDelay = null, this.retryInitialDelay = 30, this.retryMultiplier = 1.5, this.minRandom = .5, this.maxRandom = 1.5, this.maxDelay = 120, this.retryRegisterTimeout = null
          };
          De.prototype.register = function() {
            this.registerStarted = !0, this.clearTimers(), this.prepareData()
          }, De.prototype.prepareData = function() {
            var e, t, i, n = "",
              a = "";
            p && (e = K.getSessionInformation(), t = B.sessionKey || void 0, e.length && (a = e[0]), (-900 > (i = (new Date).getTimezoneOffset()) || 900 < i) && (i = 0), this.registerData ? (this.registerData.k = t, this.registerData.d = a) : (n = p.browserData.getReferredSearchEngine(), this.registerData = {
              a: I.pageId || "",
              k: t,
              w: H.widgetId,
              d: a,
              mb: T ? 1 : 0,
              m: i,
              s: n,
              q: "",
              r: document.referrer
            }), this.registerData.cf = 3 === e.length && "cf" === e[2] ? 1 : 0, p.main.maximize && (this.registerData.h = "max"), this.registerData.wv = H.widgetVersion, H.isPopup && B.transferKey && B.sessionKey && (this.registerData.tk = B.transferKey), p.main.previousSessionKey = this.registerData.k, this.getUUID())
          }, De.prototype.getUUID = function() {
            var e, t, i, n = !1,
              a = 1 / 0,
              r = p.punycode.toASCII(c.location.hostname);
            "www." === r.substring(0, 4) && (r = r.replace("www.", ""));
            for (var o = 0, s = (e = K.getStoredUUID()).length; o < s; o++) {
              var l, d, h, m;
              if (4 === (m = K.parseSessionInformation(e[o])).length)
                if (l = m[0], d = m[1], h = m[2], m = m[3], "e" === l) {
                  if (r === d) {
                    t = h, i = m;
                    break
                  }
                } else "p" === l && (l = r.match(d)) && r.substr(l.index) === d && l.index < a && (a = l.index, t = h, i = m, n = !0)
            }
            this.registerData && (this.registerData.u = t, this.registerData.uv = i, n && (this.registerData.uw = !0)), this.startRegister()
          }, De.prototype.abort = function() {
            null !== this.previousRegisterCall && (Y.abort(this.previousRegisterCall), this.previousRegisterCall = null)
          }, De.prototype.setupRegisterTimeout = function() {
            var e = this;
            clearTimeout(this.requestCancelTimeout), this.requestCancelTimeout = setTimeout(function() {
              e.abort(), e.retryRegister()
            }, 9e4)
          }, De.prototype.startRegister = function() {
            var e = K.getHTTPCookie("TawkConnectionTime");
            !(e = parseInt(e.length ? e[0] : null, 10)) || 1e3 < (new Date).getTime() - new Date(e).getTime() ? (K.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval(function() {
              K.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
            }, 100), this.doRegister()) : this.delayRegister()
          }, De.prototype.delayRegister = function() {
            var e = this;
            clearTimeout(this.registerDelayTimeout), this.registerDelayTimeout = setTimeout(function() {
              e.register()
            }, 1e3)
          }, De.prototype.doRegister = function() {
            var e = B.visitorAppServer + "/register/",
              t = this;
            this.registerStart = (new Date).getTime(), this.setupRegisterTimeout(), e += this.registerStart, this.previousRegisterCall = Y.xhrRequest(e, this.registerData, function(e, i) {
              if (!e && !i) return t.clearTimers(), t.retryRegister();
              p && p.main.begin(JSON.parse(L.trim(i)))
            })
          }, De.prototype.retryRegister = function() {
            var e, t = this;
            null === this.retryRegisterTimeout && (this.retryCount >= this.maxRetrycount ? (this.clearTimers(), p && p.main.hideWidget()) : (this.retryCount++, e = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout(function() {
              t.register()
            }, e)))
          }, De.prototype.resetRetryCount = function() {
            this.retryCount = 0, this.retryDelay = 10
          }, De.prototype.getRetryWaitDelay = function() {
            var e, t = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
            return null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (e = this.retryDelay * this.retryMultiplier, this.retryDelay = this.retryDelay > this.maxDelay || e > this.maxDelay ? this.maxDelay : e), 1e3 * Math.round(this.retryDelay * t)
          }, De.prototype.clearTimers = function() {
            this.abort(), clearTimeout(this.requestCancelTimeout), clearTimeout(this.registerDelayTimeout), clearTimeout(this.retryRegisterTimeout), clearInterval(this.connectionCookieInterval), K.setHTTPCookie("TawkConnectionTime", 0, !0), this.connectionCookieInterval = this.requestCancelTimeout = this.registerDelayTimeout = this.retryRegisterTimeout = null
          };
          var We = function() {};
          We.prototype.processSettings = function(e) {
            var t, i, n, a = 14,
              r = "",
              o = "",
              s = "";
            i = t = 60, e.wv < H.widgetVersion || (Tawk_API.embedded && (H.isEmbedded = !0), H.isHeaderCompact = !1, H.isLegacyLayout = e.isLegacyLayout || !0, H.widgetVersion = e.wv, H.onClickAction = e.woc, H.hideWidgetOnLoad = e.hwol, H.hideWidgetOnOffline = e.hwof, H.hideWidget = !!e.dsw, H.showAgentBar = !e.hab, H.showWaitTime = !e.hwt, H.locale = e.lc, H.onlineGreeting = e.onlineGreeting, H.awayGreeting = e.awayGreeting, H.schedule = p.scheduler.convertOldScheduleFormat(e.ws), H.soundOn(!e.dws), H.showAgentTyping = e.atyping, H.showUploads(e.uploads), H.showRating(e.rating), H.showVisitorTyping(e.vtyping), H.showEmoji(e.emoji), H.showMessagePreview(e.mprvw), H.showUnreadInTab(e.tbi), H.isRTL(0 <= L.rtlLangTab.indexOf(H.locale)), H.chatPosition(e.pos), "page" !== $_Tawk_WidgetId || T || (e.dw = "min"), "full" === e.dw ? (H.widgetOffsetX = 10, H.widgetOffsetY = 0) : (H.widgetOffsetX = 20, H.widgetOffsetY = 20), T ? H.mobileWidget(e.mw || "round") : H.desktopWidget(e.dw || "min"), H.maximizedDimensions({
              width: parseInt(e.w, 10) || 350,
              height: parseInt(e.h, 10) || 520
            }), H.isDesktopRectangle() && (t = parseInt(e.minw, 10) || 320, i = parseInt(e.minh, 10) || 40), H.minimizedDimensions({
              width: t,
              height: i,
              position: e.pos
            }), H.chatBubble(e.bbl), H.headerBgColor = e.thm.hbg || "#03a84e", H.headerTxtColor = e.thm.htx || "#ffffff", H.agentTextBgColor = e.thm.aBblBg || L.shadeColor(H.headerBgColor, -.1), H.agentTextColor = e.thm.aBblTx || "#ffffff", H.visitorTextBgColor = e.thm.vBblBg || "#e5e5e5", H.visitorTextColor = e.thm.vBblTx || "#33333", H.minimizedDimensions({
              width: t,
              height: i
            }), H.topCorner = void 0 !== e.thm.topc ? e.thm.topc : H.isTopPositioned() ? 0 : 8, H.bottomCorner = void 0 !== e.thm.btmc ? e.thm.btmc : H.isTopPositioned() ? 8 : 0, (H.isEmbedded || H.isPopup) && (H.topCorner = 0, H.bottomCorner = 0), this.processPrechatForm(e), this.processOfflineForm(e, e.grt), p && (t = ".theme-background-color{background-color: " + H.headerBgColor + ";}", i = ".theme-text-color{color: " + H.headerTxtColor + ";}", H.showEmoji() && (a += 30), H.showRating() && (a += 30), H.showUploads() && (a += 30), p.MinifiedStyle && (n = H.topCorner + "px " + H.topCorner + "px " + H.bottomCorner + "px " + H.bottomCorner + "px !important;", messagePreviewRadius = H.topCorner + "px " + H.topCorner + "px " + H.topCorner + "px " + H.topCorner + "px !important;", bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + H.bottomCorner + "px !important; border-bottom-right-radius:" + H.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + H.topCorner + "px !important; border-top-right-radius:" + H.topCorner + "px !important;}", o = o + t + i, o += ".border-corner{border-radius : " + n + "-moz-border-radius : " + n + "-webkit-border-radius : " + n + "}", o += topBorderRadius, o += bottomBorderRadius, o += "#tooLongMsgNotification {background-color: " + H.headerBgColor + "; color : " + H.headerTxtColor + "}", o += "#file-upload-drop-icon {color:" + H.headerBgColor + ";}", o += "#tawkchat-status-container{left: 10px;}", o += "#short-message, #maximizeChat, #minimizeChatMinifiedBtn{line-height: " + H.minimizedDimensions().height + "px;}", o += ".bubble-text-color{color:" + (H.chatBubble() ? H.chatBubble().fgc : "#ffffff") + ";}", o += "#tawkchat-message-preview-messages-container .messageBody {background-color: #fff !important; color : #333 !important;}", o += "#textareaContainer.additionalPadding{padding-right: " + a + "px;}", o += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + a + "px;padding-right: 14px;}", H.minStyle(o), p.MinifiedStyle += " " + p.CommonStyle), p.MaximizedStyle && (r = r + (t = ".theme-background-color{background-color: " + H.headerBgColor + ";}") + (i = ".theme-text-color{color: " + H.headerTxtColor + ";}"), r += "#tooLongMsgNotification {background-color: " + H.headerBgColor + "; color : " + H.headerTxtColor + "}", r += "#file-upload-drop-icon {color:" + H.headerBgColor + ";}", r += "#chatMenuControls li:hover {background-color: " + H.headerBgColor + ";color: " + H.headerTxtColor + "}", r += "#formContainer>#emailTranscriptForm .form-header-icon, #changeNameForm .form-header-icon, #chatEndedForm .form-header-icon, #preChatForm .longFormContainer .form-header-icon {background-color:" + H.headerBgColor + ";}", r += "#formContainer>#emailTranscriptForm::before, #changeNameForm::before, #chatEndedForm::before, #endChatForm::before {background-color:" + H.headerBgColor + "; border-color: " + H.headerBgColor + ";}", r += "#formSubmit, #formSubmit-pc {background-color:" + H.headerBgColor + ";}", r = H.isDesktopRectangle() ? r + "#textareaWrapper, #actionsContainer{border-radius : 0px 0px " + H.bottomCorner + "px " + H.bottomCorner + "px !important ;}" : r + "#textareaWrapper, #actionsContainer{border-radius : 0px 0px 5px 5px !important ;}", r += "button.theme-background-color:hover{background-color: " + L.shadeColor(H.headerBgColor, -.3) + "!important;}", r += ".agentChatContainer .message{background-color: " + H.agentTextBgColor + " !important; color : " + H.agentTextColor + " !important;}", r += ".agentTypingIndicator .dot{background-color: " + H.agentTextColor + " !important;}", r += ".visitorChatContainer .message, .visitorChatContainer .messageWrapper.error .message {background-color: " + H.visitorTextBgColor + " !important; color : " + H.visitorTextColor + " !important;}", r += ".upload-data {background-color: " + H.visitorTextBgColor + " !important; color : " + H.visitorTextColor + " !important;}", r += ".headerBoxLink .headerBoxIcon{color:" + H.headerTxtColor + ";}", r += ".message.agentTypingIndicator::before,.message.agentTypingIndicator::after {border-color: transparent " + H.agentTextBgColor + " transparent transparent;}", r += ".visitorChatContainer .messageWrapper .message::after {border-color: transparent transparent transparent " + H.visitorTextBgColor + ";}", r += ".agentChatContainer .messageWrapper .message::before,.agentChatContainer .messageWrapper .message::after {border-color: transparent " + H.agentTextBgColor + " transparent transparent;}", r += ".upload-data::before, .upload-data::after {border-color: transparent transparent transparent " + H.visitorTextBgColor + ";}", r += ".agentNameCentered{color:" + H.headerTxtColor + ";}", r += "#textareaContainer.additionalPadding{padding-right: " + a + "px;}", r += ".rtl-direction #textareaContainer.additionalPadding{padding-left: " + a + "px;padding-right: 14px;}", r += "#actionsContainer.mobile-typing #textareaContainer{padding-right: " + (a + 27) + "px;}", r += ".rtl-direction #actionsContainer.mobile-typing #textareaContainer{padding-left: " + (a + 27) + "px;}", H.maxStyle(r), p.MaximizedStyle += " " + p.CommonStyle), p.MinifiedMobileStyle && (s = s + t + i, bottomBorderRadius = ".bottom-border-corner{border-bottom-left-radius:" + H.bottomCorner + "px !important; border-bottom-right-radius:" + H.bottomCorner + "px !important;}", topBorderRadius = ".top-border-corner{border-top-left-radius:" + H.topCorner + "px !important; border-top-right-radius:" + H.topCorner + "px !important;}", s += topBorderRadius, s += bottomBorderRadius, H.mobMinStyle(s), p.MinifiedMobileStyle += " " + p.CommonStyle)), e.cf && (H.consentOption = {
              text: e.cf.msg,
              buttons: [{
                textReplace: e.cf.btnAccpt,
                placeholder: "__CUSTOM_SUBMIT_BUTTON__"
              }, {
                textReplace: e.cf.btnRjct,
                placeholder: "__CUSTOM_CLOSE_BUTTON__"
              }]
            }, e.cf.plcyUrl && (H.consentOption.text += "\n[" + (e.cf.plcyUrlTxt || e.cf.plcyUrlTxt) + "](" + e.cf.plcyUrl + ")")))
          }, We.prototype.processPrechatForm = function(e) {
            H.showPreChatForm = void 0 !== e.prechatForm && null !== e.prechatForm, H.showPreChatForm && (H.prechatOptions = e.prechatForm)
          }, We.prototype.processOfflineForm = function(e) {
            e = e.offlineForm ? e.offlineForm : {
              text: p.languageParser.translate("form", "OfflineFormMessage"),
              shortMessage: p.languageParser.translate("status", "offline"),
              fields: [{
                label: p.languageParser.translate("form", "name"),
                isRequired: !0,
                type: "name",
                value: "test"
              }, {
                label: p.languageParser.translate("form", "email"),
                isRequired: !0,
                type: "email"
              }, {
                label: p.languageParser.translate("form", "message"),
                isRequired: !0,
                type: "message"
              }]
            }, H.offlineOptions = e
          }, We.prototype.getPrechatFields = function() {
            return H.prechatOptions.fields
          }, We.prototype.getOfflineFields = function() {
            return H.offlineOptions.fields
          }, We.prototype.getShortMessage = function(e) {
            var t = null;
            return "online" === e && H.onlineGreeting ? t = H.onlineGreeting.shortMessage : "away" === e && H.awayGreeting ? t = H.awayGreeting.shortMessage : "offline" === e && H.offlineOptions && (t = H.offlineOptions.shortMessage), t
          }, We.prototype.getLongMessage = function(e) {
            var t = null;
            return "online" === e && H.onlineGreeting ? t = H.onlineGreeting.longMessage : "away" === e && H.awayGreeting ? t = H.awayGreeting.longMessage : H.offlineOptions && (t = H.offlineOptions.text), L.transformGreetings(t)
          }, o = new We;
          var Fe = function() {
            var e = this;
            _.name.subscribe(function(e) {
              _.displayName(L.parseVisitorName(e))
            }), p.eventEmitter.on("localeChanged", function() {
              _.displayName(L.parseVisitorName(_.name()))
            }), p.eventEmitter.on("visitorDataUpdate", function(t) {
              e.updateVisitorInformation(t)
            }), p.eventEmitter.on("requestEmailTranscript", function(e, t) {
              e.chatEndVersion = R.chatEndVersion, p.chatHandler.hasChatEnded ? p.socketManager.sendToConnector("notifyEndChatTranscript", e, t) : p.socketManager.sendToConnector("notifyEmailTranscript", e, t)
            })
          };
          Fe.prototype.updateVisitorUUID = function(e) {
            var t = JSON.parse(e.uuids);
            _.uuid = e.uuid, _.uuidVer = e.uver || 0, t && (Object.keys(t.e).forEach(function(e) {
              _.uuids.push({
                isExact: !0,
                domain: e,
                uuid: t.e[e]
              })
            }), Object.keys(t.p).forEach(function(e) {
              _.uuids.push({
                isExact: !1,
                domain: e,
                uuid: t.p[e]
              })
            })), K.storeUUID()
          }, Fe.prototype.updateVisitorInformation = function(e) {
            e.n && L.isString(e.n) && _.name(e.n), e.te && L.isString(e.te) && (_.transcriptEmail = e.te), e.e && L.isString(e.e) && _.email(e.e), e.vid && (_.visitorId = e.vid), e.dpt && L.isString(e.dpt) && (R.chatDepartment = e.dpt), e.pcfs && B.prechatFormSubmitted(!0)
          }, Fe.prototype.setNameFromForm = function(e) {
            p.visitorHandler.setNameValue(e), l.triggerApiHandlers("onVisitorNameChanged", e.name)
          }, Fe.prototype.getNameValue = function() {
            return _.name() === _.displayName() ? _.name() : ""
          }, Fe.prototype.setNameValue = function(e) {
            _.name(L.rawEncode(e.name))
          }, Fe.prototype.getTranscriptEmailValue = function() {
            return _.transcriptEmail
          }, Fe.prototype.getEmailValue = function() {
            return _.email() || _.transcriptEmail
          }, Fe.prototype.setEmailValue = function(e) {
            _.email(e.email)
          }, Fe.prototype.setTranscriptValue = function(e) {
            e.name && _.name(L.rawEncode(e.name)), _.transcriptEmail = e.transcriptEmail
          };
          var ze = function() {
            var e = this;
            p.eventEmitter.on("chatBubbleClosed", function() {
              B.chatBubbleClosed(!0)
            }), p.eventEmitter.on("windowStateUpdated", function(e) {
              B.chatWindowState(e.cw)
            }), p.eventEmitter.on("pageStatusUpdated", function(e) {
              var t;
              e && (t = e.ast) && L.isString(t) && L.isArray(e.dptst) && e.asver > B.pageStatusVersion && (p.scheduler.originalPageStatus = e.ast, B.pageStatusVersion = e.asver, B.departments = e.dptst, B.pageStatus(e.ast), p.scheduler.calculate())
            }), p.eventEmitter.on("submitPrechatForm", function(t, i) {
              e.formatPrechatData(t, i)
            }), p.eventEmitter.on("submitOfflineForm", function(t, i) {
              e.formatOfflineData(t, i)
            }), B.pageStatus.subscribe(function(e) {
              l.triggerApiHandlers("onStatusChange", e)
            }), p.eventEmitter.on("visitorTagsUpdate", function(e) {
              l.triggerApiHandlers("onTagsUpdated", e)
            })
          };
          ze.prototype.closeBubble = function() {
            B.chatBubbleClosed(!0), p.socketManager.sendToConnector("notifyChatBubbleClosed")
          }, ze.prototype.getDeparmentOptions = function() {
            var e, t, i, n = [],
              a = B.departments;
            for (a.sort(function(e, t) {
                var i = L.rawDecode(e.n).toLowerCase(),
                  n = L.rawDecode(t.n).toLowerCase();
                return i < n ? -1 : i > n ? 1 : 0
              }), e = 0, t = a.length; e < t; e++) i = a[e], n.push({
              text: i.n + " (" + p.languageParser.translate("status", i.st) + ")",
              value: i.did,
              selected: R.chatDepartment === i.did
            });
            return n
          }, ze.prototype.getDeparmentName = function(e) {
            var t, i, n = B.departments;
            for (t = 0, i = n.length; t < i; t++)
              if (n[t].did === e) return L.rawDecode(n[t].n);
            return e
          }, ze.prototype.formatFormData = function(e, t) {
            var i, n, a, r = {
              questions: []
            };
            for (i = 0, n = t.length; i < n; i++) {
              if ("name" === (a = t[i]).type && (r.name = e[a.id]), "email" === a.type && (r.email = e[a.id]), "department" === a.type) {
                if (!e[a.id] || "0" == e[a.id]) continue;
                r.department = e[a.id], e[a.id] = this.getDeparmentName(e[a.id])
              }
              e[a.id] && 0 !== e[a.id].length && (L.isArray(e[a.id]) ? r.questions.push({
                label: L.rawDecode(a.label),
                answer: e[a.id].join(", ")
              }) : r.questions.push({
                label: L.rawDecode(a.label),
                answer: e[a.id]
              }))
            }
            return r
          }, ze.prototype.formatPrechatData = function(e, t) {
            var i = this,
              n = this.formatFormData(e, o.getPrechatFields());
            p.socketManager.sendToConnector("notifyPrechat", n, function(e) {
              if (e) return t(e, n);
              l.triggerApiHandlers("onPrechatSubmit", n.questions), p.viewHandler.indicator.pageTitleNotification.off(), i.handlePrechatSave(n, t)
            })
          }, ze.prototype.handlePrechatSave = function(e, t) {
            var i, n, a = "";
            if (e.name && p.visitorHandler.setNameValue(e), e.email && p.visitorHandler.setEmailValue(e), B.prechatFormSubmitted(!0), 0 === e.questions.length) return t(null, e);
            if (0 < e.questions.length)
              for (i = 0, n = e.questions.length; i < n; i++) a += L.rawDecode(e.questions[i].label) + " : " + e.questions[i].answer, i !== n - 1 && (a += "\r\n");
            p.chatHandler.sendMessageToServer(a, null, function(i) {
              i.error || (p.chatHandler.prepareMessage({
                ut: "v",
                t: "c",
                m: L.rawEncode(a),
                co: new Date,
                uid: _.visitorId
              }, !1, !1, !0), p.viewHandler.addWaitTime()), t(i.error, e)
            })
          }, ze.prototype.formatOfflineData = function(e, t) {
            var i = this.formatFormData(e, o.getOfflineFields());
            i.questions.unshift({
              label: p.languageParser.translate("form", "SubmittedFrom"),
              answer: c.location.href
            }), p.socketManager.sendToConnector("notifyOfflineMessage", i, function(e) {
              if (e) return t(e, i);
              l.triggerApiHandlers("onOfflineSubmit", i), t(null, i)
            })
          }, ze.prototype.visitorChatDismiss = function(e) {
            var t;
            p.chatHandler.messages && (t = (t = Object.keys(p.chatHandler.messages))[t.length - 1], (t = p.chatHandler.messages[t]) && t.co && (t = new Date(t.co).getTime(), p.socketManager.sendToConnector("visitorChatDismiss", {
              timestamp: t
            }, function(t) {
              if (t) return e(t);
              e(null)
            })))
          }, ze.prototype.notifyWindowState = function(e) {
            B.chatWindowState(e), p.socketManager.sendToConnector("notifyWindowState", e)
          }, ze.prototype.addEvent = function(e, t, i) {
            var n;
            "function" == typeof t && (i = t, t = null), i = i || function() {}, (n = this.secureWrapper({})).name = e, n.data = t, p.socketManager.sendToConnector("addEvent", n, i)
          }, ze.prototype.setAttributes = function(e, t, i) {
            i = i || function() {}, t ? (l.visitor = l.visitor || {}, e.name && (l.visitor.name = e.name), e.email && (l.visitor.email = e.email), e.hash && (l.visitor.hash = e.hash)) : e = this.secureWrapper(e), p.socketManager.sendToConnector("setAttributes", e, function(t) {
              t || (e.name && p.visitorHandler.setNameValue(e), e.email && p.visitorHandler.setEmailValue(e)), i(t)
            })
          }, ze.prototype.addTags = function(e, t) {
            var i;
            t = t || function() {}, (i = this.secureWrapper({})).tags = e, p.socketManager.sendToConnector("addTags", i, t)
          }, ze.prototype.removeTags = function(e, t) {
            var i;
            t = t || function() {}, (i = this.secureWrapper({})).tags = e, p.socketManager.sendToConnector("removeTags", i, t)
          }, ze.prototype.secureWrapper = function(e) {
            return "undefined" === e && (e = {}), l && l.visitor && (l.visitor.email && (e.email = l.visitor.email), l.visitor.hash && (e.hash = l.visitor.hash)), e
          }, ze.prototype.setVisitorAttributes = function() {
            var e = {};
            l && l.visitor && (l.visitor.name && (e.name = l.visitor.name), l.visitor.email && (e.email = l.visitor.email), this.setAttributes(e, !1))
          };
          var Ue = function() {
            var e = this;
            this.agentHasMessaged = this.visitorHasMessaged = !1, this.messageBuffer = [], this.messages = {}, this.agentsTyping = [], this.agentProfilesTyping = [], this.previousTextTime = this.previousText = this.lastMessageOwner = null, this.hasChatEnded = !1, this.hasChatStarted = g.observable(!1), this.hasWebRTCall = !1, p.eventEmitter.on("syncConversation", function(t) {
              e.conversationUpdate(t)
            }), p.eventEmitter.on("incomingMessage", function(t) {
              e.handleMessageFromServer(t)
            }), p.eventEmitter.on("agentIsTyping", function(t) {
              H.showAgentTyping && e.handleAgentTyping(t.rsc)
            }), p.eventEmitter.on("agentStopedTyping", function(t) {
              e.handleAgentStoppedTyping(t.rsc)
            }), p.eventEmitter.on("newChatRating", function(t) {
              e.changeRating(t.rsc, !0)
            }), p.eventEmitter.on("webrtcCallStatus", function(e) {
              p.viewHandler.subscribeCallUpdate(e.clid)
            }), p.eventEmitter.on("visitorChatDismiss", function(e) {
              p.viewHandler.closeMessagePreview(e)
            }), p.eventEmitter.on("visitorChatSeen", function(e) {
              B.lastMessageTimestamp = e.lmst, p.viewHandler.clearUnseenNotification()
            })
          };
          Ue.prototype.parseHistory = function(e) {
            var t, i, n, a;
            (new Date).getTime();
            var r = n = 0;
            for (this.noRedraw = !0, R.chatEndVersion = 1, t = 0, i = R.chatHistory.length; t < i; t++) "CHAT_ENDED" === R.chatHistory[t].m && (n = t + 1, R.chatEndVersion++);
            for (a = 0 < R.chatOrder ? this.messages[R.chatOrder] : null, t = n, i = R.chatHistory.length; t < i; t++)(n = R.chatHistory[t]).md && (!n.md || n.md.ao) || e && a && a.timeStamp > new Date(n.co).getTime() || ("v" !== n.ut || this.visitorHasMessaged || "c" !== n.t || (r = (new Date).getTime() - L.getMilliseconds(n.co)), "WEBRTC_CALL" === n.m && n.md && n.md.webrtc ? (this.hasWebRTCall = !0, p.viewHandler.subscribeCallUpdate(n.md.clid, !0)) : this.prepareMessage(n, !0, !1, !1));
            this.noRedraw = !1, this.visitorHasMessaged && !this.agentHasMessaged && H.showWaitTime && (B.waitTime = B.waitTime < r ? 6e4 : B.waitTime - r, p.viewHandler.addWaitTime()), this.hasChatStarted(this.visitorHasMessaged || this.agentHasMessaged)
          }, Ue.prototype.handleIndicator = function() {
            p.viewHandler.indicator.show(), T && (p.viewHandler.hasChatStarted = !0)
          }, Ue.prototype.handleMessageFromServer = function(e) {
            var t = null;
            if (e.md && e.md.ao) return R.chatVersion = e.cver;
            if ("offline" === B.pageStatus()) {
              if ("a" !== e.ut) return;
              B.pageStatus("online")
            }
            if (!R.chatSynced) return R.chatBuffer.push(e);
            this.hasChatEnded && this.startNewChat(), "WEBRTC_CALL" === e.m && e.md && e.md.webrtc ? this.hasWebRTCall = !0 : "CHAT_ENDED" !== e.m || this.hasChatEnded ? ("v" === e.ut && "c" === e.t && p.viewHandler.addWaitTime(), H.isPopup || "c" !== e.t || p.viewHandler.isMaximized || "v" === e.ut || H.isEmbedded || !T || (p.viewHandler.hasChatStarted = !0), R.chatVersion = e.cver, "s" === e.ut || "c" !== e.t || this.hasChatStarted() || (this.hasChatStarted(!0), l.triggerApiHandlers("onChatStarted", {
              chatId: R.chatId
            })), "c" === e.t ? "a" === e.ut ? e.md && e.md.file ? l.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + e.md.file.name) : l.triggerApiHandlers("onChatMessageAgent", e.m) : "s" === e.ut && l.triggerApiHandlers("onChatMessageSystem", e.m) : "n" === e.t && ("AGENT_JOIN_CONVERSATION" === e.m ? (e.md && e.md.pi && e.md.pi.length && (t = "https://s3.amazonaws.com/talk-pi/" + e.md.pi), l.triggerApiHandlers("onAgentJoinChat", {
              name: e.n,
              position: e.md.pst,
              image: t,
              id: e.uid
            })) : "AGENT_LEFT_CONVERSATION" === e.m && l.triggerApiHandlers("onAgentLeaveChat", {
              name: e.n,
              id: e.uid
            })), this.prepareMessage(e, !1), p.scheduler.calculate()) : (R.chatId = e.md.nchid, this.endChat(e.md.cev))
          }, Ue.prototype.prepareMessage = function(e, t, i, n) {
            var a, r, o, s, l = !0;
            "n" === e.t && "v" === e.ut ? "VISITOR_RATING" === e.m && this.changeRating(e.md.rt, !0) : ("v" === e.ut ? (a = _.displayName(), r = e.uid) : (a = e.n, "a" === e.ut ? r = R.profiles[e.md.rsc] : "s" === e.ut && e.md && (s = e.md.pi)), "n" !== e.t || "AGENT_JOIN_CONVERSATION" !== e.m && "AGENT_LEFT_CONVERSATION" !== e.m || (l = !1, p.agents.updateAgentPresence(e.m, e.md, e.n, e.md.rsc, !i)), l && (o || (o = this.parseText(e.m)), void 0 === t && (t = !0), e.timeStamp = new Date(e.co).getTime(), e.messageId = p.viewHandler.appendMessage({
              message: o,
              name: a,
              type: e.t,
              time: e.co,
              data: e.md,
              isPending: !1,
              senderType: e.ut,
              ownerId: r,
              dontPlaySound: t,
              profileImg: s,
              reDisplay: n,
              timeStamp: e.timeStamp
            }), n || R.chatOrder++, this.messages[R.chatOrder] = e))
          }, Ue.prototype.parseText = function(e) {
            if (e) return e = e.replace(L.regLineBreaks, L.br), this.createUrl(e.split(/\s/), " ")
          }, Ue.prototype.createUrl = function(e, t) {
            function i(e) {
              return p.chatHandler.parseUrl(e)
            }

            function n(e) {
              return p.chatHandler.parseEmail(e)
            }
            var a, r, o;
            for (r = 0, o = e.length; r < o; r++) - 1 !== e[r].indexOf(L.br) ? (a = e[r].split(L.regBr), e[r] = this.createUrl(a, L.br)) : e[r].match(L.regEmailMatch) ? e[r] = e[r].replace(L.regEmailMatch, n) : (e[r] = e[r].replace(L.regMatchUrl, i), e[r] = e[r].replace(L.regMatchIp, i));
            return e.join(t)
          }, Ue.prototype.parseUrl = function(e) {
            var t, i = "";
            return void 0 !== ie && ie.unifyUnicode(e) !== e ? e : (e.match(L.regEmailMatch) && (i = "mailto:"), "mailto:" === i ? (-1 !== (t = e.match(L.regEmailMatch)[0]).indexOf("mailto") && (i = ""), e.replace(L.regEmailMatch, '<a href="' + (i + t) + '" title="' + (i + t) + '" style="word-wrap:break-word; white-space:normal;>' + t + "</a> ")) : (0 !== e.toLowerCase().indexOf("http") && 0 !== e.toLowerCase().indexOf("ftp") && (i = "http://"), '<a target="_blank" href="' + (i + e) + '" title="' + (i + e) + '" style="word-wrap:break-word; white-space:normal;">' + e + "</a> "))
          }, Ue.prototype.parseEmail = function(e) {
            var t = "";
            return void 0 !== ie && ie.unifyUnicode(e) !== e ? e : (-1 === e.indexOf("mailto") && (t = "mailto:"), '<a href="' + (t + e) + '" title="' + (t + e) + '">' + e + "</a> ")
          }, Ue.prototype.sendTextPreview = function(e) {
            var t, i, n = this;
            if (t = p.eventHandler.getTargetElement(e), 13 === e.keyCode && !e.shiftKey && !T) return p.eventHandler.cancelEvent(e), i = L.trim(t.value), t.value = "", this.sendMessage(i);
            !this.keyDownTimeout && H.showVisitorTyping() && (this.keyDownTimeout = setTimeout(function() {
              i = L.trim(t.value), void 0 !== ie && (i = ie.toShort(i)), p.socketManager.sendToConnector("notifyMessagePreview", i), clearTimeout(n.keyDownTimeout), n.keyDownTimeout = 0
            }, 1e3))
          }, Ue.prototype.sendMessage = function(e, t, i) {
            var n = (new Date).getTime();
            if (e = L.trim(e), clearTimeout(this.keyDownTimeout), this.keyDownTimeout = 0, !e) return !!i && i();
            void 0 !== ie && (e = ie.toShort(e)), this.previousText && this.previousTextTime && this.previousText === e && 500 > n - this.previousTextTime && p.loggingHandler.logIncident("Double message occured", {
              previousText: this.previousText,
              currentText: e,
              currentT: n,
              previousT: this.previousTextTime
            }), this.previousTextTime = n, this.previousText = e, t = !!t, t = p.viewHandler.appendMessage({
              message: this.parseText(L.rawEncode(e)),
              name: _.displayName(),
              type: "c",
              time: new Date,
              isPending: !0,
              senderType: "v",
              ownerId: _.visitorId,
              dontPlaySound: t
            }), this.sendMessageToServer(e, t, i)
          }, Ue.prototype.sendMessageToServer = function(e, t, i) {
            var n, a = this;
            i = i || function(e) {
              p.viewHandler.handleAcknowledgment(e)
            }, p.socketManager.sendToConnector("sendChatMessage", e, function(r, o, s) {
              r || (n = ++R.chatOrder, a.messages[n] = {
                ut: "v",
                t: "c",
                m: L.rawEncode(e),
                co: o,
                messageId: t,
                uid: _.visitorId
              }, R.chatVersion = s, a.hasChatStarted() || "offline" === B.pageStatus() || (a.hasChatStarted(!0), l.triggerApiHandlers("onChatStarted", {
                chatId: R.chatId
              })), l.triggerApiHandlers("onChatMessageVisitor", e)), i({
                error: r,
                messageId: t,
                order: n
              })
            })
          }, Ue.prototype.conversationUpdate = function(e) {
            var t, i, n = (e = e || {}).cver || 0,
              a = e.c || [];
            if (i = R.chatBuffer, R.chatSynced = !0, !(R.chatVersion >= n)) {
              for (e = 0, t = i.length; e < t; e++) i[e].cver > n && a.push(i[e]);
              for (e = 0, t = a.length; e < t; e++)(i = a[e]).md && i.md.ao || this.prepareMessage(i, !1);
              this.visitorHasMessaged && !this.agentHasMessaged && H.showWaitTime && p.viewHandler.addWaitTime(), R.chatVersion = n, this.isScrollbar = p.viewHandler.isChatScrollbar(), p.viewHandler.scrollToBottom()
            }
          }, Ue.prototype.handleAgentTyping = function(e) {
            var t = R.profiles[e];
            t && R.agentProfiles[t] && !this.agentsTyping[e] && (this.agentsTyping[e] = !0, this.agentProfilesTyping[t] ? this.agentProfilesTyping[t]++ : (this.agentProfilesTyping[t] = 1, p.viewHandler.appendAgentIsTypingElement(t)))
          }, Ue.prototype.handleAgentStoppedTyping = function(e) {
            var t = R.profiles[e];
            this.agentsTyping[e] && delete this.agentsTyping[e], !this.agentProfilesTyping[t] || 0 < --this.agentProfilesTyping[t] || (delete this.agentProfilesTyping[t], p.viewHandler.removeAgentTypingElement(t))
          }, Ue.prototype.changeRating = function(e, t) {
            R.rating() === e && (e = 0), R.rating(e), t || (p.socketManager.sendToConnector("setRating", e), l.triggerApiHandlers("onChatSatisfaction", R.rating()))
          }, Ue.prototype.toggleSound = function(e) {
            var t = !H.soundOn();
            void 0 !== e && (t = e), H.soundOn(t), void 0 === e && p.socketManager.sendToConnector("toggleSound", t)
          }, Ue.prototype.clearChatMessages = function() {
            this.agentHasMessaged = this.visitorHasMessaged = !1, this.messageBuffer = [], this.messages = {}, this.agentsTyping = [], this.agentProfilesTyping = [], this.lastMessageOwner = null, R.chatOrder = 0, R.chatSynced = !1, R.chatBuffer = []
          }, Ue.prototype.startNewChat = function() {
            this.clearChatMessages(), p.viewHandler.removeWaitTime(), p.viewHandler.resetView(), p.viewHandler.handleRestartChat(), R.chatSynced = !0, T || ("max" === B.chatWindowState() ? p.viewHandler.maximizeWidget() : p.viewHandler.minimizeWidget()), this.hasChatEnded = !1
          }, Ue.prototype.endChat = function(e) {
            p.viewHandler.handleEndChat(), p.agents.clearAgents(), this.hasChatEnded = !0, this.hasChatStarted(!1), R.chatEndVersion = e, l.triggerApiHandlers("onChatEnded")
          }, Ue.prototype.sendFileMessage = function(e) {
            var t = this,
              i = {
                fileName: e.filename,
                name: e.name,
                type: e.extension,
                mimeType: e.mimeType,
                size: e.size
              };
            p.socketManager.sendToConnector("fileUploadMessage", i, function(n, a, r) {
              n || (p.viewHandler.fileUploaded(e.handle), i.fileName = L.rawEncode(i.fileName), messageId = p.viewHandler.appendMessage({
                message: "FILE",
                name: _.displayName(),
                type: "c",
                time: a,
                isPending: !1,
                senderType: "v",
                ownerId: _.visitorId,
                dontPlaySound: !0,
                data: {
                  file: i
                }
              }), chatOrder = ++R.chatOrder, t.messages[chatOrder] = {
                ut: "v",
                t: "c",
                m: "FILE",
                co: a,
                messageId: messageId,
                uid: _.visitorId,
                md: {
                  file: i
                }
              }, R.chatVersion = r, l.triggerApiHandlers("onFileUpload", "https://tawkto.link/" + i.name))
            })
          }, Ue.prototype.isChatOngoing = function() {
            return !this.hasChatEnded && this.visitorHasMessaged && 0 < p.agents.totalAgents()
          }, Ue.prototype.isVisitorEngaged = function() {
            return !this.hasChatEnded && this.visitorHasMessaged
          }, Ue.prototype.triggerEndChat = function() {
            var e = this;
            p.socketManager.sendToConnector("endVisitorChat", {}, function(t, i) {
              t || (R.chatId = i.nextChatId, e.endChat(i.chatEndVersion))
            })
          }, Ue.prototype.getMessageObjectById = function(e) {
            var t, i = null;
            for (t in this.messages)
              if (this.messages[t].messageId === e) {
                i = this.messages[t];
                break
              } return i
          };
          var Ve = function() {
            this.agentsCount = 0, this.totalAgents = g.observable(0)
          };
          Ve.prototype.updateAgentPresence = function(e, t, i, n, a) {
            if (!H.showAgentBar) return !0;
            if ("AGENT_JOIN_CONVERSATION" !== e && "AGENT_LEFT_CONVERSATION" !== e) return !1;
            switch (e) {
              case "AGENT_JOIN_CONVERSATION":
                return this.addAgentToList(t, i, n, a);
              case "AGENT_LEFT_CONVERSATION":
                return this.removeAgentFromList(t, n, a)
            }
          }, Ve.prototype.addAgentToList = function(e, t, i, n) {
            var a = R.agents[i];
            if (a) {
              if (!(a.seq.time < e.seq.time || a.seq.time === e.seq.time && a.seq.inc < e.seq.inc)) return !1;
              if (a.seq = e.seq, a.pid === e.pid) return !1;
              this.changeAgentProfile(a.pid, n), a.pid = e.pid, R.profiles[i] = e.pid
            } else R.agents[i] = e, R.profiles[i] = e.pid;
            return !!e.pid && (this.totalAgents(this.totalAgents() + 1), void 0 !== R.agentProfiles[e.pid] ? (R.agentProfiles[e.pid].pi = e.pi, R.agentProfiles[e.pid].count++, !1) : (t = {
              pi: e.pi,
              pst: e.pst || "",
              pid: e.pid,
              n: t,
              count: 1
            }, R.agentProfiles[e.pid] = t, n && p.viewHandler.appendAgent(t), !0))
          }, Ve.prototype.changeAgentProfile = function(e, t) {
            var i;
            i = R.agentProfiles[e], this.decrementProfileCount(e, t) && t && (i = {
              message: p.languageParser.translate("chat", "AGENT_LEFT_CONVERSATION", {
                n: "<b>" + i.n + "</b>"
              }),
              name: "",
              type: "n",
              time: new Date,
              isPending: !1,
              senderType: "a",
              ownerId: "",
              dontPlaySound: !0
            }, R.chatOrder++, p.chatHandler.messages[R.chatOrder] = i, p.viewHandler.appendMessage(i))
          }, Ve.prototype.removeAgentFromList = function(e, t, i) {
            var n = R.agents[t];
            return n ? (t = n.pid, (n.seq.time < e.seq.time || n.seq.time === e.seq.time && n.seq.inc < e.seq.inc) && (n.seq = e.seq, n.pid = null, this.totalAgents(this.totalAgents() - 1), this.decrementProfileCount(t, i))) : (R.agents[t] = e, !1)
          }, Ve.prototype.decrementProfileCount = function(e, t) {
            var i = R.agentProfiles[e];
            if (i) return i.count--, 1 > i.count && (delete R.agentProfiles[e], t && p.viewHandler.removeAgent(e), !0)
          }, Ve.prototype.clearAgents = function() {
            this.agentsCount = 0, this.totalAgents(0), R.agentProfiles = {}, R.agents = {}, R.profiles = {}, p.viewHandler.clearAgentFooter(), p.viewHandler.clearAgentHeader(), p.viewHandler.closeAgentList()
          };
          var qe = function() {
            var e = this;
            this.stack = [], this.socketConnector = new de, this.events = {}, p.eventEmitter.on("socketReady", function() {
              e.clearStack()
            })
          };
          qe.prototype.initConnector = function() {
            this.socketConnector.init()
          }, qe.prototype.sendToConnector = function(e, i, n) {
            if (t.connected)
              if (void 0 !== n || "function" == typeof i) this.safeCallback(e, i, n);
              else try {
                this.socketConnector.emit(e, i, n)
              } catch (t) {
                a.handleError("Unable to emit to socket connector in sendToConnector for command : " + e + " with data :" + JSON.stringify(i), t.fileName, t.lineNumber, t.stack)
              } else this.addToStack(e, i, n)
          }, qe.prototype.addToStack = function(e, t, i) {
            "sendChatMessage" === e && delete this.events.notifyMessagePreview, "notifyMessagePreview" === e ? this.events[e] = {
              command: e,
              data: t,
              callback: i
            } : this.stack.push({
              command: e,
              data: t,
              callback: i
            })
          }, qe.prototype.clearStack = function() {
            var e = this;
            for (var t in this.stack.forEach(function(t) {
                e.sendToConnector(t.command, t.data, t.callback)
              }), this.events) e.sendToConnector(e.events[t].command, e.events[t].data, e.events[t].callback);
            this.stack = [], this.events = {}
          }, qe.prototype.safeCallback = function(e, t, i) {
            var n, r;
            "function" == typeof t && (i = t, t = null), n = setTimeout(function() {
              throw i(!0), Error("Socket server did not execute the callback for " + e + " with data : " + JSON.stringify(t))
            }, 35e3), r = function() {
              clearTimeout(n), r = function() {}, i.apply(null, arguments)
            };
            try {
              null === t ? this.socketConnector.emit(e, r) : this.socketConnector.emit(e, t, r)
            } catch (i) {
              a.handleError("Unable to emit to socket connector in safeCallback for command : " + e + " with data :" + JSON.stringify(t), i.fileName, i.lineNumber, i.stack)
            }
          }, qe.prototype.disconnectConnector = function() {
            this.socketConnector.disconnectSocket()
          }, qe.prototype.connectorListeningOn = function(e) {
            return 0 !== this.socketConnector.listeners(e).length
          }, qe.prototype.isForcedDisconnect = function() {
            return this.socketConnector.forceDisconnected
          };
          var je = function() {
            this.started = this.maximize = this.isDocumentReady = !1, this.previousSessionKey = null, this.waitingForLanguage = !1, this.startTime = t.startTime, this.versionReloadTimeout = null, this.dataIsReady = this.viewIsReady = !1
          };
          je.prototype.load = function() {
            var e = this;
            I.pageId = $_Tawk_AccountKey, H.widgetId = $_Tawk_WidgetId, void 0 !== I.pageId && void 0 !== H.widgetId && (o.processSettings(t.widgetSettings), this.init(), this.isDocumentReady || (p.eventHandler.listen(document, "DOMContentLoaded", function() {
              e.init()
            }, "domloaded"), p.eventHandler.listen(document, "readystatechange", function() {
              ("complete" === document.readyState || "interactive" === document.readyState && document.body) && e.init()
            }, "domstatechange"), p.eventHandler.listen(c, "load", function() {
              e.init()
            }, "windowload")), p.eventEmitter.on("removeWidget", function(t) {
              e.removeWidget()
            }), p.eventEmitter.on("submitConsent", function(t) {
              e.registerWithConsent()
            }))
          }, je.prototype.init = function() {
            var e, t;
            "XMLHttpRequest" in c && "withCredentials" in new XMLHttpRequest && h.cookieEnabled && !this.isDocumentReady && (this.isDocumentReady = !0, !(t = L.parseQueryString()).$_tawk_beacon && "operamini" !== T) && ((e = L.getReloadedScript()) && (e = L.parseQueryString(e.src), B.restarted = e.restarted, this.maximize = e.maximized), (l = {
              disableSound: !!Tawk_API.disableSound,
              embedded: Tawk_API.embedded || null,
              visitor: Tawk_API.visitor || null,
              disableMobileBackHistory: !!Tawk_API.disableMobileBackHistory,
              isPopup: !!Tawk_API.isPopup,
              onBeforeLoad: {
                eventName: "tawkBeforeLoad",
                func: Tawk_API.onBeforeLoad
              },
              onLoad: {
                eventName: "tawkLoad",
                func: Tawk_API.onLoad
              },
              onStatusChange: {
                eventName: "tawkStatusChange",
                func: Tawk_API.onStatusChange
              },
              onChatMaximized: {
                eventName: "tawkChatMaximized",
                func: Tawk_API.onChatMaximized
              },
              onChatMinimized: {
                eventName: "tawkChatMinimized",
                func: Tawk_API.onChatMinimized
              },
              onChatHidden: {
                eventName: "tawkChatHidden",
                func: Tawk_API.onChatHidden
              },
              onChatStarted: {
                eventName: "tawkChatStarted",
                func: Tawk_API.onChatStarted
              },
              onChatEnded: {
                eventName: "tawkChatEnded",
                func: Tawk_API.onChatEnded
              },
              onPrechatSubmit: {
                eventName: "tawkPrechatSubmit",
                func: Tawk_API.onPrechatSubmit
              },
              onOfflineSubmit: {
                eventName: "tawkOfflineSubmit",
                func: Tawk_API.onOfflineSubmit
              },
              onChatMessageVisitor: {
                eventName: "tawkChatMessageVisitor",
                func: Tawk_API.onChatMessageVisitor
              },
              onChatMessageAgent: {
                eventName: "tawkChatMessageAgent",
                func: Tawk_API.onChatMessageAgent
              },
              onChatMessageSystem: {
                eventName: "tawkChatMessageSystem",
                func: Tawk_API.onChatMessageSystem
              },
              onAgentJoinChat: {
                eventName: "tawkAgentJoinChat",
                func: Tawk_API.onAgentJoinChat
              },
              onAgentLeaveChat: {
                eventName: "tawkAgentLeaveChat",
                func: Tawk_API.onAgentLeaveChat
              },
              onChatSatisfaction: {
                eventName: "tawkChatSatisfaction",
                func: Tawk_API.onChatSatisfaction
              },
              onVisitorNameChanged: {
                eventName: "tawkVisitorNameChanged",
                func: Tawk_API.onVisitorNameChanged
              },
              onFileUpload: {
                eventName: "tawkFileUpload",
                func: Tawk_API.onFileUpload
              },
              onTagsUpdated: {
                eventName: "tawkTagsUpdated",
                func: Tawk_API.onTagsUpdated
              },
              onUnreadCountChanged: {
                eventName: "tawkUnreadCountChanged"
              },
              triggerApiHandlers: function(e, t) {
                var i = l[e];
                if (void 0 !== i) {
                  if ("onBeforeLoad" === e) {
                    if (Tawk_API.onBeforeLoaded) return;
                    Tawk_API.onBeforeLoaded = !0
                  } else if ("onLoad" === e) {
                    if (Tawk_API.onLoaded) return;
                    Tawk_API.onLoaded = !0
                  }
                  if (this.dispatch(i.eventName, t), "function" == typeof i.func) try {
                    i.func(t)
                  } catch (e) {}
                }
              },
              dispatch: function(e, t) {
                var i;
                e && (i = "function" == typeof c.CustomEvent ? new CustomEvent(e, {
                  detail: t
                }) : new p.CustomEventIE(e, {
                  detail: t
                }), c.dispatchEvent(i))
              }
            }).isPopup && (B.transferKey = t.$_tawk_tk, B.sessionKey = t.$_tawk_sk, H.isPopup = !0), l.embedded && (H.isEmbedded = !0, T = null), T ? (H.isPopup ? p.viewHandler = new Ae : this.initRenderer(T), p.formHandler = new ve) : (p.formHandler = new ve, p.viewHandler = new Te, p.audioPlayer.initAudioPlayer()), p.viewHandler && (p.sessionHandler.setVisitorAttributes(), l.triggerApiHandlers("onBeforeLoad"), this.bootStrap()))
          }, je.prototype.bootStrap = function() {
            var e = this;
            this.dataIsReady = this.viewIsReady = !1, setTimeout(function() {
              p.viewHandler.begin(), e.viewIsReady = !0, e.setupDone()
            }, 0), setTimeout(function() {
              r.register()
            }, 0)
          }, je.prototype.initRenderer = function(e) {
            switch (e) {
              case "chrome":
                p.viewHandler = new He(e);
                break;
              case "safari":
                p.viewHandler = new _e(e);
                break;
              case "opera":
                p.viewHandler = new Ie(e);
                break;
              case "android":
                p.viewHandler = new Re(e);
                break;
              case "android2.3":
                p.viewHandler = new Be(e);
                break;
              case "android2":
                p.viewHandler = new Ne(e);
                break;
              case "firefox":
                p.viewHandler = new Pe(e);
                break;
              case "ie":
                p.viewHandler = 10 > b ? new Ne(e) : new Me(e);
                break;
              case "blackberry":
              case "nokia":
                p.viewHandler = new Ne(e);
                break;
              case "uc":
                p.viewHandler = new Re(e)
            }
            p.viewHandler && p.viewHandler.init()
          }, je.prototype.begin = function(e) {
            r.registerStarted = !1, r.clearTimers(), r.registerTime = (new Date).getTime() - r.registerStart, r.registerStart = null, e.error ? "USER_ERROR" === e.error || "SERVER_DOWN" === e.error ? this.hideWidget() : r.retryRegister() : (p.activityManager.initActivityReset(), this.started ? this.reinited(e) : (this.started = !0, this.extractRegisterData(e), this.dataIsReady = !0, this.setupDone()))
          }, je.prototype.extractRegisterData = function(e) {
            e.wdgt && (e.wdgt.lc !== t.widgetSettings.lc && (this.waitingForLanguage = !0, L.insertScript("https://static-v.tawk.to/679/languages/" + e.wdgt.lc + ".js")), o.processSettings(e.wdgt)), e.rcf && H.consentOption ? (this.needConsent = !0, H.showConsentForm = !0) : (this.needConsent = !1, H.showConsentForm = !1), "max" !== H.onClickAction || T || (this.maximize = "max" === e.cw, B.chatWindowState(e.cw)), B.criticalVersion = e.cjsv || 0, B.visitorSocketServer = e.vss, B.sessionKey = e.sk, B.transferKey = e.tk, B.transferedSession = !!e.ts, B.serverVersion = e.jsv || 0, this.needConsent || (p.visitorHandler.updateVisitorUUID(e), p.visitorHandler.updateVisitorInformation(e)), H.soundOn() && H.soundOn(e.sdo), H.whiteLabel(e.wl), H.scheduleTimezone = e.wstz, B.prechatFormSubmitted(!!e.pcfs), B.departments = L.isArray(e.dptst) ? e.dptst.reverse() : [], B.pageStatusVersion = e.asver || 0, B.waitTime = e.ewt ? 1e3 * e.ewt : 6e4, I.tawkId = e.twid, I.pageName(L.rawDecode(e.pgn)), B.pageStatus(e.ast || "offline"), B.chatBubbleClosed(!!e.bblc), R.chatVersion = e.cver || 0, R.chatDepartment = e.dpt || "any", R.chatHistory = e.c || [], R.chatId = e.chid, H.webRTCSettings(e.webrtc), H.brandingRedirect(e.otl), B.lastMessageTimestamp = e.lmst
          }, je.prototype.initBuildChat = function() {
            p.chatHandler.parseHistory(), p.viewHandler.applyWhiteLabelSettings(), this.showWidget(), this.needConsent || (p.socketManager.initConnector(), delete t.init), t.ready = !0, l.triggerApiHandlers("onLoad")
          }, je.prototype.reinited = function(e) {
            var t = B.sessionKey;
            this.extractRegisterData(e), t !== e.sk ? (p.chatHandler.clearChatMessages(), p.viewHandler.resetView(), p.agents.clearAgents()) : (B.visitorSocketServer = e.vss, B.sessionKey = e.sk, B.transferKey = e.tk, B.transferedSession = !!e.ts, B.serverVersion = e.jsv || 0, p.visitorHandler.updateVisitorUUID(e)), p.scheduler.setup(), p.viewHandler.updateViewByStatus(B.pageStatus()), p.chatHandler.parseHistory(!0), p.socketManager.initConnector()
          }, je.prototype.criticalRefresh = function(e, i, n) {
            var a = this,
              r = (new Date).getTime(),
              o = "https://embed.tawk.to/" + I.pageId + "/" + $_Tawk_WidgetId + "?refresh=true&";
            if (H.isPopup) return c.location.reload(!!i);
            this.dataIsReady = this.viewIsReady = !1, this.removeWidget(), i && (o += "restarted=true&"), n && (o += "maximized=true&"), o += "v=" + e || B.serverVersion || B.currentVersion, delete t.downloaded, L.insertScript(o, "TawkScript-" + r);
            var s = setInterval(function() {
              c.$_Tawk.startTime !== a.startTime && (p = null, clearInterval(s), clearTimeout(a.versionReloadTimeout))
            }, 200)
          }, je.prototype.removeWidget = function() {
            var e;
            p && p.viewHandler && p.viewHandler.iframeContainer && (e = document.getElementById(p.viewHandler.iframeContainer.elementId)), r.clearTimers(), p.eventHandler.clearEvents(), p.activityManager.cleanUp(), p.socketManager.disconnectConnector(), p.eventEmitter.removeAllListeners(), p.scheduler.cleanUp(), clearTimeout(L.checkWhiteLabelRef), p.viewHandler.messagePreview && p.viewHandler.messagePreview.hide(), void 0 !== L.messagePreviewCheckWhiteLabelRef && clearTimeout(L.messagePreviewCheckWhiteLabelRef), e && e.parentNode.removeChild(e)
          }, je.prototype.setupDone = function(e) {
            e && (p.languageParser.language = t.language, this.waitingForLanguage = !1), this.viewIsReady && this.dataIsReady && !this.waitingForLanguage && this.initBuildChat()
          }, je.prototype.showWidget = function() {
            p.scheduler.setup(), !H.isPopup && H.hideWidgetOnLoad || p.viewHandler.show()
          }, je.prototype.hideWidget = function() {
            p && p.viewHandler && p.viewHandler.hideWidget()
          }, je.prototype.registerWithConsent = function() {
            this.maximize = !0, K.storeSessionInformation(!1, "cf"), r.register()
          }, t.languageUpdater = function() {
            if (p && p.main && p.main.waitingForLanguage) {
              p.main.setupDone(!0);
              try {
                p.eventEmitter.emit("localeChanged")
              } catch (e) {
                a.handleError("Unable to emit locale changed", e.fileName, e.lineNumber, e.stack)
              }
            }
          };
          var Ge = function(e, t) {
            this.language = e, this.notFoundCallback = "function" == typeof t ? t : function() {}
          };
          if (Ge.prototype.translate = function(e, t, i, n) {
              var a, r;
              a = [];
              var o = this.language || n;
              if (!o[e]) return this.notFoundCallback(Error("Missing context : {" + e + "}, {" + t + "}")), t;
              if (!(n = o[e][t])) return this.notFoundCallback(Error("Missing key : {" + e + "}, {" + t + "}")), t;
              if (t = n.pluralVars ? n.pluralVars.length : 0, r = n.vars ? n.vars.length : 0, 0 < t) {
                for (e = 0; e < t; e++) a.push(o.pluralFormFunction(i[n.pluralVars[e]]));
                for (a = n.message[a.join("_")], e = 0; e < t; e++) a = a.replace(RegExp("#" + n.pluralVars[e], "g"), this.escapeStringReplacePlacement(i[n.pluralVars[e]]))
              } else a = n.message;
              if (0 < r)
                for (e = 0; e < r; e++) a = a.replace(RegExp("#" + n.vars[e], "g"), this.escapeStringReplacePlacement(i[n.vars[e]]));
              return a
            }, Ge.prototype.escapeStringReplacePlacement = function(e) {
              return "string" == typeof e ? e.replace(/\$/g, "$$$") : e
            }, Ge.prototype.hasTranslation = function(e, t, i) {
              return !!((i = i || this.language) && i[e] && i[e][t])
            }, "undefined" != typeof module && (module.exports = Ge), p.eventEmitter = new EventEmitter, p.eventEmitter.on("error", function(e) {
              a.handleError("EventEmitter on error", e.fileName, e.lineNumber, e.stack)
            }), p.loggingHandler = new V, p.eventHandler = new j, p.activityManager = new Le, p.scheduler = new Oe, p.main = new je, p.languageParser = new Ge(t.language), p.socketManager = new qe, p.sessionHandler = new ze, p.chatHandler = new Ue, p.agents = new Ve, p.visitorHandler = new Fe, p.audioPlayer = new Z, r = new De, p.fileUploadHandler = new ee, void 0 !== t.downloaded) p.eventHandler.clearEvents(), p.eventEmitter.removeAllListeners(), p = null;
          else {
            if (t.downloaded = !0, void 0 !== c.Prototype && "string" == typeof c.Prototype.Version && 1.7 > parseFloat(c.Prototype.Version.substr(0, 3), 10) && void 0 !== Array.prototype.toJSON) {
              var Xe = JSON.stringify;
              JSON.stringify = function(e) {
                var t = Array.prototype.toJSON;
                return delete Array.prototype.toJSON, e = Xe(e), Array.prototype.toJSON = t, e
              }
            }
            p.main.load()
          }
        } catch (e) {
          if (!a) throw Error("tawk : " + e.message);
          a.handleError(e.message, "tawk.js", e.lineNumber || e.line, e.stack)
        }
      }.call(this, window.$_Tawk)
  }(window)
});
