<template>
    <h1>單一產品細節</h1>
    <table>
        <tbody>
            <tr >
                <td>{{ product.title }}</td>
                <td><img :src="product.imageUrl" alt="" width="300">
                </td>
            </tr>
            <tr>
                <td>{{ product.content }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
    data() {
        return {
            product:{}
        }
    },
    mounted() {
        // console.log('$route', this.$route.params.id)
        // console.log('$router', this.$)
        this.axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${this.$route.params.id}`)
            .then((res) => {
                this.product = res.data.product
                console.log(this.product)
            })
            .catch((err) => {
                console.log(err)
            })


    }
}
</script>