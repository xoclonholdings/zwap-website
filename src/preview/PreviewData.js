export const previewModes = [
  {
    id: "move",
    label: "MOVE",
    accent: "#67F2FF",
    glow: "rgba(103,242,255,0.22)",
    headline: "Move. Earn. Feel the loop.",
    description:
      "Start with motion. Watch progress build in real time and see how everyday activity turns into measurable value.",
  },
  {
    id: "play",
    label: "PLAY",
    accent: "#B486FF",
    glow: "rgba(180,134,255,0.22)",
    headline: "Play. Progress. Stack momentum.",
    description:
      "Jump into the reward loop through gameplay. Participation, completion, and performance all push your progression forward.",
  },
];

export const movePreview = {
  id: "move",
  label: "MOVE",
  accent: "#67F2FF",
  glow: "rgba(103,242,255,0.22)",
  headline: "Move. Earn. Feel the loop.",
  description:
    "Start with motion. Watch progress build in real time and see how everyday activity turns into measurable value.",
  stepGoal: 5000,
  frames: [
    {
      steps: 1240,
      percent: 25,
      reward: "+12 zPts",
      statA: "Stride synced",
      statB: "Daily streak active",
      pace: "Warmup",
    },
    {
      steps: 2480,
      percent: 50,
      reward: "+24 zPts",
      statA: "Pace building",
      statB: "Motion captured",
      pace: "Steady",
    },
    {
      steps: 3240,
      percent: 65,
      reward: "+42 zPts",
      statA: "3,240 steps logged",
      statB: "Daily streak active",
      pace: "Steady",
    },
    {
      steps: 4180,
      percent: 84,
      reward: "+58 zPts",
      statA: "Goal closing in",
      statB: "Sync complete",
      pace: "Strong",
    },
  ],
};

export const playPreviewGames = [
  {
    id: "stackz",
    label: "STACKZ",
    title: "Stackz",
    tagline: "Stack fast. Stay sharp.",
    accent: "#67F2FF",
    glow: "rgba(103,242,255,0.22)",
    reward: "+18 zPts",
    statA: "Precision streak x4",
    statB: "1 run complete",
  },
  {
    id: "breakerz",
    label: "BREAKERZ",
    title: "Breakerz",
    tagline: "Break through for rewards.",
    accent: "#FF8A66",
    glow: "rgba(255,138,102,0.22)",
    reward: "+22 zPts",
    statA: "Wall cleared",
    statB: "Combo chain active",
  },
  {
    id: "pulze",
    label: "PULZE",
    title: "Pulze",
    tagline: "Hit the rhythm. Hold the loop.",
    accent: "#B486FF",
    glow: "rgba(180,134,255,0.22)",
    reward: "+20 zPts",
    statA: "Pulse streak x6",
    statB: "Timing locked in",
  },
  {
    id: "zapman",
    label: "ZAP-MAN",
    title: "Zap-Man",
    tagline: "Run the maze. Catch the charge.",
    accent: "#FFE066",
    glow: "rgba(255,224,102,0.22)",
    reward: "+26 zPts",
    statA: "Maze cleared",
    statB: "Bonus path found",
  },
];

export const playPreview = {
  id: "play",
  label: "PLAY",
  accent: "#B486FF",
  glow: "rgba(180,134,255,0.22)",
  headline: "Play. Progress. Stack momentum.",
  description:
    "Jump into the reward loop through gameplay. Participation, completion, and performance all push your progression forward.",
  games: playPreviewGames,
};