import * as React from 'react';
import { Switch } from '@alifd/next';
import './style.less';

class LowcodeSetterUiSetter extends React.Component<{
  onChange: (any) => void,
  value: boolean,
  defaultValue: boolean,
}> {
  static displayName = 'LowcodeSetterUiSetter';

  render() {
    const { onChange, value, defaultValue } = this.props;
    const props: any = {
      defaultChecked: defaultValue,
      onChange,
    };
    if (typeof value !== 'undefined') {
      props.checked = value;
    }
    return <Switch {...props} className="lowcode-setter-ui-setter" />;
  }
}

export default LowcodeSetterUiSetter;
