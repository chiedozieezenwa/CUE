// src/pages/PaymentConfirmation.js

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const reference = queryParams.get('reference');

        if (reference) {
            fetch(`https://cue-backend.onrender.com/api/v1/payments/createPayment?reference=${reference}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === "Success") {
                        navigate('/payment-receipt');
                    } else {
                        setError("Failed to create payment record.");
                        setLoading(false);
                    }
                })
                .catch(error => {
                    console.error("Error creating payment record:", error);
                    setError("An error occurred while processing your payment.");
                    setLoading(false);
                });
        } else {
            setError("No payment reference found.");
            setLoading(false);
        }
    }, [navigate]);

    const handleRetry = () => {
        // Redirect to the payment page or cart page to retry the process
        navigate('/retail-cart');
    };

    const handleBackToCart = () => {
        // Navigate back to the cart page to start over
        navigate('/retail-cart');
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
    };

    const loadingStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const spinnerStyle = {
        border: '8px solid #f3f3f3',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
    };

    const errorStyle = {
        color: '#ff0000',
    };

    const buttonStyle = {
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    };

    return (
        <div style={containerStyle}>
            {loading ? (
                <div style={loadingStyle}>
                    <h1>Payment Confirmation</h1>
                    <p>We are processing your payment. Please wait...</p>
                    {/* Include a loading spinner or animation */}
                    <div style={spinnerStyle}></div>
                </div>
            ) : (
                <div style={errorStyle}>
                    <h1>Payment Confirmation</h1>
                    <p>{error}</p>
                    <div style={buttonContainerStyle}>
                        <button style={buttonStyle} onClick={handleRetry}>
                            Retry Payment
                        </button>
                        <button style={buttonStyle} onClick={handleBackToCart}>
                            Go Back to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentConfirmation;
