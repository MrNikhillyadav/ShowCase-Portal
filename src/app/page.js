import Header from "../components/header.jsx";
import Profile from "../components/profile.jsx";

export default function Home() {
  return (
    <div className="text-3xl bg-white h-[100vh] text-black font-bold ">
      <Header/>
      <hr/>
      <Profile/>

      
    </div>
  )
}