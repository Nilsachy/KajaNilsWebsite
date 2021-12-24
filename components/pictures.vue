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
        { id: 1, imgSrc: require('@/static/1.jpeg') },
        { id: 2, imgSrc: require('@/static/2.jpeg') },
        { id: 3, imgSrc: require('@/static/3.jpeg') },
        { id: 4, imgSrc: require('@/static/4.jpeg') },
        { id: 5, imgSrc: require('@/static/5.jpeg') },
        { id: 6, imgSrc: require('@/static/6.jpeg') },
        { id: 7, imgSrc: require('@/static/7.jpeg') },
        { id: 8, imgSrc: require('@/static/8.jpg') },
        { id: 9, imgSrc: require('@/static/9.jpeg') },
        { id: 10, imgSrc: require('@/static/10.jpeg') },
        { id: 11, imgSrc: require('@/static/11.jpeg') },
        { id: 12, imgSrc: require('@/static/12.jpeg') },
        { id: 13, imgSrc: require('@/static/13.jpeg') },
        { id: 14, imgSrc: require('@/static/14.jpeg') },
        { id: 15, imgSrc: require('@/static/15.jpeg') },
        { id: 16, imgSrc: require('@/static/16.jpeg') },
        { id: 17, imgSrc: require('@/static/17.jpeg') },
        { id: 18, imgSrc: require('@/static/18.jpeg') }

      ]
    }
  }

}
</script>

<style>

</style>
