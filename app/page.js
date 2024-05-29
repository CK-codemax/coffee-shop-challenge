import PhoneContainer from "./components/PhoneContainer";

//This is the page. NextJS requires a page file within each directory, and since our application is single page, this is our only page. 

export default function page() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* This is the component that contains the image and animation */}
      <PhoneContainer />

    </div>
  )
}
