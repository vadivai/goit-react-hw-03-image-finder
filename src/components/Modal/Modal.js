// import ReactModal from 'react-modal';

// <div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>

// import css from './Modal.module.css';

// export const Modal = ({ children }) => {
//   // return <div className={css.Overlay}>{children}</div>;
// };

// const styles = {
//   overlay: {
//     backgroundColor: 'orange',
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: 20,
//   },
// };

// ReactModal.setAppElement('#root');

// export const TopicModal = ({ isOpen, onClose, topic }) => {
//   return (
//     <ReactModal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={styles}
//       contentLabel="Topic modal"
//     >
//       <p>
//         <b>{topic}</b>
//       </p>
//       <button onClick={onClose}>Close</button>
//     </ReactModal>
//   );
// };

// Репета на занятии
// import { Component } from 'react';
// import { TopicModal } from 'components/TopicModal';
// import { Topic, Wrapper, MetaWrapper, Text, Button } from './QuizCard.styled';

// export class QuizCard extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     this.setState({
//       isModalOpen: true,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       isModalOpen: false,
//     });
//   };

//   render() {
//     const { isModalOpen } = this.state;
//     const {
//       quiz: { id, topic, level, time, questions },
//       onDelete,
//     } = this.props;

//     return (
//       <Wrapper level={level}>
//         <Topic>{topic}</Topic>
//         <MetaWrapper>
//           <Text>
//             <b>Level:</b> {level}
//           </Text>
//           <Text>
//             <b>Time:</b> {time}
//           </Text>
//           <Text>
//             <b>Questions:</b> {questions}
//           </Text>
//         </MetaWrapper>
//         <div>
//           <Button onClick={() => onDelete(id)}>Delete</Button>
//           <Button onClick={this.openModal}>Edit</Button>
//         </div>
//         <TopicModal
//           isOpen={isModalOpen}
//           onClose={this.closeModal}
//           topic={topic}
//         />
//       </Wrapper>
//     );
//   }
// }
