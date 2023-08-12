import Layout from "@/components/layout/Layout";
import { NotificationContextProvider } from "@/store/notification-context";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="Next Js event manager" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />;
      </Layout>
    </NotificationContextProvider>
  );
}
