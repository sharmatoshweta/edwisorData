function replace(str){
	return str.replace(/@/g, "#");
}
console.log(replace("@google"));