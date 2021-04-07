const app = new Vue({
	el: '#app',
	data: {
		drugName: '',
		quant: null,
		drugs: [],
		sellDrug: '',
		sellQuant: null,
		salesperson: '',
		price: null,
		sells: []
	},
	methods:{
    addDrug() {
			this.drugs.push({
				name: this.drugName,
				quant: this.quant
			})
			this.drugName = ''
			this.quant = null
		},
		removeDrug(item) {
			const itemIndex = this.drugs.indexOf(item)
			this.drugs.splice(itemIndex, 1)
		},
		addSell() {
			this.sells.push({
				drugs: this.sellDrug,
				quant: this.sellQuant,
				name: this.salesperson,
				price: this.price
			})
			this.sellDrug = ''
			this.sellQuant = null
			this.salesperson = ''
			this.price = null
		},
		removeSell(item) {
			const itemIndex = this.sells.indexOf(item)
			this.sells.splice(itemIndex, 1)
		},
  }
}) 