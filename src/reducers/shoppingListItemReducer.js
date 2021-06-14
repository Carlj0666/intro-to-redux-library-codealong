export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	console.log(action)
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items lengths', state.items.length)
			console.log('Updating state.items length to percentages', state.items.length + 1)
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log('Initial state.items length: percents', state.items.length)
			return state;
	}
}
