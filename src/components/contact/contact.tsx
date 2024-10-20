"use client";
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function ContactMe() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch('https://formspree.io/f/xkgnndwy', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been sent successfully.',
                });
                form.reset();
            }, 100);
        } else {
            console.error('Form submission failed:', response.statusText);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Please try again later.',
            });
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="bg-[#fafafa] py-12 px-6 scroll-mt-24">
            <div className="max-w-lg mx-auto py-4 text-center bg-[#ebeae9] border-black  border-2 rounded-lg">
                <h2 className={`text-[#071fa8] text-2xl md:text-3xl lg:text-4xl font-bold ${poppins.className} text-center pt-2 sm:pt-4`}>
                    Get In Touch
                </h2>
                <p className={`${poppins.className} py-4 px-5 text-sm md:text-base`}>
                    Have any questions? Feel free to send a message.
                </p>

                <form onSubmit={handleSubmit} className=" shadow-lg rounded-lg p-3 md:p-6 space-y-3">
                    <div className="flex gap-6">
                        <div className="relative flex flex-col mb-6">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="peer p-2 pt-6 pb-0 w-full border-b-2 border-gray-300 focus:outline-none font-bold text-[#071fa8] focus:ring-0 focus:border-[#071fa8] leading-tight"
                                placeholder=" "
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-2 top-2 text-gray-600 transition-all duration-200 transform scale-75 origin-top-left 
                                peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 
                                peer-focus:-top-1 peer-focus:left-1 peer-focus:scale-75 peer-focus:text-[#071fa8]"
                            >
                                Name
                            </label>
                        </div>

                        <div className="relative flex flex-col mb-6">
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                required
                                className="peer p-2 pt-6 pb-0 w-full border-b-2 border-gray-300 focus:outline-none font-bold text-[#071fa8] focus:ring-0 focus:border-[#071fa8] leading-tight"
                                placeholder=" "
                            />
                            <label
                                htmlFor="surname"
                                className="absolute left-2 top-2 text-gray-600 transition-all duration-200 transform scale-75 origin-top-left 
                                peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 
                                peer-focus:-top-1 peer-focus:left-1 peer-focus:scale-75 peer-focus:text-[#071fa8]"
                            >
                                Surname
                            </label>
                        </div>
                    </div>

                    <div className="relative flex flex-col mb-6">
                        <input
                            type="tel"
                            id="phNum"
                            name="phNum"
                            required
                            className="peer p-2 pt-6 pb-0 w-full border-b-2 border-gray-300 focus:outline-none font-bold text-[#071fa8] focus:ring-0 focus:border-[#071fa8] leading-tight"
                            placeholder=" "
                        />
                        <label
                            htmlFor="phNum"
                            className="absolute left-2 top-2 text-gray-600 transition-all duration-200 transform scale-75 origin-top-left 
                            peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 
                            peer-focus:-top-1 peer-focus:left-1 peer-focus:scale-75 peer-focus:text-[#071fa8]"
                        >
                            Phone Number
                        </label>
                    </div>

                    <div className="relative flex flex-col mb-6">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="peer p-2 pt-6 pb-0 w-full border-b-2 border-gray-300 font-bold text-[#071fa8] focus:outline-none focus:ring-0 focus:border-[#071fa8] leading-tight"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-2 top-2 text-gray-600 transition-all duration-200 transform scale-75 origin-top-left 
                            peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 
                            peer-focus:-top-1 peer-focus:left-1 peer-focus:scale-75 peer-focus:text-[#071fa8]"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative flex flex-col mb-6">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder=" "
                            className="peer p-2 pt-6 pb-0 w-full border-b-2 border-gray-300 font-bold text-[#071fa8] focus:outline-none focus:ring-0 focus:border-[#071fa8] leading-tight"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-2 top-2 text-gray-600 transition-all duration-200 transform scale-75 origin-top-left 
                            peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 
                            peer-focus:-top-1 peer-focus:left-1 peer-focus:scale-75 peer-focus:text-[#071fa8]">
                            Your Message
                        </label>
                    </div>


                    <button
                        type="submit"
                        className={`w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-[#071fa8] transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}
