import React from "react";

function About() {
  return (
    <div className="w-full h-3/5">
      <h1 className="text-3xl text-center mt-16">
        QZ Seeker Clothing - Where Style Meets the Seasons
      </h1>
      <p className="text-base mt-12 mb-8 px-16 tracking-wide">
        We're not just a clothing shop, we're seasonal wanderers. We believe in
        embracing the ever-changing landscape of style, where autumn whispers
        cozy knits, and summer calls for sun-kissed linen.
      </p>
      <p className="text-base mb-12 px-16 tracking-wide">
        At QZ Seeker, you'll find clothes that speak to the adventurer within,
        crafted to make you feel confident and comfortable as you chase the
        adventures of each season. We curate vibrant collections inspired by
        nature's changing moods, ensuring you're always one step ahead of the
        style curve.
      </p>
      <h1 className="text-base px-16 tracking-wide mb-12">
        Got a question? Hit me up at{" "}
        <span className="font-semibold">qzseekerclothing@gmail.com</span>. Want
        to see more styles? Follow me on -{" "}
        <span className="font-semibold">@qzseekerclothing</span>.
      </h1>
    </div>
  );
}

export default About;
