<template>
  <div>
    <main class="main__header">
      <div class="main__header-left">
        <h3 class="main__product-count">3 Products</h3>
        <ul class="product__list">
          <li class="product__list-item">
            10x
            <img
              src="../../assets/img/first__product.jpeg"
              class="item-png"
              alt=""
            />
          </li>
          <li class="product__list-item">
            324x

            <img
              src="../../assets/img/second__product.jpeg"
              class="item-png"
              alt=""
            />
          </li>
          <li class="product__list-item">
            155x
            <img
              src="../../assets/img/third__product.jpeg"
              class="item-png"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div class="main__header-right">
        <button class="btn__remove-all">Remove all</button>
        <button class="btn__add-kids">Add to Kids</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  border-bottom: 1px solid #dfe0eb;
}
.main__header-left {
  display: flex;
  align-items: center;
}
.main__header-right {
  margin-right: 15px;
}
.product__list {
  list-style: none;
  display: flex;
}

.main__product-count {
  margin: 0px 20px;
  font-size: 17px;
}

.product__list-item {
  border: 1px solid #dfe0eb;
  margin-right: 7px;
  display: inline-block;
  display: flex;
  align-items: center;
  padding: 4px 9px;
  font-size: 12px;
  color: rgb(116 118 139);
  border-radius: 6px;
}

.item-png {
  margin-left: 13px;
  width: 48px;
  height: 32px;
}

.btn__add-kids,
.btn__remove-all {
  padding: 14px 23px;
  border-radius: 5px;
}

.btn__remove-all {
  color: rgb(247 74 0);
  border: 1px solid rgb(223 224 235);
  background-color: rgb(255 255 255);
  margin-right: 10px;
}
.btn__add-kids {
  color: rgb(255 255 255);
  border: none;
  background-color: rgb(148 168 70);
}
</style>
