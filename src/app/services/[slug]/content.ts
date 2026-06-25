export type ServicePageData = {
  slug: string
  serviceKey: 'lift-kits' | 'engine-trans' | 'wheels'
  serviceName: string
  serviceShort: string
  city: string
  parish: string
  cityIntro: string
  localContext: string
  faqs: { q: string; a: string }[]
  metaTitle: string
  metaDescription: string
}

export const serviceMeta: Record<ServicePageData['serviceKey'], {
  shortName: string
  fullName: string
  heroImage: string
  whyChoose: { title: string; body: string }[]
  whatsIncluded: string[]
  relatedServices: { label: string; href: string }[]
}> = {
  'lift-kits': {
    shortName: 'Lift Kits & Suspension',
    fullName: 'Custom Lift Kit & Suspension Installation',
    heroImage: '/images/service-lift-kits.jpg',
    whyChoose: [
      {
        title: 'Certified BDS, Cognito & Superlift Installer',
        body: 'We install the lift kits truck owners actually want — BDS, Cognito, Superlift and other top-tier suspension brands. Manufacturer-spec torque, proper alignment, and zero shortcuts on every install.',
      },
      {
        title: 'Built for South Louisiana Roads',
        body: 'Lifted trucks down here see everything from interstate to gravel to the occasional pasture. We dial in your suspension geometry, shocks, and tire fitment so your truck rides right whether you\'re hauling, towing, or just cruising.',
      },
      {
        title: 'Full Drivetrain Re-Geared the Right Way',
        body: 'Bigger tires and lift heights change driveline angles and gear ratios. We handle the carrier bearings, U-joints, regearing, and pinion angle correction that cheaper shops skip — protecting your investment long-term.',
      },
      {
        title: 'Honest Quotes, No Surprises',
        body: 'Every lift quote includes the kit, install labor, alignment, and any supporting parts your build actually needs. No upsells, no surprise add-ons at pickup.',
      },
    ],
    whatsIncluded: [
      '2" leveling kits to 8"+ big lifts',
      'BDS, Cognito, Superlift, ReadyLift, Rough Country installs',
      'Shock and strut upgrades (Fox, King, Bilstein)',
      'Carrier bearing drops and driveshaft modifications',
      'Driveline re-gearing and differential work',
      'Full post-install alignment',
      'Wheel + tire fitment guidance',
      'Track bar and steering corrections',
    ],
    relatedServices: [
      { label: 'Custom Wheels & Tires', href: '/services/custom-wheels-tires-lockport-la' },
      { label: 'Engine & Transmission Work', href: '/services/engine-rebuild-transmission-service-lockport-la' },
    ],
  },
  'engine-trans': {
    shortName: 'Engine Rebuilds & Transmission Service',
    fullName: 'Engine Rebuilds & Transmission Service',
    heroImage: '/images/service-engine.jpg',
    whyChoose: [
      {
        title: 'Complete Engine Builds & Swaps',
        body: 'From bottom-end rebuilds to LS swaps to Cummins and Power Stroke work — we tear down, machine-check, and reassemble engines properly. No reused gaskets, no shortcuts on tolerances.',
      },
      {
        title: 'Full Transmission Swaps & Fluid Service',
        body: 'We don\'t do internal transmission rebuilds — we do full transmission swaps when yours is finished, and we handle fluid changes and diagnostics to keep good transmissions healthy. Honest answer either way.',
      },
      {
        title: 'Honest Diagnostics First',
        body: 'Before any major work, we diagnose the actual problem. Sometimes it\'s a $200 fix, not a $4,000 rebuild. Customers tell us they appreciate the straight answer either way.',
      },
      {
        title: 'Performance Upgrades Available',
        body: 'Building for more power? We handle cam swaps, stroker kits, forged internals, tunes, and supporting mods. Daily-driver streetable to weekend warrior — we build it to match how you actually drive.',
      },
    ],
    whatsIncluded: [
      'Full engine teardowns and rebuilds',
      'Engine swaps (LS, Coyote, Cummins, Power Stroke, more)',
      'Full transmission swap installs',
      'Transmission fluid service and diagnostics',
      'Head gasket, timing chain, and seal repairs',
      'Diagnostic scans and compression testing',
      'Performance cam, head, and intake upgrades',
      'Cooling system upgrades and overhauls',
    ],
    relatedServices: [
      { label: 'Lift Kits & Suspension', href: '/services/lift-kits-suspension-lockport-la' },
      { label: 'Custom Wheels & Tires', href: '/services/custom-wheels-tires-lockport-la' },
    ],
  },
  wheels: {
    shortName: 'Custom Wheels & Tires',
    fullName: 'Custom Wheels & Tire Fitment',
    heroImage: '/images/service-wheels.jpg',
    whyChoose: [
      {
        title: 'Right Fitment the First Time',
        body: 'We know which wheels fit which trucks at which lift heights — and what rubs when you turn or hit a bump. We\'ll save you from buying the wrong setup and pay for it twice.',
      },
      {
        title: 'Top Brands, Real Stock',
        body: 'Forged and cast wheels from Fuel, American Force, Method, Moto Metal, KMC, and other proven brands. Mud terrains, all terrains, and street tires from Toyo, Nitto, BFG, Cooper and more.',
      },
      {
        title: 'Precision Mounting & Balancing',
        body: 'We mount on touchless machines that don\'t scratch your wheels, balance with Road Force when needed, and torque to spec. Your steering wheel won\'t shake at 70 mph.',
      },
      {
        title: 'TPMS & Lug Hardware Included',
        body: 'TPMS sensor service, new lug nuts when needed, hub-centric rings for proper centering. The little details that make a wheel package actually right.',
      },
    ],
    whatsIncluded: [
      'Forged and cast aftermarket wheels',
      'Mud-terrain, all-terrain, street and performance tires',
      'Touchless mounting and Road Force balancing',
      'Fitment consultation for your lift and truck combo',
      'TPMS sensor service and reprogramming',
      'Lug nut and spline-drive hardware',
      'Hub-centric rings and spacers',
      'Trailer and dually wheel packages',
    ],
    relatedServices: [
      { label: 'Lift Kits & Suspension', href: '/services/lift-kits-suspension-lockport-la' },
      { label: 'Engine & Transmission Work', href: '/services/engine-rebuild-transmission-service-lockport-la' },
    ],
  },
}

export const cityMeta: Record<string, {
  city: string
  parish: string
  nearbyCities: string[]
  drivingNote: string
}> = {
  Lockport: {
    city: 'Lockport',
    parish: 'Lafourche Parish',
    nearbyCities: ['Larose', 'Cut Off', 'Galliano', 'Raceland', 'Mathews', 'Bourg', 'Houma', 'Thibodaux'],
    drivingNote: 'Our shop is located right here in Lockport at 5609 LA-1 — easy drop-off for locals and a short drive from anywhere down the bayou.',
  },
  Houma: {
    city: 'Houma',
    parish: 'Terrebonne Parish',
    nearbyCities: ['Bourg', 'Schriever', 'Gray', 'Bayou Blue', 'Chauvin', 'Dulac', 'Lockport', 'Thibodaux'],
    drivingNote: 'Houma drivers make the short trip over to our Lockport shop because we do the work right and stand behind every build. Easy run up LA-24 and LA-1.',
  },
  Thibodaux: {
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    nearbyCities: ['Raceland', 'Schriever', 'Chackbay', 'Labadieville', 'Lockport', 'Houma'],
    drivingNote: 'Thibodaux is a quick run down LA-1 to our Lockport shop. Plenty of Thibodaux truck owners and daily drivers trust us with their builds and repairs.',
  },
}

export const pageContent: ServicePageData[] = [
  // ── LIFT KITS ────────────────────────────────────────────────
  {
    slug: 'lift-kits-suspension-lockport-la',
    serviceKey: 'lift-kits',
    serviceName: 'Custom Lift Kits & Suspension',
    serviceShort: 'Lift Kits & Suspension',
    city: 'Lockport',
    parish: 'Lafourche Parish',
    cityIntro:
      'Elite Custom Automotive is Lockport\'s lift kit and suspension shop, backed by owner Colin Richard\'s decade-plus of custom shop experience from sister business CTR Pro Coat. From 2-inch level kits on daily drivers to full 8-inch big-lift builds on Ford, Chevy, GMC, RAM and Jeep — we handle suspension work that holds up to South Louisiana driving and looks right doing it. Certified installers for BDS, Cognito, and Superlift right here at 5609 LA-1.',
    metaTitle: 'Lift Kits & Suspension in Lockport, LA | Elite Custom Automotive',
    metaDescription:
      'Custom lift kit installation in Lockport, LA. BDS, Cognito, Superlift certified installer. Suspension work for Ford, Chevy, GMC, RAM, Jeep. Call (985) 258-3831.',
    localContext:
      'Lockport drivers don\'t have to drive anywhere — Elite Custom Automotive\'s lift kit and suspension shop sits at 5609 LA-1, between the LA-1/LA-308 split and the Bayou Lafourche locks. We\'re the same shop the Lockport Lock and Dam crowd, the sugar mill workers, and the LA-1-to-Grand-Isle commuters bring their trucks to. If you live in town, on the LA-308 side, or down toward Larose and Cut Off, we\'re a 5–15 minute drive. The Ford F-250 Super Duty, GM 2500HD, and Ram 2500 dominate the local lifted-truck scene around here — and the local terrain (cane field gravel access roads, the LA-1 curves at Larose, the bridges crossing Bayou Lafourche) shapes how a lift kit needs to ride. We tune every install for that: enough lift to clear 35s or 37s, enough geometry correction to stay stable on the LA-1 straightaways, and enough alignment finesse to keep tires from feathering after a month of bayou-road potholes. Sugar cane harvest season puts extra weight on truck suspensions hauling field equipment — we handle the leveling kits and overload spring upgrades that keep work trucks usable through October and November. Stop by the shop or call (985) 258-3831 to talk specs before you buy parts. We\'d rather help you spec the right kit upfront than fix the wrong setup three weeks later.',
    faqs: [
      { q: 'I\'m in Lockport. How quickly can you get me on the lift?', a: 'For straightforward leveling kits and 4–6" suspension installs we usually book Lockport locals within a week. Big-lift custom builds (8"+ with re-gearing) typically need 2–3 weeks of lead time so we can pre-order the right BDS, Cognito, or Superlift kit and any axle support parts. We\'re at 5609 LA-1 — stop by or call (985) 258-3831.' },
      { q: 'Do you handle alignment after the lift, or do I need to go somewhere else?', a: 'We do full thrust-angle alignment in-shop after every lift install. That\'s not an upsell — it\'s mandatory for the suspension geometry to ride right. You drive in for the lift, you drive out aligned.' },
      { q: 'Will a lift void my factory warranty?', a: 'It can — but only on parts directly related to the suspension and drivetrain, and only if the failure is directly tied to the lift. Federal Magnuson-Moss law protects you from blanket "lift voids the whole warranty" claims. For warranty coverage on the lift kit parts themselves (BDS, Cognito, Superlift), you\'ll work directly with the brand — we\'ll give you the install paperwork and part numbers you need to file a claim.' },
      { q: 'I drive a 2024 F-250. What lift size can I actually run for daily LA-1 driving?', a: 'Anything up to a 6" kit on 37s is comfortable for daily LA-1 driving with no axle modifications. Once you push 8"+ you\'ll want re-gearing and driveshaft work to keep highway cruising smooth. We\'ll walk through what fits your specific truck during the free quote.' },
      { q: 'Do I need to bring my own parts or do you stock them?', a: 'We stock and order. We\'re certified installers for BDS, Cognito, and Superlift. You can bring your own parts, but we charge a higher labor rate for them. Parts warranties are handled directly with the manufacturer — we\'ll provide the install paperwork and part numbers you need.' },
    ],
  },
  {
    slug: 'lift-kits-suspension-houma-la',
    serviceKey: 'lift-kits',
    serviceName: 'Custom Lift Kits & Suspension',
    serviceShort: 'Lift Kits & Suspension',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    cityIntro:
      'Looking for a lift kit installer in Houma? Elite Custom Automotive is a short drive up LA-1 in Lockport, and we\'re the shop Houma truck owners trust for serious suspension work. BDS, Cognito, and Superlift certified — we build lifted Ford, Chevy, GMC, RAM and Jeep trucks the right way, with proper alignment and driveline correction included.',
    metaTitle: 'Lift Kits in Houma, LA | Elite Custom Automotive',
    metaDescription:
      'Houma\'s trusted lift kit installer. BDS, Cognito, Superlift suspension kits installed properly with full alignment. Short drive from Houma to our Lockport shop. Call (985) 258-3831.',
    localContext:
      'For Houma drivers, Elite Custom Automotive is a 19-mile, 23-minute run up LA-24 and LA-1 — closer than driving across town to a Houma chain shop, and miles ahead of the dealership. We see customers from Bayou Cane, Houma East, Broadmoor, Ellendale, and Schriever; the LA-24 corridor makes the trip painless. Houma\'s lifted-truck culture is heavy. The oilfield is the local economy, and oilfield supervisors, fabricators, and offshore-rotation guys are buying serious trucks: lifted Ford F-250 Power Strokes, Ram 2500 Cummins, GMC Sierra Denali HDs. Most want a clean 4–6" lift with the right wheel and tire combo, alignment dialed in, and steering stabilization that survives the trip back from the Port of Houma. We\'ve installed BDS, Cognito, and Superlift kits on dozens of Houma-based work trucks and weekend builds. The shop\'s also a step up from what\'s available in Bayou Cane: we don\'t subcontract, we don\'t reuse hardware, and we don\'t pad the bill with "diagnostic fees" on top of the install. Real torque specs, factory alignment, and certified-installer paperwork so any brand-level warranty claim is straightforward. If you\'re tired of the dealership runaround on a simple level kit, or you\'ve been quoted a price by a Houma shop that doesn\'t match what\'s actually on the invoice, run it by us. (985) 258-3831. Free quotes, no pressure.',
    faqs: [
      { q: 'How long is the drive from Houma to your Lockport shop?', a: '19 miles, about 23 minutes via LA-24 and LA-1. From Bayou Cane and East Houma you\'re looking at the same range. We open at 7:30am so you can drop off before work if you\'re heading offshore.' },
      { q: 'I work offshore on a 14/7 rotation. Can you turn my truck around inside a week?', a: 'Yes — for most leveling and 4–6" lift kits, drop-off on a Monday means pickup by Friday at the latest. Big-lift builds (8"+ with re-gearing) need closer to two weeks. Let us know your rotation schedule when you book and we\'ll prioritize the timeline.' },
      { q: 'My work truck is a fleet vehicle. Can you bill the company directly?', a: 'Call us at (985) 258-3831 to set up fleet billing — we\'ll walk through the paperwork and account setup with your company office.' },
      { q: 'I daily-drive my 6.7 Power Stroke from Houma to a platform job. What lift height keeps it practical?', a: '4–6" lift on 35s is the sweet spot for guys running long highway miles. You get the look and the clearance without killing fuel economy or chewing through u-joints. Above that, you\'ll want driveshaft and gear work to stay practical for daily use.' },
      { q: 'My BDS kit was installed somewhere else and has an issue. Can you help?', a: 'Warranty claims on lift kit parts go directly through the manufacturer (BDS in this case), not through any installing shop. You\'ll need your original install paperwork and part numbers to file. We\'re happy to inspect the install and do the labor to swap a covered part once BDS approves the claim — call us to walk through it.' },
    ],
  },
  {
    slug: 'lift-kits-suspension-thibodaux-la',
    serviceKey: 'lift-kits',
    serviceName: 'Custom Lift Kits & Suspension',
    serviceShort: 'Lift Kits & Suspension',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    cityIntro:
      'Thibodaux drivers looking for a lift kit installer who actually knows what they\'re doing make the short drive down LA-1 to Elite Custom Automotive in Lockport. We\'re certified for BDS, Cognito, and Superlift, and we handle everything from 2-inch level kits to massive 8"+ big-lift builds. Proper alignment, fitment, and driveline correction included — not added on at pickup.',
    metaTitle: 'Lift Kits in Thibodaux, LA | Elite Custom Automotive',
    metaDescription:
      'Thibodaux truck owners trust Elite Custom Automotive for lift kit installation. BDS, Cognito, Superlift certified. Just down LA-1 in Lockport. Call (985) 258-3831.',
    localContext:
      'Thibodaux is a quick 16-mile run down LA-1 to our Lockport shop — about 20 minutes door to door from Acadia Plantation, downtown Thibodaux, or the Audubon Avenue corridor. We\'re closer than driving to a Houma chain shop and a lot more honest than the dealership. Thibodaux\'s truck scene is split: there\'s the daily-driver crowd from Nicholls State and the Thibodaux Medical Center who want a clean level kit and a wheel/tire upgrade, and there\'s the lifted-truck crowd from Lafourche Crossing, The Settlement at Live Oak, and the LA-308 neighborhoods running 6–8" big-lift Cummins and Power Stroke builds. We handle both. For the daily-driver crowd, a 2–3" leveling kit and the right wheel and tire combo gets you the look without sacrificing your ride or wearing out your CV joints. For the big-lift crowd, we\'re certified on BDS, Cognito, and Superlift — full kits with the supporting hardware (steering stabilizers, drop brackets, driveshaft work where needed). We also see a lot of Thibodaux customers because we\'re an honest second opinion. Got quoted $6,500 for a lift at a chain shop? Drive it down — we\'ll walk through the parts list, tell you what\'s necessary, what\'s marked up, and what\'s worth doing differently. Free quote, no pressure. Call (985) 258-3831.',
    faqs: [
      { q: 'How long is the drive from Thibodaux to your shop?', a: 'About 16 miles, 20 minutes door-to-door via LA-1 from the Nicholls State area or Acadia Plantation. Even less from Lafourche Crossing on LA-308.' },
      { q: 'I\'m a Nicholls student. Are there lifts that work on a daily-driver budget?', a: 'Yes. A simple 2–3" leveling kit with the right wheel-tire combo runs much less than a full custom lift, gives you the look, and doesn\'t kill your ride or fuel economy. We work with student budgets — call us and we\'ll spec something honest.' },
      { q: 'Can I bring my truck after work? You\'re 20 minutes away.', a: 'We\'re open 7:30am–5:00pm Monday–Friday. Easy after-work drop-off if you can get to us by 5. If you\'re coming from Thibodaux Medical Center or downtown Thibodaux on a hospital shift, we can arrange for an earlier drop-off slot.' },
      { q: 'What brand of lift kit holds up best for South Louisiana roads?', a: 'BDS and Cognito both hold up well — BDS is our most common Ford and Chevy install, Cognito leads on GM HD trucks. Both have proper geometry correction for the lift height and quality shocks (Fox, King, Falcon) that handle the road chatter on LA-1 and LA-308 well.' },
      { q: 'I have a 2022 Ram 1500. Can it actually take a 6" lift without issues?', a: 'With the right kit, yes. The Ram 1500 ride is great but the geometry gets tricky past 4" — you need the right drop brackets and a stabilized steering setup to keep it tracking right. We\'ve done plenty of 6" Ram 1500 builds; come by and we\'ll show you what\'s involved.' },
    ],
  },

  // ── ENGINE REBUILDS & TRANSMISSION SERVICE ───────────────────
  {
    slug: 'engine-rebuild-transmission-service-lockport-la',
    serviceKey: 'engine-trans',
    serviceName: 'Engine Rebuilds & Transmission Service',
    serviceShort: 'Engine & Trans Service',
    city: 'Lockport',
    parish: 'Lafourche Parish',
    cityIntro:
      'When your engine needs serious work — or your transmission is on its way out — Elite Custom Automotive in Lockport handles it. We do full engine rebuilds, engine swaps (LS, Coyote, Cummins, Power Stroke), and full transmission swaps when a unit is finished. We don\'t do internal transmission rebuilds — we replace the whole unit so you\'re not paying twice for a teardown that might not hold. From daily drivers to towing rigs at our shop on 5609 LA-1.',
    metaTitle: 'Engine Rebuilds & Transmission Service in Lockport, LA | Elite Custom Automotive',
    metaDescription:
      'Engine rebuilds, engine swaps, and full transmission swap service in Lockport, LA. Honest diagnostics, quality parts, fair pricing. Call (985) 258-3831.',
    localContext:
      'When a Lockport driver\'s engine is on its way out — or a transmission is slipping on the LA-1 bridge climb — Elite Custom Automotive at 5609 LA-1 is the same-town option. Local sugar cane farmers, oilfield commuters, and bayou-side daily drivers bring us everything from blown 6.0 Power Strokes to LS swaps to high-mileage Allison work trucks. We do full engine rebuilds (bottom-end, gasket, internal — proper machine work, proper torque specs) and engine swaps (LS, Coyote, Cummins). For transmissions, we don\'t do internal rebuilds. Instead, we do full transmission swaps — replacing the entire unit cleanly. That\'s an honest choice: internal trans rebuilds in South Louisiana humidity rarely hold long-term, and customers end up paying twice. A full swap is straighter pricing and lasts longer. We also handle the everyday work: timing chain replacements on Ford 6.4 Power Strokes (a common Lockport problem on older Super Duty work trucks), head gaskets on the GM 5.3 LS, full fluid services on 6L80 and 10R80 transmissions. Honest diagnostics first — we won\'t recommend a $4,000 rebuild when a $200 fix solves it, and we won\'t recommend a $200 fix when you actually need a rebuild. Drop your truck off, call (985) 258-3831, or stop in. Lockport locals usually get a same-day diagnostic appointment.',
    faqs: [
      { q: 'My 7.3 Power Stroke is making weird noises. Can you diagnose before quoting a rebuild?', a: 'Always. We do a full diagnostic including compression test, oil pressure check, and visual inspection before any rebuild quote. Sometimes it\'s an injector or oil cooler — sometimes it\'s bottom-end failure. You\'ll get a real answer, not a fear-priced quote.' },
      { q: 'Why don\'t you do internal transmission rebuilds?', a: 'Internal trans rebuilds in South Louisiana climate tend to have about a 50/50 hold rate over 2–3 years. Full unit swaps are more reliable, straighter pricing, and usually within 20–30% of rebuild pricing. It\'s a more honest answer for the customer\'s wallet long-term.' },
      { q: 'How long does a full engine rebuild take?', a: 'For a daily-driver V8 (5.3, 5.7, 6.0): 2–3 weeks once the machine work is back. Diesel rebuilds (6.7 Power Stroke, 6.6 Duramax, 6.7 Cummins): 3–5 weeks. Project trucks with custom work can run longer.' },
      { q: 'Do you do LS swaps?', a: 'Yes — LS swaps are one of our specialties. We\'ve done LS swaps into older Chevy and GMC trucks, Jeeps, and a couple of full project builds. Talk to Colin about your specific project.' },
      { q: 'What does a transmission swap actually include?', a: 'New transmission unit (rebuilt or reman, depending on availability and budget), new fluid, new filter, new torque converter, and a road test before delivery. Call us at (985) 258-3831 for current warranty terms on the unit and the install.' },
    ],
  },
  {
    slug: 'engine-rebuild-transmission-service-houma-la',
    serviceKey: 'engine-trans',
    serviceName: 'Engine Rebuilds & Transmission Service',
    serviceShort: 'Engine & Trans Service',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    cityIntro:
      'Houma drivers facing a major engine repair or a failing transmission have a better option than the dealership. Elite Custom Automotive in Lockport handles complete engine rebuilds and full transmission swap installs — diagnosed honestly and priced fairly. We don\'t do internal transmission rebuilds; we replace the whole unit when it\'s time, which is more honest and more reliable than a patch job. Short drive from Houma, with a 5.0 Google rating from real local customers.',
    metaTitle: 'Engine Rebuilds & Transmission Service in Houma, LA | Elite Custom Automotive',
    metaDescription:
      'Engine rebuilds and full transmission swap service for Houma drivers. Honest diagnostics, no patch jobs. Short drive to our Lockport shop. Call (985) 258-3831.',
    localContext:
      'Houma\'s oilfield economy keeps trucks working hard — and eventually, even the best work truck needs a full engine rebuild or a transmission swap. Elite Custom Automotive\'s shop in Lockport is 19 miles, 23 minutes up LA-24 and LA-1 — faster than waiting weeks at a Houma dealership for an engine teardown estimate, and roughly half the price of dealership labor. We see customers from Bayou Cane, Schriever, Gray, and Houma East regularly: fleet trucks needing 6.6 Duramax rebuilds, personal trucks with blown Cummins 5.9s, and family vehicles needing a transmission swap. We do full engine rebuilds the right way — proper machine work on the heads and block, factory-spec internal tolerances, no reused gaskets, no shortcut cleanup. For transmissions, we don\'t do internal rebuilds; instead we install full reman or new transmission units. That\'s a more honest answer for Houma customers — internal rebuilds in our climate often need a second repair within 2–3 years, while a full unit swap is straighter pricing and lasts longer. Call us at (985) 258-3831 for current warranty terms on the unit and the install — terms vary by the reman supplier. We also handle the day-to-day Houma calls: head gaskets on the 5.3 LS, timing chain replacement on the 6.4 Power Stroke (a common Houma problem on older Super Duty work trucks), full fluid service on the Allison 1000 and 2500. Free diagnostic before any rebuild quote. (985) 258-3831.',
    faqs: [
      { q: 'I drive a 6.6 Duramax fleet truck. Can you handle a full rebuild without sending it to the dealer?', a: 'Yes. We\'ve done multiple 6.6 Duramax rebuilds — bottom-end, head work, injector replacement, the whole thing. You\'ll pay roughly 40–50% less than dealer labor and get a real answer on what\'s actually broken vs. what they\'d "recommend replacing while we\'re in there."' },
      { q: 'Why don\'t you do internal transmission rebuilds? The Houma shops do.', a: 'Internal trans rebuilds in South Louisiana climate hold long-term about 50% of the time. We\'ve watched too many customers pay $3,500 for a rebuild that fails within two years. A full unit swap is straighter pricing and more reliable long-term. Call us for current warranty terms.' },
      { q: 'How long does an engine rebuild keep my truck out of work?', a: 'V8 gas rebuild: 2–3 weeks. Diesel rebuild (6.7 Power Stroke, 6.6 Duramax, Cummins): 3–5 weeks. We give you a real timeline upfront, including any waiting on parts or machine work.' },
      { q: 'Do you handle fleet billing for oilfield service companies?', a: 'Call us at (985) 258-3831 to set up fleet billing for your company — we\'ll walk through the paperwork and account setup with your office.' },
      { q: 'My Cummins has the death wobble. Is that a rebuild or a steering issue?', a: 'Death wobble is almost always a steering/suspension issue (track bar, ball joints, or worn front-end components), not an engine issue. We\'ll diagnose and quote the steering work — it\'s typically a fraction of a rebuild cost.' },
    ],
  },
  {
    slug: 'engine-rebuild-transmission-service-thibodaux-la',
    serviceKey: 'engine-trans',
    serviceName: 'Engine Rebuilds & Transmission Service',
    serviceShort: 'Engine & Trans Service',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    cityIntro:
      'Need an engine rebuild or transmission swap in Thibodaux? Elite Custom Automotive is a quick drive down LA-1 in Lockport. Full engine builds, engine swaps, and full transmission replacements — diagnosed honestly so you know whether you need a $200 fix or a $4,000 rebuild before any work starts. Note: we don\'t do internal transmission rebuilds. When a trans is done, we swap the unit cleanly — it holds longer and is straighter pricing.',
    metaTitle: 'Engine Rebuilds & Transmission Service in Thibodaux, LA | Elite Custom Automotive',
    metaDescription:
      'Engine rebuilds, engine swaps, and full transmission swap service for Thibodaux drivers. Quick drive to our Lockport shop. Call (985) 258-3831.',
    localContext:
      'Thibodaux drivers facing a major engine or transmission repair have a straight shot down LA-1 to Elite Custom Automotive — 16 miles, 20 minutes from downtown Thibodaux, the Nicholls State campus area, or Acadia Plantation. We handle complete engine rebuilds and engine swaps, and we install full reman transmission units when yours is done. We don\'t do internal trans rebuilds — for Thibodaux customers especially, full unit swaps are the more honest answer because they\'re straightforward, cleaner pricing, and last longer than internal rebuilds, which in our humidity often fail again within 2–3 years. Call us at (985) 258-3831 for current warranty terms on the unit and the install. Common Thibodaux jobs: head gaskets on the 5.3 LS (a known issue on 2014–2019 Silverado and Sierra trucks driving the LA-1 commute), full engine teardown and rebuild on Cummins 5.9 and 6.7 work trucks, transmission swaps on 6L80 GM transmissions that ran hot in summer heat. We also do LS swaps for the Nicholls-area project-truck crowd — older Chevy and GMC bodies dropping in modern LS power. Real diagnostics before any rebuild quote. If you\'ve been told by a Thibodaux shop or the dealership that your truck "needs a rebuild," drive it down — sometimes it\'s an injector, sometimes it\'s an oil cooler, and sometimes it really is bottom-end. You deserve the honest answer either way. (985) 258-3831.',
    faqs: [
      { q: 'My truck has the 5.3 LS lifter tick. Is that always a rebuild?', a: 'Not always. Sometimes it\'s just a failed lifter or AFM issue — a $1,500 fix with the right diagnostic. Other times the cam is wiped and it really is a rebuild. We do compression and oil pressure tests before quoting anything definitive.' },
      { q: 'I\'m at Nicholls and my Cummins died. Are you the place for a project truck?', a: 'We love project trucks. LS swaps, Cummins swaps, full custom engine setups — bring it down. We\'ll talk through the build, budget, and timeline before any wrench turns. Most Nicholls students and grads we work with are doing the build in stages, which we\'re totally good with.' },
      { q: 'My 6L80 transmission slipped. Internal rebuild or full swap?', a: 'Almost always a full swap. Internal rebuilds on the 6L80 in our climate rarely hold past 50,000 miles. A full unit swap is more reliable and usually within 20% of rebuild pricing once you factor in the second repair you\'re likely to need. Call us at (985) 258-3831 for current warranty terms.' },
      { q: 'How quickly can you turn around a transmission swap?', a: 'Once the unit\'s in our hands, the install is 2–3 days. Parts availability is the variable — typically 3–7 days for common 6L80, 6R80, 10R80, and Allison units.' },
      { q: 'Do you do engine swaps for older trucks? I have a 90s C10.', a: 'Absolutely. LS swaps into older C10s, GMTs, and Jeeps are bread-and-butter work for us. Bring the truck down and we\'ll spec the swap (donor engine, harness, accessories, fuel system, cooling) before any work starts.' },
    ],
  },

  // ── CUSTOM WHEELS & TIRES ────────────────────────────────────
  {
    slug: 'custom-wheels-tires-lockport-la',
    serviceKey: 'wheels',
    serviceName: 'Custom Wheels & Tires',
    serviceShort: 'Wheels & Tires',
    city: 'Lockport',
    parish: 'Lafourche Parish',
    cityIntro:
      'Lockport drivers come to Elite Custom Automotive for custom wheel and tire setups that actually fit. From forged 22"+ wheels on lifted trucks to clean street setups on daily drivers, we know what fits, what rubs, and how to mount and balance it so it rides right. Brands you actually want: Fuel, American Force, Method, Moto Metal, Toyo, Nitto, and more.',
    metaTitle: 'Custom Wheels & Tires in Lockport, LA | Elite Custom Automotive',
    metaDescription:
      'Custom wheels and tires in Lockport, LA. Forged wheels, mud terrains, fitment for lifted trucks. Touchless mounting, Road Force balancing. Call (985) 258-3831.',
    localContext:
      'Lockport drivers grab the easiest wheel and tire upgrades because we\'re a block away from most of them — Elite Custom Automotive\'s shop sits at 5609 LA-1, between the locks and the LA-1/LA-308 split. Local customers walk in with everything: lifted Power Strokes wanting 22x12 forged wheels and 37" mud terrains, family Silverados looking for a cleaner street setup, sugar mill work trucks needing fresh duallies, and even Jeeps and Broncos. Lockport\'s mix of bayou-road conditions, LA-1 highway miles, and cane field gravel access roads means we don\'t just sell wheels — we spec the right wheel/tire/lift combo so your setup actually works for how you drive. The local rubber market: Toyo Open Country, Nitto Ridge Grappler, Nitto Mud Grappler, BFG KO2, and Cooper Discoverer for the trucks that mix highway and field. For street-focused setups, Toyo Proxes and Nitto NT05. Brand-wise on wheels, we run Fuel, American Force (forged for the heavy-truck crowd), Method, Moto Metal, and KMC. Touchless mounting machines so we don\'t scratch the finish, Road Force balancing on heavy mud-terrain setups, TPMS sensor programming included, and torque-to-spec lug installation. If you\'re looking at a wheel package online and aren\'t sure if it\'ll rub at full turn or clear your brake calipers, walk it by us before you buy — we\'ll save you the restock fee.',
    faqs: [
      { q: 'What size wheels and tires can I run on my F-250 with a 4" lift?', a: '22x12 forged with 37x12.50 mud terrains is the sweet spot for a 4" lifted F-250. You\'ll need to trim a small fender liner section for full lock-to-lock turn but no major bodywork. We\'ll fit-check before mounting.' },
      { q: 'I bought wheels online. Will you mount and balance them?', a: 'Yes. We charge a separate labor rate when you bring your own wheels (since we can\'t back the parts), but we\'ll mount, Road Force balance, install TPMS, and torque to spec. Just bring the receipt for any issue claims with the wheel manufacturer.' },
      { q: 'My truck shakes at 65–70 mph after I put on bigger wheels. Can you fix it?', a: 'Yes — that\'s a balance or out-of-round issue, usually fixable with Road Force balancing. If the wheel itself is bent (potholes do this), we\'ll know within five minutes on the machine and can quote you on the fix.' },
      { q: 'What\'s the difference between forged and cast wheels?', a: 'Forged wheels (American Force, BMF, some Method) are stronger and lighter — better for heavy lifted trucks, towing rigs, and weekend off-roaders. Cast wheels (Fuel, KMC, most Moto Metal) are more budget-friendly and still rated for daily driving, but heavier and slightly weaker in extreme impact.' },
      { q: 'Do you carry TPMS sensors in stock or do I need to order them?', a: 'We stock universal TPMS sensors for most makes and program them on the spot. For specific OEM-protocol sensors (some Toyota and newer Ford), we order them in — usually 24–48 hour turnaround.' },
    ],
  },
  {
    slug: 'custom-wheels-tires-houma-la',
    serviceKey: 'wheels',
    serviceName: 'Custom Wheels & Tires',
    serviceShort: 'Wheels & Tires',
    city: 'Houma',
    parish: 'Terrebonne Parish',
    cityIntro:
      'Looking for the right custom wheels and tires in Houma without paying online wheel shops to ship blind? Elite Custom Automotive in Lockport stocks and installs the wheels and tires Houma truck owners actually want. We handle the fitment math, the mounting, the balancing, and the TPMS so your setup looks right and rides right.',
    metaTitle: 'Custom Wheels & Tires in Houma, LA | Elite Custom Automotive',
    metaDescription:
      'Custom wheels and tires for Houma drivers. Forged wheels, mud-terrain tires, fitment for lifted trucks. Short drive to our Lockport shop. Call (985) 258-3831.',
    localContext:
      'Houma\'s the lifted-truck capital of South Louisiana — and Elite Custom Automotive in Lockport is 23 minutes up LA-24 from Bayou Cane, Houma East, and Schriever. Houma customers fill our calendar with serious wheel and tire packages: 22x12 and 24x14 forged wheels (American Force, Fuel, BMF), 37" and even 40" mud terrains (Toyo Open Country, Nitto Mud Grappler, BFG KM3) on lifted F-250 Super Duty, Ram 2500, and GMC Sierra HD trucks. We also see Houma\'s daily-driver crowd — service techs, fleet supervisors, and oilfield staff who want a clean leveling kit and a 33"–35" tire setup that handles work and weekend without compromising fuel economy. The trip is worth it because we don\'t subcontract the mounting or balancing — every wheel comes off and goes on with touchless equipment that doesn\'t scratch the finish, gets Road Force balanced where needed, and is torqued to manufacturer spec. TPMS sensors programmed before you leave. We work with Houma fleet accounts on bulk wheel/tire packages — oilfield service companies replacing a fleet\'s worth of work-truck tires at once. If you\'re tired of Houma chain-shop scratches on a $1,500 wheel set, or you can\'t get a straight answer on whether your truck will clear a specific wheel and tire combo, drop it by. (985) 258-3831.',
    faqs: [
      { q: 'I want to run 24x14 wheels on my F-250. Will they actually fit?', a: 'With a 4–6" lift and the right offset, yes — but it depends on backspacing and tire choice. Tell us your truck year and current lift specs and we\'ll spec the exact wheel offset and tire size that clears without rubbing.' },
      { q: 'Where do you stock or order from? I\'m in Bayou Cane and want fast turnaround.', a: 'We have direct dealer accounts with Fuel, American Force, Method, KMC, Moto Metal, and Toyo. For most popular sizes, parts hit our shop within 3–5 business days. We\'ll let you know the exact ETA when you book.' },
      { q: 'My company needs new tires for 8 fleet trucks. Do you do bulk pricing?', a: 'Yes — bulk fleet wheel and tire packages get fleet pricing. Call us or email a fleet PO and we\'ll quote per-vehicle pricing with a multi-vehicle discount.' },
      { q: 'What\'s the lightest forged wheel for a heavy 3500 dually?', a: 'American Force makes some of the lightest forged duallies on the market, and BMF has competitive options. Forged matters on duallies because the weight savings adds up across six wheels — your fuel economy and braking both improve.' },
      { q: 'Can you swap to TPMS-programmed wheels if I\'m changing wheel brands?', a: 'Yes. We pull the old TPMS sensors, transfer or replace as needed, and reprogram to your truck\'s protocol. Most fleet wheel swaps are a one-day turnaround.' },
    ],
  },
  {
    slug: 'custom-wheels-tires-thibodaux-la',
    serviceKey: 'wheels',
    serviceName: 'Custom Wheels & Tires',
    serviceShort: 'Wheels & Tires',
    city: 'Thibodaux',
    parish: 'Lafourche Parish',
    cityIntro:
      'Thibodaux drivers shopping for custom wheels and tires get a better deal — and better fitment advice — at Elite Custom Automotive in Lockport. We\'ve put wheels on hundreds of Thibodaux trucks, daily drivers, and weekend builds. Forged or cast, mud terrain or street, we\'ll dial in the right setup and mount it on touchless machines that don\'t scratch your wheels.',
    metaTitle: 'Custom Wheels & Tires in Thibodaux, LA | Elite Custom Automotive',
    metaDescription:
      'Custom wheels and tires for Thibodaux drivers. Forged wheels, fitment for lifted trucks, Road Force balancing. Quick drive to our Lockport shop. Call (985) 258-3831.',
    localContext:
      'Thibodaux\'s wheel and tire scene is more varied than Houma\'s — a mix of college-town daily drivers from the Nicholls State area, family trucks from Acadia Plantation and Lafourche Crossing, and a steady big-truck crowd from the LA-308 neighborhoods. Elite Custom Automotive in Lockport is 16 miles, 20 minutes down LA-1, and we see Thibodaux customers wanting the full range: subtle 20" street setups for daily commuters, mid-tier 22x10 setups for lifted half-tons, and aggressive 22x12+ packages on Cummins and Power Stroke heavy duties. Common Thibodaux requests: replacement wheel sets after a curb damage incident downtown, clean wheel/tire upgrades for Nicholls grads buying their first new truck, and family vehicle wheel/tire packages for trucks that haul kids to St. Joseph Co-Cathedral on Sundays. Brand-wise, we run Fuel, KMC, American Force forged for the heavy-truck crowd, Method, Moto Metal — and we work with rubber from Toyo, Nitto, BFG, Cooper across all-terrain, mud-terrain, and street performance. Road Force balancing on heavier setups (a must for any 35"+ mud terrain), touchless mounting, TPMS programming included, and torque-to-spec. If you\'re looking at wheel options and aren\'t sure what\'ll match your truck\'s lift height, color, and the look you want, call us — we\'ll walk through specs over the phone before you spend a dollar. (985) 258-3831.',
    faqs: [
      { q: 'I just moved to Acadia Plantation and want a clean wheel upgrade for my Tundra. What\'s the move?', a: 'For a daily Tundra, 20x9 or 20x10 wheels in a matte black or bronze finish with Toyo Open Country A/T 33s gives you the upgraded look without harshness on the ride. We\'ve done plenty of these — call us with your trim and current wheel specs and we\'ll spec the exact fitment.' },
      { q: 'How much does a full wheel and tire package run?', a: 'For half-ton trucks: $2,800–$4,500 for a quality wheel/tire combo with install and TPMS. For heavy duties with forged wheels and 35–37" mud terrains: $4,500–$7,500. We give itemized quotes — wheels, tires, labor, mounting, balancing — so you see exactly where every dollar goes.' },
      { q: 'My truck has TPMS but I don\'t want it to keep nagging me. Can you disable it?', a: 'We don\'t disable TPMS — it\'s a federal safety requirement on 2008+ trucks. But we can install programmable universal TPMS sensors that work cleanly with your truck\'s protocol so you don\'t get nagging dash warnings.' },
      { q: 'Do you fit-check before mounting?', a: 'Always. We fit-check every wheel and tire combo against the truck (turning to full lock, checking fender clearance, checking suspension travel) before final mounting. If something rubs, we tell you on the lift before any tire gets mounted to a wheel.' },
      { q: 'I have a 2020 Silverado 1500 with a 2" leveling kit. What\'s the max tire I can run?', a: '33x12.50 on a 20x9 wheel is the comfortable max — anything bigger and you\'ll be looking at minor fender trim. Tell us your trim level and wheel choice and we\'ll spec the exact fitment.' },
    ],
  },
]

export function getServicePage(slug: string): ServicePageData | undefined {
  return pageContent.find((p) => p.slug === slug)
}
