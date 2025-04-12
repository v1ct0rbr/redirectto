import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.INTERNAL_PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL || 'http://localhost:3000';
const redirectType = process.env.REDIRECT_TYPE as string;
const copyOriginalPart = process.env.COPY_ORIGINAL_PART === 'true';

app.use(async (req, res) => {
    const fullOriginalUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(`Original URL: ${fullOriginalUrl}`);
   
    const originalUrlParts = req.originalUrl;
    const finalUrl = redirectUrl + (copyOriginalPart ? originalUrlParts.replace(",","/") : '');
    console.log(`Redirecting to: ${finalUrl}`);
  
    let redirectTypeNumber = parseInt(redirectType, 10);
    if (isNaN(redirectTypeNumber) || redirectTypeNumber < 300 || redirectTypeNumber > 399) {

        console.error(`Invalid redirect type: ${redirectType}. Defaulting to 301.`);
        redirectTypeNumber = 301; // Default to 301 if invalid
    }

    res.redirect(redirectTypeNumber, finalUrl);
   
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
   
});


