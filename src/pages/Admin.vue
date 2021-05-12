<template>
  <div class="q-ma-lg">
    <div class="column">
      <VBorder>
        <Subtitle :label="'Adicionar um Produto'"/>
        <div class="row q-gutter-sm">
          <div class="col-3">
            <q-input
              :dense="true" 
              filled 
              v-model="newProduct.name" 
              label="Nome do Produto" />
          </div>
          <div class="col-2">
            <q-input
              :dense="true" 
              filled
              v-model="newProduct.price"
              label="Preço"
              mask="#.##"
              fill-mask="0"
              reverse-fill-mask
              input-class="text-right"
            />
          </div>

          <div class="col-2">
            <q-btn 
              color="light-green-5"  
              label="Adicionar" 
              @click="addProduct(newProduct)"/>
          </div>
        </div>
      </VBorder>

      <div class="row">
        <template>
          <div class="q-pa-sm">
            <q-table
              color="green"
              card-class="bg-light-green-2"
              row-key="name"
              no-data-label="Nenhum produto cadastrado."
              :data="products"
              :columns="columns">

              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props">
                    {{ props.row.name }}
                  </q-td>

                  <q-td key="price" :props="props">
                    {{ props.row.price }}
                  </q-td>

                  <q-td key="edit" :props="props">
                    <q-btn color="light-green-5" icon="edit" @click="findtoUpdateProduct(props.row.name)"/>
                  </q-td>

                  <q-td key="delete" :props="props">
                    <q-btn color="red-8" icon="delete"  @click="deleteProduct(props.row.name)"/>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </template>
      </div>

      <VBorder v-if="editingProduct">
        <Subtitle :label="'Editar Produto'"/>
        <div class="row q-gutter-sm">
          <div class="col-3">
            <q-input
              :dense="true" 
              filled 
              v-model="editedProdutc.name" 
              label="Nome do Produto" />
          </div>

          <div class="col-2">
            <q-input
              :dense="true" 
              filled
              v-model="editedProdutc.price"
              label="Preço"
              mask="#.##"
              fill-mask="0"
              reverse-fill-mask
              input-class="text-right"
            />
          </div>

          <div class="col-2">
            <q-btn 
              color="light-green-5"  
              label="Editar"
              @click="updateProduct(editedProdutc)"/>
          </div>
        </div>
      </VBorder>

      <div class="row q-gutter-sm q-pl-sm">
        <SimpleCard title="Valor Total" :content="'R$ '+totalSales.toFixed(2)"/>
        <SimpleCard title="Ticket Médio" :content="averageTicket"/>
        <SimpleCard title="Unidades Vendidas" :content="amount"/>
      </div>
    </div>
  </div>
</template>

<script>
import VBorder from 'components/VBorder.vue'
import Subtitle from 'components/Subtitle.vue'
import SimpleCard from 'components/SimpleCard.vue'

export default {
  name: 'PageAdmin',
  components: { VBorder, Subtitle, SimpleCard },
  data(){
    return {
      products:[
        {
          name: 'Paracetamol',
          price: 5.10
        },
        {
          name: 'Alphagan Z',
          price: 51.99
        }
      ],
      columns:[
        {
          name: 'name',
          field: row => row.name,
          align: 'left',
          required: true,
          label: 'Nome',
          sortable: true,
        },
        {
          name: 'price',
          field: row => row.price,
          align: 'right',
          required: true,
          label: 'Preço',
          sortable: true,
        },
        {
          name: 'edit',
          align: 'center',
          required: true,
          label: 'Editar',
        },
        {
          name: 'delete',
          align: 'center',
          required: true,
          label: 'Deletar',
        }
      ],
      sales:[
        {
          product: 'Paracetamol',
          amount: 111,
          seller:  'João Carlos',
          value: 566.1
        },
        {
          product: 'Alphagan Z',
          amount: 8,
          seller:  'João Carlos',
          value: 415.92
        },
        {
          product: 'Paracetamol',
          amount: 20,
          seller:  'Alisson Almagro',
          value: 102
        },
        {
          product: 'Alphagan Z',
          amount: 30,
          seller:  'Alisson Almagro',
          value: 1559.7
        }
      ],
      newProduct:{
        name: '',
        price: null,
      },
      editingProduct: false,
      editedProdutc: {
        name: '',
        price: null,
      },
      user:{},
      totalSales: 0,
      averageTicket: 0,
      amount: 0,
    }
  },

  methods:{
    // Validade and create a new product
    addProduct(newProduct){
      if(newProduct.name.length == 0){
        this.$q.notify({
          message: 'O nome não pode estar vazio!',
          type: 'negative'
        })
      }else if(newProduct.price <= 0){
        console.log("Valor inválido")
        this.$q.notify({
          message: 'O preço dever ser maior que 0!',
          type: 'negative'
        })
      }else if(newProduct.name){
        for(let product of this.products){
          console.log(product.name.toLowerCase(), newProduct.name.toLowerCase())
          if(product.name.toLowerCase() == newProduct.name.toLowerCase()){
            this.$q.notify({
              message: 'Já existe um produto cadastrado com esse nome!',
              type: 'negative'
            })
            return null
          }
        }
        this.$q.notify({
          message: 'Produto cadastrado!',
          type: 'positive'
        })
        this.products.push({name: newProduct.name, price: newProduct.price})
      }
    },

    // Delete product by name
    deleteProduct(productName){
      for(var x = 0; x < this.products.length; x++){
        if (productName == this.products[x].name){
          this.products.splice(x, 1)
          this.$q.notify({
            message: 'O produto foi deletado!',
            type: 'positive'
          })
          return null
        }
      }
    },

    // Find product to be updated
    findtoUpdateProduct(productName){
      for(var x = 0; x<this.products.length; x++){
        if (productName == this.products[x].name){
          this.editedProdutc = JSON.parse(JSON.stringify(this.products[x]))
          this.editedProdutc.index = x
          this.editingProduct = true
          return null
        }
      }
    },

    // Validate and update product
    updateProduct(product){
      console.log(product)
      for(var x = 0; x < this.products.length; x++){
        console.log(this.products[x], x)
        if(product.name == this.products[x].name){
          this.$q.notify({
            message: 'Já existe um produto cadastrado com esse nome!',
            type: 'negative'
          })
          return null
        }
      }

      var index = product.index
      delete product.index

      this.products[index] = product
      this.editingProduct = false

      this.$q.notify({
        message: 'Produto alterado com sucesso!',
        type: 'positive'
      })
    }
  },

  created(){
    // Calculate total sales, units sold and average ticket
    var count = 0
    for(let sale of this.sales){
      this.totalSales = sale.value + this.totalSales
      this.amount = sale.amount
      count++
    }
    this.averageTicket = (this.totalSales/count).toFixed(2)
  }
}
</script>
