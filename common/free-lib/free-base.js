import dateFormat from '@/common/free-lib/time.js'
export default{
	filters: {
		formate: function(value) {
			return dateFormat.gettime(value);
		}
	},
}