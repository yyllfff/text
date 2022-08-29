<template>
	<view>
		无内容，开发中
	</view>
</template>

<script>
	export default {
		props:{
			keyword:String
		},
		data() {
			return {
				keyword:""
			}
		},
		onLoad(e) {
			this.keyword = e.keyword;
			// #ifdef APP-PLUS
			var webView = this.$mp.page.$getAppWebview();
			webView.setTitleNViewSearchInputText( e.keyword);
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
