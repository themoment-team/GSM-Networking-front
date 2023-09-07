import { ToastContainer } from 'react-toastify';

import Providers from './providers';

import 'react-toastify/dist/ReactToastify.css';

import { Header, Layout } from '@/components';
import { StyledComponentsRegistry } from '@/lib';
import { GlobalStyle } from '@/styles';

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
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <ToastContainer />
            <GlobalStyle />
            <Header />
            <Layout>{children}</Layout>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
