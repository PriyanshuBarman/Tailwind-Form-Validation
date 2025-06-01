function ShowDataModal({ formData, setShowData }) {
  return (
    <div className="fixed inset-0 z-10 content-center bg-black/10 backdrop-blur-lg">
      <div className="m-auto flex w-[90%] max-w-lg flex-col items-center justify-center rounded-xl bg-white px-7 py-8 sm:px-12 sm:py-10 sm:shadow">
        <h2 className="text-center text-xl font-medium italic">
          Form Submit Successfull
        </h2>

        <ul className="mt-8 w-full space-y-6 sm:mt-12">
          {Object.keys(formData).map((key) => (
            <li key={key} className="flex gap-2">
              <h4 className="font-medium capitalize">{key}:</h4>
              <p className="break-all">{formData[key] || "N/A"}</p>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowData(false)}
          className="mt-14 w-full rounded-md bg-black py-3 font-semibold text-white shadow transition-all duration-200 ease-in-out hover:scale-[1.02]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ShowDataModal;
