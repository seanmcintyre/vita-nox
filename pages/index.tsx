import React from 'react';
import Head from 'next/head';
// import { initFBSDK } from '../facebook';
import { GlobalStyles } from './GlobalStyles';
import { App } from './App';

const Index = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   initFBSDK();

  //   if (FB) {
  //     FB.getLoginStatus(function(response: any) {
  //       if (response.status === 'connected') {
  //         console.log(response.authResponse.accessToken);
  //         setLoading(false);
  //       }
  //     });
  //   }
  // }, []);

  return (
    <div>
      <GlobalStyles />
      <Head>
        <title>Vita Nox</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
      </Head>
      {/* {loading ? 'loading...' : <App />} */}
      <App />
    </div>
  );
};

export default Index;
