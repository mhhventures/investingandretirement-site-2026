import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

const methodology = [
  {
    step: "01",
    title: "Independent Testing",
    description: "I open real accounts at every institution I review. Accounts are funded, trades are run, and customer service is tested firsthand — no exceptions.",
  },
  {
    step: "02",
    title: "Data Verification",
    description: "Rates, fees, and features are verified directly with institutions and cross-referenced with regulatory filings. The product database is refreshed regularly.",
  },
  {
    step: "03",
    title: "Transparent Scoring",
    description: "Each product is scored across 30+ criteria including fees, APY, features, security, and user experience. Scoring weights are published and consistent.",
  },
  {
    step: "04",
    title: "Quarterly Re-Review",
    description: "Every review is re-evaluated quarterly — or immediately whenever a product changes its fees, rates, or core features.",
  },
];

const stats = [
  { value: "50+", label: "Products Reviewed" },
  { value: "100K+", label: "Monthly Readers" },
  { value: "2019", label: "Founded" },
  { value: "30+", label: "Scoring Criteria" },
];

const partners = [
  { name: "Gemini", tagline: "Crypto Exchange" },
  { name: "Kraken", tagline: "Crypto Exchange" },
  { name: "SoFi", tagline: "Banking & Investing" },
  { name: "Chime", tagline: "Mobile Banking" },
  { name: "Rocket Money", tagline: "Financial App" },
];

function About() {
  return (
    <div className="bg-[#fef6f1]">
      {/* Masthead */}
      <section className="border-b border-[#e4d9cf] bg-[#fef6f1]">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-3">
              About &middot; Est. 2019
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.02] text-black mb-4">
              Financial research readers can trust.
            </h1>
            <p className="text-base md:text-lg text-[#1a1a1a] leading-relaxed">
              Investing &amp; Retirement is an independent research publication covering bank accounts, brokerages, robo-advisors, and financial apps. I help over 100,000 readers each month make smarter money decisions — backed by hands-on testing and verified data.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-b border-[#e4d9cf] bg-[#f7ebe2]">
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-serif font-bold text-[#0e4d45] text-2xl md:text-3xl leading-none">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#1a1a1a] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main column */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* Mission */}
        <section className="mb-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-2">
            Mission
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
            The financial industry is built to confuse. My job is to make it clear.
          </h2>
          <div className="space-y-4 text-[15px] text-[#1a1a1a] leading-relaxed">
            <p>
              Every year, Americans pay billions in unnecessary fees, miss out on higher yields, and choose financial products that don't fit their needs — largely because comparison information is fragmented, biased, or buried behind marketing copy.
            </p>
            <p>
              I started Investing &amp; Retirement in 2019 to fix that. I open real accounts, test real products, and publish side-by-side comparisons that treat readers like adults. No fluff, no sponsored rankings, no "top 10" lists padded with products nobody should use.
            </p>
            <p className="font-medium text-black">
              If I wouldn't recommend a product to my own family, it doesn't make my lists.
            </p>
          </div>
        </section>

        {/* Solo operation note */}
        <section className="mb-12">
          <div className="bg-white border border-[#d4c5b8] rounded-sm p-6 md:p-7 shadow-sm">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-2">
              A Note From The Editor
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-black mb-4 leading-tight">
              Right now, this is a one-person operation.
            </h2>
            <div className="space-y-3 text-[14px] text-[#1a1a1a] leading-relaxed">
              <p>
                Every review, rating, and article on this site is researched, written, and edited by me. That means slower publishing, but also tighter editorial standards — nothing goes out the door without being personally tested and verified.
              </p>
              <p>
                As the publication grows, I plan to bring on additional writers and analysts with deep experience in banking, investing, and personal finance. When that happens, they'll be listed here with full bios and credentials so you know exactly who's behind every piece of research.
              </p>
              <p className="text-[13px] text-gray-600 italic">
                Have industry experience and want to contribute? <Link to="/contact" className="text-[#0e4d45] font-semibold not-italic underline hover:no-underline">Get in touch</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-2">
            Methodology
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
            How I review products.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="bg-white border border-[#d4c5b8] rounded-sm p-5 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#0e4d45]" />
                <div className="font-serif text-3xl font-bold text-[#0e4d45]/30 mb-2 leading-none">
                  {m.step}
                </div>
                <h3 className="font-bold text-black text-sm mb-2 uppercase tracking-wide">
                  {m.title}
                </h3>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Independence */}
        <section className="mb-12 bg-white border-l-4 border-[#0e4d45] p-6 md:p-8 rounded-sm shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-2">
            Independence &amp; Funding
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-black mb-4 leading-tight">
            How I make money (and why it doesn't affect my ratings).
          </h2>
          <div className="space-y-3 text-[14px] text-[#1a1a1a] leading-relaxed">
            <p>
              This site earns revenue through affiliate partnerships — when you click through to a partner and open an account, I may receive a commission. This keeps the content free for readers.
            </p>
            <p>
              <span className="font-semibold">Critically, commission rates do not influence the rankings.</span> I score products using the same published methodology regardless of partnership status. Products are ranked on their merits, full stop.
            </p>
            <p>
              I review many products with no affiliate relationship at all. I also rank partners below non-partners when the data supports it. You can read the full{" "}
              <Link to="/disclosure" className="text-[#0e4d45] font-semibold underline hover:no-underline">
                Advertiser Disclosure
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Partners */}
        <section className="mb-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-3 text-center">
            Affiliate Partners
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-black mb-2 text-center leading-tight">
            Brands I partner with.
          </h2>
          <p className="text-[12px] text-gray-600 text-center mb-6 max-w-xl mx-auto leading-relaxed">
            These are the institutions I have active affiliate relationships with. As noted above, partnership status has no bearing on how products are scored or ranked.
          </p>
          <div className="border-y border-[#d4c5b8] py-8 bg-white/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-2">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col items-center justify-center text-center px-3 py-4 group"
                >
                  <div className="font-serif font-bold text-lg md:text-xl text-[#1a1a1a] group-hover:text-[#0e4d45] transition-colors leading-tight">
                    {p.name}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider font-semibold text-gray-500 mt-1">
                    {p.tagline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0e4d45] mb-2">
            Editorial Standards
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
            What I promise readers.
          </h2>
          <div className="space-y-3">
            {[
              {
                t: "I will never accept payment for a positive review.",
                d: "Ratings are based on methodology, not money. Full stop.",
              },
              {
                t: "I will disclose every material relationship.",
                d: "Affiliate links, partnerships, and any potential conflicts are disclosed clearly on every page.",
              },
              {
                t: "I will correct errors quickly and visibly.",
                d: "Mistakes happen. When they do, I update the article, add a correction note, and timestamp the change.",
              },
              {
                t: "I will keep the data fresh.",
                d: "Rates and fees are verified regularly. Product reviews are re-scored quarterly or whenever a product materially changes.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white border border-[#d4c5b8] rounded-sm p-4 flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f7ebe2] text-[#0e4d45] flex items-center justify-center font-serif font-bold text-sm">
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-black text-sm mb-1">
                    {v.t}
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    {v.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-[#fef6f1] rounded-sm p-6 md:p-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fef6f1]/70 mb-2">
            Start Comparing
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Put the research to work.
          </h2>
          <p className="text-[14px] text-[#fef6f1]/80 mb-5 leading-relaxed max-w-xl">
            Side-by-side comparisons, verified rates, and editor-reviewed picks across every major category of financial product.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/bank-accounts"
              className="px-4 py-2 bg-[#0e4d45] text-[#fef6f1] text-[11px] font-semibold rounded-sm hover:bg-[#0a3832] transition-colors uppercase tracking-wider"
            >
              Bank Accounts
            </Link>
            <Link
              to="/investing"
              className="px-4 py-2 bg-[#0e4d45] text-[#fef6f1] text-[11px] font-semibold rounded-sm hover:bg-[#0a3832] transition-colors uppercase tracking-wider"
            >
              Investing Apps
            </Link>
            <Link
              to="/financial-apps"
              className="px-4 py-2 bg-[#0e4d45] text-[#fef6f1] text-[11px] font-semibold rounded-sm hover:bg-[#0a3832] transition-colors uppercase tracking-wider"
            >
              Financial Apps
            </Link>
<Link
              to="/contact"
              className="px-4 py-2 border border-[#fef6f1]/40 text-[#fef6f1] text-[11px] font-semibold rounded-sm hover:bg-[#fef6f1]/10 transition-colors uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
