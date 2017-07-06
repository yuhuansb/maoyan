<template>
	<div class="body">
		
<header>

<img src="./images/logo.png" height="40" width="133" class="logo" alt="">

<span class="title">后台管理系统</span>

</header>
<div class="tips"></div>
		<router-view></router-view>
        <footer>
    <p>©2016 猫眼电影 maoyan.com 京ICP证160733号 京ICP备16022489号-1 京公网安备 11010502030881号 网络文化经营许可证 电子公告服务规则</p>
    <p>北京猫眼文化传媒有限公司</p>
</footer>
	</div>
</template>
<script type="text/javascript">
export default{
	name:"wrap"
}
</script>
<style scoped>
    *{
    padding: 0;
    margin: 0;
}
.body{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    font-size: 16px;
}
header,footer{
    background-color: #ffffff;
    padding:20px 60px; 
}
header{
    border-bottom: 1px solid #e5e5e5;
}
footer{
    text-align: center;
    font-size: 14px;
    border-top: 1px solid #e5e5e5;
    background-color: #47464a;
    color:#999;
}
.logo{
    vertical-align: middle;
    height: 50px;
}
.title{
    font-size: 26px;
    font-weight: bold;
    vertical-align: middle;
    margin-left:50px; 
    color: #333;
}
.tips{
    background-color: #47464a;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #999;
    font-size: 20px;
}
</style>