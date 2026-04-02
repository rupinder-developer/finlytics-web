import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Finlytics',
  description:
    'Finlytics privacy policy. Your data never leaves your device. No servers, no cloud syncing, no third-party access.',
};

const sections = [
  {
    title: '1. Overview',
    content: `Finlytics is committed to protecting your privacy. This policy explains how Finlytics handles — or more accurately, does not handle — your personal data. Our app is built on the principle that your financial information belongs to you and only you.`,
  },
  {
    title: '2. Data Collection',
    content: `Finlytics does not collect, store, transmit, or process any personal or financial data on external servers. All data you enter into the app — including income, expenses, savings goals, and investment plans — is stored exclusively on your device using local storage mechanisms provided by your operating system.`,
  },
  {
    title: '3. No Accounts Required',
    content: `Finlytics does not require you to create an account, provide an email address, phone number, or any form of identification. There is no sign-up process. You simply open the app and start using it.`,
  },
  {
    title: '4. Offline Functionality',
    content: `Finlytics is designed to work entirely offline. The app does not require an internet connection to function. No data is sent to or received from any server during normal use. Your financial data remains on your device at all times.`,
  },
  {
    title: '5. Third-Party Services',
    content: `Finlytics does not integrate with any third-party analytics, advertising, or tracking services. We do not use Google Analytics, Firebase, Facebook SDK, or any similar tools. There are no third-party cookies, pixels, or tracking mechanisms embedded in the app.`,
  },
  {
    title: '6. Data Sharing',
    content: `We do not share, sell, rent, or otherwise distribute any user data — because we never collect it in the first place. There is no data to share.`,
  },
  {
    title: '7. Data Security',
    content: `Since all data is stored locally on your device, the security of your data depends on the security of your device itself. We recommend using a device passcode or biometric lock to protect your information. If you uninstall the app, all stored data is permanently deleted.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Finlytics does not knowingly collect data from children. Since we do not collect any data from anyone, our app is safe for users of all ages.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. Since we do not collect contact information, we cannot notify you directly. We encourage you to review this page periodically.`,
  },
  {
    title: '10. Contact',
    content: `If you have questions or concerns about this privacy policy, you can reach us at info@predotai.com.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2.5">
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
            </Link>
            <Link
              href="/"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="grow pt-16">
        <section className="py-16 lg:py-24 bg-surface relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <div className="section-badge mb-6">
                <span>LEGAL</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-text-primary tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-text-secondary text-sm lg:text-base">
                Last updated: April 2, 2026
              </p>
            </div>

            <div className="space-y-10">
              <div className="glass-card p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <h2 className="text-base font-bold text-text-primary">
                    Summary
                  </h2>
                </div>
                <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
                  Finlytics collects{' '}
                  <strong className="text-text-primary">zero data</strong>. No
                  accounts, no servers, no analytics, no tracking. Everything
                  stays on your device. That&rsquo;s the whole policy.
                </p>
              </div>

              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-bold text-text-primary mb-3">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-primary/10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Back to Finlytics
              </Link>
            </div>
          </div>
        </section>
      </main>

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
            <div className="text-xs text-text-secondary font-mono">
              &copy; {new Date().getFullYear()} Finlytics
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
