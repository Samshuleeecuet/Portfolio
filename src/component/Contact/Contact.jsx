import React from 'react';
import './../About/about.css';
import { FaEnvelope, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
const Contact = () => {
    return (
        <div id='contactpage' className='font-mono p-8'>
            <div className='section-title relative'>
                <p className='text-3xl font-semibold text-blue-600 title'>Contact</p>
            </div>
            <div className='mt-10'>
                <p>Feel free to contact with me. I'm ready to work in your projects</p>
            </div>
            <div className='mt-10 bg-gray-200 p-4 shadow-slate-50'>
                <div className='flex items-center gap-4 contactlist'>
                    <div>
                        <p className="bg-blue-200 icon text-blue-800 text-3xl p-2 rounded-full"><FaSearchLocation  className='p-1'/></p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Location:</p>
                        <p className='font-thin'>Room No. 106, Shaheed Mohammad Shah Hall, CUET</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-2 contactlist'>
                    <div>
                        <p className="bg-blue-200 icon text-blue-800 text-3xl p-2 rounded-full"><FaEnvelope className='p-1'/></p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Email:</p>
                        <p className='font-thin'>samshul2001@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 mt-2 contactlist'>
                    <div>
                        <p className="bg-blue-200 icon text-blue-800 text-3xl p-2 rounded-full"><FaPhoneAlt className='p-1'/></p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold'>Call:</p>
                        <p className='font-thin'>+8801816244741</p>
                    </div>
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8593.14788962041!2d91.97553487462757!3d22.459205437155436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2z4Kaa4Kaf4KeN4Kaf4KaX4KeN4Kaw4Ka-4KauIOCmquCnjeCmsOCmleCnjOCmtuCmsiDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCnnyAo4Kaa4KeB4Kef4KeH4KafKQ!5e0!3m2!1sbn!2sbd!4v1687024745160!5m2!1sbn!2sbd"  className='w-full h-96 mt-10' style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

            </div>
            
        </div>
    );
};

export default Contact;