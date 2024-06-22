<template>
  <SectionContainer :overlay="true" backgroundImage="/fields.jpg">
    <div class="text-white grid gap-[1.25em] text-center">
      <h1>“Innovative supply, Seasonless <br />Market"</h1>
      <p class="text-[2em] font-normal text-white">
        Revolutionize the way you access fresh produce. Join the movement
        towards a <br />
        sustainable, seasonless harvest.
      </p>
      <div>
        <button class="primary-btn py-[1em] px-[2em] w-fit">
          Join horizon fields
        </button>
      </div>
    </div>
  </SectionContainer>

  <!-- CAROUSEL START  -->
  <!-- <Carousel /> -->
  <!-- CAROUSEL END  -->

  <SectionContainer :overlay="true" backgroundImage="/smiling_lady.jpg">
    <div class="text-white grid gap-[1.25em] text-center">
      <h1>“Consumers"</h1>
      <p class="text-[2em] font-normal text-white">
        Revolutionize the way you access fresh produce. Join the movement
        towards a <br />
        sustainable, seasonless harvest.
      </p>
      <div>
        <button class="primary-btn py-[1em] px-[2em] w-fit">
          Join horizon fields
        </button>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <div class="text-black">
      <h2>Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 mt-[66px]"></div>
      <p class="mt-4 text-lg">Learn more about our mission and values.</p>
    </div>
  </SectionContainer>

  <SectionContainer backgroundImage="/tools_mosaic.jpg">
    <div class="text-center grid mx-auto gap-[70px] text-black">
      <h2 class="mt-[102px]">Our Mobile App</h2>
      <div class="flex justify-center gap-[17.2px]">
        <IconAppStore class="cursor-pointer" />
        <IconPlayStore class="cursor-pointer" />
      </div>
      <div>
        <img src="/phone.png" />
      </div>
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
