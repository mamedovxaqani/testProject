<template>
  <div class="main__content">
    <div class="main__content-header">
      <div class="main__search">
        <input type="text" class="search__input" placeholder="Search product" />
        <button class="btn__search">
          <i class="fas fa-search"></i>
        </button>
        <button class="btn__multi-search">
          <span class="burger"><i class="fas fa-bars"></i></span>
          <span class="multi-search">
            <i class="fas fa-search"></i>
          </span>
        </button>
      </div>

      <div class="main__btn-filter">
        <button class="sort__icon">
          <i class="fas fa-search"></i>
        </button>
        <span class="sort__text">Sort</span>
      </div>
    </div>

    <main-cards></main-cards>
  </div>
</template>

<style scoped>
.main__content {
  width: 100%;
  padding: 18px 16px;
}

.main__content-header {
  display: flex;
  justify-content: space-between;
}

.main__search {
  display: flex;
}

.search__input {
  background-color: rgb(247 248 252);
  border: 1px solid rgb(223 224 235);
  width: 365px;
  padding: 12px;
  border-radius: 4px 0px 0px 4px;
}

.btn__search {
  color: #74768b;
}

.btn__search,
.btn__multi-search {
  padding: 0px 9px;
  font-size: 14px;
  background: rgb(255 255 255);
  border-radius: 0px 4px 4px 0px;
  border: 0.5px solid rgb(223 224 235);
}

.btn__multi-search {
  position: relative;
}

.main__btn-filter {
  align-self: center;
}

.sort__icon {
  color: rgb(164 166 179);
  border: none;
  background: inherit;
  margin-right: 15px;
}

.burger {
  color: #74768b;
}
.multi-search {
  position: absolute;
  color: rgb(116 118 139);
  bottom: 9px;
  font-size: 12px;
  right: 5px;
}
</style>
