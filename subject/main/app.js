function distance(first, second){
	//TODO: implementați funcția
	if(!first.typeof(Array())){throw new Error("InvalidType")}
	else if(!second.typeof(Array())){throw new Error("InvalidType")}
	var nr=0
	for(let i in first){
		for(let j in second){
			
			if(first[i]!=first[j]){
				nr++
				
			}
		}
	}
	return nr
}


//module.exports.distance = distance