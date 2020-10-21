import { useCallback, useContext } from 'react';

import GameSettingsContext from '../../../../../contexts/GameSettingsContext';
import { generateDefPlayer } from '../../../../../utils/constants/gameSettings';

const useTeamsConfig = () => {
  const {
    gameSettings: { teams, isValid },
    changeSettings,
  } = useContext(GameSettingsContext);

  const changePlayerName = useCallback(
    (index, value) => {
      let changedTeams = [...teams];
      changedTeams[index] = {
        ...changedTeams[index],
        name: value,
      };
      changeSettings('teams', changedTeams);
    },
    [changeSettings, teams],
  );

  const modifyTeamLength = useCallback(
    (removeIndex = -1) => {
      // eslint-disable-next-line curly
      if (teams.length < 2) return;
      let changedTeams = [...teams];
      if (removeIndex === -1) {
        changedTeams.push(generateDefPlayer(teams.length));
      } else {
        changedTeams.splice(removeIndex, 1);
      }
      changeSettings('teams', changedTeams);
    },
    [changeSettings, teams],
  );

  return {
    teams,
    changePlayerName,
    modifyTeamLength,
    isInvalid: isValid === false,
  };
};

export default useTeamsConfig;
