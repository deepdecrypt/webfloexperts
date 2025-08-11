"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';

type BillingCycle = 'Monthly' | 'Quarterly';

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  monthly: number; // price per month
  quarterly: number; // price per month when billed quarterly
  features: string[];
  ctaLabel?: string;
  highlighted?: boolean;
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Essentials to ship marketing pages fast.',
    monthly: 2995,
    quarterly: 2695,
    features: [
      'One request at a time',
      'Avg 72 hour delivery',
      'Unlimited brands',
      'Webflow development',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Built for teams that want momentum.',
    monthly: 4995,
    quarterly: 4495,
    features: [
      'Two concurrent requests',
      'Avg 48 hour delivery',
      'Webflow + automations',
      'Strategy & CRO reviews',
      'Dedicated Slack channel',
    ],
    highlighted: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    subtitle: 'Everything you need to keep scaling.',
    monthly: 7995,
    quarterly: 7195,
    features: [
      'Three concurrent requests',
      'Avg 24 hour delivery',
      'Priority queue & support',
      'Custom integrations',
      'Quarterly growth reviews',
    ],
  },
];

function formatUsd(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingCycle>('Monthly');

  const plansWithActivePrice = useMemo(() =>
    PLANS.map((plan) => ({
      ...plan,
      activePrice: billing === 'Monthly' ? plan.monthly : plan.quarterly,
    })), [billing]);

  return (
    <section id="pricing" className="py-20 text-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Pricing</h2>
          <p className="mt-4 text-white/70">Choose the plan that fits your pace. Switch or pause anytime.</p>

          {/* Billing toggle */}
          <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {(['Monthly', 'Quarterly'] as const).map((label) => {
              const isActive = billing === label;
              return (
                <button
                  key={label}
                  onClick={() => setBilling(label)}
                  className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isActive ? 'bg-[#FFD166] text-black' : 'text-white/80 hover:text-white'}`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>
          {billing === 'Quarterly' && (
            <div className="mt-2 text-xs text-white/60">Save up to 10% with quarterly billing</div>
          )}
        </div>

        {/* Grid of plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plansWithActivePrice.map((plan) => {
            const isHighlighted = Boolean(plan.highlighted);
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border overflow-hidden bg-black text-left ${isHighlighted ? 'border-white/20' : 'border-white/10'}`}
              >
                {/* Glow backdrop */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: isHighlighted
                      ? 'radial-gradient(120% 90% at 50% -15%, rgba(105,212,255,0.35) 0%, rgba(105,212,255,0.10) 40%, rgba(0,0,0,0) 70%)'
                      : 'radial-gradient(110% 85% at 50% -20%, rgba(105,212,255,0.18) 0%, rgba(105,212,255,0.06) 40%, rgba(0,0,0,0) 70%)',
                  }}
                />

                <div className="relative z-10 p-6 sm:p-8">
                  {/* Title */}
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    {isHighlighted && (
                      <span className="ml-2 rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-semibold text-white">Most popular</span>
                    )}
                  </div>
                  <p className="text-white/70 mb-6">{plan.subtitle}</p>

                  {/* Price */}
                  <div className="mb-6 flex items-end gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold">{formatUsd(plan.activePrice)}</span>
                    <span className="text-lg md:text-xl font-semibold">/m</span>
                  </div>

                  <hr className="my-6 border-white/10" />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#69D4FF]" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-3">
                    <Link
                      href="/book-call"
                      className={`inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors ${isHighlighted
                        ? 'border-white/20 bg-gradient-to-b from-white/10 to-white/[0.02] text-white hover:from-white/20 hover:to-white/[0.06]'
                        : 'border-white/10 bg-white/[0.03] text-white/90 hover:bg-white/[0.08]'} shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.06)]`}
                    >
                      Get started
                    </Link>
                    <Link href="/book-call" className="text-white underline underline-offset-4 text-sm">
                      book a call
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 