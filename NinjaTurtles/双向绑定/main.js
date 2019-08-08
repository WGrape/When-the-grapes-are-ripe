// 实现了实时预览，但是 onpropertychange 仅支持 IE
domInput.onpropertychange = function(e){

	domText.innerText = e.target.value;
}

// 未实现实时预览，只有当输入框失焦时才能起作用
domInput.onchange = function(e){

	domText.innerText = e.target.value;
}

// 实现了实时预览，但是非 IE ，如 Chrome 可以正常使用
domInput.addEventListener("input",function(e){

	domText.innerText = e.target.value;
});