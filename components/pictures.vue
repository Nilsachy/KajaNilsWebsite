<template>
  <gallery :images="images" />
</template>

<script>
import Gallery from 'vuejs-image-gallery'
export default {
  components: {
    Gallery
  },
  data () {
    return {
      images: [
        { id: 1, imgSrc: require('@/assets/1.jpeg') },
        { id: 2, imgSrc: require('@/assets/2.jpeg') },
        { id: 3, imgSrc: require('@/assets/3.jpeg') },
        { id: 4, imgSrc: require('@/assets/4.jpeg') },
        { id: 5, imgSrc: require('@/assets/5.jpeg') },
        { id: 6, imgSrc: require('@/assets/6.jpeg') },
        { id: 7, imgSrc: require('@/assets/7.jpeg') },
        { id: 8, imgSrc: require('@/assets/8.jpg') },
        { id: 9, imgSrc: require('@/assets/9.jpeg') },
        { id: 10, imgSrc: require('@/assets/10.jpeg') },
        { id: 11, imgSrc: require('@/assets/11.jpeg') },
        { id: 12, imgSrc: require('@/assets/12.jpeg') }
      ]
    }
  }

}
</script>

<style>

</style>
