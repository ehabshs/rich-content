import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mergeStyles, AccessibilityListener, normalizeInitialState } from 'wix-rich-content-common';
import styles from './Styles/rich-content-viewer.scss';
import Preview from './Preview';

export default class RichContentViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raw: this.getInitialState(props.initialState),
    };
    this.styles = mergeStyles({ styles, theme: props.theme });
  }

  getInitialState = initialState => initialState ? normalizeInitialState(initialState) : {};

  componentWillReceiveProps(nextProps) {
    if (this.props.initialState !== nextProps.initialState) {
      this.setState({ raw: this.getInitialState(nextProps.initialState) });
    }
  }

  render() {
    const { styles } = this;
    const { theme, isMobile } = this.props;
    const wrapperClassName = classNames(styles.wrapper, {
      [styles.desktop]: !this.props.platform || this.props.platform === 'desktop',
    });
    return (
      <div className={wrapperClassName}>
        <div className={styles.editor}>
          <Preview raw={this.state.raw} typeMappers={this.props.typeMappers} theme={theme} isMobile={isMobile}/>
        </div>
        <AccessibilityListener isMobile={this.props.isMobile}/>
      </div>
    );
  }
}

RichContentViewer.propTypes = {
  initialState: PropTypes.object,
  isMobile: PropTypes.bool,
  helpers: PropTypes.object,
  platform: PropTypes.string,
  typeMappers: PropTypes.arrayOf(PropTypes.func).isRequired,
  theme: PropTypes.object,
};
