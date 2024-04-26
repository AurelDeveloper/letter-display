import { parse } from 'node-html-parser';
import { fetch } from './fetcher';
import { Post } from './post';

export const globalState = {
    postGlobal: null as Post | null
};

async function extract() {
    const emailContent = await fetch();

    if (emailContent) {
        const root = parse(emailContent);

        const title = root.querySelector('h1')?.text;
        const image = root.querySelector('img')?.getAttribute('src');
        const date = new Date().toISOString();
        const content = root.toString();
        const snippet = root.querySelector('p')?.text.slice(0, 40);

        const words = content.split(' ').length;
        const readtime = Math.ceil(words / 200);

        globalState.postGlobal = new Post(title || '', image || '', date, content, snippet || '', readtime);
    }
}

export { extract };
