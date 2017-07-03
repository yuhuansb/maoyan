<template>
	<div class="manage">
		<el-tree :data="nodes" :props="defaultProps" @node-click="nodeClick($event)"></el-tree>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import {
	mapState,
	mapMutations
}from "vuex"
export default{
	name:"manage",
	computed:{
		...mapState("manage",["defaultProps","nodes"])
	},
	methods:{
		...mapMutations("manage",["nodeClick"])
	}
}
</script>
<style type="text/css" scoped>
	.el-tree{
		width: 200px;
		padding: 40px 0;
		height: 700px
	}
	.manage{
		display: flex;
	}
</style>
