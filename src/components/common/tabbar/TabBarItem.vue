<template>
	<div id="tab-bar-item" @click="itemClick" :style="style">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"><slot name="item-icon"></slot></slot>
		<div><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props:{
			path: String,
			fontColor: {
				type: String,
				default: 'red'
			},
			backgroundColor: {
				type: String,
				default: 'rgba(100, 100, 100, .08)'
			}
		},
		computed: {
			isActive () {
				return this.$route.path.indexOf(this.$props.path) != -1
			},
			style () {
				return this.isActive ? 
				{
					color: this.$props.fontColor,
					backgroundColor: this.$props.backgroundColor
				} : {}
			}
		},
		methods: {
			itemClick () {
				this.$router.replace(this.$props.path)
			}
		}
	}
</script>

<style scoped>
	#tab-bar-item {
		cursor: pointer;
		flex: 1;
		text-align: center;
		height: 100%;
	}
	#tab-bar-item img {
		margin-top: 3px;
		width: 24px;
		height: 24px;
		/* 去除图片默认下宽度 */
		vertical-align: middle;
		margin-bottom: 1px;
	}
	.active {
		color: red;
		background-color: rgba(100, 100, 100, .08);
	}
</style>
