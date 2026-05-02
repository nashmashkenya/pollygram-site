/** Pollygram — default institutional catalogue (Kenyan schools). Regenerate: node scripts/gen-catalog-data.js */
(function (g) {
  'use strict';
  g.POLLYGRAM_CATEGORIES = [
  {
    "slug": "football",
    "label": "Football",
    "order": 0
  },
  {
    "slug": "athletics",
    "label": "Athletics",
    "order": 1
  },
  {
    "slug": "basketball",
    "label": "Basketball",
    "order": 2
  },
  {
    "slug": "volleyball",
    "label": "Volleyball",
    "order": 3
  },
  {
    "slug": "rugby",
    "label": "Rugby",
    "order": 4
  },
  {
    "slug": "hockey",
    "label": "Hockey",
    "order": 5
  },
  {
    "slug": "fitness",
    "label": "Fitness & PE",
    "order": 6
  },
  {
    "slug": "uniforms",
    "label": "School uniforms",
    "order": 7
  },
  {
    "slug": "aquatics",
    "label": "Aquatics",
    "order": 8
  },
  {
    "slug": "wholesale",
    "label": "Institutional Packages",
    "order": 9
  },
  {
    "slug": "handball",
    "label": "Handball",
    "order": 10
  },
  {
    "slug": "badminton",
    "label": "Badminton",
    "order": 11
  },
  {
    "slug": "table-tennis",
    "label": "Table tennis",
    "order": 12
  }
];
  g.POLLYGRAM_CATALOG = [
  {
    "id": "pg-sku-001",
    "sku": "pg-sku-001",
    "name": "Match Football Size 5",
    "category": "football",
    "category_label": "Football",
    "desc": "Match-grade Size 5 balls for secondary leagues, provincial finals and academy fixtures.",
    "price": "KES 1,200",
    "moq": "Min 6",
    "badge": "Popular",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": true,
    "tags": [
      "football",
      "school",
      "match",
      "training"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-002",
    "sku": "pg-sku-002",
    "name": "Training Football",
    "category": "football",
    "category_label": "Football",
    "desc": "Hard-wearing training balls for daily PE lessons and after-school programmes.",
    "price": "KES 950",
    "moq": "Min 12",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": true,
    "tags": [
      "football",
      "school",
      "training"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-003",
    "sku": "pg-sku-003",
    "name": "Goal Nets",
    "category": "football",
    "category_label": "Football",
    "desc": "Full-size replacement nets for standard school pitches — UV-treated twine.",
    "price": "KES 4,500",
    "moq": "Per set",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": true,
    "tags": [
      "football",
      "school",
      "goals"
    ],
    "image_url": "assets/images/products/grassroots-portable-football-goals.jpg",
    "image_webp": "assets/images/products/grassroots-portable-football-goals.webp"
  },
  {
    "id": "pg-sku-004",
    "sku": "pg-sku-004",
    "name": "Corner Flags",
    "category": "football",
    "category_label": "Football",
    "desc": "Flexible corner poles with flags for competition marking and sports days.",
    "price": "KES 3,200",
    "moq": "Set of 4",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/grassroots-portable-football-goals.jpg",
    "image_webp": "assets/images/products/grassroots-portable-football-goals.webp"
  },
  {
    "id": "pg-sku-005",
    "sku": "pg-sku-005",
    "name": "Training Cones",
    "category": "football",
    "category_label": "Football",
    "desc": "Bright agility cones for drills, warm-ups and primary PE circuits.",
    "price": "KES 80",
    "moq": "Min 20",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-006",
    "sku": "pg-sku-006",
    "name": "Goalkeeper Gloves",
    "category": "football",
    "category_label": "Football",
    "desc": "Finger-save GK gloves for school leagues and county youth tournaments.",
    "price": "KES 1,650",
    "moq": "Min 2 pairs",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-007",
    "sku": "pg-sku-007",
    "name": "Shin Guards",
    "category": "football",
    "category_label": "Football",
    "desc": "Lightweight slip-in guards sized for youth and senior high squads.",
    "price": "KES 450",
    "moq": "Min 10 pairs",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-008",
    "sku": "pg-sku-008",
    "name": "Football Bibs",
    "category": "football",
    "category_label": "Football",
    "desc": "Reversible mesh bibs for trials and intra-school matches.",
    "price": "KES 320",
    "moq": "Min 15",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-009",
    "sku": "pg-sku-009",
    "name": "Referee Whistles",
    "category": "football",
    "category_label": "Football",
    "desc": "Pealess whistles with lanyards — PE stores and athletics departments.",
    "price": "KES 180",
    "moq": "Min 10",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-010",
    "sku": "pg-sku-010",
    "name": "Portable Goal Posts",
    "category": "football",
    "category_label": "Football",
    "desc": "Aluminium folding goals for small-sided games and girls' programmes.",
    "price": "KES 18,500",
    "moq": "Pair",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/grassroots-portable-football-goals.jpg",
    "image_webp": "assets/images/products/grassroots-portable-football-goals.webp"
  },
  {
    "id": "pg-sku-011",
    "sku": "pg-sku-011",
    "name": "Team Jerseys",
    "category": "football",
    "category_label": "Football",
    "desc": "Breathable jerseys with numbering — MOQs aligned to squad sizes.",
    "price": "KES 2,800",
    "moq": "Min 15 kits",
    "badge": "School",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-012",
    "sku": "pg-sku-012",
    "name": "Football Pumps",
    "category": "football",
    "category_label": "Football",
    "desc": "Heavy-duty pumps with needle kit — equipment rooms and buses.",
    "price": "KES 650",
    "moq": "Min 5",
    "badge": "",
    "wa_preset": "",
    "stock_status": "low_stock",
    "featured": false,
    "tags": [
      "football",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-013",
    "sku": "pg-sku-013",
    "name": "Track Spikes",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Sprint and middle-distance spikes for tartan tracks and regional meets.",
    "price": "KES 3,800",
    "moq": "Min 1",
    "badge": "Track",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/athletics-track-running-spikes.jpg",
    "image_webp": "assets/images/products/athletics-track-running-spikes.webp"
  },
  {
    "id": "pg-sku-014",
    "sku": "pg-sku-014",
    "name": "Relay Batons",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Aluminium batons for 4×100 m and 4×400 m school championships.",
    "price": "KES 1,200",
    "moq": "Set of 8",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/athletics-track-running-spikes.jpg",
    "image_webp": "assets/images/products/athletics-track-running-spikes.webp"
  },
  {
    "id": "pg-sku-015",
    "sku": "pg-sku-015",
    "name": "Stopwatches",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Water-resistant stopwatches for time trials, PE testing and field events.",
    "price": "KES 2,100",
    "moq": "Min 3",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-016",
    "sku": "pg-sku-016",
    "name": "Starting Blocks",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Adjustable blocks for county and national school athletics trials.",
    "price": "KES 6,200",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/athletics-track-running-spikes.jpg",
    "image_webp": "assets/images/products/athletics-track-running-spikes.webp"
  },
  {
    "id": "pg-sku-017",
    "sku": "pg-sku-017",
    "name": "Hurdles",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Height-adjustable training hurdles for high school athletics programmes.",
    "price": "KES 5,400",
    "moq": "Set of 5",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-018",
    "sku": "pg-sku-018",
    "name": "Shot Put",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Competition steel shot for boys' and girls' field event training.",
    "price": "KES 3,200",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-019",
    "sku": "pg-sku-019",
    "name": "Discus",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "1 kg training discus for technical coaching and inter-house meets.",
    "price": "KES 2,800",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-020",
    "sku": "pg-sku-020",
    "name": "Javelin",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Nordic-sport javelins supplied with safety guidance for schools.",
    "price": "KES 4,100",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/athletics-track-running-spikes.jpg",
    "image_webp": "assets/images/products/athletics-track-running-spikes.webp"
  },
  {
    "id": "pg-sku-021",
    "sku": "pg-sku-021",
    "name": "Measuring Tape",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "30 m fibreglass tape for long jump, javelin and field verification.",
    "price": "KES 1,100",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-022",
    "sku": "pg-sku-022",
    "name": "High Jump Equipment",
    "category": "athletics",
    "category_label": "Athletics",
    "desc": "Landing mats, crossbar and standards — quote for full high-jump bed.",
    "price": "Quote",
    "moq": "Project",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "athletics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/track-sprint-training-institutional.jpg",
    "image_webp": "assets/images/products/track-sprint-training-institutional.webp"
  },
  {
    "id": "pg-sku-023",
    "sku": "pg-sku-023",
    "name": "Volleyballs",
    "category": "volleyball",
    "category_label": "Volleyball",
    "desc": "Indoor/outdoor volleyballs approved for school leagues.",
    "price": "KES 2,400",
    "moq": "Min 6",
    "badge": "",
    "wa_preset": "",
    "stock_status": "low_stock",
    "featured": false,
    "tags": [
      "volleyball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/badminton-racket-sports-hall.jpg",
    "image_webp": "assets/images/products/badminton-racket-sports-hall.webp"
  },
  {
    "id": "pg-sku-024",
    "sku": "pg-sku-024",
    "name": "Volleyball Nets",
    "category": "volleyball",
    "category_label": "Volleyball",
    "desc": "Regulation nets with steel cable for halls and outdoor courts.",
    "price": "KES 5,900",
    "moq": "Min 1",
    "badge": "",
    "wa_preset": "",
    "stock_status": "out_of_stock",
    "featured": false,
    "tags": [
      "volleyball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-025",
    "sku": "pg-sku-025",
    "name": "Knee Pads",
    "category": "volleyball",
    "category_label": "Volleyball",
    "desc": "Low-profile pads for liberos and school clinics.",
    "price": "KES 850",
    "moq": "Min 10 pairs",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "volleyball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/pe-conditioning-exercise-mat.jpg",
    "image_webp": "assets/images/products/pe-conditioning-exercise-mat.webp"
  },
  {
    "id": "pg-sku-026",
    "sku": "pg-sku-026",
    "name": "Team Kits",
    "category": "volleyball",
    "category_label": "Volleyball",
    "desc": "Custom jerseys for county volleyball championships.",
    "price": "KES 2,600",
    "moq": "Min 12",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "volleyball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-027",
    "sku": "pg-sku-027",
    "name": "Net Poles",
    "category": "volleyball",
    "category_label": "Volleyball",
    "desc": "Portable telescopic poles — indoor volleyball halls.",
    "price": "KES 14,200",
    "moq": "Pair",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "volleyball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-028",
    "sku": "pg-sku-028",
    "name": "Basketballs",
    "category": "basketball",
    "category_label": "Basketball",
    "desc": "Composite leather balls — Size 7 (boys) and Size 6 (girls) on request.",
    "price": "KES 3,100",
    "moq": "Min 6",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "basketball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-029",
    "sku": "pg-sku-029",
    "name": "Basketball Hoops",
    "category": "basketball",
    "category_label": "Basketball",
    "desc": "Wall-mount and portable systems — quote after site survey.",
    "price": "Quote",
    "moq": "Site survey",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "basketball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/grassroots-portable-football-goals.jpg",
    "image_webp": "assets/images/products/grassroots-portable-football-goals.webp"
  },
  {
    "id": "pg-sku-030",
    "sku": "pg-sku-030",
    "name": "Basketball Nets",
    "category": "basketball",
    "category_label": "Basketball",
    "desc": "Heavy-duty chain or nylon nets for outdoor boards.",
    "price": "KES 1,400",
    "moq": "Min 4",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "basketball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-031",
    "sku": "pg-sku-031",
    "name": "Team Jerseys",
    "category": "basketball",
    "category_label": "Basketball",
    "desc": "Reversible singlets for academy and secondary leagues.",
    "price": "KES 2,400",
    "moq": "Min 15",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "basketball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-032",
    "sku": "pg-sku-032",
    "name": "Training Cones",
    "category": "basketball",
    "category_label": "Basketball",
    "desc": "Flat cones for agility ladders on asphalt courts.",
    "price": "KES 90",
    "moq": "Min 24",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "basketball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-033",
    "sku": "pg-sku-033",
    "name": "Rugby Balls",
    "category": "rugby",
    "category_label": "Rugby",
    "desc": "Size 5 match and training balls for schools rugby 15s and 7s.",
    "price": "KES 2,900",
    "moq": "Min 8",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "rugby",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-034",
    "sku": "pg-sku-034",
    "name": "Tackle Bags",
    "category": "rugby",
    "category_label": "Rugby",
    "desc": "Shield bags for contact technique sessions.",
    "price": "KES 8,900",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "low_stock",
    "featured": false,
    "tags": [
      "rugby",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/gym-olympic-barbell-training.jpg",
    "image_webp": "assets/images/products/gym-olympic-barbell-training.webp"
  },
  {
    "id": "pg-sku-035",
    "sku": "pg-sku-035",
    "name": "Scrum Shields",
    "category": "rugby",
    "category_label": "Rugby",
    "desc": "Hit shields for forward packs and rugby academies.",
    "price": "KES 6,500",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "rugby",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-036",
    "sku": "pg-sku-036",
    "name": "Mouth Guards",
    "category": "rugby",
    "category_label": "Rugby",
    "desc": "Boil-and-bite guards — bulk packs for squads.",
    "price": "KES 350",
    "moq": "Min 20",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "rugby",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-037",
    "sku": "pg-sku-037",
    "name": "Rugby Jerseys",
    "category": "rugby",
    "category_label": "Rugby",
    "desc": "Durable cotton/poly jerseys with reinforced seams.",
    "price": "KES 2,900",
    "moq": "Min 15",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "rugby",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-038",
    "sku": "pg-sku-038",
    "name": "Handballs",
    "category": "handball",
    "category_label": "Handball",
    "desc": "IHF-style resin balls — Sizes 2 and 3 for youth programmes.",
    "price": "KES 2,200",
    "moq": "Min 10",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "handball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-039",
    "sku": "pg-sku-039",
    "name": "Goal Nets",
    "category": "handball",
    "category_label": "Handball",
    "desc": "Handball-specific nets for indoor goals.",
    "price": "KES 3,800",
    "moq": "Pair",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "handball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/grassroots-portable-football-goals.jpg",
    "image_webp": "assets/images/products/grassroots-portable-football-goals.webp"
  },
  {
    "id": "pg-sku-040",
    "sku": "pg-sku-040",
    "name": "Handball Uniforms",
    "category": "handball",
    "category_label": "Handball",
    "desc": "Lightweight kits for mixed indoor leagues.",
    "price": "KES 2,500",
    "moq": "Min 14",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "handball",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-041",
    "sku": "pg-sku-041",
    "name": "Hockey Sticks",
    "category": "hockey",
    "category_label": "Field hockey",
    "desc": "Composite sticks — lengths for high school squads.",
    "price": "KES 4,200",
    "moq": "Min 12",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "hockey",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/badminton-racket-sports-hall.jpg",
    "image_webp": "assets/images/products/badminton-racket-sports-hall.webp"
  },
  {
    "id": "pg-sku-042",
    "sku": "pg-sku-042",
    "name": "Hockey Balls",
    "category": "hockey",
    "category_label": "Field hockey",
    "desc": "Dimple training balls for turf and gravel pitches.",
    "price": "KES 450",
    "moq": "Min 24",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "hockey",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-043",
    "sku": "pg-sku-043",
    "name": "Shin Guards",
    "category": "hockey",
    "category_label": "Field hockey",
    "desc": "Ankle-cover guards matching school hockey programmes.",
    "price": "KES 520",
    "moq": "Min 12 pairs",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "hockey",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-044",
    "sku": "pg-sku-044",
    "name": "Goalkeeper Gear",
    "category": "hockey",
    "category_label": "Field hockey",
    "desc": "Kick pads and glove sets — quote sizes.",
    "price": "Quote",
    "moq": "Min set",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "hockey",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-045",
    "sku": "pg-sku-045",
    "name": "Badminton Rackets",
    "category": "badminton",
    "category_label": "Badminton",
    "desc": "Graphite-aluminium rackets for halls and co-curricular clubs.",
    "price": "KES 1,400",
    "moq": "Min 12",
    "badge": "",
    "wa_preset": "",
    "stock_status": "low_stock",
    "featured": false,
    "tags": [
      "badminton",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/badminton-racket-sports-hall.jpg",
    "image_webp": "assets/images/products/badminton-racket-sports-hall.webp"
  },
  {
    "id": "pg-sku-046",
    "sku": "pg-sku-046",
    "name": "Shuttlecocks",
    "category": "badminton",
    "category_label": "Badminton",
    "desc": "Feather and nylon tubes — tournament packs.",
    "price": "KES 650",
    "moq": "Tube of 12",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "badminton",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/badminton-racket-sports-hall.jpg",
    "image_webp": "assets/images/products/badminton-racket-sports-hall.webp"
  },
  {
    "id": "pg-sku-047",
    "sku": "pg-sku-047",
    "name": "Badminton Nets",
    "category": "badminton",
    "category_label": "Badminton",
    "desc": "Portable nets for multipurpose halls.",
    "price": "KES 3,400",
    "moq": "Min 2",
    "badge": "",
    "wa_preset": "",
    "stock_status": "out_of_stock",
    "featured": false,
    "tags": [
      "badminton",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-048",
    "sku": "pg-sku-048",
    "name": "Table Tennis Tables",
    "category": "table-tennis",
    "category_label": "Table tennis",
    "desc": "ITTF-spec indoor tables — assembly and delivery quoted.",
    "price": "Quote",
    "moq": "Project",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "table-tennis",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-049",
    "sku": "pg-sku-049",
    "name": "Table Tennis Bats",
    "category": "table-tennis",
    "category_label": "Table tennis",
    "desc": "Flared-handle bats with reversed rubber.",
    "price": "KES 850",
    "moq": "Min 16",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "table-tennis",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/badminton-racket-sports-hall.jpg",
    "image_webp": "assets/images/products/badminton-racket-sports-hall.webp"
  },
  {
    "id": "pg-sku-050",
    "sku": "pg-sku-050",
    "name": "Table Tennis Balls",
    "category": "table-tennis",
    "category_label": "Table tennis",
    "desc": "40+ mm celluloid-free balls — bulk buckets.",
    "price": "KES 320",
    "moq": "Bucket of 72",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "table-tennis",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/kenya-grassroots-football-match.jpg",
    "image_webp": "assets/images/products/kenya-grassroots-football-match.webp"
  },
  {
    "id": "pg-sku-051",
    "sku": "pg-sku-051",
    "name": "Nets",
    "category": "table-tennis",
    "category_label": "Table tennis",
    "desc": "Clip-on nets and posts for student halls.",
    "price": "KES 1,100",
    "moq": "Min 6",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "table-tennis",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-052",
    "sku": "pg-sku-052",
    "name": "Swim Caps",
    "category": "aquatics",
    "category_label": "Swimming",
    "desc": "Silicone caps — school colours on bulk orders.",
    "price": "KES 280",
    "moq": "Min 25",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "aquatics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/aquatics-swim-training-pool.jpg",
    "image_webp": "assets/images/products/aquatics-swim-training-pool.webp"
  },
  {
    "id": "pg-sku-053",
    "sku": "pg-sku-053",
    "name": "Goggles",
    "category": "aquatics",
    "category_label": "Swimming",
    "desc": "Anti-fog goggles sized for secondary swimmers.",
    "price": "KES 750",
    "moq": "Min 15",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "aquatics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/aquatics-swim-training-pool.jpg",
    "image_webp": "assets/images/products/aquatics-swim-training-pool.webp"
  },
  {
    "id": "pg-sku-054",
    "sku": "pg-sku-054",
    "name": "Kickboards",
    "category": "aquatics",
    "category_label": "Swimming",
    "desc": "EVA boards for stroke technique modules.",
    "price": "KES 680",
    "moq": "Min 12",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "aquatics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/pe-conditioning-exercise-mat.jpg",
    "image_webp": "assets/images/products/pe-conditioning-exercise-mat.webp"
  },
  {
    "id": "pg-sku-055",
    "sku": "pg-sku-055",
    "name": "Swimming Floats",
    "category": "aquatics",
    "category_label": "Swimming",
    "desc": "Training floats and pull buoys for PE aquatics.",
    "price": "KES 520",
    "moq": "Min 15",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "aquatics",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/aquatics-swim-training-pool.jpg",
    "image_webp": "assets/images/products/aquatics-swim-training-pool.webp"
  },
  {
    "id": "pg-sku-056",
    "sku": "pg-sku-056",
    "name": "Dumbbells",
    "category": "fitness",
    "category_label": "Fitness & PE",
    "desc": "Rubber hex dumbbells — pairs from 2 kg–20 kg.",
    "price": "KES 1,800",
    "moq": "Min 1 pair",
    "badge": "",
    "wa_preset": "",
    "stock_status": "low_stock",
    "featured": false,
    "tags": [
      "fitness",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/gym-hex-dumbbells-pe-conditioning.jpg",
    "image_webp": "assets/images/products/gym-hex-dumbbells-pe-conditioning.webp"
  },
  {
    "id": "pg-sku-057",
    "sku": "pg-sku-057",
    "name": "Resistance Bands",
    "category": "fitness",
    "category_label": "Fitness & PE",
    "desc": "Latex loop bands for conditioning circuits.",
    "price": "KES 420",
    "moq": "Set of 5",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "fitness",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/pe-conditioning-exercise-mat.jpg",
    "image_webp": "assets/images/products/pe-conditioning-exercise-mat.webp"
  },
  {
    "id": "pg-sku-058",
    "sku": "pg-sku-058",
    "name": "Agility Ladders",
    "category": "fitness",
    "category_label": "Fitness & PE",
    "desc": "Flat ladders for speed and football conditioning.",
    "price": "KES 1,900",
    "moq": "Min 4",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "fitness",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-059",
    "sku": "pg-sku-059",
    "name": "Exercise Mats",
    "category": "fitness",
    "category_label": "Fitness & PE",
    "desc": "10 mm PVC mats for studios and multipurpose halls.",
    "price": "KES 950",
    "moq": "Min 10",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "fitness",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/pe-conditioning-exercise-mat.jpg",
    "image_webp": "assets/images/products/pe-conditioning-exercise-mat.webp"
  },
  {
    "id": "pg-sku-060",
    "sku": "pg-sku-060",
    "name": "Skipping Ropes",
    "category": "fitness",
    "category_label": "Fitness & PE",
    "desc": "Speed ropes and beaded ropes for PE assessments.",
    "price": "KES 220",
    "moq": "Min 24",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "fitness",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-061",
    "sku": "pg-sku-061",
    "name": "Speed Cones",
    "category": "fitness",
    "category_label": "Fitness & PE",
    "desc": "Low-profile cones for agility grids.",
    "price": "KES 95",
    "moq": "Min 40",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "fitness",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  },
  {
    "id": "pg-sku-062",
    "sku": "pg-sku-062",
    "name": "PE Uniforms",
    "category": "uniforms",
    "category_label": "School uniforms",
    "desc": "Moisture-wicking PE sets with house colours.",
    "price": "KES 1,800",
    "moq": "Min 40",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "uniforms",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/school-pe-uniforms-students.jpg",
    "image_webp": "assets/images/products/school-pe-uniforms-students.webp"
  },
  {
    "id": "pg-sku-063",
    "sku": "pg-sku-063",
    "name": "Tracksuits",
    "category": "uniforms",
    "category_label": "School uniforms",
    "desc": "Poly tracksuits for travel squads and county trips.",
    "price": "KES 2,500",
    "moq": "Min 20",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "uniforms",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/track-sprint-training-institutional.jpg",
    "image_webp": "assets/images/products/track-sprint-training-institutional.webp"
  },
  {
    "id": "pg-sku-064",
    "sku": "pg-sku-064",
    "name": "House T-Shirts",
    "category": "uniforms",
    "category_label": "School uniforms",
    "desc": "Screen-printed house shirts for sports days.",
    "price": "KES 680",
    "moq": "Min 50",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "uniforms",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/school-pe-uniforms-students.jpg",
    "image_webp": "assets/images/products/school-pe-uniforms-students.webp"
  },
  {
    "id": "pg-sku-065",
    "sku": "pg-sku-065",
    "name": "Custom Team Jerseys",
    "category": "uniforms",
    "category_label": "School uniforms",
    "desc": "Full-dye sublimation kits — design support included.",
    "price": "KES 2,800",
    "moq": "Min 15",
    "badge": "Custom",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "uniforms",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/east-africa-academy-football-team-kits.jpg",
    "image_webp": "assets/images/products/east-africa-academy-football-team-kits.webp"
  },
  {
    "id": "pg-sku-066",
    "sku": "pg-sku-066",
    "name": "Sports Shorts",
    "category": "uniforms",
    "category_label": "School uniforms",
    "desc": "Mesh shorts for boys' and girls' PE programmes.",
    "price": "KES 520",
    "moq": "Min 40",
    "badge": "",
    "wa_preset": "",
    "stock_status": "in_stock",
    "featured": false,
    "tags": [
      "uniforms",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/school-pe-uniforms-students.jpg",
    "image_webp": "assets/images/products/school-pe-uniforms-students.webp"
  },
  {
    "id": "pg-sku-067",
    "sku": "pg-sku-067",
    "name": "School Sports Department Bundle",
    "category": "wholesale",
    "category_label": "Bundles",
    "desc": "Mixed equipment crate — balls, cones, whistles and storage — tailored to enrollment.",
    "price": "Quote",
    "moq": "Institution",
    "badge": "Institutional",
    "wa_preset": "",
    "stock_status": "low_stock",
    "featured": false,
    "tags": [
      "wholesale",
      "school",
      "kenya"
    ],
    "image_url": "assets/images/products/institutional-sports-equipment-bundle.jpg",
    "image_webp": "assets/images/products/institutional-sports-equipment-bundle.webp"
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
