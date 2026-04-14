export function getHeroLabel(mode, content) {
  if (content?.heroLabel) return content.heroLabel;

  switch (mode) {
    case "move":
      return "MOTION BECOMES VALUE";
    case "play":
      return "SKILL INTO PROGRESS";
    case "swap":
      return "VALUE IN MOTION";
    case "shop":
      return "REWARDS MADE USEFUL";
    case "world":
      return "LIVE SYSTEM PRESENCE";
    case "profile":
      return "IDENTITY IN PROGRESS";
    case "audio":
      return "LISTEN WHILE YOU MOVE";
    case "learn":
      return "KNOWLEDGE THAT UNLOCKS";
    default:
      return content?.title || "ZWAP!";
  }
}