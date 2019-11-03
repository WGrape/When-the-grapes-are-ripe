function isPalindrome(str){
	
	if(typeof str !== "string"){

		return false;
	}

	return str.split('').join('') === str ;
}