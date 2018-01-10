<template>
  <div class="switch" @click.stop="toggle()" :style="{backgroundColor:this.switchOpt.contentbg}">
  	<span class="range" ref="switch_range" :style="{backgroundColor:rangeStyleInfo.backgroundColor,transform:rangeStyleInfo.transform }"></span>
  </div>
</template>
<script>
  export default {
  	data () {
  		return {
  			// isactive: this.isActive,
  			// styleinfo: {
  			// 	rangebg: this.rangeBg,
  			// 	rangeactivebg: this.rangeActiveBg,
  			// 	contentbg: this.contentBg
  			// }
  			switchOpt: this.options
  		}
  	},
  	props: {
  		// isActive: {
  		// 	type: Boolean
  		// },
  		// rangeBg: {
  		// 	type: String
  		// },
  		// contentBg: {
  		// 	type: String
  		// },
  		// rangeActiveBg: {
  		// 	type: String
  		// }
  		options: {
  		}
  	},
  	methods: {
  		toggle () {
  			const ref = this.switchOpt.ref
  			this.switchOpt.isactive = !this.switchOpt.isactive
  			const callback = {
  				ref: ref,
  				active: this.switchOpt.isactive
  			}
  			if (this.switchOpt.isactive) {
  				this.$refs.switch_range.style.backgroundColor = this.switchOpt.rangeactivebg
  				this.$refs.switch_range.style.transform = `translate(100%,0)`
  			} else {
  				this.$refs.switch_range.style.backgroundColor = this.switchOpt.rangebg
  				this.$refs.switch_range.style.transform = `translate(0,0)`
  			}
  			this.$emit('selectBgType', callback)
  		}
  	},
  	computed: {
  		rangeStyleInfo () {
  			let styleInfo = {}
  			if (this.switchOpt.isactive) {
  				styleInfo.backgroundColor = this.switchOpt.rangeactivebg
  				styleInfo.transform = `translate(100%,0)`
  			} else {
  				styleInfo.backgroundColor = this.switchOpt.rangebg
  				styleInfo.transform = `translate(0,0)`
  			}
  			return styleInfo
  		}
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
	.switch
		width:38px;
		height:20px;
		border-radius:10px
		cursor:pointer
		.range
			width:18px
			height:18px
			border-radius:50%
			background:#fff
			display: inline-block
			margin-left: 1px
			margin-top: 1px
			vertical-align: top
			transition:0.5s ease
</style>
