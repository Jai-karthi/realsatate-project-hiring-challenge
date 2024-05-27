import axios from "axios";
import React from 'react';
import CardContent from './CardContent '
import Card from "./Card"
import { Button } from "./Button";
function Propertylist({property_id,propertyPlace,propertyArea,propertyBathrooms,propertyNearby,  Fullname ,propertylikes,Bedrooms ,sqft,price}) {
  const handleLike = (Fullname) => {
    try {
       axios.post('https://realsatate-project-hiring-challenge-pwog.vercel.app/properties/like',Fullname);
        alert('You liked this property!');
        // Optionally, update the UI to reflect the liked status
    } catch (error) {
        console.error(error);
        alert('Failed to like this property. Please try again.');
    }
  };
  return (
    <div key={property_id} className="property-card">
    
            <Card>
              <img
                alt="Property Image"
                className="aspect-video rounded-t-lg object-cover"
                height={400}
                src="/placeholder.svg"
                width={600}
              />
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">{Fullname}</div>
                  <div className="text-primary font-semibold">{price}</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400"> {Bedrooms} Beds | {propertyBathrooms} Baths | {sqft} sq ft | Nearby {propertyNearby} </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LocateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{propertyArea},{propertyPlace}</span>
                  </div>
                  <Button size="sm" variant="outline" className=''>
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

    </div>
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

export default Propertylist

