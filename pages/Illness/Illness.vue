<template>
	<view class="box">
		<view class="search" @click="Tosearch()">
			<image class="search-picture" src="../../static/picture/search2.png"></image>
		</view>
		<view class="illness-box1">
			<view class="box-number1">7.23</view>
			<view class="box0"></view>
			<view class="box1"></view>
			<view class="box2"></view>
		</view>		
		<view class="lunbo">
			<scroll-view show-scrollbar="false" class="uni-swiper-tab" scroll-x :style="">
				<view class="scrollx_items">
					<image src="../../static/picture/36.png" mode=""></image>
					<view class="tgyx_title">医院预约</view>
				</view>
				<view class="scrollx_items">
					<image src="../../static/picture/5.png" mode=""></image>
					<view class="tgyx_title">病情检测</view>
				</view>
				<view class="scrollx_items">
					<image src="../../static/picture/4.png" mode=""></image>
					<view class="tgyx_title">病情发展</view>
				</view>
				<view class="scrollx_items">
					<image src="../../static/picture/6.png" mode=""></image>
					<view class="tgyx_title">病人病例</view> 
				</view>
				<view class="scrollx_items">
					<image src="../../static/picture/33.png" mode=""></image>
					<view class="tgyx_title">线上问诊</view> 
				</view>
			</scroll-view>		
		</view>
		<view class="duiqi">
			<view class="buttonbox">
				<view class="buttonbox-title1-box">
					<text class="buttonbox-title1">人像识别训练<br/></text>
					<text class="buttonbox-title2"><b>7.23</b>训练计划<br/></text>
					<image src="../../static/picture/facetext.png" class="buttonbox-image"></image>
				</view>
			</view>
			<view class="buttonbox"></view>
		</view>
		<view class="duiqi">
			<view class="buttonbox"></view>
			<view class="buttonbox"></view>
		</view>
		<view class="duiqi">
			<view class="buttonbox"></view>
			<view class="buttonbox"></view>
		</view>
		<view class="buttonbox1"></view>
	</view>
</template>
	
<script>
	export default {
			data() {
				return {
					scrollH: 130
				}
			},
			onLoad() {
						uni.getSystemInfo({
						　　success: function(res) { // res - 各种参数
						　　    let info = uni.createSelectorQuery().select(".scrollx_items");
						　　　  　info.boundingClientRect(function(data) { //data - 各种参数
						　　　  　console.log(data.height)  // 获取元素宽度
									this.scrollH = data.height
						　　    }).exec()
						       }
						});
					},
					onShow() {
						
						
					},
			methods: {
				Tosearch(){
					uni.navigateTo({
						url:"../Search/Search"
					})
				}
				
			}
		}
	</script>
</script>

<style scoped>
page{
	background-color: #FFFBF6;
}
	.search{
		margin-left: 3.89%;
		margin-right: 3.7%;
		height: 70rpx;
		border: solid 4rpx #343F4B;
		border-radius: 40rpx;
	}
	.search-picture{
		width: 80rpx;
		height: 80rpx;
		top: -5rpx;
	}
	.box{
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
	}
	.illness-box1{
		margin-top: 2%;
		height: 250rpx;
		background-color: #ffaa7f;
		margin-left: 5%;
		margin-right: 5%;
		border-radius: 25rpx;
		border: 1rpx solid #646464;
	}
	.box-number1{
		padding-top: 20rpx;
		margin-left: 20rpx;
	}
	.box0{
		height: 25rpx;
		margin-left: 3%;
		margin-right: 65%;
		margin-top: 25rpx;
		background-color: #9D6EED;
		border-radius: 25rpx;
	}
	.box1{
		height: 25rpx;
		margin-left: 3%;
		margin-right: 35%;
		margin-top: 25rpx;
		background-color: #48CE9B;
		border-radius: 25rpx;
	}
	.box2{
		height: 25rpx;
		margin-left: 3%;
		margin-right: 70%;
		margin-top: 25rpx;
		background-color: #4A9DF5;
		border-radius: 25rpx;
	}
	.lunbo{
		show-scrollbar: false;
		margin-top: 30rpx;
		height: 125rpx;
		background-color: #E8F9EF;
		margin-left: 5%;
		margin-right: 5%;
		border-radius: 40rpx;
		border: 1rpx solid #3bb3af;
	}
	.uni-swiper-tab{
			white-space: nowrap;
	}
	.model_scrollx{
			justify-content: space-between;
			padding: 40rpx 0;
	}
	.scrollx_items{
			padding: 10rpx 20rpx;
			text-align: center;
			display: inline-block;
			width: 100rpx;
			box-sizing: border-box;
			margin-left: 30rpx;
	}
	.scrollx_items:last-child{
			margin-right: 30rpx;
	}
	.scrollx_items image{
			width: 70rpx;
			height: 70rpx;
	}
	.tgyx_title{
			margin-left: -12rpx;
			font-size: 7rpx;
			color: #333333;
			margin-top: 0rpx;
	}
		
	::-webkit-scrollbar{
			display: none;
			width: 0 !important;
			height: 0 !important;
			-webkit-appearance: none;
			background: transparent;
	}
	.buttonbox{
			flex-shrink: 0;
			margin-left: 2%;
			margin-right: 2%;
			height: 200rpx;
			width: 40%;
			background-color: #ffffff;
			border-radius: 40rpx;
			border: 1rpx solid #c6c6c6;
	}
	.buttonbox1{
			flex-shrink: 0;
			margin-left: 5%;
			margin-right: 2%;
			height: 200rpx;
			width: 40%;
			background-color: #ffffff;
			border-radius: 40rpx;
			border: 1rpx solid #c6c6c6;
			margin-top: 50rpx;
	}
	.buttonbox-title1{			
			font-size: 33rpx;
	}
	.buttonbox-title2{
			margin-left: 20rpx;
			font-size: 12rpx;
			transform: scale(0.5)
	}
	.buttonbox-image{
			margin-left: 30%;
			height: 90rpx;
			width: 115rpx;
	}
	.duiqi{
			margin-top: 50rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
	}
	body,html{
			overflow-x: hidden;
	}
	body::-webkit-scrollbar{
			display: none;
			width: 0 !important;
			height: 0 !important;
			-webkit-appearance: none;
			background: transparent;
			color: transparent;
	}
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
			display: none;
			width: 0 !important;
			height: 0 !important;
			-webkit-appearance: none;
			background: transparent;
			color: transparent;
	}
	.buttonbox-title1-box{
			margin-top: 15rpx;
			margin-left: 20rpx;
		}
</style>