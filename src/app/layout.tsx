import { Suspense } from 'react';

import Script from 'next/script';

import { ToastContainer } from 'react-toastify';

import Providers from './providers';

import { Layout, NavigationEvents } from '@/components';
import { GA_TRACKING_ID, StyledComponentsRegistry } from '@/libs';
import { GlobalStyle } from '@/styles';

import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <ToastContainer />
            <GlobalStyle />
            <Layout>{children}</Layout>
          </Providers>
        </StyledComponentsRegistry>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
