export interface Project {
  id: string;
  title: string;
  category: 'Techpack' | 'Editorial' | 'Design';
  description: string;
  imageUrl: string;
  year: string;
  client?: string;
  tags: string[];
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'p9',
    title: 'The Pill Pool',
    category: 'Design',
    description: 'Pill not to be confused with Pee',
    imageUrl: '/images/inflatablepng.png',
    year: '2025',
    client: 'Personal Project',
    tags: ['Design', 'Product', '3D'],
    gallery: [
      '/images/inflatablepng.png',
      '/images/inflatableprint.png',
      '/images/Artboard 2@22219.png'
    ]
  },
  {
    id: 'p5',
    title: 'Mix',
    category: 'Design',
    description: 'A curated collection of various design projects and experimental works.',
    imageUrl: '/images/carstickers.jpg',
    year: '2026',
    client: 'Various / Personal',
    tags: ['Design', 'Visual', 'Collection'],
    gallery: [
      '/images/carstickers.jpg',
      '/images/25abriltexture.png',
      '/images/postpag2v1.jpg',
      '/images/fronthalloween.jpg',
      '/images/Dreapster.jpg',
      '/images/green.jpg'
    ]
  },
  {
    id: 'p2',
    title: 'Building "KEYS"',
    category: 'Design',
    description: 'Custom packaging and component breakdown for Dripclub\'s collectible keychain series.',
    imageUrl: '/images/FlatMockup White BG.png',
    year: '2025',
    client: 'Dripclub',
    tags: ['Packaging', 'Print', 'Techpack'],
    gallery: [
      '/images/FlatMockup White BG.png',
      '/images/3D Box White BGTRANSPA.png',
      '/images/keysbanner.jpg',
      '/images/bape_red_Keychain.png'
    ]
  },
  {
    id: 'p1',
    title: 'The Misstep" Poster',
    category: 'Design',
    description: 'Design for short film "The Misstep".',
    imageUrl: '/images/MisstepFanMAde.jpg',
    year: '2025',
    client: 'Independent Film',
    tags: ['Poster', 'Branding', 'Typography'],
    gallery: [
      '/images/MisstepFanMAde.jpg',
      '/images/Misstep2color.png',
      '/images/MisstepPink.png'
    ]
  },
  {
    id: 'p4',
    title: 'Garment Design Mockups',
    category: 'Design',
    description: 'Technical mockups for print and embroidery applications, developed for fashion and lifestyle brands.',
    imageUrl: '/images/Sem Título-11-1.png',
    year: '2026',
    client: 'Explicit / Dripclub',
    tags: ['Design', 'Apparel', 'Mockup'],
    gallery: [
      '/images/Sem Título-11-1.png',
      '/images/summerMixWhiteEW_closeup.jpg',
      '/images/pleasuresEW_closeup.jpg',
      '/images/stocksWhiteEW_closeup.jpg',
      '/images/cityWhite_EW_closeup.jpg',
       '/images/afterhoursBrownEW_closeup.jpg',
      '/images/90spackWhite_EW_closeup.jpg',
      '/images/dogEW_closeup.jpg',
      '/images/ddoeWhiteEW_closeup.jpg',
      '/images/dragonEW_closeup.jpg',
      '/images/EU_Hoodie_Embrodery.jpg',
      '/images/explicitLogoWhite_EW_closeup.jpg',
      '/images/familyNavy_EW_closeup.jpg',
      '/images/fridgeEW_closeup.jpg',
      '/images/grannyWhiteEW_closeup.jpg',
      '/images/iLoveMyselfV2White_EW_closeup.jpg',
      '/images/japaneseFONT_closeup.jpg',
      '/images/legoWORLD_closeup.jpg',
      '/images/lollypop_BlackEW_Closeup.jpg',
      '/images/motorBRB_closeup.jpg',
      '/images/origin_WhiteEW_closeup.jpg',
      '/images/cityNavy_EW_closeup.jpg',
      '/images/pleasures_BlackEW_Closeup.jpg',
      '/images/gunWhiteEW_closeup.jpg'
    ]
  },
  {
    id: 'p6',
    title: 'Editorial "Issue 1"',
    category: 'Editorial',
    description: "Editorial work for EGO WORLD's Conceptual's magazines",
    imageUrl: '/images/i1_1.png',
    year: '2026',
    client: 'Various / Personal',
    tags: ['Editorial', 'Layout', 'Typography'],
    gallery: [
      '/images/i1_1.png',
      '/images/i1_2.png',
      '/images/i1_3.png'
    ]
  },
  {
    id: 'p7',
    title: 'Editorial "Issue 2"',
    category: 'Editorial',
    description: "Editorial work for EGO WORLD's Conceptual's magazines",
    imageUrl: '/images/i2_1.png',
    year: '2026',
    client: 'Various / Personal',
    tags: ['Editorial', 'Layout', 'Visual'],
    gallery: [
      '/images/i2_1.png',
      '/images/i2_2.png',
      '/images/i2_3.png',
      '/images/i2_4.png',
      '/images/i2_5.png',
      '/images/i2_6.png',
      '/images/i2_7.png',
      '/images/i2_8.png',
      '/images/i2_9.png',
      '/images/i2_10.png',
      '/images/i2_11.png'
    ]
  },
  {
    id: 'p8',
    title: 'Editorial "Issue 3"',
    category: 'Editorial',
    description: "Editorial work for EGO WORLD's Conceptual's magazines",
    imageUrl: '/images/i3_1.png',
    year: '2026',
    client: 'Various / Personal',
    tags: ['Editorial', 'Layout', 'Experimental'],
    gallery: [
      '/images/i3_1.png',
      '/images/i3_2.png',
      '/images/i3_3.png',
      '/images/i3_4.png'
    ]
  },
  {
    id: 'p10',
    title: 'Dripclub Jersey Techpack',
    category: 'Techpack',
    description: 'Comprehensive technical specifications for the Dripclub seasonal jersey, including fabric weights, pantone codes, and construction details.',
    imageUrl: '/images/techpackdripclub jersey-01.png',
    year: '2026',
    client: 'Dripclub',
    tags: ['Techpack', 'Apparel', 'Production'],
    gallery: [
      '/images/techpackdripclub jersey-01.png',
      '/images/techpackdripclub jersey-02.png',
      '/images/techpackdripclub jersey-03.png',
      '/images/techpackdripclub jersey-04.png',
      '/images/techpackdripclub jersey-05.png',
      '/images/techpackdripclub jersey-06.png',
      '/images/techpackdripclub jersey-07.png',
      '/images/techpackdripclub jersey-08.png',
      '/images/techpackdripclub jersey-09.png',
      '/images/techpackdripclub jersey-10.png'
    ]
  },
  {
    id: 'p11',
    title: 'Ego Lollypop T-shirt Techpack',
    category: 'Techpack',
    description: 'Detailed technical specifications for the Ego Lollypop t-shirt series, featuring construction guides and measurement charts.',
    imageUrl: '/images/techpackego lollypopblack-1.png',
    year: '2026',
    client: 'EGO WORLD',
    tags: ['Techpack', 'T-shirt', 'Production'],
    gallery: [
      '/images/techpackego lollypopblack-1.png',
      '/images/techpackego lollypopblack-2.png',
      '/images/techpackego lollypopblack-3.png',
      '/images/techpackego lollypopblack-4.png',
      '/images/techpackego lollypopblack-5.png',
      '/images/techpackego lollypopblack-6.png',
      '/images/techpackego lollypopblack-7.png',
      '/images/techpackego lollypopblack-8.png',
      '/images/techpackego lollypopblack-9.png'
    ]
  },
  {
    id: 'p12',
    title: 'Royal Blue EU Hoodie Techpack',
    category: 'Techpack',
    description: 'Complete production techpack for the Royal Blue EU Hoodie, detailing heavy-weight fleece specifications and embroidery placement.',
    imageUrl: '/images/Techpack_ RoyalBlue_EUHoodie.pdf-1.png',
    year: '2026',
    client: 'EGO WORLD',
    tags: ['Techpack', 'Hoodie', 'Production'],
    gallery: [
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-1.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-2.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-3.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-4.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-5.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-6.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-7.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-8.png',
      '/images/Techpack_ RoyalBlue_EUHoodie.pdf-9.png'
    ]
  }
];
