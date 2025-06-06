import { NavLink } from "react-router";

function Home() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-8 px-6 text-center italic sm:text-2xl">
      <h1 className="font-medium sm:mb-12">
        Form Validation Using CSS / Try-out 👇
      </h1>

      <NavLink to="/old-way" className="text-blue-500">
        Realtime using (:valid, :invalid)
      </NavLink>

      <NavLink to="/new-way" className="text-blue-500">
        Using (:user-valid, :user-invalid)
      </NavLink>
    </div>
  );
}

export default Home;
