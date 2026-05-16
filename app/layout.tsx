import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewSync — Sync interview availability across hiring teams",
  description: "Coordinates interviewer availability, prevents double-booking, auto-schedules panel interviews, and handles timezone conflicts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2ce4cbbc-181f-40d0-b375-b0eb2a8cb53e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
