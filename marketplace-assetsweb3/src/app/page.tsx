import LoginForm from "./ui/login-form";
import '@/app/ui/global.css';

export default function Login() {
  return (
    
    <div className="flex w-full h-screen">
    <div className="w-full flex items-center justify-center lg:w-1/2">

    <LoginForm/>

    </div>
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
      <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
      <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0" />

    </div>

  </div>
    
    );
  }