import { NavLink } from "react-router";

function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center italic sm:text-2xl">
      <h1 className="mb-12 font-medium">
        Form Validation Using Tailwind CSS / Try-out 👇
      </h1>
      <NavLink to="/new-way" className="hover:text-blue-400">
        Using (:user-valid, :user-invalid)
      </NavLink>
      <NavLink to="/old-way" className="hover:text-blue-400">
        Realtime using (:valid, :invalid)
      </NavLink>
    </div>
  );
}

export default Home;
