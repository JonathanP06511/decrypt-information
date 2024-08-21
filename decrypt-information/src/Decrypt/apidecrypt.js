const { Router } = require('express');
const router = new Router();
const crypto = require('crypto');


router.get('/:mail', async (req, res) => {
    try {
        const algorithm = "aes-256-ctr";
        const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
        const { mail } = req.params;
        const iv = "8fdb43a3846a8807259fc76b4e54e4a6";
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
        let decrypted = decipher.update(Buffer.from(mail, 'hex'));
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        const email = decrypted.toString();
        res.status(200).json(email);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
