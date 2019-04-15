<template>
<div class="content">
    <baidu-map class="map" 
    :zoom="2" 
    :center="{lng: 116.404, lat: 39.915}" 
    :scroll-wheel-zoom="true"
    >   
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" enableGeolocation:true></bm-navigation>
        <bm-copyright
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :copyright="[{id: 1, content: 'Copyright：', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a href=www.baidu.com>Huluobos</a>'}]">
        </bm-copyright>
         <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>

                <bm-marker v-for="item in maps" :key="item.index" :position="{lng: item.jd, lat: item.wd}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                    <bm-label :content="item.text" :labelStyle="{color: 'red', fontSize : '13px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker>
                <!-- <bm-marker :position="{lng: 123.296545, lat: 53.565246}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                    <bm-label content="信息工程学院学生北方党支部 支部书记：曹圣溥 电话：18331506113" :labelStyle="{color: 'red', fontSize : '13px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker>
                <bm-marker :position="{lng:111.737581, lat: 4.020145}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                    <bm-label content="信息工程学院学生南方党支部 支部书记：姚君荣 电话：18331506114" :labelStyle="{color: 'red', fontSize : '13px'}" :offset="{width: -35, height: 30}"/>
                </bm-marker> -->
  </baidu-map>

</div>
  
</template>
<script>
export default {
  name:"maps",
  data(){
      return{
          maps:[]
      }
  },
  methods:{
      getMap(){
          this.$axios.get("getMap").then(res=>{
            //   console.log(res)
              this.maps = res.data
          })
      }
  },
  created(){
      this.getMap()
  }
   
}
</script>

<style>

.map {
  width: 100%;
  height: 39rem;
}
</style>