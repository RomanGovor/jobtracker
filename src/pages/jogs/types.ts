import { InitialStateType as CommonStateType } from '../../redux/commonReducer';

export type PropsTypeJogs = {
  isFilterActive: boolean;
};

export type mapStateType = {
  common: CommonStateType;
};

export type PropsTypeContainer = mapStateType;
