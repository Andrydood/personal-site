webpackHotUpdate("styles",{

/***/ "./components/Body/styles.scss":
/*!*************************************!*\
  !*** ./components/Body/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"body":"body-2c9JL","content":"content-3s1dT","mainContent":"mainContent-1F2PW","name":"name-1-Kb1","intro":"intro-1S66w"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1580340212250");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.73678dde4450a6df97ad.hot-update.js.map