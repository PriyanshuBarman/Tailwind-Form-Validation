import { Mail, UserIcon, Lock } from "lucide-react";
import { useState } from "react";
import { inputFields } from "../constant";
import ShowDataModal from "../components/ShowDataModal";

function Signup() {
  const [showData, setShowData] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity()) {
      setShowData(true);
    }
  };

  return (
    <div className="flex h-svh w-full items-center justify-center bg-transparent px-6 sm:bg-gray-50">
      <div className="w-lg max-w-lg py-8 sm:rounded-2xl sm:bg-white sm:px-12 sm:shadow">
        <h2 className="text-center text-2xl font-semibold">
          Create Your PopX Account
        </h2>

        <form onSubmit={handleSubmit} noValidate className="mt-8">
          <div className="space-y-6">
            {inputFields.map((item) => (
              <div key={item.id} className="relative">
                <label htmlFor={item.id}>{item.label}</label>
                <input
                  onChange={handleInputChange}
                  required={item?.required}
                  minLength={item?.minLength}
                  type={item.type}
                  id={item.id}
                  name={item.id}
                  value={formData[item.id]}
                  placeholder={item.placeholder || " "}
                  className="peer relative mt-1 w-full rounded-md border border-[#ccc] py-2 pl-10 user-valid:border-green-500 user-valid:bg-green-50 user-invalid:border-red-400 user-invalid:bg-red-100 focus:shadow focus:outline-0"
                />
                <item.icon className="absolute top-[calc(50%+0.8rem)] left-3 size-5 -translate-y-1/2 sm:size-5" />

                <p className="absolute mt-0.5 hidden text-[0.8rem] text-red-500 peer-user-invalid:block sm:text-sm">
                  {item.errorMsg}
                </p>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="mt-14 w-full rounded-md bg-black py-3 font-semibold text-white shadow transition"
          >
            Create Account
          </button>
        </form>
      </div>
      {/* Showing the form data in a modal after successful submission */}
      {showData && <ShowDataModal formData={formData} />}
    </div>
  );
}
export default Signup;
