import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/register"
import Dealers from "./components/Dealers/Dealers"
import Dealer from "./components/Dealers/Dealer"
import PostReview from "./components/Dealers/PostReview"
import { Routes, Route } from "react-router-dom";

function App() { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Dealers />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/dealer/:dealer_id" element={<Dealer />} />
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-review/:dealer_id" element={<PostReview />} />
        
      </Routes>
    </>
  );
}
export default App;
