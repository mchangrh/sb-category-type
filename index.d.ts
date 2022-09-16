export type actionType = "skip" | "mute" | "full" | "poi" | "chapter"
export type categoryType = "sponsor" | "intro" | "outro" | "interaction" | "selfpromo" | "music_offtopic" | "preview" | "poi_highlight" | "filler" | "exclusive_access" | "chapter"
export type discordEmoji = { name: categoryType | string; id: string }
export type colour = string

export const CATEGORY_TYPES_MAP: Record<categoryType, actionType[]>
export const EMOJI_ID_MAP: Record<categoryType, discordEmoji>
export const CATEGORY_LONGNAMES: Record<string, categoryType>

export const CATEGORY_NAMES: categoryType[]
export const TYPES: actionType[]
export const EMOJI_ARR: string[]
export const EMOJI_MAP: Map<categoryType, discordEmoji>
export const COLOUR_MAP: Map<categoryType, colour>