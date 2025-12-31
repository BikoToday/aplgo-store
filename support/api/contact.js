import { Resend } from 'resend';

export const config = {
    runtime: 'nodejs',
};

export default async function handler(req, res) {
    // CORS handling
    if (req.method === 'OPTIONS') {
        return res.status(200).send('ok');
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('Missing RESEND_API_KEY environment variable');
            return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
        }

        const { requestType, fullName, phone, email, message } = req.body || {};

        if (!email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'APLGO Support <support@success.bikotoday.co.za>',
            to: ['info@aplgo.co.za', 'mashangasegp@yahoo.com'],
            subject: `New Support Request — ${requestType}`,
            html: `
        <h2>New Support Request</h2>
        <p><strong>Type:</strong> ${requestType}</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
          ${message}
        </blockquote>
        <p><small>Received at: ${new Date().toLocaleString()}</small></p>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
