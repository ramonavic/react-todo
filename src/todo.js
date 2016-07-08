import React from 'react';

class Todo extends React.Component {
  constructor() {
    super()
      // this.state {
      //   checkedBox: this.props.checkbox
      // };
  }
    //
    toggleChecked() {
      console.log(this.props.checkbox)
     }

  render() {
    console.log(this.props.description);
    console.log(this.props.checkbox);


      return (

        // <label for={this.state.id}>
        //   <EditableTextField value={this.state.description} isEditable={!this.state.checkbox} />
        // </label>
        <div>
          <p> {this.props.description}<input type="checkbox" checked={this.props.checkbox} onChange={this.toggleChecked}/>   </p>
        </div>
      );
    }

}
export default Todo;
