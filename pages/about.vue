<template>
  <SectionContainer :overlay="true" backgroundImage="/gardener.jpg">
    <div class="text-white grid gap-[1.25em] text-center">
      <h1>Our Vision</h1>
      <p class="text-[37.52px] font-semibold text-white">
        "To be the leading provider of fresh produce across Africa,
        <br />ensuring food availability and reducing wastage through
        <br />innovative logistics."
      </p>
    </div>
  </SectionContainer>

  <!-- CAROUSEL START  -->
  <!-- <Carousel /> -->
  <!-- CAROUSEL END  -->

  <SectionContainer :overlay="true" backgroundImage="/veggies.jpg">
    <div class="text-white grid gap-[1.25em] text-center">
      <h1>Our Mission</h1>
      <p class="text-[37.52px] font-semibold text-white">
        "To deliver fresh, quality produce to consumers and <br />
        businesses year-round, leveraging technology to predict and <br />
        fulfill demand."
      </p>
    </div>
  </SectionContainer>

  <SectionContainer backgroundImage="/tools_mosaic.jpg">
    <div class="text-center grid mx-auto gap-[70px] text-black">
      <h2 class="mt-[102px]">Business Description</h2>

    </div>
  </SectionContainer>

  <SectionContainer class="bg-[#F7FDE6]">
    <div class="flex items-center justify-between w-full mx-[141px] text-black">
      <div>
        <h2 class="text-left">
          Connecting African <br />
          Market
        </h2>
        <p class="text-[1.25em] mt-[61px]">Some description here</p>
      </div>
      <img src="/africa.png" />
    </div>
  </SectionContainer>

  <SectionContainer class="bg-[#F7FDE6]">
    <div class="grid gap-[1.5em] text-black text-center">
      <h2>Leveraging AI & Machine learning</h2>

      <p class="text-[1.25em] leading-[44px]">
        We are leveraging AI & Machine learning to predict where in the world
        food produce is out of season and in demand. In order to supply that
        nation <br />
        ahead of time supply to their market.
      </p>
      <div class="mx-auto">
        <img src="/world.png" />
      </div>
    </div>
  </SectionContainer>
</template>
