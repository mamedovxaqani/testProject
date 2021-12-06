<template>
  <div>
    <aside class="left__panel">
      <div class="brang-logo">
        <div class="brand__icon"></div>
        <span class="brand">Logo <span class="brand__text">Text</span></span>
      </div>
      <nav class="left__panel-navbar">
        <ul class="left__panel-nav">
          <li class="nav-item">
            <i class="fas fa-home"></i>
            <span class="nav-item__text">Dashboad</span>
          </li>
          <li class="nav-item page-checked">
            <i class="fas fa-th-large"></i>
            <span class="nav-item__text">Catalog</span>
          </li>
          <li class="nav-item">
            <i class="fas fa-box-open"></i>
            <span class="nav-item__text">Kits</span>
          </li>
          <li class="nav-item">
            <i class="fab fa-buffer"></i>

            <span class="nav-item__text">Offers</span>
            <span class="nav-item__badge">5</span>
          </li>
          <li class="nav-item">
            <i class="fas fa-envelope"></i>

            <span class="nav-item__text">Messages</span>
          </li>
          <li class="nav-item">
            <i class="fas fa-star"></i>

            <span class="nav-item__text">Ratting</span>
            <span class="nav-item__badge">2</span>
          </li>
          <li class="nav-item">
            <i class="fas fa-cog"></i>

            <span class="nav-item__text">Setting</span>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Livvic&display=swap");

.left__panel {
  width: 235px;
  height: 100vh;
  border-right: 1px solid;
  padding: 30px;
}

.left__panel-navbar {
  margin-top: 30px;
}

.left__panel-nav {
  list-style: none;
  display: contents;
}

.brang-logo {
  display: flex;
}

.brand__icon {
  margin-left: 10px;
  width: 17px;
  height: 11px;
  border-top: 7px solid #94a846;
  border-right: 7px solid #94a846;
  border-left: 7px solid #94a846;
  transform: rotate3d(2, 13, 1, 64deg);
  position: relative;
}

.brand__icon::before {
  content: "";
  display: block;
  position: absolute;
  width: inherit;
  height: inherit;
  border-top: 7px solid rgb(54 55 64);
  border-right: 7px solid rgb(54 55 64);
  border-left: 7px solid rgb(54 55 64);
  top: -1px;
  bottom: 0px;
  right: 0;
  left: -14px;
  z-index: 1;
}

.brand {
  text-transform: uppercase;
  color: rgb(148 168 70);
  font-weight: bold;
  position: relative;
}
.brand__text {
  color: black;
  position: absolute;
}

.nav-item {
  padding: 16px 12px;
  border-radius: 4px;
}

.page-checked {
  background-color: rgb(247 248 252);
}

.page-checked > .fas {
  color: #94a846;
}

.nav-item__text {
  padding: 18px;
}
.nav-item__badge {
  float: right;
  background-color: rgb(148 168 70);
  color: rgb(255, 255, 255);
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 2px;
}

.fas,
.fab {
  color: #a4a6b3;
}
</style>
