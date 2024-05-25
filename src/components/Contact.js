import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Label } from "../ui/Label"
import TextArea from "../ui/TextArea";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fr18lf9', 'template_en9wdpt', form.current, {
        publicKey: 'UlPsSG6AwE5GFtaai',
      })
      .then(
        () => {
          alert('Message Sended');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
};
  return (
    
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-950">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
          <h4 className=" text-white">Contact Us</h4>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to="/PropertyPostingForm"
              >
                <PlusIcon className="h-4 w-4" />
                List Your Property
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to="/PostedProperties"
              >
                <ListIcon className="h-4 w-4" />
                Property Listing
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50                "
                to="#"
              >
                          
                <MailIcon className="h-4 w-4" />
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-100">
    
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Contact Us</h1>
          </div>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
        
              </div>
            </form>
          </div>
        </header>
        <main className="flex-1 flex flex-col gap-8 p-4 md:gap-12 md:p-6">
          <section className="bg-white dark:bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
           
            <form className="grid gap-4" ref={form} onSubmit={sendEmail} >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input name='Name' placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input name="email"  placeholder="Enter your email" type="email" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input name="subject"  placeholder="Enter the subject" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <div  className='w-100 h-50' >
                <TextArea name="message"  placeholder="Enter your message" rows={50} className='w-100 h-50' />
              
                </div>
              </div>
              <Button type="submit " value="Send"> Submit</Button>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}




function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}




function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


