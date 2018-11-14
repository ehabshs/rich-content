import createToolbar from './toolbar';
import { createBasePlugin, mergeStyles } from 'wix-rich-content-common';

import { BUTTON_TYPE } from './constants';

import Styles from '../statics/styles/default-styles.scss';
import ButtonComponent from './components/button-component';

const createButtonPlugin = (config = {}) => {
  const type = BUTTON_TYPE;
  const { helpers, theme, t, [type]: settings = {}, ...rest } = config;
  const styles = mergeStyles({ styles: Styles, theme });
  return createBasePlugin({
    component: ButtonComponent,
    settings,
    theme,
    type: BUTTON_TYPE,
    toolbar: createToolbar({
      helpers,
      styles,
      theme,
      t
    }),
    helpers,
    t,
    ...rest
  });
};

export { createButtonPlugin, BUTTON_TYPE };
