import { useState } from "react";
import { icon1, icon11, icon2, icon22, icon3, icon33, visa, visa2 } from "../../assets";
import { Button } from "../button";
import design from "./design.module.css";

export const PaymentModal = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("debitCard");
  const [selectedCryptoAddress, setSelectedCryptoAddress] = useState("");

  const cryptoAddresses = [
    { label: "Bitcoin Address", value: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { label: "Ethereum Address", value: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88" },
    { label: "Litecoin Address", value: "LZ7bEZhY4A5Yksv5zZ91o1J5xgNRp1DFp4" },
  ];

  if (!isOpen) return null;

  const handleSwitchToCrypto = () => {
    setPaymentMethod("crypto");
  };

  const handleSwitchToDebitCard = () => {
    setPaymentMethod("debitCard");
  };

  const handleCryptoAddressChange = (event) => {
    setSelectedCryptoAddress(event.target.value);
  };

  return (
    <div className={design.overlay}>
      <div className={design.modal}>
        <h2 id={design.modalh2}>
          {paymentMethod === "debitCard" ? "Choose Debit Card Payment" : "Choose Payment Method"}
        </h2>
        
        <div className={design.paymentCard}>
          <div
            className={`${design.paymentCard1} ${
              paymentMethod === "debitCard" ? design.active : ""
            }`}
            onClick={handleSwitchToDebitCard}
            style={{
              backgroundColor: paymentMethod === "debitCard" ? "#5d3be9" : "#fff",
            }}
          >
            <p style={{
              color: paymentMethod === "crypto" ? "#130C2A" : "#fff",
            }}>Debit Card</p>
            <img
              src={paymentMethod === "debitCard" ? visa : visa2}
              alt="Debit Card"
            />
          </div>
          <div
            className={`${design.paymentCard2} ${
              paymentMethod === "crypto" ? design.active : ""
            }`}
            onClick={handleSwitchToCrypto}
            style={{
              backgroundColor: paymentMethod === "crypto" ? "#5d3be9" : "#fff",
            }}
          >
            <p style={{
              color: paymentMethod === "crypto" ? "#fff" : "#130C2A",
            }}>Crypto</p>
            <div >
            <img
                src={paymentMethod === "crypto" ? icon11 : icon1}
                alt="Crypto Icon 1"
                style={{ padding: "4px" }}
              />
               <img
                src={paymentMethod === "crypto" ? icon22 : icon2}
                alt="Crypto Icon 1"
                style={{ padding: "4px" }}
              />
              <img
                src={paymentMethod === "crypto" ? icon33 : icon3}
                alt="Crypto Icon 1"
                style={{ padding: "4px" }}
              />
            </div>
          </div>
        </div>

        {paymentMethod === "debitCard" && (
          <form>
            <div className={design.formGroup}>
              <p htmlFor="name">Name</p>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Uche Daniels"
              />
            </div>
            <div className={design.formGroup}>
              <p htmlFor="cardNumber">Card Number</p>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                required
                placeholder="9876 9876 9876 9876"
              />
            </div>
            <div className={design.formGroup1}>
              <div className={design.payment}>
                <p htmlFor="expiryDate">Expiration</p>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  required
                  placeholder="09/25"
                />
              </div>
              <div className={design.payment}>
                <p htmlFor="cvv">CVV</p>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  required
                  placeholder="***"
                />
              </div>
            </div>
            <div className={design.payBTN}>
              <Button
                type="submit"
                className={design.payButton}
                content="Make Payment"
              />
            </div>
          </form>
        )}

        {paymentMethod === "crypto" && (
          <form>
            <div className={design.formGroup}>
              <select 
                id="cryptoAddress"
                name="cryptoAddress"
                value={selectedCryptoAddress}
                onChange={handleCryptoAddressChange}
                required
              >
                <option value="" disabled >
                Select Crypto
                </option>
                {cryptoAddresses.map((address) => (
                  <option key={address.value} value={address.value}>
                    {address.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={design.formGroup} id={design.cryptoPaymen}>
              <input
                type="text"
                id="cryptoAmount"
                name="cryptoAmount"
                required
                placeholder="Wallet Address"
              />
            </div>
            <div className={design.payBTN}>
              <Button
                type="submit"
                className={design.payButton}
                content="Pay with Crypto"
              />
            </div>
          </form>
        )}

        <div id={design.closeBTN}>
              <Button
                onClick={onClose}
                className={design.closeButton}
                content="close"
              />
            </div>
      </div>
    </div>
  );
};
