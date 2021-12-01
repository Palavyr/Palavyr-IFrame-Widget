import { createReducer } from '../../utils/createReducer';
import { QuickButtonsActions } from '../actions/types';

const initialState = {
    quickButtons: [],
};

const quickButtonsReducer = {};

export default (state = initialState, action: QuickButtonsActions) => createReducer(quickButtonsReducer, state, action);
