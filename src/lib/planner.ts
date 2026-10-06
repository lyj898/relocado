// Tasks for the leaving-Singapore planner. Each task sits a fixed number of days from one anchor date.
// Any deadline stated here must match the sourced guide it links to: change the guide first, then this.

export type PlannerAnchor = 'lastDay' | 'flight' | 'handover';
export type PlannerNeed = 'rent' | 'ship' | 'car' | 'pet' | 'pr';

export interface PlannerTask {
  id: string;
  anchor: PlannerAnchor;
  offsetDays: number;
  /** How the timing is described to the reader, next to the computed date. */
  when: string;
  title: string;
  detail: string;
  link?: { label: string; href: string };
  requires?: PlannerNeed[];
}

export const PLANNER_TASKS: PlannerTask[] = [
  {
    id: 'pet-plan',
    anchor: 'flight',
    offsetDays: -180,
    when: 'As early as you can',
    title: 'Start your pet’s export plan',
    detail:
      'The destination’s import rules set the timeline, and some need vaccinations, tests or waiting periods that take months. Check them first, then decide whether to use a pet relocation specialist.',
    link: { label: 'Pet relocation specialists', href: '/directory/#pet-relocation' },
    requires: ['pet'],
  },
  {
    id: 'mover-surveys',
    anchor: 'flight',
    offsetDays: -70,
    when: 'About 10 weeks before your flight',
    title: 'Get surveys and quotes from international movers',
    detail:
      'Ask two or three movers to survey your home. Quotes depend on volume, so have a rough idea of what’s going before they come.',
    link: { label: 'International movers in Singapore', href: '/directory/#international-movers' },
    requires: ['ship'],
  },
  {
    id: 'decide',
    anchor: 'flight',
    offsetDays: -63,
    when: 'About 9 weeks before your flight',
    title: 'Decide what to ship, sell, store or throw away',
    detail: 'Go room by room. Anything you’re selling needs time to find a buyer.',
    link: { label: 'Ship, sell, store or throw away', href: '/leaving-singapore/ship-sell-store-or-dispose/' },
  },
  {
    id: 'lease-notice',
    anchor: 'handover',
    offsetDays: -61,
    when: 'Two months before you hand back your home (a common notice period; check your agreement)',
    title: 'Give your landlord written notice',
    detail:
      'If your lease has a diplomatic clause, it sets how much notice you give and after how many months you can use it. Serve the notice the way your agreement says, with proof such as a letter from your employer.',
    link: { label: 'How the diplomatic clause works', href: '/leaving-singapore/diplomatic-clause/' },
    requires: ['rent'],
  },
  {
    id: 'ir21',
    anchor: 'lastDay',
    offsetDays: -31,
    when: 'At least one month before your last working day',
    title: 'Check your employer has filed your tax clearance (IR21)',
    detail:
      'Your employer must file Form IR21 at least one month before your last day, and hold back all money due to you until IRAS says how much tax to pay from it.',
    link: { label: 'Tax clearance (IR21) explained', href: '/leaving-singapore/ir21-tax-clearance/' },
  },
  {
    id: 'book-shipment',
    anchor: 'flight',
    offsetDays: -42,
    when: 'About 6 weeks before your flight',
    title: 'Book your mover and packing date',
    detail: 'Pick the packing date so you’re not left in an empty home for longer than you need to be.',
    link: { label: 'What your mover won’t ship', href: '/leaving-singapore/what-movers-wont-ship/' },
    requires: ['ship'],
  },
  {
    id: 'sell',
    anchor: 'flight',
    offsetDays: -42,
    when: 'About 6 weeks before your flight',
    title: 'List furniture and appliances for sale',
    detail: 'Keep the things you need until the end, and agree collection dates with buyers.',
    link: { label: 'Selling and donating before you leave', href: '/leaving-singapore/ship-sell-store-or-dispose/' },
  },
  {
    id: 'car',
    anchor: 'flight',
    offsetDays: -42,
    when: 'About 6 weeks before your flight',
    title: 'Sell, transfer or deregister your car',
    detail:
      'If you sell, LTA requires ownership to be transferred to the buyer within 7 days. If you deregister, the car must be scrapped, exported or stored in an Export Processing Zone, with proof of disposal within one month, and any PARF and COE rebates must be used within 12 months.',
    link: { label: 'Selling or deregistering the car', href: '/leaving-singapore/last-two-weeks/' },
    requires: ['car'],
  },
  {
    id: 'pr-renounce',
    anchor: 'flight',
    offsetDays: -42,
    when: 'At least six weeks before your flight',
    title: 'Apply to renounce your PR status',
    detail:
      'ICA takes up to four weeks to process an online application, and advises staying in Singapore until it’s complete. You’re given a 30-day Visit Pass when it’s done.',
    link: {
      label: 'ICA: renouncing permanent residence',
      href: 'https://www.ica.gov.sg/enter-transit-depart/more-information/for-permanent-residents/renunciation-of-permanent-residence',
    },
    requires: ['pr'],
  },
  {
    id: 'pr-cpf',
    anchor: 'flight',
    offsetDays: -7,
    when: 'Once your renunciation is complete',
    title: 'Close your CPF account and transfer your savings',
    detail:
      'Once the renunciation is complete, you can close the account and move the money to your bank account. If you don’t, CPF Board closes it the following month and the savings stop earning CPF interest.',
    link: { label: 'CPF Board: closing your account when you leave', href: 'https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore' },
    requires: ['pr'],
  },
  {
    id: 'contracts',
    anchor: 'flight',
    offsetDays: -30,
    when: 'About a month before your flight',
    title: 'Check your mobile, internet and other contracts',
    detail: 'Find out each contract’s termination terms, then pick a disconnection date that suits your last weeks.',
  },
  {
    id: 'book-clearout',
    anchor: 'handover',
    offsetDays: -14,
    when: 'Two weeks before handover',
    title: 'Book the final clear-out',
    detail:
      'Whatever isn’t shipped, sold or given away has to leave before handover. Junk to Clear, a disposal company we refer jobs to, clears anything from a few items to the whole flat.',
    link: { label: 'Junk to Clear', href: 'https://junktoclear.com.sg/services/residential-waste-disposal-singapore/' },
  },
  {
    id: 'book-clean',
    anchor: 'handover',
    offsetDays: -14,
    when: 'Two weeks before handover',
    title: 'Book the move-out clean',
    detail:
      'Check what your tenancy agreement says about cleaning at the end of the lease. HomeToClean, run by the same team as Relocado, matches you with vetted cleaners.',
    link: { label: 'HomeToClean move-out cleaning', href: 'https://hometoclean.com/cleaning/move-out-cleaning/' },
    requires: ['rent'],
  },
  {
    id: 'stay',
    anchor: 'handover',
    offsetDays: -21,
    when: 'Three weeks before handover',
    title: 'Book somewhere to stay after handover, if you need it',
    detail:
      'If you hand back the flat before your flight, book a hotel, which has no minimum stay, or a serviced apartment, which has a seven-night minimum. Condos and HDB flats can’t be let for stays of less than three months.',
    link: { label: 'Your last two weeks', href: '/leaving-singapore/last-two-weeks/' },
    requires: ['rent'],
  },
  {
    id: 'pet-licence',
    anchor: 'flight',
    offsetDays: -21,
    when: 'About three weeks before your flight',
    title: 'Apply for your pet’s AVS export licence',
    detail:
      'Every pet leaving Singapore needs an export licence from the Animal and Veterinary Service. It’s valid for 90 days from issue, and the destination may also need a health certificate endorsed by AVS.',
    link: { label: 'Pets in your last two weeks', href: '/leaving-singapore/last-two-weeks/' },
    requires: ['pet'],
  },
  {
    id: 'mail',
    anchor: 'flight',
    offsetDays: -7,
    when: 'A week before your flight',
    title: 'Set up mail redirection',
    detail:
      'SingPost’s Mail Redirection Service can forward mail to an overseas address. It starts two working days after SingPost receives your application and payment, and covers SingPost mail only, not couriers.',
    link: { label: 'Redirecting your mail', href: '/leaving-singapore/last-two-weeks/' },
  },
  {
    id: 'packing-day',
    anchor: 'flight',
    offsetDays: -14,
    when: 'About two weeks before your flight',
    title: 'Packing day: keep your suitcases and documents apart',
    detail: 'Set aside everything you’re flying with, including passports and documents, before the packers arrive.',
    link: { label: 'Your last two weeks', href: '/leaving-singapore/last-two-weeks/' },
    requires: ['ship'],
  },
  {
    id: 'utilities',
    anchor: 'handover',
    offsetDays: -7,
    when: 'A week before handover',
    title: 'Agree who closes the utilities account, and when',
    detail:
      'Keep power and water on for the joint inspection. CEA’s tenancy template says the tenant shouldn’t close the account before then, and has the landlord apply to close it afterwards. Agree the arrangement with your landlord.',
    link: { label: 'Your last two weeks', href: '/leaving-singapore/last-two-weeks/' },
  },
  {
    id: 'clearout',
    anchor: 'handover',
    offsetDays: -2,
    when: 'Two days before handover',
    title: 'Final clear-out',
    detail: 'Leave the flat as empty as your agreement requires, including anything the previous tenant left if you agreed to remove it.',
  },
  {
    id: 'clean',
    anchor: 'handover',
    offsetDays: -1,
    when: 'The day before handover',
    title: 'Move-out clean',
    detail: 'Once the flat is empty, clean it, so the inspection sees the flat as you’ll leave it.',
    requires: ['rent'],
  },
  {
    id: 'handover',
    anchor: 'handover',
    offsetDays: 0,
    when: 'Handover day',
    title: 'Handover inspection',
    detail: 'Walk through with the landlord or agent, take dated photos, return every key and access card, and note the meter readings.',
    link: { label: 'Getting your deposit back', href: '/leaving-singapore/diplomatic-clause/' },
    requires: ['rent'],
  },
  {
    id: 'work-pass',
    anchor: 'lastDay',
    offsetDays: 0,
    when: 'Within a week after your last day',
    title: 'Your employer cancels your work pass',
    detail:
      'MOM gives employers one week after your last day of notice. You can’t work once it’s cancelled. If you’re staying on, ask HR to request a Short-Term Visit Pass: up to 90 days after an Employment Pass, up to 30 after an S Pass. Family passes are cancelled with yours.',
    link: { label: 'The departure checklist for HR', href: '/for-hr-teams/departure-checklist/' },
  },
  {
    id: 'bank',
    anchor: 'flight',
    offsetDays: -30,
    when: 'At least 30 days before you fly',
    title: 'Set up your bank account for refunds',
    detail:
      'IRAS pays refunds electronically only. It advises leavers to keep a Singapore-dollar account open and link it to their FIN through PayNow at least 30 days before departure. Keep the account open until your tax, deposit and final pay have all come through.',
    link: { label: 'Refunds after tax clearance', href: '/leaving-singapore/ir21-tax-clearance/' },
  },
];
