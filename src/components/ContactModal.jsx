import { useEffect, useState } from "react";

function ContactModal({ isOpen, onClose, userName, userEmail }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!isOpen) return;

    // Reset countdown when modal opens
    setCountdown(5);

    // Setup decrement interval
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-custom">
      <div className="modal-content-custom text-center p-5" style={{ maxWidth: "500px" }}>
        <div className="success-checkmark-wrapper mt-3">
          <i className="bi bi-send-check-fill fs-1 text-info"></i>
        </div>

        <h3 className="fs-3 fw-bold text-white mt-4 mb-2">Message Transmitted</h3>
        <p className="text-gradient fw-bold mb-4">Celebration Sequence Initiated!</p>

        <div className="p-3 rounded-4 glass-effect border-0 mb-4 text-start bg-dark bg-opacity-40">
          <p className="mb-2 text-slate-300 small">
            <strong>Sender Name:</strong> <span className="text-white">{userName || "Anonymous Professional"}</span>
          </p>
          <p className="mb-2 text-slate-300 small">
            <strong>Source Channels:</strong> <span className="text-white">{userEmail || "direct-feed@portfolio.io"}</span>
          </p>
          <p className="mb-0 text-slate-400 small lh-sm">
            <i className="bi bi-info-circle text-info me-1"></i>
            Tushar's inbox will receive your connection message shortly. A prompt response will be queued.
          </p>
        </div>

        <button 
          onClick={onClose} 
          className="btn-custom btn-primary-custom px-5 py-2.5 w-100 mb-3"
        >
          Return to Deck
        </button>

        <p className="text-secondary small mb-2">
          Auto-closing connection portal in <strong className="text-info">{countdown}s</strong>...
        </p>
      </div>
    </div>
  );
}

export default ContactModal;
