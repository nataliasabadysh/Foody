import React, {Component } from 'react';
import v4 from 'uuid/v4';
 import CommentView from './CommentView';
 import CommentEditor from './CommentEditor';

 // Instruments
 import Styles from './styles.module.css';



 export default class Comments extends Component{
    state = {
      notes: [],
    };

    handleAddNote = text => {
        this.setState((prevState)=>({
          notes:[
            { text, id: v4()},
            ...prevState.notes ],
    
        }));
      };

      handleDeleteNode = id =>{
        this.setState((prevState) => ({
          notes: prevState.notes.filter(note=> note.id !== id )
        }))
      };

    render(){
        const { notes } = this.state;
        return(
            <div className={Styles.CommentContainer}>
                 <h1>Comments</h1>

            <CommentView  notes={notes} onDeleteNote = {this.handleDeleteNode }/>
            <CommentEditor onSubmit={this.handleAddNote} />
                </div>
        )
    }
}