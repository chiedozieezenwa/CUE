// import { icon1, icon2, icon3, visa } from "../../assets";
// import design from "./design.module.css"


//  export const PaymentModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; 

//   return (
//     <div className={design.overlay}>
//       <div className={design.modal}>
//         <h2 id={design.modalh2}>Choose Payment Method</h2>
//         <div className={design.paymentCard}>
//             <div className={design.paymentCard1}>
//                   <p>Debit Card</p>
//                   <img src={visa} alt="" />
//             </div>
//             <div className={design.paymentCard2}>
//                   <p>Crypto</p>
//                   <div className={design.payIcons}>
//                   <img src={icon1} alt="" className={design.payIcons}/>
//                   <img src={icon2} alt="" className={design.payIcons}/>
//                   <img src={icon3} alt="" className={design.payIcons}/>
//                   </div>
//             </div>
//         </div>
//         <form>
//           <div className={design.formGroup}>
//             <p htmlFor="cardNumber" >Name</p>
//             <input type="text" id="cardNumber" name="cardNumber" required placeholder="Uche Daniels" />
//           </div>
//           <div className={design.formGroup}>
//             <p htmlFor="expiryDate">Card Number</p>
//             <input type="text" id="expiryDate" name="expiryDate" required placeholder="9876 9876 9876 9876" />
//           </div>
//           <div className={design.formGroup1}>
//             <div className={design.payment}>

//             <p htmlFor="cvv">Expiration</p>
//             <input type="text" id="cvv" name="cvv" required placeholder="09/25"/>
//             </div>
//             <div  className={design.payment}>

//             <p htmlFor="cvv">CVV</p>
//             <input type="text" id="cvv" name="cvv" required placeholder="***"/>
//             </div>
//           </div>
//           <div className={design.payBTN}>
//           <button type="submit" className={design.payButton}>Make Payment</button>
//           </div>
//         </form>
//         <button onClick={onClose} className={design.closeButton}>Close</button>
//       </div>
//     </div>
//   );
// };


