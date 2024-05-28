
import { Button } from "../ui/Button"
import { Label } from "../ui/Label"
import { Input } from "../ui/Input"
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextArea from "../ui/TextArea";
export default function PropertyPostingForm() {

  const [property, setProperty] = useState({
    Fullname:'',
    Place: '',
    Area: '',
    Bedrooms: 0,
    Bathrooms: 0,
    Nearby: '',
    sqft: '',
    price: '',
});
const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://realsatate-project-hiring-challenge-ndsv.vercel.app/properties', property);
        alert('Property posted successfully!');
        // Optionally, redirect the user to their dashboard or property listing page
    } catch (error) {
        console.error(error);
        alert('Failed to post property. Please try again.');
    }
};
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-950">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
             
              <span className="text-white">Home</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <PlusIcon className="h-4 w-4" />
                List Your Property
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to ='/PostedProperties' 
              >
              <ListIcon className="h-4 w-4" />
                Property Listing
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to='/Contact'
              >
                <FileTextIcon className="h-4 w-4" />
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-50">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">List Your Property</h1>
          </div>
        </header>
        <main className="flex-1 flex flex-col gap-8 p-4 md:gap-12 md:p-6">
          <div className="max-w-md mx-auto mt-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">List Your Property</h2>
              <p className="text-gray-500 dark:text-gray-400">Fill out the form below to list your property.</p>
            </div>
            <form className="space-y-4"  onSubmit={handleSubmit} >
              <div className="space-y-2">
                <Label htmlFor="fullname">Propertyname</Label>
                <Input  type="text" name="Fullname" placeholder="Propertyname" value={property.Fullname} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="place">Place</Label>
                <Input type="text" name="Place" placeholder="Place" value={property.Place} onChange={handleChange} required   />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Area</Label>
                <Input type="text" name="Area"  value={property.Area} onChange={handleChange} required placeholder="Enter the property area (sq ft)" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input type="text"  inputmode="numeric" name="Bedrooms"  value={property.Bedrooms} onChange={handleChange} required placeholder="Enter number of bedrooms" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input type="text"  inputmode="numeric"  name="Bathrooms"  value={property.Bathrooms} onChange={handleChange} required placeholder="Enter number of bathrooms" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                  <Label htmlFor="sq ft ">sq ft </Label>
                  <Input type="text"   name="sqft"  value={property.sqft} onChange={handleChange} required placeholder="Enter sqft" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="Price">Price</Label>
                  <Input type="text"    name="price"  value={property.price} onChange={handleChange} required placeholder="Enter Price" />
                </div>
                </div>
              <div className="space-y-2">
                <Label htmlFor="amenities">Nearby Amenities</Label>
              
                <TextArea 
                type="text"
                name='Nearby'
                value={property.Nearby}
                onChange={handleChange}
                placeholder="List the nearby amenities (e.g. grocery store, park, etc.)"
                />
              </div>
              <Button className="w-full" type="submit">
                Post Property
              </Button>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

function FileTextIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
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


function Package2Icon(props) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
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