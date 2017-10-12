import { createSelector } from 'reselect';
import _camelCase from 'lodash/camelCase';

const selectBuiltDomain = (state) => state.get('built');

const selectBuiltNavigation = createSelector(
  selectBuiltDomain,
  (substate) => {
    const navigation = substate.get('navigation').toJS();

    return mapEntriesObjectsToArrays(navigation);
  }
);

function mapEntriesObjectsToArrays(navigation) {
  const processedNavigation = { ...navigation };

  Object.keys(processedNavigation).forEach((categoryKey) => {
    const category = navigation[categoryKey];

    processedNavigation[categoryKey] = mapEntriesObjectToArray(category);
  });

  return processedNavigation;
}

function mapEntriesObjectToArray(category) {
  return {
    ...category,
    entries: Object.values(category.entries),
  };
}

const selectBuiltComponents = createSelector(
  selectBuiltDomain,
  (substate) => addKeysToPropsCategories(substate.getIn(['navigation', 'components', 'entries'])),
);

function addKeysToPropsCategories(components) {
  let result = components;

  components
    .keySeq()
    .forEach((key) => {
      const propsCategories = result.getIn([key, 'propsCategories']);

      if (propsCategories) {
        result = result.setIn([key, 'propsCategories'], propsCategories.map((propsCategory) => {
          const propsCategoryKey = _camelCase(propsCategory.get('name'));
          const propsItems = propsCategory.get('propsItems').map((propsItem, index) => propsItem.set('key', `${propsCategoryKey}-${index}`));

          return propsCategory
            .merge({
              key: propsCategoryKey,
              propsItems,
            });
        }));
      }
    });

  return result.toJS();
}

export default selectBuiltDomain;
export {
  selectBuiltDomain,
  selectBuiltNavigation,
  selectBuiltComponents,
};
