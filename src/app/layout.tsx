import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phi Delt Northeastern',
  description: 'The Sunset Project',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

/**
 * Root Layout Component
 * Provides global HTML document wrapper, font configuration, header, and footer.
 *
 * @param props - Object containing child React nodes to render within the layout.
 * @returns JSX element for the root HTML shell.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="header-spacer" />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
