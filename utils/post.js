"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(title, image, date, content, snippet, readtime) {
        this.title = title;
        this.image = image;
        this.date = date;
        this.content = content;
        this.snippet = snippet;
        this.readtime = readtime;
    }
    return Post;
}());
exports.Post = Post;
