# Slider Bar

## Installation
1. Clone project.
```bash
git clone https://github.com/cagatayakkus/react-slider-bar.git
```
2. Install required packages.
```bash
npm install
```
3. Open directory and start
```bash
cd react-slider-bar
npm start
```

## Guide

* initValue : number :: Defines the initial value. For example:
  ```javascript
  initValue={45}
  ```
* border : string :: Defines the outer border of the slider bar. For example:
  ```javascript
  border={"1px solid green"}
  ```
* ellipseBorder : string :: Defines the border of the ellipse. For example:
  ```javascript
  ellipseBorder={"1px solid green"}
  ```
* ellipseColor : string :: Defines the color of the ellipse. For example:
  ```javascript
  ellipseColor={"purple"}
  ```  
* lineColor : string :: Defines the color of the value line. For example:
  ```javascript
  lineColor={"green"}
  ```
* valueHandler : function :: Returns the current value of the slider bar. For example:
  ```javascript
  valueHandler={(num) => setValue(Math.round(num))}
  ```
  * PS: setValue does not belong to this project. It is just a simple react state hook to show this property.

## Example

You are going to see something like this when you started the project.

![Alt text](public/images/init.PNG?raw=true "Slider Bar")

From top to bottom:

1. ```javascript
        <SliderBar
          initValue={70}
          valueHandler={(num) => setFirstValue(Math.round(num))}
        />```
2. ```javascript
        <SliderBar
          initValue={50}
          backgroundColor={"blue"}
          lineBorder={"1px solid red"}
          valueHandler={(num) => setSecondValue(Math.round(num))}
        />```
3. ```javascript
        <SliderBar
          initValue={30}
          border={"1px solid green"}
          ellipseBorder={"1px solid green"}
          lineColor={"green"}
          ellipseColor={"purple"}
          valueHandler={(num) => setThirdValue(Math.round(num))}
        />```
4. ```javascript
        <SliderBar
          initValue={20}
          border={"1px solid green"}
          ellipseBorder={"1px solid green"}
          lineColor={"green"}
          ellipseColor={"purple"}
          valueHandler={(num) => setFourthValue(Math.round(num))}
        />```
5. ```javascript
        <SliderBar
          initValue={10}
          border="1px solid green"
          ellipseBorder={"1px solid green"}
          lineColor={"green"}
          ellipseColor={"purple"}
          valueHandler={(num) => setFifthValue(Math.round(num))}
        />```
- - - -       
Thank you for browsing my project.
