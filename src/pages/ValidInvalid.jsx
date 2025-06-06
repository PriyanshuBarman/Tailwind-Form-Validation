import { LockIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react";

function ValidInvalid() {
  return (
    <div className="flex h-svh w-full items-center justify-center bg-transparent px-6 sm:bg-neutral-100">
      <div className="w-lg max-w-lg py-8 sm:rounded-2xl sm:bg-white sm:px-12 sm:shadow">
        <div className="space-y-2 text-center">
          <h2 className="text-center text-lg font-medium sm:text-xl">
            Form Validation Using CSS
          </h2>
          <p className="text-neutral-500">Pseudo classes - :valid :invalid</p>
        </div>

        <form className="mt-8">
          <div className="space-y-5 sm:space-y-6">
            <div className="form-group relative">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper-old">
                <UserIcon className="icon" />
                <input
                  autoComplete="off"
                  id="name"
                  type="text"
                  required
                  minLength="3"
                  pattern="[A-Za-z\s]+"
                  placeholder="Bill Gates"
                  className="peer inputbox-old"
                />
                <p className="error-message-old">
                  Minimum 3 characters, alphabets only
                </p>
              </div>
            </div>

            <div className="form-group relative">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper-old">
                <MailIcon className="icon" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="gates@gmail.com"
                  className="peer inputbox-old"
                />
                <p className="error-message-old">
                  Please enter a valid email address
                </p>
              </div>
            </div>

            <div className="form-group relative">
              <label htmlFor="phone">Phone</label>
              <div className="input-wrapper-old">
                <PhoneIcon className="icon" />
                <input
                  id="phone"
                  type="tel"
                  required
                  minLength="10"
                  maxLength="10"
                  pattern="\d{10}"
                  placeholder="9734343434"
                  className="peer inputbox-old"
                />
                <p className="error-message-old">Phone must be 10 digits</p>
              </div>
            </div>

            <div className="form-group relative">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper-old">
                <LockIcon className="icon" />
                <input
                  id="password"
                  type="password"
                  required
                  minLength="6"
                  placeholder="password"
                  className="peer inputbox-old"
                />
                <p className="error-message-old">
                  Password must be at least 6 characters
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-14 w-full rounded-md bg-black py-2.5 text-sm text-white shadow transition sm:py-3 sm:font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ValidInvalid;
