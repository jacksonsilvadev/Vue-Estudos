<template>
   <div class="calculator" @onCalcButtonClick="addDigit">
       <Display value="1000" @onCalcButtonClick="addDigit"></Display>
       <Button label="AC" triple @onCalcButtonClick="clearMemory"></Button>
       <Button label="/" operation @onCalcButtonClick="setOperation"></Button>
       <Button label="7" @onCalcButtonClick="addDigit"></Button>
       <Button label="8" @onCalcButtonClick="addDigit"></Button>
       <Button label="9" @onCalcButtonClick="addDigit"></Button>
       <Button label="*" @onCalcButtonClick="setOperation" operation></Button>
       <Button label="4" @onCalcButtonClick="addDigit"></Button>
       <Button label="5" @onCalcButtonClick="addDigit"></Button>
       <Button label="6" @onCalcButtonClick="addDigit"></Button>
       <Button label="-" @onCalcButtonClick="setOperation" operation></Button>
       <Button label="1" @onCalcButtonClick="addDigit"></Button>
       <Button label="2" @onCalcButtonClick="addDigit"></Button>
       <Button label="3" @onCalcButtonClick="addDigit"></Button>
       <Button label="+" @onCalcButtonClick="setOperation" operation></Button>
       <Button label="0" @onCalcButtonClick="addDigit" double></Button>
       <Button label="." @onCalcButtonClick="addDigit"></Button>
       <Button label="=" @onCalcButtonClick="setOperation" operation></Button>
    </div> 
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    components: {
        Display, Button
    },
    methods: {
        clearMemory() {
            console.log('Limpar Memória')
        },
        setOperation (operation) {
            console.log('Operação' + operation)
        },
        addDigit(n) {
            console.log('Digito ' + n)
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
