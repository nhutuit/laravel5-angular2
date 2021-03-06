System.register(['../Subscriber', '../observable/EmptyObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, EmptyObservable_1;
    var RepeatOperator, RepeatSubscriber;
    /**
     * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
     * on a particular Scheduler.
     *
     * <img src="./img/repeat.png" width="100%">
     *
     * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
     * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
     * an empty Observable.
     * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
     * count times.
     * @method repeat
     * @owner Observable
     */
    function repeat(count) {
        if (count === void 0) { count = -1; }
        if (count === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        else if (count < 0) {
            return this.lift(new RepeatOperator(-1, this));
        }
        else {
            return this.lift(new RepeatOperator(count - 1, this));
        }
    }
    exports_1("repeat", repeat);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            }],
        execute: function() {
            RepeatOperator = (function () {
                function RepeatOperator(count, source) {
                    this.count = count;
                    this.source = source;
                }
                RepeatOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
                };
                return RepeatOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RepeatSubscriber = (function (_super) {
                __extends(RepeatSubscriber, _super);
                function RepeatSubscriber(destination, count, source) {
                    _super.call(this, destination);
                    this.count = count;
                    this.source = source;
                }
                RepeatSubscriber.prototype.complete = function () {
                    if (!this.isStopped) {
                        var _a = this, source = _a.source, count = _a.count;
                        if (count === 0) {
                            return _super.prototype.complete.call(this);
                        }
                        else if (count > -1) {
                            this.count = count - 1;
                        }
                        this.unsubscribe();
                        this.isStopped = false;
                        this.isUnsubscribed = false;
                        source.subscribe(this);
                    }
                };
                return RepeatSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});
//# sourceMappingURL=repeat.js.map