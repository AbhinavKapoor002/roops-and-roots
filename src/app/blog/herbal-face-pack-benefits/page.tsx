import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BasicLayout from "@/layouts/basicLayout";

export const metadata: Metadata = {
  title: "Herbal Face Pack Benefits for a Natural Skincare Routine",
  description:
    "Learn how herbal face packs can fit into a simple skincare routine and discover traditional ingredients used in the Roop & Roots Herbal Face Pack.",
  alternates: {
    canonical: "/blog/herbal-face-pack-benefits",
  },
  openGraph: {
    title: "Herbal Face Pack Benefits for a Natural Skincare Routine",
    description:
      "Learn how herbal face packs can fit into a simple skincare routine and discover traditional skincare ingredients.",
    type: "article",
    url: "https://www.roopandroots.com/blog/herbal-face-pack-benefits",
  },
};

const HerbalFacePackBenefitsPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Herbal Face Pack Benefits for a Natural Skincare Routine",
    description:
      "Learn how herbal face packs can fit into a simple skincare routine and discover traditional ingredients used in the Roop & Roots Herbal Face Pack.",
    image: [
      "https://www.roopandroots.com/images/product/transparent%20product%20image.png",
    ],
    author: {
      "@type": "Organization",
      name: "Roop & Roots By Renu",
    },
    publisher: {
      "@type": "Organization",
      name: "Roop & Roots By Renu",
      logo: {
        "@type": "ImageObject",
        url: "https://www.roopandroots.com/images/brand-logo-dark.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.roopandroots.com/blog/herbal-face-pack-benefits",
    },
    url: "https://www.roopandroots.com/blog/herbal-face-pack-benefits",
  };

  return (
    <BasicLayout>
      <main className="min-h-screen bg-[#fffaf2] px-6 py-32">

        {/* Article Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <article className="mx-auto max-w-4xl">

          {/* Article Header */}
          <header className="text-center">
            <p className="font-marcellus text-sm uppercase tracking-[0.25em] text-[#556B2F]">
              Herbal Skincare Journal
            </p>

            <h1 className="mt-5 font-marcellus text-4xl leading-tight text-[#3b4a22] sm:text-5xl md:text-6xl">
              Herbal Face Pack Benefits for a Natural Skincare Routine
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#556B2F]">
              Explore how a simple herbal face pack can become part of a
              thoughtful skincare routine inspired by traditional ingredients.
            </p>

            <div className="mt-6 text-sm text-[#8B6B3F]">
              Published by Roop & Roots By Renu
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mx-auto mt-12 flex justify-center overflow-hidden rounded-3xl border border-[#e4d09b] bg-white p-8 shadow-sm">
            <Image
              src="/images/product/transparent product image.png"
              alt="Roop & Roots Herbal Face Pack"
              width={700}
              height={700}
              priority
              className="h-auto max-h-[500px] w-auto object-contain"
            />
          </div>

          {/* Article Content */}
          <div className="mt-16 space-y-10 text-lg leading-8 text-[#4B3A24]">

            {/* Section 1 */}
            <section>
              <h2 className="font-marcellus text-3xl text-[#5C3B00]">
                What is a herbal face pack?
              </h2>

              <p className="mt-4">
                A herbal face pack is a skincare preparation made using
                plant-based or traditionally used ingredients. Face packs are
                commonly used as an occasional part of a skincare routine rather
                than as a replacement for everyday cleansing and moisturizing.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-marcellus text-3xl text-[#5C3B00]">
                Why are traditional ingredients used in skincare?
              </h2>

              <p className="mt-4">
                Ingredients such as almond, chandan, and turmeric have a long
                history of use in traditional Indian beauty practices. Their
                inclusion in skincare products reflects the continuing interest
                in simple ingredient-focused beauty routines.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-marcellus text-3xl text-[#5C3B00]">
                How to include a face pack in your routine
              </h2>

              <p className="mt-4">
                A face pack can be used occasionally after cleansing the skin.
                Always follow the directions provided with the product and
                consider testing a small area of skin first, particularly if you
                have sensitive skin or are trying a new ingredient.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-marcellus text-3xl text-[#5C3B00]">
                Roop & Roots Herbal Face Pack
              </h2>

              <p className="mt-4">
                The Roop & Roots Herbal Face Pack is presented as a blend of
                traditional ingredients including almond, chandan, and turmeric.
                It is available in 50 g and 100 g packs through the Roop & Roots
                website.
              </p>

              <div className="mt-6">
                <Link
                  href="/#shop"
                  className="inline-block rounded-full bg-[#8BC34A] px-7 py-3 font-semibold text-white transition hover:bg-[#6B8E23]"
                >
                  Explore the Herbal Face Pack →
                </Link>
              </div>
            </section>

            {/* Section 5 */}
            <section className="rounded-3xl border border-[#e4d09b] bg-white p-8">
              <h2 className="font-marcellus text-3xl text-[#5C3B00]">
                A simple approach to herbal skincare
              </h2>

              <p className="mt-4">
                Good skincare does not have to be complicated. Understanding
                ingredients, following a consistent routine, and paying
                attention to how your skin responds can help you build a routine
                that works for you.
              </p>
            </section>

          </div>

          {/* Navigation */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/blog"
              className="rounded-full border border-[#8BC34A] px-7 py-3 font-semibold text-[#5C3B00] transition hover:bg-[#8BC34A] hover:text-white"
            >
              ← Back to Blog
            </Link>

            <Link
              href="/#shop"
              className="rounded-full bg-[#8BC34A] px-7 py-3 font-semibold text-white transition hover:bg-[#6B8E23]"
            >
              Explore Herbal Face Pack
            </Link>

          </div>

        </article>
      </main>
    </BasicLayout>
  );
};

export default HerbalFacePackBenefitsPage;