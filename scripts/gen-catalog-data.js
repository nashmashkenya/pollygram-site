/**
 * Generates assets/js/catalog-data.js — run: node scripts/gen-catalog-data.js
 */
const fs = require('fs');
const path = require('path');

const bases = {
  fbBall: 'kenya-grassroots-football-match',
  fbKit: 'east-africa-academy-football-team-kits',
  fbGoal: 'grassroots-portable-football-goals',
  athTrack: 'athletics-track-running-spikes',
  athSuit: 'track-sprint-training-institutional',
  gymHex: 'gym-hex-dumbbells-pe-conditioning',
  gymBar: 'gym-olympic-barbell-training',
  racket: 'badminton-racket-sports-hall',
  swim: 'aquatics-swim-training-pool',
  peUni: 'school-pe-uniforms-students',
  bundle: 'institutional-sports-equipment-bundle',
  mat: 'pe-conditioning-exercise-mat'
};

function img(base) {
  return {
    image_url: `assets/images/products/${base}.jpg`,
    image_webp: `assets/images/products/${base}.webp`
  };
}

let id = 0;
function pid() {
  id += 1;
  return `pg-sku-${String(id).padStart(3, '0')}`;
}

/* Order = priority in horizontal category menu (high schools / institutional UX) */
const cats = [
  { slug: 'football', label: 'Football', order: 0 },
  { slug: 'athletics', label: 'Athletics', order: 1 },
  { slug: 'basketball', label: 'Basketball', order: 2 },
  { slug: 'volleyball', label: 'Volleyball', order: 3 },
  { slug: 'rugby', label: 'Rugby', order: 4 },
  { slug: 'hockey', label: 'Hockey', order: 5 },
  { slug: 'fitness', label: 'Fitness & PE', order: 6 },
  { slug: 'uniforms', label: 'School uniforms', order: 7 },
  { slug: 'aquatics', label: 'Aquatics', order: 8 },
  { slug: 'wholesale', label: 'Institutional Packages', order: 9 },
  { slug: 'handball', label: 'Handball', order: 10 },
  { slug: 'badminton', label: 'Badminton', order: 11 },
  { slug: 'table-tennis', label: 'Table tennis', order: 12 }
];

const rows = [];

function add(slug, label, name, desc, price, moq, base, badge, extra) {
  extra = extra || {};
  const id = pid();
  const tagDefault = [slug, 'school', 'kenya'].filter(Boolean);
  let stock = extra.stock_status || 'in_stock';
  if (rows.length > 4 && rows.length % 11 === 0) stock = 'low_stock';
  if (rows.length > 12 && rows.length % 23 === 0) stock = 'out_of_stock';
  rows.push(
    Object.assign(
      {
        id,
        sku: id,
        name,
        category: slug,
        category_label: label,
        desc,
        price,
        moq,
        badge: badge || '',
        wa_preset: '',
        stock_status: stock,
        featured: !!extra.featured,
        tags: Array.isArray(extra.tags) ? extra.tags : tagDefault
      },
      img(base)
    )
  );
}

const fb = 'football';
const FL = 'Football';
add(fb, FL, 'Match Football Size 5', 'Match-grade Size 5 balls for secondary leagues, provincial finals and academy fixtures.', 'KES 1,200', 'Min 6', bases.fbBall, 'Popular', { featured: true, tags: ['football', 'school', 'match', 'training'] });
add(fb, FL, 'Training Football', 'Hard-wearing training balls for daily PE lessons and after-school programmes.', 'KES 950', 'Min 12', bases.fbBall, '', { featured: true, tags: ['football', 'school', 'training'] });
add(fb, FL, 'Goal Nets', 'Full-size replacement nets for standard school pitches — UV-treated twine.', 'KES 4,500', 'Per set', bases.fbGoal, '', { featured: true, tags: ['football', 'school', 'goals'] });
add(fb, FL, 'Corner Flags', 'Flexible corner poles with flags for competition marking and sports days.', 'KES 3,200', 'Set of 4', bases.fbGoal, '');
add(fb, FL, 'Training Cones', 'Bright agility cones for drills, warm-ups and primary PE circuits.', 'KES 80', 'Min 20', bases.bundle, '');
add(fb, FL, 'Goalkeeper Gloves', 'Finger-save GK gloves for school leagues and county youth tournaments.', 'KES 1,650', 'Min 2 pairs', bases.fbKit, '');
add(fb, FL, 'Shin Guards', 'Lightweight slip-in guards sized for youth and senior high squads.', 'KES 450', 'Min 10 pairs', bases.bundle, '');
add(fb, FL, 'Football Bibs', 'Reversible mesh bibs for trials and intra-school matches.', 'KES 320', 'Min 15', bases.fbKit, '');
add(fb, FL, 'Referee Whistles', 'Pealess whistles with lanyards — PE stores and athletics departments.', 'KES 180', 'Min 10', bases.bundle, '');
add(fb, FL, 'Portable Goal Posts', "Aluminium folding goals for small-sided games and girls' programmes.", 'KES 18,500', 'Pair', bases.fbGoal, '');
add(fb, FL, 'Team Jerseys', 'Breathable jerseys with numbering — MOQs aligned to squad sizes.', 'KES 2,800', 'Min 15 kits', bases.fbKit, 'School');
add(fb, FL, 'Football Pumps', 'Heavy-duty pumps with needle kit — equipment rooms and buses.', 'KES 650', 'Min 5', bases.bundle, '');

const at = 'athletics';
const AT = 'Athletics';
add(at, AT, 'Track Spikes', 'Sprint and middle-distance spikes for tartan tracks and regional meets.', 'KES 3,800', 'Min 1', bases.athTrack, 'Track');
add(at, AT, 'Relay Batons', 'Aluminium batons for 4×100 m and 4×400 m school championships.', 'KES 1,200', 'Set of 8', bases.athTrack, '');
add(at, AT, 'Stopwatches', 'Water-resistant stopwatches for time trials, PE testing and field events.', 'KES 2,100', 'Min 3', bases.bundle, '');
add(at, AT, 'Starting Blocks', 'Adjustable blocks for county and national school athletics trials.', 'KES 6,200', 'Min 2', bases.athTrack, '');
add(at, AT, 'Hurdles', 'Height-adjustable training hurdles for high school athletics programmes.', 'KES 5,400', 'Set of 5', bases.bundle, '');
add(at, AT, 'Shot Put', "Competition steel shot for boys' and girls' field event training.", 'KES 3,200', 'Min 2', bases.bundle, '');
add(at, AT, 'Discus', '1 kg training discus for technical coaching and inter-house meets.', 'KES 2,800', 'Min 2', bases.bundle, '');
add(at, AT, 'Javelin', 'Nordic-sport javelins supplied with safety guidance for schools.', 'KES 4,100', 'Min 2', bases.athTrack, '');
add(at, AT, 'Measuring Tape', '30 m fibreglass tape for long jump, javelin and field verification.', 'KES 1,100', 'Min 2', bases.bundle, '');
add(at, AT, 'High Jump Equipment', 'Landing mats, crossbar and standards — quote for full high-jump bed.', 'Quote', 'Project', bases.athSuit, '');

const vb = 'volleyball';
const VB = 'Volleyball';
add(vb, VB, 'Volleyballs', 'Indoor/outdoor volleyballs approved for school leagues.', 'KES 2,400', 'Min 6', bases.racket, '');
add(vb, VB, 'Volleyball Nets', 'Regulation nets with steel cable for halls and outdoor courts.', 'KES 5,900', 'Min 1', bases.bundle, '');
add(vb, VB, 'Knee Pads', 'Low-profile pads for liberos and school clinics.', 'KES 850', 'Min 10 pairs', bases.mat, '');
add(vb, VB, 'Team Kits', 'Custom jerseys for county volleyball championships.', 'KES 2,600', 'Min 12', bases.fbKit, '');
add(vb, VB, 'Net Poles', 'Portable telescopic poles — indoor volleyball halls.', 'KES 14,200', 'Pair', bases.bundle, '');

const bk = 'basketball';
const BK = 'Basketball';
add(bk, BK, 'Basketballs', 'Composite leather balls — Size 7 (boys) and Size 6 (girls) on request.', 'KES 3,100', 'Min 6', bases.fbBall, '');
add(bk, BK, 'Basketball Hoops', 'Wall-mount and portable systems — quote after site survey.', 'Quote', 'Site survey', bases.fbGoal, '');
add(bk, BK, 'Basketball Nets', 'Heavy-duty chain or nylon nets for outdoor boards.', 'KES 1,400', 'Min 4', bases.bundle, '');
add(bk, BK, 'Team Jerseys', 'Reversible singlets for academy and secondary leagues.', 'KES 2,400', 'Min 15', bases.fbKit, '');
add(bk, BK, 'Training Cones', 'Flat cones for agility ladders on asphalt courts.', 'KES 90', 'Min 24', bases.bundle, '');

const rg = 'rugby';
const RG = 'Rugby';
add(rg, RG, 'Rugby Balls', 'Size 5 match and training balls for schools rugby 15s and 7s.', 'KES 2,900', 'Min 8', bases.fbBall, '');
add(rg, RG, 'Tackle Bags', 'Shield bags for contact technique sessions.', 'KES 8,900', 'Min 2', bases.gymBar, '');
add(rg, RG, 'Scrum Shields', 'Hit shields for forward packs and rugby academies.', 'KES 6,500', 'Min 2', bases.bundle, '');
add(rg, RG, 'Mouth Guards', 'Boil-and-bite guards — bulk packs for squads.', 'KES 350', 'Min 20', bases.bundle, '');
add(rg, RG, 'Rugby Jerseys', 'Durable cotton/poly jerseys with reinforced seams.', 'KES 2,900', 'Min 15', bases.fbKit, '');

const hb = 'handball';
const HB = 'Handball';
add(hb, HB, 'Handballs', 'IHF-style resin balls — Sizes 2 and 3 for youth programmes.', 'KES 2,200', 'Min 10', bases.fbBall, '');
add(hb, HB, 'Goal Nets', 'Handball-specific nets for indoor goals.', 'KES 3,800', 'Pair', bases.fbGoal, '');
add(hb, HB, 'Handball Uniforms', 'Lightweight kits for mixed indoor leagues.', 'KES 2,500', 'Min 14', bases.fbKit, '');

const hk = 'hockey';
const HK = 'Field hockey';
add(hk, HK, 'Hockey Sticks', 'Composite sticks — lengths for high school squads.', 'KES 4,200', 'Min 12', bases.racket, '');
add(hk, HK, 'Hockey Balls', 'Dimple training balls for turf and gravel pitches.', 'KES 450', 'Min 24', bases.fbBall, '');
add(hk, HK, 'Shin Guards', 'Ankle-cover guards matching school hockey programmes.', 'KES 520', 'Min 12 pairs', bases.bundle, '');
add(hk, HK, 'Goalkeeper Gear', 'Kick pads and glove sets — quote sizes.', 'Quote', 'Min set', bases.fbKit, '');

const bd = 'badminton';
const BD = 'Badminton';
add(bd, BD, 'Badminton Rackets', 'Graphite-aluminium rackets for halls and co-curricular clubs.', 'KES 1,400', 'Min 12', bases.racket, '');
add(bd, BD, 'Shuttlecocks', 'Feather and nylon tubes — tournament packs.', 'KES 650', 'Tube of 12', bases.racket, '');
add(bd, BD, 'Badminton Nets', 'Portable nets for multipurpose halls.', 'KES 3,400', 'Min 2', bases.bundle, '');

const tt = 'table-tennis';
const TT = 'Table tennis';
add(tt, TT, 'Table Tennis Tables', 'ITTF-spec indoor tables — assembly and delivery quoted.', 'Quote', 'Project', bases.bundle, '');
add(tt, TT, 'Table Tennis Bats', 'Flared-handle bats with reversed rubber.', 'KES 850', 'Min 16', bases.racket, '');
add(tt, TT, 'Table Tennis Balls', '40+ mm celluloid-free balls — bulk buckets.', 'KES 320', 'Bucket of 72', bases.fbBall, '');
add(tt, TT, 'Nets', 'Clip-on nets and posts for student halls.', 'KES 1,100', 'Min 6', bases.bundle, '');

const aq = 'aquatics';
const AQ = 'Swimming';
add(aq, AQ, 'Swim Caps', 'Silicone caps — school colours on bulk orders.', 'KES 280', 'Min 25', bases.swim, '');
add(aq, AQ, 'Goggles', 'Anti-fog goggles sized for secondary swimmers.', 'KES 750', 'Min 15', bases.swim, '');
add(aq, AQ, 'Kickboards', 'EVA boards for stroke technique modules.', 'KES 680', 'Min 12', bases.mat, '');
add(aq, AQ, 'Swimming Floats', 'Training floats and pull buoys for PE aquatics.', 'KES 520', 'Min 15', bases.swim, '');

const fn = 'fitness';
const FN = 'Fitness & PE';
add(fn, FN, 'Dumbbells', 'Rubber hex dumbbells — pairs from 2 kg–20 kg.', 'KES 1,800', 'Min 1 pair', bases.gymHex, '');
add(fn, FN, 'Resistance Bands', 'Latex loop bands for conditioning circuits.', 'KES 420', 'Set of 5', bases.mat, '');
add(fn, FN, 'Agility Ladders', 'Flat ladders for speed and football conditioning.', 'KES 1,900', 'Min 4', bases.bundle, '');
add(fn, FN, 'Exercise Mats', '10 mm PVC mats for studios and multipurpose halls.', 'KES 950', 'Min 10', bases.mat, '');
add(fn, FN, 'Skipping Ropes', 'Speed ropes and beaded ropes for PE assessments.', 'KES 220', 'Min 24', bases.bundle, '');
add(fn, FN, 'Speed Cones', 'Low-profile cones for agility grids.', 'KES 95', 'Min 40', bases.bundle, '');

const un = 'uniforms';
const UN = 'School uniforms';
add(un, UN, 'PE Uniforms', 'Moisture-wicking PE sets with house colours.', 'KES 1,800', 'Min 40', bases.peUni, '');
add(un, UN, 'Tracksuits', 'Poly tracksuits for travel squads and county trips.', 'KES 2,500', 'Min 20', bases.athSuit, '');
add(un, UN, 'House T-Shirts', 'Screen-printed house shirts for sports days.', 'KES 680', 'Min 50', bases.peUni, '');
add(un, UN, 'Custom Team Jerseys', 'Full-dye sublimation kits — design support included.', 'KES 2,800', 'Min 15', bases.fbKit, 'Custom');
add(un, UN, 'Sports Shorts', "Mesh shorts for boys' and girls' PE programmes.", 'KES 520', 'Min 40', bases.peUni, '');

const wh = 'wholesale';
const WH = 'Bundles';
add(
  wh,
  WH,
  'School Sports Department Bundle',
  'Mixed equipment crate — balls, cones, whistles and storage — tailored to enrollment.',
  'Quote',
  'Institution',
  bases.bundle,
  'Institutional'
);

const header = `/** Pollygram — default institutional catalogue (Kenyan schools). Regenerate: node scripts/gen-catalog-data.js */
`;

const body = `(function (g) {
  'use strict';
  g.POLLYGRAM_CATEGORIES = ${JSON.stringify(cats, null, 2)};
  g.POLLYGRAM_CATALOG = ${JSON.stringify(rows, null, 2)};
})(typeof window !== 'undefined' ? window : globalThis);
`;

const outPath = path.join(__dirname, '..', 'assets', 'js', 'catalog-data.js');
fs.writeFileSync(outPath, header + body, 'utf8');
console.log('Wrote', rows.length, 'products to', outPath);
