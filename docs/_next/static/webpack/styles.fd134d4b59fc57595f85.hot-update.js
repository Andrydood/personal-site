webpackHotUpdate("styles",{

/***/ "./components/About/styles.scss":
/*!**************************************!*\
  !*** ./components/About/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"body":"body-3KE4Y","content":"content-1yo3h","name":"name-5c7Of","shape":"shape-3dDJQ","intro":"intro-6SKsj","downArrow":"downArrow-BD_AD"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1580335224809");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.fd134d4b59fc57595f85.hot-update.js.map