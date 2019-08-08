/*
 * action 类型
 */

export const CLICK_MENU_BUTTON = 'CLICK_MENU_BUTTON';

/*
 * action 创建函数
 */

export function clickMenuButtonAction() {

	// 里面几乎不用写其他东西了
	// 异步处理，或者其他处理可以写到这里

	// 最后返回一个有 type 属性的对象, 表示这个是什么 action
  	return { type: CLICK_MENU_BUTTON }
}

/*-------------下一个 Action-----------------------------*/




