import localForage from 'localforage';

const songBirdLocalStore = localForage.createInstance({
  name: 'songBirdLocalStore',
});

export const loadState = () => {
  return songBirdLocalStore.getItem('songBirdState')
    .then((state) => state)
    .catch(() => undefined);
};

export const saveState = (state) => {
  songBirdLocalStore.setItem('songBirdState', state);
};

export default songBirdLocalStore;
