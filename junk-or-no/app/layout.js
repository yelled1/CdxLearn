import './globals.css';

export const metadata = {
  title: 'Junk or No — A little food for thought',
  description: 'Type a food, get a simple answer, and learn a little along the way. A friendly everyday food checker.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
