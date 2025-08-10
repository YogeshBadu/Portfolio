// import React, { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser';

// function Contact() {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);
//   const [error, setError] = useState(null);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const serviceId = 'service_8cdf4h9';
//     const templateId = 'template_p9rmosu';
//     const publicKey = 'deO3LOYdtrLFX0jIl';

//     emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
//       () => {
//         setIsSent(true);
//         setError(null);
//         form.current.reset();
//         console.log("SUCCESS!");
//         setTimeout(() => setIsSent(false), 5000);
//       },
//       (error) => {
//         setError(error.text);
//         setIsSent(false);
//         console.log("FAILED!", error.text);
//          setTimeout(() => setError(null), 5000);
//       }
//     );
//   };

//   return (
//     <>
//       <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
//         <h1 className='text-3xl font-bold mb-5'>Contact</h1>
//         <p className='text-sm text-gray-600 mb-8'>
//           Feel free to reach out using the form below. I’ll get back to you as soon as possible!
//         </p>

//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className='bg-white shadow-md rounded-lg p-6 md:p-10 w-full md:w-3/4 lg:w-1/2 mx-auto'
//         >
//           <div className='mb-4'>
//             <label htmlFor='user_name' className='block text-sm font-semibold mb-2'>
//               Name
//             </label>
//             <input
//               type='text'
//               name='user_name'
//               id='user_name'
//               required
//               className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
//             />
//           </div>

//           <div className='mb-4'>
//             <label htmlFor='user_email' className='block text-sm font-semibold mb-2'>
//               Email
//             </label>
//             <input
//               type='email'
//               name='user_email'
//               id='user_email'
//               required
//               className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
//             />
//           </div>

//           <div className='mb-6'>
//             <label htmlFor='message' className='block text-sm font-semibold mb-2'>
//               Message
//             </label>
//             <textarea
//               name='message'
//               id='message'
//               rows='5'
//               required
//               className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none'
//             ></textarea>
//           </div>

//           <button
//             type='submit'
//             className='w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors duration-200'
//           >
//             Send
//           </button>
//         </form>

//         {isSent && (
//           <p className='mt-4 p-4 bg-green-100 text-green-700 rounded-md font-medium text-center'>
//             Your message has been sent successfully! ✅
//           </p>
//         )}
//         {error && (
//           <p className='mt-4 p-4 bg-red-100 text-red-700 rounded-md font-medium text-center'>
//             Failed to send message: {error} ❌
//           </p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Contact;

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when send button is clicked
    setIsSent(false);
    setError(null);

    const serviceId = 'service_8cdf4h9';
    const templateId = 'template_p9rmosu';
    const publicKey = 'deO3LOYdtrLFX0jIl';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setIsSent(true);
        form.current.reset();
        console.log("SUCCESS!");
        setTimeout(() => setIsSent(false), 5000);
        setLoading(false); // Stop loading
      },
      (error) => {
        setError(error.text);
        console.log("FAILED!", error.text);
        setTimeout(() => setError(null), 5000);
        setLoading(false); // Stop loading
      }
    );
  };

  return (
    <>
      <div name='Contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
        <h1 className='text-3xl font-bold mb-5'>Contact</h1>
        <p className='text-sm text-gray-600 mb-8'>
          Feel free to reach out using the form below. I’ll get back to you as soon as possible!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='bg-white shadow-md rounded-lg p-6 md:p-10 w-full md:w-3/4 lg:w-1/2 mx-auto'
        >
          <div className='mb-4'>
            <label htmlFor='user_name' className='block text-sm font-semibold mb-2'>
              Name
            </label>
            <input
              type='text'
              name='user_name'
              id='user_name'
              required
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='user_email' className='block text-sm font-semibold mb-2'>
              Email
            </label>
            <input
              type='email'
              name='user_email'
              id='user_email'
              required
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block text-sm font-semibold mb-2'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='5'
              required
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none'
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={loading} // disable button when sending
            className={`w-full py-3 text-white font-bold rounded-md transition-colors duration-200 ${
              loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {/* Status message area */}
        <div className="min-h-[50px] flex items-center justify-center">
          {loading && (
            <p className='mt-4 p-4 bg-blue-100 text-blue-700 rounded-md font-medium text-center animate-pulse'>
              Sending your message... 📤
            </p>
          )}
          {isSent && !loading && (
            <p className='mt-4 p-4 bg-green-100 text-green-700 rounded-md font-medium text-center'>
              Your message has been sent successfully! ✅
            </p>
          )}
          {error && !loading && (
            <p className='mt-4 p-4 bg-red-100 text-red-700 rounded-md font-medium text-center'>
              Failed to send message: {error} ❌
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;


