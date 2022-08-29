<template>
	
	<view>
		<image src="../../static/picture/31.png" class="image-bg">
			<view class="position-box1">
				<view>	
					<image src="../../static/picture/position1.png" class="pictureone"></image>
					<image src="../../static/picture/111.png" class="textone"></image>
				</view>
				<view>
					<image src="../../static/picture/12.png" class="picturetwo"></image>
					<image src="../../static/picture/222 (2).png" class="texttwo"></image>
				</view>
				<view>
					<image src="../../static/picture/position3.png" class="picturethree"></image>
					<image src="../../static/picture/333.png" class="textthree"></image>
				</view>
				<view>
					<image src="../../static/picture/21.png" class="picturefour"></image>
					<image src="../../static/picture/444.png" class="textfour"></image>
				</view>
			</view>
		</image>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.image-bg{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.position-box1{
		background-color: antiquewhite;
		height: 560rpx;
		width: 90rpx;
		margin-left: 83%;
		margin-top: 40%;
		border-radius: 30rpx 30rpx 30rpx 30rpx;
		border: 3rpx solid #6699FF;
		position: fixed;
	}
	.pictureone{
		margin-left: 15rpx;
		margin-top: 35rpx;
		width: 60rpx;
		height: 60rpx;
		border-radius: 7rpx;
	}
	.picturetwo{
		margin-top: 15rpx;
		margin-left: 7rpx;
		width: 75rpx;
		height: 60rpx;
	}
	.picturethree{
		margin-top: 15rpx;
		margin-left: 15rpx;
		width: 60rpx;
		height: 60rpx;
	}
	.picturefour{
		margin-left: 13rpx;
		margin-top: 15rpx;
		width: 69rpx;
		height: 70rpx;
	}
	.textone{
		margin-left: 10rpx;
		width: 70rpx;
		height: 30rpx;
	}
	.texttwo{
		margin-left: 10rpx;
		width: 70rpx;
		height: 20rpx;
	}
	.textthree{
		margin-left: 10rpx;
		width: 70rpx;
		height: 20rpx;
	}
	.textfour{
		margin-left: 10rpx;
		width: 70rpx;
		height: 20rpx;
	}
</style>