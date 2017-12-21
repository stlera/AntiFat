/** 
 * Дізнатись нормальну вагу.
 * @author Валерія Степаніщева <https://github.com/stlera>
 * @param {number} height Зріст користувача.
 * @param {number} gender Стать користувача.
 * @returns {number} Норма ваги.
 */
function NormalWeight(height, gender){
	if(gender == 0){                                //female
		return (height - 110) * 1.15;
	}
	else{                                           //male
		return (height - 100) * 1.15;
	}
}

/** 
 * Доцільність продовження дієти.
 * @author Валерія Степаніщева <https://github.com/stlera>
 * @param {number} currentWeight Поточна вага користувача.
 * @param {number} beginWeight Початкова вага користувача.
 * @param {number} wishWeight Бажана вага користувача.
 * @param {number} height Зріст користувача.
 * @param {number} gender Стать користувача.
 * @returns {boolean} Продовжувати дієту чи ні.
 */
function WeightControl(currentWeight, beginWeight, wishWeight, height, gender){
	var normalWeight = NormalWeight(height, gender);
	
	var leftWeight = currentWeight - wishWeight;
	
	if(currentWeight <= normalWeight) return false; //should stop weight lost	
	else if(leftWeight <= 0) return false;          //should stop weight lost
	else return true;                               //should continue	
}