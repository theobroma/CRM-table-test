import * as React from 'react';
import * as classNames from 'classnames';

//class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState>
class TextInput extends React.Component<any, any> {
  static defaultProps = {
    text: '',
    placeholder: 'cell input',
    editing: false
  };

  state = {
    //text: '123'
    text: this.props.text
  };

  handleSubmit = (e: any) => {
    if (e.which === 13) {
      this.props.onSave();
    }
  };

  handleChange(e: any) {
    //console.log('handleChange');
    const text = e.target.value;
    this.setState({ text: text });
    this.props.handleChange(text);
  }

  render() {
    return (
      <React.Fragment>
        <input
          className={classNames({
            edit: this.props.editing
          })}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        {/* <pre>{JSON.stringify(this.state, null, 4)}</pre> */}
      </React.Fragment>
    );
  }
}

export default TextInput;
