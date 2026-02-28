<template>
	<view>
		<u-navbar title="关于我们" :is-back="true" :title-bold="true" title-color="#000000" class="shadow"></u-navbar>
		<u-read-more>
				<rich-text :nodes="content"></rich-text>
			</u-read-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: `<p>
				    <strong><span style=";font-family:微软雅黑;color:#000000;font-size:20px"><span style="font-family:微软雅黑">合一优选</span></span></strong>
				</p>
				<p>
				    <strong><span style=";font-family:微软雅黑;color:#000000;font-size:20px">&nbsp;</span></strong>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:150%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:16px">·&nbsp;</span><strong><span style=";font-family:微软雅黑;color:#000000;font-size:16px"><span style="font-family:微软雅黑">商城简介</span></span></strong>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">项目简介</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">课程大纲</span></span>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:150%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:16px">·&nbsp;</span><strong><span style=";font-family:微软雅黑;color:#000000;font-size:16px"><span style="font-family:微软雅黑">首页</span></span></strong>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">顶部导航（</span>navbar自定义导航栏组件）</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">轮播图（</span>swiper轮播图组件）</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">公告（</span>noticeBar滚动通知组件）</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">分类专区（</span>grid宫格布局组件）</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">搜索框</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">吸附组件（</span>sticky吸顶组件）</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">搜索组件（</span>search搜索组件）</span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">搜索页</span></span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">搜索框（</span>search搜索组件）</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">热门搜索（</span>section查看更多组件）</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">关键字（</span>tag标签组件）</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">搜索历史列表（</span>cell单元格组件）</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">推荐分类专区（自定义组件）</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">一级分类</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">二级分类</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">每行</span>2列二级分类</span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">每行</span>4列二级分类</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">推荐商品</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">每行</span>2列商品列表组件</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">价格组件</span></span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">原件组件</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">自定义标题组件</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">相对定位</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">颜色渐变</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">优选好物（自定义商品列表，每列</span>1个商品）</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">lazyLoad懒加载组件</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">价格组件</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">原件组件</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">上拉加载更多</span></span>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:150%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:16px">·&nbsp;</span><strong><span style=";font-family:微软雅黑;color:#000000;font-size:16px"><span style="font-family:微软雅黑">分类</span></span></strong>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">一级分类与二级分类联动</span></span>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:150%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:16px">·&nbsp;</span><strong><span style=";font-family:微软雅黑;color:#000000;font-size:16px"><span style="font-family:微软雅黑">优选</span></span></strong>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">优选商品列表（</span>waterfall瀑布流组件）</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">下拉刷新</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">上拉加载</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">商品详情</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">主图（轮播图组件）</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">商品信息</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">抢购倒计时（</span>countDown倒计时组件）</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">规格参数（表格组件）</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">评论（</span>rate评分组件）</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">商品详情（</span>parse富文本解析器）</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">推荐商品组件</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">底部选项卡</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">购物车数量</span></span>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:150%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:16px">·&nbsp;</span><strong><span style=";font-family:微软雅黑;color:#000000;font-size:16px"><span style="font-family:微软雅黑">购物车</span></span></strong>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">vuex入门</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">编辑状态</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">删除购物车商品</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">正常状态</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">numberbox步进器组件</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">单选</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">多选</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">全选</span>/全不选</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">选中商品价格计算</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">加入购物车</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">订单确认页</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">动态选择收货地址（</span>mask遮罩组件）</span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">展示购物车选中的商品（</span>mask遮罩组件）</span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">动态选择优惠券</span></span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">满减价格计算（</span>vuex）</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">折扣价格计算（</span>vuex）</span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">支付方式切换</span></span>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:150%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:16px">·&nbsp;</span><strong><span style=";font-family:微软雅黑;color:#000000;font-size:16px"><span style="font-family:微软雅黑">我的</span></span></strong>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">个人数据</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">avatar头像组件</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">登录</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">form表单组件</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">全部订单</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">顶部选项卡</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">切换底部商品列表</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">跳转至商品详情</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">模态框组件</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">查看物流</span></span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">timeline时间轴组件</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">收藏商品</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">添加商品收藏</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">取消商品收藏</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">卡券</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">自定义优惠券布局</span></span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">关于我们</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">readmore展开阅读更多软件</span>
				</p>
				<p style="margin-left:96px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">设置</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">头像</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">avatarcropper头像裁剪组件</span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">个人信息</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">form表单组件</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">性别选择</span></span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">生日选择</span></span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">地址选择</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">更换手机号</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">form表单</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">登录组件</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">更换密码</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">form表单</span>
				</p>
				<p style="margin-left:240px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:&#39;Courier New&#39;;color:#000000;font-size:14px">o&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">表单验证</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">清除缓存</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">模态框组件</span></span>
				</p>
				<p style="margin-left:144px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Wingdings;color:#000000;font-size:14px">§&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px"><span style="font-family:微软雅黑">版本升级</span></span>
				</p>
				<p style="margin-left:192px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span><span style=";font-family:微软雅黑;line-height:125%;color:#000000;font-size:14px">fullscreen压窗屏组件</span>
				</p>
				<p style="margin-left:48px;text-align:left;line-height:125%" align="left">
				    <span style="font-family:Symbol;color:#000000;font-size:14px">·&nbsp;</span>
				</p>`
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
