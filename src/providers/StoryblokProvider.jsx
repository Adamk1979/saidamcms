"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// Import components
import Page from "@/components/content-types/Page";
import Config from "@/components/content-types/Config";
import ProductPage from "@/components/content-types/ProductPage";
import ProductDetail from "@/components/content-types/ProductDetail";

// Nestable components
import Teaser from "@/components/nestable/Teaser";
import RichText from "@/components/nestable/RichText";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/nestable/Hero";
import ImageBanner from "@/components/nestable/ImageBanner";
import SearchBar from "@/components/nestable/SearchBar";
import ImageWithText from "@/components/nestable/ImageWithText";
import ProductList from "@/components/nestable/ProductList";
import LatestProductsList from "@/components/nestable/LatestProductsList";
import ProductGrid from "@/components/nestable/ProductGrid";
import Product from "@/components/nestable/Product";
import Filtering from "@/components/nestable/Filtering";
import MyText from '@/components/nestable/MyText'; 
import Test from "@/components/nestable/Test";

// Register all components
const components = {
  "page": Page,
  "teaser": Teaser,
  "richText": RichText,
  "config": Config,
  "productPage": ProductPage,
  "footer": Footer,
  "header": Header,
  "hero": Hero,
  "imageBanner": ImageBanner,
  "searchBar": SearchBar,
  "imageWithText": ImageWithText,
  "productList": ProductList,
  "latestProductsList": LatestProductsList,
  "product_grid": ProductGrid,
  "product": Product,
  "filtering": Filtering,
  "mytext": MyText,
  "productdetail": ProductDetail,
  "test": Test,
};

// Initialize Storyblok
storyblokInit({
  accessToken: StoryblokCMS.TOKEN, // Ensure this is correctly set
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return <>{children}</>;
}
