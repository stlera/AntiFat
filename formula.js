function NormalWeight(height, gender){
	if(gender == 0){                                //female
		return (height - 110) * 1.15;
	}
	else{                                           //male
		return (height - 100) * 1.15;
	}
}

function WeightControl(currentWeight, beginWeight, wishWeight, height, gender){
	var normalWeight = NormalWeight(height, gender);
	
	var leftWeight = currentWeight - wishWeight;
	
	if(currentWeight <= normalWeight) return false; //should stop weight lost	
	else if(leftWeight <= 0) return false;          //should stop weight lost
	else return true;                               //should continue	
}