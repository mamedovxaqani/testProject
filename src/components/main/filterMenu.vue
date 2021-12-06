<template>
  <div class="main__filter-menu">
    <div class="filter-menu">
      <div class="filter-group">
        <p class="filter__text">Filters</p>
        <button class="btn-clear">Clear all</button>
      </div>

      <div class="filter-inputs">
        <div class="filter__empty-input">
          <input type="text" value="Empty" class="filter__input" />
          <span class="empty__close-btn">х</span>
        </div>
        <div class="filter__gray-input">
          <input type="text" value="Gray" class="filter__input" />
          <span class="gray__close-btn">х</span>
        </div>
      </div>
    </div>

    <div class="type-menu">
      <div class="type-group1">
        <p class="type__text">Type</p>
        <button class="up-color">
          <i class="fas fa-angle-up"></i>
        </button>
      </div>

      <div class="type-checkbox">
        <div class="type-group">
          <input type="checkbox" />
          <label for="">Single (33)</label>
        </div>

        <div class="type-group">
          <input type="checkbox" />
          <label for="">Empty (231)</label>
        </div>

        <div class="type-group">
          <input type="checkbox" />
          <label for="">Bondered (23)</label>
        </div>
      </div>

      <button class="btn__show-more">Show More</button>
    </div>

    <div class="colors-menu">
      <div class="color-group">
        <p class="color__text">Color</p>
        <button class="up-color">
          <i class="fas fa-angle-up"></i>
        </button>
      </div>

      <div class="color-inputs">
        <div class="color-checkbox-group">
          <input type="checkbox" value="Empty" />
          <label for="">Red (12)</label>
        </div>

        <div class="color-checkbox-group">
          <input type="checkbox" value="Empty" />
          <label for="">Gray (84)</label>
        </div>

        <div class="color-checkbox-group">
          <input type="checkbox" value="Empty" />
          <label for="">Coffee (6)</label>
        </div>

        <div class="color-checkbox-group">
          <input type="checkbox" value="Empty" />
          <label for="">Chocolate (12)</label>
        </div>

        <div class="color-checkbox-group">
          <input type="checkbox" value="Empty" />
          <label for="">Green (4)</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main__filter-menu {
  width: 203px;
  padding: 11px 21px;
}

.filter-group {
  display: flex;
  justify-content: space-between;
}

.btn-clear {
  color: rgb(247 74 0);
  background: rgb(255 255 255);
  border: none;
}

.filter__empty-input,
.filter__gray-input {
  position: relative;
}

.empty__close-btn,
.gray__close-btn {
  position: absolute;
  display: inline-block;
  color: #a4a6b3;
  right: 13px;
  top: 8px;
}

.filter__input {
  background-color: rgb(247 248 252);
  border: none;
  margin: 4px 1px;
  padding: 8px 13px;
}

.type__text,
.filter__text {
  margin: 15px 0px;
}

.type-group,
.color-checkbox-group {
  margin-bottom: 15px;
}

.btn__show-more {
  width: 204px;
  border: 1px solid rgb(223 224 235);
  padding: 10px 20px;
  background-color: rgb(255 255 255);
  border-radius: 4px;
  margin: 10px 0;
}

.color-group {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}

.color__text {
}

.up-color {
  border: none;
  color: #a4a6b3;
  background: inherit;
}

label {
  display: inline-block;
  margin-left: 10px;
}

.type-group1 {
  display: flex;
  justify-content: space-between;
}
</style>
