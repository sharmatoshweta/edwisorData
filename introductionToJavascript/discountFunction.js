function discount(totalPrice,liveSession,recordedSession){
	return (totalPrice - (recordedSession * 100));
}
console.log(discount("20000","25","3"));