<template>
  <div>
    <div class="container mx-auto">
      <div class="flex justify-between py-5">
        <div class="flex items-center py-1 px-2 rounded-md bg-white">
          <i class="fas fa-map-marker-alt text-bluee"></i>
          <select name="" id="">
            <option value="">Алматы</option>
            <option value="">Астана</option>
            <option value="">Павлодар</option>
            <option value="">Актобе</option>
          </select>
        </div>
        <div class="bg-orangee p-2 rounded-md flex items-center">
          <i class="fas fa-phone-alt text-yellou"></i>
          <p class="mx-3 text-yellou">Горячая линия с 08:00 до 00:00</p>
          <a class="text-lg font-semibold" href="tel:1717">1717</a>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="flex items-center justify-between container mx-auto py-2">
        <router-link to="/">
          <img
            src="https://www.technodom.kz/images/global/logo_technodom.svg"
            alt=""
          />
        </router-link>
        <div
          class="
            bg-oran
            py-2
            px-3
            text-white
            rounded-md
            flex
            items-center
            text-sm
          "
        >
          <i class="fa-solid fa-list mr-3"></i>
          <p class="font-semibold">Каталог</p>
        </div>
        <div class="w-1/3 relative">
          <input
            placeholder="Я хочу найти"
            class="w-full border border-oran rounded-lg py-3 px-3"
            type="text"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
          <!-- <div class="bg-red-500 rounded-lg">
              <div class="w-3/4 border-b border-gray-500">
                <p class="ml-3 text-lg">as</p>
              </div>
          </div> -->
        </div>
        <div class="flex text-center">
          <div class="mx-3 hover:text-oran hover:cursor-pointer">
            <i class="fa-solid fa-heart"></i>
            <p class="text-yellou">Избранное</p>
          </div>
          <div class="mx-3">
            <i class="fa-solid fa-scale-unbalanced"></i>
            <p class="text-yellou">Сравнить</p>
          </div>
          <div class="mx-3 relative">
            <div class="relative" @click="changeCart()">
              <i class="fa-solid fa-cart-shopping"></i>
              <p class="text-yellou">Корзина</p>
              <p class="counter">{{ cartProductsN }}</p>
            </div>
            <div v-if="showCart === 1" class="cart-list">
              <div class="flex items-center justify-between my-2" v-for="(product, index) of cartProducts" :key="product.id">
                <img class="w-14 h-14" :src="product.images[0].first" alt="">
                <p class="text-xs text-left ml-2">{{ index+1 }}. {{ product.title }}</p>
                <p class="text-lg font-semibold">{{ product.price }}</p>
                <p @click="removeItem(index)" class="ml-3 text-lg hover:cursor-pointer"><i class="text-red-500 fa-solid fa-xmark"></i></p>
              </div>
              <p>Итого: {{ cartProductsPrice }}</p>
              <div class="flex justify-between items-center">
                <p>Перейти в коризну</p>
                <p @click="sendRequest()">Очистить корзину</p>
              </div>             
            </div>
          </div>
          <div class="mx-3">
            <i class="fa-solid fa-user"></i>
            <p class="text-yellou">Вход</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavbarComp",
  data() {
    return {
      showCart: 0,
    }
  },
  computed: mapGetters(["cartProducts", "cartProductsN", "cartProductsPrice"]),
  methods: {
    ...mapActions(["removeAll", "removeSingleProduct"]),
    changeCart() {
      if(this.showCart === 0) {
        this.showCart = 1
      } else {
        this.showCart = 0
      }
    },
    sendRequest() {
      this.removeAll()
    },
    removeItem(id) {
      this.removeSingleProduct(id)
    }
  }
};
</script>