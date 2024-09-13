import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
    accessToken: StoryblokCMS.TOKEN, 
    use: [apiPlugin],
  });

export default async function sitemap() {
try {
    
const pages = await StoryblokCMS.getStaticPaths();
const baseUrl = 'http://localhost:3000'; 

const sitemap = pages.map((page) => {
    const currentUrl = `${baseUrl}/${page.slug}`;

    return{
        url: currentUrl,
        lastModified: new Date(),
        priority: 1,
    }
})
return sitemap;
} 
catch (error) {
    console.log(error)
    return [];
}
}