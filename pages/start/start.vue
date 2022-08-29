<template>
	<view class="container" :style="{height:Qheight+'px'}">
		<image :style="{height:Qheight+'px'}" src="../../static/picture/6178168d1acd4e76855829832169af6f.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time:3.5,
				Qheight:0,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight-uni.upx2px(0);
									this.Qheight = height;
									}
			});
			let timeS = this.time;
			this.Qtime(timeS);
		},
		methods: {
			Qtime(timeS){
				let timeStart = setInterval(function(){
					timeS--;
					if(timeS==0){
						clearInterval(timeStart);
						uni.redirectTo({
							url:'../Home/Home'
						})
					}
					console.log(timeS)
				},100,timeS)
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 100%;
		height: 100%;
	}
	
	.container>image{
		width: 100%;
	}
</style>
