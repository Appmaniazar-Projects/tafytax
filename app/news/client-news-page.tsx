"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FloatingCircles, DotsPattern } from "@/components/ui/shapes"

interface NewsArticle {
  id: string
  title: string
  category: string
  excerpt: string
  author: string
  date: string
  readTime: string
}

interface Category {
  name: string
  count: number
}

interface ClientNewsPageProps {
  newsArticles: NewsArticle[]
  categories: Category[]
}

export default function ClientNewsPage({ newsArticles, categories }: ClientNewsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter articles based on selected category
  const filteredArticles = selectedCategory
    ? newsArticles.filter(article => article.category === selectedCategory)
    : newsArticles

  // Handle category click
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <FloatingCircles />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                News & Articles
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                Stay updated with the latest tax insights, financial news, and expert advice from our team of professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Categories</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((category) => (
                <Card 
                  key={category.name} 
                  className={`hover:shadow-md transition-shadow cursor-pointer ${
                    selectedCategory === category.name 
                      ? 'ring-2 ring-sky-blue bg-sky-blue/10' 
                      : ''
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{category.count} Articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {selectedCategory && (
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Filtering by: <strong>{selectedCategory}</strong>
                </span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm text-sky-blue hover:text-sky-blue/80 underline"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">
                {selectedCategory ? `${selectedCategory} Articles` : 'Recent Posts'}
              </h2>
            </div>
            <div className="mt-12 space-y-8">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden border-border bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-sky-blue uppercase tracking-wider">{article.category}</span>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{article.date.toUpperCase()}</span>
                          <span>0 COMMENTS</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-sky-blue transition-colors cursor-pointer">
                        <Link href={`/news/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <Link
                          href={`/news/${article.id}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-sky-blue hover:text-sky-blue/80 transition-colors"
                        >
                          READ MORE
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found in this category.</p>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="mt-4 text-sky-blue hover:text-sky-blue/80 underline"
                  >
                    View all articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
          <DotsPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Stay Informed with Expert Insights
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                Subscribe to our newsletter for the latest tax updates, financial tips, and industry news delivered to your inbox.
              </p>
              <div className="mt-10">
                <a
                  href="https://calendly.com/tafytax/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gold/90"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
