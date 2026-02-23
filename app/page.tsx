import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemCards } from "@/components/problem-cards"
import { Features } from "@/components/features"
import { ProductCatalog } from "@/components/product-catalog"
import { SpecsTable } from "@/components/specs-table"
import { CustomEngineering } from "@/components/custom-engineering"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemCards />
      <Features />
      <ProductCatalog />
      <SpecsTable />
      <CustomEngineering />
      <Footer />
    </main>
  )
}
