import { Mail, UserIcon, Lock } from "lucide-react";

export const inputFields = [
  {
    label: "Name",
    id: "name",
    type: "text",
    errorMsg: "Minimum 3 characters",
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
    label: "Password",
    id: "password",
    type: "password",
    errorMsg: "Must be at least 5 characters",
    required: true,
    minLength: 5,
    placeholder: "password",
    icon: Lock,
  },
];
