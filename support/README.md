# APLGO Support Page

A production-ready "Contact Us" page for APLGO with Gugu, built effectively with **React**, **Vite**, and **Tailwind CSS**.
This project is designed to be deployed on **Vercel** as a separate project.

## Project Highlights
- **Pastel Teal Theme** (`#9FCCCE`) with frosted glass effects.
- **Floating Animations**: Custom CSS animations for leaves, bubbles, and particles.
- **Responsive Design**: Fully mobile-optimized.
- **Serverless API**: Integrated Vercel Function (`/api/contact`) sending emails via **Resend**.

## 🛠 Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    *Note: The contact form will not send emails locally unless you use `vercel dev` or mock the API endpoint, as `/api/contact` is a Vercel Serverless Function.*

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🚀 Deployment (Vercel)

1.  **Push to GitHub** (or connect your repo).
2.  **Import to Vercel**.
3.  **Environment Variables**:
    Go to **Settings > Environment Variables** in your Vercel dashboard and add:
    *   `RESEND_API_KEY`: Your API key from [Resend.com](https://resend.com).

4.  **Deploy**: Vercel will automatically detect the `api` directory and deploy the serverless function.

## 📧 Email Configuration
The contact form sends emails to:
- `info@aplgo.co.za`
- `mashangasegp@yahoo.com`

Sender is configured as: `APLGO Support <onboarding@resend.dev>`.
*For production, verify your domain on Resend to use a custom sender address (e.g., `support@aplgo.co.za`).*

## 🎨 Design Notes
- **Fonts**: Inter (Google Fonts via Tailwind default sans).
- **Icons**: Lucide React.
- **Glassmorphism**: `bg-white/xx` + `backdrop-blur` utilities.

---
**Website designed by BikoToday**
[https://www.bikotoday.co.za/](https://www.bikotoday.co.za/)
