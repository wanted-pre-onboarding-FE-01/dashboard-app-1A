# π©Β νλ‘μ νΈ μμΈ

> πΒ **[Deploy Link](https://dashboard-app-1a.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b4f22e0-2eb5-4fb2-b8f2-1913259f1746/deploy-status)](https://app.netlify.com/sites/fancy-toffee-b37d4a/deploys)

>  πΒ **[Server Link](https://github.com/solchan98/wanted-madup-dashboard-app-1A-backend)**



λ§€λμ μ λ° κ³Όμ λ‘ κ·Έλνλ₯Ό μ΄μ©ν λ§μΌν λ°μ΄ν° μκ°ν νλ‘μ νΈμλλ€.

# βοΈΒ μκ΅¬ μ¬ν­

1. μ μ λ [Figma ](https://www.figma.com/file/4LvAWqkU4ZMcI14MEZzJTx/Madup-X-Wanted-FE-PJT)λμμΈκ³Ό μ½λ©νΈμ λ°λ₯Έ νλ©΄ λ° κΈ°λ₯ κ΅¬ν
2. μμμ μΌλ‘ Fetch νμμ λ§λ€μ΄ λ‘λ©νλ©΄ μ§μ
3. νλ©΄ μ΄λ ν λ³΅κ· μ λ§μ§λ§ μν μ μ§

# π€Β νμ, κΈ°κ°

- νμ : λ°μμ°¬ μ κ°μ μ΄λ€μ¬ μ μ λ―Έ νμ μ
- κΈ°κ° : 2022 / 05 / 22 ~ 2022 / 05 / 26

# βοΈΒ μ¬μ© κΈ°μ , λΌμ΄λΈλ¬λ¦¬

- react , typescript, scss
- react-query
- recoil (μ μ­ μν κ΄λ¦¬)
- victory
- react-datepicker
- react-loading
- dayjs

<details>
  <summary>
<h1>π‘μ€ν λ°©λ²
</h1>
</summary>
  <div markdown="1">

   1. repository clone

        ```bash
        git clone https://github.com/wanted-pre-onboarding-FE-01/dashboard-app-1A.git
        ```
    
2. ν΄λΉ νλ‘μ νΈ ν΄λλ‘ μ΄λ
    
    ```bash
    cd dashboard-app-1A
    ```
    
3. νμ packageλ€ μ€μΉ
    
    ```bash
    npm intall 
    or 
    yarn install
    ```
    
4. νλ‘μ νΈ μ€ν
    
    ```bash
    npm start
    ```
  </div>
</details>

# κ΅¬ν κΈ°λ₯

## λμλ³΄λ νμ΄μ§

### 1. **date picker**

- κ΅¬νμ¬ν­
    - react-datepicker λΌμ΄λΈλ¬λ¦¬λ₯Ό νμ©νμ¬ μ»€μ€ν
    - customHeaderλ₯Ό μΆκ°νμ¬ νμ¬ μ νν(μμ~λ) λ μ§ νμ
    - μ νν λ μ§ μ μ© μ recoil μ μ­ μνλ‘ μ μ₯

### 2. ν΅ν© κ΄κ³  νν©

**2.1. κ΄κ³  νν©**

- κ΅¬νμ¬ν­
  - μ νλ λ μ§μ ν΅ν© μνλ₯Ό μ κ³΅
  - μ νλ λ μ§μ λ°μ΄ν°μ μ΄μ  λ μ§μ λ°μ΄ν°λ₯Ό ν΅ν΄ λΈμΆ λ°μ΄ν° κ³μ°
      - λΉκ΅λ₯Ό ν΅ν΄ μ¦κ°μ¬λΆλ₯Ό νν
  - κ°μ λ¨μμ λ°λ₯Έ Unit λ³ν
      - μλ‘ λ©μΈ κ°μ΄ βμ΅'λ¨μ μΌ λ, μ¦κ° μ¬λΆμ κ° λ¨μκ° βλ§'μΈ κ²½μ° 0.1μ΅ μ΄λ° μμΌλ‘ μΉν
- μ΄λ €μ λ μ 
  - κ°μ λ¨μλ₯Ό ν΅μΌμν€κΈ° μν μ νΈ μμ±μ μν΄ κ³΅ν΅μ μΌμ΄μ€λ₯Ό μ°ΎκΈ°κ° μ΄λ €μ μ
  - μ νλ λ μ§μ λ°μ΄ν°λ₯Ό κ³μ°νλ λΆλΆμ΄ λΉκ΅μ  κΉκΈνμ§ λͺ»ν¨

**2.2. ν΅ν© κ΄κ³  νν© κ·Έλν**

1.  λλ‘­ λ€μ΄

<details>
  <summary>μ£Όκ°/μΌλ³ λ‘ μ νκ°λ₯</summary>
  
- μ£Όκ°
    - μ ν κ°λ₯ν κ²½μ°
        
        7μΌ μ΄νμ κΈ°κ° μ ν μ, κΈ°κ°μ μ ννλ λλ‘­λ€μ΄μ λΉνμ±ν μμΌ μ£Όκ° μ ν λΆκ°
        
    - κ΅¬ν λ°©λ²
        
        > λμΌ μ£Όμ°¨μ νκ· μ κ΅¬νμ¬ μ£Όμ°¨ λ³λ‘ λ°ν
        > 
        
        1. μ νν λ μ§λ€μ΄ ν΄λΉνλ μμ μ£Όμ°¨(nμ nμ£Ό)λ₯Ό κ΅¬ν¨

        2. λμΌν μ£Όμ ν΄λΉνλ λ μ§λ€μ κ°―μλ₯Ό κ΅¬νκ³  λ°μ΄ν°λ λͺ¨λ λν ν `ν΄λΉ μ£Όμ°¨μ λ°μ΄ν° μ΄ν©/ν΄λΉ μ£Όμ°¨μ λ μ§ μ΄ κ°―μ`λ₯Ό λ°ννμ¬ μ£Όμ°¨λ³ νκ· μ λ°ν
- μΌλ³
    
    μ νν κΈ°κ°μ λͺ¨λ  λ°μ΄ν°λ₯Ό μΌλ³λ‘ λ³΄μ¬μ£Όλ xμΆμ κΈ°λ³Έμ μΌλ‘ `tickCount` κ° 7λ‘ μ€μ λμ΄ μ€μ  μ¬μ΄νΈμ λμΌν xμΆμ κ°―μ μΆν

</details>

<details>
  <summary>μ ν μ λ°νν  λ°μ΄ν° κ³μ°</summary>
<br/>
  
> 3κ°μ§μ λλ‘­λ€μ΄μμ μ΅μμ μ ννλ©΄ ν΄λΉ μ΅μμ λνμ¬ κ·Έλνμ κ·Έλ €μ€ λ°μ΄ν°  κ°κ³΅
> 
  
λ¨μ κ° (%, μ, ν), κ·Έλνμ λ³΄μ¬μ€ λ°μ΄ν° λ°°μ΄, yμΆ κ° (yκ° μ€μ μ΅λκ°) λ±
  
```tsx
const formatReturnData = (unitVal: string, integratedAdInfo: IDay[], btn: Btn, periodOption: PeriodOptions) => {
  const formatedData =
    periodOption === 'μΌκ°' ? convertDailyData(integratedAdInfo, btn) : convertWeeklyData(integratedAdInfo, btn);
  return {
    unit: unitVal,
    formatedData,
    maxValue: formatedData && Math.max(...formatedData.map((obj: IFormatedData) => obj.y)),
  };
};

export const convertData = (integratedAdInfo: IDay[], btnOption: PrimaryOptions, periodOption: PeriodOptions) => {
  if (btnOption === 'ROAS') return formatReturnData('%', integratedAdInfo, 'roas', periodOption);
  if (btnOption === 'κ΄κ³ λΉ') return formatReturnData('μ', integratedAdInfo, 'cost', periodOption);
  if (btnOption === 'ν΄λ¦­ μ') return formatReturnData('ν', integratedAdInfo, 'click', periodOption);
  if (btnOption === 'λΈμΆ μ') return formatReturnData('ν', integratedAdInfo, 'imp', periodOption);
  if (btnOption === 'λ§€μΆ') return formatReturnData('μ', integratedAdInfo, 'convValue', periodOption);
  if (btnOption === 'μ ν μ') return formatReturnData('ν', integratedAdInfo, ['cvr', 'click'], periodOption);
  return undefined;
};
```
</details>

<details>
  <summary>μ²« λ²μ§Έ λλ‘­λ€μ΄μμ μ νν μ§νλ₯Ό λλ²μ§Έ λλ‘­λ€μ΄(μ΅μλ)μμ μ ν λΆκ°</summary>

`filter` λ₯Ό νμ©ν΄μ μ μ
  
</details>

<details>
  <summary>2κ°μ§ λλ‘­λ€μ΄μ΄ λͺ¨λ μ νλ  κ²½μ°, κ·Έλν μ°μΈ‘μ y2 λκΈμ μ κ³΅</summary>

y2μΆμ ν λΉν  `VictoryAxis`μ `VictoryLine` λ₯Ό keyλ‘ μ°κ²°νμ¬ μΆνμν΄
</details>

2. κ·Έλν
<details>
  <summary>μ«μ λ¨μ λ³ν</summary>

- κ°μ΄ 1λ§ μ΄νμΌ κ²½μ°
    
    λ°μ¬λ¦ΌμΌλ‘ μμμ  μ κ±° ν, μ² λ¨μλ§λ€ μ½€λ§(`,`) νμ±
    
- κ°μ΄ 1λ§~1μ‘° μΌ κ²½μ°
    
    νκΈ λ¨μλ‘ λ³ν (ex. 5λ°±λ§μ)
```tsx
export const convertNumToUnit = (num: number) => {
  if (num < 10000) {
    return Math.round(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const transUnit = [
    { value: 1e12, symbol: 'μ‘°' },
    { value: 1e11, symbol: 'μ²μ΅' },
    { value: 1e10, symbol: 'λ°±μ΅' },
    { value: 1e9, symbol: 'μ­μ΅' },
    { value: 1e8, symbol: 'μ΅' },
    { value: 1e7, symbol: 'μ²λ§' },
    { value: 1e6, symbol: 'λ°±λ§' },
    { value: 1e5, symbol: 'μ­λ§' },
    { value: 1e4, symbol: 'λ§' },
    { value: 1e3, symbol: 'μ²' },
  ];
  let i;
  for (i = 0; i < transUnit.length; i += 1) {
    if (num >= transUnit[i].value) {
      return (num / transUnit[i].value).toFixed(1).replace(/\.?0+$/, '') + transUnit[i].symbol;
    }
  }
  return num;
};
```
</details>
        
<details>
  <summary>ν΄ν μ κ³΅</summary>

κ·Έλνμ μ μ hoverνλ©΄ ν΄ν νμΈ κ°λ₯
</details>

### 3. λ§€μ²΄ νν©

**3.1. λ§€μ²΄ νν© κ·Έλν**

[https://user-images.githubusercontent.com/79626675/170167392-a557045c-2612-4e9a-a3b2-2b96f94e690e.mov](https://user-images.githubusercontent.com/79626675/170167392-a557045c-2612-4e9a-a3b2-2b96f94e690e.mov)

- κ΅¬ν μ¬ν­
  - `service/fetchMediaChannelData` : μ νλ λ μ§μ ν΄λΉνλ λ°μ΄ν° api νΈμΆ
  - `util/formatMediaChannelGraph` : λ°νλ λ°μ΄ν°λ₯Ό κ·Έλν νμμ λ§κ² κ³μ°νμ¬ λ°ν
  - μμμ  3μλ¦¬λ²λ¦Ό
  - κ° ν­λͺ© λ³ κ° tooltipμ νμ
  - κ·Έλν λ λλ§ μ μ λλ©μ΄μ
    
- μ΄λ €μ λ μ 
  - yμΆ ν­λͺ©λ€μ λμ  κ°μ κ΅¬ν ν μ μ²΄ λ°μ΄ν°μ ν΄λΉνλ λΉμ¨μ κ³μ°νλ κ²,
  - ν΄νμλ λΉμ¨μ΄ μλ μ€μ  λ°μ΄ν° κ°μ λ£λ κ²μ΄ λ³΅μ‘νλ€.

**3.2. λ§€μ²΄ νν© νμ΄λΈ μ°¨νΈ** 

- κ΅¬ν μ¬ν­
  - `util/formatMediaChannelTableData` λ‘λΆν° μ λ¬λ°μ λ°μ΄ν°λ₯Ό λ λλ§
  - λͺ¨λν° ν¬κΈ°μ λ°λ₯Έ ν‘μ€ν¬λ‘€ μ½μ

## κ΄κ³ κ΄λ¦¬ νμ΄μ§
### 1. κ΄κ³  λ°μ΄ν° λ λλ§
https://user-images.githubusercontent.com/71131248/170404198-9055927d-e6c7-4297-997e-1c4f067ec4e3.mov
- κ΅¬ν μ¬ν­
  - react-queryλ₯Ό μ΄μ©ν΄ λ°μ΄ν°λ₯Ό λ°μμ¨ ν, ν΄λΉ λ°μ΄ν° λ λλ§.
  - λ°μ μ¨ λ°μ΄ν°λ₯Ό λλ‘­λ€μ΄μ ν΄λ¦­ν item κ°μ λ§κ² νν°λ§.
