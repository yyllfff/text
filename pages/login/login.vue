<template>
	<view class="container">
		<image class="bg-img1" src="../../static/picture/login1.png">
		<view class="content">
			<view class="center">
				<image 
					class="bg-img2"
					mode="widthFix" 
					src="../../static/picture/login2.png"></image>
				<image 
					class="bg-img3"
					mode="widthFix"
					src="../../static/picture/login3.png"></image>
			</view>
			<view class="big1">
				<form class="input1">
					<view class="item">
						<image class="label" src="../../static/picture/yhm.png"></image>
						<!-- <view class="label">账号</view> -->
						<input class="input2" v-model="userName" type="text" placeholder="用户名" placeholder-style="font-size:32rpx"/>
					</view>
					<view class="item">
						<image class="label" src="../../static/picture/mm.png"></image>
						<!-- <view class="label">密码</view> -->
						<input class="input2"  v-model="userPwd" password="true" type="text" adjust-position="true"  placeholder="请输入密码" placeholder-style="font-size:32rpx"/>
					</view>
					<view class="item">
						<button @click="submit" class="button1" type="primary">登录</button>
						<!-- <button class="button2" type="primary">注册</button> -->
					</view>
					<view class="item">
						<view class="center">
							<view class="">
								<button @click="goReg" class="button3" type="primary">
									<text class="text3">新户注册</text>
								</button>
							</view>
							<view class="">
								<button @click="toforg" class="button4" type="primary">
									<text class="text4">忘记密码</text>
								</button>
							</view>
						</view>
					</view>
					<view class="login-other">
						<view class="other-text">
							<view>第三方登录</view>
						</view>
						<view class="other">
							<view class="other-item">
								<image src="../../static/picture/30.png" mode=""></image>
								<view>微信登录</view>
							</view>
							<view class="other-item">
								<image src="../../static/picture/qq.png" mode=""></image>
								<view>QQ登录</view>
							</view>
							<view class="other-item">
								<image src="../../static/picture/17.png" mode=""></image>
								<view>华为登录</view>
							</view>
						</view>
					</view>
				</form>
			</view>
			
				<!-- <button class="button2" type="primary">新户注册</button>
				<button class="button2" type="primary">忘记密码</button> -->
		
		</view>
		
		</image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:"",
				userPwd:"",
				rules:{
					userName:{
						rule:/\S/,
						msg:"用户名不能为空"
					},
					userPwd:{
						rule:/^[0-9a-zA-z]{6,16}$/,
						msg:"密码应为6-16位字符"
					}
				},
				
			}
		},
		methods: {
			submit(){
				if(!this.validata('userName')) return;
				if(!this.validata("userPwd"))  return;
				
				uni.showLoading({
					title:"登录中..."
				})
				
				setTimeout(()=>{
					
					uni.hideLoading();
					uni.switchTab({
						url:"../Home/Home"
					})
					
				},2000)
			},
			validata(key){
				let bool = true;
				if(!this.rules[key].rule.test(this[key])){
					uni.showToast({
						title:this.rules[key].msg,
						icon:"none"
					})
					bool=false;
					return false;
				}
				return bool;
			},
			// gologin(){
			// 	uni.navigateTo({
			// 		url:'//pages/identity/identity'
			// 	});
			// },
			goReg(){
				uni.navigateTo({
					url:'/pages/identity/identity'
				});
			},
			toReg(){
				uni.navigateTo({
					url:'/pages/Reg/Reg'
				})
			},
			toforg(){
				uni.navigateTo({
					url:'//pages/forg/forg'
				})
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
	.bg-img2{
		width: 45%;
		height: 45%;
		top: 60rpx; 
	}
	.bg-img3{
		width: 32%;
		height: 32%;
		top: 110rpx;
		
	}
	.big1{
		height: 380rpx;
		margin-top: 170rpx;
		margin-right: 40rpx;
		margin-left:40rpx;
		/* margin-bottom: 1100rpx; */
		background-color: #9b8b71;
		background-color: rgba(0,0,0,0.1);opacity: 0.7;
		border-radius: 20rpx;
	}
	.item{
		margin-top: 20px;
		height: 100rpx;
		display: flex;
		align-items: center;
		flex-direction: row;
		padding: 0 20rpx;
		border-top: 4rpx ;
	}
	.item .label{
		margin-top: 100rpx;
		width: 10%;
		height: 70%;
	}
	.tip-text{
		width: 100%;
		text-align: center;
		color: #333;
	}
	.tip-text text{
		text-decoration: underline;
	}
	.input2{
		margin-top: 100rpx;
		
	}
	.picture1{
		width: 20%;
		height: 20%;
	}
	.buttonget{
		margin-top: 70%;
		left: 8rpx;
	}
	.button1{
		text-align: center;
		background-color: #ffb78f;
		color: black;
		width: 150rpx;
		height: 70rpx;
		margin-right: 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.button2{
		color: #ebb442;
		margin-top: 500rpx;
		width: 570rpx;
		height: 95rpx;
	}
	.button3{
		text-align: center;
		margin-top: 100rpx;
		width: 200rpx;
		border-radius: 20rpx;
		background-color: rgba(255, 46, 147, 0.1);
		color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.button4{
		text-align: center;
		margin-top: 50rpx;
		width: 200rpx;
		border-radius: 20rpx;
		background-color:  rgba(255, 46, 147, 0.1);
		color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.text3{
		font-size: 33rpx;
	}
	.text4{
		font-size: 33rpx;
	}
	/* 其他登录方式 */
	.login-other{
		padding: 100rpx 0;
	}
	.other-text{
		margin-top: 10rpx;
		display: flex;
		padding: 50rpx 0;
	}
	.other-text view{
		line-height: 0rpx;
		padding: 0 10rpx;
	}
	.other-text:after{
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: black;
	}
	.other-text::before{
		flex: 1;
		content: '';
		height: 2rpx;
		background-color: black;
	}
	.other{
		display: flex;
		justify-content: space-around;
	}
	.other-item{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.other-item image{
		width: 80rpx;
		height: 80rpx;
	}
	.center{
		flex: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
