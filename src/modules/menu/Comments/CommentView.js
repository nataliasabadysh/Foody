import React from 'react';
import Styles from './styles.module.css';


const CommentsList = ({ notes, onDeleteNote }) =>(
 <ul className={ Styles.ul}>
   {notes.map(({id, text}) => (
     <li className={ Styles.li} key ={id}>
       <span>{text}</span>
       <button className={ Styles.btn} onClick={ () => onDeleteNote(id) }>Delete</button>
     </li>
       ))}
 </ul>

);
export default CommentsList;