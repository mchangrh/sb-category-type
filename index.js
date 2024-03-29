const CATEGORY_TYPES_MAP = {
  "sponsor": ["skip", "mute", "full"],
  "intro": ["skip", "mute"],
  "outro": ["skip", "mute"],
  "interaction": ["skip", "mute"],
  "selfpromo": ["skip", "mute", "full"],
  "music_offtopic": ["skip"],
  "preview": ["skip", "mute"],
  "poi_highlight": ["poi"],
  "filler": ["skip", "mute"],
  "exclusive_access": ["full"],
  "chapter": ["chapter"]
}
const EMOJI_ID_MAP = {
  sponsor: { name: "sponsor", id: "936878146156892240" },
  intro: { name: "intro", id: "936878146391769108" },
  outro: { name: "outro", id: "936878146135920700" },
  interaction: { name: "interaction_reminder", id: "936878145993322557" },
  selfpromo: { name: "selfpromo", id: "936878146228207636" },
  music_offtopic: { name: "nonmusic", id: "936878146186252288" },
  preview: { name: "preview", id: "936878146190471178" },
  poi_highlight: { name: "highlight", id: "936878146316292106" },
  filler: { name: "filler", id: "936878145812971581" },
  exclusive_access: { name: "exclusive_access", id: "936878145909424179" },
  chapter: { name: "chapter", id: "1020464950969372793" }
};
const CATEGORY_LONGNAMES = {
  "Sponsor": "sponsor",
  "Intermission/ Intro Animation": "intro",
  "Endcards/ Outro": "outro",
  "Interaction Reminder": "interaction",
  "Unpaid/ Self Promotion": "selfpromo",
  "Music: Non-Music": "music_offtopic",
  "Preview/ Recap": "preview",
  "Highlight": "poi_highlight",
  "Filler": "filler",
  "Exclusive Access": "exclusive_access",
  "Chapter": "chapter"
}

//helper
const createMap = (keys, values) =>
  keys.reduce((acc, val, ind) => {
    acc[val] = values[ind];
    return acc;
  }, {});

const CATEGORY_NAMES = Object.keys(CATEGORY_TYPES_MAP)
const TYPES = [...new Set(Object.values(CATEGORY_TYPES_MAP).flat())]
const COLOUR_ARR = [0x00D400, 0x00FFFF, 0x0202ED, 0xCC00FF, 0xFFFF00, 0xFF9900, 0x008FD6, 0xFF1684, 0x7300FF, 0x008A5C, 0xBDFFFB];
const EMOJI_ARR = Object.values(EMOJI_ID_MAP).map((o) => `<:${o.name}:${o.id}>`);
const EMOJI_MAP = createMap(CATEGORY_NAMES, EMOJI_ARR);
const COLOUR_MAP = createMap(CATEGORY_NAMES, COLOUR_ARR);

module.exports = {
  CATEGORY_TYPES_MAP,
  CATEGORY_NAMES,
  CATEGORY_LONGNAMES,
  TYPES,
  EMOJI_ID_MAP,
  EMOJI_MAP,
  COLOUR_MAP
}