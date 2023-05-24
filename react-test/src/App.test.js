import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Card from './component/card';

test('ilk test',()=>{
    const {getAllByRole} = render(<App></App>);

    const ss= getAllByRole("button").map((a)=>{
      expect(a).toBeInTheDocument()
      return {
        Class:a.className,
        Text:a.textContent}
        
    })   
    console.log("/Yüklenenler/",ss)
    
})

test("input", ()=>{
  const {getByPlaceholderText} = render(<App></App>);
  
  const input = getByPlaceholderText("isminiz")
  fireEvent.change(input,{target: {value:"Fatih"}})

  console.log(input.value)
  expect(input.value).toBe("Fatih")
})

test("click",()=>{
  const {getByText}=render(<App></App>);

  let divcolor=document.querySelector(".renkdiv").style.backgroundColor;
  
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
  
  console.log(screen.findAllByRole().then((a)=>{console.log(a)}))

})