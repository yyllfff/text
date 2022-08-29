<template>
	<view>
		<view class="big1">
			<form>
				<view class="block"></view>
				<view class="item">
					<view class="label">昵称</view>
					<input v-model="loginData.name" type="text" placeholder="请输入昵称"/>
				</view>
				<view class="item">
					<view class="label">qq</view>
					<input v-model="loginData.qq" type="text" placeholder="请输入qq"/>
				</view>
				<view class="item">
					<view class="label">手机号</view>
					<input v-model="loginData.phone" type="text" placeholder="请输入手机号" />
				</view>
				<!-- <view class="item">
					<view class="label">性别</view>
					<picker @change="getSex" :value="loginData.sex" :range="array">
						<view class="uni-input">{{array[loginData.sex]}}</view>
					</picker>
				</view> -->
				<view class="item">
					<view class="label">密码</view>
					<input v-model="loginData.password" password="true" type="text"  placeholder="请输入密码"/>
				</view>
				<view class="item">
					<button @click="subFun()" class="button1" type="primary">注册</button>
					<!-- <button class="button2" type="primary">注册</button> -->
				</view>
				<view class="item">
					<view class="tip-text">
						<text @click="gologin">已有账号，我要登录</text>
					</view>
				</view>
			</form>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginData:{
					name:'',
					password:'',
					phone:'',
					qq:'',
					// sex:0
				},
				// array:['男','女']
			}
		},
		methods: {
			subFun(){
				let msg='';
				
				// if(!this.loginData.password||this.loginData.password.length<5){
				// 	msg = '请输入正确的密码';
				// }
				// if(!this.loginData.name||this.loginData.name.length<6){
				// 	msg = '请输入正确的账号';
				// }
				// this.loginData.sex = this.array[this.loginData.sex]
				for(let s in this.loginData) {
					if(!this.loginData[s]){
						msg = '信息不完整';
					}
				}
				
				if(!msg){
					uni.request({
						url:'',
						data:this.loginData,
						method:"POST",
						success: (res) => {
							uni.showToast({
								title:"注册成功",
								duration:2000,
								icon:"none"
							})
							uni.switchTab({
								url:'/pages/Home/Home'
							})
						}
					})
				}else{
					uni.showToast({
						title: msg,
						duration:2000,
						icon:"none"
					})
				}
			},
			gologin(){
				uni.navigateTo({
					url:'/pages/login/login'
				});
			},
			goReg(){
				uni.navigateTo({
					url:'/pages/identity/identity'
				});
				}
			// getSex(index){
			// 	this.loginData.sex = index.detail.value;
			// }
		}
	}
</script>

<style scoped>
.button1{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.item{
	height: 100rpx;
	display: flex;
	flex-direction: row;padding: 0 20rpx;
	border-top: 4rpx solid #efefef;
}
.item .label{
	width: 200rpx;
}
.item input{
	flex: 1;
}
.item button{
	width: 100%;
	margin-top: 40rpx;
}
.tip-text{
		width: 100%;
		text-align: right;
		color: #333;
	}
.tip-text text{
		text-decoration: underline;
	}
</style>
