webpackHotUpdate("styles",{

/***/ "./components/Header/styles.scss":
/*!***************************************!*\
  !*** ./components/Header/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header-3H5Ff","logo":"logo-2tbxu","links":"links-1XRLa","link":"link-3j4fP","selectedLink":"selectedLink-3_qBu"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1580249604987");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.67347f064c3e782df945.hot-update.js.map