import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Card from './component/card';
import { findDOMNode } from 'react-dom';

test('butonlar yüklendimi',()=>{
    const {getAllByRole} = render(<App></App>);

    const ss= getAllByRole("button").map((a)=>{
      expect(a).toBeInTheDocument()
      return {
        Class:a.className,
        Text:a.textContent}
        
    })   
    console.log("/Yüklenenler/",ss)
    
})

test("input doğru çalısıyormu", ()=>{
  const {getByPlaceholderText} = render(<App></App>);
  
  const input = getByPlaceholderText("isminiz")
  fireEvent.change(input,{target: {value:"Fatih"}})

  console.log(input.value)
  expect(input.value).toBe("Fatih")
})

test("click operasyonu testi",()=>{
  const {getByText,container}=render(<App></App>);

  let divcolor=container.querySelector(".renkdiv").style.backgroundColor;
  
  //click durumunda divcolorun rengi değişiyor bunu doğrulayan bir test
  expect(divcolor).toBe("black")
  console.log(divcolor)
  fireEvent.click(getByText("Tıkla"))
  divcolor=document.querySelector(".renkdiv").style.backgroundColor;
  expect(divcolor).toBe("red")
  console.log(divcolor)
  

  
})

test("cardlar yüklendimi",()=>{
  const { container } = render(<App />);
  
  // expect(container.getElementsByClassName("cardlar")).toContainInstanceOf(<Card></Card>)
  // expect(container.querySelector(".cardlar").childElementCount).toBe(4)//içerisinde 4 tane elemnt varmı diye kontrol eder
  expect(container.querySelector(".cardlar")).not.toBeEmptyDOMElement()//içerisinde element varmı yokmu dşye kontrol eder

  
})