<template>
		<div class="titleBar">
				<div @click="goBack" class="goBack">
				<i class="iconfont icon-fanhui"></i>
						返回
						</div>
				<div class="titleText">
						{{title}}
				</div>
				<div>
						<i class="iconfont icon-cebianlan"></i>
				</div>
		</div>
</template>

<script>
export default {
	props: ["title"],
	methods: {
		goBack() {
			this.$router.go(-1);
        },
	}
};
</script>

<style lang="less" scoped>
.titleBar {
	width: 100%;
	height: 8%;
	position: fixed;
	top: 0;
	left: 0;
	background: #ffffff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #d32f2f;
	align-items: center;
	box-shadow: 0px 1px 13px 0px rgba(33, 33, 34, 0.3);
	box-sizing: border-box;
	z-index: 99;
	padding: 1rem;
	.goBack {
			i{
		font-size: .9rem;
					
			}
	}
	i {
		font-size: 1.6rem;
	}
}
</style>


