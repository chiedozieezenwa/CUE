// PaymentReceipt.jsx
import React, { useEffect, useState } from 'react';

const PaymentReceipt = ({ reference }) => {
    const [paymentDetails, setPaymentDetails] = useState(null);

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                const response = await fetch(`https://cue-backend.onrender.com/api/v1/payments/paymentDetails`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch payment details.");
                }

                const data = await response.json();
                console.log("Payment details fetched successfully:", data);
                setPaymentDetails(data.data); // Assuming data.data contains payment details
            } catch (error) {
                console.error("Error fetching payment details:", error);
            }
        };

        fetchPaymentDetails();
    }, [reference]);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const detailsStyle = {
        fontSize: '18px',
        lineHeight: '1.6',
    };

    const labelStyle = {
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Payment Receipt</h1>
            {paymentDetails ? (
                <div style={detailsStyle}>
                    <p><span style={labelStyle}>Full Name:</span> {paymentDetails.full_name}</p>
                    <p><span style={labelStyle}>Email:</span> {paymentDetails.email}</p>
                    <p><span style={labelStyle}>Amount:</span> {paymentDetails.amount}</p>
                    <p><span style={labelStyle}>Status:</span> {paymentDetails.status}</p>
                    <p><span style={labelStyle}>Reference:</span> {paymentDetails.reference}</p>
                </div>
            ) : (
                <p>Loading payment details...</p>
            )}
        </div>
    );
};

export default PaymentReceipt;
