import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your logic to send the form data to a backend or take appropriate actions.
    console.log('Form data:', formData);
  };

  return (
    <div className="m-8 flex items-center justify-center">
      <div className="bg-zinc-50 p-8 rounded-lg shadow-lg w-1/2">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 p-3 w-full border rounded-md focus:ring focus:ring-blue-200"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;