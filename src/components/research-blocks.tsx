import type { Product } from "@/data/products";

// --- Clarity Research Commentary Block ---
export function ClarityResearch({ product }: { product: Product }) {
  const commentary: Record<string, string> = {
    "sofi-checking-savings":
      "SoFi delivers one of the strongest all-in-one banking packages available today. The combination of high-yield savings, fee-free checking, and early direct deposit makes it a standout for consumers who want simplicity without sacrifice.",
    "marcus-savings":
      "Marcus by Goldman Sachs continues to set the benchmark for high-yield savings. No fees, no minimums, and a consistently competitive APY make it the default recommendation for passive savers.",
    "ally-savings":
      "Ally remains one of the most trusted online banks. Its savings rate is competitive, and the bucket-based savings tools provide genuine utility for goal-oriented savers.",
    "fidelity":
      "Fidelity is the gold standard for long-term investors. Exceptional research, $0 commissions, and a full suite of retirement accounts make it the top pick for serious wealth builders.",
    "robinhood":
      "Robinhood democratized commission-free trading and continues to attract younger investors with its clean interface and fractional share investing. Limited research tools are the main trade-off.",
    "betterment":
      "Betterment pioneered automated investing and remains the best robo-advisor for hands-off investors. Tax-loss harvesting and goal-based planning add real value for long-term savers.",
    "mint":
      "Mint is the most widely used budgeting app for good reason. Automatic transaction categorization and bill tracking give users a clear picture of their finances with minimal effort.",
    "credit-karma":
      "Credit Karma provides genuinely useful free credit monitoring with actionable recommendations. The ad-supported model is transparent and the core product is excellent for credit-building.",
  };

  const text =
    commentary[product.slug] ||
    `${product.name} offers a strong value proposition in the ${product.subcategory.toLowerCase()} space. Our editorial team reviewed it against key competitors and found it delivers consistent performance for ${product.bestFor.toLowerCase()}.`;

  const date = "Apr 22, 2025";

  return (
    <div className="border border-[#0e4d45]/20 rounded mb-3 sm:mb-5 overflow-hidden">
      <div className="bg-[#0e4d45] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2">
        <div className="w-5 h-5 bg-[#fef6f1]/20 rounded-sm flex items-center justify-center">
          <span className="text-[#fef6f1] text-[10px] font-black">R</span>
        </div>
        <div>
          <div className="text-[10px] sm:text-[11px] font-bold text-[#fef6f1] uppercase tracking-widest">Research Commentary</div>
          <div className="text-[9px] sm:text-[10px] text-[#fef6f1]/60">Clarity Research</div>
        </div>
      </div>
      <div className="bg-white px-3 sm:px-4 py-2 sm:py-3">
        <p className="text-xs sm:text-sm text-black leading-relaxed">{text}</p>
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#e4d9cf] flex items-center justify-between text-[9px] sm:text-[10px]">
          <span className="italic text-[#0e4d45] font-medium">I&R Research</span>
          <span className="text-black/50">Updated {date}</span>
        </div>
      </div>
    </div>
  );
}

// --- Letter Grade Badge ---
function gradeFromRating(rating: number): string {
  if (rating >= 4.7) return "A+";
  if (rating >= 4.4) return "A";
  if (rating >= 4.1) return "A-";
  if (rating >= 3.8) return "B+";
  if (rating >= 3.5) return "B";
  if (rating >= 3.2) return "B-";
  return "C+";
}

export function GradeBadge({ rating }: { rating: number }) {
  const grade = gradeFromRating(rating);
  const isA = grade.startsWith("A");
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 rounded border-2 flex items-center justify-center font-black text-lg leading-none ${
          isA
            ? "border-[#0e4d45] text-[#0e4d45]"
            : "border-[#540f04] text-[#540f04]"
        }`}
      >
        {grade}
      </div>
      <div className="text-[10px] text-black/50 mt-0.5 uppercase tracking-wide">Grade</div>
    </div>
  );
}

// --- Feature Cards Grid ---
interface FeatureCardProps {
  icon: string;
  title: string;
  items: { label: string; available: boolean }[];
  columns?: 1 | 2 | 3;
}

function FeatureCard({ icon, title, items, columns = 1 }: FeatureCardProps) {
  return (
    <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
      <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
        <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">{icon}</span>
        <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">{title}</span>
      </div>
      <div className={columns === 3 ? "grid grid-cols-2 sm:grid-cols-3 gap-1" : columns === 2 ? "grid grid-cols-2 gap-1" : "space-y-1"}>
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px]">
            <span className={item.available ? "text-[#0e4d45]" : "text-black/30"}>
              {item.available ? (
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className={item.available ? "text-black" : "text-black/40"}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Strengths & Limitations ---
export function StrengthsLimitations({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-5">
      <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
        <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#0e4d45" strokeWidth="1.5" />
            <path d="M5 8l2 2 4-4" stroke="#0e4d45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Strengths</span>
        </div>
        <ul className="space-y-1">
          {pros.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-[11px] sm:text-[12px] text-black">
              <span className="text-[#0e4d45] mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
        <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#540f04" strokeWidth="1.5" />
            <path d="M8 5v4M8 11v.5" stroke="#540f04" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Limitations</span>
        </div>
        <ul className="space-y-1">
          {cons.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-[11px] sm:text-[12px] text-black">
              <span className="text-[#540f04] mt-0.5 font-bold text-[10px]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// --- Investing-specific feature blocks ---
function getInvestingFeatures(product: Product) {
  const slug = product.slug;
  const isFidelity = slug === "fidelity";
  const isVanguard = slug === "vanguard";
  const isSchwab = slug === "charles-schwab";

  const accountTypes = [
    { label: "Individual", available: true },
    { label: "Joint", available: true },
    { label: "IRA", available: true },
    { label: "Roth IRA", available: true },
    { label: "Rollover IRA", available: true },
    { label: "SEP IRA", available: isFidelity || isVanguard || isSchwab },
    { label: "Simple IRA", available: isFidelity || isSchwab },
    { label: "Trust", available: isFidelity || isSchwab },
  ];

  const researchTools = [
    { label: "Advanced charting", available: isFidelity || isSchwab },
    { label: "Third-party research", available: isFidelity || isVanguard || isSchwab },
    { label: "Screeners and scanners", available: isFidelity || isSchwab },
    { label: "Market insights", available: true },
  ];

  const assets = [
    { label: "Stocks", available: true },
    { label: "ETFs", available: true },
    { label: "Options", available: slug !== "betterment" && slug !== "vanguard" },
    { label: "Bonds", available: isFidelity || isVanguard || isSchwab },
    { label: "Mutual Funds", available: isFidelity || isVanguard || isSchwab },
    { label: "Forex", available: isFidelity || isSchwab },
    { label: "Crypto", available: slug === "robinhood" || slug === "webull" },
    { label: "Futures", available: isSchwab },
    { label: "CDs", available: isFidelity || isSchwab },
  ];

  const platform = [
    { label: "Extended Hours Trading", available: isFidelity || slug === "robinhood" || isSchwab },
    { label: "Real-time Quotes", available: true },
    { label: "Auto DRIP", available: isFidelity || isVanguard || isSchwab },
    { label: "Portfolio Analysis", available: isFidelity || slug === "betterment" || isSchwab },
  ];

  return { accountTypes, researchTools, assets, platform };
}

function getBankingFeatures(product: Product) {
  const slug = product.slug;
  const isSofi = slug === "sofi-checking-savings";
  const isAlly = slug === "ally-savings" || slug === "ally-checking";
  const isChase = slug === "chase-total-checking";

  const accountTypes = [
    { label: "Savings", available: true },
    { label: "Checking", available: isSofi || isAlly || isChase },
    { label: "Money Market", available: isAlly || slug === "marcus-savings" },
    { label: "CDs", available: isAlly || slug === "marcus-savings" },
    { label: "Joint Account", available: true },
    { label: "Business Account", available: isChase },
  ];

  const features = [
    { label: "Mobile Check Deposit", available: true },
    { label: "Zelle / P2P Transfers", available: isSofi || isChase || isAlly },
    { label: "Early Direct Deposit", available: isSofi || isAlly },
    { label: "ATM Reimbursement", available: isSofi || isAlly },
    { label: "FDIC Insured", available: true },
    { label: "Overdraft Protection", available: isChase || isAlly },
  ];

  return { accountTypes, features };
}

// --- Main Research Blocks Component ---
export function ResearchBlocks({ product }: { product: Product }) {
  const isInvesting = product.category === "investing";
  const isBanking = product.category === "bank";

  if (isInvesting) {
    const { accountTypes, researchTools, assets, platform } = getInvestingFeatures(product);
    const marginRate = product.slug === "robinhood" ? "8.00% - 13.00%" : product.slug === "fidelity" ? "5.83% - 12.58%" : "varies";
    const feeStr = product.fees === "$0 commissions" || product.fees === "Commission-free" ? "Commission-Free" : product.fees;

    return (
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-5">
        {/* Account Types + Research & Tools */}
        <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
          <FeatureCard icon="=" title="Account Types" items={accountTypes} />
          <FeatureCard icon="[R]" title="Research & Tools" items={researchTools} />
        </div>

        {/* Assets Available */}
        <FeatureCard icon="[A]" title="Assets Available" items={assets} columns={3} />

        {/* Mobile & Support + Platform Features */}
        <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
          <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
            <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
              <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">M</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Mobile & Support</span>
            </div>
            <div className="flex items-center justify-between mb-2 text-[10px] sm:text-[11px]">
              <span className="text-black/60">App rating:</span>
              <span className="font-bold text-black">{product.rating}/5 ★</span>
            </div>
            <div className="flex gap-1.5 mb-2">
              <span className="text-[9px] sm:text-[10px] border border-[#e4d9cf] rounded px-2 py-0.5 text-black/70">iOS</span>
              <span className="text-[9px] sm:text-[10px] border border-[#e4d9cf] rounded px-2 py-0.5 text-black/70">Android</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-black/70">24/7 Phone & Chat</div>
          </div>
          <FeatureCard icon="[P]" title="Platform Features" items={platform} />
        </div>

        {/* Security & Insurance */}
        <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
          <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
            <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">S</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Security & Insurance</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px] sm:text-[11px]">
            {[
              { label: "2FA Authentication", available: true },
              { label: "SIPC $500K Coverage", available: true },
              { label: "Biometric Login", available: true },
              { label: "Excess SIPC Insurance", available: product.slug === "fidelity" || product.slug === "charles-schwab" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className={item.available ? "text-[#0e4d45]" : "text-black/30"}>
                  {item.available ? "✓" : "–"}
                </span>
                <span className={item.available ? "text-black" : "text-black/40"}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
          <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
            <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">$</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Fee Structure</span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
            <div>
              <div className="text-black/50 mb-0.5">Transfer Fee</div>
              <div className="font-bold text-black">{feeStr}</div>
            </div>
            <div>
              <div className="text-black/50 mb-0.5">Margin Rate</div>
              <div className="font-bold text-black">{marginRate}</div>
            </div>
            <div>
              <div className="text-black/50 mb-0.5">Account Min</div>
              <div className="font-bold text-black">{product.minDeposit}</div>
            </div>
            <div>
              <div className="text-black/50 mb-0.5">Accounts</div>
              <div className="font-bold text-black">
                {product.slug === "fidelity" ? "40M+" : product.slug === "robinhood" ? "23M+" : product.slug === "betterment" ? "800K+" : "10M+"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isBanking) {
    const { accountTypes, features } = getBankingFeatures(product);
    return (
      <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-5">
        <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
          <FeatureCard icon="A" title="Account Types" items={accountTypes} />
          <FeatureCard icon="[B]" title="Banking Features" items={features} />
        </div>
        <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
          <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
            <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">S</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Security & Insurance</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px] sm:text-[11px]">
            {[
              { label: "FDIC Insured", available: true },
              { label: "256-bit Encryption", available: true },
              { label: "Biometric Login", available: true },
              { label: "Fraud Monitoring", available: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className="text-[#0e4d45]">✓</span>
                <span className="text-black">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
          <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
            <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">$</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Fee Structure</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
            <div>
              <div className="text-black/50 mb-0.5">Monthly Fee</div>
              <div className="font-bold text-black">{product.fees}</div>
            </div>
            <div>
              <div className="text-black/50 mb-0.5">Min Deposit</div>
              <div className="font-bold text-black">{product.minDeposit}</div>
            </div>
            {product.apy && (
              <div>
                <div className="text-black/50 mb-0.5">APY</div>
                <div className="font-bold text-[#0e4d45]">{product.apy}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Financial apps
  return (
    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-5">
      <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
        <FeatureCard
          icon="[P]"
          title="Platform Support"
          items={[
            { label: "iOS App", available: true },
            { label: "Android App", available: true },
            { label: "Web Browser", available: true },
            { label: "Apple Watch", available: product.slug === "mint" || product.slug === "ynab" },
          ]}
        />
        <FeatureCard
          icon="[F]"
          title="Key Features"
          items={[
            { label: "Bank Sync", available: true },
            { label: "Spending Alerts", available: true },
            { label: "Credit Monitoring", available: product.slug === "credit-karma" || product.slug === "mint" },
            { label: "Investment Tracking", available: product.slug === "mint" || product.slug === "personal-capital" },
          ]}
        />
      </div>
      <div className="border border-[#e4d9cf] rounded p-2 sm:p-3.5 bg-white">
        <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-2.5">
          <span className="text-[#0e4d45] text-xs sm:text-sm font-bold">$</span>
          <span className="text-[10px] sm:text-[11px] font-bold text-black uppercase tracking-widest">Pricing</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
          <div>
            <div className="text-black/50 mb-0.5">Cost</div>
            <div className="font-bold text-black">{product.fees}</div>
          </div>
          <div>
            <div className="text-black/50 mb-0.5">Rating</div>
            <div className="font-bold text-black">{product.rating}/5</div>
          </div>
          {product.bonus && (
            <div>
              <div className="text-black/50 mb-0.5">Bonus</div>
              <div className="font-bold text-black">{product.bonus}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}