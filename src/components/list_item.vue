<template>
  <div :class="calcWrapClass">
    
    <template v-if="type === 'catalog'">
        <div class="desc">
        <img src="../assets/300x200.jpg" v-if="(type !== 'filtered')" alt="product" />
        <h1>{{ item.product_name }}</h1>
        <p>{{ item.price }}</p>
        <button
          class="buy-btn"
          name="buy-btn"
          @click="$parent.$parent.$refs.cart.addItem(item)"
        >Купить</button>
      </div>
    </template>
    <template v-else-if="type === 'cart'">
        <img src="../assets/100x80.jpg" v-if="(type !== 'filtered')" alt="product" />
      <div class="product-desc">
        <p class="product-title">{{ item.product_name }}</p>
        <p class="product-quantity">Количество: {{ item.quantity }}</p>
        <p class="product-single-price">Цена: {{ item.price }}</p>
      </div>
      <div class="right-block">
        <button name="del-btn" class="del-btn" @click="$parent.removeProduct(item)">&times;</button>
      </div>
    </template>
       <template v-else-if="type === 'filtered'">
      <img class="filtered" src="../assets/50x40.jpg" />
      <div class="descp">
        <h1 class="descpHead">{{ item.product_name }}</h1>
        <button class="buy-btn" name="buy-btn" @click="$parent.$parent.$refs.cart.addItem(item)">Купить</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  
  props: {
    item: { type: Object },
    type: { type: String, default: "catalog" }
  },
  computed: {
    calcWrapClass() {
        if (this.type == "catalog") {
        return "product-item"
      } else if (this.type == "filtered") {
        return "filtered-item"
      } else {
        return "cart-item"
      }
    }
  }
}
</script>