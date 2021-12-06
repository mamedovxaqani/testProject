<template>
  <div>
    <header class="header">
      <div class="header__content">
        <div class="header__left-block">
          <div>
            <span class="category__title">Catalog</span>
            <span class="category__right-icon"
              ><i class="fas fa-angle-right"></i
            ></span>
            <span class="category__briks">Briks</span>
          </div>
        </div>
        <div class="header__right-block">
          <div class="bell__icon"><i class="fas fa-bell"></i></div>
          <div class="user__profile">
            <span class="user__name">John Doe</span>
            <img class="user__img" src="../../assets/img/user.jpeg" alt="" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 1px;
}

.header__content {
  padding: 2px 10px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
}

.header__left-block {
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.header__right-block {
  display: flex;
  align-items: center;
}

.user__profile {
  padding-left: 28px;
  padding-left: 28px;
  display: flex;
  align-items: center;
}

.user__img {
  width: 40px;
  border-radius: 54px;
  border: 1px solid #dfe0eb;
  padding: 3px;
  margin: 0px 14px;
  display: inline-block;
}

.user__name {
  border-left: 1px solid rgb(223 224 235);
  padding-left: 18px;
}

.bell__icon,
.header-profile {
  padding: 24px 0;
}

.bell__icon {
  position: relative;
  color: #a4a6b3;
}

.bell__icon::after {
  position: absolute;
  content: "";
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  background-color: rgb(148 168 70);
  border-radius: 23px;
}

.category__title {
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  color: #a4a6b3;
}

.category__briks {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}

.category__right-icon {
  color: rgb(164 166 179);
  font-size: 14px;
  margin: 0 15px;
  display: inline-block;
}
</style>
