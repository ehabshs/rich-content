import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import { mergeStyles } from 'wix-rich-content-common';
import PickedIcon from './../icons/pickedIcon';
import styles from '../../statics/styles/button-sample.scss';

class ButtonSample extends PureComponent {

  constructor(props) {
    super(props);
    this.styles = mergeStyles({ styles, theme: props.theme });
    const { style } = this.props;
    this.state = {
      buttonStyle: style || {},
      index: this.props.i,
    };
  }

  onClick = () => {
    this.props.onClickButton(this.state.index);
    this.setState({ buttonStyle: this.props.style });
  }


  render() {
    const { style, active } = this.props;
    const { styles } = this;
    const { buttonObj } = this.props;
    const { buttonStyle } = this.state;
    const propsStyle = {
      backgroundColor: buttonObj.backgroundColor,
      borderColor: buttonObj.borderColor,
      textColor: buttonObj.textColor,
      borderRadius: buttonObj.borderRadius + 'px',
      borderWidth: buttonObj.borderWidth + 'px',
    };
    const stateStyle = {
      backgroundColor: buttonStyle.background,
      borderColor: buttonStyle.borderColor,
      textColor: buttonStyle.color,
      borderRadius: buttonStyle.borderRadius,
      borderWidth: buttonStyle.borderWidth,
    };
    const onStyleChanged = isEqual(propsStyle, stateStyle);
    return (
      <div className={styles.button_sample_container}>
        {active && onStyleChanged &&
          <PickedIcon className={styles.picked} />
        }
        <button onClick={this.onClick} style={{ ...style }} className={styles.button_sample}>
          Click Me!
        </button>
      </div>
    );
  }
}

ButtonSample.propTypes = {
  style: PropTypes.object,
  theme: PropTypes.object,
  componentData: PropTypes.object,
  pubsub: PropTypes.object,
  onConfirm: PropTypes.func,
  onClick: PropTypes.func,
  onClickButton: PropTypes.func,
  active: PropTypes.bool,
  i: PropTypes.number,
  buttonObj: PropTypes.object,

};

export default ButtonSample;
