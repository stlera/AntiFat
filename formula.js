function NormalWeight(height, gender){
	if(gender == 0){                                //female
		return (height - 110) * 1.15;
	}
	else{                                           //male
		return (height - 100) * 1.15;
	}
}