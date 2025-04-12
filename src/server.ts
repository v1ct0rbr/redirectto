import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const ports = (process.env.INTERNAL_PORTS || '3000,3001').split(',').map(Number);
const redirectUrl = process.env.REDIRECT_URL || 'http://localhost:3000';
const redirectType = process.env.REDIRECT_TYPE as string;
const copyOriginalPart = process.env.COPY_ORIGINAL_PART === 'true';

for (const port of ports) {
    // ciar uma app para cada porta
    const app = express();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    app.use((req, res) => {
        const fullOriginalUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.log("----------------------------------------");
        console.log(`IP Address: ${ipAddress}`);
        console.log(`Request Protocol: ${req.protocol}`);
        console.log(`Url original completa: ${fullOriginalUrl}`);


        const originalUrlParts = req.originalUrl;
        const finalUrl = redirectUrl + (copyOriginalPart ? originalUrlParts.replace(",", "/") : '');
        console.log(`Redirecting to: ${finalUrl}`);


        let redirectTypeNumber = parseInt(redirectType, 10);
        if (isNaN(redirectTypeNumber) || redirectTypeNumber < 300 || redirectTypeNumber > 399) {

            console.error(`Invalid redirect type: ${redirectType}. Defaulting to 301.`);
            redirectTypeNumber = 301; // Default to 301 if invalid
        }
        console.log("----------------------------------------");
        res.redirect(redirectTypeNumber, finalUrl);
    });
    console.log(`Server is running on port ${port}`);


}







