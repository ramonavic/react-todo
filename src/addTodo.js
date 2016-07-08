import React from 'react';

   class AddTodo extends React.Component {

       onSubmit(event){
           // if we don't call event.preventDefault, the browser will think we want to submit the form
           event.preventDefault();
           this.props.onSubmit(this.refs.description.value);
       }

       render() {
           return (
               <form onSubmit={this.onSubmit.bind(this)}>
                   <label>New Todo</label>
                   <input ref="description" />
                   <button>Add</button>
               </form>
           );
       }
   }

   export default AddTodo;
