import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
      <form method="POST"action="https://getform.io/f/39d35204-a967-487f-959a-69f6357cb038" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-orange-300 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - matthewdowns225@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6]' type="text" placeholder='Name:' name='name' />
        <input className="my-4 bg-[#ccd6f6]" type="text" placeholder='Email:' name='email' />
        <textarea className="bg-[#ccd6f6]"name="message" rows="10" placeholder='Message:'></textarea>
        <button className="text-white rounded-md border-2 px-8 py-4 mx-auto flex text-center my-2 hover:bg-orange-300 hover:border-orange-300 hover:duration-300">Send!</button>
      </form>
    </div>
  )
}

export default Contact