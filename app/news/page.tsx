import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import ClientNewsPage from "./client-news-page"

export const metadata: Metadata = {
  title: "News & Articles | Tafy Tax Consultants",
  description: "Stay updated with the latest tax news, financial insights, and expert advice from Tafy Tax Consultants.",
}

const newsArticles = [
  {
    id: "training-capacity-building",
    title: "Training & Capacity Building",
    excerpt: "Enhance your team's financial literacy and capabilities with our comprehensive training programs designed for businesses of all sizes.",
    category: "Training Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "5 min read",
    image: "/images/news/training-capacity.jpg",
    content: "Our training programs are designed to build financial capacity within your organization, covering essential topics from basic bookkeeping to advanced financial management.",
  },
  {
    id: "master-accounting-software",
    title: "Master the Use of Accounting Software with Our Expert Training",
    excerpt: "Learn to leverage modern accounting tools effectively with our hands-on training sessions tailored to your business needs.",
    category: "Training Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "4 min read",
    image: "/images/news/accounting-software.jpg",
    content: "Get expert training on popular accounting software platforms to streamline your financial processes and improve efficiency.",
  },
  {
    id: "foreign-trusts-tax",
    title: "Tax obligations on foreign trusts, CFCs, and offshore assets",
    excerpt: "Understanding your tax obligations for foreign trusts, Controlled Foreign Corporations (CFCs), and offshore assets.",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "8 min read",
    image: "/images/news/foreign-trusts.jpg",
    content: "Navigate the complex tax landscape of foreign trusts and offshore assets with our expert guidance and compliance strategies.",
  },
  {
    id: "sme-global-operations",
    title: "Setup for SMEs with global operations (basic TP policies)",
    excerpt: "Essential transfer pricing policies for small and medium enterprises with international operations.",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "6 min read",
    image: "/images/news/global-operations.jpg",
    content: "Establish proper transfer pricing policies to ensure compliance and optimize tax efficiency for your global business operations.",
  },
  {
    id: "cross-border-operations",
    title: "Structuring cross-border operations (SARS + overseas rules)",
    excerpt: "Optimize your cross-border business structure with comprehensive understanding of SARS and international tax regulations.",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "7 min read",
    image: "/images/news/cross-border.jpg",
    content: "Structure your international operations effectively with our expert guidance on both local and international tax compliance requirements.",
  },
  {
    id: "tax-residency-ceasing",
    title: "Ceasing tax residency, emigration tax clearance",
    excerpt: "Complete guide to tax residency termination and emigration tax clearance requirements in South Africa.",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "10 min read",
    image: "/images/news/tax-residency.jpg",
    content: "Ensure proper tax clearance when ceasing tax residency or emigrating with our comprehensive guidance and support services.",
  },
  {
    id: "capital-gains-advisory",
    title: "Capital gains, rental income, and withholding tax advisory",
    excerpt: "Expert advice on capital gains tax, rental income taxation, and withholding tax obligations.",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "6 min read",
    image: "/images/news/capital-gains.jpg",
    content: "Navigate complex tax areas including capital gains, rental income, and withholding taxes with our specialized advisory services.",
  },
  {
    id: "expat-tax-returns",
    title: "Filing SA tax returns for expats, SARS compliance",
    excerpt: "Comprehensive guide to South African tax return filing for expatriates and SARS compliance requirements.",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "8 min read",
    image: "/images/news/expat-tax.jpg",
    content: "Ensure proper SA tax compliance for expatriates with our specialized tax return filing and advisory services.",
  },
  {
    id: "foreign-tax-credits",
    title: "Help claim foreign tax credits or treaty relief (DTAs)",
    excerpt: "Maximize your tax benefits through foreign tax credits and Double Taxation Agreements (DTAs).",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "7 min read",
    image: "/images/news/tax-credits.jpg",
    content: "Optimize your tax position through strategic use of foreign tax credits and Double Taxation Agreements.",
  },
]

const categories = [
  { name: "Accounting Software", count: 9 },
  { name: "Corporate Financial Services", count: 9 },
  { name: "Payroll Services", count: 4 },
  { name: "Tax Services", count: 15 },
  { name: "Training Services", count: 8 },
]

export default function NewsPage() {
  return <ClientNewsPage newsArticles={newsArticles} categories={categories} />
}
