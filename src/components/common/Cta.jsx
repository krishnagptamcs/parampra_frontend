import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFileUpload } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="bg-pale-cream p-2">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* upload list button */}
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center gap-2"
        >
          <FaFileUpload size={25} />
          Upload Samagri list
        </button>

        {/* order on whatsapp  */}
        <button
          type="button"
          class="focus:outline-none text-white bg-[#25D366] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center gap-2"
        >
          <IoLogoWhatsapp size={25} />
          Order on Whatsapp
        </button>
      </div>
    </section>
  );
};

export default Cta;
