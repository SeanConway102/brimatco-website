import { sanityFetch } from "@/lib/sanity"
import { homepageQuery, allProductsQuery, siteSettingsQuery } from "@/lib/queries"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemCards } from "@/components/problem-cards"
import { Features } from "@/components/features"
import { ProductCatalog } from "@/components/product-catalog"
import { SpecsTable } from "@/components/specs-table"
import { CustomEngineering } from "@/components/custom-engineering"
import { Footer } from "@/components/footer"

export default async function HomePage() {
  const [{ data: homepage }, { data: products }, { data: siteSettings }] =
    await Promise.all([
      sanityFetch({ query: homepageQuery }),
      sanityFetch({ query: allProductsQuery }),
      sanityFetch({ query: siteSettingsQuery }),
    ])

  return (
    <main>
      <Header />
      <Hero data={homepage} />
      <ProblemCards cards={homepage?.problemCards} />
      <Features data={homepage} />
      <ProductCatalog products={products} homepage={homepage} />
      <SpecsTable products={products} />
      <CustomEngineering data={homepage} />
      <Footer siteSettings={siteSettings} />
    </main>
  )
}
