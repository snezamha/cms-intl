import './globals.css';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/layouts/Header';
import { GlobalProvider } from '../GlobalProvider';
export default function RootLayout({ children, params }) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html
      suppressHydrationWarning
      lang={locale}
      className={locale == 'fa' ? 'rtl' : 'ltr'}
    >
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          precedence='default'
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className='flex h-full flex-col bg-base-300'
      >
        <GlobalProvider>
          <Header />
          <div className='items-center justify-center h-screen'>{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
