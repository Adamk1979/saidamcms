import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();
  console.log("Current Config in RootLayout:", currentConfig);

  return (
    <StoryblokProvider>
      <html>
        <body>
          <Header blok={currentConfig} />
          <Layout config={currentConfig}>{children}</Layout>
          <Footer blok={currentConfig} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
