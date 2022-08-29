<template>
	<view class="my">
		<view class="my-header">
			<view class="header-main">
				<view class="header-config">
					<image class="config-img" src="../../static/picture/24.png" mode=""></image>
				</view>
				<view class="header-logo" @tap="goLogin">
					<image class="logo-img" src="../../static/picture/R-C (3).png" mode=""></image>
					<view class="logo-name">用户昵称</view>
				</view>
			</view>
		</view>
		
		<view class="order">
			<view @click="togongneng" class="order-title">
				<view>功能服务</view>
				<view>全部服务 > </view>
			</view>
			<view class="order-list">
				<view @click="goVideo" class="order-item">
					<image class="order-image" src="../../static/picture/2.png" mode=""></image>
					<view>(视频)</view>
				</view>
				<view @click="goYuying()" class="order-item">
					<image class="order-image" src="../../static/picture/38.png" mode=""></image>
					<view>(语音)</view>
				</view>
				<view @click="goMessage()" class="order-item">
					<image class="order-image" src="../../static/picture/34.png" mode=""></image>
					<view>(消息)</view>
				</view>
				<view @click="goWait()" class="order-item">
					<image class="order-image" src="../../static/picture/7.png" mode=""></image>
					<view>(待定)</view>
				</view>
				<view @click="goWait()" class="order-item">
					<image class="order-image" src="../../static/picture/7.png" mode=""></image>
					<view>(待定)</view>
				</view>
			</view>
		</view>
		<!-- list -->
		<view class="my-content">
			<view class="my-content-item">
				<view>个人信息</view>
				<view>></view>	
			</view>
			<view class="my-content-item">
				<view>更多功能</view>
				<view>></view>	
			</view>
			<view class="my-content-item">
				<view>帮助中心</view>
				<view>></view>	
			</view>
			<view class="my-content-item">
				<view>系统设置</view>
				<view>></view>	
			</view>
			<view class="my-content-item">
				<view>联系我们</view>
				<view>></view>	
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
			}
		},
		
		methods: {
			goLogin(){
				uni.navigateTo({
					url:"../login/login"
				})
			},
			goVideo(){
				uni.navigateTo({
					url:"../Video/Video"
				})
			},
			goYuying(){
				uni.navigateTo({
					url:"../Yuying/Yuying"
				})
			},
			goMessage(){
				uni.navigateTo({
					url:"../Message/Message"
				})
			},
			goWait(){
				uni.navigateTo({
					url:"../Wait/Wait"
				})
			},
			togongneng(){
				uni.navigateTo({
					url:"../gongneng/gongneng"
				})
			}
			}
		}
</script>

<style scoped>
	page{
		background-color: #FFFBF6;
	}
	.my-header{
		background: url(../../static/picture/222.png) no-repeat;
		width: 100%;
		height: 400rpx;
	}
	.header-main{
		top: 120rpx;
		position: relative;
	}
	.header-config{
		position: absolute;
		left: 30rpx;
	}
	.header-logo{
		position: absolute;
		width: 120rpx;
		height: 120rpx;
		left: 50%;
		margin-left: -60rpx;
	}
	.config-img{
		width: 40rpx;
		height: 40rpx;
	}
	.logo-img{
		width: 120rpx;
		height: 120rpx;
		border:2rpx solid #CCCCCC ;
		border-radius: 50%;
		background-color: #FFFFFF;
	}
	.logo-name{
		word-break: keep-all;
		color: #FFFFFF;
		font-weight: bold;
	}
	.order-title{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		align-items: center;
	}
	.order-list{
		padding: 20rpx;
		display: flex;
	}
	.order-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.order-image{
		width: 84rpx;
		height: 84rpx;
	}
	.my-content{
		margin: 20rpx 0;
		padding: 0 20rpx;
	}
	.my-content-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		border-bottom: 2rpx solid #CCCCCC;
	}
</style>
