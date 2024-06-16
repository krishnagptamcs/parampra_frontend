import React from "react";

const SocialLinks = () => {
  return (
    <section className="bg-smoke-gray p-4">
      <div className="w-11/12 mx-auto flex flex-row justify-between items-center">
        <div>
          <p>logo text</p>
        </div>

        {/* social links */}

        <div className="flex items-center justify-around gap-5">
          <p>fb</p>
          <p>yt</p>
          <p>insta</p>
          <p>whstsapp</p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
