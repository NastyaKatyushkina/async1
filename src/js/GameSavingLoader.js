import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data)).then((options) => {
      const { id, created, userInfo } = { ...JSON.parse(options) };
      return new GameSaving(id, created, userInfo);
    });
  }
}