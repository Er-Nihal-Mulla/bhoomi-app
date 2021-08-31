import { GET_COMMUNITY } from "../Actions/types";

const initialState = [  ];

const communityReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_COMMUNITY:

            return payload;
        default:
            return state;
    }
}

export default communityReducer;