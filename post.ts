export class Post {
    title: string;
    image: string;
    date: string;
    content: string;
    snippet: string;
    readtime: number;

    constructor(title: string, image: string, date: string, content: string, snippet: string, readtime: number) {
        this.title = title;
        this.image = image;
        this.date = date;
        this.content = content;
        this.snippet = snippet;
        this.readtime = readtime;
    }
}
