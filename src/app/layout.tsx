import '@/styles/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://codetriad.tech'),
  title: {
    default: 'CodeTriad Solutions | Your Vision, Our Mission',
    template: '%s | CodeTriad Solutions',
  },
  description:
    'CodeTriad Solutions is a tech startup focused on programming, tech support, web development, and computer specialist services, including repair and formatting.',
  keywords: [
    'Tech Startup',
    'Programming',
    'Tech Support',
    'Web Development',
    'Computer Repair',
    'IT Services',
    'Software Solutions',
  ],
  authors: [{ name: 'CodeTriad Solutions', url: 'https://codetriad.tech' }],
  creator: 'CodeTriad Solutions',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
