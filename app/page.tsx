import Image from 'next/image';
import Link from 'next/link';
import { PhoneShowcase } from './phone-showcase';

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.196 12l2.502-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WifiOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="1" y1="1" x2="23" y2="23" />
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
      <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function PieIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const marqueeTags = [
  'Offline First',
  '100% Private',
  'Zero Tracking',
  'Free Forever',
  'Smart Insights',
  'Multiple Currencies',
  'No Sign-up Required',
  'Investment Planning',
  'Savings Goals',
  'Expense Tracking',
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 relative rounded-xl overflow-hidden ring-1 ring-primary/20 shadow-lg shadow-primary/10">
                <Image
                  src="/app-icon.png"
                  alt="Finlytics"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-text-primary">
                Finlytics
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#how-it-works"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                How it Works
              </Link>
              <Link
                href="#features"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="#privacy"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                Privacy
              </Link>
              <Link
                href="#download"
                className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="grow pt-16">
        {/* Hero */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 bg-grid-pattern opacity-60" />

          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-primary/8 rounded-full blur-[80px] md:blur-[150px] animate-aurora will-change-transform" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-light/6 rounded-full blur-[60px] md:blur-[120px] animate-aurora delay-300 will-change-transform" />
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[40px] md:blur-[80px] animate-aurora delay-600 will-change-transform" />

          <div className="hero-glow-ring w-[400px] h-[400px] top-[10%] right-[15%]" />
          <div className="hero-glow-ring w-[250px] h-[250px] bottom-[15%] left-[10%]" />

          <div className="max-w-6xl mx-auto px-6 relative z-10 w-full py-16 lg:py-0">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 animate-fade-up">
                <div className="section-badge mb-6">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-soft" />
                  <span className="font-mono text-[11px]">
                    v1.0 — iOS &amp; Android
                  </span>
                </div>

                <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-text-primary leading-[1.05] mb-6 tracking-tight">
                  Plan your money{' '}
                  <span className="text-gradient-animated">before</span> you
                  spend&nbsp;it.
                </h1>

                <p className="text-base lg:text-lg text-text-secondary mb-8 max-w-lg leading-relaxed">
                  Set your income, plan your savings and investments first, then
                  spend what remains. A simple approach to building real wealth.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Link href="#" className="store-button store-button-primary">
                    <AppleIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[10px] font-normal opacity-80 leading-none">
                        Download on the
                      </div>
                      <div className="text-[15px] font-semibold leading-snug">
                        App Store
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="store-button store-button-outline">
                    <PlayStoreIcon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-[10px] font-normal opacity-60 leading-none">
                        Get it on
                      </div>
                      <div className="text-[15px] font-semibold leading-snug">
                        Google Play
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { label: '100% Offline', color: 'bg-green-400' },
                    { label: 'No Account Needed', color: 'bg-primary' },
                    { label: 'Free to Use', color: 'bg-amber-400' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 text-xs font-medium text-text-secondary"
                    >
                      <span
                        className={`w-1.5 h-1.5 ${item.color} rounded-full`}
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="hidden lg:flex lg:col-span-5 justify-center items-center relative"
                style={{ perspective: '1200px' }}
              >
                <div className="flex items-center gap-0 relative">
                  <div className="phone-frame w-[190px] opacity-40 scale-90 z-0 animate-float delay-300 -right-10">
                    <div className="phone-screen relative bg-surface">
                      <Image
                        src="/app-store-screenshots/04.jpg"
                        alt="Finlytics allocation tracking"
                        fill
                        sizes="(min-width: 1024px) 190px, 0px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="phone-frame-glow w-[240px] z-10 animate-float relative">
                    <div className="phone-screen relative bg-surface">
                      <Image
                        src="/app-store-screenshots/07.jpg"
                        alt="Finlytics app overview"
                        fill
                        sizes="(min-width: 1024px) 240px, 0px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="phone-frame w-[190px] opacity-40 scale-90 z-0 animate-float delay-500 -left-10">
                    <div className="phone-screen relative bg-surface">
                      <Image
                        src="/app-store-screenshots/01.jpg"
                        alt="Finlytics income entry"
                        fill
                        sizes="(min-width: 1024px) 190px, 0px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
        </section>

        {/* Marquee Tags */}
        <section className="py-5 overflow-hidden border-y border-primary/5 bg-surface-alt/50">
          <div className="marquee-mask">
            <div className="flex animate-marquee-slow whitespace-nowrap">
              {[...marqueeTags, ...marqueeTags].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 mx-4 shrink-0">
                  <span className="w-1 h-1 bg-primary/40 rounded-full" />
                  <span className="text-xs font-medium text-text-secondary font-mono">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-20 lg:py-28 bg-surface-alt relative section-cv"
        >
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <div className="section-badge mx-auto mb-4">
                <span>STEP BY STEP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-text-primary tracking-tight mb-4">
                How it works
              </h2>
              <p className="text-text-secondary text-base lg:text-lg max-w-lg mx-auto">
                Set up your monthly plan in under a minute — then let Finlytics
                handle the math.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/15 to-primary/0" />

              <div className="space-y-20 lg:space-y-24">
                {[
                  {
                    step: '01',
                    title: 'Enter your income',
                    desc: 'Start by telling Finlytics your monthly salary. It supports multiple currencies — Rupees, Dollars, Euros, Pounds, and Yen. This is the foundation for your entire plan.',
                    img: '/app-store-screenshots/01.jpg',
                  },
                  {
                    step: '02',
                    title: 'Plan investments first',
                    desc: 'Choose how much to invest — by percentage or a fixed amount. The key insight: invest first, spend later. Aim for at least 15% of your income.',
                    img: '/app-store-screenshots/02.jpg',
                  },
                  {
                    step: '03',
                    title: 'Set your savings goal',
                    desc: "Pick a monthly savings target. Whatever's left after savings and investments becomes your spending budget — clear and guilt-free.",
                    img: '/app-store-screenshots/03.jpg',
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                    } items-center gap-12 lg:gap-20 animate-fade-up`}
                  >
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold text-sm font-mono border border-primary/10">
                          {step.step}
                        </span>
                        <div className="h-px bg-linear-to-r from-primary/20 to-transparent grow" />
                      </div>
                      <h3 className="text-2xl sm:text-[1.75rem] font-bold text-text-primary tracking-tight mb-4">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm lg:text-base leading-relaxed max-w-md">
                        {step.desc}
                      </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                      <div className="phone-frame w-[260px]">
                        <div className="phone-screen relative bg-surface">
                          <Image
                            src={step.img}
                            alt={step.title}
                            fill
                            sizes="260px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="tech-divider" />

        {/* Features */}
        <section
          id="features"
          className="py-20 lg:py-28 bg-surface relative overflow-hidden section-cv"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[80px] md:blur-[180px] -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-up">
              <div className="section-badge mx-auto mb-4">
                <span>POWERFUL INSIGHTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-text-primary tracking-tight mb-4">
                See where every rupee goes
              </h2>
              <p className="text-text-secondary text-base lg:text-lg max-w-lg mx-auto">
                Track allocations, check your savings health, and understand
                your money flow — all in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {[
                {
                  title: 'Income Allocation',
                  desc: 'See exactly how your salary is split between savings, investments, and expenses with a clear visual breakdown.',
                  icon: <ChartIcon className="w-5 h-5" />,
                },
                {
                  title: 'Savings Health',
                  desc: 'Know your savings rate, emergency fund target, and get smart tips to keep your finances well-balanced.',
                  icon: <TrendingIcon className="w-5 h-5" />,
                },
                {
                  title: 'Category Breakdown',
                  desc: 'Organize expenses into categories like rent, food, and subscriptions. Know where your money is actually going.',
                  icon: <PieIcon className="w-5 h-5" />,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="feature-card animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center text-primary mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <PhoneShowcase />
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-20 bg-surface relative overflow-hidden section-cv">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-0 left-1/2 w-[500px] h-[300px] bg-primary/3 rounded-full blur-[60px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  value: '< 1 min',
                  label: 'Setup Time',
                  desc: 'Quick onboarding',
                },
                { value: '5+', label: 'Currencies', desc: 'Global support' },
                { value: '100%', label: 'Offline', desc: 'Works anywhere' },
                {
                  value: '0',
                  label: 'Data Collected',
                  desc: 'Complete privacy',
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-card animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-gradient font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-text-secondary">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="tech-divider" />

        {/* Privacy */}
        <section
          id="privacy"
          className="py-20 lg:py-28 bg-surface relative overflow-hidden section-cv"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[60px] md:blur-[120px]" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-up">
                <div className="section-badge mb-6">
                  <ShieldIcon className="w-3.5 h-3.5" />
                  <span>PRIVACY FIRST</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-text-primary tracking-tight mb-5">
                  Your data never leaves your phone.
                </h2>
                <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-10">
                  Finlytics is built with a simple principle — your financial
                  data belongs to you and only you. There are no servers, no
                  cloud syncing, and no third-party access. Ever.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <WifiOffIcon className="w-4 h-4 text-primary" />,
                      title: 'Works completely offline',
                      desc: 'No internet required. Your data stays on your device, always.',
                    },
                    {
                      icon: <EyeOffIcon className="w-4 h-4 text-primary" />,
                      title: 'No accounts or sign-ups',
                      desc: 'Open the app and start planning. No email, no phone number, no verification.',
                    },
                    {
                      icon: <ShieldIcon className="w-4 h-4 text-primary" />,
                      title: 'Zero data collection',
                      desc: "No analytics, no tracking, no telemetry. We don't know who you are — by design.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card flex gap-4 p-4 animate-fade-up"
                      style={{ animationDelay: `${(i + 1) * 100}ms` }}
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-text-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex justify-center animate-fade-up delay-200">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 animate-spin-slow opacity-30">
                    <div className="absolute inset-0 border border-primary/20 rounded-full" />
                    <div className="absolute inset-4 border border-primary/15 rounded-full" />
                    <div className="absolute inset-8 border border-primary/10 rounded-full" />
                    <div className="absolute inset-12 border border-primary/5 rounded-full" />
                  </div>
                  <div className="absolute inset-0 animate-morph bg-primary/5" />
                  <div
                    className="absolute inset-4 animate-morph bg-primary/3"
                    style={{ animationDelay: '2s' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="gradient-border p-8 flex flex-col items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                        <ShieldIcon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-text-primary mb-2 font-mono">
                          100% Private
                        </div>
                        <div className="text-text-secondary text-xs">
                          No servers. No cloud. No tracking.
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {['Offline', 'Anonymous', 'Secure'].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 bg-primary/8 border border-primary/10 text-primary text-[10px] font-semibold rounded-lg font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tech-divider" />

        {/* CTA */}
        <section
          id="download"
          className="py-16 lg:py-20 bg-surface-alt relative section-cv"
        >
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="relative bg-linear-to-br from-[#151329] via-[#1a1833] to-[#0f0e1e] rounded-3xl p-8 lg:p-14 overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />

              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[60px] md:blur-[120px] -translate-y-1/2 translate-x-1/4 animate-aurora will-change-transform" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/6 rounded-full blur-[50px] md:blur-[100px] translate-y-1/2 -translate-x-1/4 animate-aurora delay-300 will-change-transform" />
              <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/4 rounded-full blur-[40px] md:blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-aurora delay-600 will-change-transform" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-3 justify-center lg:justify-start mb-5">
                    <div className="w-11 h-11 relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg">
                      <Image
                        src="/app-icon.png"
                        alt="Finlytics"
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white/40 text-xs font-mono">
                      v1.0.0
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight mb-4 animate-fade-up leading-tight">
                    Start planning smarter{' '}
                    <span className="text-gradient-animated">today</span>
                  </h2>
                  <p className="text-white/50 text-sm lg:text-base max-w-md leading-relaxed animate-fade-up delay-100">
                    Join thousands who plan their money before spending it.
                    Free, private, and available on both platforms.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-200">
                  <Link
                    href="#"
                    className="group inline-flex items-center justify-center gap-2.5 bg-primary text-white px-7 py-4 rounded-2xl font-semibold text-sm hover:bg-primary-light transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                  >
                    <AppleIcon className="w-4 h-4" />
                    Download for iPhone
                    <ArrowRightIcon className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2.5 bg-white/5 text-white border border-white/10 px-7 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
                  >
                    <PlayStoreIcon className="w-4 h-4" />
                    Download for Android
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-surface border-t border-primary/5 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 relative rounded-lg overflow-hidden ring-1 ring-primary/15">
                <Image
                  src="/app-icon.png"
                  alt="Finlytics"
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-bold text-text-primary">
                Finlytics
              </span>
              <span className="text-xs text-text-secondary font-mono ml-2">
                — Plan before you spend.
              </span>
            </div>

            <div className="flex items-center gap-8">
              <Link
                href="#how-it-works"
                className="text-xs text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                How it Works
              </Link>
              <Link
                href="#features"
                className="text-xs text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="#privacy"
                className="text-xs text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                Privacy
              </Link>
              <Link
                href="#download"
                className="text-xs text-text-secondary hover:text-primary transition-colors font-medium"
              >
                Download
              </Link>
            </div>

            <div className="text-xs text-text-secondary font-mono">
              &copy; {new Date().getFullYear()} Finlytics
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
