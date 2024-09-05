import Web3 from "web3";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./config";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export const ReviewRating = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");
  const [serviceProvider, setServiceProvider] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [trustLevel, setTrustLevel] = useState("");
  const cachedReviews = useRef(new Map()); // Caching reviews for optimization

  useEffect(() => {
    const initWeb3 = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          const contractInstance = new web3Instance.eth.Contract(
            CONTRACT_ABI,
            CONTRACT_ADDRESS
          );
          setContract(contractInstance);

          window.ethereum.on("accountsChanged", handleAccountsChanged);
          window.ethereum.on("chainChanged", handleChainChanged);
        } catch (error) {
          console.error("Failed to connect to MetaMask", error);
          setStatus("Failed to connect to MetaMask. Please try again.");
        }
      } else {
        setStatus("Please install MetaMask to use this application.");
      }
    };

    initWeb3();

    return () => {
      if (window.ethereum) {
        // Check if window.ethereum is defined
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    setAccount(accounts[0]);
    setStatus("Account changed. Please refresh the page.");
  };

  const handleChainChanged = () => {
    window.location.reload();
  };

  const fetchReviews = useCallback(
    async (address) => {
      if (!contract || !address) return;

      setLoading(true);

      try {
        const cacheKey = `${address}-${page}`;
        if (cachedReviews.current.has(cacheKey)) {
          setReviews(cachedReviews.current.get(cacheKey));
          setLoading(false);
          return;
        }

        const reviewIds = await contract.methods
          .getServiceProviderReviews(address)
          .call();

        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;
        const paginatedReviewIds = reviewIds.slice(startIndex, endIndex);

        const fetchedReviews = await Promise.all(
          paginatedReviewIds.map(async (id) => {
            const review = await contract.methods.getReview(id).call();
            const reviewerTrustLevel = await contract.methods
              .getTrustLevel(review.reviewer)
              .call();
            return {
              id: id.toString(),
              reviewer: review.reviewer,
              rating: Number(review.rating),
              comment: review.comment,
              timestamp: new Date(
                Number(review.timestamp) * 1000
              ).toLocaleString(),
              trustLevel: reviewerTrustLevel,
            };
          })
        );

        setReviews(fetchedReviews);
        cachedReviews.current.set(cacheKey, fetchedReviews);

        const avgRating = await contract.methods
          .getAverageRating(address)
          .call();
        setAverageRating(Number(avgRating));

        const userTrustLevel = await contract.methods
          .getTrustLevel(address)
          .call();
        setTrustLevel(userTrustLevel);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setStatus("Error fetching reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [contract, page]
  );

  useEffect(() => {
    if (serviceProvider && web3 && web3.utils.isAddress(serviceProvider)) {
      fetchReviews(serviceProvider);
    }
  }, [serviceProvider, fetchReviews, web3]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting review...");
    setLoading(true);

    try {
      const ratingNumber = Number(rating);

      if (!web3.utils.isAddress(serviceProvider)) {
        throw new Error("Invalid service provider address");
      }

      const gasEstimate = await contract.methods
        .submitReview(serviceProvider, ratingNumber, comment)
        .estimateGas({ from: account });
      const bufferedGas = Math.floor(Number(gasEstimate) * 1.2);
      const result = await contract.methods
        .submitReview(serviceProvider, ratingNumber, comment)
        .send({ from: account, gas: bufferedGas });

      setStatus(
        "Review submitted successfully! You've been rewarded with CUE tokens."
      );
      console.log("Transaction hash:", result.transactionHash);

      await fetchReviews(serviceProvider);

      // Reset form
      setServiceProvider("");
      setRating(1);
      setComment("");
    } catch (error) {
      console.error("Error submitting review:", error);
      if (error.code === -32603 && error.data) {
        const errorMessage = error.data.message || error.message;
        const refinedMessage = errorMessage.includes("gas required")
          ? "Transaction failed due to insufficient gas."
          : errorMessage;
        setStatus(`Transaction failed: ${refinedMessage}`);
      } else {
        setStatus(`Error submitting review: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Submit a Review</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.address}>
          {/* <label>Service Provider Address:</label> */}
          <label htmlFor="address">Service Provider Address</label>
          <input
            type="text"
            value={serviceProvider}
            onChange={(e) => setServiceProvider(e.target.value)}
            required
          />
        </div>
        <div className={styles.address}>
          <label htmlFor="Rating">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
        </div>
        <div className={styles.comment}>
          <label htmlFor="textarea">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength="1000"
            required
          />
        </div>
        <button type="submit" disabled={loading} className={styles.reviewBtn}>
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
      {status && <p>{status}</p>}

      <h2>Reviews for {serviceProvider}</h2>
      <p>Average Rating: {averageRating}/5</p>
      <p>Trust Level: {trustLevel}</p>
      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Reviewer: {review.reviewer}</p>
                <p>Rating: {review.rating}/5</p>
                <p>Comment: {review.comment}</p>
                <p>Timestamp: {review.timestamp}</p>
                <p>Reviewer Trust Level: {review.trustLevel}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1 || loading}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={reviews.length < 10 || loading}
          >
            Next
          </button>
        </>
      ) : (
        <p>No reviews available for this service provider.</p>
      )}
    </div>
  );
};
