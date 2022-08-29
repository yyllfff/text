<template>
	
		<view class="container">
			<image class="bg-img1" src="../../static/picture/login1.png">
				<view class="content">
					<view>
						<image class="reg-1" src="../../static/picture/top.png">
							<view>
								<image class="reg-2" src="../../static/picture/logo2).png"></image>
							</view>
						</image>
						
					</view>
					<view>
						<text class="text1">请选择你的身份</text>
					</view>
					<view>
						<button class="button3" @click="gophone">
							<image class="button7" src="../../static/picture/reg1.png"></image>
							<text class="text2">家属</text>
						</button>
					</view>
					<view>
						<button class="button4" @click="gophone">
							<image class='button7' src="../../static/picture/reg2.png"></image>
							<text class="text2">患者</text>
							</button>
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
			gophone(){
				uni.navigateTo({
					url:'/pages/Reg/Reg'
				});
			}
		}
	}
</script>

<style scoped>
	.bg-img1{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.reg-1{
		width: 100%;
		height: 200rpx;
	}
	.reg-2{
		width: 200rpx;
		height: 100rpx;
		top: -150rpx;
		margin-left: 500rpx;
	}
	.text1{
		font-size: 50rpx;
		margin-left: 200rpx;
	}
	.button3{
		margin-top: 100rpx;
		width: 60%;
		height: 170rpx;
		margin-left: 150rpx;
		border-radius: 30rpx;
		background-color: #EDBC4B;
		background-color: rgba(255, 206, 80, 0.1);opacity: 0.7;
	}
	.button4{
		margin-top: 130rpx;
		width: 60%;
		height: 170rpx;
		margin-left: 150rpx;
		border-radius: 30rpx;
		background-color: #EDBC4B;
		background-color: rgba(119, 212, 245, 1.0);opacity: 0.7;
	}
	.button7{
		margin-top: 30rpx;
		margin-left: -150rpx;
		width: 120rpx;
		height: 120rpx;
	}
	.text2{
		position: absolute;
		margin-left: 5%;
	    
		font-size: 65rpx;
	}
</style>
