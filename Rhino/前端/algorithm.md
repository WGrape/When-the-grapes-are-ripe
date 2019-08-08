### 参考
- [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)

### 怎么给一个字符数组按字典顺序排序，要求时间复杂度O(n)？

### 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素？

```javascript
var arr = [4,7,2,9,2,7,4,8,3,8,3] ;

var target;
arr.some(function( value, index, arr ){

	if( arr.indexOf( value ) === arr.lastIndexOf( value ) ){

		target = value;
		return true;
	}
});
```

