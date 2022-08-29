<template>
	<view class="search">
		<Lines />
		<view class="search-item">
			<view class="flex-item">
				<view>最近搜索</view>
				<image class="picture" src="../../static/picture/20.png" @tap="clearHistory"></image>
			</view>
			<view v-if='searchData.length > 0'>
				<view 
					class="search-name"
					v-for='(item,index) in searchData'
					:key='index'
					@click="gosearchlist"
				>
					{{item}}
				</view>
			</view>
			<view v-else class="search-end">暂无搜索记录</view>
		</view>
	</view>
</template>

<script>
	import Lines from "@/common/Lines.vue"
	export default {
		data() {
			return {
				keyword:'',
				// 搜索记录
				searchData:[]
			}
		},
		onLoad(){
			uni.getStorage({
				key:"searchData",
				success: (res) => {
					this.searchData = JSON.parse( res.data );
				}
			})
		},
		onNavigationBarButtonTap(e){
			this.search();
		},
		onNavigationBarSearchInputConfirmed(){
			this.search();
		},
		onNavigationBarSearchInputChanged(e){
			this.keyword = e.text
		},
		
		components:{
			Lines
		},
		methods: {
			gosearchlist(){
				uni.navigateTo({
					url:"/pages/search-list/search-list"
				})
			},
			search(){
				if(this.keyword === ""){
					return uni.showToast({
						title:"关键词不能为空",
						icon:"none"
					})
				}else{
					uni.navigateTo({
						url:'../search-list/search-list'
					})
				}
				uni.hideKeyboard();
				this.addSearch();
			},
			addSearch(){
				let idx = this.searchData.indexOf(this.keyword);
				if( idx < 0 ){
					this.searchData.unshift( this.keyword );
				}else{
					this.searchData.unshift( this.searchData.splice(idx,1)[0])
				}
				uni.setStorage({
					key:"searchData",
					data: JSON.stringify(this.searchData)
				})
			},
			clearHistory(){
				uni.showModal({
					title:"重要提示",
					content:'是否要清除搜索记录',
					cancelText:'取消',
					confirmText:"确定",
					success: (res) => {
						if(res.confirm){
							uni.removeStorage({
								key:"searchData"
							})
							this.searchData = [];
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
.search-item{
	padding: 20rpx;	
	}
.picture{
	height: 35rpx;
	width: 35rpx;
}
.flex-item{
	justify-content: space-between;
	display: flex;
	line-height: 50rpx;
	align-items: center;
}
.search-name{
	padding: 4rpx 24rpx;
	background-color: #E1E1E1;
	display: inline-block;
	border-radius: 26rpx;
	margin: 10rpx;
}
.search-end{
	text-align: center;
}
</style>
