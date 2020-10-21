export const DEFAULT_PLAYER = {
  name: '',
  points: 0,
};

export const generateDefPlayer = id => {
  return {
    ...DEFAULT_PLAYER,
    id,
  };
};

export const DEFAULT_SETTINGS = {
  points: 10,
  length: 40,
  isValid: undefined,
  teams: [generateDefPlayer(0), generateDefPlayer(1)],
};
