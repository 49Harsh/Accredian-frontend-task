import React, { useState } from 'react';

function ReferralModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = 'Required';
    if (!formData.referrerEmail) newErrors.referrerEmail = 'Required';
    if (!formData.refereeName) newErrors.refereeName = 'Required';
    if (!formData.refereeEmail) newErrors.refereeEmail = 'Required';
    if (!formData.course) newErrors.course = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission logic here
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="referrerName"
                name="referrerName"
                value={formData.referrerName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.referrerName ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.referrerName && (
                <p className="mt-1 text-sm text-red-500">{errors.referrerName}</p>
              )}
            </div>
            <div>
              <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="referrerEmail"
                name="referrerEmail"
                value={formData.referrerEmail}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.referrerEmail ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.referrerEmail && (
                <p className="mt-1 text-sm text-red-500">{errors.referrerEmail}</p>
              )}
            </div>
            <div>
              <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">
                Friend's Name
              </label>
              <input
                type="text"
                id="refereeName"
                name="refereeName"
                value={formData.refereeName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.refereeName ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.refereeName && (
                <p className="mt-1 text-sm text-red-500">{errors.refereeName}</p>
              )}
            </div>
            <div>
              <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">
                Friend's Email
              </label>
              <input
                type="email"
                id="refereeEmail"
                name="refereeEmail"
                value={formData.refereeEmail}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.refereeEmail ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.refereeEmail && (
                <p className="mt-1 text-sm text-red-500">{errors.refereeEmail}</p>
              )}
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                Course to Refer
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.course ? 'border-red-500' : ''
                }`}
                required
              />
              {errors.course && (
                <p className="mt-1 text-sm text-red-500">{errors.course}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReferralModal;