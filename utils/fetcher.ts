import * as Imap from 'imap-simple';
import * as mailparser from 'mailparser-simple';

const NON_NEWSLETTER_KEYWORDS = ['werbung', 'danke', 'preis erhöhung'];

export let emailContentGlobal = '';

async function fetch() {
    const config = {
        imap: {
            user: process.env.EMAIL_USER,
            password: process.env.EMAIL_PASS,
            host: process.env.IMAP_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    const connection = await Imap.connect(config);

    await connection.openBox('INBOX');

    const searchCriteria = ['UNSEEN', ['FROM', process.env.EMAIL_FROM]];
    const fetchOptions = { bodies: ['HEADER', 'TEXT'], markSeen: true };

    const messages = await connection.search(searchCriteria, fetchOptions);

    if (messages.length === 0) {
        console.log("Keine ungeöffneten E-Mails vom Newsletter-Versender gefunden. Der Code wird abgebrochen.");
        return null;
    }

    const latestEmail = messages[messages.length - 1];
    const parsedEmail = mailparser.parse(latestEmail.parts[0].body);

    const subject = parsedEmail.headers.subject;

    if (NON_NEWSLETTER_KEYWORDS.some(keyword => subject.toLowerCase().includes(keyword))) {
        return null;
    }

    emailContentGlobal = parsedEmail.text;

    return parsedEmail.text;
}

export { fetch };
