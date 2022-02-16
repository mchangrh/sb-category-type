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
}

//helper
const createMap = (keys, values) =>
  keys.reduce((acc, val, ind) => {
    acc[val] = values[ind];
    return acc;
  }, {});

const CATEGORY_NAMES = Object.keys(CATEGORY_TYPES_MAP)
const TYPES = [...new Set(Object.values(CATEGORY_TYPES_MAP).flat())]
const COLOUR_ARR = [0x00D400, 0x00FFFF, 0x0202ED, 0xCC00FF, 0xFFFF00, 0xFF9900, 0x008FD6, 0xFF1684, 0x7300FF, 0x008A5C];
const EMOJI_ARR = ["<:sponsor:936878146156892240>", "<:intro:936878146391769108>","<:outro:936878146135920700>","<:interaction_reminder:936878145993322557>","<:selfpromo:936878146228207636>","<:nonmusic:936878146186252288>", "<:preview:936878146190471178>","<:highlight:936878146316292106>","<:filler:936878145812971581>","<:exclusive_access:936878145909424179>"];

const EMOJI_MAP = createMap(CATEGORY_NAMES, EMOJI_ARR);
const COLOUR_MAP = createMap(CATEGORY_NAMES, COLOUR_ARR);

// functions
const valiateCategoryType = (category, type) =>
  CATEGORY_TYPES_MAP?.[category]?.includes(type);

module.exports = {
  CATEGORY_TYPES_MAP,
  CATEGORY_NAMES,
  TYPES,
  EMOJI_MAP,
  COLOUR_MAP,
  valiateCategoryType
}