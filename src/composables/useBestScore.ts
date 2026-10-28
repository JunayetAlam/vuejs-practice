import { ref } from "vue";

const load = (key: string) => {
  try {
    return Number(localStorage.getItem(key)) || 0;
  } catch {
    return 0;
  }
};

const save = (key: string, score: number) => {
  try {
    localStorage.setItem(key, String(score));
  } catch {
    // storage blocked (e.g. private mode) — keep the score in memory only
  }
};

export const useBestScore = (key = "counter-best-score") => {
  const bestScore = ref(load(key));

  // returns true when the score is a new best
  const submitScore = (score: number) => {
    if (score <= bestScore.value) return false;
    bestScore.value = score;
    save(key, score);
    return true;
  };

  return { bestScore, submitScore };
};
