import { InitialStateType as CommonStateType } from '../../redux/commonReducer';
import { jogType } from '../../types';

export type PropsTypeJogs = {
  isFilterActive: boolean;
  jogs: jogType[];
  isAwait: boolean;
  setFromDate: any;
  setToDate: any;
  isFiltersWriting: boolean;
};

export type mapStateType = {
  common: CommonStateType;
};

export type PropsTypeContainer = mapStateType;
