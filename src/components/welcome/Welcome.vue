<template>
<div>

  <div class="welcome-main" :style="[styles]">
    <div class="container">
      <div class="welcome-main-center">
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
          <a-row class="welcome-pre-filtered" type="flex" justify="space-between">
            <a-col :span="18">
              <a-input placeholder="What do you want ?">
                <a-icon slot="addonAfter" type="environment"/>
              </a-input>
            </a-col>
            <a-col :span="5">
              <selected :selects="bedSelect.data" :options="bedSelect.options"/>
            </a-col>
          </a-row>
          <a-row class="welcome-sub-filtered" type="flex" justify="space-between">
            <a-col :span="18">
              <a-row type="flex" justify="space-between">
                <a-col :span="5">
                  <selected :selects="bedSelect.data" :options="bedSelect.options" />
                </a-col>
                <a-col :span="5">
                  <selected :selects="bathSelect.data" :options="bathSelect.options" />
                </a-col>
                <a-col :span="5">
                  <selected :selects="minSelect.data" :options="minSelect.options" />
                </a-col>
                <a-col :span="5">
                  <selected :selects="maxSelect.data" :options="maxSelect.options" />
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="5">
              <selected />
            </a-col>
          </a-row>
          <a-row><a-button class="welcome-input-search" size="large">SEARCH</a-button></a-row>
        </div>

        <div class="welcome-total-count">
          <div class="welcome-total-properties">
            <div class="fs-16">Total Properties</div>
            <div>
              <span><count-to :startVal='0' :endVal='25000' :duration='5000'></count-to>+</span>
            </div>
          </div>
          <div class="welcome-total-users">
            <div class="fs-16">Total Users</div>
            <div>
              <span><count-to :startVal='0' :endVal='3000' :duration='5000'></count-to>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="welcome-sub-content">
    <a-row type="flex" justify="center">
      <a-col :span="3">
        <a-row type="flex" justify="space-around">
          <a-col><i class="fas fa-trophy"></i></a-col>
          <a-col>Verified Listing</a-col>
        </a-row>
      </a-col>
      <a-col :span="4" :offset="1">
        <a-row type="flex" justify="space-around">
          <a-col><i class="fas fa-language"></i></a-col>
          <a-col>Mutilanguage Support</a-col>
        </a-row>
      </a-col>
      <a-col :span="4" :offset="1">
        <a-row type="flex" justify="space-around">
          <a-col><i class="fab fa-windows"></i></a-col>
          <a-col>360 Degree Apartment View</a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</div>
</template>

<script>
import Selected from '@/components/selected/Selected';
import { VueTyper } from 'vue-typer';
import CountTo from 'vue-count-to';

export default {
  components: { Selected, VueTyper, CountTo },
  data() {
    return {
      interval: 0,
      backgrounds: [
        `url("${require('@/assets/home.png')}")`,
        `url("${require('@/assets/home1.jpg')}")`,
        `url("${require('@/assets/home2.jpg')}")`
      ],
      styles: {
        backgroundImage: `url("${require('@/assets/home.png')}")`,
      },
      texts: ["HELLO  SAIGON","Furnished House with Amenities","Long-Term Rental Made Easy"],
      propertySelect: {
        data: [
          
        ]
      },
      bedSelect: {
        data: [
          {key: 1, value: 1},
          {key: 2, value: 2},
          {key: 3, value: 3},
          {key: 4, value: 4},
          {key: 5, value: 5},
          {key: 6, value: 6}
        ],
        options: {
          icon: 'fas fa-bed'
        }
      },
      bathSelect: {
        data: [
          {key: 1, value: 1},
          {key: 2, value: 2},
          {key: 3, value: 3},
          {key: 4, value: 4},
          {key: 5, value: 5},
          {key: 6, value: 6}
        ],
        options: {
          icon: 'fas fa-bath'
        }
      },
      minSelect: {
        data: [
          {key: 400, value: '$450'},
          {key: 500, value: '$500'},
          {key: 700, value: '$700'},
          {key: 800, value: '$800'},
          {key: 900, value: '$900'},
          {key: 1000, value: '$1000'},
          {key: 1500, value: '$1500'},
          {key: 2000, value: '$2000'},
          {key: 3000, value: '$3000'},
          {key: 5000, value: '$5000'},
          {key: 7500, value: '$7500'},
        ],
        options: {
          text: 'Min'
        }
      },
      maxSelect: {
        data: [
          {key: 400, value: '$450'},
          {key: 500, value: '$500'},
          {key: 700, value: '$700'},
          {key: 800, value: '$800'},
          {key: 900, value: '$900'},
          {key: 1000, value: '$1000'},
          {key: 1500, value: '$1500'},
          {key: 2000, value: '$2000'},
          {key: 3000, value: '$3000'},
          {key: 5000, value: '$5000'},
          {key: 7500, value: '$7500'},
        ],
        options: {
          text: 'Max'
        }
      },
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
<style src="./Welcome.scss" lang="scss" scoped></style>


