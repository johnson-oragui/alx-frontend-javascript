/* eslint-disable new-cap */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

if (require.main === module) {
  const neighborhoodsList = new getNeighborhoodsList();
  const res = neighborhoodsList.addNeighborhood('Noe Valley');
  console.log(res);
}
