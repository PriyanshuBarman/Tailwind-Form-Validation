import { Lock, Mail, Phone, UserIcon } from "lucide-react";
import { useState } from "react";
import ShowDataModal from "../components/ShowDataModal";

const inputFields = [
  {
    label: "Name",
    id: "name",
    type: "text",
    errorMsg: "Must be at least 3 characters",
    required: true,
    placeholder: "Elon Musk",
    icon: UserIcon,
    minLength: 3,
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    errorMsg: "Please enter a valid email",
    required: true,
    placeholder: "elon@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    id: "phone",
    type: "tel",
    required: true,
    minLength: "10",
    maxLength: "10",
    pattern: "[0-9]{10}",
    placeholder: "9734343434",
    errorMsg: "Phone must be 10 digits",
    icon: Phone,
  },
  {
    label: "Password",
    id: "password",
    type: "password",
    errorMsg: "Password must be at least 5 characters",
    required: true,
    minLength: 5,
    placeholder: "password",
    icon: Lock,
  },
];

function OldWayRealtime() {
  const [showData, setShowData] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <div className="flex h-svh w-full items-center justify-center bg-transparent px-6 sm:bg-gray-50">
      <div className="w-lg max-w-lg py-8 sm:rounded-2xl sm:bg-white sm:px-12 sm:shadow">
        <h2 className="text-center text-2xl font-semibold">
          Create Your PopX Account
        </h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="space-y-6">
            {inputFields.map((item) => (
              <div key={item.id} className="relative">
                <label htmlFor={item.id}>{item.label}</label>

                <div className="input-wrapper relative">
                  <item.icon className="absolute top-1/2 left-3 z-10 size-5 -translate-y-1/2 sm:size-5" />
                  <input
                    onChange={handleInputChange}
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    required={item.required}
                    minLength={item.minLength}
                    maxLength={item.maxLength}
                    pattern={item.pattern}
                    value={formData[item.id]}
                    placeholder={item.placeholder || " "}
                    className="peer relative mt-1 w-full rounded-md border border-[#ccc] py-2 pl-10 valid:border-green-500 valid:bg-green-50 invalid:not-placeholder-shown:border-red-400 invalid:not-placeholder-shown:bg-red-100 focus:shadow focus:outline-0"
                  />

                  <p className="absolute mt-0.5 hidden text-[0.8rem] text-red-500 peer-[&:invalid:not(:placeholder-shown)]:block sm:text-sm">
                    {item.errorMsg}
                  </p>
                </div>
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
      {showData && (
        <ShowDataModal formData={formData} setShowData={setShowData} />
      )}
    </div>
  );
}

export default OldWayRealtime;
