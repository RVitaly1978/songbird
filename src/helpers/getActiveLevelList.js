export default function getActiveLevelList(data, id) {
  return data.filter((dataItem) => dataItem.id === id)[0];
}
