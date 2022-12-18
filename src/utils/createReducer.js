/**
 * Creates a reducer from a map of handlers
 * @param  {object} initialState The initial state.
 * @param  {object} handlers     A map of action types and handlers.
 * @return {object}              A reducer based on the given parameters.
 */
 export default function createReducer(initialState, handlers) {
	return (state = initialState, action) => {
		const reducer = handlers[action.type];
		return reducer ? reducer(state, action.payload, action.meta) : state;
	};
}