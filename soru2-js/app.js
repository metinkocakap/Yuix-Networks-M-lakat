const quicksort = (array) => {
	if (array.length < 2) {
		return array;
	} 
	else {
    		
		const temp = Math.floor(Math.random() * array.length);
		const pivot = array[temp];
	
		const low = array.filter((value, index) => {
			const isPivot = index === temp;
			return !isPivot && (value <= pivot);
		});
		const hight = array.filter(value => value > pivot);
		
		return [...quicksort(low), pivot, ...quicksort(hight)];
	}
};

const array = [7, 103, 11, 5, 9, 58, 42];
console.log(quicksort(array));