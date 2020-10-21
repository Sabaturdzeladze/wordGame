import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { GAME } from '../utils/constants/game';
import { DEFAULT_PLAYER } from '../utils/constants/game';
import WORDS from '../utils/constants/gameWords';
import { getRandomInt } from '../utils/helpers/game';
import GameSettingsContext from './GameSettingsContext';

const GameContext = React.createContext(null);

export default GameContext;

export const GameProvider = ({ children }) => {
  const { gameSettings } = useContext(GameSettingsContext);
  const [game, setGame] = useState(GAME);

  const startGame = useCallback(() => {
    const serializedPlayers = gameSettings.teams
      .filter(team => !!team.name)
      .map(player => ({
        ...player,
        ...DEFAULT_PLAYER,
      }));
    const newGame = {
      ...GAME,
      winPoints: gameSettings.points,
      gameLength: gameSettings.length,
      players: serializedPlayers,
      currentPlayer: {
        ...serializedPlayers[0],
        roundPoints: 0,
      },
    };
    setGame(newGame);
  }, [gameSettings]);

  const sortByDesc = useCallback((a, b) => b?.totalPoints - a?.totalPoints, []);

  const checkGameFinish = useCallback(
    (id, totalPoints, winPoints, isLast, players) => {
      // eslint-disable-next-line curly
      if (!isLast) return false;
      let checkedPlayers = players?.map(pl => {
        if (pl.id === id) {
          return {
            ...pl,
            totalPoints,
          };
        }
        return { ...pl };
      });
      checkedPlayers.sort(sortByDesc);
      let overWinPoints = checkedPlayers[0].totalPoints >= winPoints;
      // eslint-disable-next-line curly
      if (!overWinPoints) return false;
      return (
        checkedPlayers?.[0]?.totalPoints > checkedPlayers?.[1]?.totalPoints
      );
    },
    [sortByDesc],
  );

  const roundFinish = useCallback(() => {
    setGame(prevGame => {
      const { currentPlayer: curr, players, round, winPoints } = prevGame;
      const currPlayerIndex = players.findIndex(pl => pl.id === curr.id);
      const isLast = currPlayerIndex + 1 === players.length;
      const nextPlayerIndex = isLast ? 0 : currPlayerIndex + 1;
      const nextPlayer = players[nextPlayerIndex];
      const { roundPoints, totalPoints } = curr;
      const updatedPoints = roundPoints + totalPoints;

      return {
        ...prevGame,
        isFinished: checkGameFinish(
          curr.id,
          updatedPoints,
          winPoints,
          isLast,
          players,
        ),
        round: isLast ? round + 1 : round,
        players: players.map(pl => {
          // eslint-disable-next-line curly
          if (pl.id !== curr.id) return pl;
          return {
            ...pl,
            totalPoints: pl.totalPoints + roundPoints,
            rounds: [...pl.rounds, roundPoints],
          };
        }),
        currentPlayer: {
          ...nextPlayer,
          roundPoints: 0,
        },
      };
    });
  }, [checkGameFinish]);

  const increasePoints = useCallback((point = 1) => {
    setGame(prevGame => {
      const { currentPlayer: curr } = prevGame;
      const roundPoints = curr.roundPoints + point;
      return {
        ...prevGame,
        currentPlayer: {
          ...curr,
          roundPoints,
        },
      };
    });
  }, []);

  const winner = useMemo(() => {
    const { players, isFinished } = game;
    // eslint-disable-next-line curly
    if (!isFinished) return;
    players.sort(sortByDesc);
    return players[0];
  }, [game, sortByDesc]);

  const generateWord = useCallback((usedWords, generatedNums) => {
    const randomNum = getRandomInt(0, WORDS.length - 1);
    const word = WORDS[randomNum];
    if (usedWords.hasOwnProperty(word) || generatedNums.includes(randomNum)) {
      return generateWord(usedWords, generatedNums);
    }

    return {
      num: randomNum,
      word,
    };
  }, []);

  const generateWords = useCallback(
    usedWords => {
      // eslint-disable-next-line curly
      if (Object.keys(usedWords).length === usedWords.length) return [];
      const words = [];
      const generatedNums = [];
      for (let i = 0; i < 5; i++) {
        const { word, num } = generateWord(usedWords, generatedNums);
        words.push(word);
        generatedNums.push(num);
      }
      return words;
    },
    [generateWord],
  );

  useEffect(() => {
    // eslint-disable-next-line curly
    if (game?.currentPlayer?.roundPoints % 5 !== 0) return;

    setGame(g => {
      const generatedWords = generateWords(g?.usedWords);
      const usedWords = {};
      for (const word of generatedWords) {
        usedWords[word] = 1;
      }

      return {
        ...g,
        words: generatedWords,
        usedWords,
      };
    });
  }, [game?.currentPlayer?.roundPoints, generateWords]);

  const state = {
    game,
    winner,
    setGame,
    startGame,
    roundFinish,
    increasePoints,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};
