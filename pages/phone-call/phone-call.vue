<template>
	<view>
		<Lines></Lines>
		<view class="login-tel">
			<view class="tel-main">
				<view class="login-from">
					<view class="login-user">
						<text class="user-text">验证码</text>
						<input type="text" placeholder="请输入验证码"/>
						<button plain="true" size="mini" :disabled="disabled">{{codeMsg}}</button>
					</view>
				</view>
				<view class="tel">下一步</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Line from '@/common/Lines.vue'
	export default {
		data() {
			return {
				codeNum:10,
				codeMsg:"",
				disabled:false
			}
		},
		components:{
			Lines
		},
		onReady(){
			this.codeMsg = "重新发送 ('+this.codeNum+')";
			this.sendCode();
		},
		methods: {
			sendCode(){
				this.disabled = true;
				let timer = setInterval(()=>{
					--this.codeNum;
					this.codeMsg = "重新发送 ('+this.codeNum+')";
				},1000);
				setTimeout(()=>{
					clearInterval(timer);
					this.codeNum=10;
					this.disabled = false;
					this.codeMsg = '重新发送';
				},10000)
			}
		}
	}
</script>
	
<style scoped>
	.login-tel{
		width: 100vw;
		height: 100vh;
	}
	.tel-main{
		padding: 0 20rpx;
	}
	.login-from{
		padding: 100rpx 0;
	}
	.login-user{
		font-size: 32rpx;
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #f7f7f7;
	}
	.user-text{
		padding-right: 10rpx;
	}
	.tel{
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #ffffff;
		background-color: #49bdfb;
		border-radius: 40rpx;
	}
</style>
