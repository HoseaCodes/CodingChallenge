
function powerset(array, idx = null) {
    if (idx === null) {
		idx = array.length -1
	}
	if (idx < 0 ) {
		return [[]]
	}
	const ele = array[idx];
	const subsets = powerset(array, idx - 1);
	const length = subsets.length
	for (let i = 0; i < length; i++){
		const currentSubset = subsets[i];
		subsets.push(currentSubset.concat(ele))
	}
	return subsets;
}

console.log(powerset([1,2,3]))