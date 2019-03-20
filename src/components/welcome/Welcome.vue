<template>
<div>

  <div class="welcome-main" :style="[styles]">
    <div class="welcome-main-center">
      <div class="container">
        <div class="welcome-main-title">
          <vue-typer
            :text="texts"
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='5000'
            :erase-delay='70'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='smooth'
          ></vue-typer>
        </div>
        <div class="welcome-popular-tag">
          <span>Popular Areas:</span>
          <span class="popular-tag-item">
            <span class="border-bt">District 1</span>
          </span>
          <span class="popular-tag-item">
            <span class="border-bt">District 2</span>
          </span>
          <span class="popular-tag-item">
            <span class="border-bt">District 4</span>
          </span>
          <span class="popular-tag-item">
            <span class="border-bt">District 7</span>
          </span>
          <span class="popular-tag-item">
            <span class="border-bt">Binh Thanh</span>
          </span>
        </div>

        <div class="welcome-content-input">
          <a-row type="flex" justify="space-between">
            <a-col :span="18">
              <a-input placeholder="What do you want ?">
                <a-icon slot="addonAfter" type="environment"/>
              </a-input>
            </a-col>
            <a-col :span="5">
              <a-select defaultValue="lucy" style="width: 100%">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <a-row class="mt-30" type="flex" justify="space-between">
            <a-col :span="18">
              <a-row type="flex" justify="space-between">
                <a-col :span="5">
                  <a-select defaultValue="lucy" style="width: 100%">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled>Disabled</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="5">
                  <a-select defaultValue="lucy" style="width: 100%">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled>Disabled</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="5">
                  <a-select defaultValue="lucy" style="width: 100%">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled>Disabled</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </a-col>
                <a-col :span="5">
                  <a-select defaultValue="lucy" style="width: 100%">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled>Disabled</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                  </a-select>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="5">
              <a-select defaultValue="lucy" style="width: 100%">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="disabled" disabled>Disabled</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-col>
          </a-row>
          <a-row><a-button class="welcome-input-search" size="large">SEARCH</a-button></a-row>
        </div>

        <div class="welcome-total-count">
          <div class="welcome-total-properties">
            <div class="fs-16">Total Properties</div>
            <div class="fs-36"><span>25000</span>+</div>
          </div>
          <div class="welcome-total-users">
            <div class="fs-16">Total Users</div>
            <div class="fs-36"><span>3000</span>+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="welcome-sub-content">
    <a-row type="flex" justify="center">
      <a-col :span="2">
        <a-row type="flex" justify="space-between">
          <a-col><i class="fas fa-trophy"></i></a-col>
          <a-col>Verified Listing</a-col>
        </a-row>
      </a-col>
      <a-col :span="3" :offset="1">
        <a-row type="flex" justify="space-between">
          <a-col><i class="fas fa-language"></i></a-col>
          <a-col>Mutilanguage Support</a-col>
        </a-row>
      </a-col>
      <a-col :span="4" :offset="1">
        <a-row type="flex" justify="space-between">
          <a-col><i class="fab fa-windows"></i></i></a-col>
          <a-col>360 Degree Apartment View</a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</div>
</template>

<script>
import { VueTyper } from 'vue-typer';
import { setInterval, clearInterval } from 'timers';

export default {
  components: { VueTyper },
  data() {
    return {
      interval: 0,
      backgrounds: [
        `url("${require('@/assets/home.png')}")`,
        `url("${require('@/assets/home1.jpg')}")`,
        `url("${require('@/assets/home2.jpg')}")`
      ],
      styles: {
        height: '90vh',
        backgroundImage: `url("${require('@/assets/home.png')}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      },
      texts: ["HELLO  SAIGON","Furnished House with Amenities","Long-Term Rental Made Easy"]
    }
  },
  methods: {
    getBackground() {
      this.interval = setInterval(() => {
        const index = Math.floor( Math.random() * (3 - 1) + 1 );
        this.styles.backgroundImage = this.backgrounds[index];
      }, 5140)
    }
  },
  mounted() {
    this.getBackground();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>
<style src="./Welcome.css" scoped></style>


