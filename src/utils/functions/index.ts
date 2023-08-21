import { CalculatorButtonI } from "../../components/CalcButtonList/CalcButtonList";

export const decimalFormatter = (inputValue: string | number = 0, maxLength: number = 10): string => {
    const result = (typeof(inputValue) === 'string' && inputValue.length < maxLength) ? removeDecimals(inputValue) : inputValue?.toString();

    return result;
    
}

export const removeDecimals = (value: string) :string => {
    const splitArray = value?.split('.');
    let result = value;
    if(splitArray.length > 2) {
      result = `${splitArray[0]}.${splitArray.slice(1)?.join('')}`
    } else {
        result = value;
    }
    return result;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sum = (...args: any): number => {
    const result = args.reduce((acc:number, prev: number) => acc + prev, 0);

    return result;
    
}

export const getButtons = (): CalculatorButtonI [] => {
    return [
        {
          type: 'numeric',
          title: '7',
          value: 7
            },
        {
          type: 'numeric',
          title: '8',
          value: 8
        },
        {
          type: 'numeric',
          title: '9',
          value: 9
        },
        {
          type: 'function',
          title: 'x',
          value: '*',
        },
        {
          type: 'numeric',
          title: '4',
          value: 4
        },
        {
          type: 'numeric',
          title: '5',
          value: 5
        },
        {
          type: 'numeric',
          title: '6',
          value: 6
        },
        {
          type: 'function',
          title: '-',
          value: '-',
        },
        {
          type: 'numeric',
          title: '1',
          value: 1
        },
        {
          type: 'numeric',
          title: '2',
          value: 2
        },
        {
          type: 'numeric',
          title: '3',
          value: 3
        },
        {
          type: 'function',
          title: '+',
          value: '+',
        },
        {
          type: 'zero',
          title: '0',
          value: 0
        },
        {
          type: 'separator',
          title: ',',
          value: '.'
        },
        {
          type: 'function',
          title: '/',
          value: '/',
        },
        {
          type: 'reset',
          title: 'CLEAR',
          value: 'reset',
        },
        {
          type: 'deletor',
          title: 'DELETE',
          value: 'delete',
        },

      ]
}

export const getFunctionButtons = (): CalculatorButtonI [] => {

  return getButtons().filter((v:CalculatorButtonI) => v.type === 'function');
   
}

export const isFunctionButton = (val: string| number): boolean => {

 return getFunctionButtons().filter((v:CalculatorButtonI) => v.value === val)?.length > 0;
}