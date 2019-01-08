// import React, { Component} from 'react';
// import Styles from './Authentication.module.css';

// export default class Tab extends Component {
//     state = { 
//         activeTabIndex: 0,
//     };
//     changeActiveTabIndex =idx =>{
//         this.setState({activeTabIndex: idx, })
//     }
//     render(){
//         const {activeTabIndex} = this.state;
//         const activeTabContect = items[activeTabIndex].contend;
//         const {items} = this.props;

//         return(
//             <div className={Styles.container}>
//                 <div className={Styles.active}>
//                      {items.map((item, idx) =>(
//                         <button 
//                         type='button' 
//                         key={item.lebal} 
//                         onClick = {()=> this.changeActiveTabIndex(idx)}
//                         >
//                        {item.lebal}
//                         </button>
//                         ))}
//                   </div> 
                 
//                 </div>
//         )
//     }
// } 