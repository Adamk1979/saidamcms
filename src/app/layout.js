import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";

// import Footer from "@/components/layout/Footer";
// import Header from "@/components/layout/Header";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();

  return (
    <StoryblokProvider>
      <html>
        <body>
          {/* <Header config={currentConfig} /> */}
          <Layout config={currentConfig}>{children}</Layout>
          {/* <Footer config={currentConfig} /> */}
        </body>
      </html>
    </StoryblokProvider>
  );
}
