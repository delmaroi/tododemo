import { createSelector } from 'reselect';

const selectExampleSurveyDomain = (state) => state.get('exampleSurveyPage');

const selectExampleSurveyPage = createSelector(
  selectExampleSurveyDomain,
  (substate) => substate.toJS()
);

export default selectExampleSurveyPage;
export {
  selectExampleSurveyDomain,
};
