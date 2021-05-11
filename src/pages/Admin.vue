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
                    <q-btn color="light-green-5" icon="edit"/>
                  </q-td>

                  <q-td key="delete" :props="props">
                    <q-btn color="red-8" icon="delete" @click="deleteProduct(props.row)"/>
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </template>
        
        <VBorder>
          <div></div>
        </VBorder>
      </div>

      <VBorder>
        <div class="row">
          teste para depois
        </div>
      </VBorder>
    </div>
  </div>
</template>

<script>
import VBorder from 'components/VBorder.vue'
import Subtitle from 'components/Subtitle.vue'

export default {
  name: 'PageAdmin',
  components: { VBorder, Subtitle },
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

      newProduct:{
        name: '',
        price: null,
      },
    }
  },

  methods:{
    deleteProduct(productName){
      // var products = JSON.parse(JSON.stringify(this.products))
      // console.log(products)
      // this.products = products.forEach(function(product, index){
      //   console.log(111111111111)
      //   console.log(productName, product.name, index)
      //   if (productName == product.name){
      //     products.splice(index, 1)
      //     return products
      //   }
      // })
      console.log(productName)
    },

    addProduct(newProduct){
      if(newProduct.name.length == 0){
        console.log("O nome não pode estar vazio")
      }else if(newProduct.price <= 0){
        console.log("Valor inválido")
      }else if(newProduct.name){
        for(var product of this.products){
          if(product.name == newProduct.name){
            console.log(product.name)
            return false
          }
        }
        
        this.products.push({name: newProduct.name, price: newProduct.price})
      }
    }
  }
}
</script>
