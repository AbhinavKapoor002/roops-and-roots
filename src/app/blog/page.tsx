import Image from "next/image";
import Link from "next/link";
import BasicLayout from "@/layouts/basicLayout";

const BlogPage = () => {
  return (
    <BasicLayout>
      <main className="min-h-screen bg-[#fffaf2] px-6 py-32">
        <div className="mx-auto max-w-6xl">

          {/* Blog Header */}
          <header className="text-center">
            <p className="mb-4 font-marcellus text-sm uppercase tracking-[0.25em] text-[#556B2F]">
              Roop & Roots Journal
            </p>

            <h1 className="font-marcellus text-4xl text-[#3b4a22] sm:text-5xl md:text-6xl">
              Herbal Skincare & Ayurvedic Beauty
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#556B2F]">
              Discover simple skincare tips, herbal ingredients, Ayurvedic
              beauty traditions, and practical ways to care for your skin
              naturally.
            </p>
          </header>

          {/* Blog Articles */}
          <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* Herbal Face Pack Article */}
            <article className="group overflow-hidden rounded-3xl border border-[#e4d09b] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-[280px] items-center justify-center overflow-hidden bg-[#fffaf2] p-8">
                <Image
                  src="/images/product/transparent product image.png"
                  alt="Roop & Roots Herbal Face Pack"
                  width={500}
                  height={500}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-[#8B6B3F]">
                  Herbal Skincare
                </p>

                <h2 className="mt-3 font-marcellus text-2xl leading-tight text-[#5C3B00]">
                  Herbal Face Pack Benefits for a Natural Skincare Routine
                </h2>

                <p className="mt-4 leading-relaxed text-[#556B2F]">
                  Explore how a simple herbal face pack can become part of a
                  thoughtful skincare routine inspired by traditional
                  ingredients.
                </p>

                <Link
                  href="/blog/herbal-face-pack-benefits"
                  className="mt-6 inline-flex items-center font-semibold text-[#6B8E23] transition-colors hover:text-[#3b4a22]"
                >
                  Read Article
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* Natural Skincare Article */}
            <article className="group overflow-hidden rounded-3xl border border-[#e4d09b] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-[280px] items-center justify-center overflow-hidden bg-[#fffaf2] p-8">
                <Image
                  src="/images/product/transparent product image.png"
                  alt="Natural skincare routine by Roop & Roots"
                  width={500}
                  height={500}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-medium uppercase tracking-wider text-[#8B6B3F]">
                  Natural Skincare
                </p>

                <h2 className="mt-3 font-marcellus text-2xl leading-tight text-[#5C3B00]">
                  Natural Skincare Routine: A Simple Herbal Skincare Guide
                </h2>

                <p className="mt-4 leading-relaxed text-[#556B2F]">
                  Learn simple ways to build a natural skincare routine with
                  herbal skincare tips and everyday skincare habits.
                </p>

                <Link
                  href="/blog/natural-skincare-routine"
                  className="mt-6 inline-flex items-center font-semibold text-[#6B8E23] transition-colors hover:text-[#3b4a22]"
                >
                  Read Article
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>

          </section>

          {/* Back Home */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-block rounded-full bg-[#8BC34A] px-7 py-3 font-semibold text-white transition hover:bg-[#6B8E23]"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </main>
    </BasicLayout>
  );
};

export default BlogPage;