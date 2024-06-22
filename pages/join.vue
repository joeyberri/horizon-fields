<template>
  <SectionContainer backgroundImage="/shed.jpg">
    <div class="glass-container">
      <ul class="glass-pane">
        <li
          v-for="menu in ['Consumers', 'Business', 'Affiliate', 'Delivery']"
          class="glass-pane-tab"
          @click="customerType = menu"
          :class="
            menu === customerType
              ? 'bg-green !text-black !font-semibold'
              : 'hover:bg-white/10'
          "
        >
          {{ menu }}
        </li>
      </ul>
      <h3 class="text-white">Create your account</h3>

      <form v-if="customerType === 'Consumers'" class="grid gap-[1em]">
        <div class="flex gap-[.5em]">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Location" v-model="location" />
        <input type="password" placeholder="Password" v-model="password" />
      </form>

      <form v-if="customerType === 'Business'" class="grid w-full gap-[1em]">
        <input type="text" placeholder="Business Name" v-model="businessName" />
        <input
          type="text"
          placeholder="Contact Person"
          v-model="contactPerson"
        />

        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Location" v-model="location" />
        <input
          type="text"
          placeholder="Delivery Schedule"
          v-model="deliverySchedule"
        />
        <input type="password" placeholder="Password" v-model="password" />
      </form>

      <form v-if="customerType === 'Affiliate'" class="grid gap-[1em]">
        <div class="flex gap-[.5em]">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Location" v-model="location" />
        <input type="password" placeholder="Password" v-model="password" />
        <input type="text" placeholder="Availability" v-model="availability" />
        <label class="text-white">Storage Capacity (Square Feet)</label>
        <div class="flex gap-[.5em]">
          <input type="text" placeholder="Height" v-model="height" />
          <input type="text" placeholder="Width" v-model="width" />
        </div>
      </form>

      <form v-if="customerType === 'Delivery'" class="grid gap-[1em]">
        <div class="flex gap-[.5em]">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Location" v-model="location" />
        <input type="text" placeholder="Vehicle Type" v-model="vehicleType" />
        <input type="password" placeholder="Password" v-model="password" />
      </form>

      <div class="grid w-full foot">
        <button class="primary-btn my-[1em] mb-[2em] py-[1em]">Sign Up</button>
        <span>
          Already have an account? <b class="text-green"> Login </b>
        </span>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      password: "",
      customerType: "Consumers",
    };
  },
};
</script>

<style scoped>
.foot {
  color: var(--Color-Palette-Dark-Moon-300, #c5cacb);
  text-align: center;
  font-family: Kanit, Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
}
.glass-container {
  border-radius: 32px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.glass-pane {
  border-radius: 12px;
  border: 1px solid rgba(197, 202, 203, 0.4);
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.glass-pane-tab {
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 8px;
  color: #fff;

  font-family: "Clash Display";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
}
</style>
