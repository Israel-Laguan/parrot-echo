import { NEW_POST } from "../actions/type";

const initialState = {
	items: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case NEW_POST:
			console.log("Post reducer Called");
			return {
				...state,
				items: [action.payload, ...state.items]
			};

		default:
			return state;
	}
}
