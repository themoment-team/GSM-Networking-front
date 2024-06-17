import { Suspense } from 'react';

import Script from 'next/script';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import Providers from './providers';

import { Layout, NavigationEvents } from '@/components';
import { GA_TRACKING_ID } from '@/libs';
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
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer`}
          strategy='beforeInteractive'
        />
      </head>
      <body>
        <Providers>
          <ReactQueryDevtools />
          <ToastContainer />
          <GlobalStyle />
          <Layout>{children}</Layout>
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
