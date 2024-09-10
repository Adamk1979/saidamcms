"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Config from "@/components/content-types/Config";
import ProductPage from "@/components/content-types/ProductPage";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import Hero from "@/components/nestable/Hero";
import ImageBanner from "@/components/nestable/ImageBanner";
import SearchBar from "@/components/nestable/SearchBar";
import ImageWithText from "@/components/nestable/ImageWithText";
import ProductList from "@/components/nestable/ProductList";
import LatestProductsList from "@/components/nestable/LatestProductsList";


const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  config: Config,
  productPage: ProductPage,
  footer: Footer,
  header: Header,
  hero: Hero,
  imageBanner: ImageBanner,
  searchBar: SearchBar,
  imageWithText: ImageWithText,
  productList: ProductList,
  latestProductsList: LatestProductsList
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}