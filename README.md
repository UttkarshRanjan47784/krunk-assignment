# Krunk Assignment

To remove scroll bars (NOTE : You will have to use trackpad, touchscreen or press the mouse scroll wheel to scroll.
) :

1. go to src/index.css and select the following code and press cntrl+/

```
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  height: 3px;
  width: 1px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 2px solid #555555;
}
```

2. Add the below code below the selected code.

```
::-webkit-scrollbar {
  display : none;
}
```
