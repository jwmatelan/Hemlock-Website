// ============================================================
// PRICING PAGE — Hemlock CPA
// Header band + two service-line sections, each with three tiers
// ============================================================

const PRICING_DATA = [
  {
    id: 'bookkeeping',
    eyebrow: 'MONTHLY BOOKKEEPING',
    headline: 'Accurate books, every month.',
    supporting: 'Three engagement levels — from foundation bookkeeping to a full strategic advisor partnership. Pick what fits the season your business is in.',
    footnote: 'Pricing is customized based on transaction volume, entity type, and complexity. All tiers include secure document portal access and year-end close support.',
    tiers: [
      {
        roman: 'I',
        name: 'Basic',
        tagline: 'Foundation bookkeeping',
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
        cadence: 'Quarterly check-in',
      },
      {
        roman: 'II',
        name: 'Advanced',
        tagline: 'Insight-driven accounting',
        inherits: 'Everything in Basic',
        included: [
          'Class & job-level tracking',
          'Monthly management report with commentary',
          'KPI dashboard & trend analysis',
          'Annual cash flow projections',
          'Annual budget vs. actual review',
          'Accounts payable & receivable oversight',
        ],
        cadence: 'Monthly check-in',
      },
      {
        roman: 'III',
        name: 'Ultimate',
        tagline: 'Strategic advisor partnership',
        inherits: 'Everything in Advanced',
        included: [
          'Quarterly rolling projections',
          '13-week cash flow forecasting',
          'Scenario modeling — growth, downturn, sale',
          'Vendor & cost structure review',
          'Lender & investor reporting packages',
        ],
        cadence: 'Dedicated monthly advisory',
        priority: 'Priority response — same business day',
      },
    ],
  },
  {
    id: 'tax',
    eyebrow: 'TAX PLANNING & PREPARATION',
    headline: 'Clean returns. Fewer surprises.',
    supporting: 'From annual filing to a year-round tax strategy partnership. We coordinate business and personal returns to keep your overall position low.',
    footnote: 'Tax engagements are priced per entity and complexity. Business and individual returns are coordinated together to minimize your overall tax position.',
    tiers: [
      {
        roman: 'I',
        name: 'Basic',
        tagline: 'Annual compliance',
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
        cadence: 'Annual engagement',
      },
      {
        roman: 'II',
        name: 'Advanced',
        tagline: 'Planning & compliance',
        inherits: 'Everything in Basic',
        included: [
          'Mid-year tax planning call',
          'Entity structure review',
          'Year-end tax projection',
          'Retirement contribution planning',
          'Depreciation & fixed asset strategy',
          'Deduction optimization review',
        ],
        cadence: 'Semi-annual touchpoints',
      },
      {
        roman: 'III',
        name: 'Ultimate',
        tagline: 'Strategic tax partnership',
        inherits: 'Everything in Advanced',
        included: [
          'Quarterly tax projections & planning calls',
          'Multi-year tax strategy',
          'Owner compensation & distribution planning',
          'M&A, sale & exit tax planning',
          'State nexus & multi-state review',
        ],
        cadence: 'Quarterly advisory sessions',
        priority: 'Priority response — same business day',
      },
    ],
  },
];

window.PRICING_DATA = PRICING_DATA;
