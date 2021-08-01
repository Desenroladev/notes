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
var NotesComponent = /** @class */ (function (_super) {
    __extends(NotesComponent, _super);
    function NotesComponent(element, notes) {
        var _this = _super.call(this) || this;
        _this.create();
        _this.element = element;
        if (notes && Array.isArray(notes)) {
            notes.forEach(function (note) {
                _this.add(new NoteComponent(note));
            });
        }
        return _this;
    }
    NotesComponent.prototype.add = function (note) {
        this.element.appendChild(note.build());
    };
    return NotesComponent;
}(Component));
