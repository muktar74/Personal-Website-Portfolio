import React, { useState } from 'react';
import { EmailIcon } from './Icons';

// Define types for form state and errors
type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  submit?: string; // For general submission errors
};


const ContactIllustration = () => (
    <div className="relative p-8 hidden md:flex items-center justify-center">
        {/* Decorative background element */}
        <div className="absolute inset-0 bg-teal-500/10 dark:bg-teal-400/10 rounded-full blur-3xl"></div>
        {/* SVG Blob shape */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto relative z-10 max-w-sm">
            <path
            fill="currentColor"
            d="M48.8,-63.3C62.9,-54.6,73.9,-40.4,78.2,-24.8C82.5,-9.2,80.1,7.8,72.9,21.5C65.7,35.2,53.7,45.6,41,55.1C28.3,64.6,14.2,73.2,-1.2,74.7C-16.5,76.2,-33,70.5,-46.8,61.1C-60.6,51.7,-71.7,38.5,-76.8,23.3C-81.9,8.1,-81.1,-9.1,-74.6,-23.7C-68.1,-38.4,-56,-50.6,-42.6,-59.7C-29.2,-68.8,-14.6,-74.8,1.2,-76.2C17,-77.6,34.1,-71.9,48.8,-63.3Z"
            transform="translate(100 100)"
            className="text-teal-500 dark:text-teal-600"
            />
             {/* The EmailIcon inside the blob */}
             <foreignObject x="50" y="50" width="100" height="100">
                <div className="flex items-center justify-center w-full h-full">
                    <EmailIcon className="w-12 h-12 text-white dark:text-zinc-900" />
                </div>
            </foreignObject>
        </svg>
    </div>
);


const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitSuccess(false);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          const responseData = await response.json();
          if (responseData.errors) {
            setErrors({ submit: responseData.errors.map((error: any) => error.message).join(', ') });
          } else {
            setErrors({ submit: "Oops! Something went wrong on the server. Please try again." });
          }
        }
      } catch (error) {
        setErrors({ submit: "Could not send message. Please check your network connection." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Image */}
        <ContactIllustration />

        {/* Right Column: Content */}
        <div>
            <div className="text-left mb-12">
                <h3 className="text-lg font-mono text-teal-600 dark:text-teal-400 mb-2">What's Next?</h3>
                <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white relative pb-3">
                    Get In Touch
                    <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-teal-500 rounded-full"></span>
                </h2>
            </div>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-12">
                I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>

            <div>
                {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative text-center" role="alert">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline"> Your message has been sent successfully. I'll get back to you soon.</span>
                </div>
                ) : (
                <form 
                  onSubmit={handleSubmit} 
                  // TODO: Create a form on formspree.io and replace the action URL below.
                  // Your form should be configured to send emails to muktarabdella6@gmail.com
                  action="https://formspree.io/f/YOUR_FORM_ID_HERE"
                  method="POST"
                  noValidate 
                  className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border rounded-md focus:ring-2 outline-none transition text-zinc-900 dark:text-white ${
                            errors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-zinc-300 dark:border-zinc-600 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                        required 
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                        />
                        {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email Address</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border rounded-md focus:ring-2 outline-none transition text-zinc-900 dark:text-white ${
                            errors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-zinc-300 dark:border-zinc-600 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                        required 
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                        />
                        {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    </div>
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border rounded-md focus:ring-2 outline-none transition text-zinc-900 dark:text-white ${
                            errors.message 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-zinc-300 dark:border-zinc-600 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                        required
                        aria-invalid={!!errors.message}
                        aria-describedby="message-error"
                    ></textarea>
                    {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="text-center md:text-left">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-teal-700 dark:hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {errors.submit && <p id="submit-error" className="text-red-500 text-sm mt-4">{errors.submit}</p>}
                    </div>
                </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;