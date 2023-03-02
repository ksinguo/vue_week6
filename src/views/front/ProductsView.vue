<template>
    <div>產品列表</div>
    <table>
        <tbody>
            <tr v-for='product in products' :key="product.id">
                <td>{{product.title}}</td>
                <td><img :src="product.imageUrl" alt="" width="300">
                </td>
                <td>
                  <RouterLink :to="`/product/${product.id}`">單一產品頁面</RouterLink>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { RouterLink, RouterView} from "vue-router";
const {VITE_APP_URL,VITE_APP_PATH} = import.meta.env
export default{
    data() {
    return {
      products:[]
    };
  },
    mounted() {
    this.axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
    .then((res)=>{
      console.log(res.data)
      this.products = res.data.products
    })
    .catch((err)=>{
      console.log(err)
    })
  

  },
}
</script>
