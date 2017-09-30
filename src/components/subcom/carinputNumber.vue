<template>
	<div class="inputnumber">
		<div class="subtract" @click='subtract'>-</div>
		<input type="number" @keyup='sendcount' v-model='count'>
		<div class="add" @click='add'>+</div>
	</div>
</template>
<script>
	
	export default{
		props:['initid','initcount'],
		data(){
			return {
				count:1,
				id:0	
			}
		},
		created(){
			this.count=this.initcount;
			this.id=this.initid
		},
		methods:{
			//让count--
			subtract(){
				this.count--;
				this.sendcount()
			},
			//让count++
			add(){
				this.count++;
				this.sendcount()
			},
			sendcount(){
				if(this.count<0||this.count==''){
					this.count=1
					return;
				}
				this.count=parseInt(this.count)
				this.$emit('frominput',{id:this.id,count:this.count})
			}
		}
	}
</script>
<style scoped>	
	.inputnumber{
		display: inline-block;
		margin-left: 10px;
	}
	.inputnumber div {
		display: inline-block;
		width: 40px;
		height: 25px;
		border: 1px solid #aaa;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
	}
	.inputnumber  input {
		width: 60px;
		height: 25px;
		text-align: center;
	}
</style> 