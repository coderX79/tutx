import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMoneyBillWave, FaBook, FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa';
import './TuitionFees.css';

const TuitionFees = () => {
  // Subjects data with additional properties
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', fee: 1500, paidAmount: 750, isPaid: false, duration: '12 weeks' },
    { id: 2, name: 'Physics', fee: 1200, paidAmount: 0, isPaid: false, duration: '10 weeks' },
    { id: 3, name: 'Chemistry', fee: 1300, paidAmount: 1300, isPaid: true, duration: '10 weeks' },
    { id: 4, name: 'Biology', fee: 1100, paidAmount: 1100, isPaid: true, duration: '8 weeks' },
  ]);

  const [totalFee, setTotalFee] = useState(0);
  const [paidFee, setPaidFee] = useState(0);
  const [remainingFee, setRemainingFee] = useState(0);

  // Calculate fees
  useEffect(() => {
    const total = subjects.reduce((sum, subject) => sum + subject.fee, 0);
    const paid = subjects.reduce((sum, subject) => sum + (subject.paidAmount || 0), 0);
    
    setTotalFee(total);
    setPaidFee(paid);
    setRemainingFee(total - paid);
  }, [subjects]);

  const formatDateTime = (date) => {
    if (!date) return 'Not paid yet';
    const paymentDate = new Date(date);
    return paymentDate.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleMakePayment = (subjectId) => {
    // In a real app, this would open payment gateway
    const paymentWindow = window.open('', '_blank');
    paymentWindow.document.write(`
      <html>
        <head>
          <title>Payment Options</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .payment-options { max-width: 500px; margin: 0 auto; }
            .option { padding: 15px; margin: 10px 0; border: 1px solid #ddd; cursor: pointer; }
            .option:hover { background: #f5f5f5; }
          </style>
        </head>
        <body>
          <div class="payment-options">
            <h2>Select Payment Method</h2>
            <div class="option" onclick="window.opener.postMessage({type: 'paymentComplete', subjectId: ${subjectId}}, '*'); window.close();">
              <h3>Credit/Debit Card</h3>
              <p>Pay using Visa, Mastercard, etc.</p>
            </div>
            <div class="option" onclick="window.opener.postMessage({type: 'paymentComplete', subjectId: ${subjectId}}, '*'); window.close();">
              <h3>PayPal</h3>
              <p>Pay using your PayPal account</p>
            </div>
            <div class="option" onclick="window.opener.postMessage({type: 'paymentComplete', subjectId: ${subjectId}}, '*'); window.close();">
              <h3>Bank Transfer</h3>
              <p>Direct bank transfer</p>
            </div>
          </div>
        </body>
      </html>
    `);
  };

  // Listen for payment completion from popup
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'paymentComplete') {
        const subjectId = event.data.subjectId;
        setSubjects(prev => prev.map(subject => 
          subject.id === subjectId 
            ? { 
                ...subject, 
                isPaid: true, 
                paidAmount: subject.fee, 
                paymentDate: new Date().toISOString() 
              }
            : subject
        ));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="tuition-fees-container">
      {/* Header */}
      <div className="text-center mb-5 header-section">
        <h2 className="display-5 mb-3">
          <FaMoneyBillWave className="me-2 text-success" />
          Tuition Fee Statement
        </h2>
        <p className="lead text-muted">Academic Year 2024-2025</p>
      </div>

      {/* Fee Summary Cards */}
      <div className="row mb-4 fee-summary-cards">
        <div className="col-md-4">
          <div className="card summary-card total-fee">
            <div className="card-body">
              <h3>Total Fees</h3>
              <p>₹{totalFee.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card summary-card paid-fee">
            <div className="card-body">
              <h3>Paid Amount</h3>
              <p>₹{paidFee.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card summary-card remaining-fee">
            <div className="card-body">
              <h3>Remaining Balance</h3>
              <p>₹{remainingFee.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects List */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title mb-4">
            <FaBook className="me-2 text-info" />
            Enrolled Subjects
          </h5>
          
          <div className="table-responsive">
            <table className="table subjects-table">
              <thead className="table-light">
                <tr>
                  <th>Subject</th>
                  <th>Duration</th>
                  <th className="text-end">Fee</th>
                  <th className="text-end">Paid Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id}>
                    <td>{subject.name}</td>
                    <td>{subject.duration}</td>
                    <td className="text-end">₹{subject.fee.toFixed(2)}</td>
                    <td className="text-end">₹{subject.paidAmount.toFixed(2)}</td>
                    <td>
                      <span className={`badge ${subject.isPaid ? 'bg-success' : 'bg-warning'}`}>
                        {subject.isPaid ? 'Paid' : 'Pending'}
                      </span>
                    </td>
                    <td>
                      {!subject.isPaid && (
                        <button 
                          onClick={() => handleMakePayment(subject.id)}
                          className="btn btn-sm btn-primary pay-btn"
                        >
                          Pay Now
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Fee Section */}
          <div className="bg-light p-4 rounded mt-4 fee-summary">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">Total Fee Payable:</h4>
              <div className="display-6 text-success">
                ₹{totalFee.toFixed(2)}
              </div>
            </div>
            
            <div className="mt-4 text-end">
              <p className="text-muted small mb-1">
                Payment Due Date: 31st March 2025
              </p>
              <p className="text-muted small">
                Account Number: XXXX-XXXX-XXXX-1234
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Payment Methods</h5>
          <div className="row payment-methods">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <FaCreditCard className="text-primary mb-3" size={40} />
                  <h5>Credit/Debit Card</h5>
                  <p className="text-muted">Visa, Mastercard, etc.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <FaPaypal className="text-info mb-3" size={40} />
                  <h5>PayPal</h5>
                  <p className="text-muted">Pay using your PayPal account</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <FaUniversity className="text-success mb-3" size={40} />
                  <h5>Bank Transfer</h5>
                  <p className="text-muted">Direct bank transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Policy */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Fee Payment Policy</h5>
          <ul className="list-unstyled fee-policy">
            <li>• Fees are non-refundable once paid</li>
            <li>• Late payment penalty: ₹100/day after due date</li>
            <li>• Payment methods: Online transfer / Bank deposit</li>
            <li>• 5% discount available for full payment in advance</li>
            <li>• Installment plans available upon request</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TuitionFees;