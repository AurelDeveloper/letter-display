// Import the nodemailer module
const nodemailer = require('nodemailer');

/**
 * Asynchronously sends a test email.
 */
async function sendTestEmail() {
    // Create a reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // SMTP host
        port: 465, // SMTP port
        secure: true, // Use SSL
        auth: {
            user: 'hinoran.marlon@gmail.com', // Your email
            pass: 'auqh nuwf tecs ojqv', // Your password
        },
    });

    // Set up email options
    let mailOptions = {
        from: 'hinoran.marlon@gmail.com', // Sender address
        to: 'marlon.profils@gmail.com', // List of receivers
        subject: 'Test Newsletter', // Subject line
        html: `
            <h1>This is a test newsletter</h1>
            <p>Hello, this is a test newsletter sent from nodemailer.</p>
        `, // HTML body
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    // Log the message ID to the console
    console.log('Message sent: %s', info.messageId);
}

// Call the function and catch any errors
sendTestEmail().catch(console.error);
