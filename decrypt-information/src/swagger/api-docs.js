/**
 * @openapi
 * /apidecrypt/{mail}:
 *   get:
 *     summary: Decrypt an encrypted email address
 *     parameters:
 *       - in: path
 *         name: mail
 *         required: true
 *         schema:
 *           type: string
 *           example: 'encryptedEmailInHexFormat'
 *     responses:
 *       200:
 *         description: Decrypted email address
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       500:
 *         description: Server error
 */