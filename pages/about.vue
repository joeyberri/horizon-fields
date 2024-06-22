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
      <h2 class="">Business Description</h2>
      <div class="mx-[142px] text-container">
        My business idea is centered on solving the problem of food wastage in
        Africa. Our model involves buying farm produce at discounted or market
        price from our partnered farmers, and shipping them in cold trucks to
        our affiliate agents who rent their home or building spaces to store the
        produce for a monthly commission. These agents also take care of storing
        and preserving the food produce in cold rooms, as well as packaging and
        fulfilling orders from our mobile ecommerce app by handing them over to
        delivery men on our delivery platform to deliver. We also onboard
        businesses such as restaurants, malls, and vendors who rely on our
        subscription supply of any farm produce. Additionally, we offer
        subscriptions and in some cases exclusively partner with manufacturing
        companies to supply them with farm produce on a massive scale. We are
        developing a machine learning model that will allow us to predict market
        demand and supply on a city-by-city level and a country-by-country
        level, which helps us to stop food from going out of season in a
        particular sub-region on the African continent. This system makes it
        possible to move food produce from countries of excess supply to
        countries of less supply and high demand. It helps determine the best
        shipping, train, and cargo routes to make that fulfillment.
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

<style scoped>
.text-container {
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 32px;
  background: #fff;
  font-size: 24px;
  line-height: 48px;
}
</style>
