// ============================================================
// PRICING DATA — Hemlock CPA
// Two service lines (Bookkeeping, Tax), each with three tiers:
//   I — The Foundation
//   II — The Steward
//   III — The Counsel
// Pricing is bespoke per engagement. No dollar amounts in the data.
// ============================================================

const TIER_NAMES = ['The Foundation', 'The Steward', 'The Counsel'];

const BOOKKEEPING = {
  id: 'bookkeeping',
  label: 'Bookkeeping',
  eyebrow: 'MONTHLY BOOKKEEPING',
  headline: 'Accurate books, every month.',
  italic: 'Clean financials. Peace of mind.',
  supporting: 'Three engagement levels — from foundation bookkeeping to a full strategic advisor partnership. Pick what fits the season your business is in.',
  footnote: 'Pricing is customized based on transaction volume, entity type, and complexity. All tiers include secure document portal access and year-end close support.',
  tiers: [
    {
      roman: 'I',
      name: 'The Foundation',
      tagline: 'Foundation bookkeeping',
      cadence: 'Quarterly check-in',
      included: [
        'Monthly transaction categorization',
        'Bank & credit card reconciliation',
        'Monthly financial statements',
        'QuickBooks Online management',
        'Annual 1099 preparation',
      ],
      excluded: [
        'Projections',
        'Advisory meetings',
      ],
    },
    {
      roman: 'II',
      name: 'The Steward',
      tagline: 'Insight-driven accounting',
      cadence: 'Monthly check-in',
      inherits: 'Everything in The Foundation',
      included: [
        'Class & job-level tracking',
        'Monthly management report with commentary',
        'KPI dashboard & trend analysis',
        'Annual cash flow projections',
        'Annual budget vs. actual review',
        'Accounts payable & receivable oversight',
      ],
    },
    {
      roman: 'III',
      name: 'The Counsel',
      tagline: 'Strategic advisor partnership',
      cadence: 'Dedicated monthly advisory',
      inherits: 'Everything in The Steward',
      included: [
        'Quarterly rolling projections',
        '13-week cash flow forecasting',
        'Scenario modeling — growth, downturn, sale',
        'Vendor & cost structure review',
        'Lender & investor reporting packages',
      ],
    },
  ],
  comparison: [
    {
      group: 'Core bookkeeping',
      rows: [
        ['Monthly transaction categorization', true, true, true],
        ['Bank & credit-card reconciliation', true, true, true],
        ['Monthly financial statements', true, true, true],
        ['QuickBooks Online management', true, true, true],
        ['Annual 1099 preparation', true, true, true],
      ],
    },
    {
      group: 'Insight & reporting',
      rows: [
        ['Class & job-level tracking', false, true, true],
        ['Monthly management report w/ commentary', false, true, true],
        ['KPI dashboard & trend analysis', false, true, true],
        ['Annual budget vs. actual review', false, true, true],
        ['A/P & A/R oversight', false, true, true],
      ],
    },
    {
      group: 'Strategy & forecasting',
      rows: [
        ['Annual cash-flow projections', false, true, true],
        ['Quarterly rolling projections', false, false, true],
        ['13-week cash-flow forecasting', false, false, true],
        ['Scenario modeling — growth, downturn, sale', false, false, true],
        ['Vendor & cost structure review', false, false, true],
        ['Lender & investor reporting packages', false, false, true],
      ],
    },
    {
      group: 'Cadence',
      rows: [
        ['Check-in rhythm', 'Quarterly', 'Monthly', 'Monthly advisory'],
      ],
    },
  ],
  addons: [
    {
      name: 'Catch-up bookkeeping',
      body: 'Bringing prior-year (or longer) books current. Quoted after a 30-minute review.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>),
    },
    {
      name: 'Fixed asset maintenance',
      body: 'Schedule maintenance, capitalization policy, additions and dispositions. Quoted by the size of your asset base.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>),
    },
    {
      name: 'New entity setup',
      body: 'LLC formation, EIN, operating agreement, and initial chart of accounts. Quoted up front.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V8l9-6 9 6v13"/><path d="M9 21v-6h6v6"/></svg>),
    },
    {
      name: 'Software migration',
      body: 'Moving from QuickBooks Desktop, Xero, or a spreadsheet system into QuickBooks Online without losing history.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9"/><path d="M3 12a9 9 0 0 1 9-9"/><polyline points="17 8 21 12 17 16"/><polyline points="7 16 3 12 7 8"/></svg>),
    },
    {
      name: 'Year-end clean-up review',
      body: 'A second-set-of-eyes review on books you maintain yourself, ahead of tax season.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>),
    },
  ],
  faqs: [
    {
      q: 'Do you require a long-term contract?',
      a: 'No. Engagements are month-to-month after the first month. You can change tiers or cancel with 30 days\u2019 notice. We\u2019d rather you stay because the work is good, not because the paperwork is.',
    },
    {
      q: 'How is bookkeeping pricing determined?',
      a: 'It comes down to transaction volume, number of accounts, entity complexity, and the tier you select. We scope each engagement on a short discovery call and provide a flat monthly quote in writing before any work begins. No hourly billing, no surprise invoices.',
    },
    {
      q: 'How do you handle prior-year (catch-up) books?',
      a: 'If your books are behind, we\u2019ll review the last 12 months at no charge and quote a one-time catch-up engagement before we start the ongoing relationship. Most small businesses are back to current in three to six weeks.',
    },
    {
      q: 'What software do you use?',
      a: 'QuickBooks Online is our default for clients we onboard. We also support Xero and existing QuickBooks Desktop files. Software subscriptions are passed through at our wholesale rate \u2014 no markup.',
    },
    {
      q: 'Can we change tiers as we grow?',
      a: 'Yes. We review the scope of each engagement at year-end and any time the business changes meaningfully \u2014 a new entity, a second location, a big jump in transaction volume. Tier changes take effect on the first of the following month.',
    },
    {
      q: 'Do you work with our existing CPA on the tax side?',
      a: 'Yes. Plenty of our bookkeeping clients have a tax preparer they\u2019ve worked with for years. We\u2019ll deliver year-end books in whatever format your CPA needs and answer their questions directly.',
    },
  ],
};

const TAX = {
  id: 'tax',
  label: 'Tax',
  eyebrow: 'TAX PLANNING & PREPARATION',
  headline: 'Clean returns. Fewer surprises.',
  italic: 'Plan ahead. Pay less.',
  supporting: 'From annual filing to a year-round tax strategy partnership. We coordinate business and personal returns to keep your overall position low.',
  footnote: 'Tax engagements are priced per entity and complexity. Business and individual returns are coordinated together to minimize your overall tax position.',
  tiers: [
    {
      roman: 'I',
      name: 'The Foundation',
      tagline: 'Annual compliance',
      cadence: 'Annual engagement',
      included: [
        'Business & owner return preparation',
        'Federal & state filing',
        'Estimated tax schedule',
        'Secure document collection portal',
        'Extension filing if needed',
      ],
      excluded: [
        'Mid-year planning calls',
        'Projections',
      ],
    },
    {
      roman: 'II',
      name: 'The Steward',
      tagline: 'Planning & compliance',
      cadence: 'Semi-annual touchpoints',
      inherits: 'Everything in The Foundation',
      included: [
        'Mid-year tax planning call',
        'Entity structure review',
        'Year-end tax projection',
        'Retirement contribution planning',
        'Depreciation & fixed asset strategy',
        'Deduction optimization review',
      ],
    },
    {
      roman: 'III',
      name: 'The Counsel',
      tagline: 'Strategic tax partnership',
      cadence: 'Quarterly advisory sessions',
      inherits: 'Everything in The Steward',
      included: [
        'Quarterly tax projections & planning calls',
        'Multi-year tax strategy',
        'Owner compensation & distribution planning',
        'M&A, sale & exit tax planning',
        'State nexus & multi-state review',
      ],
    },
  ],
  comparison: [
    {
      group: 'Return preparation',
      rows: [
        ['Business return (1120-S / 1065 / Sch. C)', true, true, true],
        ['Owner personal 1040', true, true, true],
        ['Federal & state filing', true, true, true],
        ['Estimated tax schedule', true, true, true],
        ['Extension filing if needed', true, true, true],
        ['Secure document portal', true, true, true],
      ],
    },
    {
      group: 'Planning & strategy',
      rows: [
        ['Mid-year tax planning call', false, true, true],
        ['Entity structure review', false, true, true],
        ['Year-end tax projection', false, true, true],
        ['Retirement contribution planning', false, true, true],
        ['Depreciation tracking & fixed-asset strategy', false, true, true],
        ['Deduction optimization review', false, true, true],
      ],
    },
    {
      group: 'Advanced strategy',
      rows: [
        ['Quarterly tax planning calls', false, false, true],
        ['Multi-year tax strategy', false, false, true],
        ['Owner comp & distribution planning', false, false, true],
        ['M&A, sale & exit tax planning', false, false, true],
        ['State nexus & multi-state review', false, false, true],
      ],
    },
    {
      group: 'Cadence',
      rows: [
        ['Touchpoint rhythm', 'Annual', 'Semi-annual', 'Quarterly'],
      ],
    },
  ],
  addons: [
    {
      name: 'S-Corp election & filing',
      body: 'Form 2553, reasonable-compensation analysis, transition planning for owners moving from sole prop or LLC.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
    },
    {
      name: 'IRS / state notice response',
      body: 'We read the letter, draft the response, file it. Quoted per notice based on complexity.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M4 4l8 8 8-8"/></svg>),
    },
    {
      name: 'Additional personal 1040',
      body: 'Spouse, adult child, or partner return beyond the owner return included in the tier.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>),
    },
    {
      name: 'Prior-year amended return',
      body: 'Form 1040-X or 1120-S/1065 amendments. Quoted after a short review of the original filing.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>),
    },
    {
      name: 'Out-of-state filing',
      body: 'Additional state returns beyond the home state. Common for remote teams, multi-state rental, or sales nexus.',
      icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    },
  ],
  faqs: [
    {
      q: 'Do I have to be a bookkeeping client to engage you for tax?',
      a: 'No. Many clients use us for tax only and keep their books in-house or with another bookkeeper. We\u2019ll work with whatever ledger you bring us, as long as it ties out.',
    },
    {
      q: 'How is tax pricing determined?',
      a: 'It depends on entity type (Schedule C, S-Corp, partnership, multi-entity), number of states, and any specialty items \u2014 rental property, K-1s, owner comp planning, complex depreciation. You\u2019ll get a flat annual quote in writing before any return work begins.',
    },
    {
      q: 'What\u2019s included in the business return?',
      a: 'The federal business return (1120-S, 1065, or Schedule C depending on your structure), the PA business return, and applicable local filings. The owner\u2019s personal 1040 is included. State filings outside Pennsylvania are quoted separately per state.',
    },
    {
      q: 'When should we start tax planning, not just preparation?',
      a: 'For most owner-operated businesses, the year you cross $250K in profit is the year a mid-year planning call starts paying for itself. The Steward and Counsel tiers exist for exactly this \u2014 it\u2019s the difference between filing what happened and shaping what will.',
    },
    {
      q: 'What happens if I get an IRS or state notice mid-year?',
      a: 'Notice response is handled as an a la carte engagement \u2014 we\u2019ll read the letter, draft the response, and file it. Quoted per notice. Most are resolved within two to three weeks.',
    },
    {
      q: 'Can you handle multi-state filings?',
      a: 'Yes. PA, OH, WV, and NY are routine. We\u2019ve filed in most states; less common ones are quoted individually.',
    },
  ],
};

window.PRICING_DATA = { BOOKKEEPING, TAX };
