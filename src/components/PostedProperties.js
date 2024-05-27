

import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Propertylist from "../ui/Propertylist";

export default function Component() {

  const [postedProperties, setPostedProperties] = useState([]);
  useEffect(() => {
      async function fetchPostedProperties() {
          try {
              const response = await axios.get('https://realsatate-project-hiring-challenge-pwog.vercel.app/properties/user');
              setPostedProperties(response.data);
          } catch (error) {
              console.error(error);
          }
      }

      fetchPostedProperties();
  }, []);

  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-950">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            
            <h4 className=" text-white">Property Listing</h4>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to ='/PropertyPostingForm' 
              >
                <PlusIcon className="h-4 w-4" />
                List Your Property
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                to= '/PostedProperties'
              >
                <ListIcon className="h-4 w-4" />
                Property Listing
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to ='/Contact'
              >
                <MailIcon className="h-4 w-4" />
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-50">
          
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Property Listing</h1>
          </div>
            <span className="sr-only">Home</span>

        </header>
        <main className="flex-1 flex flex-col gap-8 p-4 md:gap-12 md:p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {postedProperties.map((property,index)=>(
        <Propertylist property_id = {property._id} propertyPlace={property.Place} propertyArea={property.Area} propertyBathrooms={property.Bathrooms} propertyNearby = {property.Nearby}   Fullname = {property.Fullname} propertylikes = {property.likes} Bedrooms = {property.Bedrooms} sqft = {property.sqft} price={property.price} />
            ))
        }
            
           
          </div>
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


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
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




