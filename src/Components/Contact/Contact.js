import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="text-gray-400 bg-green-200 body-font relative">
  <div class="absolute inset-0 mt-24 ">
        <img src="./img/contact.jpg" alt="" />
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-green-300 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 class="text-blue-800 text-lg mb-1 font-medium title-font">Contact</h2>
      <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-900">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-green-200 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-900">Message</label>
        <textarea id="message" name="message" class="w-full bg-green-200 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-red-500 bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Send</button>
      <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
        </div>
    );
};

export default Contact;