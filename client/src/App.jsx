import Navbar from "./components/Navbar";
import SubmitForm from "./pages/SubmitForm";

export default function App() {
  return (
    <div className="h-screen w-screen bg-mainbg">
      <div className="bg-mainarea sm:w-screen lg:w-[1500px] h-screen m-auto">
        <Navbar />
        <SubmitForm />
      </div>
    </div>
  )
}
