![logo-jabuti-grid](https://user-images.githubusercontent.com/33287490/187043270-9d4977a2-83e2-4cb8-9179-d21f68ef7e90.png)


# NGX-JABUTI-GRID

![npm](https://img.shields.io/npm/v/ngx-jabuti-grid)
![NPM](https://img.shields.io/npm/l/ngx-jabuti-grid)

<div style="display: inline_block">
    <img align="center" alt="js" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" /> 
</div>

## How to install

Below are ways to install the library using npm:

```
npm i ngx-jabuti-grid

```

## How to use  properties component
First import the module from the lib in the module you want to use it 
```Jsx
  imports: [
    BrowserModule,
    NgxJabutiGridModule
  ],
```

```jsx

<h3>Jabuti grid one</h3>
<ngx-jabuti-grid [row]="true">
  <ngx-jabuti-grid [column]="true" sm="12" md="4">
    <h1>Column1</h1>
  </ngx-jabuti-grid>
  <ngx-jabuti-grid [column]="true" sm="12" md="4">
    <h1>Column2</h1>
  </ngx-jabuti-grid>
  <ngx-jabuti-grid [column]="true" sm="12" md="4">
    <h1>Column3</h1>
  </ngx-jabuti-grid>

</ngx-jabuti-grid>
<hr>
<h3>Jabuti grid two</h3>
<ngx-jabuti-grid expanded="row expanded">
  <ngx-jabuti-grid [column]="true" sm="12" md="4">
    <h1>Column1</h1>
  </ngx-jabuti-grid>
  <ngx-jabuti-grid [column]="true" sm="12" md="4">
    <h1>Column2</h1>
  </ngx-jabuti-grid>
  <ngx-jabuti-grid [column]="true" sm="12" md="4">
    <h1>Column3</h1>
  </ngx-jabuti-grid>

</ngx-jabuti-grid>
<hr>
<h3>Jabuti grid three</h3>

<ngx-jabuti-grid [row]="true">
  <ngx-jabuti-grid [column]="true" sm="12" md="2">
    <h1>Column1</h1>
  </ngx-jabuti-grid>
  <ngx-jabuti-grid [column]="true" sm="12" md="2">
    <h1>Column2</h1>
  </ngx-jabuti-grid>
  <ngx-jabuti-grid [column]="true" sm="12" md="2">
    <h1>Column3</h1>
  </ngx-jabuti-grid>

</ngx-jabuti-grid>

```
## Result
![grid](https://user-images.githubusercontent.com/33287490/188235964-d52e674d-f474-41f7-8905-e6410c42fd36.PNG)

## Properties


| Props               | type     |  Description                       |
| ------------------- | -------  | ---------------------------------  |
| column              | boolean  |  column  direction                 |
| row                 | boolean  |  row direction                     |
| expanded            | string   |  for maximum width none            |
| lg                  | string   |  for screens higher than 1200px    |
| md                  | string   |  for screens higher than 970px     |
| sm                  | number   |  for screens higher than 768px     |

