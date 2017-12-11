define('templates/root.tpl',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Handlebars.compile("\n<h1>Marionette says hello!</h1>\n");
});
//# sourceMappingURL=root.tpl.js.map;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('views/rootView',["require", "exports", "templates/root.tpl"], function (require, exports, root_tpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RootView = /** @class */ (function (_super) {
        __extends(RootView, _super);
        function RootView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.template = root_tpl_1.default;
            return _this;
        }
        return RootView;
    }(Marionette.View));
    exports.default = RootView;
});
//# sourceMappingURL=rootView.js.map;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('app',["require", "exports", "views/rootView"], function (require, exports, rootView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App(options) {
            var _this = this;
            var opt = { region: 'body' };
            _this = _super.call(this, _.extend(opt, options || {})) || this;
            return _this;
        }
        App.prototype.onStart = function (_options) {
            this.showView(new rootView_1.default());
        };
        return App;
    }(Marionette.Application));
    exports.default = new App();
});
//# sourceMappingURL=app.js.map;

require.config({
    // キャッシュ防止(開発用)
    urlArgs: "bust=" + (new Date()).getTime(),
});
require(['app'], function (app) {
    app.default.start();
});
//# sourceMappingURL=main.js.map;
define("main", function(){});

