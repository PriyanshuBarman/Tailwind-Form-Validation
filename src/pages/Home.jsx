import { NavLink } from "react-router";

function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center italic sm:text-2xl">
      <NavLink to="/signup" className="hover:text-blue-400">
        Simple Form Validations using CSS
      </NavLink>
      <NavLink to="/realtime-validation" className="hover:text-blue-400">
        Realtime Form Validation using CSS
      </NavLink>
    </div>
  );
}

export default Home;
