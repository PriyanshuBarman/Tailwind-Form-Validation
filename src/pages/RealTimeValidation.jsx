import { Mail, UserIcon, Lock } from "lucide-react";
import { useState } from "react";
import { inputFields } from "../constant";
import ShowDataModal from "../components/ShowDataModal";

function RealTimeValidation() {
  const [showAvailableErrors, setShowAvailableErrors] = useState(false);
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
    } else {
      setShowAvailableErrors(true);
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
                  className={`peer relative mt-1 w-full rounded-md border py-2 pl-10 focus:shadow focus:outline-0 ${
                    showAvailableErrors
                      ? "valid:border-green-500 valid:bg-green-50 invalid:border-red-400 invalid:bg-red-100"
                      : "border-[#ccc] valid:border-green-500 valid:bg-green-50 invalid:not-placeholder-shown:border-red-400 invalid:not-placeholder-shown:bg-red-100"
                  }`}
                />
                <item.icon className="absolute top-[calc(50%+0.8rem)] left-3 size-5 -translate-y-1/2 sm:size-5" />

                <p
                  className={`absolute mt-0.5 text-[0.8rem] text-red-500 sm:text-sm ${
                    showAvailableErrors
                      ? "hidden peer-invalid:block"
                      : "hidden peer-[&:invalid:not(:placeholder-shown)]:block"
                  }`}
                >
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

export default RealTimeValidation;
