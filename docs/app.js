const data = window.SEARCH_DATA || [];

const dailyGuide = [
  {
    id: "before",
    label: "Before 25 May - Before Hajj Ihram",
    title: "Before Hajj Ihram",
    place: "Mecca",
    objective: "Finish Umrah al-Tamattu correctly and enter Hajj with clean finances, clear intention, and fewer avoidable risks.",
    mustDo: [
      "Complete Umrah al-Tamattu: Ihram from miqat, Tawaf, Tawaf prayer, Sa'y, and Taqsir.",
      "For Taqsir, cut hair. Do not suffice with nail cutting alone.",
      "Do not deliberately leave Mecca for a far distance after Umrah unless there is a real need and you know the Ihram ruling.",
      "Check that Hajj expenses, Ihram clothing, Tawaf/Sa'y expenses, sacrifice payment, and camp arrangements are from lawful money with khums concerns settled."
    ],
    pitfalls: [
      "Skipping Taqsir before Hajj.",
      "Leaving Mecca casually after Umrah al-Tamattu.",
      "Waiting until the last moment to ask about menstruation, illness, or proxy issues."
    ],
    spiritual: [
      "Ask Allah to make the Hajj accepted, not only completed.",
      "Make a written list of debts, apologies, people to pray for, and sins to abandon."
    ]
  },
  {
    id: "8",
    label: "25 May - 8 Dhu al-Hijjah",
    title: "Ihram for Hajj",
    place: "Mecca, then caravan movement",
    objective: "Enter Hajj Ihram from Mecca and begin the Hajj rites with correct intention.",
    mustDo: [
      "Wear Ihram for Hajj al-Tamattu from Mecca. Masjid al-Haram is best.",
      "Make intention for Hajj al-Tamattu for closeness to Allah, then say Labbayk correctly.",
      "Men wear the two Ihram cloths before intention and Labbayk as obligatory precaution.",
      "Track the Ihram prohibitions immediately after Labbayk."
    ],
    pitfalls: [
      "Using fragrance, deodorant, scented soap, or scented wipes after Ihram.",
      "For men: shaded daytime travel without excuse.",
      "For men: socks or shoes covering the whole top of the foot.",
      "Covering the head for men or face-mask style covering for women."
    ],
    spiritual: [
      "Treat Labbayk as a pledge, not a chant.",
      "Ask: what am I still negotiating with Allah about?"
    ]
  },
  {
    id: "9",
    label: "26 May - 9 Dhu al-Hijjah",
    title: "Arafat",
    place: "Arafat",
    objective: "Perform Wuquf in Arafat from noon until sunset with intention of closeness to Allah.",
    mustDo: [
      "Be inside Arafat from noon until sunset as a precaution.",
      "Make Wuquf intention in the heart. No special Arabic wording is required.",
      "Do not leave Arafat before sunset deliberately.",
      "Stop Hajj Labbayk at noon according to the treatise."
    ],
    pitfalls: [
      "Not confirming your tent or resting place is inside Arafat.",
      "Leaving before sunset because the group moves early without understanding the consequence.",
      "Spending the day in distraction and missing the unmatched dua opportunity."
    ],
    spiritual: [
      "Read Dua Arafah of Imam Husayn (a), slowly if possible.",
      "Ask forgiveness by name: anger, arrogance, desires, neglect of prayer, ingratitude, and hidden shirk."
    ]
  },
  {
    id: "mashar",
    label: "Night 26/27 May - Night of Eid",
    title: "Mash'ar / Muzdalifah",
    place: "Mash'ar al-Haram",
    objective: "Move from Arafat to Mash'ar, stay the night as precaution, and perform Wuquf from dawn until sunrise unless excused.",
    mustDo: [
      "Go to Mash'ar after Arafat.",
      "Stay the night as obligatory precaution and perform Wuquf from dawn to sunrise.",
      "Women, elderly, ill, children, necessary helpers, and those fearing crowd danger may stay part of the night and depart.",
      "Collect pebbles from Haram, preferably Mash'ar. Take 49 for three days, or 70 if staying to the 13th, plus extras."
    ],
    pitfalls: [
      "Missing Mash'ar Wuquf deliberately.",
      "Taking used pebbles from around the Jamarat.",
      "Not collecting enough extra pebbles."
    ],
    spiritual: [
      "Collect each pebble as a promise to resist one door of Shaytan.",
      "Keep the night quiet: dhikr, istighfar, salawat, and rest for tomorrow."
    ]
  },
  {
    id: "10",
    label: "27 May - 10 Dhu al-Hijjah",
    title: "Eid Day in Mina",
    place: "Mina, then Mecca if scheduled",
    objective: "Complete Ramy al-Aqaba, sacrifice, and Taqsir/Halq in sequence.",
    mustDo: [
      "Ramy al-Jamarah al-Aqaba: seven qualifying pebbles, one by one, with intention.",
      "Sacrifice for Hajj al-Tamattu, personally or through a reliable proxy.",
      "Perform Taqsir/Halq in Mina after Ramy and sacrifice.",
      "After Taqsir/Halq, most Ihram restrictions end except fragrance and spouse."
    ],
    pitfalls: [
      "Doing Taqsir before sacrifice without understanding the sequence.",
      "Shaving or trimming someone else before you have exited Ihram yourself.",
      "Using fragrance too early. Fragrance waits until Tawaf of Hajj, its prayer, and Sa'y.",
      "Assuming spouse is halal before Tawaf al-Nisa and its prayer."
    ],
    spiritual: [
      "Read Qur'an 22:36-37 about sacrifice and taqwa.",
      "Offer your ego, anger, appetite, and attachment along with the outward sacrifice."
    ]
  },
  {
    id: "11night",
    label: "Night 27/28 May - 11th Night",
    title: "First Night in Mina",
    place: "Mina",
    objective: "Spend at least half the night in Mina unless exempt.",
    mustDo: [
      "Make intention for Baytutah in Mina for closeness to Allah.",
      "Half the night is enough, first half or second half.",
      "If going to Mecca for rites, know when you must return."
    ],
    pitfalls: [
      "Leaving Mina without tracking half-night timing.",
      "Assuming tiredness alone always removes the duty.",
      "Forgetting that missing Mina night without excuse has atonement."
    ],
    spiritual: [
      "Serve someone quietly: water, space, directions, patience, or dua.",
      "Let discomfort train the tongue away from complaint."
    ]
  },
  {
    id: "11",
    label: "28 May - 11 Dhu al-Hijjah",
    title: "Ramy of Three Jamarat",
    place: "Mina",
    objective: "Perform Ramy of all three Jamarat in order.",
    mustDo: [
      "Throw seven pebbles at Jamarah al-Ula.",
      "Then seven at Jamarah al-Wusta.",
      "Then seven at Jamarah al-Aqaba.",
      "Use valid, unused pebbles and count carefully."
    ],
    pitfalls: [
      "Wrong order of Jamarat.",
      "Counting pebbles that did not strike.",
      "Throwing two pebbles together and counting both."
    ],
    spiritual: [
      "Name one inner enemy before each Jamarah.",
      "Reject despair, showing off, haste, anger, and arrogance."
    ]
  },
  {
    id: "12night",
    label: "Night 28/29 May - 12th Night",
    title: "Second Night in Mina",
    place: "Mina",
    objective: "Spend the second required night in Mina unless exempt.",
    mustDo: [
      "Stay at least half the night.",
      "Prepare pebbles and timing for the 12th day.",
      "Complete or plan remaining Mecca rites if still pending."
    ],
    pitfalls: [
      "Losing track of whether Tawaf al-Nisa is complete.",
      "Being physically present but spiritually careless near the end.",
      "Leaving logistics to the last minute."
    ],
    spiritual: [
      "Pray for the living and dead by name.",
      "Ask what your family should see changed after Hajj."
    ]
  },
  {
    id: "12",
    label: "29 May - 12 Dhu al-Hijjah",
    title: "Final Required Mina Day for Most",
    place: "Mina, then Mecca",
    objective: "Perform Ramy of all three Jamarat and leave Mina after Zuhr if you are not staying to the 13th.",
    mustDo: [
      "Perform Ramy in order: first, middle, Aqaba.",
      "Leave Mina only after Zuhr if leaving on the 12th.",
      "Leave before sunset unless you are staying for the 13th."
    ],
    pitfalls: [
      "Leaving before Zuhr on the 12th.",
      "Remaining in Mina until sunset unintentionally, which can trigger the 13th night and Ramy duty.",
      "Thinking Hajj is complete while Tawaf al-Nisa or its prayer is missing."
    ],
    spiritual: [
      "Leave with shukr, not only relief.",
      "Ask Allah to protect the Hajj after the crowd and emotion fade."
    ]
  },
  {
    id: "13",
    label: "30 May - 13 Dhu al-Hijjah, if required",
    title: "13th Day if Staying",
    place: "Mina",
    objective: "If required or if you stayed, complete the additional Mina night and Ramy.",
    mustDo: [
      "Stay the 13th night if required by your case.",
      "Perform Ramy of all three Jamarat again.",
      "You may leave before Zuhr on the 13th."
    ],
    pitfalls: [
      "Treating an unplanned 13th as meaningless.",
      "Forgetting the extra Ramy.",
      "Not asking a scholar if unsure whether the 13th became obligatory."
    ],
    spiritual: [
      "Treat extra time as mercy.",
      "Use the delay for a calmer tawbah and dua for istiqamah."
    ]
  }
];

const commonMistakes = [
  ["Taqsir confusion", "Do not end Umrah al-Tamattu with nail cutting alone. Cut hair. In Hajj, do Taqsir/Halq after Ramy and sacrifice."],
  ["Using fragrance too early", "Perfume, attar, scented soap, scented wipes, deodorant, rose, musk, saffron, and fragrant foods are Ihram risks. Fragrance becomes halal only after Tawaf of Hajj, its prayer, and Sa'y."],
  ["Tawaf al-Nisa forgotten", "Tawaf al-Nisa and its prayer are obligatory for men and women, married and single. Spouse is not halal until they are done."],
  ["Men using shade during travel", "Men in Ihram should avoid umbrella/roofed transport in daytime travel unless excused. Women may use shade."],
  ["Wrong Jamarat order", "On the 11th and 12th, throw first Jamarah, then middle, then Aqaba. Eid day is only Aqaba."],
  ["Pebble counting mistakes", "Pebbles must be valid stones, unused, thrown one by one, and must strike. If doubtful, count the lower number."],
  ["Leaving Arafat early", "Do not leave before sunset deliberately. If a group moves, verify the ruling before following blindly."],
  ["Mash'ar missed casually", "Mash'ar Wuquf is a pillar. If you are in an excused group, know the special allowance and timing."],
  ["Mina night timing", "The 11th and 12th nights require Mina stay unless exempt. Half the night is enough; track it."],
  ["Open-ended uncertainty", "If something goes wrong, record exact time, place, rite, intention, and whether it was deliberate, forgetful, ignorant, or forced. Then ask a Shia scholar."]
];

const ihramActivities = [
  ["Toothbrush", "Allowed, but avoid causing gums to bleed. Use unscented toothpaste where possible."],
  ["Shower / washing", "Allowed. Pour water on the head, but do not submerge the head in water."],
  ["Soap / shampoo / wipes", "Use unscented products only. Keep scented items away from Ihram clothes."],
  ["Perfume / attar / deodorant", "Do not apply, smell intentionally, spray, or use fragrant body products."],
  ["Creams / oils / lotion", "Do not apply oil or cream, even unscented, unless for treatment."],
  ["Combing hair / beard", "Avoid as a precaution. If it will remove hair, it is not permitted."],
  ["Scratching", "Be gentle. Avoid removing hair or causing bleeding."],
  ["Cutting nails", "Not allowed unless a damaged nail causes harm or severe discomfort."],
  ["Shaving / trimming", "Not allowed until Taqsir/Halq. Do not trim someone else before your own exit from Ihram."],
  ["Mirror", "Do not use for grooming. Accidental looking or medical/injury use is fine."],
  ["Men's shoes and socks", "Avoid socks or shoes covering the whole top of the foot. Use sandals with exposed top."],
  ["Men's head covering", "Do not cover the head, even partly as obligatory precaution."],
  ["Women's face covering", "Do not cover like a mask. Veil-lowering for non-mahram coverage has its own allowance."],
  ["Umbrella / shade", "Men avoid shaded daytime travel; women may use shade. Fixed shade in Mecca, Arafat, Mash'ar, and Mina is allowed."],
  ["Insects", "Avoid killing insects unless they harm or seriously disturb you."],
  ["Food", "Avoid fragrant foods. Greasy food is allowed even if it leaves grease around the mouth or hand."],
  ["Speech", "Avoid lying, arguing, boasting, harshness, and useless complaint."]
];

const spiritualBlocks = [
  {
    title: "Daily rhythm",
    items: [
      "Morning: salawat, istighfar, and a sincere dua for acceptance.",
      "During waiting: salawat, tasbih, Qur'an, or quiet reflection instead of complaint.",
      "Before sleep: review Allah's rights, people's rights, and your tongue."
    ]
  },
  {
    title: "Key Shia dua links",
    items: [
      '<a href="https://www.duas.org/kumayl.htm" target="_blank" rel="noopener">Dua Kumayl</a>',
      '<a href="https://www.duas.org/sajjadiya/s20.htm" target="_blank" rel="noopener">Dua Makarim al-Akhlaq</a>',
      '<a href="https://www.duas.org/jkabeer.htm" target="_blank" rel="noopener">Dua Jawshan Kabir</a>',
      '<a href="https://www.duas.org/iftitah.htm" target="_blank" rel="noopener">Dua Iftitah</a>',
      '<a href="https://www.duas.org/nudba.htm" target="_blank" rel="noopener">Dua Nudba</a>',
      '<a href="https://www.duas.org/tawassul.htm" target="_blank" rel="noopener">Dua Tawassul</a>',
      '<a href="https://www.duas.org/mobile/dua-arafah-imam-husain.html" target="_blank" rel="noopener">Dua Arafah of Imam Husayn (a)</a>',
      '<a href="https://www.duas.org/mobile/hajj-umra-duas.html" target="_blank" rel="noopener">Duas during Hajj and Umrah</a>'
    ]
  },
  {
    title: "Things to ponder",
    items: [
      "Ihram: what identity am I willing to remove for Allah?",
      "Arafat: what blessings have I treated as ordinary?",
      "Mash'ar: what weapons against Shaytan am I collecting?",
      "Mina: what do I sacrifice besides an animal?",
      "Tawaf al-Nisa: have I respected the rights of spouse, family, and others?"
    ]
  }
];

const cluelessBlocks = [
  {
    title: "If I do not know what to do",
    items: [
      "Stop. Do not improvise a ruling under pressure.",
      "Write four facts: where you are, what rite you were doing, what happened, and whether it was deliberate, forgetful, ignorant, forced, illness, or crowd pressure.",
      "Ask your Shia caravan scholar or a trusted representative of your marja.",
      "If a rite has a time window, ask immediately before leaving the place."
    ]
  },
  {
    title: "If Salahs are missed",
    items: [
      "Do not panic or give up the rest of the day.",
      "Pray the missed wajib Salah as qadha as soon as reasonably possible.",
      "Keep the next prayer on time. Do not let one missed prayer become two.",
      "If unsure about shortened/full prayer while travelling or intending ten days, ask your scholar and write down the rule for your itinerary."
    ]
  },
  {
    title: "Istighfar checklist: sins to name honestly",
    items: [
      "Anger, harsh speech, contempt, sarcasm, and humiliating others.",
      "Desires, unlawful gaze, fantasy, immodesty, and using people for ego.",
      "Food excess, waste, greed, and eating without gratitude.",
      "Ingratitude to Allah, parents, spouse, family, teachers, and helpers.",
      "Shirk in subtle forms: relying on people, status, money, plans, or self instead of Allah.",
      "Self-admiration, showing off, wanting to be seen as religious, and loving praise.",
      "Neglect of prayer, rushed prayer, delayed prayer, and heartless worship.",
      "Backbiting, suspicion, exposing faults, lying, exaggeration, and broken promises.",
      "Financial wrongs: unpaid debts, khums negligence, doubtful income, and unfair dealings.",
      "Hard-heartedness toward the poor, oppressed, lonely, sick, and those who asked for dua.",
      "Despair of Allah's mercy and feeling safe from accountability."
    ]
  },
  {
    title: "Short acts when tired",
    items: [
      "Salawat 100 times, or as many as you can with presence.",
      "Recite Surah al-Fatihah for the Prophet and Ahl al-Bayt (a), parents, teachers, and deceased believers.",
      "Read a small amount of Qur'an with attention.",
      "Pray for every person who asked you for dua.",
      "Give sadaqah when possible.",
      "Say: Astaghfirullah wa atubu ilayh, slowly and honestly."
    ]
  }
];

const queryInput = document.querySelector("#query");
const exactPhrase = document.querySelector("#exactPhrase");
const caseSensitive = document.querySelector("#caseSensitive");
const sourceFilter = document.querySelector("#sourceFilter");
const clearBtn = document.querySelector("#clearBtn");
const results = document.querySelector("#results");
const statusEl = document.querySelector("#status");
const recordCount = document.querySelector("#recordCount");
const template = document.querySelector("#resultTemplate");
const daySelect = document.querySelector("#daySelect");
const dayDetail = document.querySelector("#dayDetail");

recordCount.textContent = `${data.length.toLocaleString()} searchable passages`;

function list(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function renderDay() {
  const selected = dailyGuide.find(day => day.id === daySelect.value) || dailyGuide[0];
  dayDetail.innerHTML = `
    <div class="detail-title">
      <div>
        <p class="eyebrow">${selected.place}</p>
        <h3>${selected.title}</h3>
      </div>
      <span>${selected.label}</span>
    </div>
    <p class="objective">${selected.objective}</p>
    <div class="three-col">
      <section><h4>Must Do</h4>${list(selected.mustDo)}</section>
      <section><h4>Pitfalls</h4>${list(selected.pitfalls)}</section>
      <section><h4>Spiritual Focus</h4>${list(selected.spiritual)}</section>
    </div>
  `;
}

function renderStaticSections() {
  daySelect.innerHTML = dailyGuide.map(day => `<option value="${day.id}">${day.label}</option>`).join("");
  renderDay();

  document.querySelector("#mistakesGrid").innerHTML = commonMistakes.map(([title, body]) => `
    <article class="info-card"><h3>${title}</h3><p>${body}</p></article>
  `).join("");

  document.querySelector("#ihramList").innerHTML = ihramActivities.map(([name, body]) => `
    <article class="activity-item"><h3>${name}</h3><p>${body}</p></article>
  `).join("");

  document.querySelector("#spiritualContent").innerHTML = spiritualBlocks.map(block => `
    <article class="wide-card"><h3>${block.title}</h3>${list(block.items)}</article>
  `).join("");

  document.querySelector("#cluelessContent").innerHTML = cluelessBlocks.map(block => `
    <article class="wide-card"><h3>${block.title}</h3>${list(block.items)}</article>
  `).join("");
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
      if (tab.dataset.tab === "search") queryInput.focus();
    });
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function normal(value) {
  return caseSensitive.checked ? value : value.toLowerCase();
}

function termsFor(query) {
  if (exactPhrase.checked) return [query];
  return query.split(/\s+/).filter(Boolean);
}

function matches(record, terms) {
  const haystack = normal(`${record.ref} ${record.heading} ${record.text}`);
  return terms.every(term => haystack.includes(normal(term)));
}

function findFirstIndex(text, terms) {
  const haystack = normal(text);
  const indexes = terms.map(term => haystack.indexOf(normal(term))).filter(i => i >= 0);
  return indexes.length ? Math.min(...indexes) : 0;
}

function highlight(text, terms) {
  let escaped = escapeHtml(text);
  const sorted = [...terms].sort((a, b) => b.length - a.length).filter(Boolean);
  for (const term of sorted) {
    const escapedTerm = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const flags = caseSensitive.checked ? "g" : "gi";
    escaped = escaped.replace(new RegExp(escapedTerm, flags), match => `<mark>${match}</mark>`);
  }
  return escaped;
}

function snippet(record, terms) {
  const text = record.text.replace(/\s+/g, " ").trim();
  const idx = findFirstIndex(text, terms);
  const start = Math.max(0, idx - 180);
  const end = Math.min(text.length, idx + 380);
  const prefix = start > 0 ? "... " : "";
  const suffix = end < text.length ? " ..." : "";
  return prefix + text.slice(start, end) + suffix;
}

function renderSearch() {
  const query = queryInput.value.trim();
  results.innerHTML = "";

  if (query.length < 2) {
    statusEl.textContent = "Type at least two characters to search.";
    return;
  }

  const terms = termsFor(query);
  const source = sourceFilter.value;
  const found = data
    .filter(record => source === "all" || record.sourceId === source)
    .filter(record => matches(record, terms))
    .slice(0, 100);

  statusEl.textContent = found.length
    ? `Showing ${found.length} result${found.length === 1 ? "" : "s"}${found.length === 100 ? " (first 100)" : ""}.`
    : "No exact match found. Try fewer words or turn off exact phrase.";

  for (const record of found) {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector("h3").textContent = `${record.ref}${record.heading && record.heading !== record.ref ? " - " + record.heading : ""}`;
    node.querySelector(".source").textContent = record.source;
    node.querySelector(".snippet").innerHTML = highlight(snippet(record, terms), terms);
    node.querySelector("pre").innerHTML = highlight(record.text, terms);
    node.querySelector(".copy-btn").addEventListener("click", async () => {
      await navigator.clipboard.writeText(`${record.source}\n${record.ref}\n\n${record.text}`);
      node.querySelector(".copy-btn").textContent = "Copied";
      setTimeout(() => node.querySelector(".copy-btn").textContent = "Copy text", 1200);
    });
    results.appendChild(node);
  }
}

renderStaticSections();
setupTabs();
daySelect.addEventListener("change", renderDay);
queryInput.addEventListener("input", renderSearch);
exactPhrase.addEventListener("change", renderSearch);
caseSensitive.addEventListener("change", renderSearch);
sourceFilter.addEventListener("change", renderSearch);
clearBtn.addEventListener("click", () => {
  queryInput.value = "";
  queryInput.focus();
  renderSearch();
});
renderSearch();
