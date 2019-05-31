<template>
   <div class="calculator" @onCalcButtonClick="addDigit">
       <Display v-model="displayValue" @onCalcButtonClick="addDigit"></Display>
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
    data() {
        return {
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0
        }
    },
    components: {
        Display, Button
    },
    methods: {
        clearMemory() {
           Object.assign(this.$data, this.$options.data())
        },
        setOperation (operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === '='
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]}  ${currentOperation} ${this.values[1]}`
                        )
                } catch(e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            // Se existir ponto ele retorna falso para não incluir outro
            if(n === '.' && this.displayValue.includes('.')) {
                return
            }
    // o valor do display for 0 ou clearDisplay
            const clearDisplay = this.displayValue === "0" || this.clearDisplay
    // Se o clear display for false retorna o current value como o valor do display Value
            const currentValue = clearDisplay ? '' : this.displayValue
    // Se for tudo ok concatenar o valor 
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false
                this.values[this.current] = displayValue
           
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
