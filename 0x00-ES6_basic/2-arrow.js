export default function getNeighborhoodsList() {
  	var sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const addNeighborhood = (newNeighborhood) => {
    		sanFranciscoNeighborhoods.push(newNeighborhood);
		return sanFranciscoNeighborhoods;
	};
}
