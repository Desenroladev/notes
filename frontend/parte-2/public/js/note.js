"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NoteComponent = /** @class */ (function (_super) {
    __extends(NoteComponent, _super);
    function NoteComponent(note) {
        var _this = _super.call(this) || this;
        _this.template = "<div class=\"note\">\n                    <div class=\"title\">\n                    </div>\n                    <div class=\"description\">\n                    </div>\n                    <div class=\"footer\">\n                        <div class=\"actions\">\n                            <div class=\"left\">\n                                <button class=\"icon notificacao\"></button>\n                            </div>\n                            <div class=\"rigth\">\n                                <button class=\"icon image\"></button>\n                                <button class=\"icon lixeira\"></button>\n                                <button class=\"icon outros\"></button>\n                            </div>\n                        </div>\n                    </div>\n                </div>";
        _this.create();
        _this.note = note;
        return _this;
    }
    NoteComponent.prototype.build = function () {
        this.append('.title', "<strong>" + this.note.title + "</strong>");
        this.append('.description', this.note.description);
        this.click('.notificacao', function () {
            alert("notificacao");
        });
        this.click('.image', function () {
            alert("image");
        });
        this.click('.lixeira', function () {
            alert("lixeira");
        });
        this.click('.outros', function () {
            alert("outros");
        });
        this.click('.note', function () {
            alert("note");
        });
        return _super.prototype.build.call(this);
    };
    return NoteComponent;
}(Component));
