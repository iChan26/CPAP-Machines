import {Await, useLoaderData} from 'react-router';
import {Suspense} from 'react';
import Hero from "../components/Homepage/Hero.jsx";
import AllCpapMachines from "../components/Homepage/AllCpapMachines.jsx";
import WhyChooseUs from "../components/Homepage/WhyChooseUs.jsx";
import CpapMachineGuide from "../components/Homepage/CpapMachineGuide.jsx";
import CpapSetup from "../components/Homepage/CompleteYourCPAPSetup.jsx";
import CpapFaqs from "../components/Homepage/CPAPMachinesFAQs.jsx";
/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'CPAP Machines Page'}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <main className="home">
      <Hero />
      <AllCpapMachines products={data.recommendedProducts} />
      <WhyChooseUs />
      <CpapMachineGuide />
      <CpapSetup />
      <CpapFaqs />
    </main>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    productType
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
  products(
    first: 20
    sortKey: UPDATED_AT
    reverse: true
    query: "product_type:'CPAP Machines' OR product_type:'BiPAP Machines'"
  ) {
    nodes {
      ...RecommendedProduct
    }
  }
}
`;
