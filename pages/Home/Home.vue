<template>
	<view>
		<view class="search" @click="Tosearch()">
			<image class="search-picture" src="../../static/picture/search2.png"></image>
		</view>
		<view class="box1">
			<view class="home-relative">
				<swiper circular="true" autoplay="true" :interval="3000" :duration="500" style="height: 320rpx;">
					<swiper-item v-for="i in 3" :key="i">
						<image src="../../static/picture/22.png" mode="aspectFill" style="height: 320rpx;width: 100%;" class="rounded-lg"></image>
					</swiper-item>
				</swiper>
				<view class=""></view>
			</view>
		</view>
		<view class="center">
			<view class="boxone">
				<image src="../../static/picture/26.png" class="box-1-picture"></image>
				<text class="box-1-text" style="white-space: nowrap;">社区服务</text>
			</view>
			<view class="boxtwo">
				<image src="../../static/picture/18.png" class="box-2-picture"></image>
				<view class="boxtwo-text">
					<text class="box-2-text" style="white-space: nowrap;">患者家属交流平台</text>
					<button class="box-2-button"  @click="goconv()">
						<text class="box-text-text" style="white-space: nowrap;">点击加入</text>
					</button>
				</view>
			</view>
			<view class="boxthree">
				<image src="../../static/picture/19.png" class="box-1-picture"></image>
				<text class="box-1-text" style="white-space: nowrap;">家政护理</text>
			</view>
		</view>
		<view class="little1">相关资讯</view>
		<view class="divider"/>
		<view class="bottonbox1"></view>
		<view class="bottonbox1"></view>
		<view class="bottonbox1"></view>
		<view class="bottonbox1"></view>
		<view class="bottonbox1"></view>
		<view class="bottonbox1"></view>
		<view class="bottonbox1"></view>
	</view>
	<!-- <view>
		首页
		<swiper class="home-swiper" circular :indicator-dots="true" :autoplay="true" :interval="3000"
						>
						<swiper-item v-for = "i in list" :key = "i">
							<view>
								<image :src="i" mode="heightFix"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">B</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">C</view>
						</swiper-item>
					
					</swiper>
					<uni-title></uni-title>
	</view> -->
	<!-- <view>
			<image @click="open" class="drawer-head-menu" src="/" mode="scaleToFill" />
			<view @touchstart="touchStart" @touchend="touchEnd">
				<view class="drawer-mask" :class="{ 'drawer-mask-visible': stateDrawer }" @tap="close()" />
				<view class="drawer-content" :class="{ 'drawer-content-visible': stateDrawer}">
							<view class="play3">
								<image class="picture2" src='../../static/picture/R-C (3).png'></image>
								<view></view>
								<text class="play6">登录状态：</text>
							</view>
							<view class="play1" @click.native="gohome">
								<text class="play0">主页</text>
							</view>
							<view class="play1" @click.native="goposition">
								<text class="play0">定位</text>
							</view>
							<view class="play1" @click.native="gologin">
								<text class="play5">病情发展</text>
							</view>
							<view class="play1">
								<text class="play5">周边情况</text>
							</view>
							<view class="play1">
								<text class="play2">语音通话</text>
							</view>
							<view class="cutline"></view>
							
							<view class="play1">
								<text class="play4">Setting</text>
							</view>
							<view class="play1">
								<text class="play4">Rate us</text>
							</view>
					
				</view>
			</view>
		</view> -->
</template>

<script>
	
	
	export default {
		data() {
			return {
				
				// stateDrawer: false,
				// 				startTime: null,  
				// 				startPosition: 0, 
				// 				endPosition: 0    ,
				// chooseAvaters: false,
				// 	lists:[
				// 		{
				// 			text:'更换头像',
				// 			color:'',
				// 			fontSize:28,
				// 		},
				// 		{
				// 			text:'查看大图',
				// 			color:'',
				// 			fontSize:28,
				// 		}
				// 	],
			}
		},
		
		methods: {
			Tosearch(){
				uni.navigateTo({
					url:"../Search/Search"
				})
			},
			goconv(){
				uni.navigateTo({
					url:"../conv/conv"
				})
			}
		// 	gologin(){
		// 		uni.navigateTo({
		// 			url:'/../login/login'
		// 		});
		// 	},
		// 	gohome(){
		// 		uni.navigateTo({
		// 			url:'/pages/../home/home'
		// 		});
		// 	},
		// 	goposition(){
		// 		uni.navigateTo({
		// 			url:"/../Position/Position"
		// 		});
		// 	},
		// 	close() {
		// 		this._changeDrawer('stateDrawer', false)
		// 	},
		// 	open() {
		// 		this._changeDrawer('stateDrawer', true)
		// 	},
		// 	_changeDrawer(param, status) {
		// 		this[param] = status
		// 	},
			
		// 	touchStart(e) {
		// 		this.startTime = Date.now()
		// 		this.startPosition = e.changedTouches[0].clientX
		// 	},
			
		// 	touchEnd(e){
		// 		const endTime = Date.now()
		// 		if (endTime - this.startTime > 2000){
		// 			return;
		// 		}
		// 		this.endPosition = e.changedTouches[0].clientX;
		// 		var slideDistance = this.endPosition - this.startPosition; 
		// 		if( slideDistance > 50){
		// 			this.open()
		// 		}
		// 		if(slideDistance < -50){
		// 			this.close()
		// 		}
		// 	},
		// 	chooseAvater(){
		// 		this.chooseAvaters=true
		// 	},
		// 	editAvater(index){
		// 		if(index === 0){
		// 			this.chooseImage()
		// 		}
		// 		else{
		// 			this.previewImage()
		// 		}
		// 	},
		// 	chooseImage(){
		// 		uni.chooseImage({
		// 			count:1,
		// 			success:(res)=>{
		// 				this.imgArr =res.tempFilePaths
		// 			}
		// 		})
		// 	},
		// 	previewImage(){
		// 		uni.previewImage({
		// 			urls:[this.imgArr[0]],
		// 		})
		// 	}
		 }
	}
</script>

<style scoped>
page{
	background-color: #FFFBF6;
}
.search{
	margin-top: 5rpx;
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
.box1{
	margin-top: 20rpx;
	margin-left: 3%;
	margin-right: 3%;
	margin-bottom: 30rpx;
}
.rounded-lg{
	border-radius: 30rpx;
}
.center{
	margin-top: 30rpx;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
.boxone{
	background-color: #F5FEF1;
	height: 150rpx;
	width: 20%;
	border-radius: 25rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 3rpx solid darkgray;
}
.boxtwo{
	background-color: #FEE0CF;
	height: 150rpx;
	width: 50%;
	border-radius: 25rpx;
	display: flex;
	justify-content: space-evenly;
	border: 3rpx solid darkgray;
}
.boxthree{
	background-color: #F5FEF1;
	height: 150rpx;
	width: 20%;
	border-radius: 25rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 3rpx solid darkgray;
}
.box-1-picture{
	height: 110rpx;
	width: 110rpx;
}
.box-1-text{
	font-size: 12rpx;
}
.box-2-picture{
	padding-top: 3rpx;
	height: 110rpx;
	width: 110rpx;
	margin-top: 20rpx;
}
.boxtwo-text{
	margin-top: 20rpx;
}
.box-2-text{
	margin-top: 20rpx;
	font-size: 20rpx;
}
.box-2-button{
	background-color: #FBDBA6;
	margin-top: 10rpx;
	height: 65rpx;
	width: 140rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25rpx;
}
.box-text-text{
	font-size: 12rpx;
}
.little1{
	margin-left: 3%;
	margin-top: 30rpx;
	font-size: 25rpx;
}
.divider{
	background: #ffcfb3;
	width: 96%;
	height: 5rpx;
	margin-left: 2%;
}
.bottonbox1{
	margin-top: 30rpx;
	width: 96%;
	height: 200rpx;
	background: black;
	margin-left: 2%;
	border-radius: 25rpx;
}
		/* // .drawer-head-menu{
		// 	display: inline-block;
		// 	position: fixed;
		// 	top: 6px;
		// 	left: 16px;
		// 	z-index: 999;
		// 	width:64rpx;
		// 	height: 64rpx;
		// }
		// .drawer-content {
		// 	display: block;
		// 	position: fixed;
		// 	top: 0;
		// 	left: 0;
		// 	width: 65%;
		// 	height: 100%;
		// 	bottom: 0;
		// 	z-index: 33;
		// 	background-color: rgba(255, 152, 120, 1.0);
		// 	padding: 0rpx 0rpx;
		// 	box-sizing: border-box;
		// 	transform: translateX(calc(-100% + 20rpx));
		// 	transition: transform 0.3s ease;
		// }
		// .drawer-content-visible {
		// 	z-index: 999;
		// 	transform: translateX(0px);
		// }
		// .drawer-mask {
		// 	display: block;
		// 	position: fixed;
		// 	top: 0;
		// 	left: 0;
		// 	bottom: 0;
		// 	right: 0;
		// 	background-color: rgba(255, 255, 255, 0.4);
		// 	opacity: 0;
		// 	transition: opacity 0.3s;
		// }
		// .drawer-mask-visible {
		// 	z-index: 999;
		// 	opacity: 1;
		// }
		// .drawer-content view{
		// 	font-size: 20px;
		// 	line-height: 1.5;
		// 	margin-top: 10px;
		// 	margin-bottom: 10px;
		// }
		// .play0{
		// 	margin-left: -310rpx;
		// 	font-size: 35rpx;
		// }
		// .play1{
		// 	padding: 24rpx;
		// 	margin: 48rpx;
		// 	height: 5%;
		// 	width: 65%;
		// 	text-align: center;
		// 	color: #e6e6e6;
		// }
		// .play2{
		// 	margin-left: -280rpx;
		// }
		// .play3{
		// 	height: 25%;
		// 	background-color: rgba(255, 170, 0, 0.4);
		// }
		// .play4{
		// 	margin-left: -295rpx;
		// }
		// .play5{
		// 	margin-left: -250rpx;
		// 	font-size: 35rpx;
		// }
		// .play6{
		// 	color: #e6e6e6;
		// 	font-size: 40rpx;
		// 	margin-left: 20rpx;
		// }
		// .cutline{
		// 	height: 1rpx;
		// 	background-color: #e6e6e6;
		// }
		// .picture2{
		// 	margin-top: 100rpx;
		// 	margin-left: 40rpx;
		// 	width: 130rpx;
		// 	height: 130rpx;
		// } */
</style>
