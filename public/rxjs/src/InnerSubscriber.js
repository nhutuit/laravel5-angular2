System.register(['./Subscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1;
    var InnerSubscriber;
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            InnerSubscriber = (function (_super) {
                __extends(InnerSubscriber, _super);
                function InnerSubscriber(parent, outerValue, outerIndex) {
                    _super.call(this);
                    this.parent = parent;
                    this.outerValue = outerValue;
                    this.outerIndex = outerIndex;
                    this.index = 0;
                }
                InnerSubscriber.prototype._next = function (value) {
                    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
                };
                InnerSubscriber.prototype._error = function (error) {
                    this.parent.notifyError(error, this);
                    this.unsubscribe();
                };
                InnerSubscriber.prototype._complete = function () {
                    this.parent.notifyComplete(this);
                    this.unsubscribe();
                };
                return InnerSubscriber;
            }(Subscriber_1.Subscriber));
            exports_1("InnerSubscriber", InnerSubscriber);
        }
    }
});
//# sourceMappingURL=InnerSubscriber.js.map