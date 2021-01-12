<template>
  <div class="cart-block">
    <div class="cart-items">
      <item v-for="item of items" 
      :key="item.id_product" 
      :item="item" 
      type="cart" 
      @deleteitem="removeItem"/>
    </div>
    <div class="total">
        <span>Общая стоимость {{ totalCost }} </span>
    </div>
  </div>
</template>

<script>
import item from "../components/list_item.vue"
export default {
  components: { item },
  data() {
    return {
      items: [],
      url: "https://raw.githubusercontent.com/mayyaalekseeva/orion-project/master/server/db/cart.json"
    }
  },
  methods: {
    addItem(item) {
      let find = this.items.find(el => el.id_product == item.id_product)
      if (find) {
                find.quantity++
            } else {
                this.items.push(Object.assign({}, item, {quantity: 1}))
            }
    },
    removeProduct(item) {
       let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.quantity--
            } else {
                this.items.splice(this.items.indexOf(find), 1)
            }
    }
  },
  computed: {
    totalAmount() {
      let total = 0
      this.items.forEach(elem => (total += elem.quantity))
      return total
    },
    totalCost() {
      let total = 0
      this.items.forEach(elem => (total += elem.price * elem.quantity))
      return total
    }
  },
  mounted() {
    this.$parent.get(this.url).then(data => (this.items = data.contents))
  }
}
</script>

<style>
.total {
    box-sizing: border-box;
    display: flex;
    padding: 15px;
    font-weight: bold;
}
</style>