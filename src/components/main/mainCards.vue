<template>
  <section class="main__cards">
    <div class="products__card">
      <div class="products__card-img">
        <img
          class="img"
          src="../../assets/img/first__list-product.jpeg"
          alt=""
        />
      </div>
      <div class="products__card-title">
        Clinker brick Kerameya KlinKerem Sapphire 5 48%
      </div>
      <ul class="products__card-description">
        <li class="products__card-description_item">Fost resistance: F150</li>
        <li class="products__card-description_item">Emptiness: 48%</li>
        <li class="products__card-description_item">Marc: M-300</li>
        <li class="products__card-description_item">Type: Empty, single</li>
      </ul>

      <div class="btns__counts">
        <div class="count__item">
          <button class="btn__minus">-</button>
          <div class="count__field">
            <input type="text" class="count__input" value="1" />
          </div>
          <button class="btn__plus">+</button>
        </div>

        <button class="btn__add">Add</button>
      </div>
    </div>
    <div class="products__card">
      <div class="products__card-img">
        <img
          class="img"
          src="../../assets/img/second__list-product.jpeg"
          alt=""
        />
      </div>
      <div class="products__card-title">
        Clinker brick Kerameya KlinKerem Sapphire 5 48%
      </div>
      <ul class="products__card-description">
        <li class="products__card-description_item">Fost resistance: F150</li>
        <li class="products__card-description_item">Emptiness: 48%</li>
        <li class="products__card-description_item">Marc: M-300</li>
        <li class="products__card-description_item">Type: Empty, single</li>
      </ul>

      <div class="btns__counts">
        <div class="count__item">
          <button class="btn__minus">-</button>
          <input type="text" class="count__input" value="10" />
          <button class="btn__plus">+</button>
        </div>

        <button class="btn__delete"><i class="far fa-trash-alt"></i></button>
      </div>
    </div>

    <div class="products__card">
      <div class="products__card-img">
        <img
          class="img"
          src="../../assets/img/third__list-product.jpeg"
          alt=""
        />
      </div>
      <div class="products__card-title">
        Clinker brick Kerameya KlinKerem Sapphire 5 48%
      </div>
      <ul class="products__card-description">
        <li class="products__card-description_item">Fost resistance: F150</li>
        <li class="products__card-description_item">Emptiness: 48%</li>
        <li class="products__card-description_item">Marc: M-300</li>
        <li class="products__card-description_item">Type: Empty, single</li>
      </ul>

      <div class="btns__counts">
        <div class="count__item">
          <button class="btn__minus">-</button>
          <input type="text" class="count__input" value="1" />
          <button class="btn__plus">+</button>
        </div>

        <button class="btn__add">Add</button>
      </div>
    </div>

    <div class="products__card">
      <div class="products__card-img">
        <img
          class="img"
          src="../../assets/img/fourth__list-product.jpeg"
          alt=""
        />
      </div>
      <div class="products__card-title">
        Clinker brick Kerameya KlinKerem Sapphire 5 48%
      </div>
      <ul class="products__card-description">
        <li class="products__card-description_item">Fost resistance: F150</li>
        <li class="products__card-description_item">Emptiness: 48%</li>
        <li class="products__card-description_item">Marc: M-300</li>
        <li class="products__card-description_item">Type: Empty, single</li>
      </ul>

      <div class="btns__counts">
        <div class="count__item">
          <button class="btn__minus">-</button>
          <input type="text" class="count__input" value="1" />
          <button class="btn__plus">+</button>
        </div>

        <button class="btn__add">Add</button>
      </div>
    </div>

    <div class="products__card">
      <div class="products__card-img">
        <img
          class="img"
          src="../../assets/img/five__list-product.jpeg"
          alt=""
        />
      </div>
      <div class="products__card-title">
        Clinker brick Kerameya KlinKerem Sapphire 5 48%
      </div>
      <ul class="products__card-description">
        <li class="products__card-description_item">Fost resistance: F150</li>
        <li class="products__card-description_item">Emptiness: 48%</li>
        <li class="products__card-description_item">Marc: M-300</li>
        <li class="products__card-description_item">Type: Empty, single</li>
      </ul>

      <div class="btns__counts">
        <div class="count__item">
          <button class="btn__minus">-</button>
          <input type="number" class="count__input" />
          <button class="btn__plus">+</button>
        </div>

        <button class="btn__add">Add</button>
      </div>
    </div>

    <div class="products__card">
      <div class="products__card-img">
        <img class="img" src="../../assets/img/six__list-product.jpeg" alt="" />
      </div>
      <div class="products__card-title">
        Clinker brick Kerameya KlinKerem Sapphire 5 48%
      </div>
      <ul class="products__card-description">
        <li class="products__card-description_item">Fost resistance: F150</li>
        <li class="products__card-description_item">Emptiness: 48%</li>
        <li class="products__card-description_item">Marc: M-300</li>
        <li class="products__card-description_item">Type: Empty, single</li>
      </ul>

      <div class="btns__counts">
        <div class="count__item">
          <button class="btn__minus">-</button>
          <input type="number" class="count__input" />
          <button class="btn__plus">+</button>
        </div>

        <button class="btn__add">Add</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main__cards {
  display: flex;
  flex-wrap: wrap;
  margin-top: 13px;
}

.products__card {
  border: 1px solid #dfe0eb;
  width: 243px;
  margin-right: 15px;
  margin-bottom: 12px;
  padding: 19px;
  margin-bottom: 15px;
  border-radius: 6px;
}

.products__card-img {
  text-align: center;
  padding: 39px 0px;
}

.products__card-title {
  font-size: 14px;
}

.products__card-description {
  list-style: none;
}

.products__card-description_item {
  list-style: none;
  margin: 8px 0;
  color: rgb(116 118 139);
  font-size: 12px;
}

.btns__counts {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.count__item {
  display: flex;
}

.count__field {
  display: inline-block;
}

.count__item {
  display: flex;
}

.btn__minus,
.btn__plus {
  padding: 3px 10px;
  font-size: 19px;
  padding: 3px 10px;
  border: none;
  font-size: 19px;
  background: rgb(255 255 255);
  border: 1px solid rgb(223 224 235);
  color: #74768b;
}

.count__input {
  background-color: rgb(247 248 252);
  border: 1px solid rgb(223 224 235);
  width: 59px;
  padding: 7px 6px;
  text-align: center;
}

.btn__add {
  background: rgb(148 168 70);
  border-radius: 4px;
  padding: 9px 16px;
  color: rgb(255 255 255);
  border: none;
}

.img {
  width: 120px;
  height: 72px;
}

.btn__delete {
  border-radius: 4px;
  color: rgb(247 74 0);
  font-size: 18px;
  padding: 5px 15px;
  border: none;
  background: rgb(255 255 255);
  border: 1px solid rgb(223 224 235);
}
</style>
