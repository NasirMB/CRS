// Navigation
export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Surveys', href: '/surveys' },
  { label: 'GIS', href: '/gis' },
  { label: 'Districts', href: '/districts' },
  { label: 'Info Desk', href: '/info-desk' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Publications', href: '/publications' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact' },
];

// Core Services
export const coreServices = [
  {
    id: 'crop-reporting',
    title: 'Crop Reporting',
    description: 'Comprehensive reporting on crop cultivation, production, and agricultural trends across districts',
    href: '/crop-reporting',
    icon: 'bar-chart-3',
  },
  {
    id: 'crop-details',
    title: 'Crop Details',
    description: 'In-depth information about various crops including cultivation practices and seasonal data',
    href: '/crop-details',
    icon: 'wheat',
  },
  {
    id: 'area-estimation',
    title: 'Area Estimation',
    description: 'Accurate measurement and estimation of cultivated areas using advanced surveying techniques',
    href: '/area-estimation',
    icon: 'ruler',
  },
  {
    id: 'yield-estimation',
    title: 'Yield Estimation',
    description: 'Prediction and analysis of crop yields based on agronomic data and field assessments',
    href: '/yield-estimation',
    icon: 'trending-up',
  },
  {
    id: 'agriculture-machinery',
    title: 'Agriculture Machinery',
    description: 'Information on available agricultural machinery and equipment for farming operations',
    href: '/agriculture-machinery',
    icon: 'tractor',
  },
  {
    id: 'land-use',
    title: 'Land Use',
    description: 'Analysis of land utilization patterns and land classification across Balochistan',
    href: '/land-use',
    icon: 'map',
  },
  {
    id: 'cost-of-production',
    title: 'Cost of Production',
    description: 'Comprehensive data on production costs for different crops and farming practices',
    href: '/cost-of-production',
    icon: 'circle-dollar-sign',
  },
  {
    id: 'harvest-prices',
    title: 'Harvest Prices',
    description: 'Market prices and economic data for harvested crops and agricultural commodities',
    href: '/harvest-prices',
    icon: 'badge-dollar-sign',
  },
  {
    id: 'climate-and-weather',
    title: 'Climate & Weather Data',
    description: 'Meteorological information and climate data affecting agricultural production',
    href: '/climate-and-weather-data',
    icon: 'cloud-sun',
  },
  {
    id: 'remote-sensing',
    title: 'Remote Sensing Maps',
    description: 'Satellite imagery and remote sensing analysis for crop monitoring and assessment',
    href: '/remote-sensing-maps',
    icon: 'satellite',
  },
];

// Districts
export const districts = [
  // Quetta Division
  { id: 411, name: 'Quetta', division: 'Quetta Division', code: 411 },
  { id: 412, name: 'Pishin', division: 'Quetta Division', code: 412 },
  { id: 413, name: 'Killa Abdullah', division: 'Quetta Division', code: 413 },
  // Zhob Division
  { id: 421, name: 'Loralai', division: 'Zhob Division', code: 421 },
  { id: 422, name: 'Barkhan', division: 'Zhob Division', code: 422 },
  { id: 423, name: 'Musakhel', division: 'Zhob Division', code: 423 },
  { id: 424, name: 'Killa Saifullah', division: 'Zhob Division', code: 424 },
  { id: 425, name: 'Zhob', division: 'Zhob Division', code: 425 },
  { id: 426, name: 'Sherani', division: 'Zhob Division', code: 426 },
  { id: 427, name: 'Duki', division: 'Zhob Division', code: 427 },
  // Sibi Division
  { id: 431, name: 'Sibi', division: 'Sibi Division', code: 431 },
  { id: 432, name: 'Harnai', division: 'Sibi Division', code: 432 },
  { id: 433, name: 'Ziarat', division: 'Sibi Division', code: 433 },
  { id: 434, name: 'Kohlu', division: 'Sibi Division', code: 434 },
  { id: 435, name: 'Dera Bugti', division: 'Sibi Division', code: 435 },
  // Nasirabad Division
  { id: 441, name: 'Kachhi / Bolan', division: 'Nasirabad Division', code: 441 },
  { id: 442, name: 'Jaffarabad', division: 'Nasirabad Division', code: 442 },
  { id: 443, name: 'Nasirabad', division: 'Nasirabad Division', code: 443 },
  { id: 444, name: 'Jhal Magsi', division: 'Nasirabad Division', code: 444 },
  { id: 445, name: 'Sohbatpur', division: 'Nasirabad Division', code: 445 },
  // Kalat Division
  { id: 451, name: 'Kalat', division: 'Kalat Division', code: 451 },
  { id: 452, name: 'Mastung', division: 'Kalat Division', code: 452 },
  { id: 453, name: 'Khuzdar', division: 'Kalat Division', code: 453 },
  { id: 454, name: 'Awaran', division: 'Kalat Division', code: 454 },
  { id: 455, name: 'Lasbela', division: 'Kalat Division', code: 455 },
  { id: 456, name: 'Shaheed Sikandar Abad', division: 'Kalat Division', code: 456 },
  // Mekran Division
  { id: 461, name: 'Kech / Turbat', division: 'Mekran Division', code: 461 },
  { id: 462, name: 'Gwadar', division: 'Mekran Division', code: 462 },
  { id: 463, name: 'Panjgur', division: 'Mekran Division', code: 463 },
  // Rakhshan Division
  { id: 471, name: 'Chagai', division: 'Rakhshan Division', code: 471 },
  { id: 472, name: 'Kharan', division: 'Rakhshan Division', code: 472 },
  { id: 473, name: 'Nushki', division: 'Rakhshan Division', code: 473 },
  { id: 474, name: 'Washuk', division: 'Rakhshan Division', code: 474 },
];

// Publications
export const publications = [
  {
    id: 1,
    title: 'Annual Crop Production Report 2024',
    category: 'Report',
    date: '2024-12-15',
    href: '/publications',
  },
  {
    id: 2,
    title: 'Crop Statistics Yearbook',
    category: 'Statistics',
    date: '2024-11-10',
    href: '/publications',
  },
  {
    id: 3,
    title: 'Technical Manual: Crop Area Estimation',
    category: 'Manual',
    date: '2024-10-20',
    href: '/technical-manuals',
  },
  {
    id: 4,
    title: 'Agricultural Machinery Registry',
    category: 'Guide',
    date: '2024-09-15',
    href: '/publications',
  },
  {
    id: 5,
    title: 'Agricultural Statistics Balochistan 2024-25',
    category: 'Statistics',
    href: '/publications/statistics-book-2024-25.pdf',
  },
];

// News & Events
export const newsAndEvents: {
  id: number;
  title: string;
  type: 'News' | 'Event';
  date: string;
  description: string;
}[] = [
  {
    id: 1,
    title: 'Annual Crop Survey 2025 Begins',
    type: 'Event',
    date: '2025-05-15',
    description: 'The annual crop survey season has commenced across all districts.',
  },
  {
    id: 2,
    title: 'New GIS Portal Launched',
    type: 'News',
    date: '2025-05-10',
    description: 'Advanced GIS mapping and remote sensing tools now available for farmers.',
  },
  {
    id: 3,
    title: 'Training Workshop on Crop Statistics',
    type: 'Event',
    date: '2025-05-20',
    description: 'Professional development workshop for CRS staff and agricultural officers.',
  },
  {
    id: 4,
    title: 'Wheat Harvest Campaign 2025',
    type: 'Event',
    date: '2025-05-01',
    description: 'District-wise wheat harvest monitoring and data collection underway.',
  },
];

// Survey Types
export const surveyTypes = [
  {
    name: 'Enumeration Survey',
    season: 'Autumn & Spring',
    description: 'Detailed field-level data collection',
  },
  {
    name: 'Benchmark Survey',
    season: 'Every 5 Years',
    description: 'Comprehensive agricultural census',
  },
  {
    name: 'Crop Cutting Survey',
    season: 'Harvest',
    description: 'Yield assessment through crop sampling',
  },
];

// Gallery
export const galleryImages = [
  {
    id: 7,
    title: 'CRS Official Activity Photograph',
    category: 'Official CRS',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/v1790698603/02_kwp2gh.jpg',
    alt: 'CRS official activity photograph 1',
  },
  {
    id: 8,
    title: 'CRS Official Activity Photograph',
    category: 'Official CRS',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/v1790698603/03_x2qtvb.jpg',
    alt: 'CRS official activity photograph 2',
  },
  {
    id: 9,
    title: 'Poppy Eradication Campaign 2025–26',
    category: 'Poppy Eradication Campaign 2025–26',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/v1790699078/04_sfhv4v.jpg',
    alt: 'Poppy Eradication Campaign 2025–26 photograph 1',
  },
  {
    id: 10,
    title: 'Poppy Eradication Campaign 2025–26',
    category: 'Poppy Eradication Campaign 2025–26',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/v1790699078/05_agejiw.jpg',
    alt: 'Poppy Eradication Campaign 2025–26 photograph 2',
  },
  {
    id: 1,
    title: 'Field Survey Activities',
    category: 'Survey',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/f_auto,q_auto,w_1400,c_limit/v1778340214/Field_Survey_Activities_ok80lg.png',
    alt: 'CRS field teams conducting crop survey activities in district farmland',
  },
  {
    id: 2,
    title: 'Crop Assessment',
    category: 'Field Work',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/f_auto,q_auto,w_1400,c_limit/v1778340213/Crop_Assessment_wvuojj.jpg',
    alt: 'Crop assessment activity for seasonal production monitoring',
  },
  {
    id: 3,
    title: 'Agricultural Statistics',
    category: 'Data',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/f_auto,q_auto,w_1400,c_limit/v1778340213/Agricultural_Statistics_nz13rv.jpg',
    alt: 'Agricultural statistics review and district data compilation',
  },
  {
    id: 4,
    title: 'Remote Sensing',
    category: 'Technology',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/f_auto,q_auto,w_1400,c_limit/v1778340213/Remote_Sensing_nqzr1y.avif',
    alt: 'Remote sensing and satellite-backed crop intelligence view',
  },
  {
    id: 5,
    title: 'District Mapping',
    category: 'GIS',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/f_auto,q_auto,w_1400,c_limit/v1778340212/District_Mapping_olbham.png',
    alt: 'District mapping interface for CRS geospatial analysis',
  },
  {
    id: 6,
    title: 'Data Analysis',
    category: 'Research',
    src: 'https://res.cloudinary.com/dz3hsef7i/image/upload/f_auto,q_auto,w_1400,c_limit/v1778340212/Data_Analysis_evrngf.avif',
    alt: 'Data analysis workflow for agricultural reporting insights',
  },
];

// Footer Content
export const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Crop Reporting', href: '/crop-reporting' },
      { label: 'Area Estimation', href: '/area-estimation' },
      { label: 'Yield Estimation', href: '/yield-estimation' },
      { label: 'GIS & Remote Sensing', href: '/gis' },
    ],
  },
  information: {
    title: 'Information',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'News & Events', href: '/news-events' },
      { label: 'Publications', href: '/publications' },
      { label: 'FAQ', href: '/frequent-asked-questions' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Technical Manuals', href: '/technical-manuals' },
      { label: 'Districts', href: '/districts' },
      { label: 'Forms', href: '/survey-forms' },
      { label: 'Calendar', href: '/calendar-of-annual-field-activities' },
    ],
  },
};

