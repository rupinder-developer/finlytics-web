'use client';

import Link from 'next/link';
import { useState, useCallback, createContext, useContext } from 'react';

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341c-.583 0-1.055.473-1.055 1.056 0 .583.472 1.056 1.055 1.056s1.056-.473 1.056-1.056c0-.583-.473-1.056-1.056-1.056zm-11.046 0c-.583 0-1.056.473-1.056 1.056 0 .583.473 1.056 1.056 1.056.583 0 1.055-.473 1.055-1.056 0-.583-.472-1.056-1.055-1.056zm11.405-6.02l1.91-3.31a.398.398 0 0 0-.145-.544.397.397 0 0 0-.544.145l-1.934 3.352A11.764 11.764 0 0 0 12 7.89c-1.817 0-3.543.413-5.169 1.074L4.897 5.612a.397.397 0 0 0-.544-.145.398.398 0 0 0-.145.544l1.91 3.31C2.84 11.073.502 14.575.502 18.6h22.996c0-4.025-2.338-7.527-5.616-9.279zM.502 18.6v-.002.002z" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const steps = [
  {
    number: '1',
    title: 'Download & open the APK',
    desc: 'Tap the download button below, then open the file from your notifications or Downloads folder.',
  },
  {
    number: '2',
    title: 'Allow install',
    desc: (
      <>
        When prompted, tap{' '}
        <span className="font-semibold text-text-primary">Settings</span>
        {' → '}enable{' '}
        <span className="font-mono text-[11px] bg-primary/8 text-primary px-1.5 py-0.5 rounded border border-primary/10 whitespace-nowrap">
          Allow from this source
        </span>{' '}
        and go back.
      </>
    ),
  },
  {
    number: '3',
    title: 'Install & enjoy',
    desc: 'Tap "Install" and you\'re all set. Open Finlytics and start planning your money!',
  },
];

const ModalContext = createContext<{
  open: () => void;
  close: () => void;
}>({
  open: () => {},
  close: () => {},
});

export function ApkModalProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {visible && <ApkInstallModal onClose={close} />}
    </ModalContext.Provider>
  );
}

function ApkInstallModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center px-6 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-primary/10 shadow-lg hover:shadow-xl text-text-secondary hover:text-text-primary transition-all hover:scale-105 cursor-pointer"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 shadow-lg shadow-primary/10">
          <AndroidIcon className="w-7 h-7 text-primary" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mb-1.5 text-center">
          Install on Android
        </h2>
        <p className="text-sm text-text-secondary mb-8 text-center">
          Follow these steps to install Finlytics
        </p>

        <div className="w-full space-y-3 mb-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-3.5 bg-surface rounded-xl border border-primary/5 p-4 shadow-sm animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary font-mono">
                  {step.number}
                </span>
              </div>
              <div className="pt-0.5">
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/finlytics.apk"
          download
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2.5 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-light transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 w-full mb-3"
        >
          <DownloadIcon className="w-4 h-4" />
          Download Finlytics (.apk)
        </Link>

        <button
          onClick={onClose}
          className="text-xs text-text-secondary hover:text-text-primary transition-colors py-1.5 cursor-pointer"
        >
          Cancel
        </button>

        <div className="flex items-center gap-2 text-[10px] text-text-secondary/50 mt-5">
          <CheckCircleIcon className="w-3.5 h-3.5" />
          <span>Safe to install — no data collection, fully offline</span>
        </div>
      </div>
    </div>
  );
}

export function ApkDownloadHero() {
  const { open } = useContext(ModalContext);

  return (
    <button
      onClick={open}
      className="store-button store-button-outline cursor-pointer"
    >
      <AndroidIcon className="w-5 h-5" />
      <div className="text-left">
        <div className="text-[10px] font-normal opacity-60 leading-none">
          Download for
        </div>
        <div className="text-[15px] font-semibold leading-snug">Android</div>
      </div>
      <DownloadIcon className="w-4 h-4 ml-1 opacity-50" />
    </button>
  );
}

export function ApkDownloadCta() {
  const { open } = useContext(ModalContext);

  return (
    <button
      onClick={open}
      className="whitespace-nowrap inline-flex items-center justify-center gap-2.5 bg-white/5 text-white border border-white/10 px-7 py-4 rounded-2xl font-semibold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5 cursor-pointer"
    >
      <AndroidIcon className="w-4 h-4" />
      Download for Android
      <DownloadIcon className="w-4 h-4 opacity-50" />
    </button>
  );
}
