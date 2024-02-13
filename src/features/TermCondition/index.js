import React, { useState } from 'react';
import Modal from '../../components/Input/Modal'; // Adjust the import path accordingly
import { AiOutlineFileText, AiOutlineSafetyCertificate, AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineCustomerService, AiOutlineApi, AiOutlineSecurityScan } from 'react-icons/ai';

const TermsAndConditions = () => {
  const [selectedTerm, setSelectedTerm] = useState('term1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const terms = [
    {
      id: 'term1',
      title: 'Service Agreement',
      content: [
        'You agree to use our services for lawful purposes only.',
        'Payment is due within 30 days from the invoice date.',
        'We reserve the right to terminate services for non-payment.',
        'You are responsible for maintaining the confidentiality of your account.',
        'We do not guarantee uninterrupted service or access to our platform.',
        'You may not use our services for any illegal or unauthorized purpose.',
        'We reserve the right to update and change the terms without notice.',
      ],
      icon: <AiOutlineFileText className="w-6 h-6 mr-2" />,
    },
    {
      id: 'term2',
      title: 'Safety Guidelines',
      content: [
        'Always wear appropriate safety gear when using our equipment.',
        'Follow the provided instructions and guidelines for safe usage.',
        'Keep children and pets away from potentially hazardous areas.',
        'Inspect equipment regularly for any signs of damage or wear.',
        'Report any safety concerns or incidents to our support team.',
        'Adhere to industry-standard safety practices at all times.',
        'We are not liable for injuries resulting from misuse or negligence.',
      ],
      icon: <AiOutlineSafetyCertificate className="w-6 h-6 mr-2" />,
    },
    {
      id: 'term3',
      title: 'Acceptance Criteria',
      content: [
        'All deliverables must meet the specifications outlined in the agreement.',
        'Acceptance will be deemed upon successful completion of testing.',
        'You have a specified timeframe to report any defects or issues.',
        'Changes to the project scope may affect acceptance criteria.',
        'Acceptance does not release the contractor from warranty obligations.',
        'You must provide necessary resources for acceptance testing.',
        'We reserve the right to reject deliverables that do not meet criteria.',
      ],
      icon: <AiOutlineCheckCircle className="w-6 h-6 mr-2" />,
    },
    {
      id: 'term4',
      title: 'Privacy Policy',
      content: [
        'We collect and store your personal information securely.',
        'Your data will not be shared with third parties without consent.',
        'You have the right to access, modify, or delete your personal information.',
        'We use cookies to enhance your experience on our website.',
        'Our privacy practices comply with relevant data protection laws.',
        'Changes to the privacy policy will be communicated to users.',
        'By using our services, you agree to the terms of our privacy policy.',
      ],
      icon: <AiOutlineInfoCircle className="w-6 h-6 mr-2" />,
    },
    {
      id: 'term5',
      title: 'Refund Policy',
      content: [
        'Refunds are available within 30 days of purchase.',
        'To request a refund, contact our customer support team.',
        'Refunds will be processed within 7 business days.',
        'We do not provide refunds for services rendered.',
        'Any applicable taxes or fees are non-refundable.',
        'Refund requests outside the specified period will not be considered.',
        'We reserve the right to modify the refund policy at any time.',
      ],
      icon: <AiOutlineCustomerService className="w-6 h-6 mr-2" />,
    },
    {
      id: 'term6',
      title: 'User Conduct',
      content: [
        'You agree to use our platform in a manner consistent with applicable laws.',
        'Do not engage in any activity that may harm the integrity of our services.',
        'Respect the rights and privacy of other users.',
        'We may suspend or terminate your account for violating our user conduct policy.',
        'Report any misuse or suspicious activity to our support team.',
        'Engaging in illegal activities on our platform will result in account termination.',
        'We reserve the right to investigate and take appropriate action for violations.',
      ],
      icon: <AiOutlineApi className="w-6 h-6 mr-2" />,
    },
    {
      id: 'term7',
      title: 'Intellectual Property',
      content: [
        'All content and materials on our platform are protected by intellectual property laws.',
        'You may not reproduce, distribute, or modify our content without permission.',
        'You retain ownership of the content you submit to our platform.',
        'By submitting content, you grant us a non-exclusive, worldwide, royalty-free license.',
        'Unauthorized use of our intellectual property may result in legal action.',
        'If you believe your intellectual property rights are violated, contact us immediately.',
        'We respect the intellectual property rights of others and expect users to do the same.',
      ],
      icon: <AiOutlineSecurityScan className="w-6 h-6 mr-2" />,
    },
    // Add more terms as needed
  ];

  const handleTermChange = (termId) => {
    setSelectedTerm(termId);
  };

  const handleAcceptAndContinue = () => {
    // You may want to perform additional actions here
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4 flex items-center">
        <div className="mr-2">
          <select
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            value={selectedTerm}
            onChange={(e) => handleTermChange(e.target.value)}
          >
            {terms.map((term) => (
              <option key={term.id} value={term.id}>
                {term.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-8 bg-white shadow-md rounded-md" style={{ background: 'linear-gradient(to bottom left, #E0E0E0 50%, #FFFFFF 50%)' }}>
        <h2 className="text-2xl font-bold mb-4">{terms.find((term) => term.id === selectedTerm)?.title}</h2>
        <div className="flex items-center mb-4">{terms.find((term) => term.id === selectedTerm)?.icon}</div>
        <ul className="list-disc pl-6 space-y-2">
          {terms
            .find((term) => term.id === selectedTerm)
            ?.content.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
        </ul>
        <button
          className="btn btn-primary mt-6 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
          onClick={handleAcceptAndContinue}
        >
          Accept and Continue
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default TermsAndConditions;