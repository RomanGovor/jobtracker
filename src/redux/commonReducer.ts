import { InferActionsTypes } from './store';

export const initialState = {
  isFilterActive: false as boolean,
};

const actionsTypes = {
  TOGGLE_FILTER_FLAG: 'COMMON/TOGGLE_FILTER_FLAG',
};

export const actionsCommon = {
  toggleFilterFlag: (isFilterActive: boolean) =>
    ({ type: actionsTypes.TOGGLE_FILTER_FLAG, isFilterActive } as const),
};

export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsTypes<typeof actionsCommon>;

const commonReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case actionsTypes.TOGGLE_FILTER_FLAG: {
      return {
        ...state,
        isFilterActive: action.isFilterActive,
      };
    }
    default:
      return state;
  }
};

export default commonReducer;
