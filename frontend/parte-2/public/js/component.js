"use strict";
var Component = /** @class */ (function () {
    function Component() {
        this.template = '';
    }
    Component.prototype.create = function () {
        var div = document.createElement('div');
        div.innerHTML = this.template;
        this.element = div;
        return this.element;
    };
    Component.prototype.qs = function (selector) {
        return this.element.querySelector(selector);
    };
    Component.prototype.append = function (selector, content) {
        var aux = this.qs(selector);
        aux.innerHTML = content;
        return aux;
    };
    Component.prototype.click = function (selector, callback) {
        this.qs(selector)
            .addEventListener('click', function (evt) {
            evt.stopPropagation();
            evt.preventDefault();
            callback(evt);
        });
    };
    Component.prototype.build = function () {
        return this.element.firstChild;
    };
    return Component;
}());
