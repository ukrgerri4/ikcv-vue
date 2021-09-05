<template>
	<header class="header">
    <ul class="header-list">
      <li class="header-list-item noselect">
        <router-link to="/" class="header-nav-link">Home</router-link>
      </li>
      <li class="header-list-item dropdown cursor-pointer noselect">
        <div class="header-nav-link">Projects</div>
        <div class="dropdown-content">
          <router-link to="/ikcv" class="header-nav-link noselect">Current Site</router-link>
          <router-link to="/manchkin-counter" class="header-nav-link align-left noselect">Manchkin Counter</router-link>
          <router-link to="/mediatR-extension" class="header-nav-link align-left noselect">MediatR Extension</router-link>
					<router-link to="/server" class="header-nav-link noselect">Server</router-link>
        </div>
      </li>

      <li class="header-list-item m-l-auto noselect">
        <router-link to="/about" class="header-nav-link">About</router-link>
      </li>
    </ul>
  </header> 
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class BaseHeader extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/styles/colors.scss";

.header {
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;

  top: 0;
  left: 0;
  z-index: 1030;
  height: 50px;
  width: 100%;
  background: $white;

  box-shadow: 0 2px 4px $base-box-shadow;

  // @media (max-width: 480px) {
  //   height: auto;
  //   width: 100%;
  // }
}

.header-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
  
  width: 100%;

  list-style: none;
  margin: 0;
  padding: 0;

  .header-list-item {
    display: flex;
    justify-content: center;

    .header-nav-link {
      display: flex;
      align-items: center;
      font-weight: 500;
      color: $base-text-color;

      padding: 10px;
      // border-radius: 3px;

      &.align-left {
        justify-content: start;
      }
    }
  }
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: $white;
  box-shadow: 0px 8px 16px 0px $base-box-shadow;
  z-index: 1030;
}

.dropdown:hover .dropdown-content { display: block; }
.dropdown:not(:hover) .dropdown-content { display: none; }

@media (hover: hover) {
  .header-nav-link { background-color: $white; }
  .header-nav-link:hover { background-color: $base-hover-color; }
}
</style>
